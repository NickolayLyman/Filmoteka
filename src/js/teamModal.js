(() => {
  const btns = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector(".team-modal-close-button"),
    modal: document.querySelector(".backdrop"),
  };

  btns.openModalBtn.addEventListener("click", openModal);

  function openModal() {
    btns.modal.classList.remove("is-hidden");
    window.addEventListener("keydown", onPressEscape);
    btns.closeModalBtn.addEventListener("click", closeModal);
    btns.modal.addEventListener("click", closeModal);
  };
  function closeModal() {
    btns.modal.classList.add("is-hidden");
    window.removeEventListener('keydown', onPressEscape);
    btns.closeModalBtn.removeEventListener("click", closeModal);
    btns.modal.removeEventListener("click", closeModal);
  }
  function onPressEscape(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }
})();
