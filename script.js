const breakpoints = {
  "1140x720": "The",
  "1080x700": "question",
  "960x600": "lies",
  "800x500": "beneath",
  "640x480": "your",
  "540x360": "eyes"
};

const revealed = new Set();

function getSizeKey() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function updateWords() {
  const size = getSizeKey();
  if (breakpoints[size] && !revealed.has(size)) {
    revealed.add(size);
    const wordDiv = document.getElementById("revealedWords");
    wordDiv.innerHTML += breakpoints[size] + " ";
  }
}

window.addEventListener("resize", updateWords);

// Check once on load too
window.addEventListener("load", updateWords);
