"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[573],{18687:function(s,t,i){i.d(t,{Z:function(){return v}});var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",s._l(s.songlist,(function(t,a){return i("div",{key:t.id,staticClass:"music-list"},[i("div",{staticStyle:{width:"35px"}},[s._v(s._s(a+1)+".")]),i("div",{staticClass:"music-list-info",on:{dblclick:function(i){return s.goSongDetails(t)}}},[i("div",{staticClass:"music-list-span"},[s._v(s._s(t.name))]),i("div",{staticClass:"music-list-span"},[s._v(s._s(t.ar[0].name))]),i("div",{staticClass:"music-list-span music-list-dt"},[s._v(s._s(t.dt))])]),i("div",{staticClass:"option"},[i("span",{on:{click:function(i){return s.likeMusic(t.id,!0)}}},[i("i",{staticClass:"iFont el-icon-star-on iconhover"})]),i("span",{on:{click:function(i){return s.likeMusic(t.id,!1)}}},[i("i",{staticClass:"iFont el-icon-star-off iconhover"})]),i("span",{on:{click:function(i){return s.listenMusic(t)}}},[i("i",{staticClass:"el-icon-headset iconhover"})]),0==t.fee||8==t.fee?i("span",{on:{click:function(i){return i.stopPropagation(),s.playMusic(t)}}},[i("i",{staticClass:"el-icon-folder-add iconhover"})]):s._e(),Boolean(t.mv)?i("span",{on:{click:function(i){return i.stopPropagation(),s.playMV(t.mv)}}},[i("i",{staticClass:"el-icon-video-camera iconhover"})]):s._e(),0==t.fee||8==t.fee?i("span",{on:{click:function(i){return s.getDownloadUrl(t.id,t.name)}}},[i("i",{staticClass:"el-icon-download iconhover"})]):s._e()])])})),0)},n=[],e=i(38898),l=i(24979),c=i(55615),o=i(30767),u={props:{songlist:Array},data:function(){return{}},methods:{goSongDetails:function(s){this.$router.push({name:"songDetails",params:{songDetails:s}})},likeMusic:function(s,t){var i=this;(0,c.Y)({id:s,like:t}).then((function(s){if(200===s.data.code){if(t)return void i.$message({type:"success",message:"已添加入我的喜欢-可进入网易云音乐查看"});i.$message({type:"success",message:"已从我的喜欢列表删除"})}})).catch((function(s){}))},listenMusic:function(s){var t=this;(0,l.b)(s,t)},playMusic:function(s){var t=this;(0,l.H)(s,t)},playMV:function(s){this.$router.push({name:"mvPlay",params:{mvId:s}})},getDownloadUrl:function(s,t){var i=this;i.$message({type:"success",message:"正在尝试下载"});var a={id:s};(0,e.km)(a).then((function(s){(0,o.download)(s.data.data[0].url,t),i.$message({type:"success",message:"开始下载了"})}))}}},r=u,d=i(1001),m=(0,d.Z)(r,a,n,!1,null,null,null),v=m.exports},56573:function(s,t,i){i.r(t),i.d(t,{default:function(){return v}});var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"list-wrap"},[i("div",{staticClass:"pageName"},[s._v("专辑详情")]),i("div",{staticClass:"descript"}),i("div",[i("div",{staticClass:"ul"},[i("div",{staticClass:"details"},[i("div",{staticClass:"details-img"},[i("img",{attrs:{src:s.albumDesc.blurPicUrl,alt:""}})]),i("div",{staticClass:"detailsRight"},[i("div",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[s._v(" "+s._s(s.albumDesc.name)+" ")]),i("div",{staticStyle:{"font-size":"14px"}},[i("div",{staticClass:"aliasClass"},[i("img",{staticClass:"artistPic",attrs:{src:s.albumDesc.artist.img1v1Url,alt:""}}),s._v("- "),i("span",{staticClass:"playListNickName"},[s._v(s._s(s.albumDesc.artist.name))])])])])]),i("div",{attrs:{id:"singleSongs"}},[i("div",{staticClass:"countLine"},[s._v("专辑歌曲："+s._s(s.albumSongs.length)+" 首")]),i("songlist",{attrs:{songlist:s.albumSongs}})],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[i("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:s.listen,"liric-type":1}})],1)])},n=[],e=i(68439),l=i(38898),c=i(30767),o=i(18687),u={components:{songlist:o.Z},data:function(){return{listen:[],albumId:"",albumSongs:[],albumDesc:{artist:{img1v1Url:""}}}},mounted:function(){this.$route.params.albumId&&localStorage.setItem("albumId",this.$route.params.albumId),this.$route.params.albumId?this.albumId=this.$route.params.albumId:this.albumId=localStorage.getItem("albumId"),this.getAlbumContent()},methods:{getAlbumContent:function(){var s=this,t={id:s.albumId};(0,l.Li)(t).then((function(t){s.albumDesc=t.data.album,s.albumSongs=t.data.songs;var i,a=(0,e.Z)(s.albumSongs);try{for(a.s();!(i=a.n()).done;){var n=i.value;s.$set(n,"timer",!0)}}catch(o){a.e(o)}finally{a.f()}var l="dt";(0,c.transMusicTime)(s.albumSongs,l)}))}}},r=u,d=i(1001),m=(0,d.Z)(r,a,n,!1,null,null,null),v=m.exports},55615:function(s,t,i){i.d(t,{Y:function(){return e},k:function(){return n}});var a=i(39950);function n(s){return(0,a.l)({url:"/playlist/subscribe",method:"post",data:s})}function e(s){return(0,a.l)({url:"/like",method:"post",data:s})}}}]);
//# sourceMappingURL=573-legacy.ba37280a.js.map