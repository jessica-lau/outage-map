import CloseLegend from "../../pages/elements/closeLegend";

describe("Close legend on map", () => {
  const closeLegend = new CloseLegend();
  beforeEach(() => {
    closeLegend.visit();
    cy.wait(5000);
  });
  it("User can close map legend and legend icon is visible ", () => {
    closeLegend
      .getCloseButton()
      .should("be.visible")
      .eq(1)
      .click({ force: true });
    closeLegend.getLegendIcon().should("be.visible");
  });
});
