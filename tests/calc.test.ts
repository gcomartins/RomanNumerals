import { conversor } from "../src/calc";
describe("Testes do conversor romano", () => {
  it("Tem que retornar I quando conversor(1)", () => {
    expect(conversor(1)).toBe("I");
  });
});
