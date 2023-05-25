
const urlData = 'https://norma.nomoreparties.space/api/ingredients';
const urlOrder = 'https://norma.nomoreparties.space/api/orders';


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

const getOrderNumber = (arr) => {
  return fetch(urlOrder, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({'ingredients': arr})
  })
  .then(checkResponse)
};



export {getIngredientsData, getOrderNumber}