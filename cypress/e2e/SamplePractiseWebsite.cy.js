describe('Functionalities of Developer Registration Website', () => {
  it('Checking the functionalities of Sign-up', () => {
    cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')
    cy.get('#nome').type('Lalit')
    cy.get('#sobrenome').type('Panigrahi')
    cy.get('#email').type('lalit.panigrahi03@gmail.com')
    cy.get('input[value="frontend"]').check()
    cy.get('input[value="frontend"]').should('be.checked','Front-end')
    cy.get('#senioridade').select('Junior')
    cy.get('#senioridade').should('be.visible','Junior')
    cy.get('input[type="checkbox"]').check(['HTML', 'CSS','Javascript'])
    cy.get('input[type="checkbox"]').should('be.checked','Javascript','HTML','CSS')
    cy.get('#experiencia').type('Expert in technical Languages like HTML,Javscript & CSS')
    cy.get('.botao').click()

  })
})