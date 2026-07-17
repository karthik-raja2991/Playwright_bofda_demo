import {test as Base} from 'playwright/test'

// ---- defining user defined fixtures ---//
type TestFixtures = {
    blazedemodata: {
        appUrl: string, 
        fromCity: string, 
        toCity: string
    }
}

const test = Base.extend<TestFixtures>({
    blazedemodata:{
        appUrl: "https://blazedemo.com",
        fromCity: "Portland",
        toCity: "New York"
    }
})

export default test