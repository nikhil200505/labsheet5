let str = "Please locate where 'locate' occurs!";
console.log("Index of 'locate':", str.indexOf("locate"));
function fibonacci(n) {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next >= n) break;
        fib.push(next);
    }
    return fib;
}
let randNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number:", randNum);
console.log("Fibonacci sequence:", fibonacci(randNum));