import MenuSummary from "../../pages/elements/menuSummary";
import inputValues from "../../fixtures/inputValues.json";

describe("View summary report in menu", () => {
  const menuSummary = new MenuSummary();

  beforeEach(() => {
    menuSummary.visit();
    cy.wait(5000);
  });

  it("User can view summary report after typing in a location", () => {
    button(menuSummary.getMenuIcon(), 0);
    button(menuSummary.getSummaryButton(), 0);
    button(menuSummary.getViewZipcode(), 1);
    cy.wait(2000);
    menuSummary
      .getRefineInput()
      .click({ force: true })
      .type(inputValues.zipcode)
      .focus()
      .blur();
    reportData(0, inputValues.zipAndCity);
    reportData(1, inputValues.customersAffected);
    reportData(2, inputValues.customersServed);
    menuSummary.getPanelFooter().contains("updated every 10 min");
  });

  function button(getMethod, index) {
    getMethod.eq(index).should("be.visible").click({ force: true });
  }

  function reportData(index, data) {
    menuSummary.getDataPanel().eq(index).contains(data);
  }
});
