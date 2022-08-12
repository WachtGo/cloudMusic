"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[9],{5009:function(t,i,s){s.r(i),s.d(i,{default:function(){return m}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list-wrap"},[s("h3",[t._v("歌单详情")]),s("div",{staticClass:"descript"}),s("div",[s("div",{staticClass:"wrap2"},[s("div",{staticClass:"playListDetailes"},[s("div",{staticClass:"playListImg"},[s("img",{attrs:{src:t.playListDetail.coverImgUrl,alt:""}})]),s("div",{staticClass:"detailsRight"},[s("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.playListDetail.name)+" ")]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[s("img",{staticStyle:{width:"30px",height:"30px","border-radius":"15px"},attrs:{src:t.playListDetail.creator.avatarUrl,alt:""}}),s("span",{staticClass:"playListNickName"},[t._v("    "+t._s(t.playListDetail.creator.nickname)+"  ")]),t.playListDetail.creator.signature?s("span",[t._v("  -  "+t._s(t.playListDetail.creator.signature))]):t._e()]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"18px","font-size":"14px"}},[s("span",[t._v("标签:  ")]),t._l(t.playListDetail.tags,(function(i,a){return s("span",{key:a},[t._v(t._s(i)+" ")])}))],2),s("div",{staticClass:"playListIntro"},[s("span",{staticStyle:{display:"inline-block","margin-left":"0px"}},[t._v(" "+t._s(t.playListDetail.description)+" ")])])])]),s("div",{staticStyle:{padding:"0px 50px"}},[s("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("评论("+t._s(t.commentCount)+"条)")]),t._l(t.playListComment,(function(i){return s("div",{key:i.id,staticClass:"hoverBackColor"},[s("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:i.user.avatarUrl}}),s("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(i.user.nickname)+"  :  ")]),s("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(i.content)+" ")]),s("div",{staticStyle:{height:"30px"}},[s("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(i.timeStr))]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(i.likedCount)+" 赞   ")])])])})),s("div",{staticStyle:{"text-align":"center"}},[0!=t.commentCount?s("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.playListHandleCurrentChange,"update:currentPage":function(i){t.currentPage=i},"update:current-page":function(i){t.currentPage=i}}}):t._e()],1)],2),s("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t._v("歌曲("+t._s(t.musicList.length)+"首)")]),s("ul",{staticClass:"wrap-center"},t._l(t.musicList,(function(i,a){return s("li",{key:i.id,staticClass:"music-list"},[s("span",{staticStyle:{display:"inline-block",width:"20px"}},[t._v(t._s(a+1)+".")]),s("div",{on:{dblclick:function(s){return t.goSongDetails(i.id)}}},[s("span",{staticClass:"music-list-span"},[t._v(t._s(i.name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.ar[0].name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.listenMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(i.mv)?s("span",{on:{click:function(s){return t.playMV(i.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.getDownloadUrl(i.id,i.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e(),0!=i.fee?s("span"):t._e()])])})),0)])])])},e=[],n=s(8439),l=s(6055),r=s(9171),c=s(767),o=s(4979),u={data:function(){return{songListId:"",currentPage:1,musicList:[],DownloadSongUrl:"",mvUrl:"",count:"",playListComment:[{user:{avatarUrl:""}}],commentCount:"",songMV:[],playListDetail:{creator:{avatarUrl:""}}}},mounted:function(){this.$route.params.songListId&&localStorage.setItem("songListId",this.$route.params.songListId),this.$route.params.songListId?this.songListId=this.$route.params.songListId:this.songListId=localStorage.getItem("songListId"),this.getPlaylistDetail(),this.getSongList(),this.getPlayListComment()},methods:{playListHandleCurrentChange:function(t){var i=this;i.currentPage=t,i.getPlayListComment()},getPlayListComment:function(){var t=this,i=this,s={id:i.songListId,limit:7,offset:7*(i.currentPage-1)};(0,l.zW)(s).then((function(s){t.playListComment=s.data.comments,i.commentCount=s.data.total}))},goSongDetails:function(t){this.$router.push({name:"songDetails",params:{songId:t}})},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},listenMusic:function(t,i,s){var a=this,e="musicList";(0,o.b)(t,i,s,e,a)},playMusic:function(t,i,s){var a=this,e="musicList";(0,o.H)(t,i,s,e,a)},handleCurrentChange:function(t){this.currentPage=t;var i=this;i.getPlaylistDetail(t)},getDownloadUrl:function(t,i){var s=this,a={id:t};(0,l.km)(a).then((function(t){(0,r.L)(t.data.data.url,i),s.$message({type:"success",message:"开始下载了"})}))},getPlaylistDetail:function(){var t=this,i={id:t.songListId};(0,l._V)(i).then((function(i){t.playListDetail=i.data.playlist}))},getSongList:function(){var t=this,i={id:t.songListId};(0,l.vw)(i).then((function(i){t.musicList=i.data.songs;var s,a=(0,n.Z)(t.musicList);try{for(a.s();!(s=a.n()).done;){var e=s.value;t.$set(e,"timer",!0)}}catch(l){a.e(l)}finally{a.f()}(0,c.transMusicTime)(t.musicList,"dt")}))}}},p=u,d=s(3736),g=(0,d.Z)(p,a,e,!1,null,"7be43bef",null),m=g.exports}}]);
//# sourceMappingURL=9-legacy.100df4fc.js.map