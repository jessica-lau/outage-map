import Header from "../../pages/elements/header";

describe("If You Can Move header", () => {
  const header = new Header();

  after(() => {
    window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  context("Non logged in user views navigation links in header", () => {
    beforeEach(() => {
      header.visit();
    });

    it("MOVE logo is visible and clickable", () => {
      header.getLogo().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/welcome");
      });
    });

    it("Login navigation link is visible and clickable", () => {
      header.getNonLoginNavigation().find("label").eq(0).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signin");
      });
    });

    it("Signup navigation link is visible and clickable", () => {
      header.getNonLoginNavigation().find("label").eq(1).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/signup");
      });
    });
  });

  context("Logged in user views navigation links in header", () => {
    before(() => {
      cy.SignIn();
    });

    beforeEach(() => {
      cy.visit("/account");
    });

    it("MOVE logo is visible and clickable", () => {
      header.getLogo().should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/welcome");
      });
    });

    it("Search icon is clickable and user can type in search field", () => {
      header.getSearchIcon().click();
      header.getSearchField().click().type("yoga");
      header.getSearchIcon().click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("search-results");
      });
    });

    it("User can cancel search", () => {
      header.getSearchIcon().click();
      header.getSearchField().click().type("yoga");
      header.getSearchClose().click();
    });

    it("Home navigation link is visible and clickable", () => {
      cy.wait(3000);
      header.getLoginNavigation().find("label").eq(0).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/workouts");
      });
    });

    it("Challenge navigation link is visible and clickable", () => {
      header.getLoginNavigation().find("label").eq(1).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/challenge");
      });
    });

    it("Favorite navigation link is visible and clickable", () => {
      header.getLoginNavigation().find("label").eq(2).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/favorite");
      });
    });

    it("My Account navigation link is visible and clickable", () => {
      header.getLoginNavigation().find("label").eq(3).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/account");
      });
    });

    it("Logout navigation link is visible and clickable", () => {
      header.getLoginNavigation().find("label").eq(4).click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/welcome");
      });
    });
  });
});
