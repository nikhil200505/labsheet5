function categorizeTemperature(temp) {
    if (temp < 0) return "Freezing";
    else if (temp <= 15) return "Cold";
    else if (temp <= 30) return "Moderate";
    else return "Hot";
}
console.log(categorizeTemperature(10));