// Hexagram data (64 hexagrams with their names and meanings)
const hexagrams = [
  { name: "1. The Creative", lines: [1, 1, 1, 1, 1, 1], meaning: "Represents the creative principle, the power of the heavens." },
  { name: "2. The Receptive", lines: [0, 0, 0, 0, 0, 0], meaning: "Represents the receptive principle, the power of the earth." },
  { name: "3. Difficulty at the Beginning", lines: [1, 0, 0, 0, 1, 0], meaning: "Represents initial difficulties and challenges." },
  { name: "4. Youthful Folly", lines: [0, 1, 0, 0, 1, 0], meaning: "Represents youthful inexperience and learning." },
  // Add the remaining 60 hexagrams here
  // Example: { name: "5. Waiting", lines: [1, 1, 0, 1, 0, 0], meaning: "Represents patience and waiting for the right moment." }
];

// Function to simulate a coin throw (0 or 1)
function throwCoin() {
  return Math.floor(Math.random() * 2);
}

// Function to generate a hexagram (6 lines)
function generateHexagram() {
  const lines = [];
  for (let i = 0; i < 6; i++) {
    let line = 0;
    for (let j = 0; j < 3; j++) {
      line += throwCoin();
    }
    lines.push(line >= 2 ? 1 : 0); // Majority wins
  }
  return lines;
}

// Function to display the hexagram
function displayHexagram(lines) {
  const hexagramDisplay = document.getElementById("hexagram-display");
  hexagramDisplay.innerHTML = lines
    .map((line) => (line === 1 ? "⚊" : "⚋"))
    .join("<br>");
}

// Function to display the hexagram name and meaning
function displayHexagramInfo(hexagram) {
  const hexagramName = document.getElementById("hexagram-name");
  hexagramName.textContent = `${hexagram.name}: ${hexagram.meaning}`;
}

// Function to display the hexagram chart
function displayHexagramChart() {
  const hexagramChart = document.getElementById("hexagram-chart");
  hexagrams.forEach((hexagram) => {
    const hexagramDiv = document.createElement("div");
    hexagramDiv.className = "hexagram";
    hexagramDiv.innerHTML = hexagram.lines
      .map((line) => (line === 1 ? "⚊" : "⚋"))
      .join("<br>");
    hexagramDiv.addEventListener("click", () => {
      displayHexagram(hexagram.lines);
      displayHexagramInfo(hexagram);
    });
    hexagramChart.appendChild(hexagramDiv);
  });
}

// Event listener for the "Throw Coins" button
document.getElementById("throw-coins").addEventListener("click", () => {
  const lines = generateHexagram();
  const hexagram = hexagrams.find(h => h.lines.toString() === lines.toString());
  displayHexagram(lines);
  displayHexagramInfo(hexagram);
});

// Display the hexagram chart on page load
displayHexagramChart();