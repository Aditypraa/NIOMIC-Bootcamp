# Contoh Tugas Filter dan Parameters

Hallo teman-teman, silahkan untuk membuat satu buah file dengan nama filterParameters.js dan kemudian tuliskan code dibawah ini :

function panggilFilterParameters(value) {
var arr = [
{negara: 'Indonesia', benua: 'Asia'},
{negara: 'Jerman', benua: 'Eropa'},
{negara: 'Spanyol', benua: 'Eropa'},
{negara: 'Korea', benua: 'Asia'},
{negara: 'Portugal', benua: 'Eropa'},
{negara: 'Amerika Serikat', benua: 'Amerika'},
];

var benuaEropa = arr.filter(function(item) {
// Tulis Code Kamu Disini
});

console.log(benuaEropa);
}

1. Ubah Tulisan // Tulis Code Kamu Disini dengan code untuk melakukan filter berdasarkan parameters
   Kemudian Panggilnya function yang sudah dibuat diatas yaitu panggilFilterParameters sehingga bisa menghasilkan seperti dibawah ini :

[ { negara: 'Indonesia', benua: 'Asia' },
{ negara: 'Korea', benua: 'Asia' } ]

2. Ubah Tulisan // Tulis Code Kamu Disini dengan code untuk melakukan filter berdasarkan parameters
   Kemudian Panggilnya function yang sudah dibuat diatas yaitu panggilFilterParameters sehingga bisa menghasilkan seperti dibawah ini :

[ { negara: 'Jerman', benua: 'Eropa' },
{ negara: 'Spanyol', benua: 'Eropa' },
{ negara: 'Portugal', benua: 'Eropa' } ]
