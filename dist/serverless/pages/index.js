/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 24341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/index.js
var core = __webpack_require__(58189);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(47644);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./styles/BlogLargeCard.module.css
var BlogLargeCard_module = __webpack_require__(36369);
var BlogLargeCard_module_default = /*#__PURE__*/__webpack_require__.n(BlogLargeCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(30381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/build/index.js
var build = __webpack_require__(72679);
;// CONCATENATED MODULE: ./components/Blog/Cards/largeCard.js







const readingTime = __webpack_require__(45843);




const Card = ({
  blog
}) => {
  if (blog) {
    return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: `/${blog && blog.slug}`,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (BlogLargeCard_module_default()).outercontainer,
        children: [/*#__PURE__*/jsx_runtime.jsx("a", {
          children: /*#__PURE__*/jsx_runtime.jsx(build.LazyLoadImage, {
            effect: "blur",
            src: blog && blog.featureImg,
            width: "100%",
            height: "100%",
            alt: "",
            className: "img img-fluid"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row pt-3 pr-2 pb-2",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: (BlogLargeCard_module_default()).category
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "col pt-1 authorCat",
            children: [/*#__PURE__*/jsx_runtime.jsx("font", {
              className: (BlogLargeCard_module_default()).name,
              children: blog.postedBy.full_name
            }), /*#__PURE__*/jsx_runtime.jsx("font", {
              className: (BlogLargeCard_module_default()).in,
              children: "in"
            }), /*#__PURE__*/jsx_runtime.jsx("font", {
              className: (BlogLargeCard_module_default()).categoryname,
              children: blog.categories[0].name
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          children: [/*#__PURE__*/jsx_runtime.jsx("section", {
            className: (BlogLargeCard_module_default()).title,
            children: blog.title
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
            className: (BlogLargeCard_module_default()).subheading,
            children: ["Read Top Stories With Author ", blog.postedBy.full_name]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("small", {
          className: (BlogLargeCard_module_default()).time,
          children: [moment_default()(blog.createdAt).format("MMM D"), "  . ", readingTime(blog.body || " ").text]
        }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("br", {})]
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var largeCard = (Card);
// EXTERNAL MODULE: ./styles/BlogSmallCard.module.css
var BlogSmallCard_module = __webpack_require__(44002);
var BlogSmallCard_module_default = /*#__PURE__*/__webpack_require__.n(BlogSmallCard_module);
;// CONCATENATED MODULE: ./components/Blog/Cards/smallCard.js







const smallCard_readingTime = __webpack_require__(45843);



const smallCard_Card = ({
  blog
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
    href: `/${blog && blog.slug}`,
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (BlogSmallCard_module_default()).outercontainer,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-8",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: (BlogSmallCard_module_default()).left,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: (BlogSmallCard_module_default()).category
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "col authorCat",
                children: [/*#__PURE__*/jsx_runtime.jsx("font", {
                  className: (BlogSmallCard_module_default()).name,
                  children: blog && blog.postedBy && blog.postedBy.full_name
                }), /*#__PURE__*/jsx_runtime.jsx("font", {
                  className: (BlogSmallCard_module_default()).in,
                  children: "in"
                }), /*#__PURE__*/jsx_runtime.jsx("font", {
                  className: (BlogSmallCard_module_default()).categoryname,
                  children: blog && blog.categories && blog.categories[0].name
                })]
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("section", {
              className: (BlogSmallCard_module_default()).title,
              children: blog && blog.title
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("small", {
              className: (BlogSmallCard_module_default()).time,
              children: [moment_default()(blog && blog.createdAt).format("MMM D"), "  . ", smallCard_readingTime(blog && blog.body || " ").text]
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "col-4",
          children: /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "float-right",
            children: /*#__PURE__*/jsx_runtime.jsx(build.LazyLoadImage, {
              src: blog && blog.featureImg,
              alt: "",
              className: (BlogSmallCard_module_default()).smallFeatureImage
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var smallCard = (smallCard_Card);
// EXTERNAL MODULE: ./components/Blog/Cards/mediumCard.js
var mediumCard = __webpack_require__(86851);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(22318);
// EXTERNAL MODULE: ./styles/BlogAuthor.module.css
var BlogAuthor_module = __webpack_require__(85119);
var BlogAuthor_module_default = /*#__PURE__*/__webpack_require__.n(BlogAuthor_module);
;// CONCATENATED MODULE: ./components/Core/avatar.js





const avatarStyle = index => {
  if (index % 5 === 0) {
    return {
      backgroundColor: '#FCF0EF',
      width: '60px',
      fontSize: "25px",
      textTransform: "capitalize",
      height: '60px',
      margin: "0px 3px 0px 3px",
      color: '#E66E68',
      borderRadius: '30px'
    };
  } else if (index % 3 === 0) {
    return {
      backgroundColor: '#FFFABB',
      width: '60px',
      fontSize: "25px",
      textTransform: "capitalize",
      height: '60px',
      margin: "0px 3px 0px 3px",
      color: '#FFD502',
      borderRadius: '30px'
    };
  } else if (index % 2 === 0) {
    return {
      backgroundColor: '#CAFFE6',
      width: '60px',
      fontSize: "25px",
      textTransform: "uppercase",
      height: '60px',
      margin: "0px 3px 0px 3px",
      color: '#34F89C',
      borderRadius: '30px'
    };
  } else if (index % 1 === 0) {
    return {
      backgroundColor: '#CAF0FF',
      width: '60px',
      fontSize: "25px",
      margin: "0px 3px 0px 3px",
      textTransform: "capitalize",
      height: '60px',
      color: '#3BC8FF',
      borderRadius: '30px'
    };
  }
};

const AvatarContainer = ({
  name,
  src
}) => {
  let naam = name.split(" ");

  if (name) {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(core.Avatar, {
        style: avatarStyle(name.length),
        variant: "square",
        src: src,
        children: [naam[0][0], naam[1][0]]
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var avatar = (AvatarContainer);
;// CONCATENATED MODULE: ./components/Blog/Cards/authorCard.js




 // import { LazyLoadImage } from 'react-lazy-load-image-component';




const Author = ({
  author
}) => {
  if (author) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "col-3 mb-3 col-sm-3",
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        children: /*#__PURE__*/jsx_runtime.jsx(avatar, {
          name: author.postedBy.full_name,
          src: author.postedBy.headshot_url,
          alt: "",
          className: (BlogAuthor_module_default()).authorImage
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Typography/* default */.Z, {
        noWrap: true,
        className: (BlogAuthor_module_default()).authorname,
        children: author.postedBy.full_name
      })]
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var authorCard = (Author);
// EXTERNAL MODULE: ./styles/TrendingCard.module.css
var TrendingCard_module = __webpack_require__(73723);
var TrendingCard_module_default = /*#__PURE__*/__webpack_require__.n(TrendingCard_module);
;// CONCATENATED MODULE: ./components/Blog/Cards/trendingCard.js







const trendingCard_readingTime = __webpack_require__(45843);



const trendingCard_Card = ({
  blog,
  count
}) => {
  if (blog) {
    return /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
      href: `/${blog.slug}`,
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/jsx_runtime.jsx("div", {
          className: (TrendingCard_module_default()).outercontainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "col-2",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: (TrendingCard_module_default()).count,
                children: ["0", count + 1]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "col-10",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "row ",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: (TrendingCard_module_default()).category
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "col pt-2",
                  children: [/*#__PURE__*/jsx_runtime.jsx("font", {
                    className: (TrendingCard_module_default()).name,
                    children: blog.postedBy.full_name
                  }), /*#__PURE__*/jsx_runtime.jsx("font", {
                    className: (TrendingCard_module_default()).in,
                    children: "in"
                  }), /*#__PURE__*/jsx_runtime.jsx("font", {
                    className: (TrendingCard_module_default()).categoryname,
                    children: blog.categories[0].name
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime.jsx("section", {
                className: (TrendingCard_module_default()).text,
                children: blog.title
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("small", {
                className: (TrendingCard_module_default()).time,
                children: [moment_default()(blog.createdAt).format("MMM D"), "  . ", trendingCard_readingTime(blog.body || " ").text]
              })]
            })]
          })
        })
      })
    });
  } else {
    return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
  }
};

/* harmony default export */ var trendingCard = (trendingCard_Card);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(69215);
;// CONCATENATED MODULE: ./components/Blog/Cards/largeCardSkeleton.js





const LargeCardSkeleton = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "p-4",
    children: [/*#__PURE__*/jsx_runtime.jsx(lib/* Skeleton.Button */.Od.Button, {
      active: true,
      size: 300,
      shape: "rectangle"
    }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx(lib/* Skeleton */.Od, {
      active: true,
      paragraph: {
        rows: 3
      }
    })]
  });
};

/* harmony default export */ var largeCardSkeleton = (LargeCardSkeleton);
;// CONCATENATED MODULE: ./components/Blog/Cards/smallCardSkeleton.js




const SmallCardSkeleton = () => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "row p-2",
    children: /*#__PURE__*/jsx_runtime.jsx(lib/* Skeleton */.Od, {
      active: true,
      paragraph: {
        rows: 3
      }
    })
  });
};

/* harmony default export */ var smallCardSkeleton = (SmallCardSkeleton);
;// CONCATENATED MODULE: ./components/Blog/Cards/authorCardSkeleton.js




const AuthorCardSkeleton = () => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "col-md-3 col-sm-3",
    children: /*#__PURE__*/jsx_runtime.jsx(lib/* Skeleton */.Od, {
      active: true,
      avatar: true
    })
  });
};

/* harmony default export */ var authorCardSkeleton = (AuthorCardSkeleton);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/WbIncandescent.js
var WbIncandescent = __webpack_require__(55028);
// EXTERNAL MODULE: ./components/Layout/index.js + 2 modules
var Layout = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/isomorphic-fetch/fetch-npm-node.js
var fetch_npm_node = __webpack_require__(28530);
var fetch_npm_node_default = /*#__PURE__*/__webpack_require__.n(fetch_npm_node);
;// CONCATENATED MODULE: ./actions/blog.js

const blog_list = data => {
  return fetch_npm_node_default()(`${"https://cms.readifly.com/api"}/blog/list/domain/${"60c048a1b9467821193d870b"}`, {
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
  return fetch_npm_node_default()(`${"https://cms.readifly.com/api"}/author/list/${"60c048a1b9467821193d870b"}`, {
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
  return fetch_npm_node_default()(`${"https://cms.readifly.com/api"}/blog/trending/list/${"60c048a1b9467821193d870b"}`, {
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
;// CONCATENATED MODULE: ./pages/index.js





















const Home = ({
  largeBlogs,
  smallBlogs,
  mediumBlogs
}) => {
  const {
    0: authors,
    1: setAuthors
  } = (0,react.useState)();
  const {
    0: trendingBlogs,
    1: setTrending
  } = (0,react.useState)();
  const {
    0: categories,
    1: setCategories
  } = (0,react.useState)();
  (0,react.useEffect)(() => {
    window.onscroll = function () {
      myFunction();
    };

    var rightside = document.getElementById("rightbottom"); // var sticky = rightside.offsetTop;

    function myFunction() {
      if (window.pageYOffset > 1000) {
        rightside.classList.add("fix-right-bottom");
      } else {
        rightside.classList.remove("fix-right-bottom");
      }
    }
  });
  (0,react.useEffect)(() => {
    author_list().then(response => {
      setAuthors(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  (0,react.useEffect)(() => {
    trending_list().then(response => {
      setTrending(response);
    }).catch(err => {
      console.log(err);
    });
    random_categories().then(response => {
      setCategories(response);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function HeaderSEO() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/jsx_runtime.jsx("title", {
        children: "TravloJournal"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        name: "description",
        content: "Travelogue boasts a fun, exciting, and action-packed travel blog containing a new fun different story in each blog. Types of blog that make you feel you\u2019re in that place."
      }), /*#__PURE__*/jsx_runtime.jsx("link", {
        rel: "canonical",
        href: `${"https://www.travlojournal.com/"}`
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        property: "og:title",
        content: `Travelogue boasts a fun, exciting, and action-packed travel blog containing a new fun different story in each blog. Types of blog that make you feel you’re in that place. | ${"TravloJournal"}`
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        property: "og:description",
        content: "Travelogue boasts a fun, exciting, and action-packed travel blog containing a new fun different story in each blog. Types of blog that make you feel you\u2019re in that place."
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
        content: `${"https://www.travlojournal.com/"}/travlojournal.svg`
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        property: "og:image:secure_url",
        content: `${"https://www.travlojournal.com/"}/travlojournal.svg`
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        property: "og:image:type",
        content: "image/jpg"
      }), /*#__PURE__*/jsx_runtime.jsx("meta", {
        property: "fb:app_id",
        content: `${process.env.NEXT_PUBLIC_FB_APP_ID}`
      })]
    });
  }

  function SmallblogList() {
    if (smallBlogs) {
      return smallBlogs.map((blog, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(smallCard, {
          blog: blog
        }, i);
      });
    } else {
      return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: " "
      });
    }
  }

  function MediumblogList() {
    if (mediumBlogs) {
      return mediumBlogs.map((blog, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(mediumCard/* default */.Z, {
          blog: blog
        }, i);
      });
    } else {
      return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: " "
      });
    }
  }

  function AuthorList() {
    if (authors) {
      return authors.map((author, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(authorCard, {
          author: author
        }, i);
      });
    } else {
      return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: " "
      });
    }
  }

  function TrendingList() {
    if (trendingBlogs) {
      return trendingBlogs.map((blog, i) => {
        return /*#__PURE__*/jsx_runtime.jsx(trendingCard, {
          blog: blog,
          count: i
        }, i);
      });
    } else {
      return /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {});
    }
  }

  function ReadByCategories() {
    if (categories) {
      return categories.map((item, i) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(core.Box, {
          p: 0,
          children: [/*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: `/category/${item.slug}`,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              children: /*#__PURE__*/jsx_runtime.jsx(core.Typography, {
                variant: "body1",
                className: (Home_module_default()).categoryName,
                children: item.name
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("hr", {})]
        }, i);
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(HeaderSEO, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "div-container mb-5",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row col",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-4 col-sm-5 col-lg-4",
            children: largeBlogs ? /*#__PURE__*/jsx_runtime.jsx(largeCard, {
              blog: largeBlogs
            }) : /*#__PURE__*/jsx_runtime.jsx(largeCardSkeleton, {})
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-8 col-sm-7 col-lg-4",
            children: smallBlogs ? /*#__PURE__*/jsx_runtime.jsx(SmallblogList, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/jsx_runtime.jsx(smallCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(smallCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(smallCardSkeleton, {})]
            })
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-12 col-lg-4",
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: (Home_module_default()).rightside,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "row col",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "col-md-6 col-sm-6 col-lg-12",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime.jsx("font", {
                      className: (Home_module_default()).title1,
                      children: "LATEST FROM AUTHORS"
                    }), /*#__PURE__*/jsx_runtime.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime.jsx("br", {}), /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "row col",
                      children: authors ? /*#__PURE__*/jsx_runtime.jsx(AuthorList, {}) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "row col",
                        children: [/*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx(authorCardSkeleton, {})]
                      })
                    }), /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "pl-3",
                      style: {
                        color: "teal"
                      },
                      children: "See more"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "col-md-6 col-sm-6 col-lg-12",
                  children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
                    className: "mt-5",
                    children: [/*#__PURE__*/jsx_runtime.jsx("font", {
                      className: (Home_module_default()).title1,
                      children: "TOPICS TO READ"
                    }), /*#__PURE__*/jsx_runtime.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime.jsx("br", {}), categories ? ReadByCategories() : /*#__PURE__*/jsx_runtime.jsx(smallCardSkeleton, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
                      className: "pl-3",
                      style: {
                        color: "teal"
                      },
                      children: "See more"
                    })]
                  })
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "div-container mt-5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
          className: (Home_module_default()).title3,
          children: [" ", "TRENDING ON TravloJournal"]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "row col",
          children: /*#__PURE__*/jsx_runtime.jsx(TrendingList, {})
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("hr", {}), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "mt-5 div-container",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/jsx_runtime.jsx(MediumblogList, {})
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "col-md-4 d-lg-block d-xl-block d-none d-md-block d-lg-none",
            children: /*#__PURE__*/jsx_runtime.jsx("section", {
              className: "rightbottom",
              id: "rightbottom",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (Home_module_default()).rightContainer,
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: (Home_module_default()).rc,
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    children: /*#__PURE__*/jsx_runtime.jsx(WbIncandescent/* default */.Z, {
                      className: (Home_module_default()).ideaIcon
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("label", {
                    className: (Home_module_default()).exploreText,
                    children: "Explore our IDEAS"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "row col justify-content-center",
                  children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/travlojournal.svg",
                      onClick: () => window.location = "http://travlojournal.com",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/fashiofly.svg",
                      onClick: () => window.location = "http://fashiofly.com",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/artoftalk.svg",
                      onClick: () => window.location = "http://artoftalk.in",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/elitegamezone.svg",
                      onClick: () => window.location = "http://elitegamezone.com",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/vedifly.svg",
                      onClick: () => window.location = "http://vedifly.com",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/scientifly.svg",
                      onClick: () => window.location = "http://scientifly.com",
                      className: (Home_module_default()).logo
                    })
                  }), /*#__PURE__*/jsx_runtime.jsx("div", {
                    className: "col-md-5 col-sm-5 col-lg-5 col-6 p-2",
                    children: /*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/geeksocean.svg",
                      onClick: () => window.location = "http://geeksocean.com",
                      className: (Home_module_default()).logo
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Help"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Careers"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Privacy"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Terms"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "About"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Contact"
                  }), /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: (Home_module_default()).field,
                    children: "Sponsor"
                  })]
                })]
              })
            })
          })]
        })
      })]
    })]
  });
};

Home.getInitialProps = async () => {
  try {
    let blog = await blog_list();
    let largeBlogs = blog && blog[0];
    let smallBlogs = blog && blog.slice(1, 5);
    let mediumBlogs = blog && blog.slice(5);
    return {
      largeBlogs,
      smallBlogs,
      mediumBlogs
    };
  } catch (e) {
    return {
      error: e
    };
  }
};

/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 7327:
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

      const compMod = __webpack_require__(24341)

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
        page: "/",
        buildId: "WQ1zrXQtL6UP85i4AsT9g",
        escapedBuildId: "WQ1zrXQtL6UP85i4AsT9g",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"1e7a8fcb4eb183fa27135a63e1a6a390",previewModeSigningKey:"ea4f1b9e7b3bd98bb6a0b08a78ef9399a86edf51b863452e10a5bc111fb78710",previewModeEncryptionKey:"fb3002792b368dd7eaaa18ba5e189a7febac662dadab4c5b01883edc61f41866"}
      })
      
    

/***/ }),

/***/ 85119:
/***/ (function(module) {

// Exports
module.exports = {
	"authorImage": "BlogAuthor_authorImage__2cqD_",
	"authorname": "BlogAuthor_authorname__3K6gV"
};


/***/ }),

/***/ 36369:
/***/ (function(module) {

// Exports
module.exports = {
	"outercontainer": "BlogLargeCard_outercontainer__24ogo",
	"title": "BlogLargeCard_title__1Nvnx",
	"category": "BlogLargeCard_category__kYpOA",
	"name": "BlogLargeCard_name__2r3Mg",
	"categoryname": "BlogLargeCard_categoryname__2vd3e",
	"in": "BlogLargeCard_in__39dd1",
	"subheading": "BlogLargeCard_subheading__3Z6Yz",
	"time": "BlogLargeCard_time__3_7qY"
};


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


/***/ }),

/***/ 47644:
/***/ (function(module) {

// Exports
module.exports = {
	"rightside": "Home_rightside__2hk2Y",
	"title1": "Home_title1__1GAyz",
	"title3": "Home_title3__3zwS9",
	"rightContainer": "Home_rightContainer__2tIzE",
	"field": "Home_field__kO8UY",
	"categoryName": "Home_categoryName__3Miy1",
	"exploreText": "Home_exploreText__3AcQB",
	"rc": "Home_rc__3cylE",
	"ideaIcon": "Home_ideaIcon__2EATY",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ 73723:
/***/ (function(module) {

// Exports
module.exports = {
	"title": "TrendingCard_title__nxvkN",
	"subheading": "TrendingCard_subheading__yHzeJ",
	"time": "TrendingCard_time__Fxq_r",
	"outercontainer": "TrendingCard_outercontainer__3Vtpj",
	"name": "TrendingCard_name__26IUV",
	"categoryname": "TrendingCard_categoryname__M730w",
	"in": "TrendingCard_in__PnPYW",
	"text": "TrendingCard_text__1nC5P",
	"count": "TrendingCard_count__O0JOw"
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [399,909,675,902,846,28,851], function() { return __webpack_require__(7327); })
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
/******/ 			405: 1
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
/******/ 			__webpack_require__.e(675);
/******/ 			__webpack_require__.e(902);
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