const params = new URLSearchParams(window.location.search)
const profile = document.getElementById("header-group")

profile.innerHTML += `
    <a href="home.html?${params.get('home_nim')}&${params.get('home_password')}" class="logo-usp"></a>
    <h1>KOLOM BERITA</h1>
    <form action="test.html" method="get">
        <input type="hidden" name="test" value="Notifikasi">
        <button class="btn">
            <i class="fas fa-bell header-icon"></i>
        </button>
    </from>
`;

// 1. Ambil semua elemen
const items = document.querySelectorAll('.slide-in-bottom');

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