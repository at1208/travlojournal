exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 10860:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97510);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2__);






const AuthorInfo = ({
  blog
}) => {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.onscroll = function () {
      myFunction();
    };

    var leftside = document.getElementById("lefttop");

    function myFunction() {
      if (window.pageYOffset > 200) {
        setShow(true);
        leftside.classList.add("fix-left-top");
      } else {
        leftside.classList.remove("fix-left-top");
        setShow(false);
      }

      if (window.pageYOffset > 2000) {
        leftside.classList.remove("fix-left-top");
        setShow(false);
      }
    }
  });

  if (show) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2___default().leftside),
      children: ["WRITTEN BY", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
          className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: blog.postedBy.full_name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
          className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_2___default().aboutauthor)
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})]
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AuthorInfo);

/***/ })

};
;