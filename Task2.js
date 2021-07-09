const firstname = document.form.fname;
const lastname = document.form.lname;
const email = document.form.email;
const username = document.form.username;
const password1 = document.form.p1;
const password2 = document.form.p2;

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(firstname.value === lastname.value) {
        alert('firstname and lastname must not be the same');
        return false;
    } 
    if(!email.value.includes('@')) {
        alert('email must contain @ symbol');
        return false;
    } 
    if(!username.value.includes('@') && username.value.includes('#') && username.value.includes('$') && username.value.includes('%') && username.value.includes('^') && username.value.includes('&') && username.value.includes('*')) {
        alert('username must contain a special charater @#$%^&*');
        return false;
    }
    if(password1.value !== password2.value) {
        alert('passwords do not match');
        return false;
    }
    else {
        alert('submitted');
    }
    
});    