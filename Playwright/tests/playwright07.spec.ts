/*
    Objectives:
        1. Search Automation in amazon.in page
        2. Waiting till page loaded using domcontentloaded state along with timeout
        3. Chaining of Locators & Reading Text from WebPage
        4. Taking snapshot of landing page

*/

import {test, expect} from '@playwright/test'

test("TestCase07", async ({page})=>{
    
    // 1. Search Automation in amazon.in page
    await page.goto("https://amazon.in")
    await page.locator("#searchDropdownBox").selectOption({label: 'Electronics'})
    await page.locator("#twotabsearchtextbox").fill("Laptop")
    await page.locator("#nav-search-submit-button").click()

    //2. Waiting till page loaded using domcontentloaded state along with timeout
    await page.waitForLoadState("domcontentloaded", {timeout: 60000})

    await page.waitForTimeout(2000)
    //3. Chaining of Locators & Reading Text from WebPage using promise method
    //Method-1
    await page.locator(".s-breadcrumb-header-text").locator("h2").textContent().then(txt =>{
        console.log("Result = " + txt?.trim())
    })

    //Method-2
    await page.locator(".s-breadcrumb-header-text").getByRole("heading").innerText().then(txt =>{
        console.log("Result = " + txt?.trim())
    })
   
    //4. Taking snapshot of landing page
    //Method-1 Only visible page
    await page.screenshot({path: './snapshot/visiblepage.png'})

    //Method-2 Full page
    await page.screenshot({path: './snapshot/fullpage.png', fullPage: true})
})