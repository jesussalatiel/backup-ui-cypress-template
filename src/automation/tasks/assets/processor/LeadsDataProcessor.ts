import { LeadsActions } from '@interfaces/leads';
import { CypressBaseDataProcessor } from './CypressBaseDataProcessor';

class LeadsDataProcessor extends CypressBaseDataProcessor {
  create(table: Record<string, any>): void {
    cy.leads(LeadsActions.CREATE, table).then((response) => {
      expect(response.statusCode).to.eql(200);
    });
  }

  delete(table: Record<string, any>): void {
    cy.leads(LeadsActions.DELETE, table).then((response) => {
      expect(response).to.eql(true);
    });
  }
}

export default new LeadsDataProcessor();
