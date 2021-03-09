class ServiceTerritory {
  territoryCheckbox = ".group-toggle .checkbox-wrapper .styled-checkbox";

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getTerritoryCheckbox() {
    return cy.get(this.territoryCheckbox);
  }
}

export default ServiceTerritory;
