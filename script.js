alert("Risk management is the key, consider placing less stakes on each round to increase your chances of winning, don't forget that the tool provides 92% accurate readings!")

function generateRandomNumber() {
  const randomNumber = (Math.random() * 10).toFixed(2); // Generate a random number between 0 and 30 with 3 decimal places
  document.getElementById("randomNumber").textContent = randomNumber;

  // Schedule the next generation after 10 seconds
  setTimeout(generateRandomNumber, 15000);
}

// Start the process
generateRandomNumber();
