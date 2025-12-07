import { test, expect } from '../fixtures';
import { loginFlow } from '../testBase/auth';
import { addProductAndOpenCart } from '../testBase/cartFlow';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';

test.describe('E2E: Login -> Add to cart -> Checkout', () => {
  test('should login, add product and verify cart', async ({ page, testData }) => {
    const { username, password } = testData.login;
    // Login
    await loginFlow(page, username, password);

    // Add product
    const productName = testData.products[0].name;
    await addProductAndOpenCart(page, productName);

    // Verify product is in cart
    await expect(page.locator(`text=${productName}`)).toBeVisible();

    // Continue to checkout (example)
    await page.click('button#checkout');
    await expect(page).toHaveURL(/.*checkout/);
  });

  test('invalid login shows error', async ({ page, testData }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('baduser', 'badpassword');
    await expect(page.locator('.error')).toContainText('Invalid');
  });
});
