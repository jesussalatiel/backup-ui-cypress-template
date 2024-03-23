export const listOfSupportedDevices = {
  Desktop: 'Desktop',
  Tablet: 'Tablet',
  Mobile: 'Mobile',
};

export const setViewport = (deviceType: string, orientation = 'portrait') => {
  const isPortrait = orientation === 'landscape' ? 'landscape' : 'portrait';

  return cy
    .get('@assets:setEnvironment')
    .then((environment) => {
      const settings: any = Cypress.env(environment);

      switch (deviceType) {
        case listOfSupportedDevices.Desktop:
          return cy.viewport(
            settings.device.desktop.width,
            settings.device.desktop.height,
          );
        case listOfSupportedDevices.Tablet:
          return cy.viewport(settings.device.tablet, isPortrait);
        case listOfSupportedDevices.Mobile:
          return cy.viewport(settings.device.mobile, isPortrait);
        default:
          throw new Error(
            `Unsupported device type: ${deviceType}. Please use 'Desktop', 'Tablet', or 'Mobile'.`,
          );
      }
    })
    .then(() => cy.wrap(deviceType).as('executorDevice'));
};
