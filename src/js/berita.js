const slidesData = [
    { title: "Pembukaan kafe baru di area kampus", image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?fit=crop&w=800&q=80'},
    { title: "Gedung baru diresmikan oleh Rektor", image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80'},
    { title: "Liputan eksklusif acara kampus", image: './src/assets/wisuda.jpg'},
    { title: "Kabar terbaru SaFin Univ", image: './src/assets/pmb info.jpg'},
    { title: "Berita PATI terkini", image: 'https://beritabanten.com/wp-content/uploads/2025/08/Demo-penertiban-karaoke-di-Kantor-DPMPTSP-Pati.gif' }
];

let slideIndex = 1; // Slide saat ini (berdasarkan indeks array 0-n)

function showSlides(n) {
    let slides = slidesData;
    let totalSlides = slides.length;

    // 1. Looping Indeks (1 ke N)
    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    let centerIndex = slideIndex - 1; // Indeks array (0 hingga n-1)
    
    // Looping ke belakang (kiri)
    let leftIndex = (centerIndex - 1 + totalSlides) % totalSlides; 
    
    // Looping ke depan (kanan)
    let rightIndex = (centerIndex + 1) % totalSlides; 

    // 2. Update Konten Slot
    // Slot Tengah (Penuh)
    document.getElementById('center-item').innerHTML = `
        <form action="test.html" method="get">
            <input type="hidden" name="test" value="${slides[centerIndex].title}">
            
            <button class="btn side-image-placeholder" style="background-image: url(${slides[centerIndex].image});">
                <div class="center-caption">${slides[centerIndex].title}</div>
            </button>
        </form>
    `;
        
    // Slot Kiri (Samping)
    document.getElementById('left-image').style.backgroundImage = `url(${slides[leftIndex].image})`;
    
    // Slot Kanan (Samping)
    document.getElementById('right-image').style.backgroundImage = `url(${slides[rightIndex].image})`;
    
    // 3. Update Dots
    updateDots(slideIndex);
}

function updateDots(current) {
    let dotsContainer = document.querySelector('.slider-dots');
    if (!dotsContainer) return; // Tambahkan pengaman
    
    dotsContainer.innerHTML = ''; 

    for (let i = 0; i < slidesData.length; i++) {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        if (i + 1 === current) {
            dot.classList.add('active');
        }
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

function Desktop(slides) {
    const desktopElement = document.getElementsByClassName("desktop")[0]; 
    let htmlOutput = "";

    // Iterasi untuk tampilan Desktop
    for (const slide of slides) { 
        htmlOutput += `
            <article>
                <form action="test.html" method="get">
                    <input type="hidden" name="test" value="${slide.title}">
                    <button class="btn">
                        <img class="side-image-placeholder" src="${slide.image}" alt="${slide.title}"> 
                        <p class="center-caption">${slide.title}</p>
                    </button>
                </form>
            </article>
        `;
    }

    if (desktopElement) {
        desktopElement.innerHTML = htmlOutput;
    } else {
        console.error("Elemen dengan kelas 'desktop' tidak ditemukan!");
    }
};

// Inisialisasi saat dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // Jalankan showSlides untuk menginisialisasi carousel mobile
    showSlides(slideIndex);

    // Jalankan Desktop untuk mengisi konten desktop (berjalan baik di kedua kasus)
    Desktop(slidesData);
});
