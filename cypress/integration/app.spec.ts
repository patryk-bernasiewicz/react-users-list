import { USERS_URL } from '../../src/constants/api-routes';

describe('global styles', () => {
  it('has some basic styling', () => {
    cy.visit('/');
    cy.get('[data-cy="container"]').should('have.css', 'max-width', '400px');
    cy.get('[data-cy="container"]').should('have.css', 'min-height', '280px');
  });
});

describe('rendering basic elements', () => {
  it('displays main heading', () => {
    cy.visit('/');

    const heading = cy.get('[data-cy="main-heading"]');
    heading.should('exist');
    heading.contains('Users list', { matchCase: false });
  });

  it('displays "Loading..." before data is fetched', () => {
    cy.intercept({
        method: 'GET',
        url: USERS_URL,
      }, (req) => {
        req.reply({
          delay: 500,
        })
      })
      .as('getDataFirst');

    cy.visit('/');
    cy.get('[data-cy="loading"]').should('exist');
  });
});

describe('users list', () => {
  it('loads and displays user data', () => {
    cy.intercept({
        method: 'GET',
        url: USERS_URL,
      })
      .as('getDataFirst');
    cy.visit('/');
    cy.wait('@getDataFirst').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);

      const items = interception.response.body;
      cy.get('[data-cy="users-list"]').children().should('have.length', items.length);
      cy.get('[data-cy="users-list"]').children().first().contains(items[0].name);
    });
  });

  it('filters results on search input', () => {
    cy.intercept({
      method: 'GET',
      url: USERS_URL,
    }, {
      fixture: 'users.json',
    })
    .as('getDataFirst');

    cy.visit('/');
    cy.wait('@getDataFirst').then(() => {
      cy.get('[data-cy="search"]').type('Lorem').should('have.value', 'Lorem');
      cy.get('[data-cy="users-list"]').children().should('have.length', 1);
    });
  });
});
