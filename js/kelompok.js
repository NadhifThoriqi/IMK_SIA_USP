const params = new URLSearchParams(window.location.search)
const header = document.getElementById("header")

if (params.get('home_nim')) {
    header.innerHTML += `
        <div class="top">
            <a href="home.html?${params.get('home_nim')}&${params.get('home_password')}" class="class="background-red""><div class="logo-placeholder"></div></a>
            <form action="test.html" method="get">
                <input type="hidden" name="test" value="Notifikasi">
                <button class="btn background-red-black">
                    <i class="fas fa-bell header-icon"></i>
                </button>
            </from>
        </div>
        <h1 class="background-red text-flicker-in-glow">NAMA ANGGOTA KELOMPOK IMK-SIA-USP</h1>
    `;
} else {
    header.innerHTML += `
        <div class="top">
            <a href="index.html" class="class="background-red""><div class="logo-placeholder"></div></a>
            <form action="test.html" method="get">
                <input type="hidden" name="test" value="Notifikasi">
                <button class="btn background-red-black">
                    <i class="fas fa-bell header-icon"></i>
                </button>
            </from>
        </div>
        <h1 class="background-red text-flicker-in-glow">NAMA ANGGOTA KELOMPOK IMK-SIA-USP</h1>
    `;
}


// 1. Ambil semua elemen
const item1 = document.querySelectorAll('.background-red');
const item2 = document.querySelectorAll('.text-focus-in');

// 2. Definisikan nilai-nilai dasar
const ANIMATION_DURATION = 0.8;  // Durasi animasi setiap item (detik)
const DELAY_INCREMENT = 0.8;     // Jeda tambahan antar-item (detik)

// 3. Loop dan terapkan style
item2.forEach((item, index) => {
    // Hitung total delay
    const totalDelay = (index * DELAY_INCREMENT);

    // Terapkan Durasi Animasi
    item.style.animationDuration = `${ANIMATION_DURATION}s`;
    
    // Terapkan Jeda Animasi
    item.style.animationDelay = `${totalDelay}s`;
});