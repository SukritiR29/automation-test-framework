# Playwright Automation Framework (SDET Demo)

## Overview
A scalable Playwright + TypeScript automation framework demonstrating UI + API automation, POM, fixtures, and CI integration. 

## Quickstart
1. Install:
   ```bash
   npm ci
   npx playwright install

 ## 🚀 Focused Areas

- **Automation Framework Architecture** – Modular Playwright + TypeScript framework with clear separation of pages, workflows, fixtures, and utilities.
- **Page Object Model (POM)** – Well-structured page classes containing locators, reusable actions, and behavior-level functions.
- **UI Automation (Playwright)** – End-to-end flow testing, cross-browser execution, network mocking, retries, and trace-driven debugging.
- **API Testing** – API validations using Playwright’s request API along with reusable API helper functions.
- **Data-Driven Testing** – Dynamic test data loading from `/testData` using `testHelper.ts` and strongly typed input properties.
- **Reusable Workflows** – Business logic functions consolidated in `/testbase` for clean and maintainable test files.
- **Custom Utilities & Logging** – Helper utilities, error enums, detailed step logs, and structured debugging support.
- **Fixtures & Test Setup** – Custom Playwright fixtures for authenticated contexts, environment configuration, and test isolation.
- **Reporting** – Playwright HTML reports, trace viewer support, and custom merged reporting using `mergeReports.ts`.
- **CI/CD Ready** – GitHub Actions integration for automated execution, report artifacts, and parallelized testing.
- **TypeScript Best Practices** – Strong typing, clean abstraction layers, reusable interfaces, and readable code patterns.
