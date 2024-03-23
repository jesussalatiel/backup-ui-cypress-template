/// <reference types="cypress" />

import './commands/customers/customersCommands';
import './commands/leads/leadsCommands';
import './commands/notifications/notificationsCommands';
import { setViewport } from './commands/devices/viewPorts';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add(
  'setBrowserDimensions',
  (deviceType: any, orientation?: string) => setViewport(deviceType, orientation),
);

Cypress.Commands.add('exist', (selector: string) => cy.get('body').then(($body) => $body.find(selector).length > 0));

Cypress.Commands.add('clickButton', (selector: string) => {
  cy.exist(selector)
    .then((isElementDisplayed) => {
      if (isElementDisplayed) {
        return cy.get(selector);
      }
      return cy.contains(selector);
    })
    .should('exist')
    .click();
});
