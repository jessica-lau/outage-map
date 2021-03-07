import SignUp from "../../pages/elements/signup";
import errorMessages from "../../fixtures/errorMessages.json";
import emailAndPassword from "../../fixtures/emailAndPassword.json";

describe("If You Can Move sign up page", () => {
  const signup = new SignUp();

  context(
    "User tries to create account on Sign Up page with invalid credentials",
    () => {
      beforeEach(() => {
        signup.visit();
      });

      it("User can view welcome content", () => {
        signup
          .getWelcomeSection()
          .should("contain", "Sign up and become part of the MOVE community.")
          .and("contain", "Already a member? Login instead.");
      });

      it("Login button is visible and clickable", () => {
        signup.getLoginButton().should("be.visible").click();
      });

      it("User can view content on create account form", () => {
        signup
          .getCreateAccountForm()
          .should("contain", "Create an Account")
          .and("contain", "Challenge sign up requires a valid credit card.")
          .and(
            "contain",
            "Subscription FREE 7 Day Trial requires a valid credit card."
          )
          .and("contain", "Requires email verification.");
      });

      it("User leaves name, email, password fields blank triggers an error", () => {
        signup.getJoinNowButton().should("be.visible").click();
        var badEmail = signup.getCreateAccountForm();
        badEmail.should("be.visible");
        badEmail.contains("div", errorMessages.invalidEmail);
      });

      it("User leaves email field blank triggers an error", () => {
        signup.getNameField().type("Jane").focus().blur();
        signup
          .getPasswordField()
          .type(emailAndPassword.validPassword)
          .focus()
          .blur();
        signup.getJoinNowButton().should("be.visible").click();
        var badEmail = signup.getCreateAccountForm();
        badEmail.should("be.visible");
        badEmail.contains("div", errorMessages.invalidEmail);
      });

      it("User leaves password field blank triggers an error", () => {
        signup.getNameField().type("Jane").focus().blur();
        signup
          .getEmailField()
          .type(emailAndPassword.validDummyEmail)
          .focus()
          .blur();
        signup.getJoinNowButton().should("be.visible").click();
        var badPassword = signup.getCreateAccountForm();
        badPassword.should("be.visible");
        badPassword.contains("div", errorMessages.passwordLengthRequired);
      });

      it("User types an invalid email triggers an error", () => {
        signup.getNameField().type("Jane").focus().blur();
        signup
          .getEmailField()
          .type(emailAndPassword.invalidEmail)
          .focus()
          .blur();
        signup
          .getPasswordField()
          .type(emailAndPassword.validPassword)
          .focus()
          .blur();
        signup.getJoinNowButton().should("be.visible").click();
        var badEmail = signup.getCreateAccountForm();
        badEmail.should("be.visible");
        badEmail.contains("div", errorMessages.invalidEmail);
      });

      it("User types a password not meeting minimum criteria triggers an error", () => {
        signup.getNameField().type("Jane").focus().blur();
        signup
          .getEmailField()
          .type(emailAndPassword.validDummyEmail)
          .focus()
          .blur();
        signup
          .getPasswordField()
          .type(emailAndPassword.invalidPassword)
          .focus()
          .blur();
        signup.getJoinNowButton().should("be.visible").click();
        var badPassword = signup.getCreateAccountForm();
        badPassword.should("be.visible");
        badPassword.contains("div", errorMessages.minimumPasswordLength);
      });
    }
  );

  //Skipped below testcase to avoid creating new accounts everytime tests are ran
  //Name field on website is marked with an asterisk indicating it's require but user can leave field blank and create account.
  //Added potential name validation message which will cause last testcase below to fail until correction is implemented on website.

  context("User creates account on Sign Up page with valid credentials", () => {
    beforeEach(() => {
      signup.visit();
    });

    it.skip("User types in valid info for name, email, and password fields will allow user to create account", () => {
      signup.getNameField().type("Jane").focus().blur();
      cy.generateRandomEmail(8, 8).then((email) => {
        signup.getEmailField().type("testemail" + email);
      });
      signup
        .getPasswordField()
        .type(emailAndPassword.validPassword)
        .focus()
        .blur();
      signup.getJoinNowButton().should("be.visible").click();
      cy.get(".header > ul > div > label").eq(4).click();
    });

    it.skip("User leaves name field blank will allow user to create account", () => {
      cy.generateRandomEmail(8, 8).then((email) => {
        signup.getEmailField().type("testemail" + email);
      });
      signup
        .getPasswordField()
        .type(emailAndPassword.validPassword)
        .focus()
        .blur();
      signup.getJoinNowButton().should("be.visible").click();
      var badName = signup.getCreateAccountForm();
      badName.should("be.visible");
      badName.contains("div", errorMessages.nameRequired);
    });
  });
});
