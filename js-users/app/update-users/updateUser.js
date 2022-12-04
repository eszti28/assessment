const backButtonTwo = document.querySelector('.btn-secondary');
const editButton = document.querySelector('.btn-primary');
const updateForm = document.querySelector('form');
const inputsTwo = document.querySelectorAll('.form-control');
const edit_URL = 'https://assessment-users-backend.herokuapp.com';

editButton.addEventListener('click', (e) => {
  e.preventDefault();
  updateForm.classList.add('was-validated');
  const userId = window.location.search.split('').splice(4, 4).join('');
  fetch(`${edit_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      first_name: inputsTwo[0].value,
      last_name: inputsTwo[1].value,
    }),
  }).catch((err) => console.log(err));
});

backButtonTwo.addEventListener('click', () => {
  location.href = '../index.html';
});
