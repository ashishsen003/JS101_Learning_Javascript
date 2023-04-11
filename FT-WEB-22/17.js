// Problem 4: Print the average of even numbers from 1 to 100 (both included)


let a = 1;
let count = 0;
let sum = 0;

while (a <= 100) {
  if (a % 2 == 0) {
    count++
    sum += a
  }
  a++
}
console.log(sum / count)