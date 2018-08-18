var lista = [];
var valor = "";
while(valor != null){
    valor = prompt();
    if(valor != null){
        lista.push( parseFloat(valor));
    }

}
var soma = 0;
for(var i = 0; i < lista.length; i++){
    soma = soma + lista[i];
}

document.write(soma / lista.length)
