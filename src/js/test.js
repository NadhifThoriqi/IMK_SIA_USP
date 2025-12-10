const title = document.getElementById('title')
const judul = document.getElementById("judul")
const header = document.getElementById("header-group")
const params = new URLSearchParams(window.location.search)

judul.innerHTML = params.get("test")
var text = params.get("test").trim().split(" ")[0];
title.innerHTML = text + ` - SIA USP`;

header.innerHTML += `
    <h1>${text}</h1>
`;

// if (params.get('home_nim')) {
//         <form action="test.html" method="get">
//             <input type="hidden" name="test" value="Notifikasi">
//             <button class="btn background-red-black">
//                 <i class="fas fa-bell header-icon"></i>
//             </button>
// } else {
//     header.innerHTML = `
//         <a href="berita.html" class="logo-placeholder"></a>
//         <h1>BERITA</h1>
//         <form action="test.html" method="get">
//             <input type="hidden" name="test" value="Notifikasi">
//             <button class="btn background-red-black">
//                 <i class="fas fa-bell header-icon"></i>
//             </button>
//         </from>
//     `;
// }