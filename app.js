//
//while loops
//chap41
// let n=+prompt("Enter the value of n")
// let i=0
// while(i<=n){
//     document.write(i+"<br>")
//     i++;
// }   

//
// let num = 0, sum = 0;

// // loop as long as num is 0 or positive
// while (num >= 0) {

//     // add all positive numbers
//     sum += num;

//     // take input from the user
//     num = parseInt(prompt("Enter a number: "));
// }

// // last, display sum
// console.log(`The sum is ${sum}`);

//
// let sum =0,
// num=1;
// while (num<=100) {
//     sum+=num;// sum+num
//     num++
// }
// document.write("sum  of 1 to 100  "+sum)

//write a program to display a factorial of a number
// let num=4
// let factorial=1
// while(num>0){//4,3,2
//     factorial=factorial*num //1*4=4*3=12*2=24
//     num--;//3//2//1
// }
// document.write("factorial of a num is  "+factorial)


//write a program to display finding the first 10 even number.
// let even_num=[]
// let i=0
// while (even_num.length<10) {
//     if(i%2===0){
// even_num.push[1]
//     }
//     i++

// }
// document.write("the first even num is"+even_num)

// //write a program for input validation
// let userInput;
// let password="javascript123"
// while (userInput!==password) {
//     userInput=prompt("Enter your password")

// }
// document.write("access granted")

// let countDown=10;
// while (countDown>0) {
//     document.write("<br>"+countDown)
//     countDown--;
// }
// document.write("<br>"+"<h1>Happy New Year</h1>")

//do while loops
// let n = +prompt("Enter the value of n")
// let i = 10
// do {
//     document.write(i + "<br>")
//     i++;
// }
// while (i <= n)

//write a program for input validation
// let userInput;
// let password = "javascript123"
// do {
//     userInput = prompt("Enter your password")
//     document.write("access granted")

// }
// while (userInput !== password)

let countDown=10;
do {
    document.write("<br>"+countDown+"<h1>Happy New Year</h1>")
     countDown--;
    
 }

while (countDown>0)

