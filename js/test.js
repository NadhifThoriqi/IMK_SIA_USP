const title = document.getElementById('title')
const judul = document.getElementById("judul")
const params = new URLSearchParams(window.location.search)

judul.innerHTML = params.get("test")
title.innerHTML = params.get("test").trim().split(" ")[0] + ` - SIA USP`;