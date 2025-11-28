document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu"); 

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("visible");
    });
    mobileMenu.querySelectorAll("ul > li > a").forEach((link) => {
      if (link.parentElement.classList.contains("nav_more")) return;
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("visible");
      });
    });
  }
  const basketButtons = document.querySelectorAll(".modal-footer .btn-primary");

  basketButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const modalElement = button.closest(".modal");
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    });
  });
});