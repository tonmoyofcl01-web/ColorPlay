let bgColor = "";
let txtColor = "";

function randomColor() {
  let number = Math.random() * 16777215;
  number = Math.floor(number);
  let hex = number.toString(16);

  while (hex.length < 6) {
    hex = "0" + hex;
  }

  return "#" + hex;
}

function generateColors() {
  bgColor = randomColor();
  txtColor = randomColor();

  document.body.style.background = bgColor;
  document.querySelector(".serif").style.color = txtColor;
  document.querySelector(".sans-serif").style.color = txtColor;
  document.querySelector(".stylish").style.color = txtColor;
}

function copyColors() {
  const data = `Background: ${bgColor}\nText: ${txtColor}`;
  navigator.clipboard.writeText(data);
  alert("Copied!");
}

function saveColors() {
  let saved = JSON.parse(localStorage.getItem("palettes")) || [];

  saved.push({
    background: bgColor,
    text: txtColor,
  });

  localStorage.setItem("palettes", JSON.stringify(saved));

  showSaved();
}

function deleteLastPalette() {
  let saved = JSON.parse(localStorage.getItem("palettes")) || [];

  saved.pop();
  localStorage.setItem("palettes", JSON.stringify(saved));

  showSaved();
}

function showSaved() {
  let saved = JSON.parse(localStorage.getItem("palettes")) || [];
  let box = document.getElementById("saved");

  box.innerHTML = "";

  saved.forEach((p) => {
    let div = document.createElement("div");
    div.innerText = `BG: ${p.background} | TXT: ${p.text}`;
    box.appendChild(div);
  });
}

document
  .querySelector(".generateBtn")
  .addEventListener("click", generateColors);
document.querySelector(".copyBtn").addEventListener("click", copyColors);
document.querySelector(".saveBtn").addEventListener("click", saveColors);
document
  .querySelector(".deleteBtn")
  .addEventListener("click", deleteLastPalette);

showSaved();
