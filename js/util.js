function pegaValor( label ){
    var valorInformado = prompt( label );
    if(valorInformado != null){
        return parseFloat( valorInformado.replace(',', '.') );
    }else{
        alert( "O valor não pode ser vazio." );
    }
}