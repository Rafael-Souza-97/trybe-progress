// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const geraEmail = (nome) => {
//   const splitName = nome.replace(' ', '_').toLowerCase();
// return `${splitName}@trybe.com`;
// }

// const dados = (nome) => {
//   const infos = {
//       nomeCompleto: nome,
//       email: geraEmail(nome),
//     }
//   return infos
// }
// console.log(newEmployees(dados))

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
  
//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };
  
// console.log(lotteryResult(2, numberChecker));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const check = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
let points = 0;
for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
  for (let index2 = 0; index2 < STUDENT_ANSWERS.length; index2 += 1) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index2])
    points += 1;
  }
} return points;
}
console.log(check(RIGHT_ANSWERS, STUDENT_ANSWERS))
// const numberChecker = (gabarito, array, func) => myNumber === number;