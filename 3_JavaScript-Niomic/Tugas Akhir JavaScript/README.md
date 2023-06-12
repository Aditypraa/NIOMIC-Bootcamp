# Tugas Akhir Javascript

1. Pastikan Teman Teman Buatlah sebuah file pada folder project teman teman

2. Berikan nama filenya dengan style.css lalu masukan kode dibawah ini :

body{
font-family: sans-serif;
background: #C0C0C0;
}

h1{
text-align: center;
font-weight: 300;
}

.tulisan_login{
text-align: center;
text-transform: uppercase;
}

.kotak_login{
width: 350px;
background: white;

        margin: 80px auto;
        padding: 30px 20px;

}

label{
font-size: 11pt;
}

.form_login{
box-sizing : border-box;
width: 100%;
padding: 10px;
font-size: 11pt;
margin-bottom: 20px;
}

.tombol_login{
background: #FF7F00;
color: white;
font-size: 11pt;
width: 100%;
border: none;
border-radius: 3px;
padding: 10px 20px;
}
.tombol_lanjut{
background: red;
color: white;
font-size: 11pt;
width: 100%;
border: none;
border-radius: 3px;
padding: 10px 20px;
}
.link{
color: #232323;
text-decoration: none;
font-size: 10pt;
}

3. Setelah itu teman teman buatlah 1 buah file dengan nama index.html copy kan kode dibawah ini

<html>
<head>
        <title>TUGAS AKHIR/title>
        <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body >

        <h1>Membuat Desain Form Register Dengan Javascript <br/> NIOMIC</h1>

 <div class="kotak_login">
 <button id="X" onclick="buat_login()" class="tombol_lanjut">Klik Disini Untuk Mendaftar</button>
</div>
<script type="text/javascript" src="form.js"> </script>
</body>
</html>

4. Setelah itu teman teman buatlah 1 buah file javascript dengan nama form.js lalu buat sebuah function bernama buat_login() yang mampu membuat form untuk register otomatis pada saat kita mengklik tombol pada tampilan awal ini :

<img width="960" alt="Screenshot_1" src="https://lh6.googleusercontent.com/a1DmowHItZmxK_zRS0QRBw8m_JVT2K4oPfwtxQ0ijrQEQpv0U80Q4rH61avOtIWkFSiIgARaZtVP41G90SZQO-SquM_VBbMc2_NDlN4aH4pkJdAzB4xD5rBksfMfKT-pInFpzjva1TA9kJQ"></img>

5. Pada saat diklik form register akan muncul tanpa loading

<img width="960" alt="Screenshot_1" src="https://lh4.googleusercontent.com/-eFkpNxgpE1KJBqmiNraiF0YxhfqiQUn_PjS38giBOpAP1bzeekZ1USJMu16eycRWPjne4pdU-p84QbRr-ent9jdWOweWDByS_Onmb0_9MLh0FA4fHefgUWjw-msELwLo0C8YyfIendfqoI"></img>

Happy Codding :)
