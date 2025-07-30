const breakpoints = {
  "1111x720": "The Answer",
  "1221x800": "lies",
  "1331x880": "in the",
  "1441x960": "place",
  "1551x1040": "where the", 
  "1661x1120": "origin of",
  "1771x1200": "checkered",
  "1881x1280": "shirts",
  "1991x1360": "happened "
};

const revealed = new Set();

function getClosestBreakpoint() {
  const tolerance = 150;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const key in breakpoints) {
    const [bw, bh] = key.split("x").map(Number);
    if (Math.abs(bw - w) <= tolerance && Math.abs(bh - h) <= tolerance) {
      return key;
    }
  }

  return null;
}

function updateWords() {
  const key = getClosestBreakpoint();
  if (key && !revealed.has(key)) {
    revealed.add(key);
    const wordDiv = document.getElementById("revealedWords");
    if (wordDiv) {
      wordDiv.innerHTML += breakpoints[key] + " ";
    } else {
      console.warn("Could not find #revealedWords");
    }
  }
}

// Wrap in DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  updateWords();
  window.addEventListener("resize", updateWords);
});
