/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 63175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./components/Layout/index.js + 2 modules
var Layout = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./components/Blog/Cards/mediumCard.js
var mediumCard = __webpack_require__(86851);
// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-node.js
var fetch_npm_node = __webpack_require__(28530);
var fetch_npm_node_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_node);
;// CONCATENATED MODULE: ./actions/blog.js

const blog_list = data => {
  return fetch(`${"https://cms.readifly.com/api"}/blog/list/domain/${"60c048a1b9467821193d870b"}`, {
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
const author_list = () => {
  return fetch(`${"https://cms.readifly.com/api"}/author/list/${"60c048a1b9467821193d870b"}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const read_blog = slug => {
  return fetch(`${"https://cms.readifly.com/api"}/blog/${slug}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const trending_list = () => {
  return fetch(`${"https://cms.readifly.com/api"}/blog/trending/list/${"60c048a1b9467821193d870b"}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const related_blogs = data => {
  return fetch(`${"https://cms.readifly.com/api"}/blog/related/list/${"60c048a1b9467821193d870b"}`, {
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
const blogs_list_for_sitemap = () => {
  return fetch(`${"https://cms.readifly.com/api"}/blog/list/sitemap/${"60c048a1b9467821193d870b"}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const blogs_list_by_category = data => {
  return fetch_npm_node_default()(`${"https://cms.readifly.com/api"}/blog/list/category/${"60c048a1b9467821193d870b"}`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: data
    })
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
;// CONCATENATED MODULE: ./actions/category.js
const random_categories = () => {
  return fetch(`${"https://cms.readifly.com/api"}/categories/${"60c048a1b9467821193d870b"}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
const category_by_slug = slug => {
  return fetch(`${"https://cms.readifly.com/api"}/category/${"60c048a1b9467821193d870b"}/${slug}`, {
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json();
  }).catch(error => {
    console.log(error);
  });
};
;// CONCATENATED MODULE: ./utils/helpers.js
function capitalize(input) {
  var words = input.split(' ');
  var CapitalizedWords = [];
  words.forEach(element => {
    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return CapitalizedWords.join(' ');
}
;// CONCATENATED MODULE: ./pages/category/[slug].js











const Category = ({
  data,
  router,
  category
}) => {
  if (data && category && category.length) {
    function BlogsByCategory() {
      return data.map((blog, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(mediumCard/* default */.Z, {
          blog: blog
        }, i);
      });
    }

    function HeaderSEO() {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("title", {
          children: [capitalize(category[0].name), " | ", "TravloJournal"]
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          name: "description",
          content: "The content is specific towards the Individual being rather than materialistic entities, How to be a good person, How to attain a good conversation skil, etc"
        }), /*#__PURE__*/jsx_runtime.jsx("link", {
          rel: "canonical",
          href: `${"https://www.travlojournal.com/"}${router.asPath}`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:title",
          content: `The content is specific towards the Individual being rather than materialistic entities | ${"TravloJournal"}`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:description",
          content: "The content is specific towards the Individual being rather than materialistic entities, How to be a good person, How to attain a good conversation skil, etc"
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:type",
          content: "website"
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:url",
          content: `${"https://www.travlojournal.com/"}`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:site_name",
          content: `${"TravloJournal"}`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:image",
          content: `${"TravloJournal"}/artoftalk.svg`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:image:secure_url",
          content: `${"https://www.travlojournal.com/"}/artoftalk.svg`
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "og:image:type",
          content: "image/jpg"
        }), /*#__PURE__*/jsx_runtime.jsx("meta", {
          property: "fb:app_id",
          content: `${process.env.NEXT_PUBLIC_FB_APP_ID}`
        })]
      });
    }

    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [/*#__PURE__*/jsx_runtime.jsx(HeaderSEO, {}), /*#__PURE__*/jsx_runtime.jsx("h1", {
          className: "text-center mb-5",
          children: capitalize(category[0].name)
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row col container",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-3"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-7",
            children: /*#__PURE__*/jsx_runtime.jsx(BlogsByCategory, {})
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-1"
          })]
        })]
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

Category.getInitialProps = ({
  query
}) => {
  return blogs_list_by_category(query.slug).then(async response => {
    let category = await category_by_slug(query.slug);
    return {
      data: response,
      category
    };
  });
};

/* harmony default export */ var _slug_ = ((0,router.withRouter)(Category));

/***/ }),

/***/ 12920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41036);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98648);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env","contents":"NEXT_PUBLIC_SERVER_API=https://cms.readifly.com/api\nNEXT_PUBLIC_GOOGLE_CLIEND_ID=925246663936-5svp6plkujiuarb8i7iuovcf0d38pcqb.apps.googleusercontent.com\nNEXT_PUBLIC_CLIENT_URL=http://localhost:3000\nNEXT_PUBLIC_DOMAIN_ID=60c048a1b9467821193d870b\nNEXT_PUBLIC_APP_NAME=TravloJournal\nNEXT_PUBLIC_DOMAIN=TravloJournal\nNEXT_PUBLIC_DOMAIN_URL=https://www.travlojournal.com/\nNEXT_PUBLIC_PRODUCTION_API=\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(53789)

      const appMod = __webpack_require__(7672)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(63175)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/category/[slug]",
        buildId: "WQ1zrXQtL6UP85i4AsT9g",
        escapedBuildId: "WQ1zrXQtL6UP85i4AsT9g",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"1e7a8fcb4eb183fa27135a63e1a6a390",previewModeSigningKey:"ea4f1b9e7b3bd98bb6a0b08a78ef9399a86edf51b863452e10a5bc111fb78710",previewModeEncryptionKey:"fb3002792b368dd7eaaa18ba5e189a7febac662dadab4c5b01883edc61f41866"}
      })
      
    

/***/ }),

/***/ 64293:
/***/ (function(module) {

module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [399,909,675,846,28,851], function() { return __webpack_require__(12920); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			24: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(399);
/******/ 			__webpack_require__.e(909);
/******/ 			__webpack_require__.e(675);
/******/ 			__webpack_require__.e(846);
/******/ 			__webpack_require__.e(28);
/******/ 			__webpack_require__.e(851);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;