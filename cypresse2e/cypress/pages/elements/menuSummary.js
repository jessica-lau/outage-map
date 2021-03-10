class MenuSummary {
  menuIcon = ".tabs div";
  summaryButton = ".tools-card .menu-tool .head";
  viewZipcode = ".content .summary-tools div a";
  refineInput = ".filter-group .filter-search-input input";
  dataPanel = ".report-content .ReactVirtualized__Table__rowColumn";
  panelFooter = ".report-summary .last-updated";

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

  getRefineInput() {
    return cy.get(this.refineInput);
  }

  getDataPanel() {
    return cy.get(this.dataPanel);
  }

  getPanelFooter() {
    return cy.get(this.panelFooter);
  }
}

export default MenuSummary;
