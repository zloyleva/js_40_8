console.log("App was load...");

import render from './lib/renderHtml';
import header from './components/Header';
import main from './components/Main';
import modal from './components/ModalWindow';


import addToCartAction from './actions/addToCartAction';
import showCardModalAction from './actions/showCardModalAction';
import clearModalAction from './actions/clearModalAction';
import initCardAction from './actions/initCardAction';

const _header = header();
const _main = main();

const addToCartEvent = new Event("addToCart");

document.addEventListener("addToCart", () => {
    console.log("Detected addToCart");

    document
        .getElementById("cart_nav")
        .innerHTML = `Cart <span class='badge badge-light'>${JSON.parse(localStorage.getItem("cart")).length}</span>`;

});

render("app", _header);
render("app", _main);
render("app", modal);

initCardAction();
addToCartAction(addToCartEvent);
showCardModalAction();
clearModalAction();


