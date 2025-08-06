const resolutions = {
  "1111x720": "VGhlIEFuc3dlcg==", 
  "1221x800": ".",                  // "The Answer"
  "1331x880": "bGllcyBpbiB0aGU=", 
  "1441x960": ".",        // "lies in the"
  "1551x1040": "U2hvcCA=", 
  "1661x1120": ".",                       // "Shop "
  "1771x1200": "dGhhdCBoYXM=", 
  "1881x1280": ".",// "that has"
  "1991x1360": "aXRzIFJvb3Rz", 
  "2101x1440": ".",// "its Roots"
  "2211x1520": "dG8gdGhlIFBsYWNl",   
  "2321x1600": ".",// "to the Place"
  "2431x1680": "d2hlcmUgY2xhc3NpY2FsIGFydHM=",
  "2541x1760": ".",// "where classical arts"
  "2651x1840": "bWVldHMgY2luZW1h",
  "2761x1920": ".",// "meets cinema"
  "2871x2000": "YW5kIGNvYXN0YWwgYmVhdXR5"           // "and coastal beauty"
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
