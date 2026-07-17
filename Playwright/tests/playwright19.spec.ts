/*
    Objectives:
        1. Playwright hooks techniques - beforeAll, afterAll, beforeEach, afterEach 
*/

import { test, expect, Locator } from '@playwright/test'


test.beforeAll(async () => {
    console.log("Before All - Test Cases")
})

test.afterAll(async() =>{
    console.log("After all the test cases")
})

test.beforeEach(async() => {
    console.log("Starting the execution" + test.info().title)
})

test.afterEach(async() => {
    console.log("The status of the test case is" + test.info().status)
})

test("TestCase19-1", async ({ page }) => {
    await page.goto("https://blazedemo.com")
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle("BlazeDemo")
})

test("TestCase19-2", async ({ page }) => {
    await page.goto("https://google.com")
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle("Google")
})

test("TestCase19", async ({ page }) => {
    await page.goto("https://bing.com")
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle(/Bing/)
    
})

