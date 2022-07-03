"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[253],{2253:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-wrap"},[a("h3",[t._v("歌单详情")]),a("div",{staticClass:"descript"}),a("div",[a("ul",[t.$route.query.recplaylist||t.$route.query.playListTable?a("div",{staticClass:"playListDetailes"},[a("div",{staticClass:"playListImg"},[a("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),a("div",{staticClass:"detailsRight"},[a("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),a("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[a("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),a("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?a("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),a("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[a("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(e,s){return a("span",{key:s},[t._v(t._s(e)+" ")])}))],2),a("div",{staticClass:"playListIntro"},[a("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]):t._e(),t._l(t.musicList,(function(e,s){return a("li",{key:e.id,staticClass:"music-list"},[a("span",{staticStyle:{display:"inline-block",width:"20px"}},[t._v(t._s(s+1)+".")]),a("div",{on:{dblclick:function(a){return a.target!==a.currentTarget?null:t.goSongDetails(e.id)}}},[a("span",{staticClass:"music-list-span"},[t._v(t._s(e.name))]),a("span",{staticClass:"music-list-span"},[t._v(t._s(e.ar[0].name))]),a("span",{staticClass:"music-list-span"},[t._v(t._s(e.dt))])]),a("div",{staticClass:"option"},[a("span",{on:{click:function(a){return t.listenMusic(e.id,e.fee,s)}}},[a("i",{staticClass:"el-icon-headset iconhover"})]),0==e.fee||8==e.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMusic(e.id,e.fee,s)}}},[a("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(e.mv)?a("span",{on:{click:function(a){return t.playMV(e.mv,e.name)}}},[a("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==e.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.getDownloadUrl(e.id,e.name)}}},[a("i",{staticClass:"el-icon-download iconhover"})]):t._e(),0!=e.fee?a("span"):t._e()])])})),a("div",{staticStyle:{padding:"0px 50px"}},[a("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(e){return a("div",{key:e.id,staticClass:"hoverBackColor"},[a("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),a("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),a("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),a("div",{staticStyle:{height:"30px"}},[a("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),a("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),a("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2)],2)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},i=[],n=a(7965),l=(a(8309),a(3629)),r=a(2650),o={data:function(){return{listen:[],currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[],commentCount:"",songUrlAdd:null,songlrc:"",songMV:[],playListDetail:{}}},created:function(){var t=this;t.$route.query.recplaylist||t.$route.query.playListTable?(t.getSongList(),t.getPlayListComment()):t.getMusicInfo()},methods:{playListHandleCurrentChange:function(t){var e=this;e.currentPage=t,e.getPlayListComment()},getPlayListComment:function(){var t=this,e=this,a={id:e.$route.query.songListId,limit:7,offset:7*(e.currentPage-1)};(0,l.zW)(a).then((function(a){console.log("歌单评论：",a.data),t.playListComment=a.data.comments,e.commentCount=a.data.total,console.log("歌曲评论：",a.data)}))},goSongDetails:function(t){this.$router.push({name:"songDetails",query:{songId:t}})},playMV:function(t,e){this.$router.push({name:"mvPlay",query:{mvId:t,mvName:e}})},listenMusic:function(t,e,a){var s=this;s.musicList[a].timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(console.log("播放音乐链接",t.data.data[0].url),!t.data.data[0].url)return s.$message({message:"不好意思这首歌暂无版权",type:"error"}),s.musicList[a].timer=!1,void setTimeout((function(){s.musicList[a].timer=!0}),3e3);s.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){s.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(t){null!=s.songUrlAdd&&(s.listen=[],s.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:s.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:s.songlrc}),console.log(s.listen),s.songUrlAdd=null,s.songlrc="")})))},playMusic:function(t,e,a){var s=this;console.log(s.musicList[a]),s.musicList[a].timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(console.log("播放音乐链接",t.data.data[0].url),!t.data.data[0].url)return s.$message({message:"不好意思这首歌暂无版权",type:"error"}),s.musicList[a].timer=!1,void setTimeout((function(){s.musicList[a].timer=!0}),3e3);s.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){s.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(t){console.log("获取歌曲信息，添加到播放器：",t.data.songs),null!=s.songUrlAdd&&(s.$store.commit("addSong",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:s.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:s.songlrc}),console.log(s.$store.state.audio,"添加歌曲后的歌曲播放列表-----"),s.songUrlAdd=null,s.songlrc="",s.musicList[a].timer=!1,setTimeout((function(){s.musicList[a].timer=!0}),3e3))})))},handleCurrentChange:function(t){this.currentPage=t;var e=this;e.$route.query.recplaylist?e.getSongList(t):e.getMusicInfo()},getDownloadUrl:function(t,e){var a=this,s={id:t};(0,l.km)(s).then((function(t){console.log("歌曲下载地址：",t.data.data.url),(0,r.L)(t.data.data.url,e),a.$message({type:"success",message:"开始下载了"})}))},getSongList:function(){var t=this,e=this,a={id:e.$route.query.songListId};(0,l.vw)(a).then((function(a){console.log("--歌单详情-------:",a.data.playlist),e.playListDetail=a.data.playlist,e.musicList=e.playListDetail.tracks;var s,i=(0,n.Z)(e.musicList);try{for(i.s();!(s=i.n()).done;){var l=s.value;e.$set(l,"timer",!0)}}catch(r){i.e(r)}finally{i.f()}t.transMusicTime()}))},transMusicTime:function(){for(var t=0;t<this.musicList.length;t++){var e=parseInt(this.musicList[t].dt/1e3/60),a=parseInt(this.musicList[t].dt/1e3%60);e<10&&(e="0"+e),a<10&&(a="0"+a),this.musicList[t].dt=e+":"+a}}}},c=o,u=a(1001),d=(0,u.Z)(c,s,i,!1,null,"05cdbaf4",null),p=d.exports},2650:function(t,e,a){a.d(e,{L:function(){return n}});a(1539),a(8783),a(3948),a(285),a(1637);var s=a(6166),i=a.n(s),n=function(t,e){if(t){var a=e||"";i()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var e=new Blob([t.data],{type:t.data.type}),s=document.createElement("a"),i=window.URL.createObjectURL(e);s.href=i,s.download=a,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(i)})).catch((function(t){console.log(t)}))}}}}]);
//# sourceMappingURL=253-legacy.b7990774.js.map