function decToBin(num) {
    num = num.toString(); // Converte para string
    let bin ="";
    while (parseInt(num) > 0) {
        bin = (parseInt(num) % 2).toString() + bin; // Pega o resto da divisão por 2
        num = Math.floor(parseInt(num) / 2).toString(); // Divide por 2 e arredonda para baixo
    }
    return bin;
}

function binToDec(bin) {
    bin = bin.toString()
    dec = 0;
    for (let i = 0; i < bin.length; i++) {
        console.log(bin[i] * (2 ** (bin.length - 1 - i)))
        dec += bin[i] * (2 ** (bin.length - i - 1))
    }
    return dec.toString();
}

