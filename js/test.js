const title = document.getElementById('title')
const judul = document.getElementById("judul")
const header = document.getElementById("header")
const params = new URLSearchParams(window.location.search)

judul.innerHTML = params.get("test")
title.innerHTML = params.get("test").trim().split(" ")[0] + ` - SIA USP`;

header.innerHTML = `
    <a href="home.html?${params.get('home_nim')}&${params.get('home_password')}" class="logo-placeholder"></a>
    <h1>KOLOM BERITA</h1>
    <form action="test.html" method="get">
        <input type="hidden" name="test" value="Notifikasi">
        <button class="btn background-red-black">
            <i class="fas fa-bell header-icon"></i>
        </button>
    </from>
`;