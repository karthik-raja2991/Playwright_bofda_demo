/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Pausing the execution progamatically and invoking the debug window

*/

import {test, expect} from 'playwright/test'
test("TC_001_validate the title",async ({page})=> {
    await page.goto("https://blazedemo.com")

    // title validation
    await expect(page).toHaveTitle("BlazeDemo")

    // to olpen debug window
    await page.pause()

    // body content validator
    await expect(page.locator("body")).toContainText("Welcome to the Simple Travel Agency!")

})