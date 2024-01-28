/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:C(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function _(){}var L={};f(L,u,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(T([])));E&&E!==o&&i.call(E,u)&&(L=E);var S=_.prototype=b.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,a,c,u){var s=h(e[o],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,n){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=_,a(S,"constructor",{value:_,configurable:!0}),a(_,"constructor",{value:w,configurable:!0}),w.displayName=f(_,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new q(p(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),f(S,l,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2/",headers:{authorization:"912c0b5f-282d-4e99-a606-8e5b6601427a","Content-Type":"application/json"}},i=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},a=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me",{headers:o.headers}).then((function(t){return console.log(t),i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me",{method:"PATCH",headers:o.headers,body:JSON.stringify({name:r.name,about:r.about})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/users/me/avatar",{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards",{headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards",{method:"POST",headers:o.headers,body:JSON.stringify({name:r.name,link:r.link})}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/".concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/likes/".concat(r),{method:"PUT",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(o.baseUrl+"/cards/likes/".concat(r),{method:"DELETE",headers:o.headers}).then((function(t){return i(t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=document.querySelector("#card-template").content.querySelector(".card"),y=function(t,e,r,n,o){var i=d.cloneNode(!0),a=i.querySelector(".card__image"),c=i.querySelector(".card__title"),u=i.querySelector(".card__delete-button"),s=i.querySelector(".card__like-button"),l=i.querySelector(".card__like-count");return a.setAttribute("src",t.link),a.setAttribute("alt",t.name),c.textContent=t.name,l.textContent=t.likes.length,t.likes.some((function(t){return t._id===e}))&&s.classList.add("card__like-button_is-active"),t.owner._id===e?u.addEventListener("click",(function(e){r(e,t._id)})):u.remove(),s.addEventListener("click",(function(e){n(e,t._id)})),a.addEventListener("click",(function(){o(t)})),i},v=function(t,e){var r=t.target.parentNode.querySelector(".card__like-count");t.target.classList.contains("card__like-button_is-active")?h(e).then((function(e){t.target.classList.remove("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)})):p(e).then((function(e){t.target.classList.add("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(t){console.log(t)}))};function m(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",b)}function g(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",b)}function b(t){"Escape"===t.key&&g(document.querySelector(".popup_is-opened"))}var w=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.textContent="",o.classList.remove(n)},_=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.classList.remove(r),e.disabled=!1):(e.classList.add(r),e.disabled=!0)},L=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector));t.querySelector(e.submitButtonSelector).classList.add(e.inactiveButtonClass),r.forEach((function(r){w(t,r,e.inputErrorClass,e.errorClass),r.setCustomValidity("")}))};function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function b(){}var w={};s(w,a,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(T([])));L&&L!==r&&n.call(L,a)&&(w=L);var S=b.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return g.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},k(q.prototype),s(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function S(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){S(i,n,o,a,c,"next",t)}function c(t){S(i,n,o,a,c,"throw",t)}a(void 0)}))}}var q,C=Array.from(document.querySelectorAll(".popup")),O=document.querySelector(".places__list"),j=document.querySelector(".popup_type_new-card"),P=document.querySelector(".popup_type_edit"),N=document.querySelector(".popup_type_avatar"),T=document.querySelector(".popup_type_confirm"),A=document.forms["edit-profile"],G=document.forms["edit-avatar"],I=document.forms["new-place"],F=document.querySelector(".popup_type_image"),U=F.querySelector(".popup__image"),B=F.querySelector(".popup__caption"),D=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__image"),Y=document.querySelector(".profile__title"),H=document.querySelector(".profile__description"),J=document.querySelector(".profile__image"),V=document.querySelector(".profile__add-button"),z=T.querySelector(".confirm_accept__button"),K=A.querySelector(".popup__button"),Q=G.querySelector(".popup__button"),R=j.querySelector(".popup__button"),W=(I.querySelector(".popup__button"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),X=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"},Z=function(t,e){m(T),T.dataset.cardId=e},$=function(){var t=k(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),X(!1,K),f(T.dataset.cardId).then((function(t){console.log(t),document.querySelector('[data-card-id="'.concat(T.dataset.cardId,'"]')).remove(),ot(),g(T)})).catch((function(t){console.log(t)})).finally((function(){X(!1,K)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();z.addEventListener("click",$);var tt=function(){var t=k(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),X(!0,K),c({name:A.name.value,about:A.description.value}).then((function(t){Y.textContent=t.name,H.textContent=t.about,J.style.backgroundImage="url(".concat(t.avatar,")"),g(P)})).catch((function(t){console.log(t)})).finally((function(){X(!1,K)})),g(P);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();A.addEventListener("submit",tt),D.addEventListener("click",(function(){L(A,W),A.elements.name.value=Y.textContent,A.elements.description.value=H.textContent,m(P)}));var et=function(){var t=k(E().mark((function t(e){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),X(!0,Q),u(G.link.value).then((function(t){Y.textContent=t.name,H.textContent=t.about,J.style.backgroundImage="url(".concat(t.avatar,")"),g(N)})).catch((function(t){console.log(t)})).finally((function(){X(!1,Q)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();G.addEventListener("submit",et),M.addEventListener("click",(function(t){L(G,W),G.reset(),m(N)}));var rt=function(){var t=k(E().mark((function t(e){var r,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),X(!0,R),r=I.elements.name.value,n=I.elements.link.value,l({name:r,link:n}).then((function(t){var e=y(t,q,Z,v,nt);O.prepend(e),g(j)})).catch((function(t){console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function nt(t){U.src=t.link,U.alt=t.name,B.textContent=t.name,m(F)}function ot(){O.innerHTML="",Promise.all([a(),s()]).then((function(t){var e=t[0];q=e._id,Y.textContent=e.name,H.textContent=e.about,J.style.backgroundImage="url(".concat(e.avatar,")"),t[1].forEach((function(t){var e=y(t,q,Z,v,nt);O.append(e)}))})).catch((function(t){console.log(t)}))}I.addEventListener("submit",rt),V.addEventListener("click",(function(){L(I,W),I.reset(),m(j)})),C.forEach((function(t){t.classList.add("popup_is-animated"),t.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_is-opened")&&g(t),e.target.classList.contains("popup__close")&&g(t)}))})),ot(),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);_(r,n,e.inactiveButtonClass),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?w(t,e,r.inputErrorClass,r.errorClass):function(t,e,r,n,o){var i=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n),i.textContent=r,i.classList.add(o)}(t,e,e.validationMessage,r.inputErrorClass,r.errorClass)}(t,o,e),_(r,n,e.inactiveButtonClass)}))}))}(e,t)}))}(W)})();