//My solution
function sumOfFibonacci(cond, target){
    let sum = 0;
    let prevFib = 0;
    let Fib = 1;
    let nextFib = 1;
    while (nextFib < target){
        if (cond(nextFib)){
            sum+=nextFib;
        }
        Fib = nextFib;
        nextFib = prevFib + Fib;        
        prevFib = Fib;
    }
    return sum;
}

const even = function even(a){
    return a % 2 == 0;
}

const result = sumOfFibonacci(even, 4000000);
console.log("My solution: ", result);

//Project Euler solution
let sum = 0;
let a = 1;
let b = 1;
let c = 2;
while (c < 4000000) {
    sum += c;
    a = b + c;
    b = c + a;
    c = a + b;
}

console.log("Project Euler solution: ", sum);