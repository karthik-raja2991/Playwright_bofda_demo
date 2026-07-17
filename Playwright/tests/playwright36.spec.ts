/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Pausing the execution progamatically and invoking the debug window

*/

import { test, expect } from '@playwright/test'

test("TestCase34 - SessionCreation", async ({ page }) => {
    await page.goto("https://demoblaze.com")
    await page.waitForTimeout(2000)

    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("admin")
    await page.locator("#loginpassword").fill("admin")
    await page.locator("//button[text()='Log in']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("#login2")).not.toBeVisible()

    await expect(page.locator("#nameofuser")).toContainText("Welcome admin")

    //----- Saving Session to external .json file
    await page.context().storageState({ path: './mylib/demoblazesession.json' })

    await page.locator("#logout2").click()
    await expect(page.locator("#login2")).toBeVisible()
    await page.waitForTimeout(2000)
})

test.describe("Restoring Session", () => {
    test.use({
        storageState: './mylib/demoblazesession.json'
    })


    test("TestCase34 - SessionRestore", async ({ page }) => {
        await page.goto("https://demoblaze.com")
        await page.waitForTimeout(4000)
        await expect(page.locator("#login2")).not.toBeVisible()
        await expect(page.locator("#nameofuser")).toContainText("Welcome admin")
        await page.locator("#logout2").click()
        await expect(page.locator("#login2")).toBeVisible()
        await page.waitForTimeout(2000)
    })
})

