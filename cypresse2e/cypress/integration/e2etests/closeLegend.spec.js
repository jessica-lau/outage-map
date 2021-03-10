import CloseLegend from "../../pages/elements/closeLegend";

describe("Close legend on map", () => {
  const closeLegend = new CloseLegend();

  beforeEach(() => {
    closeLegend.visit();
    cy.wait(5000);
  });

  it("The legend icon is visible after the user closes legend on map", () => {
    closeLegend
      .getCloseButton()
      .should("be.visible")
      .eq(1)
      .click({ force: true });
    closeLegend.getLegendIcon().should("be.visible");
  });
});
