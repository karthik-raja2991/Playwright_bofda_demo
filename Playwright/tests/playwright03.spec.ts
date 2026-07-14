/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Recording Script using playwright codegen utility

==> to invokke
npx playwright codegen
codegen-> buiilt in utlity in playwright framework, the action we perform equivanlent 
code will be written.

following code got added from codegen
*/

import { test, expect } from '@playwright/test';

test('TC_003_Record and PlayBack', async ({ page }) => {
  await page.goto('https://blazedemo.com/');
  await expect(page.getByRole('heading', { name: 'Welcome to the Simple Travel' })).toBeVisible();
  await expect(page.locator('body')).toContainText('The is a sample site you can test with BlazeMeter!');
  await expect(page.getByRole('button')).toContainText('Find Flights');
  await expect(page.locator('select[name="fromPort"]')).toHaveValue('Paris');
  await expect(page.getByRole('button')).toMatchAriaSnapshot(`- button "Find Flights"`);
});

