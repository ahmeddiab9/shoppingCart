let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit')
let message = document.getElementById('message')


checkemail = localStorage.getItem('email')
checkPassword = localStorage.getItem('password')

submit.addEventListener('click' , function checkLogin(e){
    e.preventDefault()
    if(email.value ===  '' || password.value === ''){
        message.style.display = 'block'
    }else{
        if((email.value ===  String(checkemail) && password.value === checkPassword)){
            setTimeout(() => {
                window.location = '/index.html'
            }, 2000);
            window.location = '/index.html'
        }else{
            message.style.display = 'block'
            message.innerHTML = 'Please Check Email or Password' 
        }
    }
})


 