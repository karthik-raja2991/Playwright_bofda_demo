var myglobalVar:string = "Demo"

class MyClass2
{
    myclassVar:string = "Hi";
    static mystaticVar:string = "Bye";

}

console.log("Global Var = " + myglobalVar)
console.log("Static Var inside class = " + MyClass2.mystaticVar)
console.log("Local Var inside class = " +  (new MyClass2()).myclassVar )