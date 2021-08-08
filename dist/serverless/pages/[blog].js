/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 48975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wM": function() { return /* binding */ read_blog; },
/* harmony export */   "tu": function() { return /* binding */ related_blogs; }
/* harmony export */ });
/* unused harmony exports blog_list, author_list, trending_list, blogs_list_for_sitemap, blogs_list_by_category */
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28530);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${"https://cms.readifly.com/api"}/blog/${slug}`, {
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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${"https://cms.readifly.com/api"}/blog/related/list/${"60c048a1b9467821193d870b"}`, {
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
  return fetch(`${"https://cms.readifly.com/api"}/blog/list/category/${"60c048a1b9467821193d870b"}`, {
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

/***/ }),

/***/ 58377:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _blog_; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./styles/Blog.module.css
var Blog_module = __webpack_require__(97510);
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);
// EXTERNAL MODULE: ./node_modules/react-render-html/index.js
var react_render_html = __webpack_require__(68341);
var react_render_html_default = /*#__PURE__*/__webpack_require__.n(react_render_html);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/build/index.js
var build = __webpack_require__(72679);
;// CONCATENATED MODULE: ./components/Blog/blog.js









const readingTime = __webpack_require__(45843);


const Avatar = (0,dynamic.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 62682)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(62682)],
    modules: ["../components/Blog/blog.js -> " + '@material-ui/core/Avatar']
  }
});

const Blog = ({
  blog
}) => {
  if (blog) {
    const showAuthor = () => {
      return /*#__PURE__*/jsx_runtime.jsx("section", {
        className: (Blog_module_default()).usercontainer,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "col-8 row",
            children: [/*#__PURE__*/jsx_runtime.jsx(Avatar, {
              variant: "circular",
              src: blog.postedBy.headshot_url,
              alt: "",
              className: (Blog_module_default()).authorimg
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: (Blog_module_default()).authorContainer,
              children: [/*#__PURE__*/jsx_runtime.jsx("font", {
                className: (Blog_module_default()).authorname,
                children: blog.postedBy.full_name
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("font", {
                className: (Blog_module_default()).postedtime,
                children: [moment_default()(blog && blog.createdAt).format("MMM D"), "  . ", readingTime(blog && blog.body || " ").text]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-4"
          })]
        })
      });
    };

    const showCategories = () => {
      let categories = blog.categories.map((category, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: `/category/${category.slug}`,
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            children: /*#__PURE__*/jsx_runtime.jsx("span", {
              className: (Blog_module_default()).tagcatbtn,
              children: category.name
            })
          })
        }, i);
      });
      return /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (Blog_module_default()).extras,
        children: categories
      });
    };

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
        className: (Blog_module_default()).title,
        children: blog.title
      }), showAuthor(), /*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx(build.LazyLoadImage, {
          src: blog.featureImg,
          className: "img img-fluid mt-5",
          width: "100%",
          height: "100%",
          alt: "feature image"
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: (Blog_module_default()).body,
        children: react_render_html_default()(blog.body || " ")
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "row justify-content-center",
        children: showCategories()
      })]
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var Blog_blog = (Blog);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/Blog/blogSchema.js
const BlogSchema = blog => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${"TravloJournal"}/${blog.slug}`
    },
    "headline": blog.title,
    "image": `${process.env.NEXT_PUBLIC_API}/${blog.featureImg}`,
    "author": {
      "@type": "Person",
      "name": blog.postedBy.full_name
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravloJournal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travlojournal.com/travlojournal.png",
        "width": 60,
        "height": 60
      }
    },
    "datePublished": blog.createdAt,
    "dateModified": blog.updatedAt
  };
};

/* harmony default export */ var blogSchema = (BlogSchema);
;// CONCATENATED MODULE: ./components/Blog/blogHead.js





const BlogHead = ({
  blog
}) => /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("title", {
    children: [blog.title, " | ", "TravloJournal"]
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "description",
    content: blog.mdesc
  }), /*#__PURE__*/jsx_runtime.jsx("link", {
    rel: "canonical",
    href: `${"https://www.travlojournal.com/"}/${blog.slug}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:title",
    content: `${blog.title}| ${"TravloJournal"}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:description",
    content: blog.mdesc
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:url",
    content: `${"https://www.travlojournal.com/"}/${blog.slug}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:site_name",
    content: `${"TravloJournal"}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:image",
    content: blog.featureImg
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:image:secure_url",
    content: blog.featureImg
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "og:image:type",
    content: "image/jpg",
    alt: "author"
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    property: "fb:app_id",
    content: `${process.env.NEXT_PUBLIC_FB_APP_ID}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:site",
    content: ""
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:account_id",
    content: "1244566301244190720"
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:title",
    content: `${blog.title} | ${"TravloJournal"}`
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:description",
    content: blog.mdesc
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:creator",
    content: blog.postedBy.full_name
  }), /*#__PURE__*/jsx_runtime.jsx("meta", {
    name: "twitter:image",
    content: blog.featureImg
  }), /*#__PURE__*/jsx_runtime.jsx("script", {
    type: "application/ld+json",
    defer: true,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(blogSchema(blog))
    }
  })]
});

/* harmony default export */ var blogHead = (BlogHead);
// EXTERNAL MODULE: ./components/Layout/index.js + 2 modules
var Layout = __webpack_require__(78996);
// EXTERNAL MODULE: ./actions/blog.js
var blog = __webpack_require__(48975);
;// CONCATENATED MODULE: ./pages/[blog].js












const RelatedBlogs = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 602).then(__webpack_require__.bind(__webpack_require__, 57602)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(57602)],
    modules: ["[blog].js -> " + "../components/Blog/relatedBlogs"]
  }
});
const AuthorInfo = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 860).then(__webpack_require__.bind(__webpack_require__, 10860)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(10860)],
    modules: ["[blog].js -> " + "../components/Blog/authorInfo"]
  }
});
const GoogleOneTap = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(__webpack_require__, 96051)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(96051)],
    modules: ["[blog].js -> " + "../components/Blog/googleOneTap"]
  }
});

const _blog_Blog = ({
  query,
  blog
}) => {
  if (blog) {
    const {
      0: isAuthenticated,
      1: setIsAuthenticated
    } = (0,react.useState)(false);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx(GoogleOneTap, {
        setIsAuthenticated: status => setIsAuthenticated(status)
      }), /*#__PURE__*/jsx_runtime.jsx(blogHead, {
        blog: blog
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        isAuthenticated: isAuthenticated,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row col justify-content-center",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-3  col-lg-3 d-lg-block d-xl-block d-none d-md-block d-lg-none",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "lefttop",
              id: "lefttop",
              children: /*#__PURE__*/jsx_runtime.jsx(AuthorInfo, {
                blog: blog
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-7 col-sm-12 col-lg-6",
            children: /*#__PURE__*/jsx_runtime.jsx(Blog_blog, {
              blog: blog
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-2  col-lg-3"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (Blog_module_default()).morecontainer,
          children: [/*#__PURE__*/jsx_runtime.jsx("h5", {
            className: (Blog_module_default()).moretitle,
            children: "More from TravloJournal"
          }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("hr", {}), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "row col",
            children: /*#__PURE__*/jsx_runtime.jsx(RelatedBlogs, {
              blog: blog
            })
          })]
        })]
      })]
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

_blog_Blog.getInitialProps = ({
  query
}) => {
  return (0,blog/* read_blog */.wM)(query.blog).then(response => {
    return {
      blog: response,
      query
    };
  });
};

/* harmony default export */ var _blog_ = ((0,router.withRouter)(_blog_Blog));

/***/ }),

/***/ 44124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

      const compMod = __webpack_require__(58377)

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
        page: "/[blog]",
        buildId: "WQ1zrXQtL6UP85i4AsT9g",
        escapedBuildId: "WQ1zrXQtL6UP85i4AsT9g",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"1e7a8fcb4eb183fa27135a63e1a6a390",previewModeSigningKey:"ea4f1b9e7b3bd98bb6a0b08a78ef9399a86edf51b863452e10a5bc111fb78710",previewModeEncryptionKey:"fb3002792b368dd7eaaa18ba5e189a7febac662dadab4c5b01883edc61f41866"}
      })
      
    

/***/ }),

/***/ 97510:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "Blog_title__1gbdI",
	"body": "Blog_body__2Ovld",
	"authorname": "Blog_authorname__3bQGK",
	"authorContainer": "Blog_authorContainer__2SzuK",
	"authorimg": "Blog_authorimg__3Ly-m",
	"usercontainer": "Blog_usercontainer__NwbUX",
	"leftside": "Blog_leftside___earn",
	"name": "Blog_name__3p26O",
	"aboutauthor": "Blog_aboutauthor__1WDm1",
	"tagcatbtn": "Blog_tagcatbtn__b_ho4",
	"extras": "Blog_extras__2NyPT",
	"morecontainer": "Blog_morecontainer__1i1SW",
	"eachblog": "Blog_eachblog__2v305",
	"moretitle": "Blog_moretitle__2foK8",
	"postedtime": "Blog_postedtime__1hgBu",
	"logo": "Blog_logo__uPPVg"
};


/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [399,909,152,846,28], function() { return __webpack_require__(44124); })
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
/******/ 			606: 1
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
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(152);
/******/ 			__webpack_require__.e(846);
/******/ 			__webpack_require__.e(28);
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