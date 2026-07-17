/*
    Objectives:
        1. Passing user defined fixtures along with page fixtures in test block
    
        Note:- Create user defined fixture in mylib/ture
*/

import {expect} from '@playwright/test'
import test from '../mylib/MyFixtures'

test("TestCase21", async ({page, blazedemodata})=>{
    //1. Using Variables to store values
    let fromCity:string = blazedemodata.fromCity
    let toCity:string = blazedemodata.toCity

    await page.goto(blazedemodata.appUrl)

    //2. Parameterizing Values of Combobox selection
    //3. Validating Before and After selection of value in Combobox
    let fromCityListBox:any = await page.locator("select[name='fromPort']")
    let toCityListBox:any = await page.locator("select[name='toPort']")
    
    await expect(fromCityListBox).toHaveValue("Paris")
    await fromCityListBox.selectOption({label: fromCity})
    await expect(fromCityListBox).toHaveValue(fromCity)

    await expect(toCityListBox).toHaveValue("Buenos Aires")
    await toCityListBox.selectOption({label: toCity})
    await expect(toCityListBox).toHaveValue(toCity)

    await page.locator("input.btn.btn-primary").click()

    // 4. On Landing page, validating dynamic text through parameterization
    await expect(page.locator("h3")).toContainText(`Flights from ${fromCity} to ${toCity}:`)
    await page.waitForTimeout(1000)

    //5. On Landing page, validating dynamic text through regular expression
    await expect(page.locator("h3")).toContainText(/Flights from .* to .*:/)
    await expect(page.locator("h3")).toContainText(/Flights from (\w+\s?)+ to (\w+\s?)+:/)
})