(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{8043:function(t,e,n){"use strict";n.d(e,{Yl:function(){return i},YR:function(){return l},$D:function(){return s}});var o=n(4301),r=n.n(o),a=n(6808),c=n.n(a),i=function(t){return r()("".concat("https://cms.readifly.com/api","/google/onetap/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},l=function(t,e){var n,o;n="token-".concat("https://www.travlojournal.com/"),o=t.token,c().set(n,o,{expires:1}),function(t,e){localStorage.setItem(t,JSON.stringify(e))}("user-".concat("https://www.travlojournal.com/"),t.user),e()},s=function(){var t;if(t="token-".concat("https://www.travlojournal.com/"),c().get(t))return!!localStorage.getItem("user-".concat("https://www.travlojournal.com/"))&&JSON.parse(localStorage.getItem("user-".concat("https://www.travlojournal.com/")))}},8975:function(t,e,n){"use strict";n.d(e,{eT:function(){return a},QZ:function(){return c},wM:function(){return i},YT:function(){return l},tu:function(){return s},ZC:function(){return u},vZ:function(){return d}});var o=n(4301),r=n.n(o),a=function(t){return r()("".concat("https://cms.readifly.com/api","/blog/list/domain/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},c=function(){return r()("".concat("https://cms.readifly.com/api","/author/list/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},i=function(t){return r()("".concat("https://cms.readifly.com/api","/blog/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},l=function(){return r()("".concat("https://cms.readifly.com/api","/blog/trending/list/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},s=function(t){return r()("".concat("https://cms.readifly.com/api","/blog/related/list/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},u=function(){return r()("".concat("https://cms.readifly.com/api","/blog/list/sitemap/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},d=function(t){return r()("".concat("https://cms.readifly.com/api","/blog/list/category/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({category:t})}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))}},8996:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var o=n(5893),r=n(7294),a=n(6336),c=n.n(a),i=n(8043),l=n(1749),s=function(){var t=(0,r.useState)(),e=(t[0],t[1]),n=(0,r.useState)(!1),a=n[0],s=n[1];(0,r.useEffect)((function(){(0,i.$D)()&&e((0,i.$D)())}),[a]);var u=function(t){(0,i.Yl)({googleToken:t.credential,domain:"60c048a1b9467821193d870b"}).then((function(t){(0,i.YR)(t,(function(){s(!0)}))})).catch((function(t){console.log(t)}))};return(0,r.useEffect)((function(){(0,i.$D)()||(window.onload=function(){google.accounts.id.initialize({client_id:"925246663936-5svp6plkujiuarb8i7iuovcf0d38pcqb.apps.googleusercontent.com",callback:u}),google.accounts.id.prompt()})}),[]),(0,o.jsx)("div",{className:c().outercontainer,children:(0,o.jsx)(l.Z,{container:!0,justify:"space-between",children:(0,o.jsxs)(l.Z,{item:!0,children:[(0,o.jsx)("img",{src:"/travlojournal.svg",className:c().logo,alt:"TravloJournal"}),(0,o.jsx)("span",{className:c().appname,children:"TravloJournal"})]})})})},u=n(2494),d=n.n(u),f=(0,n(1163).withRouter)((function(t){return"/"===t.router.pathname?(0,o.jsx)("div",{className:d().footerhome,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-5"}),(0,o.jsx)("div",{className:"col-7",children:(0,o.jsxs)("div",{className:"row justify-content-end",children:[(0,o.jsx)("span",{className:d().field,children:"About"}),(0,o.jsx)("span",{className:d().field,children:"Help"}),(0,o.jsx)("span",{className:d().field,children:"Legal"})]})})]})}):(0,o.jsx)("div",{className:d().footer,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-5"}),(0,o.jsx)("div",{className:"",children:(0,o.jsxs)("div",{className:"row justify-content-end",children:[(0,o.jsx)("span",{className:d().field,children:"About"}),(0,o.jsx)("span",{className:d().field,children:"Help"}),(0,o.jsx)("span",{className:d().field,children:"Legal"})]})})]})})})),p=n(6276),m=n.n(p),h=function(t){var e=t.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{}),(0,o.jsx)("div",{className:m().layout,children:e}),(0,o.jsx)(f,{})]})}},7999:function(t,e,n){"use strict";var o=n(9713);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(t,e){var n=c.default,o={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};t instanceof Promise?o.loader=function(){return t}:"function"===typeof t?o.loader=t:"object"===typeof t&&(o=a(a({},o),t));(o=a(a({},o),e)).loadableGenerated&&delete(o=a(a({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,l(n,o);delete o.ssr}return n(o)};i(n(7294));var c=i(n(7653));function i(t){return t&&t.__esModule?t:{default:t}}function l(t,e){return delete e.webpack,delete e.modules,t(e)}},519:function(t,e,n){"use strict";var o;e.__esModule=!0,e.LoadableContext=void 0;var r=((o=n(7294))&&o.__esModule?o:{default:o}).default.createContext(null);e.LoadableContext=r},7653:function(t,e,n){"use strict";var o=n(9713),r=n(4575),a=n(3913);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}e.__esModule=!0,e.default=void 0;var u,d=(u=n(7294))&&u.__esModule?u:{default:u},f=n(7161),p=n(519);var m=[],h=[],g=!1;function j(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}var _=function(){function t(e,n){r(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(t,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;e.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){t._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}]),t}();function b(t){return function(t,e){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},e),o=null;function r(){if(!o){var e=new _(t,n);o={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return o.promise()}if(!g&&"function"===typeof n.webpack){var a=n.webpack();h.push((function(t){var e,n=l(a);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(-1!==t.indexOf(o))return r()}}catch(c){n.e(c)}finally{n.f()}}))}var c=function(t,e){r();var a=d.default.useContext(p.LoadableContext),c=(0,f.useSubscription)(o);return d.default.useImperativeHandle(e,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(t){a(t)})),d.default.useMemo((function(){return c.loading||c.error?d.default.createElement(n.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:o.retry}):c.loaded?d.default.createElement(function(t){return t&&t.__esModule?t.default:t}(c.loaded),t):null}),[t,c])};return c.preload=function(){return r()},c.displayName="LoadableComponent",d.default.forwardRef(c)}(j,t)}function y(t,e){for(var n=[];t.length;){var o=t.pop();n.push(o(e))}return Promise.all(n).then((function(){if(t.length)return y(t,e)}))}b.preloadAll=function(){return new Promise((function(t,e){y(m).then(t,e)}))},b.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return g=!0,e()};y(h,t).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var v=b;e.default=v},8377:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var o=n(5893),r=n(7294),a=n(1163),c=n(5152),i=n(5252),l=n.n(i),s=n(8341),u=n.n(s),d=n(1664),f=n(381),p=n.n(f),m=n(2679),h=n(5843),g=(0,c.default)((function(){return n.e(575).then(n.bind(n,2575))}),{ssr:!1,loadableGenerated:{webpack:function(){return[2575]},modules:["../components/Blog/blog.js -> @material-ui/core/Avatar"]}}),j=function(t){var e=t.blog;if(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:l().title,children:e.title}),(0,o.jsx)("section",{className:l().usercontainer,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-8 row",children:[(0,o.jsx)(g,{variant:"circular",src:e.postedBy.headshot_url,alt:"",className:l().authorimg}),(0,o.jsxs)("div",{className:l().authorContainer,children:[(0,o.jsx)("font",{className:l().authorname,children:e.postedBy.full_name}),(0,o.jsxs)("font",{className:l().postedtime,children:[p()(e&&e.createdAt).format("MMM D"),"  . ",h(e&&e.body||" ").text]})]})]}),(0,o.jsx)("div",{className:"col-4"})]})}),(0,o.jsx)("div",{children:(0,o.jsx)(m.LazyLoadImage,{src:e.featureImg,className:"img img-fluid mt-5",width:"100%",height:"100%",alt:"feature image"})}),(0,o.jsx)("div",{className:l().body,children:u()(e.body||" ")}),(0,o.jsx)("div",{className:"row justify-content-center",children:function(){var t=e.categories.map((function(t,e){return(0,o.jsx)(d.default,{href:"/category/".concat(t.slug),children:(0,o.jsx)("a",{children:(0,o.jsx)("span",{className:l().tagcatbtn,children:t.name})})},e)}));return(0,o.jsx)("div",{className:l().extras,children:t})}()})]})}return(0,o.jsx)(o.Fragment,{})},_=n(9008),b=n(4155),y=function(t){return{"@context":"https://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":"".concat("TravloJournal","/").concat(t.slug)},headline:t.title,image:"".concat(b.env.NEXT_PUBLIC_API,"/").concat(t.featureImg),author:{"@type":"Person",name:t.postedBy.full_name},publisher:{"@type":"Organization",name:"TravloJournal.com",logo:{"@type":"ImageObject",url:"https://travlojournal.com/travlojournal.png",width:60,height:60}},datePublished:t.createdAt,dateModified:t.updatedAt}},v=n(4155),x=function(t){var e=t.blog;return(0,o.jsxs)(_.default,{children:[(0,o.jsxs)("title",{children:[e.title," | ","TravloJournal"]}),(0,o.jsx)("meta",{name:"description",content:e.mdesc}),(0,o.jsx)("link",{rel:"canonical",href:"".concat("https://www.travlojournal.com/","/").concat(e.slug)}),(0,o.jsx)("meta",{property:"og:title",content:"".concat(e.title,"| ").concat("TravloJournal")}),(0,o.jsx)("meta",{property:"og:description",content:e.mdesc}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"".concat("https://www.travlojournal.com/","/").concat(e.slug)}),(0,o.jsx)("meta",{property:"og:site_name",content:"".concat("TravloJournal")}),(0,o.jsx)("meta",{property:"og:image",content:e.featureImg}),(0,o.jsx)("meta",{property:"og:image:secure_url",content:e.featureImg}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/jpg",alt:"author"}),(0,o.jsx)("meta",{property:"fb:app_id",content:"".concat(v.env.NEXT_PUBLIC_FB_APP_ID)}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:""}),(0,o.jsx)("meta",{name:"twitter:account_id",content:"1244566301244190720"}),(0,o.jsx)("meta",{name:"twitter:title",content:"".concat(e.title," | ").concat("TravloJournal")}),(0,o.jsx)("meta",{name:"twitter:description",content:e.mdesc}),(0,o.jsx)("meta",{name:"twitter:creator",content:e.postedBy.full_name}),(0,o.jsx)("meta",{name:"twitter:image",content:e.featureImg}),(0,o.jsx)("script",{type:"application/ld+json",defer:!0,dangerouslySetInnerHTML:{__html:JSON.stringify(y(e))}})]})},w=n(8996),O=n(8975),N=(0,c.default)((function(){return n.e(602).then(n.bind(n,7602))}),{ssr:!1,loadableGenerated:{webpack:function(){return[7602]},modules:["[blog].js -> ../components/Blog/relatedBlogs"]}}),T=(0,c.default)((function(){return n.e(860).then(n.bind(n,860))}),{ssr:!1,loadableGenerated:{webpack:function(){return[860]},modules:["[blog].js -> ../components/Blog/authorInfo"]}}),P=(0,c.default)((function(){return n.e(51).then(n.bind(n,6051))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6051]},modules:["[blog].js -> ../components/Blog/googleOneTap"]}}),k=function(t){t.query;var e=t.blog;if(e){var n=(0,r.useState)(!1),a=n[0],c=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{setIsAuthenticated:function(t){return c(t)}}),(0,o.jsx)(x,{blog:e}),(0,o.jsxs)(w.Z,{isAuthenticated:a,children:[(0,o.jsxs)("div",{className:"row col justify-content-center",children:[(0,o.jsx)("div",{className:"col-md-3  col-lg-3 d-lg-block d-xl-block d-none d-md-block d-lg-none",children:(0,o.jsx)("div",{className:"lefttop",id:"lefttop",children:(0,o.jsx)(T,{blog:e})})}),(0,o.jsx)("div",{className:"col-md-7 col-sm-12 col-lg-6",children:(0,o.jsx)(j,{blog:e})}),(0,o.jsx)("div",{className:"col-md-2  col-lg-3"})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{className:l().morecontainer,children:[(0,o.jsx)("h5",{className:l().moretitle,children:"More from TravloJournal"}),(0,o.jsx)("br",{}),(0,o.jsx)("hr",{}),(0,o.jsx)("div",{className:"row col",children:(0,o.jsx)(N,{blog:e})})]})]})]})}return(0,o.jsx)(o.Fragment,{})};k.getInitialProps=function(t){var e=t.query;return(0,O.wM)(e.blog).then((function(t){return{blog:t,query:e}}))};var S=(0,a.withRouter)(k)},9116:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[blog]",function(){return n(8377)}])},5252:function(t){t.exports={title:"Blog_title__1gbdI",body:"Blog_body__2Ovld",authorname:"Blog_authorname__3bQGK",authorContainer:"Blog_authorContainer__2SzuK",authorimg:"Blog_authorimg__3Ly-m",usercontainer:"Blog_usercontainer__NwbUX",leftside:"Blog_leftside___earn",name:"Blog_name__3p26O",aboutauthor:"Blog_aboutauthor__1WDm1",tagcatbtn:"Blog_tagcatbtn__b_ho4",extras:"Blog_extras__2NyPT",morecontainer:"Blog_morecontainer__1i1SW",eachblog:"Blog_eachblog__2v305",moretitle:"Blog_moretitle__2foK8",postedtime:"Blog_postedtime__1hgBu",logo:"Blog_logo__uPPVg"}},2494:function(t){t.exports={footer:"Footer_footer__317iK",field:"Footer_field__3dr6c",footerhome:"Footer_footerhome__129fU"}},6336:function(t){t.exports={outercontainer:"Header_outercontainer__3FJFD",appname:"Header_appname__3KBv0",name:"Header_name__zZ9zt",logo:"Header_logo__2NvDa"}},6276:function(t){t.exports={layout:"Layout_layout__23AcS"}},5152:function(t,e,n){t.exports=n(7999)},2361:function(){},4616:function(){}},function(t){t.O(0,[774,885,481,888,179],(function(){return e=9116,t(t.s=e);var e}));var e=t.O();_N_E=e}]);