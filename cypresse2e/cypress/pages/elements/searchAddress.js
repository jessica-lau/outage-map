class Search {
  searchIcon = ".search";
  addressInput = "#address-search";
  addressList = ".listnav-component__listnavitem__text";
  pinpoint =
    'div[style*="32px; height: 32px; overflow: hidden; position: absolute; cursor: pointer; touch-action: none;"]*';
  addressDetails = ".location-details";

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getSearchIcon() {
    return cy.get(this.searchIcon);
  }

  getAddressInput() {
    return cy.get(this.addressInput);
  }

  getAddressList() {
    return cy.get(this.addressList);
  }

  getPinpoint() {
    return cy.get(this.pinpoint);
  }

  getAddressDetails() {
    return cy.get(this.addressDetails);
  }
}

export default Search;
