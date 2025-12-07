const slidesData = [
    { title: "Pembukaan kafe baru di area kampus", image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?fit=crop&w=800&q=80'},
    { title: "Gedung baru diresmikan oleh Rektor", image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80'},
    { title: "Liputan eksklusif acara kampus", image: 'https://scontent.cdninstagram.com/v/t39.30808-6/581299965_834709669101150_452297318664571056_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc2NjQzNzQ2MTI1Nzk3NjIzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ytTZesAaz5IQ7kNvwFM71Gy&_nc_oc=AdmdUOeZyE59Wcv_JznpmNk5iI_VNhh5O5Vjzv9DOd34i0a6cfPIbNb4w5kq2yKIt-0&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ntJgIp8TFHo_pF6O-zXfaw&oh=00_Afnc_jCpusvNxf0VBpHWfpjexMlk0HEPrvT6G-Pk3uatxw&oe=693AAC8A'},
    { title: "Kabar terbaru SaFin Univ", image: 'https://scontent.cdninstagram.com/v/t39.30808-6/557628248_801516122420505_5679954427470561816_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzczNzI0OTU3MDgxNjYyMTA1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5IAHtE61Z9QQ7kNvwGqDpvE&_nc_oc=Adlb3Dy4zdS9Ll75NcXzt7lY_83sBV3HqWbZaUvKWUayniBAcJEM124_GeKH7h5VrgE&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=BcGUpqWYHER9Ld6XvA9ozg&oh=00_AfmGUaVBirAMfMugjm-fIe12OfnghZjJPu2RBpccULpYWA&oe=693AB547'},
    { title: "Berita PATI terkini", image: 'https://beritabanten.com/wp-content/uploads/2025/08/Demo-penertiban-karaoke-di-Kantor-DPMPTSP-Pati.gif' }
];

let slideIndex = 1; // Slide saat ini (berdasarkan indeks array 0-n)

function showSlides(n) {
    let slides = slidesData;
    let totalSlides = slides.length;

    // 1. Hitung Indeks
    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    let centerIndex = slideIndex - 1;
    let leftIndex = (centerIndex - 1 + totalSlides) % totalSlides; // Looping ke belakang
    let rightIndex = (centerIndex + 1) % totalSlides; // Looping ke depan

    // 2. Update Konten Slot
    // Slot Tengah (Penuh)
    document.getElementById('center-item').innerHTML = `
        <form action="test.html" method="get">
            <input type="hidden" name="test" value="${slides[centerIndex].title}">
            
            <button class="btn">
                <img class="side-image-placeholder" src="${slides[centerIndex].image}" alt="${slides[centerIndex].title}">
                <div class="center-caption">${slides[centerIndex].title}</div>
            </button>
        </form>
    `;
    
    // ${style.backgroundImage=slides[centerIndex].image}
    
    // Slot Kiri (Samping)
    document.getElementById('left-image').style.backgroundImage = `url(${slides[leftIndex].image})`;
    document.getElementById('left-caption').textContent = "Sebelumnya: " + slides[leftIndex].title;
    
    // Slot Kanan (Samping)
    document.getElementById('right-image').style.backgroundImage = `url(${slides[rightIndex].image})`;
    document.getElementById('right-caption').textContent = "Berikutnya: " + slides[rightIndex].title;

    // 3. Update Dots
    updateDots(slideIndex);
}

function updateDots(current) {
    let dotsContainer = document.querySelector('.slider-dots');
    dotsContainer.innerHTML = ''; // Hapus dots lama

    for (let i = 0; i < slidesData.length; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        if (i + 1 === current) {
            dot.classList.add('active');
        }
        // Atur onclick untuk pindah ke slide i+1
        dot.setAttribute('onclick', `currentSlide(${i + 1})`); 
        dotsContainer.appendChild(dot);
    }
}

// Fungsi yang dipanggil oleh tombol klik (Slot Samping)
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Fungsi yang dipanggil oleh dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Inisialisasi saat dimuat
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});