/*
Scrolling the page using javascript command in web page

*/

import {test, expect} from 'playwright/test'
test("TC_011_Scrolling the page using javascript",async ({page})=> {
    await page.goto("https://www.amazon.in/")

    //await page.waitForLoadState("domcontentloaded")
    await page.evaluate(() => {
        window.scrollTo(1000,1000)
    })
    await page.waitForTimeout(5000)
    await page.evaluate(() => {
        window.scrollTo(0,0)
    })
    await page.waitForTimeout(5000)
})