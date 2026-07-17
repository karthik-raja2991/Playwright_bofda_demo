/*
Calling user defined functiono in test block

*/

import {test, expect} from 'playwright/test'
import {acknowledgePurchase, purchaseTicket,searchFlight,selectFlight} from '../mylib/BlazeDemoLib'
test("TC_029_User defined function in test block",async ({page})=> {
    await page.goto("https://blazedemo.com")
    await searchFlight(page, "Boston", "New York")
    await selectFlight(page, 2)
    await purchaseTicket(page)
    await acknowledgePurchase(page)

  

})