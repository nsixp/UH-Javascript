// SOAL 1
function gantiWarna() {
    var square = document.querySelector('.square');
    square.style.backgroundColor = 'blue';
}

// SOAL 4
function kelilingTrapesium() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var perimeter = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
    document.getElementById("result").innerHTML = "Keliling trapesium sama kaki: " + perimeter;
}

// SOAL 5
function validasiForm() {
    var nama = document.forms["form"]["nama"].value;
    var nik = document.forms["form"]["nik"].value;
    var email = document.forms["form"]["email"].value;
    var telepon = document.forms["form"]["telepon"].value;

    if (nama == "" || nik == "" || email == "" || telepon == "") {
        alert("Anda harus mengisi data dengan lengkap!");
        return false;
    } else {
        alert("Terima kasih sudah melakukan pendaftaran!");
        return true;
    }
}

// SOAL 6
function cekUmur() {
    var age = document.getElementById("age").value;

    if (age == "balita") {
        alert("Maaf, Anda tidak boleh nonton bioskop.");
    } else if (age == "remaja") {
        alert("Selamat, Anda boleh nonton bioskop.");
    } else {
        alert("Maaf, usia Anda tidak memenuhi syarat untuk nonton bioskop.");
    }
}

// SOAL 7
function hitungTotal() {
    var harga_makanan = 10000;
    var harga_minuman = 5000;
    var jumlah_makanan = document.getElementById("jumlah_makanan").value;
    var jumlah_minuman = document.getElementById("jumlah_minuman").value;
      var total_harga = (harga_makanan * jumlah_makanan) + (harga_minuman * jumlah_minuman);
    document.getElementById("total_harga").innerHTML = "Total Harga: " + total_harga;
}

// SOAL 8
function cekTahun() {
    var year = document.getElementById("year").value;

    if (year == 4) {
        alert("Tahun " + year + " merupakan tahun kabisat");
    } else if (year % 4 == 0) {
        if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert("Tahun " + year + " merupakan tahun kabisat");
        } else {
            alert("Tahun " + year + " bukan tahun kabisat");
        }
        } else {
        alert("Tahun " + year + " merupakan tahun kabisat");
        }
    } else {
        alert("Tahun " + year + " bukan tahun kabisat");
    }
}


// SOAL 10
function hitungKembalian() {
    var harga_barang = document.getElementById("harga_barang").value;
    var uang_dibayarkan = document.getElementById("uang_dibayarkan").value;
    var kembalian = uang_dibayarkan - harga_barang;
    document.getElementById("kembalian").innerHTML = "Kembalian: " + kembalian;
}