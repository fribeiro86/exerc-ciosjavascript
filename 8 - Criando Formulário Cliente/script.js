

window.addEventListener('load', () => {

  document.getElementById("cpf").disabled= true;
  document.getElementById("cnpj").disabled = true;
  document.getElementById("dataNascimento").disabled = true;
 
   
 

})

function verificarStatus() {

    let pessoaFisica = document.getElementById("fisica").checked; 
    let pessoaJuridica = document.getElementById("juridica").checked; 

    if(pessoaFisica){

        document.getElementById("cpf").disabled= false;
        document.getElementById("cnpj").disabled = true;
        document.getElementById("dataNascimento").disabled = false;
    }
    
    if(pessoaJuridica){

        document.getElementById("cnpj").disabled = false;
        document.getElementById("cpf").disabled= true;
        document.getElementById("dataNascimento").disabled = true;
        document.getElementById("cpf").value = "";
        document.getElementById("dataNascimento").value = ""; 

    }

}