// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [20, 13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort((a,b) => {
//   if (a > b) return 1;
//   if (a < b) return -1; 
//   return 0;
// })

// console.log(oddsAndEvens)

// const factorial = (number) => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// };
// console.log(factorial(4))

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }

//   return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

const contaClique = () => {

}