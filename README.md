# Internet Banking (B2C)

---

Short Description about the project.

## Table of Content

- [1. General Info](##1-General-Info)
- [2. Technologies](##2-Technologies)
  - [2.1 Dependencies](###2.1-Dependencies)
  - [2.2 DevDependencies](###2.2-DevDependencies)
- [3. Installation](##3-Installation)
- [4. Running the test](##4-Running-the-test)
- [5. Deployment](##5-Deployment)
- [6. For Commits](##6-For-Commits)
- [7. For Pull Request](##6-For-Pull-Request)
- [8. Author](##6-Author)

## 1. General Info

---

Write down the general informations of your project. It is worth to always put a project status in the Readme file. This is where you can add it.

- [Desing](https://www.figma.com/file/k6vPNYDVBx1tNGRg6TLlZG/Cliente?type=design&node-id=7%3A3&mode=design&t=UIQZA2hV4iEUAzNl-1): Contains the flow with the respective Figma design.
- [Manual and Automation Strategy](https://www.notion.so/ihfintech/QA-Automation-22d15c7a1af44c37becb36fe18ea89c3): Contains the workflow to analyze, design and execute test cases developed during the sprint session.

## 2. Technologies

---

### 2.1 Dependencies

| Technology                                                                                     | Version | Description                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@aws-sdk/client-cognito-identity-provider](https://www.npmjs.com/package/@hookform/resolvers) | 3.438.0 | With the Amazon Cognito user pools API, you can set up user pools and app clients, and authenticate users                                                                                     |
| [@aws-sdk/client-dynamodb](https://www.npmjs.com/package/@next/bundle-analyzer)                | 3.438.0 | Is a fully managed NoSQL database service                                                                                                                                                     |
| [@aws-sdk/client-lambda](https://www.npmjs.com/package/amazon-cognito-identity-js)             | 3.438.0 | Is a compute service that lets you run code without provisioning or managing servers                                                                                                          |
| [@aws-sdk/lib-dynamodb](https://axios-http.com/docs/intro)                                     | 3.438.0 | Is a fully managed NoSQL database service                                                                                                                                                     |
| [@badeball/cypress-cucumber-preprocessor](https://nextjs.org/)                                 | 18.0.6  | This preprocessor aims to provide a developer experience and behavior similar to that of Cucumber, to Cypress                                                                                 |
| [@bahmutov/cypress-esbuild-preprocessor](https://notistack.com/)                               | 2.2.0   | A preprocessor is the plugin responsible for preparing a support file or a test file for the browser.                                                                                         |
| [cypress](https://es.react.dev/)                                                               | 13.6.0  | Is a frontend testing tool for web applications. Cypress runs on Windows, Linux, and macOS                                                                                                    |
| [@cucumber/cucumber](https://www.npmjs.com/package/react-dom)                                  | 10.0.1  | Is a tool that supports Behaviour-Driven Development(BDD)                                                                                                                                     |
| [@ihf-rivendell/qa](https://www.npmjs.com/package/react-google-recaptcha)                      | 0.2.6   | Is a tool developed by IHF to work with lambdas, databases and HTTP requests                                                                                                                  |
| [axe-core](https://react-hook-form.com/)                                                       | 4.8.2   | Is an automated accessibility testing tool                                                                                                                                                    |
| [cypress-axe](https://www.npmjs.com/package/react-idle-timer)                                  | 1.5.9   | Cypress-Axe will scan the DOM structure of your full page. Most of the time, this is what your use case is going to be, since you want Axe to detect accessibility errors on your entire page |
| [cypress-multi-reporters](https://swr.vercel.app/)                                             | 1.6.4   | Generate multiple mocha reports in a single mocha execution                                                                                                                                   |
| [mocha-junit-reporter](https://www.npmjs.com/package/use-debounce)                             | 2.2.1   | Is a library to build junit reports                                                                                                                                                           |

### 2.2 DevDependencies

| Technology                                                                                                | Version | Description                                                                                                                               |
| --------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [@tsconfig/cypress](https://www.npmjs.com/package/@faker-js/faker)                                        | 1.0.1   | Cypress ships with official type declarations for TypeScript. This allows you to write your tests in TypeScript                           |
| [@tsconfig/node18](https://www.npmjs.com/package/@emotion/react)                                          | 18.2.2  | Specifies the root files and the compiler options required to compile the project                                                         |
| [@types/node](https://emotion.sh/docs/styled)                                                             | 20.9.0  | Is used to load in all type definitions when using typescript in node                                                                     |
| [@typescript-eslint/parser](https://www.npmjs.com/package/@hookform/devtools)                             | 6.9.1   | An ESLint parser used to parse TypeScript code into ESLint-compatible nodes, as well as provide backing TypeScript programs               |
| [esbuild](https://www.npmjs.com/package/@next/font)                                                       | 0.19.5  | Is a fast bundler that can optimize JavaScript, TypeScript, JSX, and CSS code                                                             |
| [eslint](https://testing-library.com/docs/ecosystem-jest-dom/)                                            | 8.52.0  | A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.   |
| [eslint-config-airbnb-base](https://testing-library.com/docs/react-testing-library/intro/)                | 15.0.0  | Identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs |
| [eslint-config-airbnb-typescript](https://testing-library.com/docs/ecosystem-user-event/)                 | 17.1.0  | This config simply enhances the Airbnb with TypeScript support.                                                                           |
| [eslint-config-standard](https://www.npmjs.com/package/@types/node)                                       | 17.1.0  | A code linter(checker) to check the code and display potential errors upfront while development.                                          |
| [eslint-plugin-cypress](https://www.npmjs.com/package/@types/react)                                       | 2.15.1  | Runs linting via ESLint on your spec files as they are loaded and display errors in the console                                           |
| [eslint-plugin-import](https://www.npmjs.com/package/@types/react-dom)                                    | 2.29.0  | Plugin intends to support linting of ES2015+ (ES6+) import/export syntax                                                                  |
| [eslint-plugin-jsonc](https://www.npmjs.com/package/@types/react-google-recaptcha?activeTab=dependencies) | 2.10.0  | Plugin provides linting rules relate to better ways to help you avoid problems when using JSON                                            |
| [eslint-plugin-node](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)                      | 11.1.0  | Is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code                                                   |
| [eslint-plugin-prettier](https://www.npmjs.com/package/@typescript-eslint/parser)                         | 5.0.1   | Runs Prettier as an ESLint rule and reports differences as individual ESLint issues                                                       |
| [eslint-plugin-promise](https://autoprefixer.github.io/)                                                  | 6.1.1   | Enforce best practices for JavaScript promises                                                                                            |
| [prettier](https://www.npmjs.com/package/dotenv)                                                          | 3.0.3   | Prettier is a tool to format files in various languages, like TypeScript                                                                  |
| [ts-node](https://eslint.org/)                                                                            | 10.9.1  | Is a TypeScript execution engine for Node. js                                                                                             |
| [typescript](https://www.npmjs.com/package/eslint-config-airbnb)                                          | 5.2.2   | TypeScript is a strongly typed programming language that builds on JavaScript                                                             |

## 3. Installation

---

A little intro about the installation.

- ### To clone the repository

```
$ git clone https://link-of-repository.com
$ cd ../path/to/to/the/file
```

- ### Prepare Environment Credentials to log in to AWS

  It is mandatory to configurate the environments variables on the local machine to run the automation framework. Make sure have installed [aws client](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on your computer and generated [security credentials](https://us-east-1.console.aws.amazon.com/iamv2/home#/security_credentials?section=IAM_credentials) so you can run the following commands.

```.env
CUSTOMERS_USER_POOL_ID,
EMPLOYEES_USER_POOL_ID,
B2C_CLIENT_ID,
B2B_CLIENT_ID
```

- ### To log in to AWS

  It will be required whenever `$ npm i` is run. When you run the first one, it checks the latest version of the dependencies and if possible update one, it does it (updates the package-lock.json) and thus queries the ih-fintech artifact that is in AWS, and to have permissions to see that artifact we must log in, which would be in npm run co:login.

```
$ npm run co:login
```

- ### To start the local development

```
$ npm run cy:open
```

## 4. Running the test

- ### For all features

```
$ npm run test:ci
```

## 5. Deployment

---

Add additional notes about how to deploy this on a live system

## 6. For Commits

---

We use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure to save the changes made.

## For Pull Request

---

We use as structure `[Ticket Code]: Ticket Description` to name a PR.

## Extra: Extensions VS Code

- Cucumber (Gherkin) Full Support

```json
  "cucumberautocomplete.steps": [
        "cypress/e2e/**/*.ts",
  ],
  "cucumberautocomplete.strictGherkinCompletion": true
```

## Author

---

IHFintech
