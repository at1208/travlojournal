exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 57602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48975);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97510);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4__);






const BlogSmallCard = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(675), __webpack_require__.e(145)]).then(__webpack_require__.bind(__webpack_require__, 6145)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6145)],
    modules: ["../components/Blog/relatedBlogs.js -> " + './Cards/smallCard']
  }
});

const RelatedBlogs = ({
  blog
}) => {
  const {
    0: relatedBlogList,
    1: setRelatedBlogList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_actions_blog__WEBPACK_IMPORTED_MODULE_2__/* .related_blogs */ .tu)({
      blog: blog
    }).then(value => {
      setRelatedBlogList(value);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function RelatedBlogListComponent() {
    if (relatedBlogList) {
      return relatedBlogList.map((eachblog, i) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-4 col-sm-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_4___default().eachblog),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BlogSmallCard, {
              blog: eachblog
            }, i)
          })
        }, i);
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RelatedBlogListComponent, {})
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RelatedBlogs);

/***/ })

};
;