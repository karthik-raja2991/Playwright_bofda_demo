/*
    Objectives:
        1. Validating invisibility of dynamic list
        2. Validating visibility of dynamic list after typing text
        3. Dynamic List item count validation
        4. Reading Text 
            4.1 from first item
            4.2 from last item
            4.3 from ith item
        5. Reading all list items from dynamic list and validating whether
                it contains product name

*/

import { test, expect, Locator } from '@playwright/test'

test("TestCase09", async ({ page }) => {
    let productName: string = "Laptop"

    await page.goto("https://amazon.in")
    await page.waitForLoadState("domcontentloaded")

    await page.locator("#searchDropdownBox").selectOption({ label: 'Electronics' })


    let dynamicResultGrid: Locator = await page.locator("#sac-autocomplete-results-container")

    //1. Validating invisibility of dynamic list
    await expect(dynamicResultGrid).not.toBeVisible()

    await page.locator("#twotabsearchtextbox").pressSequentially(productName)

    //2. Validating visibility of dynamic list after typing text
    await expect(dynamicResultGrid).toBeVisible()

    //3. Dynamic List item count validation
    let allListItems: Locator = dynamicResultGrid.getByRole("row")
    await expect(allListItems).toHaveCount(10)

    let itemCount: number = await allListItems.count()
    console.log("#Items = " + itemCount)

    //4.1 Reading Text from first item
    let listText = await allListItems.first().textContent()
    console.log("First Text = " + listText)

    //4.2 Reading Text from 3rd item, index starts from 0
    listText = await allListItems.nth(2).textContent()
    console.log("Third Text = " + listText)

    //4.3 Reading Text from last item
    listText = await allListItems.last().textContent()
    console.log("Last Text = " + listText)

    // 5. Reading all list items from dynamic list and validating whether
    //            it contains product name
    for (let item = 0; item < itemCount; item++) {
        let listItem = await allListItems.nth(item)
        await listItem.highlight()
        listText = await listItem.textContent()
        console.log(`Item ${item + 1} / ${itemCount} = ${listText}`)
        await expect(listText).toContain(productName.toLowerCase())
        await page.waitForTimeout(500)
        await listItem.hideHighlight()
    }
    await page.waitForTimeout(2000)
})