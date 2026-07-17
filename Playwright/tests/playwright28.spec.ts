/*
File download Automation

Note: Create a folder in root level of the project by name "" downloads

before running the spec file
*/

import {test, expect} from 'playwright/test'
test("TC_026_File upload Functionality",async ({page})=> {
    const downloadPromise = page.waitForEvent("download")
    await page.goto("https://chromedriver.storage.googleapis.com/index.html?path=114.0.5735.90/")
    
    // - Registering upcomign download event to a provate variable
    await page.getByRole("link",{name: 'chromedriver_linux64.zip'}).click()
    const download = await downloadPromise

    console.log("Default download location" +await download.path())

    await download.saveAs('./downloads/' + download.suggestedFilename())
    await download.delete()

})