function printCurrentDate() {
    let today = new Date();
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    console.log("Today’s date is : " + today.toLocaleDateString("en-US", options));
}
printCurrentDate();