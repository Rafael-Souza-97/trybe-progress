const VALID_USERNAME = "henriquejensen";
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const data = {
  name: "Henrique Jensen",
  company: "@betrybe",
  bio: "Especialista Frontend na @betrybe. Professor e Programador por profissão e estudante de teatro por hobby",
  location: "São Paulo",
};

const fetchSimulator = (url) => {
  if (!url || url !== VALID_URL) {
    return Promise.reject(new Error("Usuário inválido"));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(data),
      });
    }, 200);
  });
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;