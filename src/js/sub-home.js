const param = new URLSearchParams(window.location.search)
const copyright = document.querySelector("div#copyright")

copyright.innerHTML = `
    <a href="kelompok.html?home_nim=nama_nim=${param.get("nama_nim")}&home_password=password=${param.get("password")}" id="copyright-footer">
        &copy; 2025 Tugas Kelompok IMK-SIA-USP
    </a>
`

document.querySelector("header#header-group").innerHTML += `
    <div class="top">
        <a href="home.html?nama_nim=${param.get("nama_nim")}&password=${param.get("password")}" class="logo-placeholder"></a>
        <form action="test.html" method="get">
            <input type="hidden" name="test" value="Notifikasi">
            <input type="hidden" name="home_nim" value="nama_nim=${param.get("nama_nim")}">
            <input type="hidden" name="home_password" value="password=${param.get("password")}">
            <button class="btn background-red-black">
                <i class="fas fa-bell header-icon"></i>
            </button>
        </from>
    </div>
`;
// <h1>HOME</h1>