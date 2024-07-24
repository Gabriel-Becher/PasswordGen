import "./assets/css/style.css";
import gerador from "./modules/gerador.js";

const senha = document.querySelector(".gerada");
const btn = document.querySelector("button");
const lista = document.querySelectorAll("input[type = 'checkbox']");
btn.addEventListener("click", () => {
  let sizeElement = document.querySelector("#taman");
  let size = sizeElement.value;
  if (!size) return;
  if (size > 256) {
    size = 256;
    sizeElement.value = 256;
  }
  if (size < 1) {
    size = 1;
    sizeElement.value = 1;
  }
  let valores = [];
  for (let ele of lista) {
    valores.push(ele.checked);
  }
  if (!valores.some((x) => x == true)) {
    alert("Marque alguma opção!");
    return;
  }
  senha.innerHTML = gerador(size, valores);
});
