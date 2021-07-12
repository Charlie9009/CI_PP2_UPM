/**
 * As stated in README:
 * For fetching the API I watched alot of videos and searched alot on google to learn it.
 * In the end I watched and used a bit of code from this tutorial https://www.youtube.com/watch?v=FN_ffvw_ksE&t=1483s.
 */

/**
 * The users.js is used by the user.html file to fetch data from the webpage 'https://reqres.in'.
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
      <div id="fetch-text-area">
      <p>Last Name: ${user.last_name}</p>
      <p>Email: ${user.email}</p>
      </div>
      </div>
      `;
    })
    /* .join is used with an empty string so there is nothing extra added. 
    The queryselector targets #fetch so the userList can be styled with CSS 
    */
    .join('');
    document.querySelector('#fetch').insertAdjacentHTML('afterbegin', userList);
  });
}

fetchData();