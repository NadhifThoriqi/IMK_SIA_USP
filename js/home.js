const header = document.getElementById("header")
const profile = document.getElementById("profile")
const copyright = document.getElementById("copyright")
const home_path = document.querySelectorAll(".input-grub")
const NIMRandom = `${new Date().getFullYear()}${new Date().getMonth()}${new Date().getDate()}0${new Date().getDay()}`;
const params = new URLSearchParams(window.location.search)

if (Number.isNaN(parseFloat(params.get("nama_nim")))) {
    var profil = `
        <p>Nama                  : ${params.get("nama_nim")}</p>
        <p>Prodi           &nbsp;: Teknik Informatika</p>
        <p>NIM &nbsp;&nbsp;&nbsp;: ${NIMRandom}</p>
        ` 
} else {
    var profil = `
        <p>Nama                  : Mahasiswa</p>
        <p>Prodi           &nbsp;: Teknik Informatika</p>
        <p>NIM &nbsp;&nbsp;&nbsp;: ${params.get("nama_nim")}</p>
    `
}

profile.innerHTML = profil

header.innerHTML = `
    <a href="home.html?nama_nim=${params.get("nama_nim")}&password=${params.get("password")}" class="logo-placeholder"></a>
    <h1>HOME</h1>
    <form action="test.html" method="get">
        <input type="hidden" name="test" value="Notifikasi">
        <input type="hidden" name="home_nim" value="nama_nim=${params.get("nama_nim")}">
        <input type="hidden" name="home_password" value="password=${params.get("password")}">
        <button class="btn background-red-black">
            <i class="fas fa-bell header-icon"></i>
        </button>
    </from>
`;

home_path.forEach(element => {
    element.innerHTML += `
        <input type="hidden" name="home_nim" value="nama_nim=${params.get("nama_nim")}">
        <input type="hidden" name="home_password" value="password=${params.get("password")}">
`;
});

copyright.innerHTML = `
    <a href="kelompok.html?home_nim=nama_nim=${params.get("nama_nim")}&home_password=password=${params.get("password")}" id="copyright-footer">
        &copy; 2025 Tugas Kelompok IMK-SIA-USP
    </a>
`


// 1. Ambil semua elemen
const items = document.querySelectorAll('.bounce-in-fwd');

// 2. Definisikan nilai-nilai dasar
const ANIMATION_DURATION = 0.6;  // Durasi animasi setiap item (detik)
const DELAY_INCREMENT = 0.2;     // Jeda tambahan antar-item (detik)

// 3. Loop dan terapkan style
items.forEach((item, index) => {
    // Hitung total delay
    const totalDelay = (index * DELAY_INCREMENT);
    
    // Terapkan Durasi Animasi (sama untuk semua item)
    item.style.animationDuration = `${ANIMATION_DURATION}s`;
    
    // Terapkan Jeda Animasi (berbeda untuk setiap item)
    item.style.animationDelay = `${totalDelay}s`;
});