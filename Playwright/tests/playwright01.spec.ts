/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Navigating to site
2. Title Validation
3. Body content validation

*/

import {test, expect} from 'playwright/test'
test("TC_001_Sanity_validate the title",async ({page})=> {
    await page.goto("https://blazedemo.com")

    // title validation
    await expect(page).toHaveTitle("BlazeDemo")

    // body content validator
    await expect(page.locator("body")).toContainText("Welcome to the Simple Travel Agency!")

})