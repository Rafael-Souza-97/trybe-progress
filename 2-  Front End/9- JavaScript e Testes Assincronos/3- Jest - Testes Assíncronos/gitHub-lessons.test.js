require("./fetchSimulator");

const { getGitHubUserInfos, getUserReposUrl } = require("./github");
const expected = {
  name: "Henrique Jensen",
  company: "@betrybe",
  bio: "Especialista Frontend na @betrybe. Professor e Programador por profissão e estudante de teatro por hobby",
  location: "São Paulo",
};

describe("Ao chamar a funcao getGitHubUserInfos", () => {
  test("deve retornar um objeto contendo name, location, bio, company", async () => {
    expect.assertions(1);
    const result = await getGitHubUserInfos("henriquejensen");
    expect(result).toEqual(expected);
  });

  test("deve chamar a funcao fetch em algum momento", async () => {
    expect.assertions(1);
    await getGitHubUserInfos("henriquejensen");
    expect(fetch).toHaveBeenCalled();
  });

  test("deve executar o fetch no endpoint correto", async () => {
    expect.assertions(1);
    const url = getUserReposUrl("henriquejensen");
    await getGitHubUserInfos("henriquejensen");
    expect(fetch).toBeCalledWith(url);
  });

  test("deve retornar erro para usuario inválido", async () => {
    try {
      await getGitHubUserInfos("esfsefse");
    } catch (error) {
      expect(error).toEqual(new Error("Usuário inválido"));
    }
  });
});