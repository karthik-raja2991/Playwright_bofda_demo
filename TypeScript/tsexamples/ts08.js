"use strict";
//------ Optional Argument sCompany
Object.defineProperty(exports, "__esModule", { value: true });
function logToolInfo(sName, version, sCompany) {
    if (sCompany == undefined) {
        console.log(sName + "-" + version);
    }
    else {
        console.log(sName + "-" + version + " from " + sCompany);
    }
}
logToolInfo("UFT", 14.01, "Hp");
logToolInfo("RFT", 14.01);
