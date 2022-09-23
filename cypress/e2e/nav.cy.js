describe('Navigation', () => {
    it('should navigate to the blog page', () => {
        cy.visit('/')
        cy.get('a[href*="blog"]').click()
        cy.url().should('include', '/blog')
        cy.get('h1').contains('Writing')
    })
})
