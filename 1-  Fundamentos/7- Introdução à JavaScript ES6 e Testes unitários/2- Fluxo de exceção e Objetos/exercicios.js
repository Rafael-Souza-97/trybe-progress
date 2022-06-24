// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   const address = 'address';
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const customerName = order.name;
//   const customerPhone = order['phoneNumber'];
//   const street = order[address].street;
//   const number = order[address].number;
//   const apartment = order[address].apartment;

//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
// }

// customerInfo(order);

// const orderModifier = (order) => {
//   const newBuyer = order.name = 'Luiz Silva';
//   const pizzas = Object.keys(order.order.pizza);
//   const drinks = order.order.drinks.coke.type;
//   const newTotal = order.payment.total = '50';

//   console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
// }

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// const adicionaTurno = (obj, key, value) => {
// return obj.key = value;
// }
// adicionaTurno(lesson2, 'turno', 'noite')

// const listaKeys = (obj) => {
// return console.log(obj);
// }
// listaKeys(lesson3);

// const functionLength = (obj) => Object.keys(obj).length;

// functionLength(lesson3);
// console.log(functionLength(lesson3));

// const showKeys = (obj) => Object.values(obj);
// showKeys(lesson1);
// console.log(showKeys(lesson1));


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


// console.log(allLessons)

// const studentsTotal = (obj) => {
//   let total = 0;
//   const array = Object.keys(obj);
//   for (let index in array) {
//   total += obj[array[index]].numeroEstudantes;
//   }
//   return total;
// }
// console.log(studentsTotal(allLessons))

// const getValue = (obj, num) => { 
//   return Object.values(obj)[num];
// }
// console.log(getValue(lesson2, 3))

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (let index in arr) {
//     if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//   }
//   return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));

// const contaAlunos = (obj) => {
// let total = 0
// const objeto = Object.value(obj);
// for (let index = 0; index < objeto.length; index += 1) {
//   if (obj[objeto[index]].materia === 'Matemática') {
//   total += obj[objeto[index]].numeroEstudantes;
// }
// }
// return total
// }

// console.log(contaAlunos(allLessons))

  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));
