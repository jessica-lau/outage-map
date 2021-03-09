class MenuSummary {
  menuIcon = ".tabs div";
  summaryButton = ".tools-card .menu-tool";
  viewZipcode = ".summary-tools";
  constructor() {}

  visit() {
    return cy.visit("");
  }

  getMenuIcon() {
    return cy.get(this.menuIcon);
  }

  getSummaryButton() {
    return cy.get(this.summaryButton);
  }

  getViewZipcode() {
    return cy.get(this.viewZipcode);
  }
}

export default MenuSummary;
