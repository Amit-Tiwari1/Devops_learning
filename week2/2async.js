const fs = require ("fs")
// Example:- 7 practice to create promisify readfile
function readFilefunction(resolve){
// do u your things whenever you have final value, call the resolve function ("finalvalue")
fs.readFile("sample.txt", "utf-8", function(err,data){
    resolve(data)
})
}
function readFile (file){
//read here file and whatever do u want
return new Promise(readFilefunction)
}

function callbackfun(data){
console.log("File data is:- ", data);

}
let file = new readFile()
file.then(callbackfun)
// Example:- 7 to final understand what Promiss class does? (promise class takes one argument as a function when that function 1st argrument will called or resolve than call back function will be call) 
// function toCallResolveFun(resolve){
//     setTimeout(resolve, 3000) // this is first argument when will be called than call back function will be call
// }

// function promissFunctionCalling(){
//     return new Promise(toCallResolveFun) // this is new Promise class when 1st argument will be call "toCallResolveFun" call than that 1st argument function 1st argument(resolve) when called after that call back function (main) will be call
// }

// function main(){
//     console.log("main will be call after resolve call");
    
// }
// promissFunctionCalling().then(main)

// Example:- 6 to last final make with promisses
// function wait3secondfunctionwrapper (resolve){
//     setTimeout(resolve,3000)
// }
// function setTimeOutPromisifiedVersion() {
//     return new Promise(wait3secondfunctionwrapper);
// }

// function main(){
//     console.log("main has been called after 3 second ");
    
// }

// setTimeOutPromisifiedVersion().then(main)


// Example:- 5 to make rapper to setout funcation
// function callingSetTimeOutFunction(resolve){
//     setTimeout(resolve,3000)
// }

// function main(){
//     console.log("callback wapper called! ");
// }

// callingSetTimeOutFunction(main)

// Example:- 4 to log promiss class

// function setTimeoutPromisified(ms){
//     const d = new Promise(resolve=>setTimeout(resolve,ms));
//     return d
// }

// function callbackfun(){
//     console.log("this is callback after complete ");
    
// }

// let p = setTimeoutPromisified(5000).then(callbackfun);
// console.log("actuall promiss log ", p);



// Example:- 3  Now Pormise is also a class which promiss to us to return somthing in some time(or in future). there are there things on call function with parameter than resolve function will be call that callback function method than where need to pass argument i will provide and insted of resolve(callback function will be call)
// function setTimeoutpromissyfiedversion(ms){
//     return new Promise(resolve=> setTimeout(resolve,ms))
// }

// function callBackFunction(){
//     console.log("call back function called after 3 sec ");
    
// }

// setTimeoutpromissyfiedversion(3000).then(callBackFunction)

// Example:- 2  Use of classes in js
// first create a intence of class than use it Ex -(Date,Map)
// const now = new Date()
// Example:- 1 classes in js

// class books {
//     constructor(name,title,pages,color,price){
//         this.name = name;
//         this.title = title;
//         this.pages = pages;
//         this.color = color;
//         this.price = price
//     }
// calculateprice(){
//     const priceis =  this.pages * this.price;
//     console.log("Price is ", priceis);
    
//     return priceis
// }
// showcolor(){
//     console.log("Book color will be:- ", this.color);
    
// }
// }

// const b1 = new books("Sidhrtha","How to change life","15","Ambar",10);
// console.log("Book 1 is :- ", b1);
// b1.calculateprice()
// b1.showcolor()