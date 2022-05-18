var username = localStorage.getItem('username')
var actionLogin = document.getElementById('login-methode')
var usernamee = document.getElementById('user-group')
var user = document.getElementById('user')
var singout = document.getElementById('singout')

if(username){
    actionLogin.style.display = 'none'
    usernamee.style.display = 'flex'
    user.innerHTML = username
}else{
    actionLogin.style.display = 'flex'
    usernamee.style.display = 'none'
}

singout.addEventListener('click' , function(){
    window.location = '/register.html'
    actionLogin.style.display = 'flex'
    usernamee.style.display = 'none'
})


