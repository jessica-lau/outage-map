class Header {
  logo = ".logo";
  navigation = ".menu div";
  searchIcon = ".nav-search span .fa-search";
  searchField = ".nav-search input";
  searchClose = ".nav-search span .fa-close";

  constructor() {}

  visit() {
    cy.visit("/welcome");
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getNonLoginNavigation() {
    return cy.get(this.navigation).eq(2);
  }

  getLoginNavigation() {
    return cy.get(this.navigation).eq(0);
  }

  getSearchIcon() {
    return cy.get(this.searchIcon);
  }

  getSearchField() {
    return cy.get(this.searchField);
  }

  getSearchClose() {
    return cy.get(this.searchClose);
  }
}

export default Header;
