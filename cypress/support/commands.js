import { createUser } from "../fixtures/results.json";

Cypress.Commands.add("listUsers", () => {
  cy.request({
    url: `${Cypress.env("baseUrl")}/api/users?page=2`,
    followRedirect: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("createUser", () => {
  cy.request({
    //url: `${Cypress.config("baseUrl")}/api/users?page=2`,
    method: "Post",
    url : "https://reqres.in/api/users",
    body: createUser,
    followRedirect: false,
  }).then((response) => {
    return response;
  });
});