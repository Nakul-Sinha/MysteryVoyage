window.addEventListener("resize", checkWindowSize);
window.addEventListener("DOMContentLoaded", checkWindowSize);

const clueDimensions = [
  { width: 777, height: 431, text: "Whispers" },
  { width: 987, height: 543, text: "in" },
  { width: 1161, height: 651, text: "the" },
  { width: 1283, height: 733, text: "Mist" },
];

const container = document.getElementById("words-container");

// Prevent clues from appearing if zoom is not 100% or on incompatible scaling
function enforceZoomCheck() {
  if (window.devicePixelRatio !== 1) {
    container.innerHTML = '<p style="color: red;">Set browser zoom to 100% to reveal clues.</p>';
    return false;
  }
  return true;
}

function checkWindowSize() {
  if (!enforceZoomCheck()) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  container.innerHTML = ""; // Clear old clues

  for (const clue of clueDimensions) {
    if (width === clue.width && height === clue.height) {
      const clueDiv = document.createElement("div");
      clueDiv.className = "word";
      clueDiv.textContent = clue.text;
      container.appendChild(clueDiv);
    }
  }
}

/*
function _0xd0c1(_0x253925,_0x30e809){const _0x4a8e9a=_0x4a8e();return _0xd0c1=function(_0xd0c13e,_0xff8136){_0xd0c13e=_0xd0c13e-0x1ad;let _0x380439=_0x4a8e9a[_0xd0c13e];return _0x380439;},_0xd0c1(_0x253925,_0x30e809);}const _0x391616=_0xd0c1;(function(_0x1b0ac5,_0x30c421){const _0x4516f6=_0xd0c1,_0x4019f3=_0x1b0ac5();while(!![]){try{const _0x251657=-parseInt(_0x4516f6(0x1ba))/0x1+parseInt(_0x4516f6(0x1bf))/0x2+-parseInt(_0x4516f6(0x1b9))/0x3*(parseInt(_0x4516f6(0x1c1))/0x4)+parseInt(_0x4516f6(0x1ae))/0x5+-parseInt(_0x4516f6(0x1b6))/0x6+parseInt(_0x4516f6(0x1b0))/0x7+parseInt(_0x4516f6(0x1b3))/0x8;if(_0x251657===_0x30c421)break;else _0x4019f3['push'](_0x4019f3['shift']());}catch(_0x49a2cb){_0x4019f3['push'](_0x4019f3['shift']());}}}(_0x4a8e,0xd7175));function _0x4a8e(){const _0x3f9fba=['6679724TjnXxd','add','resize','getElementById','addEventListener','7767310ASIujv','and\x20coastal\x20beauty','11461128EOBIqB','map','Shop\x20','13795704BnNSaO','innerWidth','innerHTML','6859920nEIsyr','revealedWords','its\x20Roots','3JDGBam','1564284cGnbel','DOMContentLoaded','innerHeight','where\x20classical\x20arts','split','686638DGSsfr','warn'];_0x4a8e=function(){return _0x3f9fba;};return _0x4a8e();}const breakpoints={'1111x720':'The\x20Answer','1221x800':'lies\x20in\x20the','1331x880':_0x391616(0x1b2),'1441x960':'that\x20has','1551x1040':_0x391616(0x1b8),'1661x1120':'to\x20the\x20Place','1771x1200':_0x391616(0x1bd),'1881x1280':'meets\x20cinema','1991x1360':_0x391616(0x1af)},revealed=new Set();let lastMatchedKey=null;function getExactBreakpoint(){const _0x1e73fa=_0x391616,_0x19cf7e=window[_0x1e73fa(0x1b4)],_0x3dbd60=window[_0x1e73fa(0x1bc)];for(const _0x2596cd in breakpoints){const [_0x4fca06,_0x1fc77d]=_0x2596cd[_0x1e73fa(0x1be)]('x')[_0x1e73fa(0x1b1)](Number);if(_0x4fca06===_0x19cf7e&&_0x1fc77d===_0x3dbd60)return _0x2596cd;}return null;}function updateWords(){const _0xdd70ce=_0x391616,_0x1cd386=getExactBreakpoint();if(_0x1cd386&&_0x1cd386!==lastMatchedKey&&!revealed['has'](_0x1cd386)){revealed[_0xdd70ce(0x1c2)](_0x1cd386),lastMatchedKey=_0x1cd386;const _0x2c3671=document[_0xdd70ce(0x1c4)](_0xdd70ce(0x1b7));_0x2c3671?_0x2c3671[_0xdd70ce(0x1b5)]+=breakpoints[_0x1cd386]+'\x20':console[_0xdd70ce(0x1c0)]('Could\x20not\x20find\x20#revealedWords');}}document[_0x391616(0x1ad)](_0x391616(0x1bb),()=>{const _0x5c8468=_0x391616;window[_0x5c8468(0x1ad)](_0x5c8468(0x1c3),updateWords);});
*/
