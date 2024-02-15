describe('GX3-234443 - Login', () => {
	beforeEach(() => {
		cy.visit('https://www.saucedemo.com/');
	});

	it('TC1: Should login with valid credentials', function () {
		cy.get('[data-test=username]').type('standard_user');
		cy.get('[data-test=password]').type('secret_sauce');
		cy.get('#login-button').click();

		cy.url().should('include', '/inventory.html');
	});
});
