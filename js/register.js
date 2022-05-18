let email = document.querySelector('#email');
let password = document.querySelector('#password');
let username = document.querySelector('#username');
let submit = document.querySelector('#submit')
let message = document.getElementById('message')


checkemail = localStorage.getItem('email')
checkUsername = localStorage.getItem('username')

submit.addEventListener('click' , function(e){


    e.preventDefault()
    if(email.value === '' || password.value === '' || username.value === '' ){
        message.style.display = 'block'
    }else{
        if(email.value === String(checkemail) && username.value === String(checkUsername) ){
            message.style.display = 'block'
            message.innerHTML = 'user already exists';
        }else{
            localStorage.setItem('email' , email.value)
            localStorage.setItem('password' , password.value)
            localStorage.setItem('username' , username.value)
            setTimeout(() => {
                window.location = '/index.html'
                }, 2000);
        }
    }
})