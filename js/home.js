const header = document.getElementById("header")
const profile = document.getElementById("profile")
const params = new URLSearchParams(window.location.search)

if (parseFloat(params.get("nama_nim")) != NaN) {
    var profil = `
        <p>Nama                  : Mahasiswa</p>
        <p>Prodi           &nbsp;: Teknik Informatika</p>
        <p>NIM &nbsp;&nbsp;&nbsp;: ${params.get("nama_nim")}</p>
    `
} else {
    var profil = `
        <p>Nama                  : ${params.get("nama_nim")}</p>
        <p>Prodi           &nbsp;: Teknik Informatika</p>
        <p>NIM &nbsp;&nbsp;&nbsp;: 2025120100</p>
    ` 
}
profile.innerHTML = profil
header.innerHTML = `
    <a href="home.html?nama_nim=${params.get("nama_nim")}&password=" class="logo-placeholder"></a>
    <h1>HOME</h1>
    <i class="fas fa-bell header-icon"></i>
`