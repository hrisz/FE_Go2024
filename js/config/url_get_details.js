//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-haris2024-22b2408f2f8c.herokuapp.com/presensi/" + presensiId;