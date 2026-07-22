let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

cart.push({
name: name,
price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");

}

function loadCart(){

let cartItems=document.getElementById("cart-items");
let total=document.getElementById("total");

if(!cartItems) return;

cartItems.innerHTML="";

let grandTotal=0;

cart.forEach((item,index)=>{

grandTotal+=item.price;

cartItems.innerHTML+=`
<div class="card">
<h2>${item.name}</h2>
<h3>₹${item.price}</h3>

<button onclick="removeItem(${index})">
Remove
</button>

</div>
`;

});

total.innerHTML="Total : ₹"+grandTotal;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

window.onload=loadCart;
