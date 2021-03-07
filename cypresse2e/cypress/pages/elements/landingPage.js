class LandingPage {
  countdownText = ".timer-cont > div > div:nth-child(1)";
  countdownClock = ".timer-cont > div > div:nth-child(2) > div";
  countdownButton = "#countdown_btn";
  firstBanner = ".banner-redsn > img";
  joinNowButtonOne = "#signup1_btn";
  challengeButton = "#challenge_btn";
  mission = ".our-mission-cont";
  missionList = ".our-mission-list";
  joinNowButtonTwo = "#signup2_btn";
  infoBox = ".boxes-sec > div > div";
  joinNowButtonThree = "#signup3_btn";
  joinNowButtonFour = "#signup4_btn";
  startedInfo = ".get-started-outer";
  seeDifferenceBanner = ".see-difference > div > div:nth-child(1)";
  seeDifferenceContent = ".see-difference-cont";

  constructor() {}

  visit() {
    return cy.visit("/welcome");
  }

  getCountdownText() {
    return cy.get(this.countdownText);
  }

  getCountdownClock() {
    return cy.get(this.countdownClock);
  }

  getCountdownButton() {
    return cy.get(this.countdownButton);
  }

  getFirstBanner() {
    return cy.get(this.firstBanner);
  }

  getJoinNowButtonOne() {
    return cy.get(this.joinNowButtonOne);
  }

  getChallengeButton() {
    return cy.get(this.challengeButton);
  }

  getMission() {
    return cy.get(this.mission);
  }

  getMissionList() {
    return cy.get(this.missionList);
  }

  getJoinNowButtonTwo() {
    return cy.get(this.joinNowButtonTwo);
  }

  getInfoBox() {
    return cy.get(this.infoBox);
  }

  getJoinNowButtonThree() {
    return cy.get(this.joinNowButtonThree);
  }

  getJoinNowButtonFour() {
    return cy.get(this.joinNowButtonFour);
  }

  getStartedInfo() {
    return cy.get(this.startedInfo);
  }

  getSeeDifferenceBanner() {
    return cy.get(this.seeDifferenceBanner);
  }

  getSeeDifferenceContent() {
    return cy.get(this.seeDifferenceContent);
  }
}
export default LandingPage;
