import { LeadsActions } from '@interfaces/leads';

Cypress.Commands.add('leads', (method: string, data: any) => {
  switch (method) {
    case LeadsActions.CREATE:
      cy.task('leads:create', data);
      break;
    case LeadsActions.DELETE:
      cy.task('leads:delete', data);
      break;
    default:
      throw new Error('Commands is not supported.');
  }
});
