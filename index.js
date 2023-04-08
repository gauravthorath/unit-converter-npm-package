function convertUnit(value, baseUnit, targetUnit, verbose = false) {
  const CONVERSION_FACTORS = {
    meters: 1.0,
    feet: 3.28084,
    inches: 39.3701,
    centimeters: 100.0,
    // Add more units as needed
  };

  // Check if the base and target units are valid
  if (!CONVERSION_FACTORS[baseUnit] || !CONVERSION_FACTORS[targetUnit]) {
    console.error("Invalid unit");
    return null;
  }

  // Calculate the converted value
  const targetUnitFactor =
    CONVERSION_FACTORS[targetUnit] / CONVERSION_FACTORS[baseUnit];
  const convertedValue = value * targetUnitFactor;

  // Return either the converted value or a descriptive message
  if (!verbose) {
    return convertedValue;
  } else {
    return `${value} ${baseUnit} is equal to ${convertedValue} ${targetUnit}`;
  }
}

module.exports = convertUnit;
