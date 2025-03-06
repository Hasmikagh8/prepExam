import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the main page", () => {
  cy.visit(Cypress.env("globalUrl"));
});

When("When I go to Login page", () => {
  cy.get("a[href='/login']").click();
});

Then("I should go to Login page", () => {
  cy.url().should("include", "login");
});

When("I fill in valid Name and Email fields of Submit form", () => {
  cy.get('input[name="name"]').type("Testname9888888");
  cy.get('input[data-qa="signup-email"]').type("test@example12333333.com");
});

When("Click on Signup", () => {
  cy.get('button[data-qa="signup-button"]').click();
});

Then("We should be moved to signup page", () => {
  cy.url().should("include", "signup");
});
