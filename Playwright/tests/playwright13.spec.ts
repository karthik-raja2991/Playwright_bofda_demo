/*
    Objectives:
        1. Hard Assertion - terminates execution if fails
        2. Soft Assertion - continues execution even after it fails
*/

import { test, expect, Locator } from '@playwright/test'

test("TestCase13 - Hard Assertion", async ({ page }) => {
    await page.goto("https://blazedemo.com")

    //---- Title
    await expect(page).toHaveTitle("BlazeDemo")

    //---- Content
    //---- Following step fails and terminates execution
    await expect(page.locator("body")).toContainText("Welcome to BlazeDemo")

    //---- Element Visibility
    await expect(page.locator("select[name='fromPort']")).toBeVisible()
    await expect(page.locator("select[name='toPort']")).toBeVisible()
    await expect(page.locator("input.btn.btn-primary")).toBeVisible()

})


test("TestCase13 - Soft Assertion", async ({ page }) => {
    await page.goto("https://blazedemo.com")

    //---- Title
    await expect.soft(page).toHaveTitle("BlazeDemo")

    //---- Content
    //---- Execution continues even though next line fails
    await expect.soft(page.locator("body")).toContainText("Welcome to BlazeDemo")

    //---- Element Visibility
    await expect.soft(page.locator("select[name='fromPort']")).toBeVisible()
    await expect.soft(page.locator("select[name='toPort']")).toBeVisible()
    await expect.soft(page.locator("input.btn.btn-primary")).toBeVisible()

})