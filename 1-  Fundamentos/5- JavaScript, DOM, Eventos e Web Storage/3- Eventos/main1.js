const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.


firstLi.addEventListener('dblclick', () => {
    firstLi.classList.remove('tech')
})

firstLi.addEventListener('click', () => {
    firstLi.classList.add('tech')
})

secondLi.addEventListener('dblclick', () => {
    secondLi.classList.remove('tech')
})

secondLi.addEventListener('click', () => {
    secondLi.classList.add('tech')
})

thirdLi.addEventListener('dblclick', () => {
    thirdLi.classList.remove('tech')
})

thirdLi.addEventListener('click', () => {
    thirdLi.classList.add('tech')
})


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('input',  (event) => {
let mudaTexto = document.querySelector('.tech')
mudaTexto.innerText = event.target.value;
})


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let url = "https://rafael-souza-97.github.io/"

function openInNewTab(url) {
   let win = window.open(url, '_blank');
   win.focus();
  }
  myWebpage.addEventListener('click', () => {
    openInNewTab(url);
  });

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  myWebpage.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
})
  
  myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'white';
})

  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.