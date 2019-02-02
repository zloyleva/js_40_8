console.log("App was load...");

import render from './lib/renderHtml';
import header from './components/Header';

const _header = header();

console.log(_header);

render("app", _header);
