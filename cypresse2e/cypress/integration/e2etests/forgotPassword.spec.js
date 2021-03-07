import ForgotPassword from "../../pages/elements/forgotPassword";
import emailAndPassword from "../../fixtures/emailAndPassword.json";
import errorMessages from "../../fixtures/errorMessages";

describe("If You Can Move Forgot Password page", () => {
  const forgotPassword = new ForgotPassword();

  context("User resets password for login", () => {
    beforeEach(() => {
      forgotPassword.visit();
    });

    it("User can view forgot password text on forgot password page", () => {
      forgotPassword
        .getResetPasswordCard()
        .should("contain", "Forgot your password?")
        .and(
          "contain",
          "Enter your email below and we can send you a reset link."
        );
    });

    it("User can enter an email and click the Reset Password button to reset password", () => {
      forgotPassword.getInputField().type(emailAndPassword.validDummyEmail);
      forgotPassword.getResetPasswordButton().should("be.visible").click();
    });

    //Set below tests to skip.
    //User can currently submit the reset password form even though the email field is left blank or has an invalid email. User should not be allowed to do this.
    //Added potential email validation messages which will cause testcases below to fail until correction is implemented on website.

    it.skip("User leaves email field blank will trigger error message", () => {
      forgotPassword.getResetPasswordButton().should("be.visible").click();
      var badEmail = forgotPassword.getResetPasswordCard();
      badEmail.should("be.visible");
      badEmail.should("contain", errorMessages.invalidEmail);
    });

    it.skip("User type an invalid email will trigger error message", () => {
      forgotPassword.getInputField().type(emailAndPassword.invalidEmail);
      forgotPassword.getResetPasswordButton().should("be.visible").click();
      var badEmail = forgotPassword.getResetPasswordCard();
      badEmail.should("be.visible");
      badEmail.should("contain", errorMessages.invalidEmail);
    });
  });
});
