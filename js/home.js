const header = document.getElementById("header")
const profile = document.getElementById("profile")
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
        <button class="btn">
            <i class="fas fa-bell header-icon"></i>
        </button>
    </from>
`