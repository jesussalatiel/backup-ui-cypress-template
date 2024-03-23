import { Given, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import CustomerDataProcessor from '@tasks/assets/processor/CustomerDataProcessor';

Given(
  'I create a new user with the following information:',
  function (user: DataTable) {
    CustomerDataProcessor.create(CustomerDataProcessor.enterDataTable(user));
  },
);

Given(
  'I change the default password for the user with the following credentials:',
  function (user: DataTable) {
    CustomerDataProcessor.changeDefaultPassword(
      CustomerDataProcessor.enterDataTable(user),
    );
  },
);
