if(!self.define){let s,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const c=s=>e(s,r),o={module:{uri:r},exports:u,require:c};l[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f3ddde50"],(function(s){"use strict";s.setCacheNameDetails({prefix:"music"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/189.70ee51fd.css",revision:null},{url:"/css/197.6a80668e.css",revision:null},{url:"/css/271.ff385522.css",revision:null},{url:"/css/283.2484c935.css",revision:null},{url:"/css/311.8c508e48.css",revision:null},{url:"/css/414.748fba02.css",revision:null},{url:"/css/46.971a74d2.css",revision:null},{url:"/css/485.b435d547.css",revision:null},{url:"/css/674.8c497c41.css",revision:null},{url:"/css/746.db72146e.css",revision:null},{url:"/css/806.b7c80152.css",revision:null},{url:"/css/891.4aca9158.css",revision:null},{url:"/css/app.014958db.css",revision:null},{url:"/css/chunk-vendors.78fcbd71.css",revision:null},{url:"/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/img/background8.912639c7.jpeg",revision:null},{url:"/img/favicon.png",revision:"95da04e5c26610cbd02e6e953cf9e585"},{url:"/index.html",revision:"29cc36069e3aed86342986fe31c7ef76"},{url:"/js/189.d377509c.js",revision:null},{url:"/js/197.a56c1df1.js",revision:null},{url:"/js/271.2552a444.js",revision:null},{url:"/js/283.2e93cf41.js",revision:null},{url:"/js/311.1d0265c3.js",revision:null},{url:"/js/414.16b534f0.js",revision:null},{url:"/js/46.19fd4f02.js",revision:null},{url:"/js/485.6442bc12.js",revision:null},{url:"/js/674.8822f27e.js",revision:null},{url:"/js/746.eea4b8cf.js",revision:null},{url:"/js/806.86badfbc.js",revision:null},{url:"/js/891.b16137a7.js",revision:null},{url:"/js/app.a3ab516b.js",revision:null},{url:"/js/chunk-vendors.af82705a.js",revision:null},{url:"/manifest.json",revision:"02fa45327ad310579281a7fafd6d43e6"},{url:"/media/夏天的日子.cd797ca9.mp3",revision:null},{url:"/media/带走我的心啊 把它藏在行囊.6697fc8b.mp3",revision:null},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
