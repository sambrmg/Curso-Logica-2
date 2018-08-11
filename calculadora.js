function soma(){
    var n1 = document.querySelector("#numero1").value;
    var n2 = document.querySelector("#numero2").value;
    var total = (parseFloat(n1) + parseFloat(n2) );
    document.querySelector("#total").value = total;
}
