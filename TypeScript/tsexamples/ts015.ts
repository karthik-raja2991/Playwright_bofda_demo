//------ Classes

class ToolData
{
    name:string
    version:number

    constructor(name:string, version:number)
    {
        this.name = name
        this.version = version
    }

    logToolData():void
    {
        console.log("Name=" + this.name + "\nVersion=" + this.version)
    }

}



var oSelenium = new ToolData("Selenium",3.5)
oSelenium.logToolData()

