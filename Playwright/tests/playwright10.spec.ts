/*
    Objectives:
        1. Validating the web table
        2. Verify pattern is matching with the product name in the web tablE

*/

import { test, expect, Locator } from '@playwright/test'

test("TestCase10_Validating the web table", async ({ page }) => {

    let fromCity:string = "Paris"
    let toCity:string = "Buenos Aires"

    await page.goto("https://blazedemo.com/")
    await page.waitForLoadState("domcontentloaded")

    // -- label means visible text
    await page.locator("select[name='fromPort']").selectOption({label:fromCity});
    // - value means value attribute of the option tag
    await page.locator("//select[@name='toPort']").selectOption({value:toCity})
    await page.waitForTimeout(200)

    // in this we have multiple classes. so we need to have 
    // class name with . and . in browser it will be btn btn 
    await page.locator("input.btn.btn-primary").click()

    await expect(page.locator("h3")).toContainText(`Flights from ${fromCity} to ${toCity}:`)

    let allRows: any = await page.locator("//table[@class='table']/tbody/tr")
    let rowCount: any = await allRows.count()
    console.log("#Rows = " + rowCount)

    //initialise for loop here
    for (let row=0; row<rowCount; row++)
    {
        let rowLocator: Locator = allRows.nth(row)
        let allCells:Locator = await rowLocator.locator("td")
        let columnCount: number = await allCells.count()
        console.log("#Columns = " + columnCount)

        //initialise for loop here  
        for (let column=0; column<columnCount; column++)
        {
           let entireCell: Locator = await allCells.nth(column)
           let cellText: any = await entireCell.textContent()
           console.log("Row = " + row + " Column = " + column + " Text = " + cellText)
           switch(column)
           {
            case 0:
                await expect(entireCell.getByRole("button",{"name": "Choose This Flight"})).toBeVisible()
                break;

           case 1:
                await expect(cellText).toMatch(/\d{2,6}/)
                break;

            case 2:
                await expect(cellText).toMatch(/(\w+\s?)+/)
                break;
            
            case 3:
            case 4:
                await expect(cellText).toMatch(/\d{1,2}\:\d{2}\s(AM|PM)/)
                break;
            case 5:
                await expect(cellText).toMatch(/\$\d+\.\d{2}/)
                break;
            default:
                console.log("No validation for this column")
                throw new Error("No validation for this column")
           }



           
        }

    }
})