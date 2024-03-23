import { Given, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import LeadsDataProcessor from '@tasks/assets/processor/LeadsDataProcessor';

Given(
  'I create a new lead with the following information:',
  function (leads: DataTable) {
    LeadsDataProcessor.create(LeadsDataProcessor.enterDataTable(leads));
  },
);

Given(
  'I remove leads with the following information:',
  function (leads: DataTable) {
    LeadsDataProcessor.delete(LeadsDataProcessor.enterDataTable(leads));
  },
);
