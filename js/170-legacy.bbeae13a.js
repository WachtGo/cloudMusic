"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[170],{8885:function(s,t,a){a.d(t,{Z:function(){return d}});var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",s._l(s.songlist,(function(t,i){return a("div",{key:t.id,staticClass:"music-list"},[a("div",{staticStyle:{width:"35px"}},[s._v(s._s(i+1)+".")]),a("div",{staticClass:"music-list-info",on:{dblclick:function(a){return s.goSongDetails(t)}}},[a("div",{staticClass:"music-list-span"},[s._v(s._s(t.name))]),a("div",{staticClass:"music-list-span"},[s._v(s._s(t.ar[0].name))]),a("div",{staticClass:"music-list-span music-list-dt"},[s._v(s._s(t.dt))])]),a("div",{staticClass:"option"},[a("span",{on:{click:function(a){return s.listenMusic(t)}}},[a("i",{staticClass:"el-icon-headset iconhover",staticStyle:{height:"100%"}})]),0==t.fee||8==t.fee?a("span",{on:{click:function(a){return a.stopPropagation(),s.playMusic(t)}}},[a("i",{staticClass:"el-icon-folder-add iconhover",staticStyle:{height:"100%"}})]):s._e(),Boolean(t.mv)?a("span",{on:{click:function(a){return a.stopPropagation(),s.playMV(t.mv)}}},[a("i",{staticClass:"el-icon-video-camera iconhover",staticStyle:{height:"100%"}})]):s._e(),0==t.fee||8==t.fee?a("span",{on:{click:function(a){return s.getDownloadUrl(t.id,t.name)}}},[a("i",{staticClass:"el-icon-download iconhover",staticStyle:{height:"100%"}})]):s._e()])])})),0)},e=[],l=a(8898),n=a(4979),c=a(767),o={props:{songlist:Array},data:function(){return{}},methods:{goSongDetails:function(s){this.$router.push({name:"songDetails",params:{songDetails:s}})},listenMusic:function(s){var t=this;(0,n.b)(s,t)},playMusic:function(s){var t=this;(0,n.H)(s,t)},playMV:function(s){this.$router.push({name:"mvPlay",params:{mvId:s}})},getDownloadUrl:function(s,t){var a=this;a.$message({type:"success",message:"正在尝试下载"});var i={id:s};(0,l.km)(i).then((function(s){(0,c.download)(s.data.data[0].url,t),a.$message({type:"success",message:"正在后台下载资源，完成即可保存"})}))}}},u=o,r=a(1001),m=(0,r.Z)(u,i,e,!1,null,null,null),d=m.exports},3170:function(s,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"pageName"},[s._v("专辑详情")]),a("div",{staticClass:"descript"}),a("div",[a("div",{staticClass:"ul"},[a("div",{staticClass:"details"},[a("div",{staticClass:"details-img"},[a("img",{attrs:{src:s.albumDesc.blurPicUrl,alt:" "}})]),a("div",{staticClass:"detailsRight"},[a("div",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[s._v(" "+s._s(s.albumDesc.name)+" ")]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",{staticClass:"aliasClass"},[a("img",{staticClass:"artistPic",attrs:{src:s.albumDesc.artist.img1v1Url,alt:" "}}),s._v("- "),a("span",{staticClass:"playListNickName"},[s._v("  "+s._s(s.albumDesc.artist.name))])])])])]),a("div",{attrs:{id:"singleSongs"}},[a("div",{staticClass:"countLine"},[s._v("专辑歌曲："+s._s(s.albumDesc.size)+" 首")]),0===s.albumSongs.length?a("div",{staticClass:"loading"},[a("i",{staticClass:"el-icon-loading"})]):s._e(),a("songlist",{attrs:{songlist:s.albumSongs}})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:s.listen,"liric-type":1}})],1)])},e=[],l=a(8439),n=a(8898),c=a(767),o=a(8885),u={components:{songlist:o.Z},data:function(){return{listen:[],albumId:"",albumSongs:[],albumDesc:{albumId:"",size:0,name:"",blurPicUrl:"",artist:{name:"",img1v1Url:""}}}},mounted:function(){this.$route.params.albumDesc&&localStorage.setItem("albumDesc",this.$route.params.albumDesc),this.$route.params.albumDesc?this.albumDesc=this.$route.params.albumDesc:this.albumDesc=localStorage.getItem("albumDesc"),this.getAlbumContent()},methods:{getAlbumContent:function(){var s=this,t={id:s.albumDesc.albumId};(0,n.Li)(t).then((function(t){s.albumDesc=t.data.album,s.albumSongs=t.data.songs;var a,i=(0,l.Z)(s.albumSongs);try{for(i.s();!(a=i.n()).done;){var e=a.value;s.$set(e,"timer",!0)}}catch(o){i.e(o)}finally{i.f()}var n="dt";(0,c.transMusicTime)(s.albumSongs,n)}))}}},r=u,m=a(1001),d=(0,m.Z)(r,i,e,!1,null,null,null),v=d.exports}}]);