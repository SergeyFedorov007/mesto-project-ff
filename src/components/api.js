const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-magistr-2/",
  headers: {
    authorization: "912c0b5f-282d-4e99-a606-8e5b6601427a",
    "Content-Type": "application/json",
  },
};

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const getInitialUser = async () => {
  return fetch(config.baseUrl + "/users/me", {
    headers: config.headers,
  }).then((res) => getResponse(res));
};

const updateUser = async (user) => {
  return fetch(config.baseUrl + "/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: user.name,
      about: user.about,
    }),
  }).then((res) => getResponse(res));
};

const updateUserAvatar = async (link) => {
  return fetch(config.baseUrl + "/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  }).then((res) => getResponse(res));
};

const getInitialCards = async () => {
  return fetch(config.baseUrl + "/cards", {
    headers: config.headers,
  }).then((res) => getResponse(res));
};

const addCard = async (card) => {
  return fetch(config.baseUrl + "/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link,
    }),
  }).then((res) => getResponse(res));
};

const deleteCard = async (cardId) => {
  return fetch(config.baseUrl + `/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getResponse(res));
};

const addLike = async (cardId) => {
  return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => getResponse(res));
};

const deleteLike = async (cardId) => {
  return fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => getResponse(res));
};

const existsFile = async (url) => {
  return fetch(url)
  .then((res) => {return res.ok});
};


export {
  getInitialUser,
  updateUser,
  updateUserAvatar,
  getInitialCards,
  addCard,
  deleteCard,
  addLike,
  deleteLike,
  existsFile,
};
