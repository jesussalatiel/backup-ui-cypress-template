import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import LeadsTaskRepository from '@tasks/leads/LeadsTaskRepository';
import CustomerTaskRepository from '@tasks/customers/CustomerTaskRepository';
import NotificationsTaskRepository from '@tasks/notifications/NotificationsTaskRepository';
import BuildReport from '@tasks/assets/BuildReport';
import * as fs from 'fs';
import EnvironmentFromCommands from '@tasks/assets/Environments';

// const bucketName = 'ihf-qa-e2e';
// const projectName = 'ihf-b2c-ib-qa';

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://personas.dev.oka.com.pe',
    experimentalWebKitSupport: true,
    defaultCommandTimeout: 15000,
    taskTimeout: 20000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      function handleTask(taskName, taskFunction) {
        try {
          return taskFunction();
        } catch (error) {
          throw new Error(`Error executing task '${taskName}':`, error);
        }
      }

      await addCucumberPreprocessorPlugin(on, config);

      on('task', {
        // Módulo: Customers
        'customers:create': (data) => handleTask('customers:create', () => CustomerTaskRepository.create(data)),
        'customers:change:password': (data) => handleTask('customers:change:password', () => CustomerTaskRepository.changePassword(data)),

        // Módulo: Leads
        'leads:create': (data) => handleTask('leads:create', () => LeadsTaskRepository.create(data)),
        'leads:delete': (data) => handleTask('leads:delete', () => LeadsTaskRepository.delete(data)),

        // Módulo: Notifications
        'notifications:get:sms': (mobile) => handleTask('notifications:get:sms', () => NotificationsTaskRepository.getNotificationSms(mobile)),

        // Módulo: Assets
        'assets:setEnvironment': (data) => handleTask('assets:setEnvironment', () => EnvironmentFromCommands.setEnvironment(data)),

        // Módulo: Reports
        'reports:beforeStep': (data) => handleTask('reports:beforeStep', () => BuildReport.beforeStep(data)),
        'reports:afterStep': (data) => handleTask('reports:afterStep', () => BuildReport.afterStep(data)),
      });

      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      on('before:run', (details) => {
        BuildReport.beforeRun(details);
        // BuildReport.setBucketAndDirectory(bucketName, projectName);
      });

      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const failures = results.tests.some((test) => test.attempts.some((attempt) => attempt.state === 'failed'));
          if (!failures) {
            fs.unlinkSync(results.video);
          }
        }
      });

      on('after:run', (results) => {
        BuildReport.afterRun(results);
      });

      return config;
    },
  },
});
