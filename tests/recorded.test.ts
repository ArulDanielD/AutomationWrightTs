import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]")
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('addanny6080@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Daniel@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('');
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('R');
  await page.getByPlaceholder('First Name').press('CapsLock');
  await page.getByPlaceholder('First Name').fill('Ram');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(text(),' My account')]")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});