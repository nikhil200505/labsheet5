function printPattern() {
    let pattern = "";
    for (let i = 1; i <= 3; i++) {
        pattern += "*".repeat(i) + "\n";
    }
    console.log(pattern);
}
printPattern();