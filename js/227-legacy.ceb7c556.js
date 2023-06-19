"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[227],{5305:function(t,i,s){s.d(i,{Z:function(){return f}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",t._l(t.songlist,(function(i,a){return s("div",{key:i.id,staticClass:"music-list"},[s("div",{staticStyle:{width:"35px"}},[t._v(t._s(a+1)+".")]),s("div",{staticClass:"music-list-info",on:{dblclick:function(s){return t.goSongDetails(i)}}},[s("div",{staticClass:"music-list-span"},[t._v(t._s(i.name))]),s("div",{staticClass:"music-list-span"},[t._v(t._s(i.ar[0].name))]),s("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(i.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.likeMusic(i.id,!0)}}},[s("i",{staticClass:"iFont el-icon-star-on iconhover"})]),s("span",{on:{click:function(s){return t.likeMusic(i.id,!1)}}},[s("i",{staticClass:"iFont el-icon-star-off iconhover"})]),s("span",{on:{click:function(s){return t.listenMusic(i)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(i)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(i.mv)?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMV(i.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return t.getDownloadUrl(i.id,i.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},e=[],n=s(8898),l=s(4979),c=s(5615),r=s(767),o={props:{songlist:Array},data:function(){return{}},methods:{goSongDetails:function(t){this.$router.push({name:"songDetails",params:{songDetails:t}})},likeMusic:function(t,i){var s=this,a=this.$loading({target:"#app_body",background:"rgba(255,255,255,0.1)"});(0,c.Yf)({id:t,like:i}).then((function(t){if(s.$nextTick((function(){a.close()})),console.log("添加",t),200===t.data.code){if(i)return void s.$message.success("已添加入我的喜欢-可进入网易云音乐查看");s.$message.success("已从我的喜欢列表删除")}})).catch((function(t){s.$nextTick((function(){a.close()}))}))},listenMusic:function(t){var i=this;(0,l.b)(t,i)},playMusic:function(t){var i=this;(0,l.H)(t,i)},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl:function(t,i){var s=this;s.$message({type:"success",message:"正在尝试下载"});var a={id:t};(0,n.km)(a).then((function(t){(0,r.download)(t.data.data[0].url,i),s.$message({type:"success",message:"开始下载了"})}))}}},u=o,d=s(1001),p=(0,d.Z)(u,a,e,!1,null,null,null),f=p.exports},227:function(t,i,s){s.r(i),s.d(i,{default:function(){return m}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"pageName"},[t._v("歌单详情")]),s("div",{staticClass:"descript"}),s("div",[s("div",{staticClass:"wrap2"},[s("div",{staticClass:"details",attrs:{id:"list_detail"}},[s("div",{staticClass:"details-img"},[s("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:" "}})]),s("div",{staticClass:"detailsRight"},[s("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" "),t.playListDetail.creator.userId===t.userId?s("div",{staticStyle:{display:"inline-block"}},[s("button",{staticClass:"my-button",on:{click:function(i){return t.deletePlayList(t.playListDetail.id)}}},[t._v(" 删除歌单 ")])]):t._e(),t.playListDetail.creator.userId!==t.userId?s("div",{staticStyle:{display:"inline-block"}},[s("button",{staticClass:"my-button",on:{click:function(i){return t.collectPlaylist("1")}}},[t._v(" 收藏")]),s("button",{staticClass:"my-button",on:{click:function(i){return t.collectPlaylist("2")}}},[t._v(" 取消收藏 ")])]):t._e()]),s("div",{staticClass:"playListCreator"},[s("img",{attrs:{src:t.playListDetail.creator.avatarUrl,alt:" "}}),s("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?s("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),0!==t.playListDetail.tags.length?s("div",{staticClass:"playListTag"},[s("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(i,a){return s("span",{key:a},[t._v(t._s(i)+" ")])}))],2):t._e(),s("p",{staticClass:"playListIntro"},[t._v(" "+t._s(t.playListDetail.description)+" ")])])]),s("div",{staticClass:"countLine"},[t._v(" 歌曲： "),s("span",[t._v(t._s(t.playListDetail.trackCount))])]),s("ul",{staticClass:"wrap-center"},[0===t.musicList.length?s("div",{staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]):t._e(),s("songlist",{attrs:{songlist:t.musicList}})],1)])])])},e=[],n=s(8439),l=s(8534),c=(s(6133),s(8862),s(8898)),r=s(5615),o=s(767),u=s(5305),d={components:{songlist:u.Z},data:function(){return{songListId:"",currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[{user:{avatarUrl:""}}],songMV:[],playListDetail:{name:"",coverImgUrl:"",trackCount:"",creator:{avatarUrl:"",nickname:"",signature:""},tags:[],description:""},userId:""}},created:function(){this.$store.state.token&&(this.userId=this.$store.state.user.userId)},mounted:function(){this.$route.params.playListDetail&&localStorage.setItem("playListDetail",JSON.stringify(this.$route.params.playListDetail)),this.$route.params.playListDetail?this.playListDetail=this.$route.params.playListDetail:this.playListDetail=JSON.parse(localStorage.getItem("playListDetail")),this.getSongList(),this.getPlaylistDetail()},methods:{handleCurrentChange:function(t){this.currentPage=t;var i=this;i.getPlaylistDetail(t)},getPlaylistDetail:function(){var t=this,i={id:t.playListDetail.id};(0,c._V)(i).then(function(){var i=(0,l.Z)(regeneratorRuntime.mark((function i(s){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,s.data.playlist;case 2:t.playListDetail=i.sent;case 3:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())},getSongList:function(){var t=this,i={id:t.playListDetail.id};(0,c.vw)(i).then(function(){var i=(0,l.Z)(regeneratorRuntime.mark((function i(s){var a,e,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,s.data.songs;case 2:t.musicList=i.sent,a=(0,n.Z)(t.musicList);try{for(a.s();!(e=a.n()).done;)l=e.value,t.$set(l,"timer",!0)}catch(c){a.e(c)}finally{a.f()}(0,o.transMusicTime)(t.musicList,"dt");case 6:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}())},collectPlaylist:function(t){var i=this,s=this.$loading({target:"#list_detail",background:"rgba(255,255,255,0.1)"}),a={t:t,id:this.playListDetail.id};(0,r.k2)(a).then((function(a){if(i.$nextTick((function(){s.close()})),200===a.data.code){if("1"===t)return void i.$message({type:"success",message:"收藏成功-可在网易云音乐中查看"});"2"===t&&i.$message({type:"success",message:"已取消收藏"})}})).catch((function(t){i.$nextTick((function(){s.close()}))}))},deletePlayList:function(t){var i=this,s=this.$loading({target:"#list_detail",background:"rgba(255,255,255,0.1)"});(0,r.jV)({id:t}).then((function(t){i.$nextTick((function(){s.close()})),200===t.data.code&&(i.$message.success("已从我的歌单删除"),i.$router.go(-1))})).catch((function(t){i.$nextTick((function(){s.close()}))}))}}},p=d,f=s(1001),g=(0,f.Z)(p,a,e,!1,null,"050e13b4",null),m=g.exports},5615:function(t,i,s){s.d(i,{XR:function(){return l},Yf:function(){return n},jV:function(){return c},k2:function(){return e}});var a=s(9950);function e(t){return(0,a.l)({url:"/playlist/subscribe",method:"post",data:t})}function n(t){return(0,a.l)({url:"/like",method:"post",data:t})}function l(t){return(0,a.l)({url:"/user/playlist",method:"get",params:t})}function c(t){return(0,a.l)({url:"/playlist/delete",method:"get",params:t})}}}]);