class TransformationsPage {
  challengeBanner = ".transformation-banner";
  transformationText = ".transformation-text";
  challengeAcceptedButton = ".transformations-button";

  constructor() {}

  visit() {
    cy.visit("/transformations");
  }

  getChallengeBanner() {
    return cy.get(this.challengeBanner);
  }

  getTransformationText() {
    return cy.get(this.transformationText);
  }

  getChallengeAcceptedButton() {
    return cy.get(this.challengeAcceptedButton);
  }
}

export default TransformationsPage;
