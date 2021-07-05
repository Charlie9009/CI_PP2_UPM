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
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // ID from emailJS
        emailjs.init('user_ijKY6mblVUbu5AeWdbYlk')
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                alert('Your form was sent!');
            })
    });
}

