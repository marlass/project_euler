//My solution

let sumOf3 = 0;
let sumOf5 = 0;
let sumOf15 = 0;
let i = 3;
while (i < 1000) {
    sumOf3 += i;
    i+=3;
}
i = 5;
while (i < 1000) {
    sumOf5 += i;
    i+=5;
}
i = 15;
while (i < 1000) {
    sumOf15 += i;
    i+=15;
}
let result = sumOf3 + sumOf5 - sumOf15;
console.log("My solution: ", result);

//Project Euler solution
function sumDivisibleBy(div, target){
    const p = Math.floor(target / div);
    return div * p * (p+1) / 2;
}

result = sumDivisibleBy(3, 999) + sumDivisibleBy(5, 999) - sumDivisibleBy(15, 999);
console.log("Project Euler solution: ", result);