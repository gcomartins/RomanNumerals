export function converter(numero: number): string {
  if (numero < 0) {
    throw new Error("Número inconversível!");
  }
  if (numero === 0) {
    return "Zero";
  }
  if (numero === 1) {
    return "I";
  }
  if (numero === 2) {
    return "II";
  }
  if (numero === 3) {
    return "III";
  }
  if (numero === 4) {
    return "IV";
  }
  if (numero === 5) {
    return "V";
  }
  if (numero === 6) {
    return "VI";
  }
  if (numero === 7) {
    return "VII";
  }
  if (numero === 8) {
    return "VIII";
  }
  if (numero === 9) {
    return "IV";
  }
  if (numero === 10) {
    return "X";
  }
  if (numero === 11) {
    return "XI";
  }
  if (numero === 12) {
    return "XII";
  }
  if (numero === 13) {
    return "XIII";
  }
  if (numero === 14) {
    return "XIV";
  }
  if (numero === 15) {
    return "XV";
  }
  if (numero === 16) {
    return "XVI";
  }
  if (numero === 17) {
    return "XVII";
  }
  if (numero === 18) {
    return "XVIII";
  }
  if (numero === 19) {
    return "XIX";
  }
  if (numero === 20) {
    return "XX";
  }
  return "Número desconhecido!";
}


