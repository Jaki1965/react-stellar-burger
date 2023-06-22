
const urlData = 'https://norma.nomoreparties.space/api/ingredients';
const urlOrder = 'https://norma.nomoreparties.space/api/orders';
const urlResetEmail = `https://norma.nomoreparties.space/api/password-reset`;
const email = {
  "email": ""
}


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

const getOrderNumber = (ingredients) => {
  return fetch(urlOrder, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ingredients})
  })
  .then(checkResponse)
};

const getResetEmail = (email) => {
  return fetch(urlResetEmail, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({email})
  })
  .then(checkResponse)
};



export {getIngredientsData, getOrderNumber, getResetEmail}