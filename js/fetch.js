import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://ws-haris2024-22b2408f2f8c.herokuapp.com/presensi";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
    results.foreach(isiRow);
}
function isiRow(value){
    let content = 
    isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}