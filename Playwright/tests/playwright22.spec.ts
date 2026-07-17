/*
    Objectives:
        1. End to end automation of blazedemo appliation 
        2. we use faker class to create the data and submit the application
*/

import { test, expect, Locator } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en_IN'

test("TestCase22", async ({ page }) => {
    // navigate to blazedemo application
    let fromCity: string = 'Boston'
    let toCity: string = 'London'
    await page.goto("https://blazedemo.com/")

    //Search for the flights and click on enter button
    await page.locator("select[name='fromPort']").selectOption({ label: fromCity });
    await page.locator("//select[@name='toPort']").selectOption({ value: toCity })
    await page.locator("input.btn.btn-primary").click()

    // Validate th search results page is loaded and click on chosse this flight
    await expect(page.locator("h3")).toContainText(`Flights from ${fromCity} to ${toCity}:`)
    let allRows: any = await page.locator("//table[@class='table']/tbody/tr")
    let rowCount: any = await allRows.count()

    for (let row = 0; row < rowCount; row++) {
        let rowLocator: Locator = allRows.nth(row)
        let allCells: Locator = await rowLocator.locator("td")
        let columnCount: number = await allCells.count()
        console.log("#Columns = " + columnCount)

        //initialise for loop here  
        let entireCell: Locator = await allCells.nth(1)
        const cellText = await entireCell.textContent()
        console.log(cellText)

        if (cellText?.trim() === "42") {
            let findFlightbutton: Locator = entireCell.getByRole("button",{"name": "Choose This Flight"})
            findFlightbutton.click()
        }
    }

    // navigate to other page and confirm if page is loaded
    await expect(page.locator("h2")).toContainText(/Your flight from [A-Z]{3} to [A-Z]{3} has been reserved./)

    // FILL all the details in the purchase screen using faker method
    await expect(page.locator('#inputName').fill(faker.person.fullName()))
    await expect(page.locator('#address').fill(faker.location.postalAddress()))
    await expect(page.locator('#city').fill(faker.location.city()))
    await expect(page.locator('#state').fill(faker.location.state()))
    await expect(page.locator('#zipCode').fill(faker.location.zipCode()))
    await expect(page.locator('#cardType').selectOption('Visa'))
    await expect(page.locator('#creditCardNumber').fill(faker.finance.creditCardNumber()))
    await expect(page.locator('#creditCardMonth').fill(faker.date.month()))
    await expect(page.locator('#creditCardYear').fill('2025'))
    await expect(page.locator('#nameOnCard').fill(faker.person.firstName()))
    await expect(page.locator('#rememberMe').click())
    await expect(page.locator('.btn.btn-primary').click())
})
