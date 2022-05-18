// exercicio 5

 const l1 = 90;
 const l2 = 100;
 const l3 = -10;

const soma = l1 + l2 + l3;
const todosPositivos = l1 > 0 && l2 > 0 && l3 > 0

if( todosPositivos) {
    if ( soma === 180) {
        console.log(true);
    }
    
    else if ( soma > 360) {
        console.log("erro");
    }
    
    else {
        console.log(false);
    }
} else {
    console.log("Não existe ângulo negativo");
}
