import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

interface DataProcessor {
  enterDataTable(dataTable: DataTable): Record<string, any>;
}

export class CypressBaseDataProcessor implements DataProcessor {
  enterDataTable(dataTable: DataTable): Record<string, any> {
    return dataTable.hashes().map((originalTable) => {
      const table = { ...originalTable };
      const regex = /.*:/;

      Object.keys(table).forEach((key) => {
        const value = table[key];
        if (regex.test(value)) {
          const dataFromEnv = Cypress.env(value);
          table[key] = dataFromEnv[key];
        }
      });

      return table;
    })[0];
  }
}
