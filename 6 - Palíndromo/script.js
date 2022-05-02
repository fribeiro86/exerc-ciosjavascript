function inverter() {

    let palavra = document.getElementById("palavra").value;
    let tamanhoPalavra = palavra.length-1; 
    let palavraInvertida=""; 
    let resposta = document.getElementById("resposta");

    for (let i = tamanhoPalavra; i >= 0; i--) {
        
        palavraInvertida +=  palavra[i];  

    }
    
    if(palavraInvertida === palavra){

         resposta.innerHTML= "<strong> Sim, são palíndromas: " + palavraInvertida + " = "+ palavra + "</strong>";
    }else{

        resposta.innerHTML= "<strong> Não são palíndromas: " + palavraInvertida + " ≠ "+ palavra + "</strong>";
    }


    
}