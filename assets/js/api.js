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
  })
  .catch(error => {
    console.log(error);
  });
}

fetchData();