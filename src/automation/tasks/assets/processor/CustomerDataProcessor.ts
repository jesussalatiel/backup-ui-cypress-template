import { CustomerActions } from '@interfaces/customer';
import { CypressBaseDataProcessor } from './CypressBaseDataProcessor';

class CustomerDataProcessor extends CypressBaseDataProcessor {
  create(table: Record<string, any>): void {
    cy.customers(CustomerActions.CREATE, table).then((response) => {
      expect(response.body.status).to.eql('INVITED');
    });
  }

  changeDefaultPassword(table: Record<string, any>): void {
    cy.customers(CustomerActions.CHANGE_PASSWORD, table).should('be.true');
  }
}

export default new CustomerDataProcessor();
