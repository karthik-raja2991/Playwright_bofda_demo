"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v1 = "Hello!";
var v2 = 10;
var v3 = 10.9996;
var v4 = true;
var v5 = "Welcome";
var v6;
v6 = 2017;
// @ts-ignore
function logVarDetails(varName, varValue) {
    //------ The following variable will have scope only within this function block
    let msgToPrint;
    msgToPrint = "TypeOf " + varName + "=" + (typeof varValue) + ", value=" + varValue;
    console.log(msgToPrint);
}
logVarDetails("v1", v1);
logVarDetails("v2", v2);
logVarDetails("v3", v3);
logVarDetails("v4", v4);
logVarDetails("v5", v5);
logVarDetails("v6", v6);
