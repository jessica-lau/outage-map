class ChallengeSelect {
  planAccessButton = ".get-started-outer-redsn .join-btn-two";
  earlyBirdButton = "#btnChallengeSignUp";

  constructor() {}

  getGymAndChallengeBtn() {
    return cy.get(this.planAccessButton).eq(0);
  }

  getChallengeBtn() {
    return cy.get(this.planAccessButton).eq(1);
  }

  getEarlyBirdBtn() {
    return cy.get(this.earlyBirdButton);
  }
}

export default ChallengeSelect;
