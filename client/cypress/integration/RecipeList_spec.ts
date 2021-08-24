describe("Home Page", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("Renders list of recipes", () => {
    cy.get("[data-cy=list]").find("li").should("have.length", 10);
  });
});

describe("Recipe Details Page", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });
  it("Navigates to recipe details page", () => {
    cy.get("[data-cy=list]").find("li").first().click();
    cy.get("[data-cy=title]");
    cy.get("[data-cy=summary]");
    cy.get("[data-cy=ingredients]");
    cy.get("[data-cy=instructions]");
  });
  it("Returns back to home page on logo click", () => {
    cy.get("[data-cy=logo]").click();
    cy.get("[data-cy=list]").find("li").should("have.length", 10);
  });
});
