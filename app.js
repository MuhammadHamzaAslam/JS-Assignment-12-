// Assignment 1

let arr = [1,2,3,4,5,6,7,8,9,10]
document.write(arr,"<br>")
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
document.write(empty,"<br>");



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


let name1 = 'hamza' 
let name2 = name1.split('')
let name3 = name2.reverse()
let name4 = name3.join('') 
document.write(name4,"<br>")

// Q3

let num = prompt('Enter a number')
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

let name11 = 'mom' 
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

let vowels = ["a","e","i","o","u"]
let len = []
for(var i =0 ; i < vowels.length ; i++){
    len.push(i);
}
document.write(len.length,"<br>");

let number  = parseInt(prompt("Enter a Number to take its factorial"))
let emp = 1;
for (let i = number; i > 0; i--) {
    emp *= i
    
}
document.write(emp,"<br>");


let list = [1,2,3,4,5,6,7,8,9,10]
document.write(list.reverse(),"<br>");

