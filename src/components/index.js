import "../pages/index.css";
import { createCard, likeCard } from "./card.js";
import { openModal, closeModal } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialUser,
  updateUser,
  updateUserAvatar,
  getInitialCards,
  addCard,
  deleteCard,
} from "./api.js";

// DOM элементы
const elements = {
  popups: Array.from(document.querySelectorAll(".popup")),
  placesList: document.querySelector(".places__list"),
  popupCard: document.querySelector(".popup_type_new-card"),
  popupProfile: document.querySelector(".popup_type_edit"),
  popupAvatar: document.querySelector(".popup_type_avatar"),
  popupConfirm: document.querySelector(".popup_type_confirm"),
  popupFormEditProfile: document.forms["edit-profile"],
  popupFormEditAvatar: document.forms["edit-avatar"],
  popupFormAddCard: document.forms["new-place"],
  popupFormImageView: document.querySelector(".popup_type_image"),
  popupImage: document.querySelector(".popup__image"),
  popupCaption: document.querySelector(".popup__caption"),
  buttonOpenPopupProfile: document.querySelector(".profile__edit-button"),
  buttonEditAvatar: document.querySelector(".profile__image"),
  profileName: document.querySelector(".profile__title"),
  profileDescription: document.querySelector(".profile__description"),
  profileImage: document.querySelector(".profile__image"),
  buttonOpenPopupCard: document.querySelector(".profile__add-button"),
  buttonConfirmAccept: document.querySelector(
    ".popup_type_confirm .confirm_accept__button"
  ),
};

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let userId;

// Функция для отображения статуса загрузки
const renderLoading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

// Функция подтверждения удаления карточки
const confirmDeleteCard = (evt, cardId) => {
  openModal(elements.popupConfirm);
  elements.popupConfirm.dataset.cardId = cardId;
};

// Обработчик подтверждения удаления карточки
const handleConfirmDeleteCard = async (evt) => {
  try {
    await deleteCard(elements.popupConfirm.dataset.cardId);
    const card = document.querySelector(
      `[data-card-id="${elements.popupConfirm.dataset.cardId}"]`
    );
    card.remove();
    closeModal(elements.popupConfirm);
  } catch (err) {
    console.error(err);
  }
};
elements.buttonConfirmAccept.addEventListener("click", handleConfirmDeleteCard);

// Обработчик отправки формы редактирования профиля
const handleFormEditSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(
    true,
    elements.popupFormEditProfile.querySelector(".popup__button")
  );
  try {
    const userInfo = await updateUser({
      name: elements.popupFormEditProfile.name.value,
      about: elements.popupFormEditProfile.description.value,
    });
    updateProfileInfo(userInfo);
    closeModal(elements.popupProfile);
  } catch (err) {
    console.error(err);
  } finally {
    renderLoading(
      false,
      elements.popupFormEditProfile.querySelector(".popup__button")
    );
  }
};
elements.popupFormEditProfile.addEventListener("submit", handleFormEditSubmit);

// Обработчик нажатия на кнопку редактирования профиля
elements.buttonOpenPopupProfile.addEventListener("click", function () {
  clearValidation(elements.popupFormEditProfile, validationConfig);
  elements.popupFormEditProfile.elements.name.value =
    elements.profileName.textContent;
  elements.popupFormEditProfile.elements.description.value =
    elements.profileDescription.textContent;
  openModal(elements.popupProfile);
});

// Обработчик отправки формы обновления аватара
const handleAvatarFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(
    true,
    elements.popupFormEditAvatar.querySelector(".popup__button")
  );
  try {
    const userInfo = await updateUserAvatar(
      elements.popupFormEditAvatar.link.value
    );
    updateProfileInfo(userInfo);
    closeModal(elements.popupAvatar);
  } catch (err) {
    console.error(err);
  } finally {
    renderLoading(
      false,
      elements.popupFormEditAvatar.querySelector(".popup__button")
    );
  }
};
elements.popupFormEditAvatar.addEventListener("submit", handleAvatarFormSubmit);

// Обработчик нажатия на кнопку редактирования аватара
elements.buttonEditAvatar.addEventListener("click", (evt) => {
  clearValidation(elements.popupFormEditAvatar, validationConfig);
  elements.popupFormEditAvatar.reset();
  openModal(elements.popupAvatar);
});

// Обработчик отправки формы добавления карточки
const handleAddCardFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, elements.popupCard.querySelector(".popup__button"));
  try {
    const { name, link } = elements.popupFormAddCard.elements;
    const card = await addCard({ name: name.value, link: link.value });
    const newCard = createCard(
      card,
      userId,
      confirmDeleteCard,
      likeCard,
      openPopupImage
    );
    elements.placesList.append(newCard);
    closeModal(elements.popupCard);
  } catch (err) {
    console.error(err);
  } finally {
    renderLoading(
      false,
      elements.popupFormAddCard.querySelector(".popup__button")
    );
  }
};
elements.popupFormAddCard.addEventListener("submit", handleAddCardFormSubmit);

// Обработчик нажатия на кнопку добавления карточки
elements.buttonOpenPopupCard.addEventListener("click", function () {
  clearValidation(elements.popupFormAddCard, validationConfig);
  elements.popupFormAddCard.reset();
  openModal(elements.popupCard);
});

// Функция открытия изображения в попапе
function openPopupImage(item) {
  elements.popupImage.src = item.link;
  elements.popupImage.alt = item.name;
  elements.popupCaption.textContent = item.name;
  openModal(elements.popupFormImageView);
}

// Обработчики для закрытия попапов
elements.popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closeModal(popup);
    }
  });
});

// Загрузка данных пользователя и карточек
Promise.all([getInitialUser(), getInitialCards()])
  .then(([userInfo, initialCards]) => {
    userId = userInfo._id;
    updateProfileInfo(userInfo);
    initialCards.forEach((card) => {
      const newCard = createCard(
        card,
        userId,
        confirmDeleteCard,
        likeCard,
        openPopupImage
      );
      elements.placesList.append(newCard);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// Функция обновления информации о пользователе
function updateProfileInfo(userInfo) {
  elements.profileName.textContent = userInfo.name;
  elements.profileDescription.textContent = userInfo.about;
  elements.profileImage.style.backgroundImage = `url(${userInfo.avatar})`;
}

// Включение валидации форм
enableValidation(validationConfig);
