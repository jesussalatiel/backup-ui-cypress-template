import { When, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '@pages/login/HomePage';

When(
  'I select an option on OKA dashboard with the following:',
  function (dashboard: DataTable) {
    dashboard
      .hashes()
      .forEach((row) => HomePage.acceptTermsAndConditions(row.acceptOkaCredit));
  },
);

When(
  'I show the modal: Terms and Conditions with the following information:',
  function (termsAndConditions: DataTable) {
    termsAndConditions.hashes().forEach((row) => {
      if (
        row.showTermsAndConditions === 'true'
        && row.acceptTermsAndConditions === 'false'
      ) {
        HomePage.showTermsAndConditions(row.showTermsAndConditions);
      }

      if (row.acceptTermsAndConditions === 'true') {
        HomePage.acceptTermsAndConditions(
          (row.acceptTermsAndConditions === 'true').toString(),
        );
      }
    });
  },
);

When(
  'I execute the command with the following parameters:',
  function (actions: DataTable) {
    actions.hashes().forEach((row) => {
      HomePage.selectElementToInteract(row);
    });
  },
);
