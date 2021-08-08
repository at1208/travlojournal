exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 7672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 53789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56859);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61958);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2__.default {
  setGoogleTags() {
    if (false) {}
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          charSet: "UTF-8"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "apple-mobile-web-app-capable",
          content: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "apple-mobile-web-app-status-bar-style",
          content: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "apple-mobile-web-app-title",
          content: "TravloJournal"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "p:domain_verify",
          content: "b2666a47ce2019ef96afa5b4b91da6a2"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "alternate",
          href: "https://www.travlojournal.com/",
          hrefLang: "en-us"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          defer: true,
          rel: "dns-prefetch",
          href: "https://www.travlojournal.com/"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          defer: true,
          rel: "preconnect",
          href: "https://www.travlojournal.com/",
          crossOrigin: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          defer: true,
          rel: "preconnect",
          href: "https://www.googletagmanager.com",
          crossOrigin: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "icon",
          href: "/travlojournal.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=UA-204373881-1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          src: "https://apis.google.com/js/platform.js?onload=onLoadCallback",
          async: true,
          defer: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
          defer: true,
          dangerouslySetInnerHTML: this.setGoogleTags()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})]
      })]
    });
  }

}

MyDocument.getInitialProps = async ctx => {
  const sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, _objectSpread({}, props)))
  });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2__.default.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, initialProps), {}, {
    styles: [...react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 82308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 82308;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 9931:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/WQ1zrXQtL6UP85i4AsT9g/_buildManifest.js","static/WQ1zrXQtL6UP85i4AsT9g/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/chunks/75fc9c18-5c1929f66343f0a636cd.js","static/chunks/481-edebf552d0fcee7078b9.js","static/chunks/675-2ed885df7f31ffba5d27.js","static/chunks/998-843074157befdffdf893.js","static/css/48cffa578cf8d9874cfd.css","static/chunks/pages/index-27666398d3a439191312.js"],"/[blog]":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/chunks/75fc9c18-5c1929f66343f0a636cd.js","static/chunks/481-edebf552d0fcee7078b9.js","static/css/051a72c2f9a6154323b3.css","static/chunks/pages/[blog]-d0ceac8c53ae7b934361.js"],"/_app":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/css/8b6ae6a2852be8484216.css","static/chunks/pages/_app-8486e5026c40f80ab871.js"],"/_error":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/chunks/pages/_error-a0e21b9b223f827fe1f2.js"],"/category/[slug]":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/chunks/75fc9c18-5c1929f66343f0a636cd.js","static/chunks/481-edebf552d0fcee7078b9.js","static/chunks/675-2ed885df7f31ffba5d27.js","static/css/8d5e7b7b11cf7e5f30bb.css","static/chunks/pages/category/[slug]-38683f04ebed8bafff1b.js"],"/sitemap.xml":["static/chunks/webpack-ce8b253444944ead9766.js","static/chunks/framework-c93ed74a065331c4bd75.js","static/chunks/main-a3a79aff3ff232b41814.js","static/chunks/pages/sitemap.xml-4a73c1e3e64a517a2649.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 98648:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"../components/Blog/blog.js -> @material-ui/core/Avatar":{"id":2575,"files":["static/chunks/575.3dce4d498eba71d73ef4.js"]},"../components/Blog/relatedBlogs.js -> ./Cards/smallCard":{"id":6145,"files":["static/chunks/675-2ed885df7f31ffba5d27.js","static/css/88b72e67426087cbe858.css","static/chunks/145.7312538a2f30651852ec.js"]},"[blog].js -> ../components/Blog/authorInfo":{"id":860,"files":["static/chunks/860.b0ff55abde826576a1b4.js"]},"[blog].js -> ../components/Blog/googleOneTap":{"id":6051,"files":["static/chunks/51.59a9589a80723ecbccdf.js"]},"[blog].js -> ../components/Blog/relatedBlogs":{"id":7602,"files":["static/chunks/602.1d63a71583fdffaf78a1.js"]}}');

/***/ }),

/***/ 41036:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;