function daysUntilNewYear() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    let diff = newYear - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
console.log("Days left until New Year: ", daysUntilNewYear());