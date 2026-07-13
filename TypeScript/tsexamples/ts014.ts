//------ Interface

interface ITool
{
    name:string,
    version:number,
    type:string
}


var tool1:ITool =
    {
        name:"Selenium",
        version:3.5,
        type:"open source"
    }


console.log(tool1)
console.log(tool1.name)
console.log(tool1.version)
console.log(tool1.type)

