"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[420],{4420:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrap"},[i("h3",[t._v("歌单详情")]),i("div",{staticClass:"descript"}),i("div",[i("ul",[t.$route.query.recplaylist||t.$route.query.playListTable?i("div",{staticClass:"playListDetailes"},[i("div",{staticClass:"playListImg"},[i("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),i("div",{staticClass:"detailsRight"},[i("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),i("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[i("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),i("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?i("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),i("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[i("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(e,s){return i("span",{key:s},[t._v(t._s(e)+" ")])}))],2),i("div",{staticClass:"playListIntro"},[i("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]):t._e(),t._l(t.musicList,(function(e,s){return i("li",{key:e.id,staticClass:"music-list"},[i("span",{staticStyle:{display:"inline-block",width:"20px"}},[t._v(t._s(s+1)+".")]),i("div",{on:{dblclick:function(i){return i.target!==i.currentTarget?null:t.goSongDetails(e.id)}}},[i("span",{staticClass:"music-list-span"},[t._v(t._s(e.name))]),i("span",{staticClass:"music-list-span"},[t._v(t._s(e.ar[0].name))]),i("span",{staticClass:"music-list-span"},[t._v(t._s(e.dt))])]),i("div",{staticClass:"option"},[i("span",{on:{click:function(i){return t.listenMusic(e.id,e.fee,s)}}},[i("i",{staticClass:"el-icon-headset iconhover"})]),0==e.fee||8==e.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMusic(e.id,e.fee,s)}}},[i("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(e.mv)?i("span",{on:{click:function(i){return t.playMV(e.mv,e.name)}}},[i("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==e.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.getDownloadUrl(e.id,e.name)}}},[i("i",{staticClass:"el-icon-download iconhover"})]):t._e(),0!=e.fee?i("span"):t._e()])])})),i("div",{staticStyle:{padding:"0px 50px"}},[i("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(e){return i("div",{key:e.id,staticClass:"hoverBackColor"},[i("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),i("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),i("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),i("div",{staticStyle:{height:"30px"}},[i("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),i("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),i("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2)],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[i("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},a=[],n=i(7965),r=(i(8309),i(3629)),l=i(2650),o={data:function(){return{listen:[],currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[],commentCount:"",songUrlAdd:null,songlrc:"",songMV:[],playListDetail:{}}},created:function(){var t=this;t.$route.query.recplaylist||t.$route.query.playListTable?(t.getSongList(),t.getPlayListComment()):t.getMusicInfo()},methods:{playListHandleCurrentChange:function(t){var e=this;e.currentPage=t,e.getPlayListComment()},getPlayListComment:function(){var t=this,e=this,i={id:e.$route.query.songListId,limit:7,offset:7*(e.currentPage-1)};(0,r.zW)(i).then((function(i){t.playListComment=i.data.comments,e.commentCount=i.data.total}))},goSongDetails:function(t){this.$router.push({name:"songDetails",query:{songId:t}})},playMV:function(t,e){this.$router.push({name:"mvPlay",query:{mvId:t,mvName:e}})},listenMusic:function(t,e,i){var s=this;s.musicList[i].timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,r.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return s.$message({message:"不好意思这首歌暂无版权",type:"error"}),s.musicList[i].timer=!1,void setTimeout((function(){s.musicList[i].timer=!0}),3e3);s.songUrlAdd=t.data.data[0].url})),(0,r.mq)({id:t}).then((function(t){s.songlrc=t.data.lrc.lyric})),(0,r.t7)({ids:t}).then((function(t){null!=s.songUrlAdd&&(s.listen=[],s.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:s.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:s.songlrc}),s.songUrlAdd=null,s.songlrc="")})))},playMusic:function(t,e,i){var s=this;s.musicList[i].timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,r.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return s.$message({message:"不好意思这首歌暂无版权",type:"error"}),s.musicList[i].timer=!1,void setTimeout((function(){s.musicList[i].timer=!0}),3e3);s.songUrlAdd=t.data.data[0].url})),(0,r.mq)({id:t}).then((function(t){s.songlrc=t.data.lrc.lyric})),(0,r.t7)({ids:t}).then((function(t){null!=s.songUrlAdd&&(s.$store.commit("addSong",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:s.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:s.songlrc}),s.songUrlAdd=null,s.songlrc="",s.musicList[i].timer=!1,setTimeout((function(){s.musicList[i].timer=!0}),3e3))})))},handleCurrentChange:function(t){this.currentPage=t;var e=this;e.$route.query.recplaylist?e.getSongList(t):e.getMusicInfo()},getDownloadUrl:function(t,e){var i=this,s={id:t};(0,r.km)(s).then((function(t){(0,l.L)(t.data.data.url,e),i.$message({type:"success",message:"开始下载了"})}))},getSongList:function(){var t=this,e=this,i={id:e.$route.query.songListId};(0,r.vw)(i).then((function(i){e.playListDetail=i.data.playlist,e.musicList=e.playListDetail.tracks;var s,a=(0,n.Z)(e.musicList);try{for(a.s();!(s=a.n()).done;){var r=s.value;e.$set(r,"timer",!0)}}catch(l){a.e(l)}finally{a.f()}t.transMusicTime()}))},transMusicTime:function(){for(var t=0;t<this.musicList.length;t++){var e=parseInt(this.musicList[t].dt/1e3/60),i=parseInt(this.musicList[t].dt/1e3%60);e<10&&(e="0"+e),i<10&&(i="0"+i),this.musicList[t].dt=e+":"+i}}}},c=o,u=i(1001),d=(0,u.Z)(c,s,a,!1,null,"039ba884",null),p=d.exports},2650:function(t,e,i){i.d(e,{L:function(){return n}});i(1539),i(8783),i(3948),i(285),i(1637);var s=i(6166),a=i.n(s),n=function(t,e){if(t){var i=e||"";a()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var e=new Blob([t.data],{type:t.data.type}),s=document.createElement("a"),a=window.URL.createObjectURL(e);s.href=a,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(a)})).catch((function(t){console.log(t)}))}}}}]);
//# sourceMappingURL=420-legacy.18132c97.js.map