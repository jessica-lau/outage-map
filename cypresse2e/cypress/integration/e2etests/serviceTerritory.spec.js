import ServiceTerritory from "../../pages/elements/serviceTerritory";

describe("GPC Service Territory in map legend", () => {
  const serviceTerritory = new ServiceTerritory();

  beforeEach(() => {
    serviceTerritory.visit();
    cy.wait(5000);
  });

  it("User can check and uncheck GPC Service Territory on map legend", () => {
    if (serviceTerritory.getTerritoryCheckbox().should("be.checked")) {
      serviceTerritory.getTerritoryCheckbox().click({ force: true });
    } else {
    }
  });
});
