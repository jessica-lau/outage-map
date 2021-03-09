import Search from "../../pages/elements/searchAddress";

describe("Search an address on the map", () => {
  const search = new Search();
  beforeEach(() => {
    search.visit();
    cy.wait(5000);
  });
  it("User can type and search an address on the map", () => {
    search.getSearchIcon().should("be.visible").click();
    search.getAddressInput().click().type("30606 Athens");
    search.getAddressList().contains("Athens, GA 30606, USA").click();
    cy.wait(3000);
    search.getPinpoint().should("be.visible").click({ force: true });
    search.getAddressDetails().should("contain", "Athens, GA 30606, USA");
  });
});
