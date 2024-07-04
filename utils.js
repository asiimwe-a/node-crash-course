/**
 * Returns a random integer between 1 and 100.
 * @returns {number} Random integer between 1 and 100.
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
};
