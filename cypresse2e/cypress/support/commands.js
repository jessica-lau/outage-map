// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

export const randomString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

Cypress.Commands.add("generateRandomEmail", (num1, num2) => {
  return randomString(num1) + "@" + randomString(num2) + ".com";
});

Cypress.Commands.add("SignIn", () => {
  cy.visit("/signin");

  const emailField = "form input";
  const passwordField = "form input";
  const loginBtn = "#btnLogin";

  cy.get(emailField).eq(0).type("a@mentorem.com");
  cy.get(passwordField).eq(1).type("mentorem");
  cy.get(loginBtn).click();
  cy.wait(2000);
  cy.setCookie("foo", "bar");
});

Cypress.Commands.add("SignInTwo", () => {
  cy.visit("/signin");

  const emailField = "form input";
  const passwordField = "form input";
  const loginBtn = "#btnLogin";

  cy.get(emailField).eq(0).type("samplemail.qa@gmail.com");
  cy.get(passwordField).eq(1).type("mentorem");
  cy.get(loginBtn).click();
  cy.wait(2000);
  cy.setCookie("foo", "bar");
});
