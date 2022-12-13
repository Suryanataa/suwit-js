// fungsi pilihan komputer secara random
function pilihanCom() {
	var com = Math.random();

	if (com < 0.2) {
		return "semut";
	} else if (com >= 0.21 && com < 0.3) {
		return "orang";
	} else if (com >= 0.31 && com < 0.4) {
		return "gajah";
	} else if (com >= 0.41 && com < 0.5) {
		return "semut";
	} else if (com >= 0.51 && com < 0.6) {
		return "orang";
	} else {
		return "gajah";
	}
}

// fungsi untuk menentukan hasil
function Gethasil(com, p) {
	if (p == com) {
		return "SERI!";
	} else if (p == "semut") {
		return com == "orang" ? "KALAH!" : "MENANG!";
	} else if (p == "orang") {
		return com == "gajah" ? "KALAH!" : "MENANG!";
	} else if (p == "gajah") {
		return com == "semut" ? "KALAH!" : "MENANG!";
	} else {
		return "Memasukan pilihan yang salah!";
	}
}

function putar() {
	const gambar = document.querySelector(".img-komputer");
	const sGambar = ["semut", "orang", "gajah"];
	let i = 0;
	const waktu = new Date().getTime();

	setInterval(() => {
		if (new Date().getTime() - waktu > 1000) {
			clearInterval;
			return;
		}
		gambar.setAttribute("src", `./img/${sGambar[i++]}.png`);
		if (i == sGambar.length) {
			i = 0;
		}
	}, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (e) {
	e.addEventListener("click", () => {
		const info = document.querySelector(".info");
		info.innerHTML = "";
		const com = pilihanCom();
		const player = e.className;
		const hasil = Gethasil(com, player);

		putar();

		setTimeout(() => {
			const gCom = document.querySelector(".img-komputer");
			gCom.setAttribute("src", `./img/${com}.png`);

			info.innerHTML = hasil;
		}, 1000);
	});
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", () => {
// 	const com = pilihanCom();
// 	const player = pGajah.className;
// 	const hasil = Gethasil(com, player);

// 	const gCom = document.querySelector(".img-komputer");
// 	gCom.setAttribute("src", `./img/${com}.png`);

// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", () => {
// 	const com = pilihanCom();
// 	const player = pOrang.className;
// 	const hasil = Gethasil(com, player);

// 	const gCom = document.querySelector(".img-komputer");
// 	gCom.setAttribute("src", `./img/${com}.png`);

// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", () => {
// 	const com = pilihanCom();
// 	const player = pSemut.className;
// 	const hasil = Gethasil(com, player);

// 	const gCom = document.querySelector(".img-komputer");
// 	gCom.setAttribute("src", `./img/${com}.png`);

// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;
// });
