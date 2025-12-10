/* ===================================================
   ANIMASI FADE + SLIDE UNTUK KRS
   =================================================== */
function toggleSemester(selectedSemester) {
    const tables = document.querySelectorAll('.course-table');

    // Hilangkan semua tabel (fade-out)
    tables.forEach(table => {
        table.classList.remove('is-active');
    });

    // Tampilkan yang dipilih secara smooth
    setTimeout(() => {
        const target = document.getElementById(`table-semester-${selectedSemester}`);
        if (target) target.classList.add('is-active');
    }, 50);
}

/* ===================================================
   ANIMASI FADE + SLIDE UNTUK KHS
   =================================================== */
function toggleKhsSemester(selectedSemester) {
    const tables = document.querySelectorAll('.score-table');

    tables.forEach(table => {
        table.classList.remove('is-active');
    });

    setTimeout(() => {
        const target = document.getElementById(`khs-table-semester-${selectedSemester}`);
        if (target) target.classList.add('is-active');
    }, 50);
}
