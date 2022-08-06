(function(){"use strict";var e={801:function(e,t,n){n.d(t,{Li:function(){return O},km:function(){return x},Kl:function(){return c},PB:function(){return v},Hv:function(){return u},lw:function(){return w},pZ:function(){return b},Wv:function(){return y},zW:function(){return g},rO:function(){return a},F7:function(){return L},dn:function(){return _},Rf:function(){return P},UV:function(){return T},Lp:function(){return f},t7:function(){return m},vw:function(){return p},mq:function(){return d},gZ:function(){return h},qf:function(){return C},kS:function(){return S},cy:function(){return $},V4:function(){return k},vJ:function(){return l}});var i=n(6265),r=n.n(i);const s=r().create({baseURL:"https://cloud-music-isntafzhs-wachtgo.vercel.app/",changeOrigin:!0});var o=s;const a=()=>o.get("/search/default"),c=()=>o.get("/search/hot/detail"),u=e=>o.get(`cloudsearch?keywords=${e.keywords}&limit=${e.limit}&offset=${e.offset}&type=${e.type}`),l=e=>o.get(`song/url?id=${e.id}`),d=e=>o.get(`lyric?id=${e.id}`),m=e=>o.get(`/song/detail?ids=${e.ids}`),f=e=>o.get(`/comment/music?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),h=e=>o.get(`/personalized?limit=${e.limit}`),p=e=>o.get(`/playlist/detail?id=${e.id}`),g=e=>o.get(`/comment/playlist?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),v=e=>o.get(`mv/url?id=${e.id}`),y=e=>o.get(`/mv/first?limit=${e.limit}`),w=e=>o.get(`/mv/detail/info?mvid=${e.id}`),b=e=>o.get(`/mv/detail/?mvid=${e.id}`),k=e=>o.get(`/comment/mv?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),S=e=>o.get(`/video/detail?id=${e.id}`),$=e=>o.get(`/video/url?id=${e.id}`),C=e=>o.get(`/comment/video?id=${e.id}&limit=${e.limit}&offset=${e.offset}`),_=e=>o.get(`/artists/desc?id=${e.id}`),T=e=>o.get(`/artists?id=${e.id}`),P=e=>o.get(`/artist/mv?id=${e.id}`);function L(e){return o({url:"/artist/album",method:"get",params:e})}const x=e=>o.post(`/song/download/url?id=${e.id}`),O=e=>o.get(`/album?id=${e.id}`)},1054:function(e,t,n){var i=n(6369),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"app"}},[n("HeaderNav"),n("keep-alive",{attrs:{include:["mvPlay","videoPlay"]}},[n("router-view")],1)],1)]),n("aplayer")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"drag",rawName:"v-drag"}]},[n("header",{staticClass:"head"},[n("div",{staticClass:"cl"},[n("router-link",{attrs:{to:"HomePage"}},[n("h3",[e._v("首页")])])],1),n("div",{staticClass:"center cl"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerms,expression:"searchTerms"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.searchTerms},on:{focus:e.switchChange,blur:e.switchNone,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.searchTerms=t.target.value)}}})])])]),n("div",{staticClass:"cl"},[n("div",{staticClass:"gobackWrap"},[n("span",{staticClass:"goBack",on:{click:function(t){return e.goBack(-1)}}},[e._v("< ")]),e._v("  "),n("span",{staticClass:"goBack",on:{click:function(t){return e.goBack(1)}}},[e._v("> ")])])])])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.searchSwitch,expression:"searchSwitch"}],staticClass:"search-box"},e._l(e.musicList,(function(t,i){return n("li",{key:i,staticClass:"suggest-list",on:{click:function(n){return e.selectMusic(t.name,t.ar[0].name)}}},[n("span",{staticClass:"suggest-list-music",staticStyle:{width:"310px"}},[e._v(e._s(t.name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"180px"}},[e._v(e._s(t.ar[0].name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"50px"}},[e._v(e._s(t.dt))])])})),0)])},a=[],c=n(801),u={data(){return{searchSwitch:!1,searchTerms:"",placeholder:"",musicList:[],inputTimer:null}},directives:{drag(e){let t=document.getElementById("app");e.onmousedown=e=>{let n=e.clientX,i=e.clientY,r=t.offsetLeft,s=t.offsetTop;document.onmousemove=e=>{let o=e.clientX-n,a=e.clientY-i;t.style.left=r+o+"px",t.style.top=s+a+"px"},document.onmouseup=e=>{document.onmousemove=null,document.onmouseup=null}}}},watch:{searchTerms:function(){this.search()}},mounted(){this.getSearchDefault()},methods:{goBack(e){this.$router.go(e)},switchNone(){setTimeout((()=>{this.searchSwitch=!1}),100)},switchChange(){this.searchSwitch=!0,this.searchTerms.trim()||this.getMusicInfo(this.placeholder)},selectMusic(e,t){this.placeholder=`${e}   -   ${t}`,this.searchTerms="",this.$router.push({name:"emptyPage",query:{keywords:e,reload:!0}}),this.searchSwitch=!0},enterSearch(){this.searchTerms.trim()?this.$router.push({name:"emptyPage",query:{keywords:this.searchTerms,reload:!0}}):(this.$router.push({name:"emptyPage",query:{keywords:this.placeholder,reload:!0}}),this.searchTerms=this.placeholder),this.searchSwitch=!1},search(){this.searchTerms.trim&&(this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((()=>{this.getMusicInfo(this.searchTerms),clearTimeout(this.inputTimer)}),500))},getMusicInfo(e){let t={keywords:e,limit:50,offset:"",type:""};(0,c.Hv)(t).then((e=>{this.musicList=[],this.musicList=e.data.result.songs,this.count=e.data.result.songCount;for(let t=0;t<this.musicList.length;t++){let e=parseInt(this.musicList[t].dt/1e3/60),n=parseInt(this.musicList[t].dt/1e3%60);e<10&&(e="0"+e),n<10&&(n="0"+n),this.musicList[t].dt=e+":"+n}}))},getSearchDefault(){(0,c.rO)().then((e=>{this.placeholder=e.data.data.realkeyword}))}}},l=u,d=n(3736),m=(0,d.Z)(l,o,a,!1,null,"7ce866eb",null),f=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"aplayerWrap"}},[n("ul",{staticClass:"musicWrap"},[0!==e.audio.length?n("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"listTitle",staticStyle:{"text-align":"center"}},[e._v(" 播放列表 ")]):e._e(),n("div",{staticClass:"wrapShow"},e._l(e.audio,(function(t,i){return n("li",{key:t.id,staticClass:"musicLi",on:{dblclick:function(t){return e.playMusic(i)}}},[n("span",[e._v(e._s(i+1)+".")]),e._v("  "),n("span",[e._v(e._s(t.name))]),n("span",{staticClass:"artist"},[e._v(e._s(t.artist))]),n("span",{staticClass:"delete",on:{click:function(t){return t.stopPropagation(),e.deleteMusic(i)}}},[n("i",{staticClass:"el-icon-delete iconhover"})])])})),0)]),0!==e.audio.length?n("aplayer",{ref:"aplayer",staticStyle:{color:"rgb(120, 120, 120)"},attrs:{fixed:"",audio:e.audio,lrcType:1}}):e._e()],1)},p=[],g=n(3822),v={data(){return{}},computed:{...(0,g.rn)(["audio"])},mounted(){},methods:{...(0,g.OI)(["deleteMUSIC"]),playMusic(e){let t=this.$refs.aplayer;t.switch(e),t.toggle()},deleteMusic(e){this.deleteMUSIC(e)}},directives:{drag(e){let t=document.getElementsByClassName("musicWrap");e.onmousedown=e=>{let n=e.clientX,i=e.clientY,r=t[0].offsetLeft,s=t[0].offsetTop;document.onmousemove=e=>{let o=e.clientX-n,a=e.clientY-i;t[0].style.left=r+o+"px",t[0].style.top=s+a+"px"},document.onmouseup=e=>{document.onmousemove=null,document.onmouseup=null}}}}},y=v,w=(0,d.Z)(y,h,p,!1,null,null,null),b=w.exports,k={name:"App",components:{HeaderNav:f,aplayer:b},data(){return{}},mounted(){},methods:{}},S=k,$=(0,d.Z)(S,r,s,!1,null,null,null),C=$.exports,_=n(9907);(0,_.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var T=n(2631);i["default"].use(T.Z);const P=new T.Z({mode:"history",routes:[{path:"",redirect:{name:"HomePage"}},{path:"/HomePage",name:"HomePage",component:()=>n.e(353).then(n.bind(n,4353))},{path:"/emptyPage",name:"emptyPage",component:()=>n.e(398).then(n.bind(n,3398))},{path:"/MusicPlayList",name:"MusicPlayList",component:()=>n.e(642).then(n.bind(n,5642))},{path:"/songDetails",name:"songDetails",component:()=>n.e(150).then(n.bind(n,8150)),props:!0},{path:"/albumDetail",name:"albumDetail",component:()=>n.e(342).then(n.bind(n,7122)),props:!0},{path:"/singerDetail",name:"singerDetail",component:()=>n.e(609).then(n.bind(n,5609)),props:!0},{path:"/playListDetails",name:"playListDetails",component:()=>n.e(551).then(n.bind(n,1551)),props:!0},{path:"/mvPlay",name:"mvPlay",component:()=>n.e(115).then(n.bind(n,3115)),props:!0,meta:{login:!0,met:!1}},{path:"/videoPlay",name:"videoPlay",component:()=>n.e(122).then(n.bind(n,2122)),props:!0}]});var L=P,x=n(2415);i["default"].use(g.ZP);var O=new g.ZP.Store({plugins:[(0,x.Z)({storage:window.sessionStorage})],state:{tagSwitch:{songSwitch:!0,albumSwitch:!1,singerSwitch:!1,playListSwitch:!1,videoSwitch:!1,mvSwitch:!1},audio:[],alplayShow:!0},mutations:{addSONG(e,t){for(let n of e.audio)if(n.artist===t.artist&&n.name===t.name)return void this._vm.$message("播放列表已存在这首歌");e.audio.push(t),this._vm.$message({type:"success",message:"歌曲已添加到播放列表"})},deleteMUSIC(e,t){e.audio.splice(t,1),this._vm.$message({type:"success",message:"歌曲已从列表清除"})},tagSelect(e,t){for(let n in e.tagSwitch)n!=t&&(e.tagSwitch[n]=!1);e.tagSwitch[t]=!0}},actions:{}}),N=n(8499),E=n.n(N),M=n(6033),j=n.n(M);i["default"].use(j(),{productionTip:!0}),i["default"].use(E()),i["default"].config.productionTip=!1,new i["default"]({router:L,store:O,render:e=>e(C)}).$mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,s){if(!i){var o=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],s=e[l][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{115:"0610e9bb",122:"8bc6bbc0",150:"a59375cb",342:"ba5a81c6",353:"e1ca5206",398:"328f8871",551:"cd67d423",609:"410970db",642:"42dddda6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{115:"624a5c55",122:"bfc826e3",150:"ed00f2f2",342:"a8dec105",353:"4ed79dc0",398:"55b5f3b2",551:"96dfa5f2",609:"4f7a0f46",642:"5e152f71"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="music:";n.l=function(i,r,s,o){if(e[i])e[i].push(r);else{var a,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=i),e[i]=[r];var m=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=a,r.parentNode.removeChild(r),i(c)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){r=o[i],s=r.getAttribute("data-href");if(s===e||s===t)return r}},i=function(i){return new Promise((function(r,s){var o=n.miniCssF(i),a=n.p+o;if(t(o,a))return r();e(i,a,r,s)}))},r={143:0};n.f.miniCss=function(e,t){var n={115:1,122:1,150:1,342:1,353:1,398:1,551:1,609:1,642:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var s=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=s);var o=n.p+n.u(t),a=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,r[1](a)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,s,o=i[0],a=i[1],c=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(i);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},i=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1054)}));i=n.O(i)})();
//# sourceMappingURL=app.b652d699.js.map