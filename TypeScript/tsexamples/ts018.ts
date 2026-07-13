
//------ Calling External Module defined in TS17

import lib = require("./ts17")


var objTool = new lib.org.myToolClass("Cypress", 14.0)


console.log("Calling module class fields...")
console.log(objTool.name)
console.log(objTool.version)