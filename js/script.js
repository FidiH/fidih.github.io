// hamburger menu di clik
document.body.addEventListener("click", function (element) {
  if (
    element.target.id == "btn-menu" ||
    element.target.classList.contains("menu")
  ) {
    document.querySelector(".menu").classList.add("geser");
  } else {
    document.querySelector(".menu").classList.remove("geser");
  }
});

// header saat di scroll
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 1) {
    document.querySelector("header").classList.add("efekHeader");
  } else {
    document.querySelector("header").classList.remove("efekHeader");
  }
});

// efek ketik
const boxKetik = document.querySelector("#ketik");
const teks = ["Ini Fidi", "Selamat Datang", "Apa kabar"];
let urutan = 0;
let indeks = 0;
let menghapus = false;

function ketik() {
  const teksSaatIni = teks[urutan];

  const tampil = teksSaatIni.slice(0, indeks);

  boxKetik.textContent = tampil;

  if (!menghapus) {
    if (indeks < teksSaatIni.length) {
      indeks++;
    } else {
      menghapus = true;
      setTimeout(ketik, 3000);
      return;
    }
  } else {
    if (indeks > 0) {
      indeks--;
    } else {
      menghapus = false;
      urutan = (urutan + 1) % teks.length;
    }
  }
  setTimeout(ketik, menghapus ? 50 : 100);
}

ketik();

// aksen warna
colorAksen.addEventListener("change", () => {
  document.documentElement.style.setProperty("--aksen", colorAksen.value);
});
