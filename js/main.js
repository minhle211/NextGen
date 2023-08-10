import { checkLoginStatus } from "../Firebase/checkLoginStatus.js";
checkLoginStatus();

let productList=[];
let quantity = 0;
let cartList=[];
const  addToCartBTN = document.getElementById("add-to-cart");
const cartQuantity = document.getElementById("cart-quantity")
const productListElement=document.getElementById("product-list")



const handleAddToCart = (event) =>{
    const buttonID = event.target.id; 
    const productID = buttonID.split('_')[1];
    const productItem = productList.find((product)=> product.id==productID);
    cartList.push(productItem);
    console.log(cartList);
    cartQuantity.textContent=cartList.length;
}

addToCartBTN.addEventListener('click',handleAddToCart)
const handleGetProduct = async () =>{
    const product = await fetch('https://dummyjson.com/products?limit=10')
    const data = await product.json();
    productList=data.products;
    productList.forEach((product) =>{
        

        const productItem = document.createElement('div');
        productItem.setAttribute('class','prod-items')
        productItem.style.backgroundImage=`url(${product.thumbnail})`;

        const productInfo = document.createElement('div');
        productInfo.setAttribute('class','info');
        
        const productText = document.createElement('div');
        productText.setAttribute('class','text');

        const productName=document.createElement('h5');
        productName.setAttribute('class','prod-name');
        productName.textContent=product.title;

        const productPrice=document.createElement('p');
        productPrice.setAttribute('class','Prod-price');
        productPrice.textContent=product.price;

        const addtocartbtn = document.createElement('button');
        addtocartbtn.textContent="add to cart"
        addtocartbtn.setAttribute('id',`product_${product.id}`);
        addtocartbtn.addEventListener('click',handleAddToCart);

        productText.appendChild(productName);
        productText.appendChild(productPrice);
        productInfo.appendChild(productText);
        productInfo.appendChild(addtocartbtn);
        productItem.appendChild(productInfo);

        productListElement.appendChild(productItem);
    });
}
// handleGetProduct();
