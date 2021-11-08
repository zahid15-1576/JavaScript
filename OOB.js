var a = 10, b = 20;

console.log('Before swap: Value of a: ' + a + ' and value of b: ' + b);

function swap(a, b) {
   console.log('Before Swap inside function: Value of a: ' + a + ' and value of b: ' + b);
   var temp = a;
   a = b;
   b = temp;
   console.log('After Swap inside function: Value of a: ' + a + ' and value of b: ' + b);
}

swap(a, b);
console.log('After swap: Value of a: ' + a + ' and value of b: ' + b);