/**
 * The form.js is used by the contact.html file to validate the form.
 * It also uses emailJS as a tool to send the filled out form to the site owners gmail.
 * The function validateForm informs the user if they have not filled it out the form and also informs them if they did it correctly.
 * The variables name and email are targeted by their value.
 */
function validateForm() {
    const name = document.querySelector('#full-name').value;
    const email = document.querySelector('#email').value;
    let modalName = document.getElementById('nameModal')
    // If statements to see if name and email has been filled out. If they have fire sendEmail function. If they have not return alert.
    if (name === '') {
        modalName.classList.add('form-modal-show-name')
    } else if (email === '') {
        alert('email must be filled out');
    } else {
        sendEmail();
    }
    return false;
}

/**
 * Get the form and add an eventListener to listen for the submit.
 * If the submit is fired send email thru emailJS.
 */
function sendEmail() {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        // ID from emailJS
        emailjs.init('user_ijKY6mblVUbu5AeWdbYlk');
        emailjs.send("gmail", "us_memory", {
            // User name and email that has been filled out.
            user_name: form.name.value,
            user_email: form.email.value,
        });
        alert('Your form was sent!');
    });
}