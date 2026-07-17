/*
    Objectives:
        1. Generating fake test data using faker.js

        Install:
            ==> npm i -D @faker-js/faker
*/

import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en_IN'

test("TestCase22", async ({ page }) => {
    console.log(faker.airline.flightNumber())
    console.log(faker.commerce.productName())
    console.log(faker.person.fullName())
    console.log(faker.internet.email())
    console.log(faker.finance.creditCardNumber())
    console.log(faker.number.bigInt({ min: 1111, max: 2222 }))
})
