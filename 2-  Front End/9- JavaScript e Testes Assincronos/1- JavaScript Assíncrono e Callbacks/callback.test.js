const { describe, expect, it } = require("@jest/globals");
const {
  createPresentationMessage,
  hackTheDb,
  restartDb,
} = require("./callbacks");

describe("A função createPresentationMessage", () => {
  beforeEach(() => {
    restartDb();
  });

  it("retorna erro quando a pessoa não existe", (done) => {
    const expectedError = new Error("Erro ao acessar o Banco de dados");

    function callback(err, _result) {
      expect(err).toEqual(expectedError);
      done();
    }

    createPresentationMessage("Orochimaru", callback);
  });

  it("retorna erro quando o banco foi hackeado", (done) => {
    const expectedError = new Error("Erro ao acessar o Banco de dados");
    hackTheDb();

    function callback(err, _result) {
      expect(err).toEqual(expectedError);
      done();
    }

    createPresentationMessage("Luva", callback);
  });

  it("retorna corretamente a string", (done) => {
    const expectedString =
      "Receba! Meu nome é Luva e minha comida favorita é batata frita.";

    function callback(_err, result) {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (err) {
        done(err);
      }
    }

    createPresentationMessage("Luva", callback);
  });
});