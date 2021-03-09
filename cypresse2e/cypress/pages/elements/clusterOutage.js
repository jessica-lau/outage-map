class Outages {
  cluster =
    'div[style*="width: 40px; height: 40px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none;"]*';
  outages = ".infobox-card--point-icon";

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getCluster() {
    return cy.get(this.cluster);
  }

  getOutages() {
    return cy.get(this.outages);
  }
}

export default Outages;
