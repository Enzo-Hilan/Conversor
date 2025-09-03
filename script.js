function conversao(tipo){
    let iNumber = document.getElementById('input-number').value;
    let result = document.getElementById('output-number');
    var arr = [];

    switch (tipo) {
        case 'db':
            arr = [];
            while (iNumber > 0) {
                arr.push(iNumber % 2);
                iNumber = Math.floor(iNumber / 2);
            }
            return result.value = arr.reverse().join('');
            break;
        case 'bd':
            for (let i = 0; i < iNumber.length; i++) {
                console.log(iNumber[i]);
                if (iNumber[i] != 1 && iNumber[i] != 0) {
                    return result.value = 'Número inválido';
                } else {
                    
                }
            }
            break;
        case 'dh':
            
            break;
        case 'hd':
            
            break;
        case 'bh':
            
            break;
        case 'hb':
            
            break;
        default:
            break;
    }
}