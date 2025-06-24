// Nomor 1
let value = [0, 7, 11, 77, 1, 3, 9, 2, 1, 3];


for (let i = 0; i < value.length - 1; i++) {
    for (let j = 0; j < value.length - 1 - i; j++) {
        if (value[j] > value[j + 1]) {
            // Tukar posisi
            let temp = value[j];
            value[j] = value[j + 1];
            value[j + 1] = temp;
        }
    }
}

console.log("Hasil sort:", value);

// Nomor 2
let cekKata = ["KATAK", "KASUR RUSAK", "KELAS"];

for (let i = 0; i < cekKata.length; i++) {
    let kata = cekKata[i];
    let cleanKata = "";

    // Hapus spasi manual dan ubah ke huruf besar
    for (let j = 0; j < kata.length; j++) {
        let huruf = kata[j];
        if (huruf !== " ") {
            // Ubah ke huruf besar (tanpa pakai toUpperCase)
            if (huruf >= 'a' && huruf <= 'z') {
                huruf = String.fromCharCode(huruf.charCodeAt(0) - 32);
            }
            cleanKata += huruf;
        }
    }

    // Cek palindrom dengan loop
    let isPalindrom = true;
    for (let k = 0; k < cleanKata.length / 2; k++) {
        if (cleanKata[k] !== cleanKata[cleanKata.length - 1 - k]) {
            isPalindrom = false;
            break;
        }
    }

    console.log(kata + " = " + isPalindrom);
}