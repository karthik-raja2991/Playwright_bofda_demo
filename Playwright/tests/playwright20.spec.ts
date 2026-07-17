/*
    Objectives:
        1. Reading system environment variables
        2. Run the following command to pass the API key to set the api key environemtn variable before running this spec file
        SET API_KEY=1234567890 & npx playwright test tests/playwright20.spec.ts
        in case linux
        $API_KEY=1234567890 & npx playwright test tests/playwright20.spec.ts

*/

import { test } from '@playwright/test'

const sysEnv = {
    os: process.env.OS,
    user: process.env.USERNAME,
    home: process.env.HOMEPATH, 
    computer_name: process.env.COMPUTERNAME
}

test("TestCase20", async({ page }) => {
    console.log("OS: " + sysEnv.os)
    console.log("User: " + sysEnv.user)
    console.log("Home: " + sysEnv.home)
    console.log("Computer Name: " + sysEnv.computer_name)
})