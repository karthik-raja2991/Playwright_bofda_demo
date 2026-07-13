"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    logMsg() {
        console.log("Hi...from logMsg...");
    }
    getYear() {
        return 2017;
    }
}
var oMyClassObj = new MyClass();
oMyClassObj.logMsg();
var sReturnValue = oMyClassObj.getYear();
console.log("Return value = " + sReturnValue);
