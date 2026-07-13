"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myglobalVar = "Demo";
class MyClass2 {
    myclassVar = "Hi";
    static mystaticVar = "Bye";
}
console.log("Global Var = " + myglobalVar);
console.log("Static Var inside class = " + MyClass2.mystaticVar);
console.log("Local Var inside class = " + (new MyClass2()).myclassVar);
