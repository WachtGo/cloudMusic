"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[573],{6857:function(s,t,a){a.d(t,{Z:function(){return v}});var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",s._l(s.songlist,(function(t,i){return a("div",{key:t.id,staticClass:"music-list"},[a("div",{staticStyle:{width:"20px"}},[s._v(s._s(i+1)+".")]),a("div",{staticClass:"music-list-info",on:{dblclick:function(a){return s.goSongDetails(t)}}},[a("div",{staticClass:"music-list-span"},[s._v(s._s(t.name))]),a("div",{staticClass:"music-list-span"},[s._v(s._s(t.ar[0].name))]),a("div",{staticClass:"music-list-span music-list-dt"},[s._v(s._s(t.dt))])]),a("div",{staticClass:"option"},[a("span",{on:{click:function(a){return s.likeMusic(t.id)}}},[a("i",{staticClass:"iFont el-icon-star-off"})]),a("span",{on:{click:function(a){return s.listenMusic(t)}}},[a("i",{staticClass:"el-icon-headset iconhover"})]),0==t.fee||8==t.fee?a("span",{on:{click:function(a){return a.stopPropagation(),s.playMusic(t)}}},[a("i",{staticClass:"el-icon-folder-add iconhover"})]):s._e(),Boolean(t.mv)?a("span",{on:{click:function(a){return a.stopPropagation(),s.playMV(t.mv)}}},[a("i",{staticClass:"el-icon-video-camera iconhover"})]):s._e(),0==t.fee||8==t.fee?a("span",{on:{click:function(a){return s.getDownloadUrl(t.id,t.name)}}},[a("i",{staticClass:"el-icon-download iconhover"})]):s._e()])])})),0)},e=[],l=a(8898),n=a(4979),o=a(5615),c=a(767),r={props:{songlist:Array},data(){return{}},methods:{goSongDetails(s){this.$router.push({name:"songDetails",params:{songDetails:s}})},likeMusic(s){(0,o.Y)({id:s}).then((s=>{console.log("添加",s),200===s.data.code?this.$message({type:"success",message:"已添加入我的喜欢-可进入网易云音乐查看"}):this.$message({type:"error",message:`添加失败：状态码${s.data.code}`})})).catch((s=>{}))},listenMusic(s){var t=this;(0,n.b)(s,t)},playMusic(s){var t=this;(0,n.H)(s,t)},playMV(s){this.$router.push({name:"mvPlay",params:{mvId:s}})},getDownloadUrl(s,t){var a=this;a.$message({type:"success",message:"正在尝试下载"});let i={id:s};(0,l.km)(i).then((s=>{(0,c.download)(s.data.data[0].url,t),a.$message({type:"success",message:"开始下载了"})}))}}},u=r,d=a(1001),m=(0,d.Z)(u,i,e,!1,null,null,null),v=m.exports},6573:function(s,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"pageName"},[s._v("专辑详情")]),a("div",{staticClass:"descript"}),a("div",[a("div",{staticClass:"ul"},[a("div",{staticClass:"details"},[a("div",{staticClass:"details-img"},[a("img",{attrs:{src:s.albumDesc.blurPicUrl,alt:""}})]),a("div",{staticClass:"detailsRight"},[a("div",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[s._v(" "+s._s(s.albumDesc.name)+" ")]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",{staticClass:"aliasClass"},[a("img",{staticClass:"artistPic",attrs:{src:s.albumDesc.artist.img1v1Url,alt:""}}),s._v("- "),a("span",{staticClass:"playListNickName"},[s._v(s._s(s.albumDesc.artist.name))])])])])]),a("div",{attrs:{id:"singleSongs"}},[a("div",{staticClass:"countLine"},[s._v("专辑歌曲："+s._s(s.albumSongs.length)+" 首")]),a("songlist",{attrs:{songlist:s.albumSongs}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:s.listen,"liric-type":1}})],1)])},e=[],l=a(8898),n=a(767),o=a(6857),c={components:{songlist:o.Z},data(){return{listen:[],albumId:"",albumSongs:[],albumDesc:{artist:{img1v1Url:""}}}},mounted(){this.$route.params.albumId&&localStorage.setItem("albumId",this.$route.params.albumId),this.$route.params.albumId?this.albumId=this.$route.params.albumId:this.albumId=localStorage.getItem("albumId"),this.getAlbumContent()},methods:{getAlbumContent(){var s=this;let t={id:s.albumId};(0,l.Li)(t).then((t=>{s.albumDesc=t.data.album,s.albumSongs=t.data.songs;for(let i of s.albumSongs)s.$set(i,"timer",!0);let a="dt";(0,n.transMusicTime)(s.albumSongs,a)}))}}},r=c,u=a(1001),d=(0,u.Z)(r,i,e,!1,null,null,null),m=d.exports},5615:function(s,t,a){a.d(t,{Y:function(){return l},k:function(){return e}});var i=a(9950);function e(s){return(0,i.l)({url:"/playlist/subscribe",method:"post",data:s})}function l(s){return(0,i.l)({url:"/like",method:"post",data:s})}}}]);
//# sourceMappingURL=573.3dfd6ff0.js.map