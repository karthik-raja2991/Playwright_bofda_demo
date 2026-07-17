import { test, expect } from "@playwright/test"

/*
  Main Objective:
        1. Allowing/Enabling the notifications
    2. Reading the notification details
    3. Validating Notification Details

*/

test("TestCase16", async ({ context }) => {
    await context.grantPermissions(["notifications"])
    let page = await context.newPage()

    await page.goto("https://web-push-book.gauntface.com/demos/notification-examples/")
    await page.waitForTimeout(2000)

    await page.locator(".c-toggle.js-example-toggle").click()
    await page.waitForTimeout(2000)

    await page.locator(".c-button.js-notification-title-body").click()
    await page.waitForTimeout(2000)

    //----------- Reading Notification.
    let notificationDetails = await page.evaluate(async () => {
        const reg = await navigator.serviceWorker.getRegistration('/demos/notification-examples/service-worker.js');
        //@ts-ignore
        const notifications = await reg.getNotifications();

        let currentNotification;
        let details = [];
        for (let i = 0; i < notifications.length; i++) {
            //@ts-ignore
            if (!notifications[i].title.indexOf("Simple Title") == 0) {
                continue
            }
            currentNotification = notifications[i];
        }
        //@ts-ignore
        details.push(currentNotification.title);
        //@ts-ignore
        details.push(currentNotification.body);

        //Closing the notification
        //@ts-ignore
        currentNotification.close()

        return details;
    })

    await console.log("Current Notification = " + notificationDetails)
    //@ts-ignore
    await expect(notificationDetails[0]).toContain("Simple Title")
    //@ts-ignore
    await expect(notificationDetails[1]).toMatch(/Simple piece of body text.*/)

    await page.waitForTimeout(2000)
})
