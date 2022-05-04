/*
Crie uma função em JavaScript que receba 2 palavras através de campos de formulário e depois imprima-as
intercaladas em um outro campo de formulário que deve está desabilitado (o usuário não deve conseguir digitar
nenhum valor nesse campo). Ex.: ‘Joao’ e ‘Mary’; a impressão deve ser: ‘JMoaaroy’. */
function teste() {

    let palavraUm = document.getElementById("word_one").value;
    let palavraDois = document.getElementById("word_two").value;
    let resul = document.getElementById("resultado");
    let arr = [];
    let j = 0;

    for (let i = 0; i < palavraUm.length; i++) {

        arr[j] = palavraUm[i];
        j += 2;


    }
    /* amor  0 < 4 
    
    1 - i=0 e j=0
    2 - i=1 e j=2
    3 - i=2 e j=4
    4 - i=3 e j=6
    
    */


    j = 1;
    for (let i = 0; i < palavraDois.length; i++) {

        arr[j] = palavraDois[i]
        j += 2;

    }

    /* mari  0 < 4 
    
    1 - i=0 e j=1
    2 - i=1 e j=3
    3 - i=2 e j=5
    4 - i=3 e j=7
    
    */

    let resultado = arr.join("");

    resul.value = resultado;



}