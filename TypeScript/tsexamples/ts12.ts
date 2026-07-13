//------ Tuples type i.e. List type

var arrWinOS = ["Windows", 10.0, 2017, "Microsoft"]

arrWinOS.push("Mentor")

console.log(arrWinOS + "\t# of items=" + arrWinOS.length)

for(let i=0; i<arrWinOS.length; i++)
{
    console.log("arrWinOS[" + i + "]=" + arrWinOS[i])
}

arrWinOS.pop()

for(let j in arrWinOS)
{
    console.log("arrWinOS[" + j + "]=" + arrWinOS[j])
}

