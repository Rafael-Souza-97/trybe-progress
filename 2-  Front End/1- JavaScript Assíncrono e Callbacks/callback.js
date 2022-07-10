const db = [
  {
    id: 123,
    name: "Luva",
    favoriteFood: "batata frita",
    greeting: "Receba!",
  },
  {
    id: 321,
    name: "Casimiro",
    favoriteFood: "churrasco",
    greeting: "Meteu essa!?",
  },
  {
    id: 404,
    name: "Naruto",
    favoriteFood: null,
    greeting: "Clone das sombras!!",
  },
];

let isDbHacked = false;

function hackTheDb() {
  isDbHacked = true;
}

function restartDb() {
  isDbHacked = false;
}

function createPresentationMessage(personName, callback) {
  setTimeout(() => {
    const person = db.find(({ name }) => name === personName);

    if (isDbHacked || !person) {
      return callback(new Error("Erro ao acessar o Banco de dados"), null);
    }

    const { greeting, name, favoriteFood } = person;

    const greetingString = `${greeting} Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`;

    callback(null, greetingString);
  }, 300);
}

module.exports = {
  createPresentationMessage,
  hackTheDb,
  restartDb,
};