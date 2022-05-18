// Exercício 1

//  let fatorial =  50;
//  let num = fatorial;


//  for (let index = 1; index < fatorial; index += 1) {
//      num = index * num;
//  }

//  console.log(num)



// Exercício 2


// let palavra = "Tryber";
// let word = []; 

//  for (let index = palavra.length -1; index >= 0; index -= 1) {
//      word.push(palavra[index]);
//  }

//  console.log(word)


// Exercício 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let smallWord = array[0];
// let bigWord = array[0];

// for ( let index = 0; index < array.length; index += 1 ) {
//     if ( array[index].length < smallWord.length ) {
//         smallWord = array[index];
//     }
// }

// for ( let index = 0; index < array.length; index += 1 ) {
//     if ( array[index].length > bigWord.length )
//         bigWord = array[index];
// }
    
// console.log(smallWord)
// console.log(bigWord)


// Exercício 4

 let numPrimo = 50;
 let ePrimo = [];
 let numDivisores = 0;

 for ( let numMaior = 2; numMaior <= numPrimo; numMaior += 1 ) {
     for ( let numMenor = 2; numMenor <= numMaior; numMenor += 1 ) {
         if ( numMaior % numMenor === 0 ) {
            numDivisores += 1;
        }
    }
    if ( numDivisores === 2 ) {     
        ePrimo.push( numMaior );
    }
}

 console.log( ePrimo )
