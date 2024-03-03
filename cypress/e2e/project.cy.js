/* describe('funcionalidad de login', () => {
  it('mi aplicacion cargue login', () => {
    cy.visit('/login')
    cy.get('h1').contains('Please sign in')
  })

  it('Probar el Login', () => {
    cc
  })
}) */

/* describe('Que mi app cargue HOME despues de Login', () => {
  it(' Carque la PokeApi', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151').as('apiPokedex')
    cy.visit('/login')
    cy.get('input[name="email"]').type('drstrange@marvel.com')
    cy.get('input[name="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()

    cy.wait('@apiPokedex').its('response.statusCode').should('eq', 200)
    cy.get('h1').contains('Pokédex').should('be.visible')
    cy.url().should('include', '/')
  })
}) */

/* describe('Que mi app cargue register', () => {
  it('Probar el register', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/register').as('registerRequest')
    cy.visit('/signup')

    const dynamicEmail = `user${Math.floor(Math.random() * 100000)}@example.com`
    const dynamicPassword = `Password${Math.floor(Math.random() * 100000)}`

    cy.get('input[name="first_name"]').type('a')
    cy.get('input[name="last_name"]').type('a')
    cy.get('select[name="gender"]').select('F')
    cy.get('input[name="email"]').type(dynamicEmail)
    cy.get('input[name="password"]').type(dynamicPassword)
    cy.get('button[type="submit"]').click()

    cy.wait('@registerRequest').its('response.statusCode').should('eq', 200)
    cy.url().should('include', '/login')
    cy.get('h1').contains('Please sign in')
  })
}) */

describe('logout', () => {
  it('salir con logout', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('loginRequest')
    cy.visit('/login')
    cy.get('input[name="email"]').type('drstrange@marvel.com')
    cy.get('input[name="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

    cy.url().should('include', '/')
    cy.contains('Home')
    cy.get('Nav > Nav.Link').eq(1).click()
    cy.url().should('include', '/login')
    cy.contains('Please sign in')
  })
})
