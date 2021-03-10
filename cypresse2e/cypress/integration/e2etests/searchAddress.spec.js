import Search from "../../pages/elements/searchAddress";
import inputValues from "../../fixtures/inputValues.json";

describe("Search an address on the map", () => {
  const search = new Search();

  beforeEach(() => {
    search.visit();
    cy.wait(5000);
  });

  it("User can type and search for address on map", () => {
    icon(search.getSearchIcon());
    search
      .getAddressInput()
      .click({ force: true })
      .type(inputValues.searchAddress);
    search
      .getAddressList()
      .contains(inputValues.addressResult)
      .click({ force: true });
    cy.wait(3000);
    icon(search.getPinpoint());
    search.getAddressDetails().should("contain", inputValues.addressDetails);
  });

  function icon(getMethod) {
    getMethod.should("be.visible").click({ force: true });
  }
});
