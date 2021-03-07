import ChallengeLanding from "../../pages/elements/challengeLandingPage";

describe("If You Can Move Challenge Landing page", () => {
  const challengeLanding = new ChallengeLanding();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  context("User views Challenge Landing page when not logged in", () => {
    beforeEach(() => {
      challengeLanding.visit();
    });

    it("First Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(0).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signup");
      });
    });

    it("Second Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(1).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signup");
      });
    });

    it("Third Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(2).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signup");
      });
    });

    it("I'm Ready To Get Fit! button is visible and clickable", () => {
      challengeLanding.getReadyButton().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signup");
      });
    });

    it("View Transformations button is visible and clickable", () => {
      challengeLanding.getTransformationButton().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/transformations");
      });
    });

    it("Just Move Supplements button is visible and clickable", () => {
      challengeLanding.getSupplementsButton().should("be.visible").click();
    });

    it("Team LA Shae button is visible and clickable", () => {
      challengeLanding.getTeamLaShaeButton().should("be.visible").click();
    });
  });

  context("User views Challenge Landing page when logged in", () => {
    before(() => {
      cy.SignIn();
    });

    beforeEach(() => {
      cy.get(".nav-links").contains("My Account").click();
      cy.get("#btnChallengeInfo").click();
    });

    it("First Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(0).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm?plan=challenge-member");
      });
    });

    it("Second Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(1).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm?plan=challenge-member");
      });
    });

    it("Third Early Bird button is visible and clickable", () => {
      challengeLanding.getEarlyBirdButton().eq(2).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm?plan=challenge-member");
      });
    });

    it("I'm Ready To Get Fit! button is visible and clickable", () => {
      challengeLanding.getReadyButton().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge-confirm?plan=challenge-member");
      });
    });

    it("View Transformations button is visible and clickable", () => {
      challengeLanding.getTransformationButton().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/transformations");
      });
    });

    it("Just Move Supplements button is visible and clickable", () => {
      challengeLanding.getSupplementsButton().should("be.visible").click();
    });

    it("Team LA Shae button is visible and clickable", () => {
      challengeLanding.getTeamLaShaeButton().should("be.visible").click();
    });
  });
});
