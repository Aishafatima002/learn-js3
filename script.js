//function
// 1. take input n display output
// function myfunction(){
//     console.log("hello world")
//     console.log("i love js")
// }
// myfunction()
// myfunction()
// myfunction()
// myfunction()

//2.
// function myfunction(a,b) {//parameter
//     console.log(a+b)
// }
// myfunction(5,7)
// myfunction(17+45)
// myfunction(1+"hello")
// myfunction("24","13")//ayrgument

//3.

// function sum(y,x) {
//     //local var or block scope
//     s=y+x;
//     return s
// }
// let value=sum(67,82);
// console.log(value)

//
// function telltime(){
// let new1=new Date();
// let theHr=new1.getHours()
// var theMin = new1.getMinutes();
// alert("Current time: "+ theHr + ":" + theMin);
// }
// telltime()

//
// function multiplications(p1,p2) {
//     return p1*p2
// }
// console.log(multiplications(4,3))

//
// function forenhietToCelceius(fahrenheit) {
//     return 5/9*(fahrenheit-32);
// }
// console.log(forenhietToCelceius(45))

//
// let text="outside";
// function myfunction(){
//     let carName="honda"
// }
//
// function myfunction(a){
//  return a*(4)
// }
// // console.log(myfunction(2));
// // console.log(myfunction(3))
// console.log(myfunction(4))

//factorial
// function factorial(n){
//     if(n===0 || n===1){
//         return 1
//     } else{
//         return n* factorial(n-1);
//     }
    
// }
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(6))
// console.log(factorial(7))
// console.log(factorial(8))
// console.log(factorial(9))
// console.log(factorial(10))

// arrow function is used for small codings but similar to functions
// const additionOfNum=(a,b)=>{
//  return a+b
// }
// console.log(additionOfNum(2,6))

//
// const hello=()=>{
//     return "i love js";
// }
// console.log(hello())
// class activity
//q1
// function myfunction(){
//   const dt=new Date();
//   document.write(dt)
// }
// myfunction()

//q2
// let firstName=prompt("Enter your first name");
// let lastName=prompt("Enter your last name");
// function greet(firstName,lastName){
//     document.write("welcome"+" "+firstName+ " "+lastName)
// }
// greet(firstName,lastName)

// let num1=+prompt("Enter first no:")
// let num2=+prompt("Enter last no: ");
// function ans(num1,num2){
// return num1+num2
// }
// console.log(ans(num1,num2))


// make a smal calculator
// let num1=+prompt("Enter num1");
// let num2=+prompt("Enter num2");
// let operator=prompt("enter your operator");
// function myfunction(num1, num2, operator){
//     if(operator==="+"){
//         document.write(num1 +""+operator +num2 + ""+"="+ (num1+num2))  
//     }
//     else if(operator==="-"){
//         document.write(num1+""+operator +" "+num2+""+"="+ (num1-num2))
//     }
//     else if(operator==="*"){
//         document.write(num1+""+ operator+num2+""+"="+ (num1*num2))
//     }
//     else if(operator==="%"){
//         document.write(num1+""+ operator+num2+""+"="+ (num1%num2))
//     }
// }
// myfunction(num1,num2,operator)
//q4
// function sqr(a){
//     return a*a
// }
// console.log(sqr(2))

//q5
//part1
// function areaOfRectangle(width,hieght){
//    return width*hieght
// }
// console.log(areaOfRectangle(32,12));
// //part2
// let w=4
// let h=5

// function myfunction(w,h){
//     return w*h
// }
// console.log(myfunction(w,h))

//q6
// function TheCircumferenceOfCircle(radius) {
//    let r=6
//     return radius=2*3.14*r
// }
// console.log(TheCircumferenceOfCircle())

// function AreaOfCircle(radius) {
//     let r=3
//     return radius=3.14*(r*r)
// }
// console.log(AreaOfCircle())

// let startNum=+prompt("Enter your sart number");
// let endNum=+prompt("Enter your end number");
// function count(startNum,endNum) {
//     if(startNum>endNum) {
//         for(let i = startNum; i>endNum; i--) {
//             document.write(i+"<br>")
//         } 
//         }
//     else if(startNum<endNum){
//         for(let i = startNum; i < endNum; i++) {
//             document.write(i+"<br>");
            
//         }
//     }

//     else if(startNum === endNum){
//         document.write("both are equal")
//     }
// }
// count(startNum,endNum)

