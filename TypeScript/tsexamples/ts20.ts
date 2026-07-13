//------ Using Promise, async & await
// what is promise: for sure data type will be returned.
//async and awat: aynsc implementation --> as promise method or 
// ayns --> the steps should run parlelly


// Function returning a promise
function fetchData(name:string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Async data has been fetched!";
            resolve(data);
            console.log("Promise method called from: " + name);
        }, 2000);
    });
}
 
// Asynchronous function using async/await
// Directly capturing return value without using then method
async function fetchDataAsync_Method1() {
    try {
        console.log("Before await call....")
        let result:string = await fetchData("Method1");
        console.log("After await call....")
        console.log("Method1 Output = " + result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//---- Using then method
async function fetchDataAsync_Method2() {
    try {
         await fetchData("Method2").then((result:string) => {
            console.log("Method2 Output = " + result)
        })
    } catch (error:any) {
        console.error("Error fetching data:", error);
    }
}
 
//----- calling promise method without await keyword
//      Also using //@ts-ignore to ignore type checking
async function fetchDataAsync_Method3() {
    try {   
        //@ts-ignore
        let result:string = fetchData("Method3");
        console.log("Method3 Output = " + result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call the asynchronous function
fetchDataAsync_Method1();
fetchDataAsync_Method2();
fetchDataAsync_Method3();