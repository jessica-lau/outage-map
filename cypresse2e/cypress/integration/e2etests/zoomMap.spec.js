import ZoomMap from "../../pages/elements/zoomMap";

describe("Zoom into map", () => {
  const zoom = new ZoomMap();

  beforeEach(() => {
    zoom.visit();
    cy.wait(5000);
  });

  it("User can zoom map to 20km", () => {
    zoom.getZoomIcon().should("contain", "Map Zoom In").click({ force: true });
    cy.wait(2000);
    zoom.getKm().contains("20 km");
  });
});
