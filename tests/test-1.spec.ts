import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
 // await page.getByLabel('Search', { exact: true }).fill('playwright.dev');
  await page.locator("//textarea[@name='q']").fill('playwright.dev')
  await page.keyboard.press('Enter')
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await expect(page.getByText('Getting started')).toBeVisible
  await page.getByRole('link',{ name: 'Getting' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('tab', { name: 'yarn' }).click(); 
 // await page.mouse.down(); 
  await page.getByRole('link', { name: 'Twitter' }).focus();
   await page.mouse.up();
   await page.screenshot({ path: 'screenshot1.png', fullPage: true });
});