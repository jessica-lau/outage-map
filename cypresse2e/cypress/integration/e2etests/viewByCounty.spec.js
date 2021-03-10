import County from "../../pages/elements/viewByCounty";

describe("View map by county", () => {
  const county = new County();

  beforeEach(() => {
    county.visit();
    cy.wait(5000);
  });

  it("User can view by county on map", () => {
    county.getViewByLocation().should("be.visible").click({ force: true });
    county
      .getSelectionMenu()
      .eq(1)
      .contains("View by County")
      .click({ force: true });
    cy.wait(2000);
    county.getCounty().click(850, 600);
    county.getCountyInfo().should("contain", "BIBB County");
  });
});
