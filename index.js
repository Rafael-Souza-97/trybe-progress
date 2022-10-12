function vezes (frase, letra ) {
  let resultado = 0;

  for( let indice = 0; indice < frase.length; indice ++ ) {
      if ( letra === frase[indice] ) {
          resultado ++;
      }
  }
  return resultado;
}