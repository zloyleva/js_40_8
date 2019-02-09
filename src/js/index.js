console.log("App was load...");

import render from './lib/renderHtml';
import header from './components/Header';
import main from './components/Main';

const _header = header();
const _main = main();

// console.log(_header);
// console.log(_main);

render("app", _header);
render("app", _main);

[...document.getElementsByClassName("nav-item")]
    .map(el => el.addEventListener("click", () => console.log("nav-item")));

[...document.getElementsByClassName("add_to_cart")]
    .map(el => el.addEventListener("click", () => console.log("Add")));