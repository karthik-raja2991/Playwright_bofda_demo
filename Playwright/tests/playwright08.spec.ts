/*
    Objectives:
        Handling Duplicate elements & validating matching numbers
            1. Using Filter
            2. Using index
            3. Using Relative Locator
        2. Configuring Screenshot & Video Recording
            2.1 Within Spec File
            2.2 Within playwright.config.ts
*/

import { test, expect } from '@playwright/test'

test.use({
    video: {
        mode: 'on',
        size: { width: 800, height: 600 }
    },
    screenshot: 'on'
})

test("TestCase08", async ({ page }) => {
    await page.goto("https://blazedemo.com")
    await page.waitForTimeout(2000)

    let allComboBoxes: any = await page.getByRole("combobox")
    //Validating count of matching elements
    await expect(allComboBoxes).toHaveCount(2)

    //1. Using Filter
    await allComboBoxes.filter({ hasText: 'Paris' }).highlight()
    await page.waitForTimeout(1000)
    await allComboBoxes.filter({ hasText: 'Paris' }).hideHighlight()


    //2. Using index. index starts from 0
    await allComboBoxes.nth(1).highlight()
    await page.waitForTimeout(1000)
    await allComboBoxes.nth(1).hideHighlight()

    //3. Using Relative Locator
    await page.locator("//form").locator("//child::select[1]").highlight()
    await page.waitForTimeout(1000)
    await page.locator("//form").locator("//child::select[1]").hideHighlight()

    await allComboBoxes.nth(0).locator("//following-sibling::select").highlight()
    await page.waitForTimeout(1000)
    await allComboBoxes.nth(0).locator("//following-sibling::select").hideHighlight()

    await page.waitForTimeout(2000)
})