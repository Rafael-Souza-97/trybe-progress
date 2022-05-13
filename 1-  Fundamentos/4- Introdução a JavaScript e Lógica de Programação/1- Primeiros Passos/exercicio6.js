// exercicio 6

const pXadrez = "BIsPo";

switch (pXadrez.toLocaleLowerCase()) {
    case "rei":
        console.log("O rei anda uma casa para qualquer lado do tabuleiro");
        break;
    case "peao":
        console.log("O peao anda uma casa para frente do tabuleiro");
        break;
    case "bispo":
        console.log("O bispo anda em diagonal para qualquer lado do tabuleiro");
        break;
    case "cavalo":
        console.log("O cavalo anda em L para qualquer lado do tabuleiro");
        break;
    case "rainha":
        console.log("A rainha anda para qualquer lado do tabuleiro");
        break;

    default: 
    console.log("Palavra inválida");
}
