import Search from "../../pages/elements/searchAddress";
import inputValues from "../../fixtures/inputValues.json";

describe("Search an address on the map", () => {
  const search = new Search();
  beforeEach(() => {
    search.visit();
    cy.wait(5000);
  });
  it("User can type and search an address on the map", () => {
    search.getSearchIcon().should("be.visible").click();
    search.getAddressInput().click().type(inputValues.searchAddress);
    search.getAddressList().contains(inputValues.addressResult).click();
    cy.wait(3000);
    search.getPinpoint().should("be.visible").click({ force: true });
    search.getAddressDetails().should("contain", inputValues.addressDetails);
  });
});
