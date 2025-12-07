import { Page } from '@playwright/test';

export const steps = {
  async login(page: Page, username: string, password: string) {
    // use page objects in real tests; keep this as example of a high-level step
    await page.goto('/login');
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('button[type="submit"]');
  }
};
