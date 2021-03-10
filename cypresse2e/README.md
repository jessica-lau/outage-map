**How to run test specs in Cypress runner and view mochawesome report:**

1. Run command `npm install` in the terminal (this only needs to be run one time to install the node_module files).
2. After install completes, run command `cd cypresse2e` in the terminal to change the folder directory to the cypresse2e folder.
3. Run command `node_modules/.bin/cypress open` in the terminal to open the Cypress test runner.
4. In the Cypress test runner, click on a test spec to run it or click run all test specs to run all sequentially.

5. To generate the mochaawesome report you can run `npm run report` after the test completed. You can chain the two commands together in your CI job.

**How to run test specs in terminal/headless:**

1. Run command `npm run test` in terminal and all specs will execute.

---

## Heres some ref doc for cypress:

Example: config can be passed in through command line, or you can setup multiple cypress.json config files
`https://docs.cypress.io/guides/references/configuration.html#Command-Line`
`https://docs.cypress.io/guides/guides/launching-browsers.html#Chrome-Browsers`

---

Example: yaml run setup for CI pipeline
`https://docs.cypress.io/guides/guides/cross-browser-testing.html#Parallelize-per-browser`

You will need to have firefox and edge installed on your computer to run tests in these browsers.
