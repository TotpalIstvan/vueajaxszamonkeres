(function(e){function t(t){for(var r,o,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vueajaxszamonkeres/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("table",[e._m(0),n("tbody",[e._l(e.statues,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.person))]),n("td",[e._v(e._s(t.height))]),n("td",[e._v(e._s(t.price))]),n("td",[n("button",{on:{click:function(n){return e.torles(t.id)}}},[e._v("Törlés")]),n("button",{on:{click:function(n){return e.szerkesztes(t.id)}}},[e._v("Szerkesztés")])])])})),n("tr")],2)]),n("form",[n("label",[e._v("Személy:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.person,expression:"statue.person"}],attrs:{type:"text"},domProps:{value:e.statue.person},on:{input:function(t){t.target.composing||e.$set(e.statue,"person",t.target.value)}}}),n("br"),n("label",[e._v("Magasság:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.height,expression:"statue.height"}],attrs:{type:"number"},domProps:{value:e.statue.height},on:{input:function(t){t.target.composing||e.$set(e.statue,"height",t.target.value)}}}),n("br"),n("label",[e._v("Ár:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.statue.price,expression:"statue.price"}],attrs:{type:"number"},domProps:{value:e.statue.price},on:{input:function(t){t.target.composing||e.$set(e.statue,"price",t.target.value)}}}),n("br"),e.szerkeszt?e._e():n("button",{on:{click:e.hozzaad}},[e._v("Mentés")]),e.szerkeszt?n("button",{on:{click:e.mentes}},[e._v("Mentés")]):e._e(),n("button",{on:{click:e.megse}},[e._v("Mégse")])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Személy")]),n("th",[e._v("Magasság")]),n("th",[e._v("Ár")]),n("th",[e._v("Műveletek")])])])}],o=n("5530"),u=n("1da1"),i=(n("96cf"),n("d3b7"),n("e9c4"),{name:"App",components:{},data:function(){return{szerkeszt:!1,ment:!1,statue:{id:null,person:"",height:null,price:null},statues:[]}},methods:{loadData:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/statues");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.statues=r;case 7:case"end":return t.stop()}}),t)})))()},torles:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(e),{method:"DELETE"});case 2:return n.next=4,t.loadData();case 4:case"end":return n.stop()}}),n)})))()},hozzaad:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/statues",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.statue)});case 2:return t.next=4,e.loadData();case 4:case"end":return t.stop()}}),t)})))()},szerkesztes:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.szerkeszt=!0,n.next=3,fetch("http://127.0.0.1:8000/api/statues/".concat(e));case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,t.statue=Object(o["a"])({},a);case 8:case"end":return n.stop()}}),n)})))()},reset:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.statue={id:null,person:"",height:null,price:null},e.szerkesz4=!1;case 1:case"end":return t.stop()}}),t)})))()},mentes:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(e.statue.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.statue)});case 2:return t.next=4,e.loadData();case 4:e.ment=!1,e.reset();case 6:case"end":return t.stop()}}),t)})))()},megse:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.reset();case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.loadData()}}),c=i,p=(n("034f"),n("2877")),l=Object(p["a"])(c,a,s,!1,null,null,null),f=l.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.94add71e.js.map