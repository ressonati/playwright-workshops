// @ts-check
import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('logout-button').click();
  await page.getByTestId('login-button').click();
  // @ts-ignore
  await page.getByTestId('login-username').fill(process.env.USER);
  // @ts-ignore
  await page.getByTestId('login-password').fill(process.env.PASSWORD);
  await page.getByTestId('login-button').click();

  await expect(page.getByTestId('welcome-msg')).toBeVisible();
});
