"use strict";
//------ Array Class
Object.defineProperty(exports, "__esModule", { value: true });
var arrOS = ["windows", "linux", "mac"];
var arrTools = new Array("UFT", "RFT", "TestComplete", "Ranorex");
console.log(arrOS + "\t# of items=" + arrOS.length);
console.log(arrTools + "\t# of items=" + arrTools.length);
// @ts-ignore
for (var i = 0; i < arrOS.length; i++) {
    // @ts-ignore
    console.log("arrOS[" + i + "]=" + arrOS[i]);
}
for (var j in arrTools) {
    console.log("arrTools[" + j + "]=" + arrTools[j]);
}
