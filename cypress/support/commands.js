//import { resultJson } from "../fixtures/results.json";

Cypress.Commands.add("getProduct", () => {
  cy.request({
    url: `${Cypress.env("globalUrl")}/api/productsList`,
    followRedirect: false,
  }).then((response) => {
    return response;
  });
});

//  body: results.products[0]

Cypress.Commands.add("getAllProductsList", () => {
  cy.request({
    url: "https://automationexercise.com/api/productsList",
    followRedirect: false,
  }).then((resp) => {
    return resp;
  });
});
