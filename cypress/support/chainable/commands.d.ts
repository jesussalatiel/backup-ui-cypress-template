// import * as CustomTask from './c/commands/leads/leadsCommands'

declare namespace Cypress {
  interface Chainable {
    exist(selector: string): Chainable;
    setBrowserDimensions(viewports: any, orientation?: string): Chainable;
    clickButton(selector: string): Chainable;
    getNotificationCode(mobile: string): Chainable;
    leads(method: string, data?: any): Chainable<any>;
    customers(method: string, data?: any): Chainable<any>;
  }
}
