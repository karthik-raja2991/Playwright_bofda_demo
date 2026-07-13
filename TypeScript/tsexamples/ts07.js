"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v1 = "Hello!";
var v2 = 10;
var v3 = 10.9996;
var v4 = true;
var v5 = "Welcome";
var v6;
v6 = 2017;
function getVarDetails(varName, varValue) {
    return ("TypeOf " + varName + "=" + (typeof varValue) + ", value=" + varValue);
}
console.log(getVarDetails("v1", v1));
console.log(getVarDetails("v2", v2));
console.log(getVarDetails("v3", v3));
console.log(getVarDetails("v4", v4));
console.log(getVarDetails("v5", v5));
console.log(getVarDetails("v6", v6));
