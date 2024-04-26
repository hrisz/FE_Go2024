import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://ws-haris2024-22b2408f2f8c.herokuapp.com/presensi";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
    console.log(results);
}