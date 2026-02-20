// Ambil elemen HTML
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

// Fungsi untuk toggle menu
function toggleMenu() {
    menuList.classList.toggle("hidden");
}

// Event listener untuk menu icon
menuIcon.addEventListener("click", toggleMenu);

const btnOrgisme = document.getElementById("btn-nav-mpk");
btnOrgisme.addEventListener("click", toggleMenu);

// Event listener untuk tombol Home
const btnHome = document.getElementById("btn-nav-home");
btnHome.addEventListener("click", toggleMenu);

// Event listener untuk tombol Bidang
const btnBidang = document.getElementById("btn-nav-bidang");
btnBidang.addEventListener("click", toggleMenu);

// Event listener untuk navigasi ke halaman lain
const navigateButton = document.getElementById("navigateButton");

/* SLIDER */

const sliderItems = document.querySelectorAll('.illustration'); // Pastikan kelasnya benar

let slideractive = 0; // Mulai dari gambar pertama

if (sliderItems.length > 0) {
    sliderItems.forEach((slider, index) => {
        slider.setAttribute("data-show", index === slideractive ? "show" : "hidden");
    });

    setInterval(() => {
        sliderItems.forEach((slider, index) => {
            slider.setAttribute("data-show", index === slideractive ? "show" : "hidden");
        });

        slideractive = (slideractive + 1) % sliderItems.length; // Loop kembali ke awal
    }, 1500);
}

// Second Slider 

function setupSlider(sliderClass) {
    const sliderItems = document.querySelectorAll(sliderClass); // Ambil elemen slider berdasarkan kelas
    let slideractive = 0; // Mulai dari gambar pertama

    if (sliderItems.length > 0) {
        sliderItems.forEach((slider, index) => {
            slider.setAttribute("data-show", index === slideractive ? "show" : "hidden");
        });

        setInterval(() => {
            sliderItems.forEach((slider, index) => {
                slider.setAttribute("data-show", index === slideractive ? "show" : "hidden");
            });

            slideractive = (slideractive + 1) % sliderItems.length; // Loop kembali ke awal
        }, 1500);
    }
}

// Setup untuk setiap slider
setupSlider('.illustration'); // Slider pertama
setupSlider('.illustration-second'); // Slider kedua
setupSlider('.illustration-third'); // Slider ketiga
