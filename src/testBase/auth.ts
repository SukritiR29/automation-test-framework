import { Page } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

export async function loginFlow(page: Page, username: string, password: string) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(username, password);
  // optionally verify redirect or element on dashboard
  await page.waitForURL('**/dashboard', { timeout: 10000 }).catch(() => {});
}
