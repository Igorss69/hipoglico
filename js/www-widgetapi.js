(function(){'use strict';var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var u=ba(this);function v(a,b){if(b)a:{var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&r(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(k||"")+"_"+e++,k)}
function c(k,f){this.g=k;r(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=u[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&r(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});
function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)x(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||da});
var ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=fa;
function la(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype}
function oa(){this.i=!1;this.g=null;this.s=void 0;this.l=1;this.o=0;this.h=null}
function pa(a){if(a.i)throw new TypeError("Generator is already running");a.i=!0}
oa.prototype.j=function(a){this.s=a};
function qa(a,b){a.h={U:b,V:!0};a.l=a.o}
oa.prototype.return=function(a){this.h={return:a};this.l=this.o};
function ra(a){this.g=new oa;this.h=a}
function sa(a,b){pa(a.g);var c=a.g.g;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return y(a)}
function ta(a,b,c,d){try{var e=b.call(a.g.g,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.i=!1,e;var k=e.value}catch(f){return a.g.g=null,qa(a.g,f),y(a)}a.g.g=null;d.call(a.g,k);return y(a)}
function y(a){for(;a.g.l;)try{var b=a.h(a.g);if(b)return a.g.i=!1,{value:b.value,done:!1}}catch(c){a.g.s=void 0,qa(a.g,c)}a.g.i=!1;if(a.g.h){b=a.g.h;a.g.h=null;if(b.V)throw b.U;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){pa(a.g);a.g.g?b=ta(a,a.g.g.next,b,a.g.j):(a.g.j(b),b=y(a));return b};
this.throw=function(b){pa(a.g);a.g.g?b=ta(a,a.g.g["throw"],b,a.g.j):(qa(a.g,b),b=y(a));return b};
this.return=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function va(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function k(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(k,e)}
k(a.next())})}
v("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.s=!1;var g=this.j();try{f(g.resolve,g.reject)}catch(h){g.reject(h)}}
function c(){this.g=null}
function d(f){return f instanceof b?f:new b(function(g){g(f)})}
if(a)return a;c.prototype.h=function(f){if(null==this.g){this.g=[];var g=this;this.i(function(){g.l()})}this.g.push(f)};
var e=u.setTimeout;c.prototype.i=function(f){e(f,0)};
c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var g=0;g<f.length;++g){var h=f[g];f[g]=null;try{h()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(f){this.i(function(){throw f;})};
b.prototype.j=function(){function f(l){return function(m){h||(h=!0,l.call(g,m))}}
var g=this,h=!1;return{resolve:f(this.O),reject:f(this.l)}};
b.prototype.O=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.R(f);else{a:switch(typeof f){case "object":var g=null!=f;break a;case "function":g=!0;break a;default:g=!1}g?this.N(f):this.o(f)}};
b.prototype.N=function(f){var g=void 0;try{g=f.then}catch(h){this.l(h);return}"function"==typeof g?this.S(g,f):this.o(f)};
b.prototype.l=function(f){this.B(2,f)};
b.prototype.o=function(f){this.B(1,f)};
b.prototype.B=function(f,g){if(0!=this.h)throw Error("Cannot settle("+f+", "+g+"): Promise already settled in state"+this.h);this.h=f;this.i=g;2===this.h&&this.P();this.D()};
b.prototype.P=function(){var f=this;e(function(){if(f.Z()){var g=u.console;"undefined"!==typeof g&&g.error(f.i)}},1)};
b.prototype.Z=function(){if(this.s)return!1;var f=u.CustomEvent,g=u.Event,h=u.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof g?f=new g("unhandledrejection",{cancelable:!0}):(f=u.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return h(f)};
b.prototype.D=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)k.h(this.g[f]);this.g=null}};
var k=new c;b.prototype.R=function(f){var g=this.j();f.C(g.resolve,g.reject)};
b.prototype.S=function(f,g){var h=this.j();try{f.call(g,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(f,g){function h(n,t){return"function"==typeof n?function(ma){try{l(n(ma))}catch(na){m(na)}}:t}
var l,m,p=new b(function(n,t){l=n;m=t});
this.C(h(f,l),h(g,m));return p};
b.prototype.catch=function(f){return this.then(void 0,f)};
b.prototype.C=function(f,g){function h(){switch(l.h){case 1:f(l.i);break;case 2:g(l.i);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.g?k.h(h):this.g.push(h);this.s=!0};
b.resolve=d;b.reject=function(f){return new b(function(g,h){h(f)})};
b.race=function(f){return new b(function(g,h){for(var l=w(f),m=l.next();!m.done;m=l.next())d(m.value).C(g,h)})};
b.all=function(f){var g=w(f),h=g.next();return h.done?d([]):new b(function(l,m){function p(ma){return function(na){n[ma]=na;t--;0==t&&l(n)}}
var n=[],t=0;do n.push(void 0),t++,d(h.value).C(p(n.length-1),m),h=g.next();while(!h.done)})};
return b});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,k=0;k<e;k++){var f=d[k];if(b.call(c,f,k,d)){b=f;break a}}b=void 0}return b}});
v("WeakMap",function(a){function b(h){this.g=(g+=Math.random()+1).toString();if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!x(h,f)){var l=new c;r(h,f,{value:l})}}
function k(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(2!=m.get(h)||3!=m.get(l))return!1;m.delete(h);m.set(l,4);return!m.has(h)&&4==m.get(l)}catch(p){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var g=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!x(h,f))throw Error("WeakMap key fail: "+h);h[f][this.g]=l;return this};
b.prototype.get=function(h){return d(h)&&x(h,f)?h[f][this.g]:void 0};
b.prototype.has=function(h){return d(h)&&x(h,f)&&x(h[f],this.g)};
b.prototype.delete=function(h){return d(h)&&x(h,f)&&x(h[f],this.g)?delete h[f][this.g]:!1};
return b});
v("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,h){var l=g[1];return ca(function(){if(l){for(;l.head!=g[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(g,h){var l=h&&typeof h;"object"==l||"function"==l?k.has(h)?l=k.get(h):(l=""+ ++f,k.set(h,l)):l="p_"+h;var m=g[0][l];if(m&&x(g[0],l))for(g=0;g<m.length;g++){var p=m[g];if(h!==h&&p.key!==p.key||h===p.key)return{id:l,list:m,index:g,m:p}}return{id:l,list:m,index:-1,m:void 0}}
function e(g){this[0]={};this[1]=b();this.size=0;if(g){g=w(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),h=new a(w([[g,"s"]]));if("s"!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=g||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var k=new WeakMap;e.prototype.set=function(g,h){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this[0][l.id]=[]);l.m?l.m.value=h:(l.m={next:this[1],previous:this[1].previous,head:this[1],key:g,value:h},l.list.push(l.m),this[1].previous.next=l.m,this[1].previous=l.m,this.size++);return this};
e.prototype.delete=function(g){g=d(this,g);return g.m&&g.list?(g.list.splice(g.index,1),g.list.length||delete this[0][g.id],g.m.previous.next=g.m.next,g.m.next.previous=g.m.previous,g.m.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).m};
e.prototype.get=function(g){return(g=d(this,g).m)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,g.call(h,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var f=0;return e});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var k=d[c];if(k===b||Object.is(k,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
function wa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var k=c++;return{value:b(k,a[k]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.values",function(a){return a?a:function(){return wa(this,function(b,c){return c})}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),k=e.next();if(k.done||k.value[0]!=c||k.value[1]!=c)return!1;k=e.next();return k.done||k.value[0]==c||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:e.next().done}catch(f){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(k){return c.call(d,k,k,e)})};
return b});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var z=this||self;function xa(a){var b=ya("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function ya(a){a=a.split(".");for(var b=z,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function za(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function A(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Aa(a){return Object.prototype.hasOwnProperty.call(a,Ba)&&a[Ba]||(a[Ba]=++Ca)}
var Ba="closure_uid_"+(1E9*Math.random()>>>0),Ca=0;function Da(a,b,c){return a.call.apply(a.bind,arguments)}
function Ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){B=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Da:Ea;return B.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Fa(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pa=function(d,e,k){for(var f=Array(arguments.length-2),g=2;g<arguments.length;g++)f[g-2]=arguments[g];return b.prototype[e].apply(d,f)}}
;function Ga(a){z.setTimeout(function(){throw a;},0)}
;var Ha=/&/g,Ia=/</g,Ja=/>/g,Ka=/"/g,La=/'/g,Ma=/\x00/g,Na=/[\x00&<>"']/;var Oa=xa(610401301),Pa=xa(188588736);var D,Qa=z.navigator;D=Qa?Qa.userAgentData||null:null;function Ra(a){return Oa?D?D.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){var b;a:{if(b=z.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)}
;function F(){return Oa?!!D&&0<D.brands.length:!1}
function Sa(){return F()?Ra("Chromium"):(E("Chrome")||E("CriOS"))&&!(F()?0:E("Edge"))||E("Silk")}
;var Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in e&&b.call(c,e[k],k,a)};
function Ua(a,b){b=Ta(a,b);0<=b&&Array.prototype.splice.call(a,b,1)}
function Va(a){return Array.prototype.concat.apply([],arguments)}
function Wa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;var Xa=F()?!1:E("Trident")||E("MSIE");!E("Android")||Sa();Sa();E("Safari")&&(Sa()||(F()?0:E("Coast"))||(F()?0:E("Opera"))||(F()?0:E("Edge"))||(F()?Ra("Microsoft Edge"):E("Edg/"))||F()&&Ra("Opera"));var Ya={},H=null;
function Za(a,b){za(a);void 0===b&&(b=0);if(!H){H={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var k=c.concat(d[e].split(""));Ya[e]=k;for(var f=0;f<k.length;f++){var g=k[f];void 0===H[g]&&(H[g]=f)}}}b=Ya[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=k=0;k<a.length-2;k+=3){var h=a[k],l=a[k+1];g=a[k+2];f=b[h>>2];h=b[(h&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];c[e++]=""+f+h+l+g}f=0;g=d;switch(a.length-k){case 2:f=
a[k+1],g=b[(f&15)<<2]||d;case 1:a=a[k],c[e]=""+b[a>>2]+b[(a&3)<<4|f>>4]+g+d}return c.join("")}
;var $a="undefined"!==typeof Uint8Array,ab=!Xa&&"function"===typeof btoa;var I;I="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var bb=Math.max,cb=bb.apply,db=Object.values({ja:1,ha:2,ga:4,ma:8,la:16,ka:32,ba:64,oa:128,fa:256,ea:512,ia:1024,ca:2048,na:4096,da:8192}),eb;if(db instanceof Array)eb=db;else{for(var fb=w(db),gb,hb=[];!(gb=fb.next()).done;)hb.push(gb.value);eb=hb}cb.call(bb,Math,eb);var J=I?function(a){return a[I]|0}:function(a){return a.g|0},ib=I?function(a){return a[I]}:function(a){return a.g},K=I?function(a,b){a[I]=b}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};var jb={},kb={};function lb(a){return!(!a||"object"!==typeof a||a.g!==kb)}
function L(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var mb;function nb(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=J(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;K(a,d|1);return!0}
Object.freeze(new function(){});
Object.freeze(new function(){});function ob(a){return a.displayName||a.name||"unknown type name"}
function pb(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+za(a)+": "+a);return a}
;var qb;
function rb(a,b,c){null==a&&(a=qb);qb=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=J(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var k=e-1;if(L(c[k])){d|=256;b=k-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}K(a,d);return a}
;function sb(a,b){return tb(b)}
function tb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(nb(a,void 0,0))return}else if($a&&null!=a&&a instanceof Uint8Array){if(ab){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Za(a);return a}}return a}
;function ub(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=nb(a,void 0,0)?void 0:e&&J(a)&2?a:vb(a,b,c,void 0!==d,e);else if(L(a)){var k={},f;for(f in a)k[f]=ub(a[f],b,c,d,e);a=k}else a=b(a,d);return a}}
function vb(a,b,c,d,e){var k=d||c?J(a):0;d=d?!!(k&32):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=ub(a[f],b,c,d,e);c&&c(k,a);return a}
function wb(a){return a.X===jb?a.toJSON():tb(a)}
;function xb(a,b,c){var d=a.A,e=ib(d);if(e&2)throw Error();yb(d,e,b,c);return a}
function yb(a,b,c,d){L(d);var e=b>>14&1023;e=0===e?536870912:e;if(c>=e){var k=b;if(b&256)var f=a[a.length-1];else{if(null==d)return;f=a[e+(+!!(b&512)-1)]={};k|=256}f[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);k!==b&&K(a,k)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function M(a,b,c){if(null!=c&&"string"!==typeof c)throw Error();return xb(a,b,c)}
;function N(a,b,c){this.A=rb(a,b,c)}
N.prototype.toJSON=function(){if(mb)var a=zb(this,this.A,!1);else a=vb(this.A,wb,void 0,void 0,!1),a=zb(this,a,!0);return a};
N.prototype.X=jb;N.prototype.toString=function(){return zb(this,this.A,!1).toString()};
function zb(a,b,c){var d=Pa?void 0:a.constructor.Y;var e=ib(c?a.A:b);a=b.length;if(!a)return b;var k;if(L(c=b[a-1])){a:{var f=c;var g={},h=!1,l;for(l in f){var m=f[l];if(Array.isArray(m)){var p=m;if(nb(m,d,+l)||lb(m)&&0===m.size)m=null;m!=p&&(h=!0)}null!=m?g[l]=m:h=!0}if(h){for(var n in g){f=g;break a}f=null}}f!=c&&(k=!0);a--}for(l=+!!(e&512)-1;0<a;a--){n=a-1;c=b[n];n-=l;if(!(null==c||nb(c,d,n)||lb(c)&&0===c.size))break;var t=!0}if(!k&&!t)return b;b=Array.prototype.slice.call(b,0,a);f&&b.push(f);
return b}
;function Ab(a){this.A=rb(a)}
la(Ab,N);function Bb(a){this.A=rb(a)}
la(Bb,N);function Cb(a,b){return M(a,2,b)}
function Db(a,b){return M(a,3,b)}
function Eb(a,b){return M(a,4,b)}
function Fb(a,b){return M(a,5,b)}
function Gb(a,b){return M(a,9,b)}
function Hb(a,b){var c=a.A,d=ib(c);if(d&2)throw Error();if(null==b)yb(c,d,10);else{if(!Array.isArray(b))throw a=Error(void 0),a.__closure__error__context__984382||(a.__closure__error__context__984382={}),a.__closure__error__context__984382.severity="warning",a;var e=J(b),k=e,f=!!(2&e)||!!(2048&e),g=f||Object.isFrozen(b),h;if(h=!g)h=!1;for(var l=!0,m=!0,p=0;p<b.length;p++){var n=b[p],t=Ab;if(!(n instanceof t))throw Error("Expected instanceof "+ob(t)+" but got "+(n&&ob(n.constructor)));f||(n=!!(J(n.A)&
2),l&&(l=!n),m&&(m=n))}f||(e|=5,e=l?e|8:e&-9,e=m?e|16:e&-17);if(h||g&&e!==k)b=Array.prototype.slice.call(b),k=0,e=(2&d?e|2:e&-3)|32,e&=-2049,32&d||(e&=-33);e!==k&&K(b,e);yb(c,d,10,b)}return a}
function Ib(a,b){return xb(a,11,null==b?b:pb(b))}
function Jb(a,b){return M(a,1,b)}
function Kb(a,b){return xb(a,7,null==b?b:pb(b))}
Bb.Y=[10,6];var Lb="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Mb(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Nb(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Ob(){var a=window;if(!Nb(a))return null;var b=Mb(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Lb).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Pb(a){var b;return Ib(Hb(Fb(Cb(Jb(Eb(Kb(Gb(Db(new Bb,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ab;d=M(d,1,c.brand);return M(d,2,c.version)}))||[]),a.wow64||!1)}
function Qb(){var a,b;return null!=(b=null==(a=Ob())?void 0:a.then(function(c){return Pb(c)}))?b:null}
;function Rb(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Rb.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};function Sb(a){var b=O,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function P(a){this.g=a}
P.prototype.toString=function(){return this.g};
var Tb=new P("about:invalid#zClosurez");function Ub(a){this.W=a}
function Q(a){return new Ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Vb=[Q("data"),Q("http"),Q("https"),Q("mailto"),Q("ftp"),new Ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Wb(a,b){b=void 0===b?Vb:b;if(a instanceof P)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Ub&&d.W(a))return new P(a)}}
function Xb(a){var b=void 0===b?Vb:b;return Wb(a,b)||Tb}
var Yb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Zb(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof P)if(b instanceof P)b=b.g;else throw Error("");else b=Yb.test(b)?b:void 0;void 0!==b&&(a.src=b)}
;function $b(a){Na.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ha,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Ia,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ja,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Ka,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(La,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ma,"&#0;")));return a}
;function ac(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function bc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var cc;function dc(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=ac();e.style.display="none";document.documentElement.appendChild(e);var k=e.contentWindow;e=k.document;e.open();e.close();var f="callImmediate"+Math.random(),g="file:"==k.location.protocol?"*":k.location.protocol+"//"+k.location.host;e=B(function(h){if(("*"==g||h.origin==g)&&h.data==f)this.port1.onmessage()},this);
k.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){k.postMessage(f,g)}}});
if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.I;c.I=null;e()}};
return function(e){d.next={I:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function ec(){this.h=this.g=null}
ec.prototype.add=function(a,b){var c=fc.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
ec.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var fc=new Rb(function(){return new gc},function(a){return a.reset()});
function gc(){this.next=this.scope=this.g=null}
gc.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
gc.prototype.reset=function(){this.next=this.scope=this.g=null};var hc,ic=!1,jc=new ec;function kc(a){hc||lc();ic||(hc(),ic=!0);jc.add(a,void 0)}
function lc(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);hc=function(){a.then(mc)}}else hc=function(){var b=mc;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&z.Window.prototype.setImmediate==z.setImmediate?(cc||(cc=dc()),cc(b)):z.setImmediate(b)}}
function mc(){for(var a;a=jc.remove();){try{a.g.call(a.scope)}catch(c){Ga(c)}var b=fc;b.j(a);100>b.h&&(b.h++,a.next=b.g,b.g=a)}ic=!1}
;function R(){this.i=this.i;this.j=this.j}
R.prototype.i=!1;R.prototype.dispose=function(){this.i||(this.i=!0,this.F())};
R.prototype.addOnDisposeCallback=function(a,b){this.i?void 0!==b?a.call(b):a():(this.j||(this.j=[]),this.j.push(void 0!==b?B(a,b):a))};
R.prototype.F=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function S(a){R.call(this);this.s=1;this.l=[];this.o=0;this.g=[];this.h={};this.B=!!a}
Fa(S,R);q=S.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
function nc(a,b,c){var d=oc;if(a=d.h[a]){var e=d.g;(a=a.find(function(k){return e[k+1]==b&&e[k+2]==c}))&&d.G(a)}}
q.G=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.l.push(a),this.g[a+1]=function(){}):(c&&Ua(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,k=arguments.length;e<k;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var f=c[e];pc(this.g[f+1],this.g[f+2],d)}else{this.o++;try{for(e=0,k=c.length;e<k&&!this.i;e++)f=c[e],this.g[f+1].apply(this.g[f+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.G(c)}}return 0!=e}return!1};
function pc(a,b,c){kc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.G,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.F=function(){S.M.F.call(this);this.clear();this.l.length=0};var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rc(a){var b=a.match(qc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
var uc=/#|$/;var vc=z.window,wc,xc,T=(null==vc?void 0:null==(wc=vc.yt)?void 0:wc.config_)||(null==vc?void 0:null==(xc=vc.ytcfg)?void 0:xc.data_)||{};C("yt.config_",T);function yc(){var a=arguments;1<a.length?T[a[0]]=a[1]:1===a.length&&Object.assign(T,a[0])}
;var zc={};function Ac(a){return zc[a]||(zc[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Bc=0;C("ytDomDomGetNextId",ya("ytDomDomGetNextId")||function(){return++Bc});var Cc=[];function Dc(a){Cc.forEach(function(b){return b(a)})}
function Ec(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(d){var b=d,c=ya("yt.logging.errors.log");c?c(b,"ERROR",void 0,void 0,void 0,void 0,void 0):(c=[],c="ERRORS"in T?T.ERRORS:c,c.push([b,"ERROR",void 0,void 0,void 0,void 0,void 0]),yc("ERRORS",c));Dc(b)}}:a}
;var Fc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function U(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.g=a;for(var b in a)b in Fc||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=
a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
U.prototype.preventDefault=function(){this.g&&(this.g.returnValue=!1,this.g.preventDefault&&this.g.preventDefault())};
U.prototype.stopPropagation=function(){this.g&&(this.g.cancelBubble=!0,this.g.stopPropagation&&this.g.stopPropagation())};
U.prototype.stopImmediatePropagation=function(){this.g&&(this.g.cancelBubble=!0,this.g.stopImmediatePropagation&&this.g.stopImmediatePropagation())};var O=z.ytEventsEventsListeners||{};C("ytEventsEventsListeners",O);var Gc=z.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Gc);
function Hc(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Sb(function(e){var k="boolean"===typeof e[4]&&e[4]==!!d,f;if(f=A(e[4])&&A(d))a:{f=e[4];for(var g in f)if(!(g in d)||f[g]!==d[g]){f=!1;break a}for(var h in d)if(!(h in f)){f=!1;break a}f=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(k||f)})}
function Ic(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Hc(a,b,c,d);if(!e){e=++Gc.count+"";var k=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var f=k?function(g){g=new U(g);if(!bc(g.relatedTarget,function(h){return h==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new U(g);
g.currentTarget=a;return c.call(a,g)};
f=Ec(f);a.addEventListener?("mouseenter"==b&&k?b="mouseover":"mouseleave"==b&&k?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Jc()||"boolean"===typeof d?a.addEventListener(b,f,d):a.addEventListener(b,f,!!d.capture)):a.attachEvent("on"+b,f);O[e]=[a,b,c,f,d]}}}
function Kc(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in O){var c=O[b],d=c[0],e=c[1],k=c[3];c=c[4];d.removeEventListener?Jc()||"boolean"===typeof c?d.removeEventListener(e,k,c):d.removeEventListener(e,k,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,k);delete O[b]}}))}
var Jc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Lc(a){"function"===typeof a&&(a=Ec(a));return window.setInterval(a,250)}
;function Mc(){var a;return va(new ua(new ra(function(b){return(a=Qb())?b.return(a.then(function(c){mb=!0;try{var d=JSON.stringify(c.toJSON(),sb)}finally{mb=!1}c=d;d=[];for(var e=0,k=0;k<c.length;k++){var f=c.charCodeAt(k);255<f&&(d[e++]=f&255,f>>=8);d[e++]=f}return Za(d,3)})):b.return(Promise.resolve(null))})))}
;var V={},Nc=[],oc=new S,Oc={};function Pc(){for(var a=w(Nc),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Qc(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ac(b)]:a.getAttribute("data-"+b):null;return c}
function Rc(a){oc.L.apply(oc,arguments)}
;function Sc(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function W(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Tc(a,b,c){X||(X={},Uc=new Set,Ic(window,"message",function(d){a:if(Uc.has(d.origin)){try{var e=JSON.parse(d.data)}catch(f){break a}var k=X[e.id];k&&d.origin===k.T&&(d=k.aa,d.s=!0,d.s&&(G(d.o,d.sendMessage,d),d.o.length=0),d.H(e))}}));
a=String(W(a,"host"));X[c]={aa:b,T:a};Uc.add(a)}
var X=null,Uc=null;var Vc=window;
function Y(a,b,c){this.l=this.g=this.h=null;this.i=0;this.s=!1;this.o=[];this.j=null;this.D={};if(!a)throw Error("YouTube player element ID required.");this.id=Aa(this);this.B=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?rc(a.src):"https://www.youtube.com"),this.h=new Sc(b),c||(b=Wc(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Aa(this.g)),V[this.g.id]=this,window.postMessage){this.j=
new S;Xc(this);b=W(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Oc)Oc.hasOwnProperty(e)&&Yc(this,e)}}
q=Y.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.H=function(a){Zc(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);$c(this,a);return this};
function Yc(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&$c(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(V[this.g.id]=null);var a=this.j;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.l;var b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);X&&(X[this.id]=null);this.h=null;a=this.g;for(var d in O)O[d][0]==a&&Kc(d);this.l=this.g=null};
q.J=function(){return{}};
function ad(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.o.push(b)}
function Zc(a,b,c){a.j.i||(c={target:a,data:c},a.j.L(b,c),Rc(a.B+"."+b,c))}
function Wc(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var k=b[d].value;null!=k&&""!==k&&"null"!==k&&c.setAttribute(b[d].name,k)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("referrerPolicy","strict-origin-when-cross-origin");c.setAttribute("title","YouTube "+W(a.h,"title"));(b=W(a.h,"width"))&&
c.setAttribute("width",b.toString());(b=W(a.h,"height"))&&c.setAttribute("height",b.toString());var f=a.J();f.enablejsapi=window.postMessage?1:0;window.location.host&&(f.origin=window.location.protocol+"//"+window.location.host);f.widgetid=a.id;window.location.href&&G(["debugjs","debugcss"],function(h){var l=window.location.href;var m=l.search(uc);b:{var p=0;for(var n=h.length;0<=(p=l.indexOf(h,p))&&p<m;){var t=l.charCodeAt(p-1);if(38==t||63==t)if(t=l.charCodeAt(p+n),!t||61==t||38==t||35==t)break b;
p+=n+1}p=-1}if(0>p)l=null;else{n=l.indexOf("&",p);if(0>n||n>m)n=m;p+=h.length+1;l=decodeURIComponent(l.slice(p,-1!==n?n:0).replace(/\+/g," "))}null!==l&&(f[h]=l)});
var g=""+W(a.h,"host")+("/embed/"+W(a.h,"videoId"))+"?"+tc(f);Vc.yt_embedsEnableUaChProbe?Mc().then(function(h){var l=new URL(g),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());h&&l.searchParams.set("uach",h);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());h=Wb(l.href).toString();Zb(c,Xb(h));c.sandbox.add("allow-presentation","allow-top-navigation");return h}):Vc.yt_embedsEnableIframeSrcWithIntent?(Zb(c,Xb(g)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=g;
return c}
q.K=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Xc(a){Tc(a.h,a,a.id);a.i=Lc(a.K.bind(a));Ic(a.g,"load",function(){window.clearInterval(a.i);a.i=Lc(a.K.bind(a))})}
function $c(a,b){a.D[b]||(a.D[b]=!0,ad(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";a=JSON.stringify(a);var b=[rc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var c=0;c<b.length;c++)try{this.g.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&"SyntaxError"===d.name)d.message&&0<d.message.indexOf("target origin ''")||console&&console.warn&&console.warn(d);else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function bd(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function cd(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){Y.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.u={};this.v={};this.videoTitle=""}
la(Z,Y);q=Z.prototype;q.J=function(){var a=W(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=W(this.h,"embedConfig")){if(A(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.H=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(A(a))for(var c in a)a.hasOwnProperty(c)&&(this.u[c]=a[c]);break;case "infoDelivery":dd(this,a);break;case "initialDelivery":A(a)&&(window.clearInterval(this.i),this.v={},this.u={},ed(this,a.apiInterface),dd(this,a));break;default:Zc(this,b,a)}};
function dd(a,b){if(A(b)){for(var c in b)b.hasOwnProperty(c)&&(a.v[c]=b[c]);a.v.hasOwnProperty("videoData")&&(b=a.v.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+W(a.h,"title"))))}}
function ed(a,b){G(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.v.currentTime;if(1===this.v.playerState){var e=(Date.now()/1E3-this.v.currentTimeLastUpdated_)*this.v.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:bd(c)?this[c]=function(){this.v={};
this.u={};ad(this,c,arguments);return this}:cd(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.v[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ad(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=W(this.h,"host")+("/embed/"+W(this.h,"videoId")),b=Number(W(this.h,"width")),c=Number(W(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=$b(a);d=$b(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.u.namespaces?a?this.u[a]?this.u[a].options||[]:[]:this.u.namespaces||[]:[]};
q.getOption=function(a,b){if(this.u.namespaces&&a&&b&&this.u[a])return this.u[a][b]};
function fd(a){if("iframe"!==a.tagName.toLowerCase()){var b=Qc(a,"videoid");b&&(b={videoId:b,width:Qc(a,"width"),height:Qc(a,"height")},new Z(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return V[a]});
C("YT.scan",Pc);C("YT.subscribe",function(a,b,c){oc.subscribe(a,b,c);Oc[a]=!0;for(var d in V)V.hasOwnProperty(d)&&Yc(V[d],a)});
C("YT.unsubscribe",function(a,b,c){nc(a,b,c)});
C("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.getIframe;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Nc.push(function(a){var b=a;b||(b=document);a=Wa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var k={};for(c=d=0;b=e[c];c++){var f=b.className,g;if(g="function"==typeof f.split)g=0<=Ta(f.split(/\s+/),
"yt-player");g&&(k[d++]=b)}k.length=d;b=k}}b=Wa(b);G(Va(a,b),fd)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Pc();var gd=z.onYTReady;gd&&gd();var hd=z.onYouTubeIframeAPIReady;hd&&hd();var id=z.onYouTubePlayerAPIReady;id&&id();}).call(this);
