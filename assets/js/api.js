/**
 * The api.js is used by the user.html file to fetch data from the webpage 'https://reqres.in'.
 * The GET list users was used to fetch the data and to display it to the users screen. 
 */

function fetchData() {
  fetch('https://reqres.in/api/users')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const userList = data.data
    .map(user => {
      // Template literals was used to make the creation of the html cleaner
      return `
      <div id="inner-fetch-user">
      <p><img src="${user.avatar}" alt="Picture of user" /></p>
      <p>Last Name: ${user.last_name}</p>
      <p>Email: ${user.email}</p>
      </div>
      `;
    })
    /* .join is used with an empty string so there is nothing extra added. 
    The queryselector targets #fetch so the userList can be styled with CSS 
    */
    .join('');
    document.querySelector('#fetch').insertAdjacentHTML('afterbegin', userList);
  })
}

fetchData();