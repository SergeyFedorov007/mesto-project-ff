// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard({ name, link }, onDeleteCard) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  const deleteButtonElement = cardElement.querySelector(".card__delete-button");

  titleElement.textContent = name;
  imageElement.setAttribute("src", link);
  imageElement.setAttribute("alt", name);

  deleteButtonElement.addEventListener("click", () =>
    onDeleteCard(cardElement)
  );

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
function initializeCards(cards) {
  cards.map((cardData) => {
    const cardElement = createCard(cardData, deleteCard);
    cardContainer.append(cardElement);
  });
}

initializeCards(initialCards);
