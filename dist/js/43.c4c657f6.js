"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[43],{3043:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-wrap"},[a("h3",[t._v("专辑详情")]),a("div",{staticClass:"descript"}),a("div",[a("div",{staticClass:"ul"},[a("div",{staticClass:"playListDetailes"},[a("div",{staticClass:"playListImg"},[a("img",{attrs:{src:t.albumDesc.blurPicUrl,alt:""}})]),a("div",{staticClass:"detailsRight"},[a("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.albumDesc.name)+" ")]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",{staticClass:"aliasClass"},[a("img",{staticClass:"artistPic",attrs:{src:t.albumDesc.artist.img1v1Url,alt:""}}),t._v("- "),a("span",{staticClass:"playListNickName"},[t._v(t._s(t.albumDesc.artist.name))])])])])]),a("div",{attrs:{id:"singleSongs"}},[a("h3",[t._v("专辑歌曲："+t._s(t.albumSongs.length)+"首")]),t._l(t.albumSongs,(function(s,e){return a("div",{key:e,staticClass:"SingsList"},[a("span",{staticClass:"song-list",staticStyle:{width:"20px"}},[t._v(t._s(e+1)+".")]),a("div",{on:{dblclick:function(a){return t.goSongDetails(s.id)}}},[a("span",{staticClass:"song-list",staticStyle:{width:"350px"}},[t._v(" "+t._s(s.name)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"250px","text-align":"center"}},[t._v(" "+t._s(s.ar[0].name)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"230px"}},[t._v(" "+t._s(s.dt)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"150px"}})]),a("span",{staticClass:"song-list song-list-option"},[a("span",{on:{click:function(a){return a.stopPropagation(),t.listenMusic(s.id,s.fee,e)}}},[a("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMusic(s.id,s.fee,e)}}},[a("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMV(s.mv,s.name)}}},[a("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.getDownloadUrl(s.id,s.name)}}},[a("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])}))],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},n=[],l=a(3629),i=a(2650),o={data(){return{listen:[],albumSongs:[],albumDesc:{}}},created(){this.getAlbumContent()},methods:{getAlbumContent(){var t=this;let s={id:t.$route.query.id};(0,l.Li)(s).then((s=>{console.log("专辑信息---：",s.data.album),console.log("专辑歌曲---：",s.data.songs),t.albumDesc=s.data.album,t.albumSongs=s.data.songs;for(let e of t.albumSongs)t.$set(e,"timer",!0);let a="dt";t.transMusicTime(t.albumSongs,a)}))},transMusicTime(t,s){for(let a=0;a<t.length;a++){let e=parseInt(t[a][s]/1e3/60),n=parseInt(t[a][s]/1e3%60);e<10&&(e="0"+e),n<10&&(n="0"+n),t[a][s]=e+":"+n}},getDownloadUrl(t,s){var a=this;let e={id:t};(0,l.km)(e).then((t=>{console.log("歌曲下载地址：",t.data.data.url),(0,i.L)(t.data.data.url,s),a.$message({type:"success",message:"开始下载了"})}))},listenMusic(t,s,a){var e=this;e.albumSongs[a].timer&&(1==s&&e.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((t=>{if(console.log("播放音乐链接",t.data.data[0].url),!t.data.data[0].url)return e.$message({message:"不好意思这首歌暂无版权",type:"error"}),e.albumSongs[a].timer=!1,void setTimeout((()=>{e.albumSongs[a].timer=!0}),3e3);e.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((t=>{e.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((t=>{null!=e.songUrlAdd&&(e.listen=[],e.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:e.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:e.songlrc}),console.log(e.listen),e.songUrlAdd=null,e.songlrc="")})))},playMusic(t,s,a){var e=this;e.albumSongs[a].timer&&(1==s&&e.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((t=>{if(console.log("播放音乐链接",t.data.data[0].url),!t.data.data[0].url)return e.$message({message:"不好意思这首歌暂无版权",type:"error"}),e.albumSongs[a].timer=!1,void setTimeout((()=>{e.albumSongs[a].timer=!0}),3e3);e.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((t=>{e.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((t=>{console.log("获取歌曲信息，添加到播放器：",t.data.songs),null!=e.songUrlAdd&&(e.$store.commit("addSong",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:e.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:e.songlrc}),console.log(e.$store.state.audio,"添加歌曲后的歌曲播放列表-----"),e.songUrlAdd=null,e.songlrc="",e.albumSongs[a].timer=!1,setTimeout((()=>{e.albumSongs[a].timer=!0}),3e3))})))},goSongDetails(t){this.$router.push({name:"songDetails",query:{songId:t}})},playMV(t,s){this.$router.push({name:"mvPlay",query:{mvId:t,mvName:s}})},goMv(t){this.$router.push({name:"mvPlay",query:{mvId:t}})},randomColor(){return`#${(16777215*Math.random()<<0).toString(16)}`}}},r=o,c=a(1001),d=(0,c.Z)(r,e,n,!1,null,"c1e878ec",null),u=d.exports},2650:function(t,s,a){a.d(s,{L:function(){return l}});var e=a(6166),n=a.n(e);const l=function(t,s){if(!t)return;let a=s||"";n()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((t=>{let s=new Blob([t.data],{type:t.data.type}),e=document.createElement("a"),n=window.URL.createObjectURL(s);e.href=n,e.download=a,document.body.appendChild(e),e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(n)})).catch((function(t){console.log(t)}))}}}]);
//# sourceMappingURL=43.c4c657f6.js.map