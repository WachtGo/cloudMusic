(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[947],{9407:function(t,s,e){"use strict";e.d(s,{Z:function(){return d}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.songlist,(function(s,i){return e("div",{key:s.id,staticClass:"music-list"},[e("div",{staticStyle:{width:"20px"}},[t._v(t._s(i+1)+".")]),e("div",{staticClass:"music-list-info",on:{dblclick:function(e){return t.goSongDetails(s.id)}}},[e("div",{staticClass:"music-list-span"},[t._v(t._s(s.name))]),e("div",{staticClass:"music-list-span"},[t._v(t._s(s.ar[0].name))]),e("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(s.dt))])]),e("div",{staticClass:"option"},[e("span",{on:{click:function(e){return t.listenMusic(s)}}},[e("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?e("span",{on:{click:function(e){return e.stopPropagation(),t.playMusic(s)}}},[e("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?e("span",{on:{click:function(e){return e.stopPropagation(),t.playMV(s.mv)}}},[e("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee||8==s.fee?e("span",{on:{click:function(e){return t.getDownloadUrl(s.id,s.name)}}},[e("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},a=[],n=e(801),l=e(4979),r=e(767),o={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},listenMusic(t){var s=this;(0,l.b)(t,s)},playMusic(t){var s=this;(0,l.H)(t,s)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,s){var e=this;e.$message({type:"success",message:"正在尝试下载"});let i={id:t};(0,n.km)(i).then((t=>{(0,r.download)(t.data.data[0].url,s),e.$message({type:"success",message:"开始下载了"})}))}}},c=o,u=e(1001),g=(0,u.Z)(c,i,a,!1,null,null,null),d=g.exports},1947:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return d}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-wrap"},[e("h3",[t._v("歌单详情")]),e("div",{staticClass:"descript"}),e("div",[e("div",{staticClass:"wrap2"},[e("div",{staticClass:"details"},[e("div",{staticClass:"details-img"},[e("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),e("div",{staticClass:"detailsRight"},[e("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),e("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[e("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),e("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?e("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),e("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[e("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(s,i){return e("span",{key:i},[t._v(t._s(s)+" ")])}))],2),e("div",{staticClass:"playListIntro"},[e("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]),e("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("歌曲 -"),0===t.musicList.length?e("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "),0!==t.musicList.length?e("span",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.musicList.length))]):t._e(),t._v(" 首 ")]),e("ul",{staticClass:"wrap-center"},[e("songlist",{attrs:{songlist:t.musicList}})],1),e("div",{staticStyle:{padding:"0px 50px"}},[e("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(s){return e("div",{key:s.id,staticClass:"hoverBackColor"},[e("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:s.user.avatarUrl}}),e("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(s.user.nickname)+"  :  ")]),e("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(s.content)+" ")]),e("div",{staticStyle:{height:"30px"}},[e("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(s.timeStr))]),e("span",{staticStyle:{float:"right"}},[t._v(t._s(s.likedCount)+" 赞   ")])])])})),e("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(s){t.currentPage=s},"update:current-page":function(s){t.currentPage=s}}}):t._e()],1)],2)])])])},a=[],n=e(801),l=e(767),r=e(9407),o={components:{songlist:r.Z},data(){return{songListId:"",currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[{user:{avatarUrl:""}}],commentCount:"",songMV:[],playListDetail:{creator:{avatarUrl:""}}}},mounted(){this.$route.params.songListId&&localStorage.setItem("songListId",this.$route.params.songListId),this.$route.params.songListId?this.songListId=this.$route.params.songListId:this.songListId=localStorage.getItem("songListId"),this.getPlaylistDetail(),this.getSongList(),this.getPlayListComment()},methods:{playListHandleCurrentChange(t){var s=this;s.currentPage=t,s.getPlayListComment()},getPlayListComment(){var t=this;let s={id:t.songListId,limit:7,offset:7*(t.currentPage-1)};(0,n.zW)(s).then((s=>{this.playListComment=s.data.comments,t.commentCount=s.data.total}))},handleCurrentChange:function(t){this.currentPage=t;var s=this;s.getPlaylistDetail(t)},getPlaylistDetail(){var t=this;let s={id:t.songListId};(0,n._V)(s).then((s=>{t.playListDetail=s.data.playlist}))},getSongList(){var t=this;let s={id:t.songListId};(0,n.vw)(s).then((s=>{t.musicList=s.data.songs;for(let e of t.musicList)t.$set(e,"timer",!0);(0,l.transMusicTime)(t.musicList,"dt")}))}}},c=o,u=e(1001),g=(0,u.Z)(c,i,a,!1,null,"5ddf3763",null),d=g.exports},767:function(t){const s=t=>{if(!t)return;let s=new Date(t).getFullYear(),e=new Date(t).getMonth()+1,i=new Date(t).getDate();return s+"-"+e+"-"+i},e=(t,s)=>{for(let e=0;e<t.length;e++){let i=parseInt(t[e][s]/1e3/60),a=parseInt(t[e][s]/1e3%60);i<10&&(i="0"+i),a<10&&(a="0"+a),t[e][s]=i+":"+a}},i=(t,s)=>{for(let e=0;e<t.length;e++)String(t[e][s]).length>5&&String(t[e][s]).length<9?t[e][s]=String(t[e][s]).substr(0,String(t[e][s]).length-4)+"万":5==String(t[e][s]).length?t[e][s]=String(t[e][s]).substr(0,1)+"."+String(t[e][s]).substr(1,2)+"万":9==String(t[e][s]).length?t[e][s]=String(t[e][s]).substr(0,1)+"."+String(t[e][s]).substr(1,2)+"亿":String(t[e][s]).length>9&&(t[e][s]=String(t[e][s]).substr(0,String(t[e][s]).length-8)+"亿")},a=(t,s)=>{fetch(t).then((t=>t.blob())).then((t=>{const e=document.createElement("a");document.body.appendChild(e),e.style.display="none";const i=window.URL.createObjectURL(t);e.href=i,e.download=`${s}.mp3`,e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(i)}))},n=()=>(new Date).getTime(),l=(t,s)=>Math.floor(Math.random()*(s-t))+t;t.exports={transtime:s,transMusicTime:e,transPlayCount:i,download:a,getTimestamp:n,randomRange:l}}}]);
//# sourceMappingURL=947.7584c100.js.map