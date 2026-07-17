/*
     Objectives:
        1. Environment Switching by changing baseUrl using Environement Varialbe

    Example:
        Dev-Env:        https://dev.example.com
        QA-Env:         https://qa.example.com
        Staging-Env:    https://staging.example.com
        Prod-Env:       https://www.example.com

    Config:
        Update "baseUrl" flag in use{} block inside playwright.config.ts
           ==> baseURL: process.env.BASEURL ? process.env.BASEURL : '',

    Run:
        In Windows:
            ==> SET BASEURL=https://google.com & npx playwright test tests/Playwright40.spec.ts --headed --project=chromium --reporter="list"
        
        In Linux/Ubuntu/mac:
            ==> BASEURL=https://google.com npx playwright test tests/Playwright40.spec.ts --headed --project=chromium --reporter="list"

 */

import {test, expect} from '@playwright/test'

test("TestCase40 - Env Switching", async ({page})=>{
    await page.goto("/")
    console.log("Title = " + await page.title())
})