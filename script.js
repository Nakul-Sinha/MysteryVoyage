const resolutions = {
  "1111x720": "VGhlIEFuc3dlcg==",                   // "The Answer"
  "1221x800": "bGllcyBpbiB0aGU=",                   // "lies in the"
  "1331x880": "U2hvcCA=",                           // "Shop "
  "1441x960": "dGhhdCBoYXM=",                       // "that has"
  "1551x1040": "aXRzIFJvb3Rz",                      // "its Roots"
  "1661x1120": "dG8gdGhlIFBsYWNl",                  // "to the Place"
  "1771x1200": "d2hlcmUgY2xhc3NpY2FsIGFydHM=",       // "where classical arts"
  "1881x1280": "bWVldHMgY2luZW1h",                  // "meets cinema"
  "1991x1360": "YW5kIGNvYXN0YWwgYmVhdXR5"           // "and coastal beauty"
};

function getResolutionKey() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    return null;
  }
}

function updateMessage() {
  const key = getResolutionKey();
  const encoded = resolutions[key];
  const messageElement = document.getElementById('message');

  if (encoded) {
    const decoded = decodeBase64(encoded);
    messageElement.textContent = decoded;
  } else {
    messageElement.textContent = "The site holds no answers. It only reflects.";
  }
}

window.addEventListener('resize', updateMessage);
window.addEventListener('load', updateMessage);
