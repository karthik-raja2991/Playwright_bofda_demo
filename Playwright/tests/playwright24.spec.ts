/*
    Objectives:
        1. Data driven testing
*/

const places = [
    { fromCity: "Boston", toCity: "Rome" },
    { fromCity: "Portland", toCity: "London" }
]



import { test, expect, Locator } from '@playwright/test'

places.forEach(place => {
    test(`TestCase24 - DTT - (${place.fromCity}, ${place.toCity})`, async ({ page }) => {
        //1. Using Variables to store values
        let fromCity: string = place.fromCity
        let toCity: string = place.toCity
        await page.goto("https://blazedemo.com")

        //2. Parameterizing Values of Combobox selection
        //3. Validating Before and After selection of value in Combobox
        let fromCityListBox = page.locator("select[name='fromPort']")
        let toCityListBox = page.locator("select[name='toPort']")

        await expect(fromCityListBox).toHaveValue("Paris")
        await fromCityListBox.selectOption({ label: fromCity })
        await expect(fromCityListBox).toHaveValue(fromCity)

        await expect(toCityListBox).toHaveValue("Buenos Aires")
        await toCityListBox.selectOption({ label: toCity })
        await expect(toCityListBox).toHaveValue(toCity)

        await page.locator("input.btn.btn-primary").click()

        // 4. On Landing page, validating dynamic text through parameterization
        await expect(page.locator("h3")).toContainText(`Flights from ${fromCity} to ${toCity}:`)
        await page.waitForTimeout(1000)

        //5. On Landing page, validating dynamic text through regular expression
        await expect(page.locator("h3")).toContainText(/Flights from .* to .*:/)
        await expect(page.locator("h3")).toContainText(/Flights from (\w+\s?)+ to (\w+\s?)+:/)
    });
});
