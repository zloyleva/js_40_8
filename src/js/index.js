console.log("App was load...");

import render from './lib/renderHtml';
import header from './components/Header';
import main from './components/Main';

import addToCartAction from './actions/addToCartAction';

const _header = header();
const _main = main();

const addToCartEvent = new Event("addToCart");

document.addEventListener("addToCart", () => {
    console.log("Detected addToCart");

    document.getElementById("cart_nav").innerHTML = `Cart <span class='badge badge-light'>${JSON.parse(localStorage.getItem("cart")).length}</span>`;

});

render("app", _header);
render("app", _main);

if(
    !localStorage.getItem("cart") ||
    !Array.isArray(JSON.parse(localStorage.getItem("cart")))
){
    localStorage.setItem("cart",JSON.stringify([]));
}

[...document.getElementsByClassName("nav-item")]
    .map(el => el.addEventListener("click", () => console.log("nav-item")));

addToCartAction(addToCartEvent);

