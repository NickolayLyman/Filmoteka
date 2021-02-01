(()=>{
const btns = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector(".team-modal-close-button"),
    modal: document.querySelector(".backdrop"),
  };

  btns.openModalBtn.addEventListener("click", openModal);
  btns.closeModalBtn.addEventListener("click", closeModal);

    function openModal() {
        btns.modal.classList.remove("is-hidden")
    };
  function closeModal() {
    btns.modal.classList.add("is-hidden");
  }
    
})();
