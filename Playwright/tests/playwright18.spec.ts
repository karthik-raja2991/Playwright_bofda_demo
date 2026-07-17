/*
    Objectives:
        1. Responsive Page Content Validation
            1.1 If width of browser is large, Doc link should be displayed
            1.2 If width of browser is small, Doct link should be hided
        2. ViewPort Simulation - i.e. changing the width & height of browser
                - default viewport size: 1280,720  
*/

import { test, expect, Locator } from '@playwright/test'

test("TestCase18", async ({ page }) => {
    await page.goto("https://playwright.dev")
    await page.waitForTimeout(2000)
    let docLink: Locator = await page.getByRole("link", { name: 'Docs', exact: true })
    await expect(docLink).toBeVisible()
    console.log(`Default viewPort = ${await page.viewportSize()?.width},${await page.viewportSize()?.height} `)

    //----Changing the browser width & height
    await page.setViewportSize({ width: 400, height: 800 })
    console.log(`Changed viewPort = ${await page.viewportSize()?.width},${await page.viewportSize()?.height} `)
    await expect(docLink).not.toBeVisible()
    await page.waitForTimeout(2000)

    //----Changing back to default width & height
    await page.setViewportSize({ width: 1280, height: 720 })
    console.log(`Changed viewPort = ${await page.viewportSize()?.width},${await page.viewportSize()?.height} `)
    await expect(docLink).toBeVisible()

    await page.waitForTimeout(2000)

})

