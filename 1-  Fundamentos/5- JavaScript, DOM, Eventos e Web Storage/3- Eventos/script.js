function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criaCalendarioDezembro() {
  let tagUl = document.querySelector("#days");
  for (let index in dezDaysList) {
    let tagLi = document.createElement("li");
    tagLi.innerText = dezDaysList[index];
    tagLi.className = "day";
    tagUl.appendChild(tagLi);
  }
}
criaCalendarioDezembro();

function holidays() {
  let feriados = document.querySelector("#days");

  feriados.childNodes[26].classList.add("holiday");
  feriados.childNodes[27].classList.add("holiday");
  feriados.childNodes[33].classList.add("holiday");
}
holidays();

function sextou() {
  let sextasFeiras = document.querySelector("#days");

  sextasFeiras.childNodes[6].classList.add("friday");
  sextasFeiras.childNodes[13].classList.add("friday");
  sextasFeiras.childNodes[20].classList.add("friday");
  sextasFeiras.childNodes[27].classList.add("friday");
}
sextou();

// 2

function botaoFeriadosCalendario(nomeDoBotao) {
  let botaoContainer = document.querySelector(".buttons-container");
  let botaoFeriado = document.createElement("button");
  botaoFeriado.id = "btn-holiday";
  botaoFeriado.innerText = nomeDoBotao;
  botaoContainer.appendChild(botaoFeriado);
}
botaoFeriadosCalendario("Feriados");

//3
function ligaBotao() {
  const achaBotao = document.querySelector("#btn-holiday");
  achaBotao.addEventListener("click", () => {
    let classeFeriados = document.querySelectorAll(".holiday");
    for (let index in classeFeriados) {
      classeFeriados[index].style.backgroundColor = "rgb(220,220,220";
      classeFeriados[index].style.color = "white";
    }
  });
}
ligaBotao();

function desligaBotao() {
  const achaBotao = document.querySelector("#btn-holiday");
  achaBotao.addEventListener("dblclick", () => {
    let classeFeriados = document.querySelectorAll(".holiday");
    for (let index in classeFeriados) {
      classeFeriados[index].style.backgroundColor = "rgb(238,238,238";
      classeFeriados[index].style.color = '#777';
    }
  });
}
desligaBotao();

// 4

function botaoSextouCalendario(nomeDoBotaoSextou) {
  let botaoContainer = document.querySelector(".buttons-container");
  let botaoSextaFeira = document.createElement("button");
  botaoSextaFeira.id = "btn-friday";
  botaoSextaFeira.innerText = nomeDoBotaoSextou;
  botaoContainer.appendChild(botaoSextaFeira);
}
botaoSextouCalendario("Sexta-Feira");

// // 5

function ligaBotaoSextou() {
  const achaBotaoSextou = document.querySelector("#btn-friday");
  achaBotaoSextou.addEventListener("click", () => {
    let classeSextaFeira = document.querySelectorAll(".friday");
    for (let index in classeSextaFeira) {
      classeSextaFeira[index].innerText = "Sextou";
    }
  });
}
ligaBotao();

function desligaBotaoSextou() {
  const achaBotaoSextou = document.querySelector("#btn-friday");
  achaBotaoSextou.addEventListener("dblclick", () => {
    let classeSextaFeira = document.querySelectorAll(".friday");
    for (let index in classeSextaFeira) {
      classeSextaFeira[index].style.backgroundColor = null;
      classeSextaFeira[index].style.color = null;
    }
  });
}
desligaBotaoSextou();
