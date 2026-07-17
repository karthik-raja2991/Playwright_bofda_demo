/*
    Objectives:
        1. Localization Testing
*/

import { test, expect, Locator } from '@playwright/test'

test.describe("English Page Testing", () => {
    test("TestCase15 - default English Page", async ({ page }) => {
        //--- English Web site - default one
        await page.goto("https://www.google.com")
        await page.waitForTimeout(3000)
    })
})

test.describe("Japanese Page Testing", () => {
    test.use({
        locale: 'ja', 
    })
    test("TestCase15 - Japanese Page", async ({ page }) => {
        //--- Japanese Web site - Localized one
        await page.goto("https://www.google.com")
        await page.waitForTimeout(3000)
        await expect(page.locator('body')).toContainText("Google 検索")
    })
})
