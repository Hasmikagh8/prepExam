import { listUsers } from "../../fixtures/results.json";
import { createUserResponse } from "../../fixtures/results.json";

describe("API testing", () => {
  it("Verify List Users", () => {
    cy.listUsers().then((result) => {
      cy.log(result);
      expect(result.status).to.eq(200);
      expect(result.body).to.deep.equal(listUsers);
      expect(result.body.data[0].id).to.equal(7);
      expect(result.body.data[0].id).to.not.equal(6);
    });
  });

  it("Verify Create A User functionality", () => {
    cy.createUser().then((result) => {
      cy.log(result);
      expect(result.status).to.eq(201);
      expect(result.body.name).to.equal(createUserResponse.name);
      expect(result.body.job).to.not.equal(`${createUserResponse.job}+1`);
    });
  });
});
