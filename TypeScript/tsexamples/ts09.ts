//------ Number as Class

var numValue = new Number(1234.56789)


function logVarDetails1(nVar:any)
{
    console.log("type of numValue=" + (typeof nVar) + ", instance of Number=" + (nVar instanceof Number) + ", value="+ nVar)
    console.log("Actual Value = " + nVar)
    console.log("Exponential Value = " + nVar.toExponential())
    console.log("Fixed Value = " + nVar.toFixed())
    console.log("Fixed(2) Value = " + nVar.toFixed(2))
    console.log("Fixed(8) Value = " + nVar.toFixed(8))
    console.log("Precision Value = " + nVar.toPrecision())
    console.log("Precision(2) Value = " + nVar.toPrecision(2))
    console.log("Precision(8) Value = " + nVar.toPrecision(8))
    console.log("String Value = " + nVar.toString() + ", output type =" + (typeof nVar.toString()))

}

logVarDetails1(numValue)
