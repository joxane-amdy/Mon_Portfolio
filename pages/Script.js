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
