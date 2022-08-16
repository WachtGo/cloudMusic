(function(){var t={8477:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrap"},[n("h3",[t._v("专辑详情")]),n("div",{staticClass:"descript"}),n("div",[n("div",{staticClass:"ul"},[n("div",{staticClass:"albumDetails"},[n("div",{staticClass:"playListImg"},[n("img",{attrs:{src:t.albumDesc.blurPicUrl,alt:""}})]),n("div",{staticClass:"detailsRight"},[n("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.albumDesc.name)+" ")]),n("div",{staticStyle:{"font-size":"14px"}},[n("div",{staticClass:"aliasClass"},[n("img",{staticClass:"artistPic",attrs:{src:t.albumDesc.artist.img1v1Url,alt:""}}),t._v("- "),n("span",{staticClass:"playListNickName"},[t._v(t._s(t.albumDesc.artist.name))])])])])]),n("div",{attrs:{id:"singleSongs"}},[n("h3",[t._v("专辑歌曲："+t._s(t.albumSongs.length)+"首")]),t._l(t.albumSongs,(function(e,i){return n("div",{key:i,staticClass:"SingsList"},[n("span",{staticClass:"song-list",staticStyle:{width:"20px"}},[t._v(t._s(i+1)+".")]),n("div",{on:{dblclick:function(n){return t.goSongDetails(e.id)}}},[n("span",{staticClass:"song-list",staticStyle:{width:"350px"}},[t._v(" "+t._s(e.name)+" ")]),n("span",{staticClass:"song-list",staticStyle:{width:"250px","text-align":"center"}},[t._v(" "+t._s(e.ar[0].name)+" ")]),n("span",{staticClass:"song-list",staticStyle:{width:"230px"}},[t._v(" "+t._s(e.dt)+" ")]),n("span",{staticClass:"song-list",staticStyle:{width:"150px"}})]),n("span",{staticClass:"song-list song-list-option"},[n("span",{on:{click:function(n){return n.stopPropagation(),t.listenMusic(e.id,e.fee,i)}}},[n("i",{staticClass:"el-icon-headset iconhover"})]),0==e.fee||8==e.fee?n("span",{on:{click:function(n){return n.stopPropagation(),t.playMusic(e.id,e.fee,i)}}},[n("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(e.mv)?n("span",{on:{click:function(n){return n.stopPropagation(),t.playMV(e.mv)}}},[n("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==e.fee||8==e.fee?n("span",{on:{click:function(n){return n.stopPropagation(),t.getDownloadUrl(e.id,e.name)}}},[n("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])}))],2)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[n("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},s=[],a=n(9531),r=n(767),o=n(4979),u={data(){return{listen:[],albumId:"",albumSongs:[],albumDesc:{}}},mounted(){this.$route.params.albumId&&localStorage.setItem("albumId",this.$route.params.albumId),this.$route.params.albumId?this.albumId=this.$route.params.albumId:this.albumId=localStorage.getItem("albumId"),this.getAlbumContent()},methods:{getAlbumContent(){var t=this;let e={id:t.albumId};(0,a.Li)(e).then((e=>{t.albumDesc=e.data.album,t.albumSongs=e.data.songs;for(let i of t.albumSongs)t.$set(i,"timer",!0);let n="dt";(0,r.transMusicTime)(t.albumSongs,n)}))},getDownloadUrl(t,e){var n=this;let i={id:t};(0,a.km)(i).then((t=>{(0,r.download)(t.data.data.url,e),n.$message({type:"success",message:"开始下载了"})}))},listenMusic(t,e,n){var i=this,s="albumSongs";(0,o.b)(t,e,n,s,i)},playMusic(t,e,n){var i=this,s="albumSongs";(0,o.H)(t,e,n,s,i)},goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},goMv(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},randomColor(){return`#${(16777215*Math.random()<<0).toString(16)}`}}},l=u,c=n(3736),d=(0,c.Z)(l,i,s,!1,null,"750cff88",null),m=d.exports},9531:function(t,e,n){"use strict";n.d(e,{Li:function(){return D},km:function(){return x},Kl:function(){return u},PB:function(){return y},Hv:function(){return l},lw:function(){return w},pZ:function(){return S},Wv:function(){return b},zW:function(){return v},_V:function(){return g},rO:function(){return o},F7:function(){return L},dn:function(){return P},Rf:function(){return I},UV:function(){return A},Lp:function(){return h},t7:function(){return m},vw:function(){return f},mq:function(){return d},gZ:function(){return p},qf:function(){return T},kS:function(){return _},cy:function(){return k},V4:function(){return C},vJ:function(){return c}});var i=n(6265),s=n.n(i);const a=s().create({baseURL:"https://cloud-music-api-pied.vercel.app/"});var r=a;const o=()=>r.get("/search/default"),u=()=>r.get("/search/hot/detail");function l(t){return r({url:"/cloudsearch",method:"get",params:t})}function c(t){return r({url:"/song/url",method:"get",params:t})}function d(t){return r({url:"/lyric",method:"get",params:t})}function m(t){return r({url:"/song/detail",method:"get",params:t})}function h(t){return r({url:"/comment/music",method:"get",params:t})}function p(t){return r({url:"/personalized",method:"get",params:t})}function f(t){return r({url:"/playlist/track/all",method:"get",params:t})}function g(t){return r({url:"/playlist/detail",method:"get",params:t})}function v(t){return r({url:"/comment/playlist",method:"get",params:t})}function y(t){return r({url:"mv/url",method:"get",params:t})}function b(t){return r({url:"/mv/first",method:"get",params:t})}function w(t){return r({url:"/mv/detail/info",method:"get",params:t})}function S(t){return r({url:"/mv/detail",method:"get",params:t})}function C(t){return r({url:"/comment/mv",method:"get",params:t})}function _(t){return r({url:"/video/detail",method:"get",params:t})}function k(t){return r({url:"/video/url",method:"get",params:t})}function T(t){return r({url:"/comment/video",method:"get",params:t})}function P(t){return r({url:"/artists/desc",method:"get",params:t})}function A(t){return r({url:"/artists",method:"get",params:t})}function I(t){return r({url:"/artist/mv",method:"get",params:t})}function L(t){return r({url:"/artist/album",method:"get",params:t})}function x(t){return r({url:"/song/url",method:"get",params:t})}function D(t){return r({url:"/album",method:"get",params:t})}},2433:function(t,e,n){"use strict";var i=n(6369),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrap"},[n("div",{attrs:{id:"app"}},[n("HeaderNav"),n("keep-alive",{attrs:{include:["mvPlay","videoPlay"]}},[n("router-view")],1)],1)]),n("aplayer")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"drag",rawName:"v-drag"}]},[n("header",{staticClass:"head"},[n("div",{staticClass:"cl"},[n("router-link",{attrs:{to:"HomePage"}},[n("h3",[t._v("首页")])])],1),n("div",{staticClass:"center cl"},[n("div",{staticClass:"search"},[n("div",{staticClass:"search-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerms,expression:"searchTerms"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.searchTerms},on:{focus:t.switchChange,blur:t.switchNone,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSearch.apply(null,arguments)},input:function(e){e.target.composing||(t.searchTerms=e.target.value)}}})])])]),n("div",{staticClass:"cl"},[n("div",{staticClass:"gobackWrap"},[n("span",{staticClass:"goBack",on:{click:function(e){return t.goBack(-1)}}},[t._v("< ")]),t._v("  "),n("span",{staticClass:"goBack",on:{click:function(e){return t.goBack(1)}}},[t._v("> ")])])])])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.searchSwitch,expression:"searchSwitch"}],staticClass:"search-box"},t._l(t.musicList,(function(e,i){return n("li",{key:i,staticClass:"suggest-list",on:{click:function(n){return t.selectMusic(e.name,e.ar[0].name)}}},[n("span",{staticClass:"suggest-list-music",staticStyle:{width:"310px"}},[t._v(t._s(e.name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"180px"}},[t._v(t._s(e.ar[0].name))]),n("span",{staticClass:"suggest-list-music",staticStyle:{width:"50px"}},[t._v(t._s(e.dt))])])})),0)])},o=[],u=n(9531),l={data(){return{searchSwitch:!1,searchTerms:"",placeholder:"",musicList:[],inputTimer:null}},directives:{drag(t){let e=document.getElementById("app");t.onmousedown=t=>{let n=t.clientX,i=t.clientY,s=e.offsetLeft,a=e.offsetTop;document.onmousemove=t=>{let r=t.clientX-n,o=t.clientY-i;e.style.left=s+r+"px",e.style.top=a+o+"px"},document.onmouseup=t=>{document.onmousemove=null,document.onmouseup=null}}}},watch:{searchTerms:function(){this.search()}},mounted(){this.getSearchDefault()},methods:{goBack(t){this.$router.go(t)},switchNone(){setTimeout((()=>{this.searchSwitch=!1}),100)},switchChange(){this.searchSwitch=!0,this.searchTerms.trim()||this.getMusicInfo(this.placeholder)},selectMusic(t,e){this.placeholder=`${t}   -   ${e}`,this.searchTerms="",this.$router.push({name:"emptyPage",query:{keywords:t,reload:!0}}),this.searchSwitch=!0},enterSearch(){this.searchTerms.trim()?this.$router.push({name:"emptyPage",query:{keywords:this.searchTerms,reload:!0}}):(this.$router.push({name:"emptyPage",query:{keywords:this.placeholder,reload:!0}}),this.searchTerms=this.placeholder),this.searchSwitch=!1},search(){this.searchTerms.trim&&(this.inputTimer&&clearTimeout(this.inputTimer),this.inputTimer=setTimeout((()=>{this.getMusicInfo(this.searchTerms),clearTimeout(this.inputTimer)}),500))},getMusicInfo(t){let e={keywords:t,limit:50,offset:"",type:""};(0,u.Hv)(e).then((t=>{this.musicList=[],this.musicList=t.data.result.songs,this.count=t.data.result.songCount;for(let e=0;e<this.musicList.length;e++){let t=parseInt(this.musicList[e].dt/1e3/60),n=parseInt(this.musicList[e].dt/1e3%60);t<10&&(t="0"+t),n<10&&(n="0"+n),this.musicList[e].dt=t+":"+n}}))},getSearchDefault(){(0,u.rO)().then((t=>{this.placeholder=t.data.data.realkeyword}))}}},c=l,d=n(3736),m=(0,d.Z)(c,r,o,!1,null,"834dfc1e",null),h=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"aplayerWrap"}},[n("ul",{staticClass:"musicWrap"},[0!==t.audio.length?n("div",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"listTitle",staticStyle:{"text-align":"center"}},[t._v(" 播放列表 ")]):t._e(),n("div",{staticClass:"wrapShow"},t._l(t.audio,(function(e,i){return n("li",{key:e.id,staticClass:"musicLi",on:{click:function(e){return e.target!==e.currentTarget?null:t.playMusic(i)}}},[n("span",[t._v(t._s(i+1)+".")]),t._v("  "),n("span",{staticClass:"musicName"},[t._v(t._s(e.name))]),n("span",{staticClass:"artist"},[t._v(t._s(e.artist))]),n("span",{staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.deleteMusic(i)}}},[n("i",{staticClass:"el-icon-delete iconhover"})])])})),0)]),0!==t.audition.length?n("div",{staticClass:"audition"},t._l(t.audition,(function(e,i){return n("div",{key:e.id,staticClass:"inline-block",staticStyle:{margin:"0 auto"},on:{click:function(e){return e.target!==e.currentTarget?null:t.playAudition(i)}}},[n("div",{staticClass:"auditionTitle"},[t._v("正在试听:")]),n("div",{staticClass:"auditionMusic"},[n("span",{staticClass:"inline-block auditionName"},[t._v(t._s(e.name))]),n("span",{staticClass:"inline-block auditionArtist"},[t._v(t._s(e.artist))]),n("span",{staticClass:"inline-block auditionDelete",on:{click:function(e){return e.stopPropagation(),t.deleteAudition(i)}}},[n("i",{staticClass:"el-icon-delete iconhover"})]),n("span",{staticClass:"inline-block auditionAdd",on:{click:function(n){return n.stopPropagation(),t.addListenMusic(e.id)}}},[n("i",{staticClass:"el-icon-folder-add iconhover"})])])])})),0):t._e(),0!==t.audio.length&&0===t.musicAudioStatu?n("aplayer",{ref:"aplayer",staticStyle:{color:"rgb(120, 120, 120)"},attrs:{fixed:"",audio:t.audio,lrcType:1}}):t._e(),0!==t.audition.length&&1===t.musicAudioStatu?n("div",[n("aplayer",{ref:"auditions",attrs:{autoplay:"",fixed:!0,audio:t.audition,"liric-type":1}})],1):t._e()],1)},f=[],g=n(3822),v=n(4979),y={data(){return{}},computed:{...(0,g.rn)(["audio","audition","musicAudioStatu"])},mounted(){},methods:{...(0,g.OI)(["deleteMUSIC","deleteAUDITION","changeAPLAYER"]),playMusic(t){this.changeAPLAYER(0);let e=this.$refs.aplayer;e.switch(t),e.toggle()},deleteMusic(t){this.deleteMUSIC(t)},playAudition(t){this.changeAPLAYER(1);let e=this.$refs.auditions;e.switch(t),e.toggle()},deleteAudition(t){this.deleteAUDITION(t)},async addListenMusic(t){let e=this,n="audition";await(0,u.t7)({ids:t}).then((i=>{(0,v.H)(t,i.data.songs[0].fee,0,n,e)}))}},directives:{drag(t){let e=document.getElementsByClassName("musicWrap");t.onmousedown=t=>{let n=t.clientX,i=t.clientY,s=e[0].offsetLeft,a=e[0].offsetTop;document.onmousemove=t=>{let r=t.clientX-n,o=t.clientY-i;e[0].style.left=s+r+"px",e[0].style.top=a+o+"px"},document.onmouseup=t=>{document.onmousemove=null,document.onmouseup=null}}}}},b=y,w=(0,d.Z)(b,p,f,!1,null,null,null),S=w.exports,C=n(8477),_={name:"App",components:{HeaderNav:h,aplayer:S,AlbumDetail:C["default"]},data(){return{}},mounted(){},methods:{}},k=_,T=(0,d.Z)(k,s,a,!1,null,null,null),P=T.exports,A=n(9907);(0,A.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var I=n(2631);i["default"].use(I.Z);const L=new I.Z({mode:"hash",routes:[{path:"",redirect:{name:"HomePage"}},{path:"/HomePage",name:"HomePage",component:()=>n.e(659).then(n.bind(n,1659))},{path:"/emptyPage",name:"emptyPage",component:()=>n.e(337).then(n.bind(n,3337))},{path:"/MusicPlayList",name:"MusicPlayList",component:()=>n.e(558).then(n.bind(n,2558))},{path:"/songDetails",name:"songDetails",component:()=>n.e(170).then(n.bind(n,2170)),props:!0},{path:"/albumDetail",name:"albumDetail",component:()=>Promise.resolve().then(n.bind(n,8477)),props:!0},{path:"/singerDetail",name:"singerDetail",component:()=>n.e(459).then(n.bind(n,2459)),props:!0},{path:"/playListDetails",name:"playListDetails",component:()=>n.e(40).then(n.bind(n,1040)),props:!0},{path:"/mvPlay",name:"mvPlay",component:()=>n.e(534).then(n.bind(n,3534)),props:!0,meta:{login:!0,met:!1}},{path:"/videoPlay",name:"videoPlay",component:()=>n.e(605).then(n.bind(n,8605)),props:!0}]});var x=L,D=n(2415);i["default"].use(g.ZP);var $=new g.ZP.Store({plugins:[(0,D.Z)({storage:window.sessionStorage})],state:{tagSwitch:{songSwitch:!0,albumSwitch:!1,singerSwitch:!1,playListSwitch:!1,videoSwitch:!1,mvSwitch:!1},audio:[],audition:[],musicAudioStatu:0,alplayShow:!0},mutations:{addSONG(t,e){for(let n of t.audio)if(n.id===e.id)return void this._vm.$message("播放列表已存在这首歌");t.audio.push(e),this._vm.$message({type:"success",message:"歌曲已添加到播放列表"})},deleteMUSIC(t,e){t.audio.splice(e,1),this._vm.$message({type:"success",message:"歌曲已移出播放列表"})},tagSelect(t,e){for(let n in t.tagSwitch)n!=e&&(t.tagSwitch[n]=!1);t.tagSwitch[e]=!0},addAUDITION(t,e){for(let n of t.audition)if(n.id===e.id)return void this._vm.$message("正在试听这首歌");t.musicAudioStatu=1,t.audition.splice(0,1),t.audition[0]=e,this._vm.$message({type:"success",message:"歌曲已添加到试听"})},deleteAUDITION(t,e){t.audition.splice(e,1),this._vm.$message({type:"success",message:"歌曲已移出试听列表"})},changeAPLAYER(t,e){t.musicAudioStatu=1===e?1:0}},actions:{}}),M=n(8499),N=n.n(M),O=n(6033),E=n.n(O),U=n(6265),j=n.n(U);i["default"].use(E(),{productionTip:!0}),j().defaults.withCredentials=!0,i["default"].use(N()),i["default"].config.productionTip=!1,new i["default"]({router:x,store:$,render:t=>t(P)}).$mount("#app")},767:function(t){const e=t=>{if(!t)return;let e=new Date(t).getFullYear(),n=new Date(t).getMonth()+1,i=new Date(t).getDate();return e+"-"+n+"-"+i},n=(t,e)=>{for(let n=0;n<t.length;n++){let i=parseInt(t[n][e]/1e3/60),s=parseInt(t[n][e]/1e3%60);i<10&&(i="0"+i),s<10&&(s="0"+s),t[n][e]=i+":"+s}},i=(t,e)=>{for(let n=0;n<t.length;n++)String(t[n][e]).length>5&&String(t[n][e]).length<9?t[n][e]=String(t[n][e]).substr(0,String(t[n][e]).length-4)+"万":5==String(t[n][e]).length?t[n][e]=String(t[n][e]).substr(0,1)+"."+String(t[n][e]).substr(1,2)+"万":9==String(t[n][e]).length?t[n][e]=String(t[n][e]).substr(0,1)+"."+String(t[n][e]).substr(1,2)+"亿":String(t[n][e]).length>9&&(t[n][e]=String(t[n][e]).substr(0,String(t[n][e]).length-8)+"亿")},s=(t,e)=>{fetch(t).then((t=>t.blob())).then((t=>{const n=document.createElement("a");document.body.appendChild(n),n.style.display="none";const i=window.URL.createObjectURL(t);n.href=i,n.download=`${e}.mp3`,n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(i)}))},a=()=>(new Date).getTime();t.exports={transtime:e,transMusicTime:n,transPlayCount:i,download:s,getTimestamp:a}},4979:function(t,e,n){"use strict";n.d(e,{H:function(){return s},b:function(){return a}});var i=n(9531);async function s(t,e,n,s,a){let r=null,o="";a[s][n].timer&&(1==e&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((t=>{if(!t.data.data[0].url)return a.$message({message:"这首歌暂无版权",type:"error"}),a[s][n].timer=!1,void setTimeout((()=>{a[s][n].timer=!0}),3e3);r=t.data.data[0].url})),(0,i.mq)({id:t}).then((t=>{o=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((e=>{a.$store.commit("addSONG",{name:e.data.songs[0].name,artist:e.data.songs[0].ar[0].name,url:r,cover:e.data.songs[0].al.picUrl,lrc:a.songlrc,id:t}),a[s][n].timer=!1,setTimeout((()=>{a[s][n].timer=!0}),3e3)})))}function a(t,e,n,s,a){let r=null,o="";a[s][n].timer&&(1==e&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((t=>{if(!t.data.data[0].url)return a.$message({message:"这首歌暂无版权",type:"error"}),a[s][n].timer=!1,void setTimeout((()=>{a[s][n].timer=!0}),3e3);r=t.data.data[0].url})),(0,i.mq)({id:t}).then((t=>{o=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((e=>{null!=r&&a.$store.commit("addAUDITION",{name:e.data.songs[0].name,artist:e.data.songs[0].ar[0].name,url:r,cover:e.data.songs[0].al.picUrl,lrc:o,id:t,timer:!0}),a[s][n].timer=!1,setTimeout((()=>{a[s][n].timer=!0}),3e3)})))}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],s=t[c][1],a=t[c][2];for(var o=!0,u=0;u<i.length;u++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(o=!1,a<r&&(r=a));if(o){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{40:"3f3a6bec",170:"c939ed5a",337:"55d5c327",459:"a5816a56",534:"e91355df",558:"4073f1d1",605:"ca447115",659:"e1095c92"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{40:"4d259c6b",170:"d2f62d5f",337:"2484c935",459:"82e1a204",534:"c39cecd1",558:"008dfb6a",605:"0d52b748",659:"e1c6f558"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="music:";n.l=function(i,s,a,r){if(t[i])t[i].push(s);else{var o,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+a){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+a),o.src=i),t[i]=[s];var m=function(e,n){o.onerror=o.onload=null,clearTimeout(h);var s=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=o,s.parentNode.removeChild(s),i(u)}};return s.onerror=s.onload=a,s.href=e,document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var s=n[i],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===t||a===e))return s}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){s=r[i],a=s.getAttribute("data-href");if(a===t||a===e)return s}},i=function(i){return new Promise((function(s,a){var r=n.miniCssF(i),o=n.p+r;if(e(r,o))return s();t(i,o,s,a)}))},s={143:0};n.f.miniCss=function(t,e){var n={40:1,170:1,337:1,459:1,534:1,558:1,605:1,659:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=i(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var a=new Promise((function(n,i){s=t[e]=[n,i]}));i.push(s[2]=a);var r=n.p+n.u(e),o=new Error,u=function(i){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var a=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,s[1](o)}};n.l(r,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,r=i[0],o=i[1],u=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(u)var c=u(n)}for(e&&e(i);l<r.length;l++)a=r[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},i=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2433)}));i=n.O(i)})();
//# sourceMappingURL=app.90ff904d.js.map