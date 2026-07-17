/*
File upload Automation

*/

import {test, expect} from 'playwright/test'
test("TC_026_File upload Functionality",async ({page})=> {
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    await page.locator("input[name='upfile']").setInputFiles(['./testdata/FlightData.csv'])
    await page.waitForTimeout(2000)
    await page.getByRole("button",{name:"Press"}).click()
    await page.waitForTimeout(2000)
    await expect(page.locator("body")).toContainText("Boston")
    await page.waitForTimeout(2000)
})