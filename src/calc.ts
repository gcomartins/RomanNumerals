export function converter(numero: number): string {
  if (numero < 0) {
    throw new Error("Não existem números romanos negativos!");
  }
  if (numero === 0) {
    return "Os romanos não tinham um sinal para representar o zero porque simplesmente não precisavam representar o nada. Essa necessidade só surgiu quando se criou um sistema numérico posicional, ou seja, um sistema no qual a posição dos algarismos dá a eles valores diferentes.";
  }
  let resultado: string = "";
  const simbolos: string[] = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  const numeros: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let index = 0; index < 14; index++) {
    while (numero >= numeros[index]) {
      resultado += simbolos[index];
      numero-= numeros[index];
    }
  }
  return resultado;
}
