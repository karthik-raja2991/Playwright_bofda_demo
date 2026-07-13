"use strict";
//------ Classes
Object.defineProperty(exports, "__esModule", { value: true });
class ToolData {
    name;
    version;
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
    logToolData() {
        console.log("Name=" + this.name + "\nVersion=" + this.version);
    }
}
var oSelenium = new ToolData("Selenium", 3.5);
oSelenium.logToolData();
