let paragrafo ="block";  
    
function mudarEstado() {

    let botao = document.getElementsByTagName("button")[0]; 
     
    if(paragrafo === "block"){
        
        document.getElementsByTagName("p")[0].style.display = "none"; 
        paragrafo = "none"; 
        botao.innerText = "Mostrar";

    }else{
        
        document.getElementsByTagName("p")[0].style.display = "block"; 
        paragrafo = "block"; 
        botao.innerText = "Ocultar";
    }    
    
}