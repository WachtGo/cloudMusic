if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>l(s,r),o={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"music"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/229.bb4d2406.css",revision:null},{url:"/css/337.2484c935.css",revision:null},{url:"/css/391.c9a3e61d.css",revision:null},{url:"/css/400.84472f63.css",revision:null},{url:"/css/459.82e1a204.css",revision:null},{url:"/css/534.c39cecd1.css",revision:null},{url:"/css/558.008dfb6a.css",revision:null},{url:"/css/605.0d52b748.css",revision:null},{url:"/css/app.d0aa8312.css",revision:null},{url:"/css/chunk-vendors.78fcbd71.css",revision:null},{url:"/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/img/background8.912639c7.jpeg",revision:null},{url:"/img/favicon.png",revision:"95da04e5c26610cbd02e6e953cf9e585"},{url:"/index.html",revision:"307fda3c07faae509cc302b06809a0f8"},{url:"/js/229.0f206ce1.js",revision:null},{url:"/js/337.55d5c327.js",revision:null},{url:"/js/391.ebf25913.js",revision:null},{url:"/js/400.fd8adc1d.js",revision:null},{url:"/js/459.d6c46122.js",revision:null},{url:"/js/534.0e7457f9.js",revision:null},{url:"/js/558.244f5d79.js",revision:null},{url:"/js/605.5ca4ed01.js",revision:null},{url:"/js/app.8fc759cf.js",revision:null},{url:"/js/chunk-vendors.f27b2cd2.js",revision:null},{url:"/manifest.json",revision:"02fa45327ad310579281a7fafd6d43e6"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
