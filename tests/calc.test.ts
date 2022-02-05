import { converter } from "../src/calc";
// describe("Conversor Romano", () => {
//   it("Tem que lançar exceção quando for passado algum número menor que 0", () => {
//     expect(converter(-1)).toThrow();
//   });
// });

describe("Conversor Romano", () => {
  it("Tem que retornar I quando converter(1)", () => {
    expect(converter(1)).toBe("I");
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
  it("Tem que retornar XI quando converter(11)", () => {
    expect(converter(11)).toBe("XI");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XII quando converter(12)", () => {
    expect(converter(12)).toBe("XII");
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
  it("Tem que retornar XVI quando converter(16)", () => {
    expect(converter(16)).toBe("XVI");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XVII quando converter(17)", () => {
    expect(converter(17)).toBe("XVII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XVIII quando converter(18)", () => {
    expect(converter(18)).toBe("XVIII");
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
  it("Tem que retornar XXV quando converter(25)", () => {
    expect(converter(25)).toBe("XXV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XL quando converter(40)", () => {
    expect(converter(40)).toBe("XL");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XLIII quando converter(43)", () => {
    expect(converter(43)).toBe("XLIII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XLIX quando converter(49)", () => {
    expect(converter(49)).toBe("XLIX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar L quando converter(50)", () => {
    expect(converter(50)).toBe("L");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar LXXIII quando converter(73)", () => {
    expect(converter(73)).toBe("LXXIII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar LXXXIX quando converter(89)", () => {
    expect(converter(89)).toBe("LXXXIX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar XCV quando converter(95)", () => {
    expect(converter(95)).toBe("XCV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar C quando converter(100)", () => {
    expect(converter(100)).toBe("C");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CCCXXXIII quando converter(333)", () => {
    expect(converter(333)).toBe("CCCXXXIII");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CD quando converter(400)", () => {
    expect(converter(400)).toBe("CD");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CDXLIV quando converter(444)", () => {
    expect(converter(444)).toBe("CDXLIV");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar D quando converter(500)", () => {
    expect(converter(500)).toBe("D");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar DCCCXLIX quando converter(849)", () => {
    expect(converter(849)).toBe("DCCCXLIX");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CM quando converter(900)", () => {
    expect(converter(900)).toBe("CM");
  });
});

describe("Conversor Romano", () => {
  it("Tem que retornar CMXCIV quando converter(994)", () => {
    expect(converter(994)).toBe("CMXCIV");
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
