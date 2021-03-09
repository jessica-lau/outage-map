import County from "../../pages/elements/viewByCounty";

describe("View map by county", () => {
  const county = new County();
  beforeEach(() => {
    county.visit();
    cy.wait(5000);
  });
  it("User can view by BIBB County on map", () => {
    county.getViewByLocation().should("be.visible").click();
    county.getSelectionMenu().eq(1).contains("View by County").click();
    cy.wait(5000);
    county.getCounty().click({ force: true });
  });
});
