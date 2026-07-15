/*
    Objectives:
        1. Scrolling the page using javascript command
        2. Getting Y axis of element and scrolling to it
        3. Programmatically turning tracing on & saving to specified .zip file
            ==> To open the trace log after execution:
                 ==> npx playwright show-trace trace/trace.zip
*/

import { test, expect, Locator } from '@playwright/test'

test("TestCase11", async ({ page }) => {
    //----Turning Tracing ON
    await page.context().tracing.start({
        live: true,         //real-time trace logging
        screenshots: true,  //timeline preview screenshots
        snapshots: true,    //dom snap & network activity
        sources: false,     //to include html source 
        title: "Trace enabled from spec file"   //title for trace window
    })

    await page.goto("https://playwright.dev/")
    await page.waitForLoadState("domcontentloaded")
    await page.waitForTimeout(2000)

    //---- Scrolling vertically 1200 pixel down i.e. y=1200
    await page.evaluate(() => { window.scrollTo(0, 1200) })
    await page.waitForTimeout(2000)

    //---- Scrolling to top of the page ==> 0,0
    await page.evaluate(() => { window.scrollTo(0, 0) })
    await page.waitForTimeout(2000)

    //---- Capturing "y" axis value of browserIcons region on the page
    let browserIcons:any = await page.locator(".crossBrowser_o5jx").boundingBox()
    let y:number = browserIcons.y

    //---Scrolling to location where browserIcons were present
    await page.evaluate((y) => { window.scrollTo(0, y) },y)
    await page.waitForTimeout(2000)

    //-----Stopping Tracing & saving to a .zip file
    await page.context().tracing.stop({path: "trace/trace.zip"})
})