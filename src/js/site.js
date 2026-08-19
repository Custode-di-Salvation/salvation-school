// Salvation High — script minimo: menu mobile e dropdown al tocco.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Su schermi piccoli i sottomenu si aprono al tocco della voce padre
  document.querySelectorAll(".has-dropdown > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 900) {
        var parent = link.parentElement;
        var alreadyOpen = parent.classList.contains("open-dropdown");
        document.querySelectorAll(".has-dropdown.open-dropdown").forEach(function (el) {
          el.classList.remove("open-dropdown");
        });
        if (!alreadyOpen) {
          e.preventDefault();
          parent.classList.add("open-dropdown");
        }
      }
    });
  });

  // Rotazione automatica delle foto nell'hero della homepage
  var slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5500);
  }
});
