// @todo: Открытие модального окна
function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

// @todo: Закрытие модального окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}
// @todo: Обработчик закрытия модального окна по нажатию клавиши Esc
function handleEscClose(evt) {
  if (evt.key === "Escape" || null) {
    const popupOpened = document.querySelector(".popup_is-opened");
    closeModal(popupOpened);
  }
}

export { openModal, closeModal };
