import { Page } from '@playwright/test';

export default class ProductPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  productCardSelector(productName: string) {
    return `text=${productName}`;
  }

  async addProductToCart(productName: string) {
    const selector = this.productCardSelector(productName);
    await this.page.click(selector);
    // assume product page has add-to-cart button
    await this.page.click('button#add-to-cart');
  }

  async openCart() {
    await this.page.click('a[href="/cart"]');
  }
}
