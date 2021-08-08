exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 6145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44002);
/* harmony import */ var _styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72679);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);







const readingTime = __webpack_require__(45843);



const Card = ({
  blog
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: `/${blog && blog.slug}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().outercontainer),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().category)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col authorCat",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
                  children: blog && blog.postedBy && blog.postedBy.full_name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().in),
                  children: "in"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                  className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryname),
                  children: blog && blog.categories && blog.categories[0].name
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
              className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
              children: blog && blog.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
              className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().time),
              children: [moment__WEBPACK_IMPORTED_MODULE_4___default()(blog && blog.createdAt).format("MMM D"), "  . ", readingTime(blog && blog.body || " ").text]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "float-right",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
              src: blog && blog.featureImg,
              alt: "",
              className: (_styles_BlogSmallCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().smallFeatureImage)
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ 44002:
/***/ (function(module) {

// Exports
module.exports = {
	"outercontainer": "BlogSmallCard_outercontainer__1u2hD",
	"category": "BlogSmallCard_category__3OQuY",
	"left": "BlogSmallCard_left__1610c",
	"name": "BlogSmallCard_name__33pv3",
	"categoryname": "BlogSmallCard_categoryname__1tgpA",
	"in": "BlogSmallCard_in__3-ExU",
	"title": "BlogSmallCard_title__2hcTo",
	"time": "BlogSmallCard_time__LKkKs",
	"smallFeatureImage": "BlogSmallCard_smallFeatureImage__1cRXe"
};


/***/ })

};
;