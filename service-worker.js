if(!self.define){let s,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>e(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"music"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/227.a0af13e8.css",revision:null},{url:"/css/290.a87ae344.css",revision:null},{url:"/css/405.2484c935.css",revision:null},{url:"/css/475.4f4db031.css",revision:null},{url:"/css/486.c731b2da.css",revision:null},{url:"/css/593.50ddf0e9.css",revision:null},{url:"/css/709.dbbb12a1.css",revision:null},{url:"/css/817.65a62017.css",revision:null},{url:"/css/871.93edf2ff.css",revision:null},{url:"/css/app.60e81d7c.css",revision:null},{url:"/css/chunk-vendors.78fcbd71.css",revision:null},{url:"/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/img/background8.912639c7.jpeg",revision:null},{url:"/index.html",revision:"b25aca2a4a043d90c33e839733b0617e"},{url:"/js/227.89c33db5.js",revision:null},{url:"/js/290.6749d263.js",revision:null},{url:"/js/405.2efd8414.js",revision:null},{url:"/js/475.66e609d5.js",revision:null},{url:"/js/486.ffeaf3b4.js",revision:null},{url:"/js/593.441fc090.js",revision:null},{url:"/js/709.f218fd72.js",revision:null},{url:"/js/817.4d0c039f.js",revision:null},{url:"/js/871.c456704f.js",revision:null},{url:"/js/app.794c9b7c.js",revision:null},{url:"/js/canvas.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/js/chunk-vendors.f07fcc5d.js",revision:null},{url:"/manifest.json",revision:"02fa45327ad310579281a7fafd6d43e6"}],{})}));
