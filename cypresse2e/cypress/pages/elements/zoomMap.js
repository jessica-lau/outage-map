class ZoomMap {
  zoomIcon = ".fa-plus";
  km = ".gm-style-cc div span";

  constructor() {}

  visit() {
    return cy.visit("");
  }
  getZoomIcon() {
    return cy.get(this.zoomIcon);
  }
  getKm() {
    return cy.get(this.km);
  }
}

export default ZoomMap;
