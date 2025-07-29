const breakpoints = {
  "1140x720": "The",
  "1080x700": "question",
  "960x600": "lies",
  "800x500": "beneath",
  "640x480": "your",
  "540x360": "eyes"
};

const revealed = new Set();

function getClosestBreakpoint() {
  const tolerance = 10; // allow ±10px wiggle room
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
    wordDiv.innerHTML += breakpoints[key] + " ";
  }
}

window.addEventListener("resize", updateWords);
window.addEventListener("load", updateWords);
