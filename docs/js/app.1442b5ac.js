(function(t){function e(e){for(var n,c,l=e[0],i=e[1],s=e[2],f=0,d=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==r[i]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=i;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"3f74":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("colors")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"centro",style:t.style},[o("a",{staticClass:"github-corner",attrs:{href:"https://github.com/cesargaldor/Colorgenius","aria-label":"View source on GitHub"}},[o("svg",{staticStyle:{fill:"transparent",color:"#fff",position:"absolute",top:"0",border:"0",left:"0",transform:"scale(-1, 1)"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[o("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),o("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),o("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),o("h1",{staticClass:"color",attrs:{id:"texto"},on:{click:function(e){t.toast(),t.copy()}}},[t._v("#"+t._s(t.resultado))]),o("boton",{on:{click:t.reloadPage}}),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"box"},[o("h5",[t._v("Made with 💙 from Seville")])])])}],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button"},[o("button",{staticClass:"btn",attrs:{onClick:"window.location.reload();"}},[t._v("Get color")])])}],u={name:"boton"},f=u,d=(o("d3f3"),o("2877")),p=Object(d["a"])(f,i,s,!1,null,null,null),h=p.exports,b={name:"colors",components:{boton:h},data:function(){return{resultado:""}},methods:{getColor:function(){for(var t="",e="ABCDEF0123456789",o=e.length,n=0;n<6;n++)t+=e.charAt(Math.floor(Math.random()*o));this.resultado=t},copy:function(){var t=document.getElementById("texto"),e=document.createElement("textarea");e.value=t.textContent,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove()},toast:function(){this.$toasted.show("Copied to the clipboard! 🔥",{type:"info",theme:"bubble",position:"top-right",duration:2e3})}},created:function(){this.getColor()},computed:{style:function(){return{"--colorFondo":"#"+this.resultado}}}},v=b,C=(o("afed"),Object(d["a"])(v,c,l,!1,null,null,null)),m=C.exports,y={name:"app",components:{colors:m}},g=y,_=(o("034f"),Object(d["a"])(g,r,a,!1,null,null,null)),w=_.exports,x=o("a65d"),O=o.n(x);n["a"].use(O.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,o){},afed:function(t,e,o){"use strict";var n=o("3f74"),r=o.n(n);r.a},c3a3:function(t,e,o){},d3f3:function(t,e,o){"use strict";var n=o("c3a3"),r=o.n(n);r.a}});
//# sourceMappingURL=app.1442b5ac.js.map