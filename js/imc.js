
function calculaImc(){
    var peso = pegaValor( "Informe seu peso" );
    var altura = pegaValor("Informe sua altura" );

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    
    if(imc < 18.5){
        alert("Seu Imc é: " + imc + " e você está abaixo do peso");
    }else if(imc >= 35 && imc <= 39 ){
        alert("Seu Imc é: " + imc + " e você está com Obesidade II");
    }else if(imc >= 18.5 && imc <= 24.99){
        alert("Seu Imc é: " + imc + " e você está com o peso normal");
    }else if(imc >= 25 && imc <= 29.99){
        alert("Seu Imc é: " + imc + " e você está acima do peso");
    }else if(imc >= 30 && imc <= 34.99){
        alert("Seu Imc é: " + imc + " e você está com Obesidade I");
    }else{
        alert("Seu Imc é: " + imc + " e você está com Obesidade III");
    }
    
}

