/*
Rest API - GET API validation
REst API - Mocking API Response
*/

import { json } from 'node:stream/consumers'
import {test, expect} from 'playwright/test'
test("TC_038_Get API original Response",async ({request})=> {
    await request.get("https://jsonplaceholder.typicode.com/").then(async res=> {
        expect(res.status).toBe(200)
        const jsonresponse = await res.json()
        console.log(res.json())
        expect(jsonresponse).toHaveProperty('userid',1)
        expect(jsonresponse.id).toBe(1)
        expect(jsonresponse.title).toContain("provident")
    })
})


test("TestCase36 - GET API - Mock Response", async ({request, page})=>{
    const mockResponse = {
        id: 1234,
        name: 'Trainer',
        tool: 'Playwright'
    }

    const apiPattern="**/posts/1"
    await page.route(apiPattern, async (route)=>{
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockResponse)
        })
    })

    const apiURL:string = "https://jsonplaceholder.typicode.com/posts/1"

    let responsePromise = page.waitForResponse(apiURL)
    await page.goto(apiURL)
    let response = await responsePromise
    console.log((await response.body()).toString())
    expect(response.status()).toBe(200)
    let jsonResponse = await response.json()
    expect(jsonResponse.id).toBe(1234)
    expect(jsonResponse.name).toBe("Trainer")
    expect(jsonResponse.tool).toBe("Playwright")
})