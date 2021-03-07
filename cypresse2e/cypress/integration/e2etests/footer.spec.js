import Footer from "../../pages/elements/footer";

describe("If You Can Move footer section", () => {
  const footer = new Footer();

  context("User can view content and click links in footer section", () => {
    beforeEach(() => {
      footer.visit();
    });

    it("Footer paragraph is visible", () => {
      footer
        .getFooterText()
        .should(
          "contain",
          "Consult your physician and follow all safety instructions before beginning any exercise program"
        )
        .and(
          "contain",
          "All trademarks, products, and service names are the property of their respective owners"
        )
        .and(
          "contain",
          "Results vary. Exercise and proper diet are necessary to achieve and maintain weight loss and muscle definition."
        );
    });

    it("Footer logo is visible", () => {
      footer.getLogo().find("img");
      footer.getLogo().should("contain", "All rights reserved");
    });

    it("External website links are visible and clickable", () => {
      footer.getFooterLink().eq(0).should("be.visible").click();
      footer.getFooterLink().eq(1).should("be.visible").click();
      footer.getFooterLink().eq(2).should("be.visible").click();
    });

    it("Privacy Policy link is visible and clickable", () => {
      footer.getTerms().eq(0).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/privacy");
      });
    });

    it("Terms link is visible and clickable", () => {
      footer.getTerms().eq(1).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/terms");
      });
    });

    it("FDA Disclaimer link is visible and clickable", () => {
      footer.getTerms().eq(2).should("be.visible").click();
      cy.location().should((loc) => {
        expect(loc.href).to.include("/fda");
      });
    });

    it("Instagram and Twitter links are visible and clickable", () => {
      footer.getSocialMedia().eq(0).find("img").click();
      footer.getSocialMedia().eq(1).find("img").click();
    });
  });
});
