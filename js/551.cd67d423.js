(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[551],{1551:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-wrap"},[s("h3",[t._v("歌单详情")]),s("div",{staticClass:"descript"}),s("div",[s("ul",[s("div",{staticClass:"playListDetailes"},[s("div",{staticClass:"playListImg"},[s("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),s("div",{staticClass:"detailsRight"},[s("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[s("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),s("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?s("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[s("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(e,a){return s("span",{key:a},[t._v(t._s(e)+" ")])}))],2),s("div",{staticClass:"playListIntro"},[s("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]),t._l(t.musicList,(function(e,a){return s("li",{key:e.id,staticClass:"music-list"},[s("span",{staticStyle:{display:"inline-block",width:"20px"}},[t._v(t._s(a+1)+".")]),s("div",{on:{dblclick:function(s){return s.target!==s.currentTarget?null:t.goSongDetails(e.id)}}},[s("span",{staticClass:"music-list-span"},[t._v(t._s(e.name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(e.ar[0].name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(e.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.listenMusic(e.id,e.fee,a)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==e.fee||8==e.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(e.id,e.fee,a)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(e.mv)?s("span",{on:{click:function(s){return t.playMV(e.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==e.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.getDownloadUrl(e.id,e.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e(),0!=e.fee?s("span"):t._e()])])})),s("div",{staticStyle:{padding:"0px 50px"}},[s("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(e){return s("div",{key:e.id,staticClass:"hoverBackColor"},[s("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),s("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),s("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticStyle:{height:"30px"}},[s("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),s("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?s("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2)],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[s("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},i=[],n=s(801),r=s(9012),l=s(2211),o={data(){return{listen:[],songListId:"",currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[],commentCount:"",songUrlAdd:null,songlrc:"",songMV:[],playListDetail:{}}},mounted(){this.$route.params.songListId&&localStorage.setItem("songListId",this.$route.params.songListId),this.$route.params.songListId?this.songListId=this.$route.params.songListId:this.songListId=localStorage.getItem("songListId"),this.getSongList(),this.getPlayListComment()},methods:{playListHandleCurrentChange(t){var e=this;e.currentPage=t,e.getPlayListComment()},getPlayListComment(){var t=this;let e={id:t.songListId,limit:7,offset:7*(t.currentPage-1)};(0,n.zW)(e).then((e=>{this.playListComment=e.data.comments,t.commentCount=e.data.total}))},goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},listenMusic(t,e,s){var a=this;a.musicList[s].timer&&(1==e&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,n.vJ)({id:t}).then((t=>{if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((()=>{a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,n.mq)({id:t}).then((t=>{a.songlrc=t.data.lrc.lyric})),(0,n.t7)({ids:t}).then((t=>{null!=a.songUrlAdd&&(a.listen=[],a.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="")})))},playMusic(t,e,s){var a=this;a.musicList[s].timer&&(1==e&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,n.vJ)({id:t}).then((t=>{if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((()=>{a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,n.mq)({id:t}).then((t=>{a.songlrc=t.data.lrc.lyric})),(0,n.t7)({ids:t}).then((t=>{null!=a.songUrlAdd&&(a.$store.commit("addSONG",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="",a.musicList[s].timer=!1,setTimeout((()=>{a.musicList[s].timer=!0}),3e3))})))},handleCurrentChange:function(t){this.currentPage=t;var e=this;e.getSongList(t)},getDownloadUrl(t,e){var s=this;let a={id:t};(0,n.km)(a).then((t=>{(0,r.L)(t.data.data.url,e),s.$message({type:"success",message:"开始下载了"})}))},getSongList(){var t=this;let e={id:t.songListId};(0,n.vw)(e).then((e=>{t.playListDetail=e.data.playlist,t.musicList=t.playListDetail.tracks;for(let s of t.musicList)t.$set(s,"timer",!0);(0,l.transMusicTime)(t.musicList,"dt")}))}}},c=o,d=s(3736),u=(0,d.Z)(c,a,i,!1,null,"533d2855",null),g=u.exports},2211:function(t){const e=t=>{if(!t)return;let e=new Date(t).getFullYear(),s=new Date(t).getMonth()+1,a=new Date(t).getDate();return e+"-"+s+"-"+a},s=(t,e)=>{for(let s=0;s<t.length;s++){let a=parseInt(t[s][e]/1e3/60),i=parseInt(t[s][e]/1e3%60);a<10&&(a="0"+a),i<10&&(i="0"+i),t[s][e]=a+":"+i}},a=(t,e)=>{for(let s=0;s<t.length;s++)String(t[s][e]).length>5&&String(t[s][e]).length<9?t[s][e]=String(t[s][e]).substr(0,String(t[s][e]).length-4)+"万":5==String(t[s][e]).length?t[s][e]=String(t[s][e]).substr(0,1)+"."+String(t[s][e]).substr(1,2)+"万":9==String(t[s][e]).length?t[s][e]=String(t[s][e]).substr(0,1)+"."+String(t[s][e]).substr(1,2)+"亿":String(t[s][e]).length>9&&(t[s][e]=String(t[s][e]).substr(0,String(t[s][e]).length-8)+"亿")};t.exports={transtime:e,transMusicTime:s,transPlayCount:a}},9012:function(t,e,s){"use strict";s.d(e,{L:function(){return n}});var a=s(6265),i=s.n(a);const n=function(t,e){if(!t)return;let s=e||"";i()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((t=>{let e=new Blob([t.data],{type:t.data.type}),a=document.createElement("a"),i=window.URL.createObjectURL(e);a.href=i,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(i)})).catch((function(t){}))}}}]);
//# sourceMappingURL=551.cd67d423.js.map