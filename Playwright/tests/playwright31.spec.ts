/*
iFrame validation

*/

import {test, expect} from 'playwright/test'
test("TC_001_Sanity_validate the title",async ({page})=> {
    await page.goto("https://jqueryui.com/spinner/")

    const framePage = await page.locator("iframe.demo-frame")
    await framePage.locator("a.ui-spinner-up").click()
    await expect(page.locator('#spinner')).toHaveAttribute("aria-valuenow","1")
    await page.waitForTimeout(5000)

    

})