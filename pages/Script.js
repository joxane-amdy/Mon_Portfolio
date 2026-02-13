// Sélection des éléments
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// État du menu (ouvert/fermé)
let menuOpen = false;

// Écoute du clic sur le bouton
menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen; // inverse l'état
  if (menuOpen) {
    mobileMenu.classList.remove("hidden"); // affiche le menu
    mobileMenu.classList.add("flex");      // flex-col pour les items
  } else {
    mobileMenu.classList.add("hidden");    // cache le menu
    mobileMenu.classList.remove("flex");
  }
});

// Optionnel : fermer le menu si on clique en dehors
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    menuOpen = false;
  }
});


  function openModal(button) {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    document.getElementById("modalTitle").innerText = button.dataset.title;
    document.getElementById("modalSubtitle").innerText = button.dataset.subtitle;
    document.getElementById("modalDate").innerText = button.dataset.date;
    document.getElementById("modalDescription").innerText = button.dataset.description;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    setTimeout(() => {
      content.classList.remove("scale-95", "opacity-0");
      content.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    content.classList.remove("scale-100", "opacity-100");
    content.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 300);
  }
