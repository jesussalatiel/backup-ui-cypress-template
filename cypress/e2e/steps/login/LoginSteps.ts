import { When, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import AssertPage from '@pages/asserts/AssertPage';
import LoginPage from '@pages/login/LoginPage';

When(
  'I execute a sign-in action on the system with following data:',
  function (signIn: DataTable) {
    signIn.hashes().forEach((row) => {
      cy.get('@executorDevice').then((device) => {
        if (row.device || JSON.stringify(device).trim().length === 0) {
          throw new Error(
            'Warning: Device is not supported, you need select a device',
          );
        }
      });

      LoginPage.writeMobile(row.code, row.mobile);

      if (row.password) {
        LoginPage.writePassword(row.password);
      }

      if (!row.submit || row.submit === 'true') {
        cy.clickButton("button[type='submit']");
      }

      if (row.expectedMessage) {
        AssertPage.verifyTextElementText('null', row.expectedMessage);
      }
    });
  },
);

When('I type my authentication credentials', function (authForm: DataTable) {
  authForm.hashes().forEach((row) => {
    if (typeof row.confirmPassword !== 'undefined') {
      cy.get('#newPassword-label').should('be.visible');
    }

    LoginPage.writePassword(row.password);

    LoginPage.revealPassword(row.revealPassword);

    if (
      row.submit === 'true'
      && (row.submit !== undefined || (row.password && row.confirmPassword))
    ) {
      cy.exist('button[type="submit"]').then((response) => {
        cy.clickButton(
          response ? 'button[type="submit"]' : 'Guardar y continuar',
        );
      });
    }

    if (row.expectedMessage !== undefined) {
      cy.contains(row.expectedMessage).should('be.visible');
    }
  });
});

When(
  'I execute the change password with the following parameters:',
  function (table: DataTable) {
    table.hashes().forEach((row) => {
      LoginPage.changePasswordByCode(
        row.code,
        row.mobile,
        row.password,
        row.showPassword,
      );
    });
  },
);
