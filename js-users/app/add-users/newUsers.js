const backButton = document.querySelector('.btn-secondary');
const homeButton = document.querySelector('#home');
const submitButton = document.querySelector('.btn-primary');
const add_URL = 'https://assessment-users-backend.herokuapp.com';
const inputs = document.querySelectorAll('.form-control');
const form = document.querySelector('form');
const alertCard = document.querySelector('.alert');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('was-validated');
  fetch(`${add_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      first_name: inputs[0].value,
      last_name: inputs[1].value,
      status: 'active',
    }),
  })
    .then((resp) => {
      if (resp.status === 201) {
        alertCard.style = 'display: show';
      }
    })
    .catch((err) => console.log(err));
});

backButton.addEventListener('click', () => {
  location.href = '../index.html';
});

home.addEventListener('click', () => {
  location.href = '../index.html';
});
