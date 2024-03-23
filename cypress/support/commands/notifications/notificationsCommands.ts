Cypress.Commands.add('getNotificationCode', (mobile: string) => {
  cy.task('notifications:get:sms', mobile);
});
