import { CustomerActions } from '@interfaces/customer';

Cypress.Commands.add('customers', (method: any, data?: any) => {
  switch (method) {
    case CustomerActions.FIND_BY_MOBILE:
      break;
    case CustomerActions.FIND_BY_DOCUMENT_IDENTITY:
      break;
    case CustomerActions.DELETE_BY_DOCUMENT_IDENTITY:
      break;
    case CustomerActions.DELETE_BY_MOBILE:
      break;
    case CustomerActions.CHANGE_PASSWORD:
      cy.task('customers:change:password', data);
      break;
    case CustomerActions.CREATE_AUTH:
      break;
    case CustomerActions.CREATE:
      cy.task('customers:create', data);
      break;
    default:
      throw new Error('Command is not supported.');
  }
});
