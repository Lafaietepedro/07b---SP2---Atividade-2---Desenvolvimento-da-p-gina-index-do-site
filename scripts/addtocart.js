const product = [
    {
        id: 0,
        name: "JACKSON DINKY DK3XR HSS X SERIES",
        img: "../images/dinky.jpg",
        price: 5000,
    },
    {
        id:1,
        name: "JACKSON JS Series Rhoads JS32T",
        img: "../images/gtr_frt_001_rr.jpg",
        price: 5000,
    },
    {
        id:2,
        name: "LTD EC-1000",
        img:"../images/original.png",
        price: 5000,
    },
    {
        id:3,
        name: "KEN LAWRENCE CUSTOM V",
        img:"../images/James-Hetfield-Ken-Lawrence-Custom-Flying-V.jpg",
        price: 5000,
    },
    {
        id:4,
        name: "FENDER TELECASTER",
        img:"../images/tele.jpg",
        price: 5000,
    },
    {
        id:5,
        name: "FENDER STRATOCASTER",
        img:"../images/fender2.jpg",
        price: 5000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {img, name, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${img}></img>
            </div>
        <div class='bottom'>
        <p>${name}</p>
        <h2>R$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Adicionar</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById("total").innerHTML = "R$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {img, name, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${img}>
                </div>
                <p style='font-size:24px;'>${name}</p>
                <h2 style='font-size: 22px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}