document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // Klik hamburger
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // biar tidak dihitung klik luar

    if (navMenu.classList.contains("show")) {
      // Tutup menu
      navMenu.classList.remove("show");
      navMenu.classList.add("hide");
      hamburger.classList.remove("open"); // reset ikon

      setTimeout(() => {
        navMenu.classList.remove("hide");
        navMenu.style.display = "none";
      }, 300);
    } else {
      // Buka menu
      navMenu.style.display = "flex";
      navMenu.classList.remove("hide");
      navMenu.classList.add("show");
      hamburger.classList.add("open"); // ubah ikon jadi ✖
    }
  });

  // Tutup menu kalau klik di luar
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        navMenu.classList.add("hide");
        hamburger.classList.remove("open"); // reset ikon
        setTimeout(() => {
          navMenu.classList.remove("hide");
          navMenu.style.display = "none";
        }, 300);
      }
    }
  });

  // Tutup menu kalau link diklik
  const links = navMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      navMenu.classList.add("hide");
      hamburger.classList.remove("open"); // reset ikon
      setTimeout(() => {
        navMenu.classList.remove("hide");
        navMenu.style.display = "none";
      }, 300);
    });
  });
});

//efek transisi halaman//
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Efek masuk (fade in)//
  body.classList.add("fade-out");
  setTimeout(() => {
    body.classList.remove("fade-out");
    body.classList.add("fade-in");
  }, 30);

  // Efek keluar (fade out) sebelum pindah halaman//
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        if (href && !href.startsWith("#")) {
          e.preventDefault();
          body.classList.remove("fade-in");
          body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = href;
          }, 100); // sesuai durasi di CSS
        }
      });
    }
  });
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
});



document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const btn = drop.querySelector(".dropbtn");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      drop.classList.toggle("active");
    });
  });
});

