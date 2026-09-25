import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Assertions', exact: true }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Java', exact: true }).click();
  await page.getByRole('button', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
  await page.getByRole('button', { name: 'Python' }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
});