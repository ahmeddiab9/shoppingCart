let username = localStorage.getItem('username')
let actionLogin = document.getElementById('login-methode')
let usernamee = document.getElementById('user-group')
let user = document.getElementById('user')
let singout = document.getElementById('singout')
let products_all = document.querySelector('.products')

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



//Define card item

let products = [
    {
        id:1,
        title : 'watch',
        img_item : 'imgs/photo-1546868871-7041f2a55e12.jpg',
    },
    {
        id:2,
        title : 'shose',
        img_item : 'imgs/shose.jpg',
    },
    {
        id:3,
        title : 'HeadPhones',
        img_item : 'imgs/aa.jpg',
    },
    {
        id:4,
        title : 'shose',
        img_item : 'imgs/download.jpg',
    },
    
]


function drawItem(){
    let productUi = products.map((item) => {
        return `
        <div class="product-item">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${item.img_item}" alt="Card image cap">
              <div class="card-body">
                <p>${item.title}</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="actions">
                  <a href="#" class="btn btn-primary" onclick="addedtocard(${item.id})">Add To Card</a>
                <a href="#" class="btn btn-primary">Add To Favorites</a>
                </div>
              </div>
            </div>
          </div>
        `
    })
    products_all.innerHTML = productUi
}
drawItem()


 function AddToCart(){
    if(localStorage.getItem('username')){
        console.log('added card');
    }else{
        window.location = '/login.html'
    } 
}


function addedtocard(id){
    let product_it = products.find((item)=>item.id === id)
    console.log(product_it);
}
