// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten(arrays) {
//   return arrays.reduce((acc, curr) => `${acc} ${curr}`, []);
// }
// console.log(flatten(arrays))

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// function reduceNames() {
//   const names = books.reduce((acc, book) => `${acc} ${book.author.name},`, '');
//   return names;
// }


// function averageAge(books) {
//   const age = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0);
//   return age / books.length;
// }


// function longestNamedBook() {
//   return books.reduce((acc, book) => {
//     if(book.name.length > acc.name.length) {
//     return book;
//     }
//   return acc;
// })
// }



const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // const lower = names.reduce((acc, name) => [`${acc} ${name.toLowerCase()}`], '')
  // const split = lower.reduce((acc1, palavra) => [acc1 + palavra.split('')], '');
  // return letras = split.reduce((acc2, letra) => {
  //   if (letra === 'a') return acc2; return acc2
  //   }, 0);
}

// console.log(containsA())


const split = names.reduce((acc1, palavra) => [acc1 + palavra.split('')], '');
const letras = split.reduce((acc2, letra) => { if (letra === 'a' || letra === 'A') return acc2 + 1; return acc2});

console.log(split)