function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
let num = parseInt(prompt("Enter a number :"));
alert("Factorial: " + factorial(num));
console.log("Factorial: " + factorial(num));

