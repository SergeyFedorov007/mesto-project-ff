import "../pages/index.css";
import { createCard, deleteCard, likeCard } from "./card.js";
import { initialCards } from "./cards.js";
import { handleOverlayClose } from "./modal.js";
import { openModal, closeModal } from "./modal.js";

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

const popups = Array.from(document.querySelectorAll(".popup"));
const popupFormImageView = document.querySelector(".popup_type_image");
const popupImage = popupFormImageView.querySelector(".popup__image");
const popupCard = document.querySelector(".popup_type_new-card");
const popupProfile = document.querySelector(".popup_type_edit");
const popupCaption = popupFormImageView.querySelector(".popup__caption");

const popupFormEditProfile = document.querySelector("#popup-form-edit");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonClosePopupProfile = document.querySelector("#close-button-profile");

const nameInput = popupFormEditProfile.querySelector(".popup__input_type_name");
const descriptionInput = popupFormEditProfile.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupFormAddCard = document.querySelector("#popup-form-add");
const buttonOpenPopupCard = document.querySelector(".profile__add-button");
const buttonClosePopupCard = document.querySelector("#close-button-card");

const titleInput = document.querySelector(".popup__input_type_card-name");
const buttonClosePopupImage = document.querySelector("#close-button-image");
const linkInput = document.querySelector(".popup__input_type_url");

const handleFormEditSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(popupProfile);
};
popupFormEditProfile.addEventListener("submit", handleFormEditSubmit);

//@todo: Кнопки в модальным окне
buttonOpenPopupProfile.addEventListener("click", function () {
  openModal(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

buttonClosePopupProfile.addEventListener("click", function () {
  closeModal(popupProfile);
});

buttonOpenPopupCard.addEventListener("click", function () {
  openModal(popupCard);
});
buttonClosePopupCard.addEventListener("click", function () {
  closeModal(popupCard);
});
buttonClosePopupImage.addEventListener("click", function () {
  closeModal(popupFormImageView);
});

// @todo: Добавление карточки
const addCard = (link, name) => {
  const card = createCard(
    { link: link, name: name },
    deleteCard,
    likeCard,
    openPopupImage
  );
  placesList.prepend(card);
};

// @todo: Обработка отправки формы добавления карточки
const handleFormAddSubmit = (evt) => {
  evt.preventDefault();
  addCard(linkInput.value, titleInput.value);
  popupFormAddCard.reset();
  closeModal(popupCard);
};

initialCards.forEach((item) => {
  const newCard = createCard(item, deleteCard, likeCard, openPopupImage);
  placesList.append(newCard);
});

// @todo: Открытие модального окна изображения
function openPopupImage(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;

  openModal(popupFormImageView);
}

popupFormAddCard.addEventListener("submit", handleFormAddSubmit);

// @todo: Вешаем обработчик на все модальные окна для закрытия при клике вне окна
popups.forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClose);
});
