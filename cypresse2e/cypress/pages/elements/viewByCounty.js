class County {
  viewByLocation = ".main-button";
  selectionMenu = ".menu-item";
  county =
    'div[style*="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]*';

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getViewByLocation() {
    return cy.get(this.viewByLocation);
  }

  getSelectionMenu() {
    return cy.get(this.selectionMenu);
  }

  getCounty() {
    return cy.get(this.county).eq(0);
  }
}

export default County;
