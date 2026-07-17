/*
This is for Playwright Runner method
This is my first manually created playwright spec file

1. Pausing the execution progamatically and invoking the debug window

*/

import { test, expect } from '@playwright/test'

test("TestCase35 - UI & API Integrity Testing", async ({ page }) => {
    const productName: string = "Laptop"
    await page.context().clearCookies()

    await page.goto("https://amazon.in")
    await page.waitForTimeout(2000)

    await page.locator("#searchDropdownBox").selectOption({ label: 'Electronics' })
    
    await page.route(/prefix=Laptop/, async (route) => {
        //---- To Stop matching API being sent to server
        //await route.abort()

        //--- To allow API to be sent to server & to receive response
        await route.continue()
        console.log("API Captured....")

        await route.request().response().then(res => {
            console.log("API StatusCode = " + res?.status())
            expect(res?.status()).toBe(200)
            res?.json().then(async json=>{
                const allJson = json.suggestions
                //console.log(allJson)
                for(let i=0;i<allJson.length; i++)
                {
                    let apiValue:string = allJson[i].value
                    let uiValue = await page.locator("[role='row']").nth(i).innerText()
                    console.log(`${i+1}/${allJson.length}: API=${apiValue}, UI=${uiValue}`)
                    expect(uiValue).toBe(apiValue)
                }
            })
        })
    })




    await page.locator("#twotabsearchtextbox").pressSequentially(productName,{delay:100})
    await page.waitForTimeout(1000)


})



