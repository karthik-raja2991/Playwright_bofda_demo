/*
    Objectives:
        1. REST API - CRUD Operation Testing
            C - Create API      - POST Request
            R - Retrieve API    - GET Request
            U - Update API      - PUT / PATCH Request
            D - Delete API      - DELETE Request
            
*/

import {test, expect} from '@playwright/test'

const apiBaseEndpointUrl:string = "https://jsonplaceholder.typicode.com"

test("TestCase37 - CRUD - GET API", async ({request})=>{
    await request.get(`${apiBaseEndpointUrl}/posts/1`).then(async res=>{
        expect(res.status()).toBe(200)
        const jsonResponse = await res.json()
        console.log(jsonResponse)
        expect(jsonResponse).toHaveProperty('userId', 1)
        expect(jsonResponse.id).toBe(1)
        expect(jsonResponse.title).toContain("provident")
    })
})


test("TestCase37 - CRUD - POST API", async ({request})=>{
    await request.post(`${apiBaseEndpointUrl}/posts`,{
        data:{
            userId: 1234,
            title: "Trainer",
            body: "Playwright"
        },
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(async res=>{
        expect(res.status()).toBe(201)
        const jsonResponse = await res.json()
        console.log(jsonResponse)
        expect(jsonResponse).toHaveProperty('userId', 1234)
        expect(jsonResponse.title).toContain("Trainer")
        expect(jsonResponse.body).toContain("Playwright")
        expect(jsonResponse.id).toBeGreaterThan(100)
    })
})


test("TestCase37 - CRUD - PUT API", async ({request})=>{
    await request.put(`${apiBaseEndpointUrl}/posts/1`,{
        data:{
            userId: 1234,
            title: "Trainer",
            body: "Playwright 2026"
        },
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(async res=>{
        expect(res.status()).toBe(200)
        const jsonResponse = await res.json()
        console.log(jsonResponse)
        expect(jsonResponse).toHaveProperty('userId', 1234)
        expect(jsonResponse.title).toContain("Trainer")
        expect(jsonResponse.body).toContain("Playwright 2026")
        expect(jsonResponse.id).toBe(1)
    })
})


test("TestCase37 - CRUD - DELETE API", async ({request})=>{
    await request.delete(`${apiBaseEndpointUrl}/posts/1`).then(async res=>{
        expect(res.status()).toBe(200)
    })
})
