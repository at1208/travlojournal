exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 88043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yl": function() { return /* binding */ one_tap_login; },
/* harmony export */   "YR": function() { return /* binding */ authenticate; },
/* harmony export */   "$D": function() { return /* binding */ isAuth; }
/* harmony export */ });
/* unused harmony exports signout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage */
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28530);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36808);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const one_tap_login = data => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${"https://cms.readifly.com/api"}/google/onetap/login`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const signout = next => {
  removeCookie(`token-${"https://www.travlojournal.com/"}`);
  removeLocalStorage(`user-${"https://www.travlojournal.com/"}`);
  next();
};
const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = key => {
  if (false) {}
};
const setLocalStorage = (key, value) => {
  if (false) {}
};
const removeLocalStorage = key => {
  if (false) {}
};
const authenticate = (data, next) => {
  setCookie(`token-${"https://www.travlojournal.com/"}`, data.token);
  setLocalStorage(`user-${"https://www.travlojournal.com/"}`, data.user);
  next();
};
const isAuth = () => {
  if (false) {}
};

/***/ }),

/***/ 78996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(16514);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./actions/auth.js
var auth = __webpack_require__(88043);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.js
var core = __webpack_require__(58189);
;// CONCATENATED MODULE: ./components/Header/index.js







const Header = () => {
  const {
    0: user,
    1: setUser
  } = (0,react.useState)();
  const {
    0: isAuthenticated,
    1: setIsAuthenticated
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if ((0,auth/* isAuth */.$D)()) {
      setUser((0,auth/* isAuth */.$D)());
    }
  }, [isAuthenticated]);

  const handleOnetapResponse = response => {
    // const decodedToken = jwt_decode(response.credential)
    (0,auth/* one_tap_login */.Yl)({
      googleToken: response.credential,
      domain: "60c048a1b9467821193d870b"
    }).then(result => {
      (0,auth/* authenticate */.YR)(result, () => {
        setIsAuthenticated(true);
      });
    }).catch(err => {
      console.log(err);
    });
  };

  (0,react.useEffect)(() => {
    if (!(0,auth/* isAuth */.$D)()) {
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: "925246663936-5svp6plkujiuarb8i7iuovcf0d38pcqb.apps.googleusercontent.com",
          callback: handleOnetapResponse
        });
        google.accounts.id.prompt();
      };
    }
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: (Header_module_default()).outercontainer,
    children: /*#__PURE__*/jsx_runtime.jsx(core.Grid, {
      container: true,
      justify: "space-between",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(core.Grid, {
        item: true,
        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
          src: "/travlojournal.svg",
          className: (Header_module_default()).logo,
          alt: "TravloJournal"
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: (Header_module_default()).appname,
          children: "TravloJournal"
        })]
      })
    })
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(80647);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
;// CONCATENATED MODULE: ./components/Footer/index.js





const Footer = ({
  router
}) => {
  if (router.pathname === '/') {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Footer_module_default()).footerhome,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-5"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-7",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "row justify-content-end",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "About"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "Help"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "Legal"
            })]
          })
        })]
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Footer_module_default()).footer,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-5"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "row justify-content-end",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "About"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "Help"
            }), /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Footer_module_default()).field,
              children: "Legal"
            })]
          })
        })]
      })
    });
  }
};

/* harmony default export */ var components_Footer = ((0,router.withRouter)(Footer));
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(296);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout/index.js







const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Layout_module_default()).layout,
      children: children
    }), /*#__PURE__*/jsx_runtime.jsx(components_Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 80647:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK",
	"field": "Footer_field__3dr6c",
	"footerhome": "Footer_footerhome__129fU"
};


/***/ }),

/***/ 16514:
/***/ (function(module) {

// Exports
module.exports = {
	"outercontainer": "Header_outercontainer__3FJFD",
	"appname": "Header_appname__3KBv0",
	"name": "Header_name__zZ9zt",
	"logo": "Header_logo__2NvDa"
};


/***/ }),

/***/ 296:
/***/ (function(module) {

// Exports
module.exports = {
	"layout": "Layout_layout__23AcS"
};


/***/ }),

/***/ 14453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;