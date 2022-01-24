let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
	var tanya = true;
	while (tanya) {
		// menangkap pilihan player
		var p = prompt("Pilih : Semut, Orang, Gajah");

		// menangkap pilihan komputer
		// membangkitkan pilihan random
		var com = Math.random();
		console.log(com);

		if (com < 0.34) {
			com = "semut";
		} else if (com >= 0.34 && com < 0.67) {
			com = "orang";
		} else {
			com = "gajah";
		}

		var hasil = null;
		// menentukan rules
		if (p == com) {
			hasil = "SERI!";
		} else if (p == "semut") {
			hasil = com == "orang" ? "KALAH!" : "MENANG!";
		} else if (p == "orang") {
			hasil = com == "gajah" ? "KALAH!" : "MENANG!";
		} else if (p == "gajah") {
			hasil = com == "semut" ? "KALAH!" : "MENANG!";
		} else {
			hasil = "Memasukan pilihan yang salah!";
		}
		// menampilkan hasil
		alert("Kamu Memilih: " + p + "\nKomputer Memilih: " + com + "\nHasilnya: Kamu " + hasil);

		var tanya = confirm("Apa Mau Main Lagi?");
	}

	alert("TerimaKasih Sudah Bermain!");
});
