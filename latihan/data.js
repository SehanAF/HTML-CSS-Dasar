const nama = "Sehan Af";
let usia = 4;

function generateBioData() {
    //console.log(`Nama saya adalah ${nama} dan usia saya ${usia} tahun`);
    let generasi;
 
    if (usia > 10 && usia < 19) {
        generasi = "generasi remaja";
    } else if (usia >= 19 && usia < 40) {
        generasi = "generasi dewasa"
    } else if (usia >= 40) {
        generasi = "generasi tua"
    } else if (usia >= 6 && usia< 10) {
        generasi = "anak-anak"
    } else if (usia >= 1 && usia < 5) {
        generasi = "balita"
    } else {
        console.log('ini anda apa ya')
    }

    return console.log('generasi saya adalah', generasi);
}

console.log(nama);
console.log(usia);

generateBioData();














































