/*
Objectives
1) Performing Web first assertion. (Internallly uses auto-wait if element is nor rendered.
 Default wait time is 5 seconds)
    Title
    Content
    element visibility
    element status
    element default value
*/

import {test, expect} from 'playwright/test'
test("TC_005_Sanity_Web first assertions",async ({page})=> {
    await page.goto("https://blazedemo.com")

    //validate the title
    await expect(page).toHaveTitle("BlazeDemo")

    await expect(page.locator("body")).toContainText("Welcome to the Simple Travel Agency!")

    // Visibility 
    await expect(page.locator("select[name='fromPort']")).toBeVisible()
    await expect(page.locator("select[name='toPort']")).toBeVisible()
    await expect(page.locator("input.btn.btn-primary")).toBeVisible()

    // element state
    await expect(page.locator("select[name='fromPort']")).toBeEnabled()
    await expect(page.locator("select[name='toPort']")).toBeEnabled()
    await expect(page.locator("input.btn.btn-primary")).toBeEnabled()

    // Default value
    await expect(page.locator("select[name='fromPort']")).toHaveValue('Paris')
    await expect(page.locator("select[name='toPort']")).toHaveValue('Buenos Aires')
    await expect(page.locator("input.btn.btn-primary")).toHaveAttribute('value','Find Flights')


    


})