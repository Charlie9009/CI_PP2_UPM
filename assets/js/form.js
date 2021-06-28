function validateForm() {
    let fullName = document.forms['contactForm']['name'].value;
    if (fullName == '') {
        alert('Name needs to be filled out');
        return false;
    }
}