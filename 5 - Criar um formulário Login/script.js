function cadastrar() {
    
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;
    let confirmar = document.getElementById("confirmar").value;

    
    if(usuario === "" || senha === "" || confirmar === ""){

        alert("Preencha todos os campos");
    }else{

        alert("Cadastro realizado"); 
    }
}