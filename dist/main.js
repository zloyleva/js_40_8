/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Card/style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Card/style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".card {\\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\\n  transition: all 0.5s; }\\n  .card .card-action .cart-price {\\n    font-weight: bold;\\n    color: #0062cc; }\\n  .card .card-action a.btn.btn-primary {\\n    color: #fff;\\n    font-weight: bold; }\\n  .card:hover {\\n    transform: scale(1.05);\\n    cursor: pointer; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/components/Card/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Header/style.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Header/style.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".badge {\\n  margin-left: 5px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/components/Header/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/js/actions/addToCartAction.js":
/*!*******************************************!*\
  !*** ./src/js/actions/addToCartAction.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((event) => {\n    [...document.getElementsByClassName(\"add_to_cart\")]\n        .map(el => el.addEventListener(\"click\", (e) => {\n            console.log(\"Add\");\n\n            let cart = JSON.parse(localStorage.getItem(\"cart\"));\n\n            cart.push({\n                id: e.target.dataset.id,\n                price: e.target.dataset.price,\n                title: e.target.dataset.title,\n            });\n\n            localStorage.setItem(\"cart\", JSON.stringify(cart));\n\n            document.dispatchEvent(event);\n        }));\n});\n\n//# sourceURL=webpack:///./src/js/actions/addToCartAction.js?");

/***/ }),

/***/ "./src/js/components/Card/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Card/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products */ \"./src/js/products.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/js/components/Card/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst limit = 100;\n\nconst div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nconst img = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\");\nconst p = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\");\nconst a = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\nconst h5 = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h5\");\nconst span = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\n\nconst createCardElement = (product) => {\n\n    const {id, price, title, description, image} = product;\n\n    const cardImgTop = img.createHtmlElement(\n        \"card-img-top\",\n        [\n            {name: \"src\", value: image},\n            {name: \"alt\", value: title},\n        ]\n    );\n\n    const priceSpan = span.createHtmlElement(\n        \"cart-price\",\n        null,\n        `${price} $`\n    );\n\n    const cardLink = a.createHtmlElement(\n        \"btn btn-primary add_to_cart\",\n        [\n            {name:\"data-id\", value: id},\n            {name:\"data-price\", value: price},\n            {name:\"data-title\", value: title},\n        ],\n        \"Add to cart\"\n    );\n\n    const actionSection = div.createHtmlElement(\n        \"card-action d-flex justify-content-between align-items-center\",\n        null,\n        [priceSpan,cardLink]\n    );\n\n    const cardText = p.createHtmlElement(\n        \"card-text\",\n        null,\n        ((description[limit+1] === \" \")?description.substring(0,limit):description.substring(0,limit).split(\" \").slice(0,-1).join(\" \")) + \"...\"\n    );\n    const cardTitle = h5.createHtmlElement(\n        \"card-title\",\n        null,\n        title\n    );\n    const cardBody = div.createHtmlElement(\n        \"card-body\",\n        null,\n        [cardTitle,cardText,actionSection]\n    );\n\n    const card = div.createHtmlElement(\n        \"card\",\n        null,\n        [cardImgTop,cardBody]\n    );\n    return div.createHtmlElement(\n        \"col-12 col-md-6 col-lg-4 my-2\",\n        null,\n        [card]\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(el => createCardElement(el)));\n\n//# sourceURL=webpack:///./src/js/components/Card/index.js?");

/***/ }),

/***/ "./src/js/components/Card/style.scss":
/*!*******************************************!*\
  !*** ./src/js/components/Card/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Card/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/components/Card/style.scss?");

/***/ }),

/***/ "./src/js/components/Header/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n/* harmony import */ var _navbarBrand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbarBrand */ \"./src/js/components/Header/navbarBrand.js\");\n/* harmony import */ var _navbarToggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarToggler */ \"./src/js/components/Header/navbarToggler.js\");\n/* harmony import */ var _navbarCollapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbarCollapse */ \"./src/js/components/Header/navbarCollapse.js\");\n\n\n\n\n\n\nfunction Header() {\n    const nav = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\");\n\n    return nav.createHtmlElement(\n        \"navbar navbar-expand-lg navbar-dark bg-dark\",\n        null,\n        [_navbarBrand__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_navbarToggler__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_navbarCollapse__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n    );\n}\n\n\n//# sourceURL=webpack:///./src/js/components/Header/index.js?");

/***/ }),

/***/ "./src/js/components/Header/navbarBrand.js":
/*!*************************************************!*\
  !*** ./src/js/components/Header/navbarBrand.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n\n\nconst a = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\nconst navbarBrand = a.createHtmlElement(\n    \"navbar-brand\",\n    [{name:\"href\", value:\"/\"}],\n    \"Shoes store\"\n);\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarBrand);\n\n//# sourceURL=webpack:///./src/js/components/Header/navbarBrand.js?");

/***/ }),

/***/ "./src/js/components/Header/navbarCollapse.js":
/*!****************************************************!*\
  !*** ./src/js/components/Header/navbarCollapse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/js/components/Header/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nconst div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nconst a = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\");\nconst ul = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ul\");\nconst li = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"li\");\n\nconst navLinks = [\n    {name: \"Home\", attr: [{name: \"href\", value: \"/\"}]},\n    {name: \"Catalog\", attr: [{name: \"href\", value: \"/\"}]},\n    {name: \"Cart\", attr: [\n        {name: \"href\", value: \"/\"},\n        {name: \"id\", value: \"cart_nav\"},\n        {name: \"class\", value: \"nav-link d-flex align-items-center\"},\n        {name: \"data-toggle\", value: \"modal\"},\n        {name: \"data-target\", value: \"#modalCart\"},\n        ]},\n    {name: \"Contact\", attr: [{name: \"href\", value: \"/\"}]},\n];\n\nconst navItems = navLinks.map((el) =>\n    li.createHtmlElement(\n        \"nav-item\",\n        null,\n        [\n            a.createHtmlElement(\n                \"nav-link\",\n                el.attr,\n                el.name == \"Cart\"?createCartText(el.name):el.name\n            )\n        ]\n    )\n);\n\nconst navbarNav = ul.createHtmlElement(\"navbar-nav\",null,navItems);\nconst navbarCollapse = div.createHtmlElement(\n    \"collapse navbar-collapse justify-content-end\",\n    [{name:\"id\", value:\"navbarSupportedContent\"}],\n    [navbarNav]\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarCollapse);\n\nfunction createCartText(name) {\n    let count = 0;\n    if(\n        localStorage.getItem(\"cart\") &&\n        Array.isArray(JSON.parse(localStorage.getItem(\"cart\")))\n    ){\n        count = JSON.parse(localStorage.getItem(\"cart\")).length;\n    }\n\n    return `${name} <span class='badge badge-light'>${count}</span>`;\n}\n\n//# sourceURL=webpack:///./src/js/components/Header/navbarCollapse.js?");

/***/ }),

/***/ "./src/js/components/Header/navbarToggler.js":
/*!***************************************************!*\
  !*** ./src/js/components/Header/navbarToggler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n\n\nconst button = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\nconst span = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\n\nconst navbarTogglerIcon = span.createHtmlElement(\"navbar-toggler-icon\");\nconst navbarToggler = button.createHtmlElement(\n    \"navbar-toggler\",\n    [\n        {name:\"type\", value:\"button\"},\n        {name:\"data-toggle\", value:\"collapse\"},\n        {name:\"data-target\", value:\"#navbarSupportedContent\"},\n        {name:\"aria-controls\", value:\"navbarSupportedContent\"},\n        {name:\"aria-expanded\", value:\"false\"},\n        {name:\"aria-label\", value:\"Toggle navigation\"},\n    ],\n    [navbarTogglerIcon]\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarToggler);\n\n//# sourceURL=webpack:///./src/js/components/Header/navbarToggler.js?");

/***/ }),

/***/ "./src/js/components/Header/style.scss":
/*!*********************************************!*\
  !*** ./src/js/components/Header/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/js/components/Header/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/js/components/Header/style.scss?");

/***/ }),

/***/ "./src/js/components/Main/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ \"./src/js/components/Card/index.js\");\n\n\n\nfunction main() {\n    const div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\n\n    const row = div.createHtmlElement(\n        \"row my-5\",\n        null,\n        _Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    );\n\n    return div.createHtmlElement(\n        \"container\",\n        null,\n        [row]\n    );\n}\n\n\n//# sourceURL=webpack:///./src/js/components/Main/index.js?");

/***/ }),

/***/ "./src/js/components/ModalWindow/index.js":
/*!************************************************!*\
  !*** ./src/js/components/ModalWindow/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ \"./src/js/lib/FactoryHtml.js\");\n// <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n//     <div class=\"modal-dialog\" role=\"document\">\n//         <div class=\"modal-content\">\n//             <div class=\"modal-header\">\n//                 <h5 class=\"modal-title\">Modal title</h5>\n//                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n//                     <span aria-hidden=\"true\">&times;</span>\n//                 </button>\n//             </div>\n//             <div class=\"modal-body\">\n//                 <p>Modal body text goes here.</p>\n//             </div>\n//             <div class=\"modal-footer\">\n//                 <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n//                 <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n//             </div>\n//         </div>\n//     </div>\n// </div>\n\n\n\nconst div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\");\nconst button = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\");\nconst p = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\");\nconst h5 = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h5\");\nconst span = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"span\");\n\nconst spanClose = span.createHtmlElement(\n    null,\n    [{name:\"aria-hidden\", value:\"true\"}],\n    \"&times;\"\n);\n\nconst buttonCloseX = button.createHtmlElement(\n    \"close\",\n    [\n            {name:\"type\", value:\"button\"},\n            {name:\"data-dismiss\", value:\"modal\"},\n            {name:\"aria-label\", value:\"Close\"},\n        ],\n    [spanClose]\n);\n\nconst modalTitle = h5.createHtmlElement(\n    \"modal-title\",\n    null,\n    \"Modal title\"\n);\n\nconst modalHeader = div.createHtmlElement(\n    \"modal-header\",\n    null,\n    [modalTitle,buttonCloseX]\n);\n\n\nconst modalContentSection = div.createHtmlElement(\n    \"modal-content-section\",\n    null,\n    \"\"\n);\n\nconst modalBody = div.createHtmlElement(\n    \"modal-body\",\n    null,\n    [modalContentSection]\n);\n\n//3 buttons\n\nconst buttonCreateOrder = button.createHtmlElement(\n    \"btn btn-primary\",\n    [\n        {name:\"type\", value:\"button\"},\n    ],\n    \"Create order\"\n);\n\nconst buttonClearCart = button.createHtmlElement(\n    \"btn btn-danger\",\n    [\n        {name:\"type\", value:\"button\"},\n    ],\n    \"Clear Cart\"\n);\n\nconst buttonClose = button.createHtmlElement(\n    \"btn btn-secondary\",\n    [\n        {name:\"type\", value:\"button\"},\n        {name:\"data-dismiss\", value:\"modal\"},\n    ],\n    \"Close\"\n);\nconst modalFooter = div.createHtmlElement(\n    \"modal-footer\",\n    null,\n    [buttonCreateOrder, buttonClearCart, buttonClose]\n);\n\nconst modalContent = div.createHtmlElement(\n    \"modal-content\",\n    null,\n    [modalHeader,modalBody,modalFooter]\n);\n\nconst modalDialog = div.createHtmlElement(\n    \"modal-dialog\",\n    [{name:\"role\", value:\"document\"}],\n    [modalContent]\n);\n\nconst modal = div.createHtmlElement(\n    \"modal\",\n    [\n            {name:\"id\", value:\"modalCart\"},\n            {name:\"tabindex\", value:\"-1\"},\n            {name:\"role\", value:\"dialog\"},\n        ],\n    [modalDialog]\n);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/js/components/ModalWindow/index.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_renderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/renderHtml */ \"./src/js/lib/renderHtml.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/js/components/Header/index.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main */ \"./src/js/components/Main/index.js\");\n/* harmony import */ var _components_ModalWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ModalWindow */ \"./src/js/components/ModalWindow/index.js\");\n/* harmony import */ var _actions_addToCartAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/addToCartAction */ \"./src/js/actions/addToCartAction.js\");\nconsole.log(\"App was load...\");\n\n\n\n\n\n\n\n\nconst _header = Object(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst _main = Object(_components_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst addToCartEvent = new Event(\"addToCart\");\n\ndocument.addEventListener(\"addToCart\", () => {\n    console.log(\"Detected addToCart\");\n\n    document.getElementById(\"cart_nav\").innerHTML = `Cart <span class='badge badge-light'>${JSON.parse(localStorage.getItem(\"cart\")).length}</span>`;\n\n});\n\nObject(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"app\", _header);\nObject(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"app\", _main);\nObject(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"app\", _components_ModalWindow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nif(\n    !localStorage.getItem(\"cart\") ||\n    !Array.isArray(JSON.parse(localStorage.getItem(\"cart\")))\n){\n    localStorage.setItem(\"cart\",JSON.stringify([]));\n}\n\n[...document.getElementsByClassName(\"nav-item\")]\n    .map(el => el.addEventListener(\"click\", () => console.log(\"nav-item\")));\n\nObject(_actions_addToCartAction__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(addToCartEvent);\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib/A.js":
/*!*************************!*\
  !*** ./src/js/lib/A.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"a\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/A.js?");

/***/ }),

/***/ "./src/js/lib/BuilderHtml.js":
/*!***********************************!*\
  !*** ./src/js/lib/BuilderHtml.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BuilderHtml; });\n\nfunction BuilderHtml(tag) {\n\n    this.createHtmlElement = (className, attr, content) => {\n        const html = document.createElement(tag);\n\n        html.className = className || \"\";\n\n        if(Array.isArray(attr)){\n            attr.map(el => html.setAttribute(el.name, el.value));\n        }\n\n        if(typeof content === \"string\"){\n            html.innerHTML = content;\n        }else if(Array.isArray(content)){\n            content.map(el => (el instanceof Node?html.appendChild(el):\"\"));\n        }\n\n        return html;\n    }\n}\n\n//# sourceURL=webpack:///./src/js/lib/BuilderHtml.js?");

/***/ }),

/***/ "./src/js/lib/Button.js":
/*!******************************!*\
  !*** ./src/js/lib/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"button\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Button.js?");

/***/ }),

/***/ "./src/js/lib/Div.js":
/*!***************************!*\
  !*** ./src/js/lib/Div.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"div\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Div.js?");

/***/ }),

/***/ "./src/js/lib/FactoryHtml.js":
/*!***********************************!*\
  !*** ./src/js/lib/FactoryHtml.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Div */ \"./src/js/lib/Div.js\");\n/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph */ \"./src/js/lib/Paragraph.js\");\n/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Img */ \"./src/js/lib/Img.js\");\n/* harmony import */ var _A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./A */ \"./src/js/lib/A.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ \"./src/js/lib/Button.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ \"./src/js/lib/Nav.js\");\n/* harmony import */ var _Li__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Li */ \"./src/js/lib/Li.js\");\n/* harmony import */ var _Ul__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ul */ \"./src/js/lib/Ul.js\");\n/* harmony import */ var _Span__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Span */ \"./src/js/lib/Span.js\");\n/* harmony import */ var _H5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./H5 */ \"./src/js/lib/H5.js\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag) {\n    switch (tag) {\n        case \"a\":\n            return new _A__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n        case \"button\":\n            return new _Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n        case \"img\":\n            return new _Img__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        case \"h5\":\n            return new _H5__WEBPACK_IMPORTED_MODULE_9__[\"default\"]();\n        case \"nav\":\n            return new _Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n        case \"li\":\n            return new _Li__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        case \"p\":\n            return new _Paragraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        case \"span\":\n            return new _Span__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n        case \"ul\":\n            return new _Ul__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n        default:\n            return new _Div__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n});\n\n//# sourceURL=webpack:///./src/js/lib/FactoryHtml.js?");

/***/ }),

/***/ "./src/js/lib/H5.js":
/*!**************************!*\
  !*** ./src/js/lib/H5.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return H5; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction H5() {\n    const tag = \"h5\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/H5.js?");

/***/ }),

/***/ "./src/js/lib/Img.js":
/*!***************************!*\
  !*** ./src/js/lib/Img.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"img\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Img.js?");

/***/ }),

/***/ "./src/js/lib/Li.js":
/*!**************************!*\
  !*** ./src/js/lib/Li.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"li\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Li.js?");

/***/ }),

/***/ "./src/js/lib/Nav.js":
/*!***************************!*\
  !*** ./src/js/lib/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Nav() {\n    const tag = \"nav\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Nav.js?");

/***/ }),

/***/ "./src/js/lib/Paragraph.js":
/*!*********************************!*\
  !*** ./src/js/lib/Paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paragraph; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Paragraph() {\n    let tag = \"p\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Paragraph.js?");

/***/ }),

/***/ "./src/js/lib/Span.js":
/*!****************************!*\
  !*** ./src/js/lib/Span.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"span\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Span.js?");

/***/ }),

/***/ "./src/js/lib/Ul.js":
/*!**************************!*\
  !*** ./src/js/lib/Ul.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Div; });\n/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ \"./src/js/lib/BuilderHtml.js\");\n\n\n\nfunction Div() {\n    const tag = \"ul\";\n    _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, tag);\n}\n\n//# sourceURL=webpack:///./src/js/lib/Ul.js?");

/***/ }),

/***/ "./src/js/lib/renderHtml.js":
/*!**********************************!*\
  !*** ./src/js/lib/renderHtml.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (place, Html) {\n    const element = document.getElementById(place);\n    element.appendChild(Html);\n});\n\n//# sourceURL=webpack:///./src/js/lib/renderHtml.js?");

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    {\n        id: 1,\n        price: 120.36,\n        title: \"Nike super sport 123\",\n        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\n        image: \"images/shoes01.jpg\"\n    },\n    {\n        id: 2,\n        price: 205.55,\n        title: \"Reebok sport R3\",\n        description: \"The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\",\n        image: \"images/shoes02.jpg\"\n    },\n    {\n        id: 3,\n        price: 99.99,\n        title: \"Reebok Racer\",\n        description: \"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.\",\n        image: \"images/shoes03.jpg\"\n    },\n    {\n        id: 4,\n        price: 199.99,\n        title: \"Reebok meant QSR\",\n        description: \"Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word\",\n        image: \"images/shoes04.jpg\"\n    },\n    {\n        id: 5,\n        price: 300.99,\n        title: \"Sneakers passage WE\",\n        description: \"Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.\",\n        image: \"images/shoes05.jpg\"\n    },\n    {\n        id: 6,\n        price: 50.20,\n        title: \"Neque Racer\",\n        description: \"“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\",\n        image: \"images/shoes06.jpg\"\n    },\n    {\n        id: 7,\n        price: 156.8,\n        title: \"Reebok Garbled Racer\",\n        description: \"In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below\",\n        image: \"images/shoes07.jpg\"\n    },\n    {\n        id: 8,\n        price: 100.00,\n        title: \"Reebok Latin Racer\",\n        description: \"Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the 20th.\",\n        image: \"images/shoes08.jpg\"\n    },\n]);\n\n//# sourceURL=webpack:///./src/js/products.js?");

/***/ })

/******/ });