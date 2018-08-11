function calcularMedia(){
    var notaBimestre1 = pegaValor( "Infome a nota do primeiro bimestre." );
    var notaBimestre2 = pegaValor( "Infome a nota do segundo bimestre." );
    var notaBimestre3 = pegaValor( "Infome a nota do terceiro bimestre." );
    var notaBimestre4 = pegaValor( "Infome a nota do quarto bimestre." );

    return (notaBimestre1 + notaBimestre2 + notaBimestre3 + notaBimestre4) / 4;
    
}

function verificaSeAprovado(){

   var media = calcularMedia();
   
   if(media >= 85){
       alert("Aprovado com a média: " + media);
   }
   if(media >= 84 && media < 85){
        alert("Conselho: " + media);
    }
    if(media < 50){
        alert("Você não vai mais estudar aqui: " + media);
    }
    if(media >= 70 && media < 84){
        alert("Recuperação: " + media);
    }
    if(media >= 50 && media < 70){
        alert("Reprovado: " + media);
    }

}