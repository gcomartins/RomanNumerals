export function converter(numero: number): string {
  // if (numero < 0) {
  //   throw new Error("Número inconversível!");
  // }
  if (numero === 0) {
    return "Os romanos não tinham um sinal para representar o zero porque simplesmente não precisavam representar o nada. Essa necessidade só surgiu quando se criou um sistema numérico posicional, ou seja, um sistema no qual a posição dos algarismos dá a eles valores diferentes.";
  }
  let resultado: string = "";
  while (numero >= 10) {
    resultado += "X";
    numero -= 10;
  }
  if (numero === 1) {
    resultado +="I";
  }
  if (numero === 2) {
    resultado +="II";
  }
  if (numero === 3) {
    resultado +="III";
  }
  if (numero === 4) {
    resultado +="IV";
  }
  if (numero === 5) {
    resultado +="V";
  }
  if (numero === 6) {
    resultado +="VI";
  }
  if (numero === 7) {
    resultado +="VII";
  }
  if (numero === 8) {
    resultado +="VIII";
  }
  if (numero === 9) {
    resultado +="IX";
  }
  return resultado;
}
