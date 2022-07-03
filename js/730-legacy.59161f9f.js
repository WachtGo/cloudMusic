"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[730],{1730:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-wrap"},[a("h3",[t._v("专辑详情")]),a("div",{staticClass:"descript"}),a("div",[a("div",{staticClass:"ul"},[a("div",{staticClass:"playListDetailes"},[a("div",{staticClass:"playListImg"},[a("img",{attrs:{src:t.albumDesc.blurPicUrl,alt:""}})]),a("div",{staticClass:"detailsRight"},[a("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.albumDesc.name)+" ")]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",{staticClass:"aliasClass"},[a("img",{staticClass:"artistPic",attrs:{src:t.albumDesc.artist.img1v1Url,alt:""}}),t._v("- "),a("span",{staticClass:"playListNickName"},[t._v(t._s(t.albumDesc.artist.name))])])])])]),a("div",{attrs:{id:"singleSongs"}},[a("h3",[t._v("专辑歌曲："+t._s(t.albumSongs.length)+"首")]),t._l(t.albumSongs,(function(s,n){return a("div",{key:n,staticClass:"SingsList"},[a("span",{staticClass:"song-list",staticStyle:{width:"20px"}},[t._v(t._s(n+1)+".")]),a("div",{on:{dblclick:function(a){return t.goSongDetails(s.id)}}},[a("span",{staticClass:"song-list",staticStyle:{width:"350px"}},[t._v(" "+t._s(s.name)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"250px","text-align":"center"}},[t._v(" "+t._s(s.ar[0].name)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"230px"}},[t._v(" "+t._s(s.dt)+" ")]),a("span",{staticClass:"song-list",staticStyle:{width:"150px"}})]),a("span",{staticClass:"song-list song-list-option"},[a("span",{on:{click:function(a){return a.stopPropagation(),t.listenMusic(s.id,s.fee,n)}}},[a("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMusic(s.id,s.fee,n)}}},[a("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMV(s.mv,s.name)}}},[a("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.getDownloadUrl(s.id,s.name)}}},[a("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])}))],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},e=[],i=a(7965),o=(a(8309),a(1539),a(9714),a(3629)),l=a(2650),r={data:function(){return{listen:[],albumSongs:[],albumDesc:{}}},created:function(){this.getAlbumContent()},methods:{getAlbumContent:function(){var t=this,s={id:t.$route.query.id};(0,o.Li)(s).then((function(s){t.albumDesc=s.data.album,t.albumSongs=s.data.songs;var a,n=(0,i.Z)(t.albumSongs);try{for(n.s();!(a=n.n()).done;){var e=a.value;t.$set(e,"timer",!0)}}catch(l){n.e(l)}finally{n.f()}var o="dt";t.transMusicTime(t.albumSongs,o)}))},transMusicTime:function(t,s){for(var a=0;a<t.length;a++){var n=parseInt(t[a][s]/1e3/60),e=parseInt(t[a][s]/1e3%60);n<10&&(n="0"+n),e<10&&(e="0"+e),t[a][s]=n+":"+e}},getDownloadUrl:function(t,s){var a=this,n={id:t};(0,o.km)(n).then((function(t){(0,l.L)(t.data.data.url,s),a.$message({type:"success",message:"开始下载了"})}))},listenMusic:function(t,s,a){var n=this;n.albumSongs[a].timer&&(1==s&&n.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,o.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return n.$message({message:"不好意思这首歌暂无版权",type:"error"}),n.albumSongs[a].timer=!1,void setTimeout((function(){n.albumSongs[a].timer=!0}),3e3);n.songUrlAdd=t.data.data[0].url})),(0,o.mq)({id:t}).then((function(t){n.songlrc=t.data.lrc.lyric})),(0,o.t7)({ids:t}).then((function(t){null!=n.songUrlAdd&&(n.listen=[],n.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:n.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:n.songlrc}),n.songUrlAdd=null,n.songlrc="")})))},playMusic:function(t,s,a){var n=this;n.albumSongs[a].timer&&(1==s&&n.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,o.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return n.$message({message:"不好意思这首歌暂无版权",type:"error"}),n.albumSongs[a].timer=!1,void setTimeout((function(){n.albumSongs[a].timer=!0}),3e3);n.songUrlAdd=t.data.data[0].url})),(0,o.mq)({id:t}).then((function(t){n.songlrc=t.data.lrc.lyric})),(0,o.t7)({ids:t}).then((function(t){null!=n.songUrlAdd&&(n.$store.commit("addSong",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:n.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:n.songlrc}),n.songUrlAdd=null,n.songlrc="",n.albumSongs[a].timer=!1,setTimeout((function(){n.albumSongs[a].timer=!0}),3e3))})))},goSongDetails:function(t){this.$router.push({name:"songDetails",query:{songId:t}})},playMV:function(t,s){this.$router.push({name:"mvPlay",query:{mvId:t,mvName:s}})},goMv:function(t){this.$router.push({name:"mvPlay",query:{mvId:t}})},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},c=r,u=a(1001),d=(0,u.Z)(c,n,e,!1,null,"847401f0",null),m=d.exports},2650:function(t,s,a){a.d(s,{L:function(){return i}});a(1539),a(8783),a(3948),a(285),a(1637);var n=a(6166),e=a.n(n),i=function(t,s){if(t){var a=s||"";e()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var s=new Blob([t.data],{type:t.data.type}),n=document.createElement("a"),e=window.URL.createObjectURL(s);n.href=e,n.download=a,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(e)})).catch((function(t){console.log(t)}))}}}}]);
//# sourceMappingURL=730-legacy.59161f9f.js.map