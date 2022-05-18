// Exercício 1

//  let info = {
//    personagem: 'Margarida',
//    origem: 'Pato Donald',
//    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//    recorrente: "Sim",
//  };

// console.log(`Boas Vindas, ${info.personagem}!`);

// Exercício 2

//  info['recorente'] = 'Sim';
// console.log(info);

// Exercício 3

// for (let key in info)
//   console.log(key)

// Exercício 4

// for (let key in info)
//   console.log(info[key])

// Exercício 5

//  let info2 = {
//    personagem: 'Tio Patinhas ',
//    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//    nota: 'O último MacPatinhas',
//    recorrente: "Sim",
//  };

//    for (let key in info, info2) {
//    if ( info[key] === info2[key]){
//      console.log("Ambos Recorrentes")
//    } else {
//      console.log(`${info[key]} e ${info2[key]}`)
//    }
//   }

// Exercício 6

//  let leitor = {
//    nome: 'Julia',
//    sobrenome: 'Pessoa',
//    idade: 21,
//    livrosFavoritos: [
//      {
//        titulo: 'O Pior Dia de Todos',
//        autor: 'Daniela Kopsch',
//        editora: 'Tordesilhas',
//      },
//    ],
//  };

//  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}".`)

// Exercício 7

 let leitor = {
   nome: 'Julia',
   sobrenome: 'Pessoa',
   idade: 21,
   livrosFavoritos: [
     {
       titulo: 'O Pior Dia de Todos',
       autor: 'Daniela Kopsch',
       editora: 'Tordesilhas',
     },
   ],
 };

 leitor.livrosFavoritos.push({
   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
   autor: 'JK Rowling',
   editora: 'Rocco',
 })

 console.log(leitor)

// Exercicio 8

 console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`)
 console.log(leitor.livrosFavoritos[1])