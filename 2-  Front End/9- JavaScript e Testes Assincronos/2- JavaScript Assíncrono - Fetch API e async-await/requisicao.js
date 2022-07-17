const fetch = require('node-fetch');
{
// Tudo certo;


// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';

//   const request = fetch(url)
//     .then((response) => response.json())
//     // .then((object) => console.log(object.slip.advice)) // primeiro exemplo
//     // .then((object) => { // segundo exemplo
//     //   const { slip } = object;
//     //   const { id, advice } = slip;
//     //   console.log(advice)
//     // })
//     .then(({ slip: { id, advice } }) => console.log(advice)) // melhor exemplo
// };
// getRandomAdvice();
}

{
  // Com erro;

// const getRandomAdvice = () => {
//   const url = 'https://pi.adviceslip.com/advice'; //erro

//   const request = fetch(url)
//     .then((response) => response.json())
//     .then(({ slip: { id, advice } }) => console.log(advice))
//     .catch((error) => console.log('Ops, algo deu errado! ',error.errno))

// };
// getRandomAdvice();
}

{
const getRandomAdvice = async () => {
  try {
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url);
    const json = await request.json();
    const { slip: { advice } } = json;
    return console.log(advice);
  } catch (error) {
      return console.log('Always check your Internet connection and your URLs.');
  }
};
getRandomAdvice();
}