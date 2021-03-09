import ServiceTerritory from "../../pages/elements/serviceTerritory";

describe("Check off GPC Service Territory", () => {
  const serviceTerritory = new ServiceTerritory();
  beforeEach(() => {
    serviceTerritory.visit();
    cy.wait(5000);
  });

  it("User can check off GPC Service Territory if not already checked off", () => {
    if (serviceTerritory.getTerritoryCheckbox().should("be.checked")) {
      serviceTerritory.getTerritoryCheckbox().click({ force: true });
    } else {
    }
  });
});
