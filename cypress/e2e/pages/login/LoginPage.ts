class LoginPage {
  readonly Selectors = {
    inputNewPasswordById: '#newPassword',
    inputPasswordById: '#password',
    buttonVisibilityOffByCSS: 'button[aria-label="Toggle password visibility"]',
    inputMobileById: '#phoneNumber',
    inputVerficationCodeById: '#verificationCode',
  };

  clickOnEye() {
    const buttonSelector = this.Selectors.buttonVisibilityOffByCSS;
    cy.get(buttonSelector).should('be.visible').as('revealPassword');
    cy.get('@revealPassword').click({ multiple: true });
  }

  revealPassword(revealPassword: string) {
    if (revealPassword === 'true') {
      this.clickOnEye();
      cy.exist(this.Selectors.inputVerficationCodeById).then((exists) => {
        if (exists) {
          cy.get(this.Selectors.inputVerficationCodeById)
            .invoke('attr', 'type')
            .should('eq', 'text');
        } else {
          cy.get(this.Selectors.inputPasswordById)
            .invoke('attr', 'type')
            .should('eq', 'text');
        }
      });
    }
  }

  writeMobile(code: string, mobile: string) {
    cy.get('@assets:setEnvironment').then((environment) => {
      cy.get(this.Selectors.inputMobileById).as('writeMobile');
      cy.get('@writeMobile').clear();
      cy.get('@writeMobile').type(
        this.selectMobileType(mobile, Cypress.env(environment)),
      );
    });
  }

  writePassword(password: string) {
    if (password !== undefined) {
      cy.get(this.Selectors.inputPasswordById).as('typePasswordWithOptional');
      cy.get('@typePasswordWithOptional').clear();
      cy.get('@typePasswordWithOptional').type(password || '{enter}');
    }
  }

  changePasswordByCode(
    code: string,
    mobile: string,
    password: string,
    showPassword: string,
  ) {
    cy.get(this.Selectors.inputVerficationCodeById)
      .should('be.visible')
      .then(($inputVerificationCode) => {
        switch (code) {
          case 'random':
            cy.wrap($inputVerificationCode).type(
              this.generateRandomPhoneNumber(),
            );
            break;
          case 'default':
            cy.get('@assets:setEnvironment').then((environment: any) => {
              const { code: envCode, mobile: envMobile } = Cypress.env(environment);
              /* eslint-disable cypress/no-unnecessary-waiting */
              /** Mandatory wait to detect the password was changed */
              cy.wait(5000);
              cy.getNotificationCode(envCode.concat(envMobile)).then(
                (notificationCode) => {
                  const codeVerification = notificationCode.match(/\d{6}/);
                  if (codeVerification !== null) {
                    cy.wrap($inputVerificationCode).type(codeVerification[0]);
                  } else {
                    throw new Error(
                      `Message Received was: ${notificationCode}`,
                    );
                  }
                },
              );
            });
            break;
          default:
            /* eslint-disable cypress/no-unnecessary-waiting */
            /** Mandatory wait to detect the password was changed */
            cy.wait(5000);
            cy.getNotificationCode(code.concat(mobile)).then(
              (notificationCode) => {
                const codeVerification = notificationCode.match(/\d{6}/);
                if (codeVerification !== null) {
                  cy.wrap($inputVerificationCode).type(
                    codeVerification[0] || '{enter}',
                  );
                } else {
                  throw new Error(`Message Received was: ${notificationCode}`);
                }
              },
            );
        }
      });

    cy.get(this.Selectors.inputNewPasswordById)
      .should('be.visible')
      .type(password);
    this.revealPassword(showPassword);
  }

  private selectMobileType(mobile: string, settings: any) {
    switch (true) {
      case mobile.includes(':'):
        return settings.mobile;
      case mobile.trim().length === 0:
        return '{enter}';
      case mobile === 'random':
        return this.generateRandomPhoneNumber();
      default:
        return mobile;
    }
  }

  private generateRandomPhoneNumber() {
    const min = 900000000;
    const max = 999999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString();
  }
}

export default new LoginPage();
