import { Page } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly username = 'input[name="username"]';
  readonly password = 'input[name="password"]';
  readonly submit = 'button[type="submit"]';
  readonly error = '.error';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.submit);
  }

  async getErrorText() {
    return this.page.textContent(this.error);
  }
}
