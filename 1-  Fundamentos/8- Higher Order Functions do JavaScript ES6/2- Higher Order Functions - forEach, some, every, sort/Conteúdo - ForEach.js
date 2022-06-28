// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   for (let i = 0; i < students.length; i += 1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]


// Com for Each 

// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// function verifyGrades() {
//   students.forEach((student, index) => {
//     if (student.grade >= 60) {
//       students[index].approved = 'Aprovado';
//     } else {
//       students[index].approved = 'Recuperação';
//     }
//   });
// }

// verifyGrades();

// console.log(students);
// // [
// //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
// //   { name: 'José', grade: 56, approved: 'Recuperação' },
// //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
// //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// // ]



// Tabuada de 2

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);



 // emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
// Adicione seu código aqui