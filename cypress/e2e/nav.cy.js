describe("Navigation", () => {
  beforeEach(() => {
      cy.visit("/")
  })

  it("should navigate to the blog page", () => {
    cy.get('a[href*="blog"]').click();
    cy.url().should("include", "/blog");
    cy.get("h1").contains("Writing");
  });
});
