import {
  AfterStep,
  Before,
  BeforeAll,
  BeforeStep,
} from '@badeball/cypress-cucumber-preprocessor';

const environmentKey = Cypress.env('crossBrowser')
  ? `ci:${Cypress.browser.name}:settings`
  : 'local:default:settings';

BeforeAll(function () {
  cy.task('assets:setEnvironment', environmentKey).then(() => {
    cy.log(`Has been loaded: ${environmentKey} configuration.`);
  });
});

Before(function () {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.wrap(environmentKey).as('assets:setEnvironment');
  cy.visit('/');
});

BeforeStep(function (details) {
  cy.task('reports:beforeStep', details);
});

AfterStep(function (details) {
  cy.task('reports:afterStep', details);
});
