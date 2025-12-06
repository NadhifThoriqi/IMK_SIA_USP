const params = new URLSearchParams(window.location.search)
const profile = document.getElementById("header-group")

profile.innerHTML += `
    <a href="home.html?${params.get('home_nim')}&${params.get('home_password')}" class="logo-usp"></a>
    <h1>KOLOM BERITA</h1>
    <form action="test.html" method="get">
        <input type="hidden" name="test" value="Notifikasi">
        <button class="btn background-red-black">
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

document.addEventListener("DOMContentLoaded", function() {
    // Pilih semua elemen yang ingin di-lazy load
    let lazySections = document.querySelectorAll('.slide-in-bottom');

    // Opsi untuk observer: kapan harus mulai memuat. RootMargin: '0px 0px 200px 0px'
    // berarti mulai muat saat elemen berjarak 200px dari bagian bawah viewport.
    let observerOptions = {
        root: null, // Mengamati dalam viewport browser
        rootMargin: '500px', // Muat 200px sebelum elemen terlihat penuh
        threshold: 0.1 // Berapa persen elemen yang harus terlihat
    };

    // Fungsi yang akan dijalankan saat elemen terlihat
    let sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Elemen sudobserverOptionsah terlihat atau mendekati viewport
                const section = entry.target;

                // Hentikan pengamatan setelah dimuat
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    // Mulai mengamati setiap elemen lazy
    lazySections.forEach(section => {
        sectionObserver.observe(section);
    });
});
