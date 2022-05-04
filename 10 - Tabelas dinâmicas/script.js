/* Escreva um script que receba três números fornecidos pelo usuário através de um formulário exiba em os números
digitados em forma de tabela, a soma, a média, o produto, o maior e menor número. */

function criar() {
    
    let operacoes = ["Soma", "Média", "Produto", "Máximo" , "Minimo"];
    let tamArray = operacoes.length; 
    let tabela = document.getElementById("tab"); 
    let numeroUM = document.getElementById("numero").value; 
    let numeroDois = document.getElementById("numero_dois").value; 
    let soma = parseFloat(numeroUM) +  parseFloat(numeroDois);
    let media = (parseFloat(numeroUM) + parseFloat(numeroDois))/2; 
    let produto = parseFloat(numeroUM) * parseFloat(numeroDois);
    let maximo = Math.max( parseFloat(numeroUM), parseFloat(numeroDois));
    let minimo = Math.min( parseFloat(numeroUM), parseFloat(numeroDois));
    let resultado = [soma, media, produto, maximo, minimo]; 
    let tr = document.createElement("TR");
    tabela.appendChild(tr);

    for (let i = 0; i < tamArray; i++) {
     
        let th = document.createElement("TH");
         th.innerText = operacoes[i]; 
         tr.appendChild(th); 
    }

    let tr1 = document.createElement("TR");
    tabela.appendChild(tr1);

    for (let j= 0; j < tamArray; j++) {
     
        let td = document.createElement("TD");
        td.innerText = resultado[j]; 
        tr1.appendChild(td); 
 }
    
}