function quebraLinha(){ 
    document.write("<br>"); 
    document.write("<br>");
}

function pegaCombustivel( texto ){
    return parseInt(prompt( texto ));
}

function calculaMediaKMPercorrido(caminho, quantoAbast ){
    return ( caminho / quantoAbast ).toFixed(2);
}

function inicializa(){


    var caminhoComGasolina =  pegaCombustivel( "Informe o caminho com gasolina" );
    var caminhoComAlcool = pegaCombustivel( "Informe o caminho com alcool" );
    var tanque = 40;   
    var mediaDaGasolina = calculaMediaKMPercorrido(caminhoComGasolina, tanque);
    var mediaDaAlcool = calculaMediaKMPercorrido(caminhoComAlcool, tanque);
    
    document.write( "Média com Gasolina: " + mediaDaGasolina);
    quebraLinha();
    document.write( "Média com Álcool: " + mediaDaAlcool);
    quebraLinha()
    document.write("Preço KM com Alcool: " + (mediaDaAlcool / 2.4).toFixed(2) )
    quebraLinha()
    document.write("Preço KM com Gasolina: " + (mediaDaGasolina / 2.9).toFixed(2) )
}

inicializa()