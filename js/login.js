let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit')
let message = document.getElementById('message')


checkemail = localStorage.getItem('email')
chwckPassword = localStorage.getItem('password')

submit.addEventListener('click' , function(e){
    e.preventDefault()

    console.log(email.value);
    console.log(checkemail);

    if(email.value ===  '' || password.value === ''){
        message.style.display = 'block'
    }else{
        if(email.value ===  checkemail && password.value === chwckPassword){
            setTimeout(() => {
                window.location = '/index.html'
            }, 2000);
            console.log('logged in');
            window.location = '/index.html'
        }else{
            message.innerHTML = 'No Details' 
        }

    }
})