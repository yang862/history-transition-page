!function(e){function n(n){for(var r,i,u=n[0],s=n[1],l=n[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(n);d.length;)d.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunks/"+({2:"vant"}[e]||e)+".a18bb6e0b61faeaaab65.bundle.js"}(e);var s=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="https://yang862.github.io/history-transition-page/",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=s;a.push([13,1]),t()}({13:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(1);console.log("App-----");var a={components:{"history-transition":o.a}},i=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("history-transition",{attrs:{"keep-alive":""}})],1)};i._withStripped=!0;var u=t(8),s=Object(u.a)(a,i,[],!1,null,null,null);s.options.__file="src/transition/App.vue";var l=s.exports,c=t(5);var p={Cart:()=>t.e(4).then(t.bind(null,26)),Home:()=>t.e(5).then(t.bind(null,24)),Usercenter:()=>t.e(7).then(t.bind(null,27)),Detail:()=>t.e(3).then(t.bind(null,28)),List:()=>t.e(6).then(t.bind(null,25)),Message:()=>t.e(8).then(t.bind(null,29))},d=[{path:"/",redirect:"/home/list"},{path:"/home",name:"home",component:p.Home,redirect:"/home/list",meta:{title:"首页",aliveKey:"home"},children:[{path:"list",name:"list",component:p.List},{path:"cart",name:"cart",component:p.Cart,meta:{title:"购物车"}},{path:"usercenter",name:"usercenter",component:p.Usercenter,meta:{title:"我的"}}]},{path:"/detail",name:"detail",component:p.Detail},{path:"/message",name:"message",component:p.Message}];r.a.use(c.a);const h=[...d];var f=new c.a({base:"transition",mode:"history",routes:h}),m=t(2),b=t.n(m),v=t(6),g={insert:"head",singleton:!1};b()(v.a,g),v.a.locals,t(12);r.a.use(o.b,{router:f});const y=t.e(2).then(t.bind(null,23));r.a.use(y),console.log("index entry-----"),new r.a({router:f,render:e=>e(l)}).$mount("#app")},6:function(e,n,t){"use strict";var r=t(3),o=t.n(r)()((function(e){return e[1]}));o.push([e.i,".page {\n  height: 100vh;\n}\n.card {\n  padding: 20px;\n  border-radius: 8px;\n  background: #fff;\n  color: #879eb1;\n  box-shadow: 1px 2px 3px 1px;\n}\n.card * {\n  color: #555;\n}\n",""]),n.a=o}});