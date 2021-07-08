/**
 * The form.js is used by the contact.html file to validate the form.
 * It also uses emailJS as a tool to send the filled out form to the site owners gmail.
 */

const name = document.getElementById('full-name');
const email = document.getElementById('email');
const form = document.getElementById('form');

function validateForm() {
    let name = document.forms['form']['full-name'].value;
    let email = document.forms['form']['email'].value;
    if (name === '') {
        alert('Name must be filled out');
    } else if (email === '') {
        alert('email must be filled out');
    } else {
        sendEmail();
    }
    return false;
}

function sendEmail() {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        // ID from emailJS
        emailjs.init('user_ijKY6mblVUbu5AeWdbYlk')
        emailjs.send("gmail", "us_memory", {
            user_name: form.name.value,
            user_email: form.email.value,
        });
        alert('Your form was sent!')
    });
};
