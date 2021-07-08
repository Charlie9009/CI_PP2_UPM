function fetchData() {
  fetch('https://reqres.in/api/users')
  .then(response => {
    if (!response.ok) {
      throw Error('ERROR');
    }
    return response.json();
  })
  .then(data => {

    const html = data.data
    .map(user => {
      return `
      <div id="inner-fetch-user">
      <p><img src="${user.avatar}" alt="Picture of user" /></p>
      <p>Last Name: ${user.last_name}</p>
      <p>Email: ${user.email}</p>
      </div>
      `;
    })
    .join('');
    document.querySelector('#fetch').insertAdjacentHTML('afterbegin', html);
  })
  .catch(error => {
    console.log(error);
  });
}

fetchData();