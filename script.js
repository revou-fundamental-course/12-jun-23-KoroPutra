function convertToFar() {
    var celciusInput = parseFloat(document.getElementById("celciusInput").value);
    var fahrenheitOutput = (celciusInput * 9/5) + 32;
    document.getElementById("fahrenheitOutput").value = fahrenheitOutput.toFixed(0);

    var calculation = celciusInput + " °C * 9/5 + 32 = " + fahrenheitOutput.toFixed(0) + " °F";
    document.getElementById("calculation").value = calculation;
}

function resetForm() {
    document.getElementById("celciusInput").value = "";
    document.getElementById("fahrenheitOutput").value = "";
    document.getElementById("calculation").value = "";
}

function reverseConversion() {
    var fahrenheitInput = parseFloat(document.getElementById("fahrenheitOutput").value);
    var celciusOutput = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celciusInput").value = celciusOutput.toFixed(0);

    var calculation = fahrenheitInput + " °F - 32 * 5/9 = " + celciusOutput.toFixed(0) + " °C";
    document.getElementById("calculation").value = calculation;
}