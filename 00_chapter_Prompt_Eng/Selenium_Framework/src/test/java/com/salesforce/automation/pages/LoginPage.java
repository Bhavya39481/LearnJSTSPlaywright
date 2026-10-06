package com.salesforce.automation.pages;

import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private static final String LOGIN_URL = "https://login.salesforce.com/?locale=in";
    private static final Duration WAIT_TIMEOUT = Duration.ofSeconds(20);

    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMe;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement loginError;

    public LoginPage(WebDriver driver) {
        if (driver == null) {
            throw new IllegalArgumentException("WebDriver must not be null");
        }
        this.driver = driver;
        this.wait = new WebDriverWait(driver, WAIT_TIMEOUT);
        PageFactory.initElements(driver, this);
    }

    public void open() {
        try {
            driver.get(LOGIN_URL);
            wait.until(ExpectedConditions.visibilityOf(username));
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to open the Salesforce login page", exception);
        }
    }

    public void selectRememberMe() {
        try {
            WebElement checkbox = wait.until(ExpectedConditions.elementToBeClickable(rememberMe));
            if (!checkbox.isSelected()) {
                checkbox.click();
            }
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to select Remember Me", exception);
        }
    }

    public boolean isRememberMeSelected() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(rememberMe)).isSelected();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to read Remember Me selection", exception);
        }
    }

    public void login(String user, String pass) {
        if (user == null || user.isBlank() || pass == null || pass.isBlank()) {
            throw new IllegalArgumentException("Username and password must not be blank");
        }

        try {
            wait.until(ExpectedConditions.visibilityOf(username)).clear();
            username.sendKeys(user);

            if (!isPasswordFieldVisible()) {
                wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
                wait.until(currentDriver -> isPasswordFieldVisible() || isLoginErrorVisible(currentDriver));
            }

            if (isLoginErrorVisible(driver)) {
                return;
            }

            wait.until(ExpectedConditions.visibilityOf(password));
            password.sendKeys(pass);
            wait.until(ExpectedConditions.elementToBeClickable(loginButton)).click();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Unable to submit Salesforce login credentials", exception);
        }
    }

    private boolean isPasswordFieldVisible() {
        List<WebElement> passwordFields = driver.findElements(By.xpath("//input[@id='password']"));
        return passwordFields.stream().anyMatch(WebElement::isDisplayed);
    }

    private boolean isLoginErrorVisible(WebDriver currentDriver) {
        List<WebElement> errors = currentDriver.findElements(By.xpath("//div[@id='error']"));
        return errors.stream().anyMatch(WebElement::isDisplayed);
    }

    public boolean hasAuthenticatedRedirect() {
        try {
            return wait.until(currentDriver -> !currentDriver.getCurrentUrl().contains("login.salesforce.com"));
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Salesforce did not redirect after login", exception);
        }
    }

    public String getLoginErrorText() {
        try {
            return wait.until(ExpectedConditions.visibilityOf(loginError)).getText().trim();
        } catch (WebDriverException exception) {
            throw new IllegalStateException("Salesforce login error was not displayed", exception);
        }
    }
}