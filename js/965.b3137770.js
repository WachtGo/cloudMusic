"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[965],{2699:function(t,s,i){i.d(s,{Z:function(){return d}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",t._l(t.songlist,(function(s,a){return i("div",{key:s.id,staticClass:"music-list"},[i("div",{staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),i("div",{staticClass:"music-list-info",on:{dblclick:function(i){return t.goSongDetails(s.id)}}},[i("div",{staticClass:"music-list-span"},[t._v(t._s(s.name))]),i("div",{staticClass:"music-list-span"},[t._v(t._s(s.ar[0].name))]),i("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(s.dt))])]),i("div",{staticClass:"option"},[i("span",{on:{click:function(i){return t.listenMusic(s.id,s.fee,a,s.noCopyrightRcmd)}}},[i("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMusic(s.id,s.fee,a,s.noCopyrightRcmd)}}},[i("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMV(s.mv)}}},[i("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee||8==s.fee?i("span",{on:{click:function(i){return t.getDownloadUrl(s.id,s.name)}}},[i("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},e=[],n=i(9531),l=i(4979),r=i(767),o={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},listenMusic(t,s,i){var a=this,e="songlist";(0,l.b)(t,s,i,e,a)},playMusic(t,s,i){var a=this,e="songlist";(0,l.H)(t,s,i,e,a)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,s){var i=this;i.$message({type:"success",message:"正在尝试下载"});let a={id:t};(0,n.km)(a).then((t=>{(0,r.download)(t.data.data[0].url,s),i.$message({type:"success",message:"开始下载了"})}))}}},c=o,p=i(1001),u=(0,p.Z)(c,a,e,!1,null,null,null),d=u.exports},9965:function(t,s,i){i.r(s),i.d(s,{default:function(){return d}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-wrap"},[i("h3",[t._v("歌单详情")]),i("div",{staticClass:"descript"}),i("div",[i("div",{staticClass:"wrap2"},[i("div",{staticClass:"details"},[i("div",{staticClass:"details-img"},[i("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),i("div",{staticClass:"detailsRight"},[i("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),i("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[i("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),i("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?i("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),i("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[i("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(s,a){return i("span",{key:a},[t._v(t._s(s)+" ")])}))],2),i("div",{staticClass:"playListIntro"},[i("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]),i("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("歌曲 ("),0===t.musicList.length?i("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "),0!==t.musicList.length?i("span",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.musicList.length))]):t._e(),t._v(" 首 )")]),i("ul",{staticClass:"wrap-center"},[i("songlist",{attrs:{songlist:t.musicList}})],1),i("div",{staticStyle:{padding:"0px 50px"}},[i("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(s){return i("div",{key:s.id,staticClass:"hoverBackColor"},[i("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:s.user.avatarUrl}}),i("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(s.user.nickname)+"  :  ")]),i("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(s.content)+" ")]),i("div",{staticStyle:{height:"30px"}},[i("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(s.timeStr))]),i("span",{staticStyle:{float:"right"}},[t._v(t._s(s.likedCount)+" 赞   ")])])])})),i("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(s){t.currentPage=s},"update:current-page":function(s){t.currentPage=s}}}):t._e()],1)],2)])])])},e=[],n=i(9531),l=i(767),r=i(2699),o={components:{songlist:r.Z},data(){return{songListId:"",currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[{user:{avatarUrl:""}}],commentCount:"",songMV:[],playListDetail:{creator:{avatarUrl:""}}}},mounted(){this.$route.params.songListId&&localStorage.setItem("songListId",this.$route.params.songListId),this.$route.params.songListId?this.songListId=this.$route.params.songListId:this.songListId=localStorage.getItem("songListId"),this.getPlaylistDetail(),this.getSongList(),this.getPlayListComment()},methods:{playListHandleCurrentChange(t){var s=this;s.currentPage=t,s.getPlayListComment()},getPlayListComment(){var t=this;let s={id:t.songListId,limit:7,offset:7*(t.currentPage-1)};(0,n.zW)(s).then((s=>{this.playListComment=s.data.comments,t.commentCount=s.data.total}))},handleCurrentChange:function(t){this.currentPage=t;var s=this;s.getPlaylistDetail(t)},getPlaylistDetail(){var t=this;let s={id:t.songListId};(0,n._V)(s).then((s=>{t.playListDetail=s.data.playlist}))},getSongList(){var t=this;let s={id:t.songListId};(0,n.vw)(s).then((s=>{t.musicList=s.data.songs;for(let i of t.musicList)t.$set(i,"timer",!0);(0,l.transMusicTime)(t.musicList,"dt")}))}}},c=o,p=i(1001),u=(0,p.Z)(c,a,e,!1,null,"315bf5f5",null),d=u.exports}}]);
//# sourceMappingURL=965.b3137770.js.map