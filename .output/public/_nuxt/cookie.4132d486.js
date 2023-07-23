import{m as u}from"./entry.7aaca005.js";import{a as l,w as m}from"./swiper-vue.6e12f478.js";const d=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function w(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},c=(n||{}).decode||g;let r=0;for(;r<e.length;){const t=e.indexOf("=",r);if(t===-1)break;let a=e.indexOf(";",r);if(a===-1)a=e.length;else if(a<t){r=e.lastIndexOf(";",t-1)+1;continue}const p=e.slice(r,t).trim();if(o[p]===void 0){let s=e.slice(t+1,a).trim();s.codePointAt(0)===34&&(s=s.slice(1,-1)),o[p]=y(s,c)}r=a+1}return o}function f(e,n,o){const i=o||{},c=i.encode||x;if(typeof c!="function")throw new TypeError("option encode is invalid");if(!d.test(e))throw new TypeError("argument name is invalid");const r=c(n);if(r&&!d.test(r))throw new TypeError("argument val is invalid");let t=e+"="+r;if(i.maxAge!==void 0&&i.maxAge!==null){const a=i.maxAge-0;if(Number.isNaN(a)||!Number.isFinite(a))throw new TypeError("option maxAge is invalid");t+="; Max-Age="+Math.floor(a)}if(i.domain){if(!d.test(i.domain))throw new TypeError("option domain is invalid");t+="; Domain="+i.domain}if(i.path){if(!d.test(i.path))throw new TypeError("option path is invalid");t+="; Path="+i.path}if(i.expires){if(!h(i.expires)||Number.isNaN(i.expires.valueOf()))throw new TypeError("option expires is invalid");t+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(t+="; HttpOnly"),i.secure&&(t+="; Secure"),i.priority)switch(typeof i.priority=="string"?i.priority.toLowerCase():i.priority){case"low":t+="; Priority=Low";break;case"medium":t+="; Priority=Medium";break;case"high":t+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:t+="; SameSite=Strict";break;case"lax":t+="; SameSite=Lax";break;case"strict":t+="; SameSite=Strict";break;case"none":t+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return t}function h(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function y(e,n){try{return n(e)}catch{return e}}function g(e){return e.includes("%")?decodeURIComponent(e):e}function x(e){return encodeURIComponent(e)}const S={path:"/",watch:!0,decode:e=>u(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function v(e,n){var r;const o={...S,...n},i=k(o)||{},c=l(i[e]??((r=o.default)==null?void 0:r.call(o)));{const t=()=>{C(e,c.value,o)};o.watch?m(c,t,{deep:o.watch!=="shallow"}):t()}return c}function k(e={}){return w(document.cookie,e)}function b(e,n,o={}){return n==null?f(e,n,{...o,maxAge:-1}):f(e,n,o)}function C(e,n,o={}){document.cookie=b(e,n,o)}export{v as u};