// Loop While

let n = 33;
while (n >= 23) {
  if (n % 3 === 0) {
    console.log(n);
  }
  n--;
}

// Loop Do/While

let count = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

do {
    console.log('number ' + randomNumber);
    count++;
  
} while (randomNumber !== 8 && count < 1000); 

console.log(`The number ${randomNumber} was generated after ${count} iterations.`);
   
// Loop For

for (let i = 2; i < 11; i++) {
  let value = 2 ** i;
  console.log(`2 to the power of ${i} is ${value}`);
}
