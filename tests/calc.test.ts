import { converter } from "../src/calc";
describe("Conversor Romano", () => {
  it("Tem que lançar exceção quando for passado algum número menor que 0", () => {
    expect(()=>converter(-1)).toThrow ()
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar I quando converter(1)", () => {
    expect(converter(1)).toBe("I");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar I quando converter(1)", () => {
    expect(converter(0)).toBe("Os romanos não tinham um sinal para representar o zero porque simplesmente não precisavam representar o nada. Essa necessidade só surgiu quando se criou um sistema numérico posicional, ou seja, um sistema no qual a posição dos algarismos dá a eles valores diferentes.");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar II quando converter(2)", () => {
    expect(converter(2)).toBe("II");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar III quando converter(3)", () => {
    expect(converter(3)).toBe("III");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar IV quando converter(4)", () => {
    expect(converter(4)).toBe("IV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar V quando converter(5)", () => {
    expect(converter(5)).toBe("V");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar VI quando converter(6)", () => {
    expect(converter(6)).toBe("VI");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar VII quando converter(7)", () => {
    expect(converter(7)).toBe("VII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar VIII quando converter(8)", () => {
    expect(converter(8)).toBe("VIII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar IX quando converter(9)", () => {
    expect(converter(9)).toBe("IX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar X quando converter(10)", () => {
    expect(converter(10)).toBe("X");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XIII quando converter(13)", () => {
    expect(converter(13)).toBe("XIII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XIV quando converter(14)", () => {
    expect(converter(14)).toBe("XIV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XV quando converter(15)", () => {
    expect(converter(15)).toBe("XV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XIX quando converter(19)", () => {
    expect(converter(19)).toBe("XIX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XX quando converter(20)", () => {
    expect(converter(20)).toBe("XX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XL quando converter(40)", () => {
    expect(converter(40)).toBe("XL");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar L quando converter(50)", () => {
    expect(converter(50)).toBe("L");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XC quando converter(90)", () => {
    expect(converter(90)).toBe("XC");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar C quando converter(100)", () => {
    expect(converter(100)).toBe("C");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CD quando converter(400)", () => {
    expect(converter(400)).toBe("CD");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar D quando converter(500)", () => {
    expect(converter(500)).toBe("D");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CM quando converter(900)", () => {
    expect(converter(900)).toBe("CM");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar M quando converter(1000)", () => {
    expect(converter(1000)).toBe("M");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar MMMCCCXXXIII quando converter(3333)", () => {
    expect(converter(3333)).toBe("MMMCCCXXXIII");
  });
});
