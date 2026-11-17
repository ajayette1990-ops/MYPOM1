# SauceDemo Playwright Framework

A TypeScript end-to-end test framework using Playwright Test and the Page Object Model.

## Setup

```bash
npm install
npx playwright install chromium
```

## Run tests

```bash
npm test
npm run test:headed
npm run typecheck
```

The HTML report is saved to `playwright-report/` and can be opened with `npm run test:report`.

## Project structure

```text
src/
  pages/         Page objects and reusable page actions
  test-data/     Test users and other test data
  utils/         Shared Playwright fixtures
tests/
  auth/          Authentication tests
playwright.config.ts
tsconfig.json
```

The login test uses SauceDemo's `standard_user` account and verifies that the inventory page loads with six products.
