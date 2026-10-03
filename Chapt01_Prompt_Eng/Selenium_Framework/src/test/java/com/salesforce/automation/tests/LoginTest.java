package com.salesforce.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.SkipException;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.salesforce.automation.pages.LoginPage;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

public class LoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeTest
    public void setUp() {
        try {
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            loginPage = new LoginPage(driver);
        } catch (WebDriverException exception) {
            closeDriver();
            throw new IllegalStateException("Unable to initialize the Chrome WebDriver", exception);
        }
    }

    @BeforeMethod
    public void openLoginPage() {
        try {
            driver.manage().deleteAllCookies();
            loginPage.open();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to prepare the Salesforce login page", exception);
        }
    }

    @Test(priority = 1)
    public void validCredentialsCanLogInAndRememberMeCanBeSelected() {
        String username = System.getenv("SALESFORCE_USERNAME");
        String password = System.getenv("SALESFORCE_PASSWORD");
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new SkipException("Set SALESFORCE_USERNAME and SALESFORCE_PASSWORD to run the valid login test");
        }

        try {
            loginPage.selectRememberMe();
            assertTrue(loginPage.isRememberMeSelected(), "Remember Me should be selected");
            loginPage.login(username, password);
            assertTrue(loginPage.hasAuthenticatedRedirect(), "Valid credentials should redirect out of the login page");
        } catch (IllegalStateException | WebDriverException exception) {
            throw new AssertionError("Valid Salesforce login flow failed", exception);
        }
    }

    @Test(priority = 2)
    public void invalidCredentialsDisplayAnError() {
        try {
            loginPage.login("invalid.user@example.invalid", "InvalidPassword-123!");
            assertFalse(loginPage.getLoginErrorText().isBlank(), "Invalid credentials should display a login error");
        } catch (IllegalStateException | WebDriverException exception) {
            throw new AssertionError("Invalid Salesforce login flow failed", exception);
        }
    }

    @AfterTest(alwaysRun = true)
    public void tearDown() {
        closeDriver();
    }

    private void closeDriver() {
        if (driver != null) {
            try {
                driver.quit();
            } catch (WebDriverException exception) {
                driver = null;
                throw new IllegalStateException("Unable to close the Chrome WebDriver", exception);
            }
            driver = null;
        }
    }
}