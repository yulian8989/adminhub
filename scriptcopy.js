console.log("Script loaded!");

// Dapatkan semua elemen <a> dari sidebar
var sidebarLinks = document.querySelectorAll(".side-menu a");

// Fungsi untuk menghapus kelas 'active' dari semua link
function removeActiveClass() {
  sidebarLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
  });
}

// Tambahkan event listener untuk setiap link
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Hapus kelas 'active' dari semua link
    removeActiveClass();

    // Tambahkan kelas 'active' ke link yang diklik
    event.target.parentElement.classList.add("active");
  });
});

// Cek URL saat ini dan tambahkan kelas 'active' ke link yang sesuai
window.addEventListener("load", (event) => {
  let currentURL = window.location.href;
  sidebarLinks.forEach((link) => {
    if (link.href === currentURL) {
      removeActiveClass();
      link.parentElement.classList.add("active");
    }
  });
});
const allSideMenu = document.querySelectorAll(".sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

const searchButton = document.querySelector(
  ".content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");

searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace("bx-x", "bx-search");
  searchForm.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

const switchMode = document.getElementById("switch-mode");

switchMode.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

function previewImages(event) {
  var previewContainer = document.getElementById("previewContainer");
  previewContainer.innerHTML = ""; // Kosongkan kontainer preview

  for (var i = 0; i < event.target.files.length; i++) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = document.createElement("img");
      img.src = e.target.result;

      img.style.maxHeight = "100px";
      img.style.margin = "10px";
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(event.target.files[i]);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Dapatkan elemen tombol yang membuka modal
  var btn = document.getElementById("deleteBtn");

  // Saat tombol diklik, tampilkan alert
  btn.onclick = function () {
    var confirmDelete = confirm("Apakah Anda yakin ingin menghapus item ini?");
    if (confirmDelete) {
      // Hapus item
    }
  };
});

function changeImage(element) {
  document.getElementById("main-image").src = element.src;
}

function confirmBooking() {
  var tanggal_mulai = document.getElementById("tanggal_mulai").value;
  var tanggal_selesai = document.getElementById("tanggal_selesai").value;
  var jam_mulai = document.getElementById("jam_mulai").value;
  var jam_selesai = document.getElementById("jam_selesai").value;

  if (
    tanggal_mulai === "" ||
    tanggal_selesai === "" ||
    jam_mulai === "" ||
    jam_selesai === ""
  ) {
    alert("Harap isi semua bidang form");
    return false; // Mencegah formulir disubmit
  } else if (confirm("Apakah anda yakin ingin meminjam ruangan ini?")) {
    window.location.href = "success.html"; // Ganti dengan URL halaman sukses Anda
    return false; // Mencegah formulir disubmit
  }
}
