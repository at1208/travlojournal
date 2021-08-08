exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 86851:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69132);
/* harmony import */ var _styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68341);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72679);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__);







const readingTime = __webpack_require__(45843);





const Card = ({
  blog
}) => {
  if (blog) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: `/${blog.slug}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().outercontainer),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "col-md-8 col-sm-8 col-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().category)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col authorCat",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),
                  children: blog.postedBy.full_name.split(" ")[0]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().in),
                  children: "in"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().categoryname),
                  children: blog.categories[0].name
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
                children: blog.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-none d-sm-block",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().excerpt),
                  children: react_render_html__WEBPACK_IMPORTED_MODULE_4___default()(blog.excerpt)
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
              className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().time),
              children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(blog && blog.createdAt).format("MMM D"), "  . ", readingTime(blog.body || " ").text]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-4 col-sm-4 col-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImage, {
              src: blog.featureImg,
              alt: "",
              className: (_styles_BlogMediumCard_module_css__WEBPACK_IMPORTED_MODULE_6___default().featureImg)
            })
          })]
        })
      })
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (Card);

/***/ }),

/***/ 69132:
/***/ (function(module) {

// Exports
module.exports = {
	"outercontainer": "BlogMediumCard_outercontainer__1Lqkd",
	"category": "BlogMediumCard_category__3hRG6",
	"name": "BlogMediumCard_name__-Txl7",
	"categoryname": "BlogMediumCard_categoryname__JwIoG",
	"in": "BlogMediumCard_in__2Cz0r",
	"time": "BlogMediumCard_time__728VI",
	"title": "BlogMediumCard_title__1k_U5",
	"featureImg": "BlogMediumCard_featureImg__36t6r",
	"col-md-8": "BlogMediumCard_col-md-8__1MWMM",
	"excerpt": "BlogMediumCard_excerpt__2sW5b"
};


/***/ })

};
;