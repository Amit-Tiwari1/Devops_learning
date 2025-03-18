const fs = require("fs");

// Example 6 To understand functional argument and callbacks with setTimeout basically this is archtecture of js
// function washingMachineFunction(){
//     console.log("Clothes are washed");
//     console.log("All work has been finished!");
// }
// console.log("Start Running Code....");

// setTimeout(washingMachineFunction,1000);
// console.log("After settimeout function call");
// let runnigSteps=0
// for(let i=0; i<100000; i++){
//     runnigSteps=runnigSteps+i
// }

// console.log("Running Completed ", runnigSteps);

// Example 5 To understand functional argument and callbacks with setTimeout basically this is archtecture of js

// console.log("Start Executing Our Code.......");

// function settimeoutfun(){
//     console.log("Clothes are gotten washed!");
//     console.log("All work has been done!");
// }

// setTimeout(settimeoutfun,15000);

// console.log("I am going to press bell button! ");






// Example 4 To understand functional argument and callbacks

// function firstCallBackFun(error,data){
// console.log("First data got it ", data);

// }
// function secondCallBackFun(error,data){
//     console.log("Second data got it ", data);
    
//     }

// const data1 = fs.readFile("sample.txt", "utf-8",firstCallBackFun);
// const data2 = fs.readFile("sample2.txt","utf-8", secondCallBackFun)

 
// Example 3 To understand functional argument 
// function sum (a,b){
//     return a+b
// }
// function min (a,b){
//     return a-b
// }
// function multi (a,b){
//     return a*b
// }
// function divide (a,b){
//     return a/b
// }

// function doOperations(a,b,operationsFunction){
//     return operationsFunction(a,b)
// }

// const ans = doOperations(5,10,multi);
// console.log("Answer ", ans);


// Example 2 Basic file read through asyncronsally
// const data = fs.readFile("sample.txt");
// console.log("Data is :- ", data);
// Example 1 Basic file read through syncronsally
// const data = fs.readFileSync("sample.txt");
// console.log("Data is :- ", data);
