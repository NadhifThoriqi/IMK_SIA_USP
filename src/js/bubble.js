document.addEventListener('click', function(event) {
    // 1. Dapatkan posisi klik
    const clickX = event.pageX; // Koordinat horizontal
    const clickY = event.pageY; // Koordinat vertikal

    // 2. Buat elemen gelembung baru
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // 3. Atur posisi gelembung
    // Posisikan elemen baru ke posisi kursor yang diklik
    bubble.style.left = `${clickX}px`;
    bubble.style.top = `${clickY}px`;

    // 4. Tambahkan gelembung ke body
    document.body.appendChild(bubble);

    // 5. Memicu animasi CSS
    // Kita harus mengatur animasi setelah elemen dimasukkan
    bubble.style.animation = 'expand-bubble 0.8s ease-out forwards';

    // 6. Hapus gelembung setelah animasi selesai
    // Kita menggunakan setTimeout untuk menghapus elemen setelah durasi animasi (0.8 detik)
    const animationDuration = 800; // 800 milidetik = 0.8 detik (sesuai dengan CSS)

    setTimeout(() => {
        bubble.remove(); // Menghapus elemen dari DOM
    }, animationDuration);
});