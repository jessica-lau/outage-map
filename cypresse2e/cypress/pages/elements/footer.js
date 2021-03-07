class Footer {
  footerText = ".footer-text";
  logo = ".footer-logo";
  footerLink = ".footer-link";
  terms = ".footer-terms-links span";
  socialMedia = ".social-media-section a";

  constructor() {}

  visit() {
    cy.visit("/welcome");
  }

  getFooterText() {
    return cy.get(this.footerText);
  }

  getLogo() {
    return cy.get(this.logo);
  }

  getFooterLink() {
    return cy.get(this.footerLink);
  }

  getTerms() {
    return cy.get(this.terms);
  }

  getSocialMedia() {
    return cy.get(this.socialMedia);
  }
}

export default Footer;
