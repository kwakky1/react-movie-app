(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),a=n.n(s),i=n(14),r=n.n(i),o=(n(22),n(4)),l=n.n(o),j=n(15),u=n(5),m=n(16),d=n.n(m),b=(n(42),function(e){return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{src:e.poster,alt:e.title}),Object(c.jsxs)("div",{className:"movie__data",children:[Object(c.jsx)("h3",{className:"movie__title",children:e.title}),Object(c.jsx)("h5",{className:"movie__year",children:e.year}),Object(c.jsxs)("h3",{children:[e.summary.slice(0,180),"..."]}),Object(c.jsx)("ul",{className:"movie__genres",children:e.genres.map((function(e,t){return Object(c.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})});n(43);var h=function(){var e=Object(s.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)([]),r=Object(u.a)(i,2),o=r[0],m=r[1];Object(s.useEffect)((function(){h()}),[]);var h=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating").then((function(e){m(e.data.data.movies),console.log(e.data.data.movies),a(!1)})).catch((function(e){alert("\uc544\ub798\uc640 \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.\n ".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("div",{className:"loader",children:n?Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(c.jsx)("div",{className:"movies",children:o.map((function(e){return Object(c.jsx)(b,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.1e4de0bf.chunk.js.map