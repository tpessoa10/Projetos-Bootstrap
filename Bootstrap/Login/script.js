var usuario = "user"
var password = "123456"

function login(){
    var user = document.getElementById("user").value
    var senha = document.getElementById("senha").value

    if(usuario == user && password == senha){
        document.location.href = "logado.html"
    }else{
        document.getElementById("alert").style.display = "block"
        document.getElementById("forget").style.display = "block"
    }
}