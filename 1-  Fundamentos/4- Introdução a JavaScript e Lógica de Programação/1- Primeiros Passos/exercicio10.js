// exercicio 10

const custo = 5;
const valorDeVenda = 10;

if ( custo >= 0 && valorDeVenda >= 0) {
    const totalDeCusto = custo * 1.2;
    const totalDeLucro = (valorDeVenda - totalDeCusto) * 1000;
    console.log( totalDeLucro );
} else {
    console.log("Valor incorreto");
}