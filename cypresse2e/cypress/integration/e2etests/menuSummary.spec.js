import MenuSummary from "../../pages/elements/menuSummary";
import inputValues from "../../fixtures/inputValues.json";

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
    menuSummary
      .getRefineInput()
      .click()
      .type(inputValues.zipcode)
      .focus()
      .blur();
    menuSummary.getDataPanel().eq(0).contains(inputValues.zipAndCity);
    menuSummary.getDataPanel().eq(1).contains(inputValues.customersAffected);
    menuSummary.getDataPanel().eq(2).contains(inputValues.customersServed);
    menuSummary.getPanelFooter().contains("updated every 10 min");
  });
});
