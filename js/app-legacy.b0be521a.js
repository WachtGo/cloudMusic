(function(){"use strict";var t={3629:function(t,e,n){n.d(e,{Li:function(){return E},km:function(){return O},Kl:function(){return u},PB:function(){return v},Hv:function(){return s},lw:function(){return w},pZ:function(){return b},Wv:function(){return y},zW:function(){return g},rO:function(){return a},F7:function(){return x},dn:function(){return T},Rf:function(){return L},UV:function(){return P},Lp:function(){return m},t7:function(){return d},vw:function(){return p},mq:function(){return f},gZ:function(){return h},qf:function(){return _},kS:function(){return k},cy:function(){return C},V4:function(){return S},vJ:function(){return l}});n(2222);var i=n(6166),r=n.n(i),o=r().create({baseURL:"https://cloud-music-isntafzhs-wachtgo.vercel.app/",changeOrigin:!0}),c=o,a=function(){return c.get("/search/default")},u=function(){return c.get("/search/hot/detail")},s=function(t){return c.get("cloudsearch?keywords=".concat(t.keywords,"&limit=").concat(t.limit,"&offset=").concat(t.offset,"&type=").concat(t.type))},l=function(t){return c.get("song/url?id=".concat(t.id))},f=function(t){return c.get("lyric?id=".concat(t.id))},d=function(t){return c.get("/song/detail?ids=".concat(t.ids))},m=function(t){return c.get("/comment/music?id=".concat(t.id,"&limit=").concat(t.limit,"&offset=").concat(t.offset))},h=function(t){return c.get("/personalized?limit=".concat(t.limit))},p=function(t){return c.get("/playlist/detail?id=".concat(t.id))},g=function(t){return c.get("/comment/playlist?id=".concat(t.id,"&limit=").concat(t.limit,"&offset=").concat(t.offset))},v=function(t){return c.get("mv/url?id=".concat(t.id))},y=function(t){return c.get("/mv/first?limit=".concat(t.limit))},w=function(t){return c.get("/mv/detail/info?mvid=".concat(t.id))},b=function(t){return c.get("/mv/detail/?mvid=".concat(t.id))},S=function(t){return c.get("/comment/mv?id=".concat(t.id,"&limit=").concat(t.limit,"&offset=").concat(t.offset))},k=function(t){return c.get("/video/detail?id=".concat(t.id))},C=function(t){return c.get("/video/url?id=".concat(t.id))},_=function(t){return c.get("/comment/video?id=".concat(t.id,"&limit=").concat(t.limit,"&offset=").concat(t.offset))},T=function(t){return c.get("/artists/desc?id=".concat(t.id))},P=function(t){return c.get("/artists?id=".concat(t.id))},L=function(t){return c.get("/artist/mv?id=".concat(t.id))};function x(t){return c({url:"/artist/album",method:"get",params:t})}var O=function(t){return c.post("/song/download/url?id=".concat(t.id))},E=function(t){return c.get("/album?id=".concat(t.id))}},7111:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"app"}},[n("HeaderNav")],1)]),n("aplayer")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"drag",rawName:"v-drag"}]},[n("header",{staticClass:"head"},[n("div",{staticClass:"cl"},[n("router-link",{attrs:{to:"HomePage"}},[n("h3",[t._v("首页")])])],1),n("div",{staticClass:"center cl"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerms,expression:"searchTerms"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.searchTerms},on:{focus:t.switchChange,blur:t.switchNone,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.searchTerms=e.target.value)}}})])])]),n("div",{staticClass:"cl",on:{click:function(e){return t.back()}}},[n("h3",[t._v("返回")])])])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchSwitch,expression:"searchSwitch"}],staticClass:"search-box"},t._l(t.musicList,(function(e,i){return n("li",{key:i,staticClass:"suggest-list",on:{click:function(n){return t.selectMusic(e.name,e.ar[0].name)}}},[n("span",{staticClass:"suggest-list-music",staticStyle:{width:"310px"}},[t._v(t._s(e.name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"180px"}},[t._v(t._s(e.ar[0].name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"50px"}},[t._v(t._s(e.dt))])])})),0),n("router-view")],1)},a=[],u=(n(4916),n(4765),n(3210),n(2222),n(3629)),s={data:function(){return{searchSwitch:!1,searchTerms:"",placeholder:"",musicList:[],inputTimer:null}},directives:{drag:function(t){var e=document.getElementById("app");document.onmousedown=function(t){var n=t.clientX,i=t.clientY,r=e.offsetLeft,o=e.offsetTop;document.onmousemove=function(t){var c=t.clientX-n,a=t.clientY-i;e.style.left=r+c+"px",e.style.top=o+a+"px"},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},watch:{searchTerms:function(){this.search()}},mounted:function(){this.getSearchDefault()},methods:{back:function(){this.$router.back()},switchNone:function(){var t=this;setTimeout((function(){t.searchSwitch=!1}),100)},switchChange:function(){this.searchSwitch=!0,this.searchTerms.trim()||this.getMusicInfo(this.placeholder)},selectMusic:function(t,e){this.placeholder="".concat(t,"   -   ").concat(e),this.searchTerms="",this.$router.push({name:"emptyPage",query:{keywords:t,reload:!0}}),this.searchSwitch=!0},enterSearch:function(){this.searchTerms.trim()?this.$router.push({name:"emptyPage",query:{keywords:this.searchTerms,reload:!0}}):(this.$router.push({name:"emptyPage",query:{keywords:this.placeholder,reload:!0}}),this.searchTerms=this.placeholder),this.searchSwitch=!1},search:function(){var t=this;this.searchTerms.trim&&(this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((function(){t.getMusicInfo(t.searchTerms),clearTimeout(t.inputTimer)}),500))},getMusicInfo:function(t){var e=this,n={keywords:t,limit:50,offset:"",type:""};(0,u.Hv)(n).then((function(t){e.musicList=[],e.musicList=t.data.result.songs,e.count=t.data.result.songCount;for(var n=0;n<e.musicList.length;n++){var i=parseInt(e.musicList[n].dt/1e3/60),r=parseInt(e.musicList[n].dt/1e3%60);i<10&&(i="0"+i),r<10&&(r="0"+r),e.musicList[n].dt=i+":"+r}}))},getSearchDefault:function(){var t=this;(0,u.rO)().then((function(e){t.placeholder=e.data.data.realkeyword}))}}},l=s,f=n(1001),d=(0,f.Z)(l,c,a,!1,null,"4709e77d",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"aplayerWrap"}},[n("ul",{staticClass:"musicWrap"},[0!==t.audio.length?n("div",{staticClass:"listTitle",staticStyle:{"text-align":"center"}},[t._v(" 播放列表 ")]):t._e(),n("div",{staticClass:"wrapShow"},t._l(t.audio,(function(e,i){return n("li",{key:e.id,staticClass:"musicLi",on:{dblclick:function(e){return t.playMusic(i)}}},[n("span",[t._v(t._s(i+1)+".")]),t._v("  "),n("span",[t._v(t._s(e.name))]),n("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),n("span",{staticClass:"delete",on:{click:function(e){return t.deleteMusic(i)}}},[n("i",{staticClass:"el-icon-delete iconhover"})])])})),0)]),0!==t.audio.length?n("aplayer",{ref:"aplayer",staticStyle:{color:"rgb(120, 120, 120)"},attrs:{fixed:"",audio:t.audio,lrcType:1}}):t._e()],1)},p=[],g={data:function(){return{audio:[]}},mounted:function(){this.audio=this.$store.state.audio},methods:{playMusic:function(t){var e=this.$refs.aplayer;e.switch(t),e.toggle()},deleteMusic:function(t){this.$store.commit("deleteMusic",t)}}},v=g,y=(0,f.Z)(v,h,p,!1,null,null,null),w=y.exports,b={name:"App",components:{HeaderNav:m,aplayer:w},data:function(){return{}},mounted:function(){},methods:{}},S=b,k=(0,f.Z)(S,r,o,!1,null,null,null),C=k.exports,_=n(563);(0,_.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n(1539),n(8783),n(3948);var T=n(2809);i["default"].use(T.Z);var P=new T.Z({routes:[{path:"",redirect:{name:"HomePage"}},{path:"/emptyPage",name:"emptyPage",component:function(){return n.e(113).then(n.bind(n,4113))}},{path:"/MusicPlayList",name:"MusicPlayList",component:function(){return n.e(195).then(n.bind(n,9195))}},{path:"/songDetails",name:"songDetails",component:function(){return n.e(223).then(n.bind(n,9223))}},{path:"/albumDetail",name:"albumDetail",component:function(){return n.e(730).then(n.bind(n,1730))}},{path:"/singerDetail",name:"singerDetail",component:function(){return n.e(718).then(n.bind(n,718))}},{path:"/playListDetails",name:"playListDetails",component:function(){return n.e(420).then(n.bind(n,4420))}},{path:"/mvPlay",name:"mvPlay",component:function(){return n.e(827).then(n.bind(n,9827))}},{path:"/videoPlay",name:"videoPlay",component:function(){return n.e(351).then(n.bind(n,5351))}},{path:"/HomePage",name:"HomePage",component:function(){return n.e(71).then(n.bind(n,6071))}}]}),L=P,x=n(7965),O=(n(8309),n(561),n(4665)),E=n(3445);i["default"].use(O.ZP);var N=new O.ZP.Store({plugins:[(0,E.Z)({storage:window.sessionStorage})],state:{tagSwitch:{songSwitch:!0,albumSwitch:!1,singerSwitch:!1,playListSwitch:!1,videoSwitch:!1,mvSwitch:!1},audio:[],alplayShow:!0},mutations:{addSong:function(t,e){var n,i=(0,x.Z)(t.audio);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(r.artist===e.artist&&r.name===e.name)return void this._vm.$message("播放列表已存在这首歌")}}catch(o){i.e(o)}finally{i.f()}t.audio.push(e),this._vm.$message({type:"success",message:"歌曲已添加到播放列表"})},deleteMusic:function(t,e){t.audio.splice(e,1),this._vm.$message({type:"success",message:"歌曲已从列表清除"})},tagSelect:function(t,e){for(var n in t.tagSwitch)n!=e&&(t.tagSwitch[n]=!1);t.tagSwitch[e]=!0,console.log("state.tagSwitch----------------",t.tagSwitch)}},actions:{}}),M=n(4549),$=n.n(M),j=n(4384),A=n.n(j);i["default"].use(A(),{productionTip:!0}),i["default"].use($()),i["default"].config.productionTip=!1,new i["default"]({router:L,store:N,render:function(t){return t(C)}}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i](o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var c=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||c>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(a=!1,o<c&&(c=o));if(a){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{71:"5dfed387",113:"b77dec76",195:"bd980f28",223:"a9d9a88e",351:"86e59c29",420:"c9c22941",718:"808f438e",730:"1156aace",827:"d3c996a2"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{71:"2d6a929d",113:"55b5f3b2",195:"a38d5d38",223:"b632cb20",351:"807ab1fc",420:"f076bdbc",718:"e3e1c795",730:"4be47a35",827:"6a9dc539"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="music:";n.l=function(i,r,o,c){if(t[i])t[i].push(r);else{var a,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==i||f.getAttribute("data-webpack")==e+o){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=i),t[i]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(m);var r=t[i];if(delete t[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var c=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=a,r.parentNode.removeChild(r),i(u)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){r=c[i],o=r.getAttribute("data-href");if(o===t||o===e)return r}},i=function(i){return new Promise((function(r,o){var c=n.miniCssF(i),a=n.p+c;if(e(c,a))return r();t(i,a,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={71:1,113:1,195:1,223:1,351:1,420:1,718:1,730:1,827:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=i(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=t[e]=[n,i]}));i.push(r[2]=o);var c=n.p+n.u(e),a=new Error,u=function(i){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}};n.l(c,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,c=i[0],a=i[1],u=i[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(e&&e(i);s<c.length;s++)o=c[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7111)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.b0be521a.js.map