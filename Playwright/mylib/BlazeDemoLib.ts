
import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en_IN'

export async function searchFlight(page: Page, fromCity: string, toCity: string): Promise<void> {
    await page.locator("select[name='fromPort']").selectOption({ label: fromCity });
    await page.locator("//select[@name='toPort']").selectOption({ value: toCity })
    await page.locator("input.btn.btn-primary").click()
    await page.waitForLoadState('domcontentloaded')
  
}

export async function selectFlight(page: Page, resultNumber:number): Promise<void> {
  await page.getByRole("button").nth(resultNumber-1).click()
  await page.waitForLoadState('domcontentloaded')
}

export async function purchaseTicket(page: Page): Promise<void> {
     await expect(page.locator('#inputName').fill(faker.person.fullName()))
    await expect(page.locator('#address').fill(faker.location.postalAddress()))
    await expect(page.locator('#city').fill(faker.location.city()))
    await expect(page.locator('#state').fill(faker.location.state()))
    await expect(page.locator('#zipCode').fill(faker.location.zipCode()))
    await expect(page.locator('#cardType').selectOption({label: 'Visa'}))
    await expect(page.locator('#creditCardNumber').fill(faker.finance.creditCardNumber()))
    await expect(page.locator('#creditCardMonth').fill(faker.date.month()))
    await expect(page.locator('#creditCardYear').fill('2025'))
    await expect(page.locator('#nameOnCard').fill(faker.person.firstName()))
    await expect(page.locator('#rememberMe').click())
    await expect(page.locator('.btn.btn-primary').click())
    await page.waitForLoadState('domcontentloaded')
}

export async function acknowledgePurchase(page: Page): Promise<void> {
    await expect(page.locator("body")).toContainText("Thank you")
    await page.waitForTimeout(2000)
  
}

