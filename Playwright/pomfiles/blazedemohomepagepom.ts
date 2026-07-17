import {Page, Locator} from '@playwright/test'

export default class HomePage
{
    page:Page

    constructor(page:Page)
    {
        this.page = page
    }

    getFromCityListBox():Locator{
        return this.page.locator("select[name='fromPort']")
    }

    getToCityListBox():Locator{
        return this.page.locator("select[name='toPort']")
    }

    getFindFlightsButton():Locator{
        return this.page.locator("input.btn.btn-primary")
    }

}
