"use strict";
//------ Namespaces
//  prefix export to namespace inorder to access from outside
Object.defineProperty(exports, "__esModule", { value: true });
exports.org = void 0;
// export means --> we will use export to keep it private. 
//namespace -> logical goruo of all class in oe class
var org;
(function (org) {
    class myToolClass {
        name;
        version;
        constructor(name, version) {
            this.name = name;
            this.version = version;
        }
    }
    org.myToolClass = myToolClass;
})(org || (exports.org = org = {}));
