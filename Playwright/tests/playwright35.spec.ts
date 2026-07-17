/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Navigating to site
2. Title Validation
3. Body content validation

*/
import {test, expect} from '@playwright/test'

test("TestCase33", async ({page})=>{
    await page.goto("https://amazon.in")
    await page.waitForTimeout(5000)

    let lskey = await page.evaluate(()=>{
        return localStorage.getItem("csm:adb")
    })
    expect(lskey).toBe("adblk_no")

    let sskey = await page.evaluate(()=>{
        return sessionStorage.getItem("eelsts")
    })
    expect(sskey).toBe("scs")
 
    let allCookies = await page.context().cookies("https://amazon.in")
    //@ts-ignore
    let cookie = allCookies.find(cookie => cookie.name == "i18n-prefs")
    
    expect(cookie).not.toBeNull()
    expect(cookie?.value).toBe("INR")
})