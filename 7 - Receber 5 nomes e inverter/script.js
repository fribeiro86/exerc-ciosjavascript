function inverter() {

    for (let x = 1; x <= 5; x++) {

        let palavra = document.getElementById("" + x + "").value;
        let tamanho = palavra.length - 1;
        let palavraInvertida = "";

        for (let i = tamanho; i >= 0; i--) {

            palavraInvertida += palavra[i];

        }

        document.getElementById("" + x + "").value = palavraInvertida.toLowerCase();

    }
}








