var tarefas = [];
var valor = prompt();
while( valor != null ){
    tarefas.push( { 
        item: valor,
        concluido: false 
    } );

    valor = prompt();
}
function montarLista(){
    var ul_lista = document.getElementById("lista-tarefas");
    var li_lista = "";
    for(var i = 0; i < tarefas.length; i++){
        if(tarefas[i].concluido){
            li_lista = li_lista + "<li class='concluida'> <input type='checkbox' onclick='toggleConcluida("+ i +")'>" + tarefas[i].item + "</li>";
        }else{
            li_lista = li_lista + "<li> <input type='checkbox' onclick='toggleConcluida("+ i +")'>" + tarefas[i].item + "</li>";
        }
        ul_lista.innerHTML = li_lista;
    }
}

function toggleConcluida(index){
    tarefas[index].concluido = !tarefas[index].concluido;
    montarLista();
}
montarLista();