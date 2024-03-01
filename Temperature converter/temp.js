function convertTemperature() {
    const degreeInput = document.getElementById("degree").value;
    const selectedType = document.getElementById("type");

    if (!selectedType || isNaN(degreeInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    const temperature = parseFloat(degreeInput);
    const typeSelected = selectedType.options[selectedType.selectedIndex].value;

    let convertedTemperature, type;
    if (typeSelected === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        type = "Fahrenheit";
    } else if (typeSelected === "fahrenheit") {
        convertedTemperature = (temperature - 32) / 1.8;
        type = "Celsius";
    } else if (typeSelected === "kelvin") {
        convertedTemperature = temperature + 273.15;
        type = "Kelvin";
    }

    const resultElement = document.querySelector(".result");
    resultElement.innerText = convertedTemperature.toFixed(2) + " " + type;
}
