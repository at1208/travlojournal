(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{3349:function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return o}})},2137:function(t,n,e){"use strict";function o(t,n,e,o,c,r,i){try{var u=t[r](i),a=u.value}catch(s){return void e(s)}u.done?n(a):Promise.resolve(a).then(o,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,r){var i=t.apply(n,e);function u(t){o(i,c,r,u,a,"next",t)}function a(t){o(i,c,r,u,a,"throw",t)}u(void 0)}))}}e.d(n,{Z:function(){return c}})},5991:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,{Z:function(){return c}})},484:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,{Z:function(){return o}})},4301:function(t,n,e){e(6477),t.exports=self.fetch.bind(self)},8975:function(t,n,e){"use strict";e.d(n,{eT:function(){return r},QZ:function(){return i},wM:function(){return u},YT:function(){return a},tu:function(){return s},ZC:function(){return f},vZ:function(){return p}});var o=e(4301),c=e.n(o),r=function(t){return c()("".concat("https://cms.readifly.com/api","/blog/list/domain/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},i=function(){return c()("".concat("https://cms.readifly.com/api","/author/list/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},u=function(t){return c()("".concat("https://cms.readifly.com/api","/blog/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},a=function(){return c()("".concat("https://cms.readifly.com/api","/blog/trending/list/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},s=function(t){return c()("".concat("https://cms.readifly.com/api","/blog/related/list/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},f=function(){return c()("".concat("https://cms.readifly.com/api","/blog/list/sitemap/").concat("60c048a1b9467821193d870b"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},p=function(t){return c()("".concat("https://cms.readifly.com/api","/blog/list/category/").concat("60c048a1b9467821193d870b"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({category:t})}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))}},1954:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return b}});var o=e(7757),c=e.n(o),r=e(2137);function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var u=e(5991);function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var s=e(484),f=e(3349);function p(t,n){return!n||"object"!==(0,s.Z)(n)&&"function"!==typeof n?(0,f.Z)(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=e(7294),d=e(8975);function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=l(t);if(n){var c=l(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return p(this,e)}}var m=function(t){return'<?xml version="1.0" encoding="UTF-8"?>\n    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n        '.concat(t.map((function(t,n){return"\n                    <url>\n                        <loc>".concat("".concat("https://www.travlojournal.com/","/").concat(t.slug),"</loc>\n                        <changefreq>","daily","</changefreq>\n                        <priority>",1,"</priority>\n                        <lastmod>",t.updatedAt,"</lastmod>\n                    </url>\n                ")})).join(""),"\n    </urlset>\n    ")},b=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(e,t);var n=y(e);function e(){return i(this,e),n.apply(this,arguments)}return(0,u.Z)(e,null,[{key:"getInitialProps",value:function(){var t=(0,r.Z)(c().mark((function t(n){var e,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.res,t.next=3,(0,d.ZC)();case 3:o=t.sent,e.setHeader("Content-Type","text/xml"),e.write(m(o)),e.end();case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}]),e}(h.Component)},6477:function(t,n){"use strict";n.Headers=self.Headers,n.Request=self.Request,n.Response=self.Response,n.fetch=self.fetch},2549:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sitemap.xml",function(){return e(1954)}])}},function(t){t.O(0,[774,888,179],(function(){return n=2549,t(t.s=n);var n}));var n=t.O();_N_E=n}]);