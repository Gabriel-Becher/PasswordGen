export default function gerador(tam, options) {
  if (!options.some((x) => x == true)) return "Selecione alguma opção";
  if (tam <= 0) return "Tamanho inválido";

  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const maiuscula = () => String.fromCharCode(rand(65, 91));
  const minuscula = () => String.fromCharCode(rand(97, 123));
  const numero = () => String.fromCharCode(rand(48, 58));
  const simbolos = ",.;~^[]{}!@#$%¨&*()_-+=?/§¬¢£ºª°";
  const simbolo = () => simbolos[rand(0, simbolos.length)];

  let senha = "";
  while (senha.length < tam) {
    let opt = Math.round(Math.random() * 3);
    switch (opt) {
      case 0:
        if (options[0]) {
          senha += numero();
        }
        break;
      case 1:
        if (options[1]) {
          senha += maiuscula();
        }
        break;
      case 2:
        if (options[2]) {
          senha += minuscula();
        }
        break;
      case 3:
        if (options[3]) {
          senha += simbolo();
        }
        break;
      default:
        break;
    }
  }
  return senha;
}
