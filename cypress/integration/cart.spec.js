describe('estsy.com cart flow', () => {

    it('Create an automated script to add a product to cart', function () {
        cy.visit('/listing/476617607/white-bunny-needle-felted-bookmark-gift?ref=hp_prn&pro=1')
        cy.contains('Add to basket').click()
        cy.get('.listing-title').invoke('text').should('contain', 'White bunny needle felted bookmark. Gift for her. Present for him. Gift for teacher. Housewarming gift')
        cy.get('[aria-label="Remove listing"]').click()
    })

})
