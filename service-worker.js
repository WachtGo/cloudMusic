if(!self.define){let s,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>e(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-07656296"],(function(s){"use strict";s.setCacheNameDetails({prefix:"music"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/10.46425c04.css",revision:null},{url:"/css/176.8c497c41.css",revision:null},{url:"/css/179.0a3d7226.css",revision:null},{url:"/css/184.4c6d676e.css",revision:null},{url:"/css/276.43aaefda.css",revision:null},{url:"/css/283.2484c935.css",revision:null},{url:"/css/59.45b58f1e.css",revision:null},{url:"/css/746.db72146e.css",revision:null},{url:"/css/763.4a0ca7cb.css",revision:null},{url:"/css/822.83e37e17.css",revision:null},{url:"/css/859.293d7c65.css",revision:null},{url:"/css/965.d1d73fd9.css",revision:null},{url:"/css/app.f565e9bf.css",revision:null},{url:"/css/chunk-vendors.78fcbd71.css",revision:null},{url:"/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/img/background8.912639c7.jpeg",revision:null},{url:"/img/favicon.png",revision:"95da04e5c26610cbd02e6e953cf9e585"},{url:"/index.html",revision:"d9eb8c873eaccdb82f4475821b2b4f6e"},{url:"/js/10.d4811ce5.js",revision:null},{url:"/js/176.41b003f8.js",revision:null},{url:"/js/179.4c0f8f83.js",revision:null},{url:"/js/184.6348264a.js",revision:null},{url:"/js/276.349406e0.js",revision:null},{url:"/js/283.2e93cf41.js",revision:null},{url:"/js/59.313bcd89.js",revision:null},{url:"/js/746.39e3a94c.js",revision:null},{url:"/js/763.f5b9fc12.js",revision:null},{url:"/js/822.983a6fbf.js",revision:null},{url:"/js/859.6c5f3f97.js",revision:null},{url:"/js/965.e0a91468.js",revision:null},{url:"/js/app.4d07dcd4.js",revision:null},{url:"/js/chunk-vendors.8a0d16e5.js",revision:null},{url:"/manifest.json",revision:"02fa45327ad310579281a7fafd6d43e6"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
