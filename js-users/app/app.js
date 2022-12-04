const BASE_URL = 'https://assessment-users-backend.herokuapp.com';
const prevButton = document.querySelector('.btn-primary');
const nextButton = document.querySelector('.btn-success');
const addButton = document.querySelector('.btn-secondary');
const tbody = document.querySelector('tbody');
let pageIndex = 0;

function showUsers(index) {
  fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      for (let i = index; i < index + 10; i++) {
        addDom(json, i);
      }
    })
    .catch((err) => console.log(err));
}

function addDom(json, index) {
  const tr = document.createElement('tr');
  for (let i = 0; i < 3; i++) {
    const td = document.createElement('td');
    if (i === 0) td.innerText = json[index].first_name;
    if (i === 1) td.innerText = json[index].last_name;
    if (i === 2) td.innerText = json[index].created_at;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

nextButton.addEventListener('click', () => {
  tbody.replaceChildren();
  pageIndex += 10;
  showUsers(pageIndex);
});

prevButton.addEventListener('click', () => {
  if (pageIndex > 9) {
    tbody.replaceChildren();
    pageIndex -= 10;
    showUsers(pageIndex);
  }
});

addButton.addEventListener('click', () => {
  location.href = 'addForm.html';
});

showUsers(0);
