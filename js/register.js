let email = document.querySelector('#email');
let password = document.querySelector('#password');
let username = document.querySelector('#username');
let submit = document.querySelector('#submit')
let message = document.getElementById('message')


checkemail = localStorage.getItem('email')

submit.addEventListener('click' , function(e){


    console.log(typeof(email.value));
    console.log(typeof(checkemail))

    e.preventDefault()
    if(email.value === '' || password.value === '' || username.value === '' ){
        message.style.display = 'block'
    }else{
        if(email & email.value === String(checkemail) ){
            // setTimeout(() => {
            // window.location = '/index.html'
            // }, 2000);
            console.log('user already exists');
        }else{
            console.log('sucess');
            // localStorage.setItem('email' , email.value)
            // localStorage.setItem('password' , password.value)
            // localStorage.setItem('username' , username.value)
            // setTimeout(() => {
            //     window.location = '/index.html'
            //     }, 2000);
        }
    }
})