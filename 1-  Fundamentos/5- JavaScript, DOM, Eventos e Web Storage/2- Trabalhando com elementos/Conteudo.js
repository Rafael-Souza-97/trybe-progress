let achaBody = document.body;
let achaPai = document.querySelector("#pai")


const cria = document.createElement('section');
cria.id = "elementoIrmao"
achaPai.appendChild(cria)

const criaFilho = document.createElement('section');
criaFilho.id = "elementoFilho"
elementoOndeVoceEsta.appendChild(criaFilho)

const criaFilhoDoFilho = document.createElement('section');
criaFilhoDoFilho.id = "elementoFilhoDoFilhoDoFilho"
primeiroFilhoDoFilho.appendChild(criaFilhoDoFilho)

