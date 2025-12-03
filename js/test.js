const judul = document.getElementById("judul")
const params = new URLSearchParams(window.location.search)

judul.innerHTML = params.get("test")