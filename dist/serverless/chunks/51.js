exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 96051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88043);





const GoogleOneTap = () => {
  const handleOnetapResponse = response => {
    (0,_actions_auth__WEBPACK_IMPORTED_MODULE_2__/* .one_tap_login */ .Yl)({
      googleToken: response.credential,
      domain: "60c048a1b9467821193d870b"
    }).then(result => {
      (0,_actions_auth__WEBPACK_IMPORTED_MODULE_2__/* .authenticate */ .YR)(result, () => {
        setIsAuthenticated(true);
      });
    }).catch(err => {
      console.log(err);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(0,_actions_auth__WEBPACK_IMPORTED_MODULE_2__/* .isAuth */ .$D)()) {
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: "925246663936-5svp6plkujiuarb8i7iuovcf0d38pcqb.apps.googleusercontent.com",
          callback: handleOnetapResponse
        });
      };
    }
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleOneTap);

/***/ })

};
;