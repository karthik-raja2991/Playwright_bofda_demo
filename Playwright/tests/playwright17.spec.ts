import { test, expect } from "@playwright/test"

/*
  Objective:
    1. Visibility of language options in Desktop Site
    2. Invisibility of language options in Desktop Site 
*/

test.describe("Desktop Site", () => {
    test("TestCase17 - Desktop Site", async ({ page }) => {
        await page.goto("https://www.google.com")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("//input[@value='Google Search']").nth(1)).toBeVisible()
        await page.waitForTimeout(1000)
    })
})


test.describe("Mobile Compatible Site Testing", () => {
    test.use({
        userAgent: 'Mozilla/5.0 (Linux; Android 15; SM-S911B Build/AP3A.240905.015.A2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/150.0.7871.46 Mobile Safari/537.36 TvPlus/102903200'
    })
    test("TestCase17 - Mobile Site", async ({ page }) => {
        await page.goto("https://www.google.com")
        await page.waitForLoadState("domcontentloaded")
        await expect(page.locator("//input[@value='Google Search']").first()).not.toBeVisible()
        await page.waitForTimeout(2000)
    })
})


