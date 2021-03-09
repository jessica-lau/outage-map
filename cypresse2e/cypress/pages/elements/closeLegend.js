class CloseLegend {
  closeButton = ".dialog__container__close .fa-times";
  legendIcon = ".legend-button";

  constructor() {}

  visit() {
    return cy.visit("");
  }

  getCloseButton() {
    return cy.get(this.closeButton);
  }

  getLegendIcon() {
    return cy.get(this.legendIcon);
  }
}

export default CloseLegend;
