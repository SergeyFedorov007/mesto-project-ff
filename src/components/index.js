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

// @todo: DOM узлы
const popups = Array.from(document.querySelectorAll(".popup"));

const placesList = document.querySelector(".places__list");

const popupCard = document.querySelector(".popup_type_new-card");
const popupProfile = document.querySelector(".popup_type_edit");
const popupAvatar = document.querySelector(".popup_type_avatar");
const popupConfirm = document.querySelector(".popup_type_confirm");
const popupFormEditProfile = document.forms["edit-profile"];
const popupFormEditAvatar = document.forms["edit-avatar"];
const popupFormAddCard = document.forms["new-place"];
const popupFormImageView = document.querySelector(".popup_type_image");
const popupImage = popupFormImageView.querySelector(".popup__image");
const popupCaption = popupFormImageView.querySelector(".popup__caption");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-button");
const buttonEditAvatar = document.querySelector(".profile__image");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
const buttonOpenPopupCard = document.querySelector(".profile__add-button");
const buttonConfirmAccept = popupConfirm.querySelector(
  ".confirm_accept__button"
);
const renderPopupFormEditProfile =
  popupFormEditProfile.querySelector(".popup__button");
const renderPopupFormEditAvatar =
  popupFormEditAvatar.querySelector(".popup__button");
const renderPopupCard = popupCard.querySelector(".popup__button");
const renderPopupFormAddCard = popupFormAddCard.querySelector(".popup__button");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let userId;

const renderLoading = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

const confirmDeleteCard = (evt, cardId) => {
  openModal(popupConfirm);
  popupConfirm.dataset.cardId = cardId;
};

const handleConfirmDeleteCard = async (evt) => {
  evt.preventDefault();
  renderLoading(false, renderPopupFormEditProfile);
  deleteCard(popupConfirm.dataset.cardId)
    .then((result) => {
      console.log(result);
      const card = document.querySelector(
        `[data-card-id="${popupConfirm.dataset.cardId}"]`
      );
      card.remove();
      initialize();
      closeModal(popupConfirm);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, renderPopupFormEditProfile);
    });
};
buttonConfirmAccept.addEventListener("click", handleConfirmDeleteCard);

const handleFormEditSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, renderPopupFormEditProfile);
  updateUser({
    name: popupFormEditProfile.name.value,
    about: popupFormEditProfile.description.value,
  })
    .then((userInfo) => {
      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      profileImage.style.backgroundImage = `url(${userInfo.avatar})`;
      closeModal(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, renderPopupFormEditProfile);
    });
  closeModal(popupProfile);
};
popupFormEditProfile.addEventListener("submit", handleFormEditSubmit);

buttonOpenPopupProfile.addEventListener("click", function () {
  clearValidation(popupFormEditProfile, validationConfig);
  popupFormEditProfile.elements.name.value = profileName.textContent;
  popupFormEditProfile.elements.description.value =
    profileDescription.textContent;
  openModal(popupProfile);
});

const handleAvatarFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, renderPopupFormEditAvatar);
  updateUserAvatar(popupFormEditAvatar.link.value)
    .then((userInfo) => {
      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      profileImage.style.backgroundImage = `url(${userInfo.avatar})`;
      closeModal(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, renderPopupFormEditAvatar);
    });
};
popupFormEditAvatar.addEventListener("submit", handleAvatarFormSubmit);

buttonEditAvatar.addEventListener("click", (evt) => {
  clearValidation(popupFormEditAvatar, validationConfig);
  popupFormEditAvatar.reset();
  openModal(popupAvatar);
});

const handleAddCardFormSubmit = async (evt) => {
  evt.preventDefault();
  renderLoading(true, renderPopupCard);

  const name = popupFormAddCard.elements.name.value;
  const link = popupFormAddCard.elements.link.value;
  addCard({ name, link })
    .then((card) => {
      const newCard = createCard(
        card,
        userId,
        confirmDeleteCard,
        likeCard,
        openPopupImage
      );
      placesList.prepend(newCard);
      closeModal(popupCard);
    })
    .catch((err) => {
      console.log(err);
    })
    // .finally(() => {
    //   renderLoading(false, renderPopupFormAddCard);
    // });
};
popupFormAddCard.addEventListener("submit", handleAddCardFormSubmit);

buttonOpenPopupCard.addEventListener("click", function () {
  clearValidation(popupFormAddCard, validationConfig);
  popupFormAddCard.reset();
  openModal(popupCard);
});

function openPopupImage(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openModal(popupFormImageView);
}

popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closeModal(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});

function initialize() {
  placesList.innerHTML = "";
  Promise.all([getInitialUser(), getInitialCards()])
    .then((data) => {
      const userInfo = data[0];
      userId = userInfo._id;
      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      profileImage.style.backgroundImage = `url(${userInfo.avatar})`;

      const initialCards = data[1];

      initialCards.forEach((card) => {
        const newCard = createCard(
          card,
          userId,
          confirmDeleteCard,
          likeCard,
          openPopupImage
        );
        placesList.append(newCard);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
initialize();
enableValidation(validationConfig);
