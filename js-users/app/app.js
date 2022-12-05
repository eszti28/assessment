const BASE_URL = 'https://assessment-users-backend.herokuapp.com';
const prevButton = document.querySelector('.btn-primary');
const nextButton = document.querySelector('.btn-success');
const addButton = document.querySelector('#add');
const tbody = document.querySelector('tbody');
let pageIndex = 0;

function showUsers(index) {
  fetch(`${BASE_URL}/users`)
    .then((resp) => resp.json())
    .then((json) => {
      for (let i = index; i < index + 10; i++) {
        addDom(json, i);
      }
      const allEditBtns = document.querySelectorAll('.edit-btn');
      allEditBtns.forEach(function (modify) {
        modify.addEventListener('click', () => {
          location.href = `update-users/update.html?id=${modify.value}`;
        });
      });

      const allStatusBtns = document.querySelectorAll('.status-btn');
      allStatusBtns.forEach(function (status) {
        status.addEventListener('click', () => {
          activeOrLocked(status.value, status.id, status);
        });
      });
    })
    .catch((err) => console.log(err));
}

function addDom(json, index) {
  const tr = document.createElement('tr');
  for (let i = 0; i < 5; i++) {
    const td = document.createElement('td');
    if (i === 0) td.innerText = json[index].first_name;
    if (i === 1) td.innerText = json[index].last_name;
    if (i === 2)
      td.innerText = new Date(
        Date.parse(json[index].created_at)
      ).toLocaleString('hu');
    if (i === 3) {
      td.innerText = 'Edit';
      td.value = json[index].id;
      td.classList = 'edit-btn fw-bold text-primary';
      td.style = 'cursor: pointer;';
    }
    if (i === 4) {
      json[index].status === 'active'
        ? (td.innerText = 'Active')
        : (td.innerText = 'Locked');
      td.value = json[index].status;
      td.id = json[index].id;
      td.classList = 'status-btn fw-bold text-success';
      td.style = 'color: green; cursor: pointer;';
    }
    td.classList.add('p-3');
    tr.appendChild(td);
    if (json[index].status === 'locked')
      tr.style.textDecoration = 'line-through';
  }
  tbody.appendChild(tr);
}

function activeOrLocked(status, id, statusButton) {
  if (status === 'active') {
    statusButton.value = 'locked';
    statusButton.innerText = 'Locked';
    statusButton.parentElement.style.textDecoration = 'line-through';
  } else {
    statusButton.value = 'active';
    statusButton.innerText = 'Active';
    statusButton.parentElement.style.textDecoration = 'none';
  }
  fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      status: statusButton.value,
    }),
  }).catch((err) => console.log(err));
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
  location.href = 'add-users/addForm.html';
});

showUsers(0);
