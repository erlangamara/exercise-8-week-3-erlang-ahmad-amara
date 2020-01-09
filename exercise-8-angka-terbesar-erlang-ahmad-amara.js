function pasanganTerbesar(angka){
    var angkaHuruf = `${angka}`;
    var pasanganAngkaString = '';

    var indexAngka = [];

    var move = 0;
    for (i = 2; i <= angkaHuruf.length; i++){
        pasanganAngkaString += angkaHuruf.substring(move,i);
        indexAngka.push(pasanganAngkaString/1);
        pasanganAngkaString = '';
        move++;
    }

    do{
        var swap = false;
        for (i = 0; i < indexAngka.length - 1; i++){
            if (indexAngka[i] > indexAngka[i + 1]){
                var fix = indexAngka[i + 1];
                indexAngka[i + 1] = indexAngka[i];
                indexAngka[i] = fix;

                swap = true;
            }
        }
    }
    while (swap)

    return indexAngka[indexAngka.length - 1];
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99