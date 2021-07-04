function fetchData() {
  fetch('https://reqres.in/api/users')
  .then(response => {
    if (!response.ok) {
      throw Error('ERROR')
    }
    return response.json();
  })
  .then(data => {
    console.log(data.data);
    const html = data.data
    .map(user => {
      return `
      <div class="user">
      <p><img src="" alt="" /></p>
      <p>Name: ${user.first_name}</p>
      <p>Email: ${user.email}</p>
      </div>
      `;
    })
    .join('');
    console.log(html);
    document.querySelector('#presidents').insertAdjacentHTML('afterbegin', html)
  })
  .catch(error => {
    console.log(error);
  });
}

fetchData();