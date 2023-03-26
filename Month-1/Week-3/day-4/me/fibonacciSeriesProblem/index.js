/*
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.

Create a function where you can call it by writing the code:

fibonacciGenerator (n)

Where n is the number of items in the sequence.

So I should be able to call:

fibonacciGenerator(3) and get

[0,1,1]

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.
*/


function fib(n) {
    let arr = [];
  
  for(let i=0;i<n;i++){
      if(i===0 || i===1){
          arr.push(i);
      }else {
          arr.push(arr[arr.length-1]+arr[arr.length-2]);
      }
  }
  
  return (arr);
}

let x = fib(13);

console.log(x);