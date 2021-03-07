import LandingPage from "../../pages/elements/landingPage";

describe("If You Can Move landing page", () => {
  const landingPage = new LandingPage();

  context(
    "User can view content and click the buttons on the landing page",
    () => {
      beforeEach(() => {
        landingPage.visit();
      });

      it("Countdown clock is visible", () => {
        landingPage
          .getCountdownText()
          .should("be.visible")
          .contains("h3", "Challenge Starts");
        landingPage
          .getCountdownClock()
          .should("be.visible")
          .and("have.attr", "class", "countdown-container");
      });

      it("Countdown early challenge signup is visible and clickable", () => {
        landingPage.getCountdownButton().should("be.visible").click();
      });

      it("User can view first banner", () => {
        landingPage.getFirstBanner().should("be.visible");
      });

      it("Sign Up For Move! button is visible and clickable", () => {
        landingPage
          .getJoinNowButtonOne()
          .should("be.visible")
          .contains("sign up for move!")
          .click();
      });

      it("Join The Challenge button is visible and clickable", () => {
        landingPage
          .getChallengeButton()
          .should("be.visible")
          .contains("join the challenge")
          .click();
      });

      it("User can view mission statement", () => {
        landingPage
          .getMission()
          .should("contain", "Our-Mission")
          .and(
            "contain",
            "Inspiring people to reach their fitness goals and gain confidence through Dance Fitness!"
          )
          .and(
            "contain",
            "specializes in dance fitness along with many other disciplines to help you achieve your goals."
          );
      });

      it("User can view mission list", () => {
        landingPage
          .getMissionList()
          .should("contain", "DANCE FITNESS")
          .and("contain", "KICKBOXING")
          .and("contain", "STRENGTH")
          .and("contain", "YOGA")
          .and("contain", "MOBILITY")
          .and("contain", "CORE TRAINING");
      });

      it("Join Now button is visible and clickable", () => {
        landingPage.getJoinNowButtonTwo().should("be.visible").click();
      });

      it("User can view info box content", () => {
        landingPage
          .getInfoBox()
          .should("contain", "Workouts for everyone")
          .and("contain", "Created by trainers")
          .and("contain", "New videos every week")
          .and("contain", "Not just workouts!");
      });

      it("Monthly Join Now Button is visible and clickable", () => {
        landingPage.getJoinNowButtonThree().should("be.visible").click();
      });

      it("Yearly Join Now Button is visible and clickable", () => {
        landingPage.getJoinNowButtonFour().should("be.visible").click();
      });

      it("User can view Get Started! content", () => {
        landingPage
          .getStartedInfo()
          .should("contain", "Unlimited Access to ")
          .and("contain", "Nutrition Certified Advice")
          .and("contain", "Daily Recommended Routines")
          .and("contain", "Free 7-Day Trial ")
          .and("contain", "annual members")
          .and(
            "contain",
            "Sneak peek on upcoming NEW features, events and merchandise"
          );
      });

      it("User can view See Difference banner", () => {
        landingPage.getSeeDifferenceBanner().find("img");
      });

      it("User can view See Difference content", () => {
        landingPage
          .getSeeDifferenceContent()
          .should("contain", "See the difference!")
          .and("contain", "Dance your way to weight loss and fitness ")
          .and("contain", "Submit your photo or simply tag us on ");
      });
    }
  );
});
