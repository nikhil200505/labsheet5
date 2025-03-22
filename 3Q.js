function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

let sentence = prompt("Enter a sentence:");
alert(capitalizeWords(sentence));
console.log(capitalizeWords(sentence));