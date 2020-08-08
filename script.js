const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


var noAngkot = 1;
jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No ' + noAngkot + ' Sedang Beroperasi');
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No ' + noAngkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No ' + noAngkot + ' Sedang Tidak Beroprasi');
    }
}
