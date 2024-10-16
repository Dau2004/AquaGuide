function checkWaterUsability() {
    // Get input values
    var pH = parseFloat(document.getElementById("pH").value);
    var turbidity = parseFloat(document.getElementById("turbidity").value);
    
    // Initialize result strings
    var drinkingWaterStatus = "";
    var agriculturalWaterStatus = "";

    // Check drinking water safety
    if (pH >= 6.5 && pH <= 8.5 && turbidity <= 1.0) {
        drinkingWaterStatus = "Water is safe for drinking.";
    } else {
        drinkingWaterStatus = "Water is NOT safe for drinking.";
    }

    // Check agricultural water suitability
    if (pH >= 5.5 && pH <= 7.5 && turbidity <= 5.0) {
        agriculturalWaterStatus = "Water is suitable for agricultural use.";
    } else {
        agriculturalWaterStatus = "Water is NOT suitable for agricultural use.";
    }

    // Display the results
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Water Usability Report:</h3>
        <p><strong>Drinking Water Status:</strong> ${drinkingWaterStatus}</p>
        <p><strong>Agricultural Water Status:</strong> ${agriculturalWaterStatus}</p>
    `;
    resultDiv.style.display = "block";
}
