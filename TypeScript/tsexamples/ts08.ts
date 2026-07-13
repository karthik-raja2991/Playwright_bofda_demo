//------ Optional Argument sCompany

function logToolInfo(sName:string, version:number, sCompany?:string)
{
    if (sCompany == undefined)
    {
        console.log(sName + "-" + version)
    }
    else
    {
        console.log(sName + "-" + version + " from " + sCompany)
    }
}


logToolInfo("UFT", 14.01, "Hp")
logToolInfo("RFT", 14.01)

