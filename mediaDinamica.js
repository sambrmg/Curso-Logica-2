var lista = [];
var valor = "";
while(valor != null){
    valor = prompt("criar a lista de nomes");
    if(valor != null){
        lista.push( valor.trim() );
    }

}
// ["guilherme", "henrique", "martins", "da", "cruz"]
var nomePes = prompt("nome a ser procurado").trim();
var temNome = false;
for(var i = 0; i < lista.length; i++){
    if( lista[i] == nomePes){
        temNome = true;
    }
}

if( temNome ){
    alert("Nome encontrado na posicao: " );
}else{
    alert("Nome não encontrado");
}
