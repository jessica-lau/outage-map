import Outages from "../../pages/elements/clusterOutage";

describe("See outage cluster", () => {
  const outages = new Outages();

  beforeEach(() => {
    outages.visit();
    cy.wait(5000);
  });

  it("User can see outage icon after clicking cluster", () => {
    outages
      .getCluster()
      .should(
        "have.attr",
        "src",
        "https://maps.gstatic.com/mapfiles/transparent.png"
      )
      .click();
  });
});
