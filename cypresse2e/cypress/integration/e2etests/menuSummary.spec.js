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
      .eq(1)
      .should("be.visible")
      .click({ force: true });
    cy.wait(2000);
    menuSummary.getRefineInput().click().type("30017").focus().blur();
    menuSummary.getDataPanel().eq(0).contains("30017 (GRAYSON)");
    menuSummary.getDataPanel().eq(1).contains("0");
    menuSummary.getDataPanel().eq(2).contains("4,394");
    menuSummary.getPanelFooter().contains("updated every 10 min");
  });
});
