

const urlData = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

const getIngredientsData = () => {
  return fetch(urlData)
  .then(checkResponse)
};

export {getIngredientsData}