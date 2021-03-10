class County {
  viewByLocation = ".main-button";
  selectionMenu = ".menu-item";
  county = "#map";
  countyInfo = ".infobox-card--header";

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

  getCountyInfo() {
    return cy.get(this.countyInfo);
  }
}

export default County;
