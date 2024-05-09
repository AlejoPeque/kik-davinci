// El numero
const numberAd = 3;

// Propt - Ingresar el numero
const name = prompt("Cuál es su nombre?").trim();
document.getElementById("subTitle").innerHTML = `${name}:`;

// Promt - Ingresar un numero
let number = parseInt(prompt("Ingrese un número del 1 al 12:"));

while (isNaN(number) || number > 12 || number < 1) {
  alert(
    "Ponete bien los anteojos, ingresaste cualquier cosa, así no podemos jugar"
  );
  number = parseInt(prompt("Ingrese un número del 1 al 12:"));
}

// Comparamos - Numero elegido vs Numero Ad
if (number === numberAd) {
  document.getElementById("title").innerText = "Felicitaciones, ganaste! 🎉";
  document.getElementById("number").innerText = `${number} ✔️`;
  document.getElementById("numberAd").innerText = `${numberAd} 👌`;
} else if (number < numberAd) {
  document.getElementById("title").innerText = "Nooooo, perdiste! 🥲";
  let numberDif = numberAd - number;
  numberDif === 1
    ? (document.getElementById(
        "number"
      ).innerText = `${number} ❌, te faltó ${numberDif} unidad`)
    : (document.getElementById(
        "number"
      ).innerText = `${number} ❌, te faltaron ${numberDif} unidades`);
  document.getElementById("numberAd").innerText = `${numberAd} 😒`;
} else if (number > numberAd) {
  document.getElementById("title").innerText = "Nooooo, perdiste! 🥲";
  let numberDif = number - numberAd;
  numberDif === 1
    ? (document.getElementById(
        "number"
      ).innerText = `${number} ❌, te pasaste por ${numberDif} unidad`)
    : (document.getElementById(
        "number"
      ).innerText = `${number} ❌, te pasaste por ${numberDif} unidades`);
  document.getElementById("numberAd").innerText = `${numberAd} 😒`;
}
