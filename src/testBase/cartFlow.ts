import { Page } from '@playwright/test';
import ProductPage from '../pages/ProductPage';

export async function addProductAndOpenCart(page: Page, productName: string) {
  const p = new ProductPage(page);
  await p.addProductToCart(productName);
  await p.openCart();
}
