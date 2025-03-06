import { resultJson } from "../../fixtures/results.json";
describe("API tests", () => {
  it("Test1", () => {
    cy.getProduct().then((result) => {
      cy.log(result.body);
      let response = JSON.parse(result.body);
      expect(response.responseCode).to.eq(200);
    });
  });

  it("Get All Products List", () => {
    cy.getAllProductsList().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(JSON.parse(resp.body)).to.deep.equal(resultJson);
    });
  });
});
