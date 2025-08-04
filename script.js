const breakpoints = {
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

const revealed = new Set();
let lastMatchedKey = null;

function getExactBreakpoint() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const key in breakpoints) {
    const [bw, bh] = key.split("x").map(Number);
    if (bw === w && bh === h) {
      return key;
    }
  }

  return null;
}

function updateWords() {
  const key = getExactBreakpoint();
  if (key && key !== lastMatchedKey && !revealed.has(key)) {
    revealed.add(key);
    lastMatchedKey = key;

    const wordDiv = document.getElementById("revealedWords");
    if (wordDiv) {
      wordDiv.innerHTML += breakpoints[key] + " ";
    } else {
      console.warn("Could not find #revealedWords");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Only respond to actual resizes
  window.addEventListener("resize", updateWords);
});
