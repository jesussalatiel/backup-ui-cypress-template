import {
  Given,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';
import AssertPage from '@pages/asserts/AssertPage';

Given(
  'I optimizes the view with the following params:',
  function (table: DataTable) {
    table.hashes().forEach((row) => {
      cy.setBrowserDimensions(row.device, row.orientation);
    });
  },
);

Then(
  'I should validate {string} button is {string}',
  function (buttonName: string, status: string) {
    const visibility = status.includes('enable') ? 'be.visible' : 'be.disabled';
    cy.contains(buttonName).should(visibility);
  },
);

Then(
  'I should validate the following table of elements:',
  function (elements: DataTable) {
    cy.get('@executorDevice').then((executorDevice) => {
      elements.hashes().forEach((row) => {
        if (row.showInDevice === 'All') {
          cy.wrap(null).then(() => {
            AssertPage.verifyListOfElements(row);
          });
        } else {
          cy.wrap(executorDevice).then(() => {
            AssertPage.verifyListOfElementsForDevice(row, executorDevice);
          });
        }
      });
    });
  },
);

Then(
  'I should validate password input change to {string}',
  function (property: string) {
    cy.exist('#password').then((exists) => {
      if (!exists) {
        cy.get('input').should('have.attr', 'type', property);
      }
    });
  },
);
