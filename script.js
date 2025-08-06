const clues = {
  "1111x720": "The Answer",
  "1221x800": "lies in the",
  "1331x880": "Shop ",
  "1441x960": "that has",
  "1551x1040": "its Roots",
  "1661x1120": "to the Place",
  "1771x1200": "where classical arts",
  "1881x1280": "meets cinema",
  "1991x1360": "and coastal beauty"
};

function findMatchingKey(width, height) {
  const tolerance = 10;
  for (const key in clues) {
    const [targetW, targetH] = key.split('x').map(Number);
    if (
      Math.abs(targetW - width) <= tolerance &&
      Math.abs(targetH - height) <= tolerance
    ) {
      return key;
    }
  }
  return null;
}

function updateClue() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const matchedKey = findMatchingKey(width, height);
  const questionEl = document.getElementById('question');

  if (matchedKey) {
    questionEl.textContent = clues[matchedKey];
  } else {
    questionEl.textContent = "Resize the window...";
  }
}

window.addEventListener("load", updateClue);
window.addEventListener("resize", updateClue);
