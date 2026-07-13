interface Msg{
    logMsg():void;
}

class MyClass implements Msg
{
    logMsg():void
    {
        console.log("Hi...from logMsg...")
    }

    getYear():number
    {
        return 2017
    }
}


var oMyClassObj = new MyClass()
oMyClassObj.logMsg()

var sReturnValue:number = oMyClassObj.getYear()
console.log("Return value = " + sReturnValue)