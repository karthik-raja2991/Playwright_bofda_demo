/*
    Objectives:
        1. Simulating Mouse Hover to get dynamic menu & clicking on menu item
        2. Synchronizing till menu displays
*/

import {test, expect, Locator} from '@playwright/test'

test("TestCase12", async ({page})=>{
    await page.goto("https://playwright.dev")
    
    let logoText:Locator = await page.locator(".navbar__title")
    //-----Validating before mouse hover
    await expect(logoText).toHaveText("Playwright")

    await page.locator("div.navbar__item").hover()
    //----- Synchronizing till menu displays
    await page.waitForSelector("ul.dropdown__menu", {timeout:3000})
    

    await page.getByRole("link", {name: 'Java'}).first().click()
    await page.waitForTimeout(2000)
    //-----Validating after mouse hover
    await expect(logoText).toHaveText("Playwright for Java")
 
})