//------ Namespaces
//  prefix export to namespace inorder to access from outside

// export means --> we will use export to keep it private. 
//namespace -> logical goruo of all class in oe class

export namespace org
{
    export class myToolClass
    {
        name:string
        version:number

        constructor(name:string, version:number)
        {
            this.name=name
            this.version=version
        }
    }
}