// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let end = 10;
let a = 0
let sum = 0  

while(a<=end){
  if(a%3==0){
    sum+=a
  }
  a++
}
console.log(sum)