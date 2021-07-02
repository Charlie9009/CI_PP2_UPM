function validateForm() {
    let fullName = document.forms['name'].value;
    if (fullName == '') {
        alert('Name needs to be filled out');
        return false;
    }
}