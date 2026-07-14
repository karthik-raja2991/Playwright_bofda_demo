/*
Objectives
1) Interacting with Combo box, button
2) Validating content on landing page. 
*/

import {test, expect} from 'playwright/test'
test("TC_004_Interacting with Combo box",async ({page})=> {
    await page.goto("https://blazedemo.com")

    // -- label means visible text
    await page.locator("select[name='fromPort']").selectOption({label:'Boston'});
    // - value means value attribute of the option tag
    await page.locator("//select[@name='toPort']").selectOption({value:'London'})
    await page.waitForTimeout(200)

    // in this we have multiple classes. so we need to have 
    // class name with . and . in browser it will be btn btn 
    await page.locator("input.btn.btn-primary").click()

    //-- validating the landing page with expected text
    await expect(page.locator("h3")).toContainText("Flights from Boston to London:")
    await page.waitForTimeout(100);  
})