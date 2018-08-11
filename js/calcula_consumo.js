function quebraLinha(){ 
    document.write("<br>"); 
    document.write("<br>");
}

function pegaCombustivel( texto ){
    return parseInt(prompt( texto ));
    
}

function calculaMediaDoisNumeros(numero1, numero2 ){
    return ( numero1 / numero2 ).toFixed(2);
}

function imprimirNaTela(texto, variavel){
    document.write(texto + variavel);
    quebraLinha();
}

function inicializa(){


    var caminhoComGasolina =  pegaCombustivel( "Informe o caminho com gasolina" );
    var caminhoComAlcool = pegaCombustivel( "Informe o caminho com alcool" );
    var tanque = 40;   
    var mediaDaGasolina = calculaMediaDoisNumeros(caminhoComGasolina, tanque);
    var mediaDaAlcool = calculaMediaDoisNumeros(caminhoComAlcool, tanque);
    
    imprimirNaTela("Média com Gasolina: ", mediaDaGasolina);
    imprimirNaTela( "Média com Álcool: " , mediaDaAlcool);
    imprimirNaTela( "Preço KM com Alcool: " , calculaMediaDoisNumeros(mediaDaAlcool , 2.4) )
    imprimirNaTela( "Preço KM com Gasolina: " , calculaMediaDoisNumeros(mediaDaGasolina , 2.9) )
}

inicializa()