export let urlPOST = "https://ws-haris2024-22b2408f2f8c.herokuapp.com/insert"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.reload(); //reload halaman setelah klik ok pada alert
}