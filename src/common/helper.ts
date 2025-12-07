import { Page } from '@playwright/test';
import { log } from './logger';

export async function clickWhenVisible(page: Page, selector: string) {
  try {
    await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
    await page.click(selector);
  } catch (err) {
    log.error('clickWhenVisible failed', selector, err);
    throw err;
  }
}

export async function fillAndEnter(page: Page, selector: string, text: string) {
  await page.fill(selector, text);
  await page.press(selector, 'Enter');
}
