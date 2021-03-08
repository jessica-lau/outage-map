class Outages {
  cluster = "#map img";

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getCluster() {
    return cy.get(this.cluster);
  }
}

export default Outages;
