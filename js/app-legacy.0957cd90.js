(function(){var t={9531:function(t,e,n){"use strict";n.d(e,{Li:function(){return $},m8:function(){return h},km:function(){return D},ip:function(){return g},Kl:function(){return s},PB:function(){return C},Hv:function(){return c},lw:function(){return _},pZ:function(){return T},Wv:function(){return S},zW:function(){return w},A5:function(){return p},_V:function(){return b},rO:function(){return u},F7:function(){return I},dn:function(){return M},Rf:function(){return E},UV:function(){return O},zd:function(){return x},Lp:function(){return f},t7:function(){return m},vw:function(){return y},mq:function(){return d},lK:function(){return k},gZ:function(){return v},qf:function(){return N},kS:function(){return A},cy:function(){return L},V4:function(){return P},vJ:function(){return l}});var r=n(6265),i=n.n(r),a=i().create({baseURL:"https://cloud-music-api-pied.vercel.app/"}),o=a,u=function(){return o.get("/search/default")},s=function(){return o.get("/search/hot/detail")};function c(t){return o({url:"/cloudsearch",method:"get",params:t})}function l(t){return o({url:"/song/url",method:"get",params:t})}function d(t){return o({url:"/lyric",method:"get",params:t})}function m(t){return o({url:"/song/detail",method:"get",params:t})}function f(t){return o({url:"/comment/music",method:"get",params:t})}function p(t){return o({url:"/top/playlist",method:"get",params:t})}function h(t){return o({url:"/playlist/catlist",method:"get",params:t})}function g(t){return o({url:"/playlist/hot",method:"get",params:t})}function v(t){return o({url:"/personalized",method:"get",params:t})}function y(t){return o({url:"/playlist/track/all",method:"get",params:t})}function b(t){return o({url:"/playlist/detail",method:"get",params:t})}function w(t){return o({url:"/comment/playlist",method:"get",params:t})}function C(t){return o({url:"mv/url",method:"get",params:t})}function S(t){return o({url:"/mv/first",method:"get",params:t})}function k(t){return o({url:"/personalized/mv",method:"get",params:t})}function _(t){return o({url:"/mv/detail/info",method:"get",params:t})}function T(t){return o({url:"/mv/detail",method:"get",params:t})}function P(t){return o({url:"/comment/mv",method:"get",params:t})}function A(t){return o({url:"/video/detail",method:"get",params:t})}function L(t){return o({url:"/video/url",method:"get",params:t})}function N(t){return o({url:"/comment/video",method:"get",params:t})}function x(t){return o({url:"/artist/list",method:"get",params:t})}function M(t){return o({url:"/artists/desc",method:"get",params:t})}function O(t){return o({url:"/artist/songs",method:"get",params:t})}function E(t){return o({url:"/artist/mv",method:"get",params:t})}function I(t){return o({url:"/artist/album",method:"get",params:t})}function D(t){return o({url:"/song/url",method:"get",params:t})}function $(t){return o({url:"/album",method:"get",params:t})}},9851:function(t,e,n){"use strict";n(6992),n(8674),n(9601),n(7727);var r=n(6369),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"app"}},[n("HeaderNav"),n("keep-alive",{attrs:{include:["mvPlay","videoPlay"]}},[n("router-view")],1)],1)]),n("aplayer"),n("bgmusic")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"drag",rawName:"v-drag"}]},[n("header",{staticClass:"head"},[n("div",{staticClass:"cl"},[n("router-link",{attrs:{to:{name:"recommend"}}},[n("h3",[t._v("首页")])])],1),n("div",{staticClass:"center cl"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerms,expression:"searchTerms"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.searchTerms},on:{focus:t.switchChange,blur:t.switchNone,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.searchTerms=e.target.value)}}})])])]),n("div",{staticClass:"cl"},[n("div",{staticClass:"gobackWrap"},[n("span",{staticClass:"goBack",on:{click:function(e){return t.goBack(-1)}}},[t._v("< ")]),t._v("  "),n("span",{staticClass:"goBack",on:{click:function(e){return t.goBack(1)}}},[t._v("> ")])])])])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchSwitch,expression:"searchSwitch"}],staticClass:"search-box"},t._l(t.musicList,(function(e,r){return n("li",{key:r,staticClass:"suggest-list",on:{click:function(n){return t.selectMusic(e.name,e.ar[0].name)}}},[n("span",{staticClass:"suggest-list-music",staticStyle:{width:"310px"}},[t._v(t._s(e.name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"180px"}},[t._v(t._s(e.ar[0].name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"50px"}},[t._v(t._s(e.dt))])])})),0)])},u=[],s=(n(4916),n(4765),n(3210),n(2222),n(9531)),c={data:function(){return{searchSwitch:!1,searchTerms:"",placeholder:"",musicList:[],inputTimer:null}},directives:{drag:function(t){var e=document.getElementById("app");t.onmousedown=function(t){var n=t.clientX,r=t.clientY,i=e.offsetLeft,a=e.offsetTop;document.onmousemove=function(t){var o=t.clientX-n,u=t.clientY-r;e.style.left=i+o+"px",e.style.top=a+u+"px"},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}},watch:{searchTerms:function(){this.search()}},mounted:function(){this.getSearchDefault()},methods:{goBack:function(t){this.$router.go(t)},switchNone:function(){var t=this;setTimeout((function(){t.searchSwitch=!1}),100)},switchChange:function(){this.searchSwitch=!0,this.searchTerms.trim()||this.getMusicInfo(this.placeholder)},selectMusic:function(t,e){this.placeholder="".concat(t,"   -   ").concat(e),this.searchTerms="",this.$router.push({name:"emptyPage",query:{keywords:t,reload:!0}}),this.searchSwitch=!0},enterSearch:function(){this.searchTerms.trim()?this.$router.push({name:"emptyPage",query:{keywords:this.searchTerms,reload:!0}}):(this.$router.push({name:"emptyPage",query:{keywords:this.placeholder,reload:!0}}),this.searchTerms=this.placeholder),this.searchSwitch=!1},search:function(){var t=this;this.searchTerms.trim&&(this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((function(){t.getMusicInfo(t.searchTerms),clearTimeout(t.inputTimer)}),500))},getMusicInfo:function(t){var e=this,n={keywords:t,limit:50,offset:"",type:""};(0,s.Hv)(n).then((function(t){e.musicList=[],e.musicList=t.data.result.songs,e.count=t.data.result.songCount;for(var n=0;n<e.musicList.length;n++){var r=parseInt(e.musicList[n].dt/1e3/60),i=parseInt(e.musicList[n].dt/1e3%60);r<10&&(r="0"+r),i<10&&(i="0"+i),e.musicList[n].dt=r+":"+i}}))},getSearchDefault:function(){var t=this;(0,s.rO)().then((function(e){t.placeholder=e.data.data.realkeyword}))}}},l=c,d=n(1001),m=(0,d.Z)(l,o,u,!1,null,"699426c8",null),f=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"aplayerWrap"}},[n("ul",{staticClass:"musicWrap"},[0!==t.audio.length?n("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"listTitle",staticStyle:{"text-align":"center"}},[t._v(" 播放列表 ")]):t._e(),n("div",{staticClass:"wrapShow"},t._l(t.audio,(function(e,r){return n("li",{key:e.id,staticClass:"musicLi",on:{click:function(e){return e.target!==e.currentTarget?null:t.playMusic(r)}}},[n("span",[t._v(t._s(r+1)+".")]),t._v("  "),n("span",{staticClass:"musicName"},[t._v(t._s(e.name))]),n("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),n("span",{staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.deleteMusic(r)}}},[n("i",{staticClass:"el-icon-delete iconhover"})])])})),0)]),0!==t.audition.length?n("div",{staticClass:"audition"},t._l(t.audition,(function(e,r){return n("div",{key:e.id,staticClass:"inline-block",staticStyle:{margin:"0 auto"}},[n("div",{staticClass:"auditionTitle"},[t._v("正在试听:")]),n("div",{staticClass:"auditionMusic",on:{click:function(e){return t.playAudition(r)}}},[n("span",{staticClass:"inline-block auditionName"},[t._v(t._s(e.name))]),n("span",{staticClass:"inline-block auditionArtist"},[t._v(t._s(e.artist))]),n("span",{staticClass:"inline-block auditionDelete",on:{click:function(e){return e.stopPropagation(),t.deleteAudition(r)}}},[n("i",{staticClass:"el-icon-delete iconhover"})]),n("span",{staticClass:"inline-block auditionAdd",on:{click:function(n){return n.stopPropagation(),t.addListenMusic(e.id)}}},[n("i",{staticClass:"el-icon-folder-add iconhover"})])])])})),0):t._e(),0!==t.audio.length&&0===t.musicAudioStatu?n("aplayer",{ref:"aplayer",staticStyle:{color:"rgb(120, 120, 120)"},attrs:{fixed:"",audio:t.audio,lrcType:1}}):t._e(),0!==t.audition.length&&1===t.musicAudioStatu?n("div",[n("aplayer",{ref:"auditions",attrs:{autoplay:"",fixed:!0,audio:t.audition,"liric-type":1}})],1):t._e()],1)},h=[],g=n(8534),v=n(4648),y=(n(6133),n(3822)),b=n(4979),w={data:function(){return{}},computed:(0,v.Z)({},(0,y.rn)(["audio","audition","musicAudioStatu"])),mounted:function(){},methods:(0,v.Z)((0,v.Z)({},(0,y.OI)(["deleteMUSIC","deleteAUDITION","changeAPLAYER"])),{},{playMusic:function(t){this.changeAPLAYER(0);var e=this.$refs.aplayer;e.switch(t),e.toggle()},deleteMusic:function(t){this.deleteMUSIC(t)},playAudition:function(t){this.changeAPLAYER(1);var e=this.$refs.auditions;e.switch(t),e.toggle()},deleteAudition:function(t){this.deleteAUDITION(t)},addListenMusic:function(t){var e=this;return(0,g.Z)(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e,i="audition",n.next=4,(0,s.t7)({ids:t}).then((function(e){(0,b.H)(t,e.data.songs[0].fee,0,i,r)}));case 4:case"end":return n.stop()}}),n)})))()}}),directives:{drag:function(t){var e=document.getElementsByClassName("musicWrap");t.onmousedown=function(t){var n=t.clientX,r=t.clientY,i=e[0].offsetLeft,a=e[0].offsetTop;document.onmousemove=function(t){var o=t.clientX-n,u=t.clientY-r;e[0].style.left=i+o+"px",e[0].style.top=a+u+"px"},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}}}}},C=w,S=(0,d.Z)(C,p,h,!1,null,null,null),k=S.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bgmusicWrap"},[n("ul",{staticClass:"bgmusic-ul"},[n("div",[t._v("放松一下")]),t._l(t.bgmusicSrc,(function(e,r){return n("li",{key:e.src,class:["bgmusic-li",e.fontColor],on:{dblclick:function(e){return t.reloadbgMusic(r)},click:function(e){return t.playbgMusic(r)}}},[n("audio",{staticClass:"bgmusicAudio",attrs:{src:e.src,type:"video/mp3"},on:{play:t.bgmusicPlayed}}),n("span",[t._v(t._s(e.name))])])}))],2)])},T=[],P=(n(1539),n(4747),n(767),{data:function(){return{bgmusicSrc:[{name:"夏天的日子",src:n(238),fontColor:"fontColorgray"},{name:"带走我的心啊 把他藏在行囊",src:n(667),fontColor:"fontColorgray"}],bgmusic:[]}},mounted:function(){this.bgmusic=document.querySelectorAll(".bgmusicAudio")},methods:{playbgMusic:function(t){this.bgmusic.forEach((function(e,n){e.paused&&n===t?e.play():e.pause()}))},bgmusicPlayed:function(){var t=this;this.bgmusic.forEach((function(e,n){e.paused?t.bgmusicSrc[n].fontColor="fontColorgray":t.bgmusicSrc[n].fontColor="fontColorgreen"}))},reloadbgMusic:function(t){this.bgmusic.forEach((function(e,n){e.paused&&n===t?(e.load(),e.play()):e.load()}))}}}),A=P,L=(0,d.Z)(A,_,T,!1,null,"0c2fabe6",null),N=L.exports,x={name:"App",components:{HeaderNav:f,aplayer:k,bgmusic:N},data:function(){return{}},mounted:function(){},methods:{}},M=x,O=(0,d.Z)(M,i,a,!1,null,null,null),E=O.exports,I=n(9907);(0,I.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n(8783),n(3948);var D=n(2631);r["default"].use(D.Z);var $=new D.Z({mode:"hash",routes:[{path:"",redirect:{name:"HomePage"}},{path:"/HomePage",name:"HomePage",redirect:{name:"recommend"},component:function(){return n.e(573).then(n.bind(n,8573))},children:[{path:"/HomePage/recommend",name:"recommend",component:function(){return n.e(674).then(n.bind(n,5674))}},{path:"/HomePage/playlistCategary",name:"playlistCategary",component:function(){return n.e(365).then(n.bind(n,7365))}},{path:"/HomePage/singerCategary",name:"singerCategary",component:function(){return n.e(997).then(n.bind(n,8997))}}]},{path:"/emptyPage",name:"emptyPage",component:function(){return n.e(283).then(n.bind(n,4283))}},{path:"/MusicPlayList",name:"MusicPlayList",component:function(){return n.e(197).then(n.bind(n,3761))}},{path:"/songDetails",name:"songDetails",component:function(){return n.e(414).then(n.bind(n,414))},props:!0},{path:"/albumDetail",name:"albumDetail",component:function(){return n.e(485).then(n.bind(n,2676))},props:!0},{path:"/singerDetail",name:"singerDetail",component:function(){return n.e(455).then(n.bind(n,5455))},props:!0},{path:"/playListDetails",name:"playListDetails",component:function(){return n.e(46).then(n.bind(n,9046))},props:!0},{path:"/mvPlay",name:"mvPlay",component:function(){return n.e(746).then(n.bind(n,8746))},props:!0,meta:{login:!0,met:!1}},{path:"/videoPlay",name:"videoPlay",component:function(){return n.e(806).then(n.bind(n,1806))},props:!0}]}),Z=D.Z.prototype.push;D.Z.prototype.push=function(t){return Z.call(this,t).catch((function(t){return t}))};var U=$,j=n(8439),R=(n(561),n(2415));r["default"].use(y.ZP);var H=new y.ZP.Store({plugins:[(0,R.Z)({storage:window.sessionStorage})],state:{homeTags:{routerPage:0,tags:[{page:0,pageName:"个性推荐"},{page:1,pageName:"歌单"},{page:2,pageName:"歌手"}]},tagSwitch:{songSwitch:!0,albumSwitch:!1,singerSwitch:!1,playListSwitch:!1,videoSwitch:!1,mvSwitch:!1},audio:[],audition:[],musicAudioStatu:0,alplayShow:!0},mutations:{addSONG:function(t,e){var n,r=(0,j.Z)(t.audio);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.id===e.id)return void this._vm.$message("播放列表已存在这首歌")}}catch(a){r.e(a)}finally{r.f()}t.audio.push(e),this._vm.$message({type:"success",message:"歌曲已添加到播放列表"})},deleteMUSIC:function(t,e){t.audio.splice(e,1),this._vm.$message({type:"success",message:"歌曲已移出播放列表"})},tagSelect:function(t,e){for(var n in t.tagSwitch)n!=e&&(t.tagSwitch[n]=!1);t.tagSwitch[e]=!0},addAUDITION:function(t,e){var n,r=(0,j.Z)(t.audition);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.id===e.id)return void this._vm.$message("正在试听这首歌")}}catch(a){r.e(a)}finally{r.f()}t.musicAudioStatu=1,t.audition.splice(0,1),t.audition[0]=e,this._vm.$message({type:"success",message:"歌曲已添加到试听"})},deleteAUDITION:function(t,e){t.audition.splice(e,1),this._vm.$message({type:"success",message:"歌曲已移出试听列表"})},changeAPLAYER:function(t,e){t.musicAudioStatu=1===e?1:0},changehomeTAG:function(t,e){t.homeTags.routerPage=e}},actions:{}}),B=n(8499),q=n.n(B),Y=n(6033),F=n.n(Y);r["default"].use(F(),{productionTip:!0}),r["default"].use(q()),r["default"].config.productionTip=!1,new r["default"]({router:U,store:H,render:function(t){return t(E)}}).$mount("#app")},767:function(t,e,n){n(1539),n(8783),n(3948),n(285),n(1637);var r=function(t){if(t){var e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,r=new Date(t).getDate();return e+"-"+n+"-"+r}},i=function(t,e){for(var n=0;n<t.length;n++){var r=parseInt(t[n][e]/1e3/60),i=parseInt(t[n][e]/1e3%60);r<10&&(r="0"+r),i<10&&(i="0"+i),t[n][e]=r+":"+i}},a=function(t,e){for(var n=0;n<t.length;n++)String(t[n][e]).length>5&&String(t[n][e]).length<9?t[n][e]=String(t[n][e]).substr(0,String(t[n][e]).length-4)+"万":5==String(t[n][e]).length?t[n][e]=String(t[n][e]).substr(0,1)+"."+String(t[n][e]).substr(1,2)+"万":9==String(t[n][e]).length?t[n][e]=String(t[n][e]).substr(0,1)+"."+String(t[n][e]).substr(1,2)+"亿":String(t[n][e]).length>9&&(t[n][e]=String(t[n][e]).substr(0,String(t[n][e]).length-8)+"亿")},o=function(t,e){fetch(t).then((function(t){return t.blob()})).then((function(t){var n=document.createElement("a");document.body.appendChild(n),n.style.display="none";var r=window.URL.createObjectURL(t);n.href=r,n.download="".concat(e,".mp3"),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}))},u=function(){return(new Date).getTime()},s=function(t,e){return Math.floor(Math.random()*(e-t))+t};t.exports={transtime:r,transMusicTime:i,transPlayCount:a,download:o,getTimestamp:u,randomRange:s}},4979:function(t,e,n){"use strict";n.d(e,{H:function(){return a},b:function(){return u}});var r=n(8534),i=(n(6133),n(8309),n(9531));function a(t,e,n,r,i){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(regeneratorRuntime.mark((function t(e,n,r,a,o){var u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:u=null,"",o[a][r].timer&&(1==n&&o.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:e}).then((function(t){if(!t.data.data[0].url)return o.$message({message:"这首歌暂无版权",type:"error"}),o[a][r].timer=!1,void setTimeout((function(){o[a][r].timer=!0}),3e3);u=t.data.data[0].url})),(0,i.mq)({id:e}).then((function(t){t.data.lrc.lyric})),(0,i.t7)({ids:e}).then((function(t){o.$store.commit("addSONG",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:u,cover:t.data.songs[0].al.picUrl,lrc:o.songlrc,id:e}),o[a][r].timer=!1,setTimeout((function(){o[a][r].timer=!0}),3e3)})));case 3:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function u(t,e,n,r,a){var o=null,u="";a[r][n].timer&&(1==e&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"这首歌暂无版权",type:"error"}),a[r][n].timer=!1,void setTimeout((function(){a[r][n].timer=!0}),3e3);o=t.data.data[0].url})),(0,i.mq)({id:t}).then((function(t){u=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((function(e){null!=o&&a.$store.commit("addAUDITION",{name:e.data.songs[0].name,artist:e.data.songs[0].ar[0].name,url:o,cover:e.data.songs[0].al.picUrl,lrc:u,id:t,timer:!0}),a[r][n].timer=!1,setTimeout((function(){a[r][n].timer=!0}),3e3)})))}},238:function(t,e,n){"use strict";t.exports=n.p+"media/夏天的日子.cd797ca9.mp3"},667:function(t,e,n){"use strict";t.exports=n.p+"media/带走我的心啊 把它藏在行囊.6697fc8b.mp3"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,loaded:!1,exports:{}};return t[r](a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],a=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<o&&(o=a));if(u){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{46:"ddf703e7",197:"a660af09",283:"71d5809a",365:"12f0e01e",414:"aa27307a",455:"e2bffbc6",485:"49d40bfe",573:"b4d045c4",674:"55fefd48",746:"bad74d79",806:"41b70465",997:"4f15238f"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{46:"b48706a6",197:"350b19a3",283:"2484c935",365:"84ff31d8",414:"748fba02",455:"1c0f25f5",485:"b435d547",573:"15d07257",674:"8c497c41",746:"db72146e",806:"b7c80152",997:"c7e1b78a"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="music:";n.l=function(r,i,a,o){if(t[r])t[r].push(i);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[i];var m=function(e,n){u.onerror=u.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=u,i.parentNode.removeChild(i),r(s)}};return i.onerror=i.onload=a,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){i=o[r],a=i.getAttribute("data-href");if(a===t||a===e)return i}},r=function(r){return new Promise((function(i,a){var o=n.miniCssF(r),u=n.p+o;if(e(o,u))return i();t(r,u,i,a)}))},i={143:0};n.f.miniCss=function(t,e){var n={46:1,197:1,283:1,365:1,414:1,455:1,485:1,573:1,674:1,746:1,806:1,997:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,i[1](u)}};n.l(o,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],u=r[1],s=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var l=s(n)}for(e&&e(r);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9851)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.0957cd90.js.map