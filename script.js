function calculateResults() {
    // Get user input values
    let generatorPower = parseFloat(document.getElementById("generatorPower").value);
    let operatingHours = parseFloat(document.getElementById("operatingHours").value);
    let fuelEfficiency = parseFloat(document.getElementById("fuelEfficiency").value);
    let dieselPrice = parseFloat(document.getElementById("dieselPrice").value);
    let co2Factor = parseFloat(document.getElementById("co2Factor").value);
    
    let solarCapacity = parseFloat(document.getElementById("solarCapacity").value);
    let sunHours = parseFloat(document.getElementById("sunHours").value);
    let installationCost = parseFloat(document.getElementById("installationCost").value);
    let maintenanceCost = parseFloat(document.getElementById("maintenanceCost").value);
    
    // Calculate diesel generator details
    let fuelConsumption = fuelEfficiency * operatingHours;
    let operatingCost = fuelConsumption * dieselPrice;
    let co2Emissions = fuelConsumption * co2Factor;
    
    // Calculate solar panel details
    let solarEnergy = solarCapacity * sunHours;
    let co2Offset = co2Emissions - (solarEnergy * 0);  // Solar panels produce zero CO2
    let paybackPeriod = installationCost / (operatingCost * 365);  // Based on yearly savings

    // Display results
    document.getElementById("fuelConsumption").innerText = fuelConsumption.toFixed(2);
    document.getElementById("operatingCost").innerText = operatingCost.toFixed(2);
    document.getElementById("co2Emissions").innerText = co2Emissions.toFixed(2);
    document.getElementById("solarEnergy").innerText = solarEnergy.toFixed(2);
    document.getElementById("co2Offset").innerText = co2Offset.toFixed(2);
    document.getElementById("paybackPeriod").innerText = paybackPeriod.toFixed(2);
}
