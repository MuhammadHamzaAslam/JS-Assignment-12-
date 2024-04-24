// Assignment 1

let arr = [1,2,3,4,5,6,7,8,9,10]
document.write("<h1>","Orignal Array",arr,"<br>","</h1>")
let empty = []
for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 3 == 0 ) {
//    console.log(arr[i],'three')
empty.push("three")
 } 
 else if (arr[i] % 5 == 0) {
//   console.log(arr[i],'five') 
empty.push("five")
 }
else {
    empty.push(arr[i]);
  }
}
document.write("<h2>",empty,"<br>","</h2>");



// Assignment 2

// Q1


let arr2 = [1,2,3,4,5,6,7,8,9,10]
let arr3 = []
for (var i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    arr3.push(arr2[i])
  }
}
document.write(arr3,"<br>")


// Q2


let name1 = prompt("Enter a word to reverse it") 
let name2 = name1.split('')
let name3 = name2.reverse()
let name4 = name3.join('') 
document.write("The reverse of ",name1," is ",name4,"<br>")

// Q3

let num = prompt('Enter a number to check its prime number or not')
let flag = false 
for (var i = 2; i < num; i++) {
  if (num % i == 0) {
   flag = true
  }
}
if (flag == true) {
    document.write(num,' is not a prime number',"<br>")
  }
  else{
    document.write(num,' is a prime number',"<br>")
  }


//Q4


//Q5

let name11 = prompt("Enter a word to check its palindrome word or not") 
let name22 = name11.split('')
let name33 = name22.reverse()
let name44 = name33.join('') 
//console.log(name44)

if (name11 == name44) {
  document.write(name11,' Is a palindrome word',"<br>")
}
else{
  document.write(name11,' Is not a palindrome word',"<br>")
}


let number  = parseInt(prompt("Enter a Number to take its factorial"))
let emp = 1;
for (let i = number; i > 0; i--) {
    emp *= i
    
}
document.write(emp,"<br>");


let list = [1,2,3,4,5,6,7,8,9,10]
document.write(list.reverse(),"<br>");

// Fibonacci series
let a = 0
let b = 1
document.write(`<h1>Fibonacci Series </h1> <br>`)
document.write(a,"<br>")
document.write(b,"<br>")
for(var i = 0 ; i < 10 ; i++){
  var temp = a + b
  document.write(temp,"<br>")
  a = b 
  b = temp
  
}

let name667 = 'Hello my name is Hamza' 
let nA = 0
let nE = 0
let nI = 0
let nO = 0
let nU = 0
for(var i = 0 ; i < name667.length ; i++){
  //console.log(name667[i])
  if (name667[i].toLowerCase() == 'a') {
   nA++ 
  }
  else if (name667[i].toLowerCase() == 'e') {
    nE++
  }
  else if (name667[i].toLowerCase() == 'i') {
    nI++
  }
  else if (name667[i].toLowerCase() == 'o') {
    nO++
  }
  else if (name667[i].toLowerCase() == 'u') {
    nU++
  }
}
/*console.log(nA)
console.log(nE)
console.log(nI)
console.log(nO)
console.log(nU)*/
var plus = nA + nE + nI + nO + nU
document.write(plus,"<br>")





let number112 = prompt("Enter an integer to check sum oof digits");
let sum = 0;
for (let i = 0; i < number112.length; i++) {
    sum += parseInt(number112[i]);
}
document.write("Sum of digits:", sum);