"use strict";
//------ String as Class
Object.defineProperty(exports, "__esModule", { value: true });
var sToolName = new String("Selenium WebDriver 3.5");
function logVarDetails2(nVar) {
    console.log("type of sToolName=" + (typeof nVar));
    console.log("instance of String=" + (nVar instanceof String));
    console.log("Actual Value = " + nVar);
    console.log("Length = " + nVar.length);
    console.log("charAt(4) = " + nVar.charAt(4));
    console.log("indexOf('Web') = " + nVar.indexOf("Web"));
    console.log("substr(9,3) = " + nVar.substr(9, 3));
    console.log("toUpperCase = " + nVar.toUpperCase());
    console.log("toLowerCase = " + nVar.toLowerCase());
    console.log("match('\\w+') = " + nVar.match("\\w+"));
}
logVarDetails2(sToolName);
