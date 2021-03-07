import Login from "../../pages/elements/login/";
import emailAndPassword from "../../fixtures/emailAndPassword.json";
import errorMessages from "../../fixtures/errorMessages";

describe("If You Can Move Login page", () => {
  const login = new Login();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  context("User logs into account", () => {
    beforeEach(() => {
      login.visit();
    });

    it("User can view sign up text on login page", () => {
      login
        .getSignUpText()
        .should("contain", "Welcome Back!")
        .and("contain", "Not a member? Sign Up instead.");
    });

    it("Sign Up button on login page is viewable and clickable", () => {
      login.getSignUpButton().should("be.visible").click();
    });

    it("User can view login text on login page", () => {
      login
        .getLoginCard()
        .should("contain", "Login")
        .and(
          "contain",
          "* If you are not an existing MOVE member, please create an account by going to the Sign Up page. "
        );
    });

    it("Forgot Password link is visible and clickable", () => {
      login.getForgotPassword().should("be.visible").click();
    });

    it("User types a non-existent email triggers an error", () => {
      login
        .getEmailField()
        .type(emailAndPassword.validDummyEmail)
        .focus()
        .blur();
      login
        .getPasswordField()
        .type(emailAndPassword.validPassword)
        .focus()
        .blur();
      login.getLoginButton().should("be.visible").click();
      var badEmail = login.getErrorMessage();
      badEmail.should("be.visible");
      badEmail.should("contain", errorMessages.nonExistentEmail);
    });

    it("User types an incorrect password with a valid email triggers an error", () => {
      login.getEmailField().type(emailAndPassword.validEmail).focus().blur();
      login
        .getPasswordField()
        .type(emailAndPassword.invalidPassword)
        .focus()
        .blur();
      login.getLoginButton().should("be.visible").click();
      var badPassword = login.getErrorMessage();
      badPassword.should("be.visible");
      badPassword.should("contain", errorMessages.incorrectPassword);
    });

    it("User can login with valid crendentials", () => {
      login.getEmailField().type(emailAndPassword.validEmail);
      login.getPasswordField().type(emailAndPassword.validPasswordTwo);
      login.getLoginButton().should("be.visible").click();
    });
  });
});
