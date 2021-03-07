class ChallengeLanding {
  earlyBirdButton = ".challenge-btn";
  challengeButton = ".challenge-button";
  transformationsButton = ".transformation-button";

  constructor() {}

  visit() {
    cy.visit("/challenge-landing");
  }

  getEarlyBirdButton() {
    return cy.get(this.earlyBirdButton);
  }

  getReadyButton() {
    return cy.get(this.challengeButton).eq(0);
  }

  getTransformationButton() {
    return cy.get(this.transformationsButton).eq(0);
  }

  getSupplementsButton() {
    return cy.get(this.challengeButton).eq(2);
  }

  getTeamLaShaeButton() {
    return cy.get(this.transformationsButton).eq(1);
  }
}

export default ChallengeLanding;
