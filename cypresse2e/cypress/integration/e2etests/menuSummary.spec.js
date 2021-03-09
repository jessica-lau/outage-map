import MenuSummary from "../../pages/elements/menuSummary";

describe("View summary in menu", () => {
  const menuSummary = new MenuSummary();
  beforeEach(() => {
    menuSummary.visit();
    cy.wait(5000);
  });

  it("User can summary data after typing in location", () => {
    menuSummary.getMenuIcon().eq(0).should("be.visible").click({ force: true });
    menuSummary.getSummaryButton().eq(0).click({ force: true });
    menuSummary
      .getViewZipcode()
      .eq(0)
      .should("be.visible")
      .click({ force: true });
  });
});
