import Outages from "../../pages/elements/clusterOutage";

describe("Click cluster to see outages", () => {
  const outages = new Outages();

  beforeEach(() => {
    outages.visit();
    cy.wait(5000);
  });

  it("User can see outage icon after clicking cluster", () => {
    outages.getCluster().eq(0).click({ force: true });
    outages.getOutages().should("have.attr", "alt", "outage icon");
    cy.wait(2000);
  });
});
