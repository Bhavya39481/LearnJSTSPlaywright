# Salesforce Login Test Plan

| Field | Value |
| --- | --- |
| Test Plan ID | TP-SF-LOGIN-001 (locally assigned) |
| Version | 0.1 |
| Status | Draft; approval pending |
| Prepared | 2026-10-03 |
| Application | Salesforce CRM login |
| Feature | Username/password authentication and required-field handling |

## 1. Test Plan ID and Title

**TP-SF-LOGIN-001: Salesforce Login Test Plan**

This is a provisional plan for the three login scenarios selected during planning. The plan is not authorization to access or test a Salesforce production org. Execution is blocked until the target environment, authorization, test data, and expected outcomes are confirmed.

## 2. Objective and References

### Objective

Define a controlled, repeatable approach to assess valid login, invalid-credential rejection, and required-field handling on the Salesforce login page. Record results against approved acceptance criteria; do not infer success from an unverified page transition or message.

### References

- `01-RICE_POT_Prompt.md`: identifies `https://login.salesforce.com/?locale=in` and describes valid/invalid login automation. Its example locators and behavior have not been established as current requirements.
- `02_Problem_Statement.md`: requests a Selenium, Java, TestNG, and Maven framework for Salesforce; it contains no login acceptance criteria.
- `04_RICE_POT_Generic_QA_Template.md`: Test Plan profile and required plan structure.
- Salesforce product requirements and approved environment-specific behavior: Not provided.

The URL above is a source reference, not confirmation that production testing is authorized or that it is the correct target for this plan.

## 3. In Scope and Out of Scope

### In scope

- Valid credentials for an approved active test account.
- Invalid credentials using an approved negative-test account/data approach.
- Submission with required username and/or password fields blank.
- Browser functional validation on Chrome for Windows, as selected during planning.

### Out of scope

- Remember Me behavior.
- Malformed identifiers and other input-boundary cases.
- MFA, SSO, password reset, account lockout, and rate-limit testing.
- Mobile devices, other browsers/operating systems, performance, penetration, and broad accessibility testing.
- Creating or executing automation scripts as part of this plan document.

Any scope addition requires review of test data, authorization, acceptance criteria, and schedule.

## 4. Requirements and Planned Coverage

No authoritative requirement IDs or acceptance criteria were supplied. The IDs below are local plan tracking IDs, not Salesforce requirement IDs. Exact expected UI outcomes remain **Not provided** and must be approved before test execution.

| Plan ID | Scenario | Type | Requirement trace | Planned verification | Expected result/oracle |
| --- | --- | --- | --- | --- | --- |
| PL-SF-LOGIN-01 | Submit valid credentials for an approved active account | Positive functional | Requirement ID: Not provided | Attempt authentication in the approved environment and observe the resulting authenticated state | Not provided; product owner must define the observable authenticated state and any permitted redirect |
| PL-SF-LOGIN-02 | Submit invalid credentials using an approved negative-test approach | Negative functional | Requirement ID: Not provided | Attempt authentication and confirm the result against the agreed unauthenticated-state oracle | Not provided; approved error/validation behavior and any lockout-safe data policy must be defined |
| PL-SF-LOGIN-03 | Submit with required username and/or password fields blank | Negative functional | Requirement ID: Not provided | Exercise each agreed blank-field combination and observe validation and authentication state | Not provided; required combinations, validation behavior, and no-session expectation must be confirmed |

Coverage is limited to these three scenario groups. Case-level combinations and counts cannot be finalized until acceptance criteria are supplied.

## 5. Test Approach, Levels, and Types

- **Primary level:** End-to-end browser functional testing of the login experience.
- **Test types:** Positive functional and negative functional testing for the three in-scope scenario groups.
- **Target platform:** Chrome on Windows. Exact browser and operating-system versions are Not provided and must be recorded for each run.
- **Proposed automation:** Reuse the existing Selenium Java/Maven/TestNG project for repeatable browser checks, subject to confirming it is compatible with the approved environment and current login flow. The project configuration lists Java release 11, Selenium 4.27.0, and TestNG 7.10.2; the actual runtime/browser/driver combination must be verified before execution.
- **Manual support:** Use an authorized human review only for environment setup or challenge flows that are outside this plan. Do not bypass MFA, CAPTCHA, or security controls.
- **Evidence:** Record scenario ID, environment, browser/version, timestamp, test-data reference without secrets, observed result, status, and defect reference when applicable. Do not capture or log passwords, tokens, or unnecessary personal data.
- **No execution claim:** This document is a plan. No test results are asserted here.

## 6. Environment, Tools, Access, and Test Data

| Item | Current value or prerequisite |
| --- | --- |
| Environment | Not provided; sandbox versus production is unresolved |
| Candidate URL | `https://login.salesforce.com/?locale=in` from the source prompt; target approval and authorization are required |
| Browser/OS | Chrome on Windows; exact versions Not provided |
| Automation stack | Existing Maven project with Selenium Java and TestNG; configured versions are listed in Section 5 |
| Access authorization | Not provided; written authorization and an approved target are required before testing |
| Valid account | Not decided; an approved active test account must be provisioned |
| Invalid test data | Not decided; use an approved negative-test method that cannot affect a real user's account or trigger unintended lockout |
| Blank-field data | Synthetic empty input; do not use personal or production credentials |
| Secrets | Supply only through an approved secret mechanism at execution time; never commit, include in reports, or print secrets |
| MFA/SSO/security challenges | Behavior and test-account policy Not provided; these flows are out of scope and must not be bypassed |
| Salesforce page variants | Source prompt mentions A/B testing, but current variants and supported behavior are unverified; record the observed variant and obtain an oracle before interpreting differences |
| Test data reset and account lockout policy | Not provided; Salesforce administrator must define safe limits and recovery steps |

## 7. Entry and Exit Criteria

The criteria below are proposals for review, not approved release gates.

### Proposed entry criteria

1. Product owner and Salesforce administrator approve the environment, URL, and written test authorization.
2. Authoritative acceptance criteria define the observable result for each of the three scenario groups, including the unauthenticated state and blank-field behavior.
3. An approved active test account and a safe invalid-credential strategy are available; account lockout limits and reset ownership are documented.
4. MFA, SSO, CAPTCHA, bot protection, and any A/B variants are either documented for the approved test account or confirmed not to block the agreed scenarios. No security control is bypassed.
5. Chrome/Windows versions, Java runtime, Selenium/driver compatibility, and test configuration are verified in the approved environment.
6. Test data, evidence handling, defect tracker, owners, and execution window are agreed.

### Proposed exit criteria

1. All three in-scope scenario groups have an execution record: 3 of 3 executed, or each unexecuted item has an explicit blocker and owner.
2. Every executed result is evaluated against an approved oracle; no result is marked Passed while acceptance criteria are missing or ambiguous.
3. All failures are logged and triaged. Proposed threshold: zero open release-blocking login defects; remaining defects require documented risk acceptance by the designated product owner. Severity definitions and approver are Not provided.
4. Evidence contains no credentials or secrets, and the run summary, deviations, blocked items, and residual risks are reviewed by QA and the designated approver.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role | Responsibility | Named owner / estimate |
| --- | --- | --- |
| Product owner | Supply and approve login acceptance criteria, expected outcomes, scope, and residual-risk decisions | Not provided |
| Salesforce administrator | Approve target/access; provision and recover test accounts; define safe lockout/reset policy | Not provided |
| QA engineer / test lead | Finalize cases, confirm setup, execute or coordinate approved tests, record evidence, and report defects | Not provided |
| Automation engineer | Verify the existing Selenium project against the approved target and maintain applicable automated checks | Not provided |
| Developer / support contact | Investigate and resolve confirmed defects | Not provided |

Schedule, effort estimate, execution window, and reporting cadence are Not provided. Estimate these after environment and account prerequisites are confirmed.

## 9. Defect Management and Reporting

- Log each reproducible failure in the team-approved defect tracker; tracker and workflow are Not provided.
- Include a concise title, plan/scenario ID, environment and browser versions, preconditions, sanitized test-data reference, reproduction steps, expected result linked to an approved criterion, actual result, timestamp, evidence, and severity/priority.
- Never attach credentials, session cookies, access tokens, or unredacted sensitive data.
- Triage severity and priority using the team's approved definitions. Those definitions, defect owner, and triage cadence are Not provided.
- Report executed, passed, failed, blocked, and not-run scenario counts separately. Do not count blocked or unexecuted scenarios as passed.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks and dependencies

- The only named endpoint is the public Salesforce login host; testing it without explicit authorization and a controlled test account could affect real accounts or trigger security protections.
- Missing acceptance criteria make pass/fail decisions indeterminate.
- MFA, SSO, CAPTCHA, rate limiting, account lockout, and A/B variants may prevent or alter the expected flow.
- Invalid-credential attempts can cause lockout or alerting if the account/data policy is not controlled.
- Browser and driver version mismatch may cause execution failures unrelated to application behavior.

### Assumptions

- The three scenario groups selected during planning represent the intended initial scope.
- Chrome on Windows is the only initial platform target.
- Selenium Java/Maven/TestNG is the proposed execution stack because it is named in the source materials and already exists in the workspace.
- These are planning assumptions only; they do not establish Salesforce product behavior or authorize testing.

### Open questions / blocking inputs

1. Is the target a sandbox/test org or production, and what exact approved URL should be used?
2. Who provides written authorization and access approval?
3. What are the authoritative requirement IDs and exact expected outcomes for valid login, invalid credentials, and each blank-field combination?
4. Who provisions the active account and approves the invalid-credential method, lockout limits, and reset process?
5. What MFA/SSO, CAPTCHA, bot-protection, and A/B-variant behavior applies to the test account?
6. What browser/OS versions, defect tracker, severity scheme, owners, schedule, and approval roles are required?

## 11. Suspension and Resumption Criteria

### Suspend testing when

- The target environment or authorization cannot be confirmed.
- A test may affect a real user, production data, account lockout, security alerting, or service availability beyond the approved limits.
- MFA, CAPTCHA, bot protection, unexpected A/B behavior, or a redirect changes the agreed flow or would require bypassing a control.
- The environment is unavailable or unstable, test data is invalid, or expected outcomes remain ambiguous.
- Credentials or other sensitive data are exposed in logs, screenshots, or reports; contain the exposure according to the organization's security process before continuing.

### Resume only when

- The authorized environment and safe test data are restored and confirmed.
- The responsible administrator/product owner resolves the blocker and approves the next attempt.
- Acceptance criteria, execution limits, and evidence handling are clear; exposed secrets, if any, have been rotated or otherwise handled under policy.

## 12. Test Deliverables and Approval

### Deliverables

- This provisional test plan.
- Approved scenario-level test cases and requirement traceability after acceptance criteria are supplied.
- Execution summary with evidence references, defect list, blocked/not-run items, and residual risks after authorized execution.

### Approval

| Approver | Name | Decision / date |
| --- | --- | --- |
| Product owner | Not provided | Pending |
| QA lead | Not provided | Pending |
| Salesforce administrator / environment owner | Not provided | Pending |

Approval of this outline is not approval to access or test a Salesforce environment. Execution approval must be obtained from the designated environment owner.
