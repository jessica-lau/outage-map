import TransformationsPage from "../../pages/elements/transformationPage";

describe("If You Can Move Transformations page", () => {
  const transformationsPage = new TransformationsPage();

  context("User views Transformations page", () => {
    beforeEach(() => {
      transformationsPage.visit();
    });

    it("User can view banner and text on page", () => {
      transformationsPage.getChallengeBanner().should("be.visible");
      transformationsPage
        .getTransformationText()
        .should("contain", "See the difference")
        .and("contain", "Share your fitness journey with the Move Community")
        .and(
          "contain",
          "Upload your images on social media and don't forget to tag us"
        )
        .and("contain", "#ifyoucanmove");
    });

    it("First Challenge Accepted button is visible and clickable", () => {
      transformationsPage
        .getChallengeAcceptedButton()
        .eq(0)
        .should("be.visible")
        .and("have.attr", "routerlink", "/challenge-select")
        .click();
    });

    it("Second Challenge Accepted button is visible and clickable", () => {
      transformationsPage
        .getChallengeAcceptedButton()
        .eq(1)
        .should("be.visible")
        .and("have.attr", "routerlink", "/challenge-select")
        .click();
    });
  });
});
