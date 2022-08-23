"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[414],{414:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-wrap"},[s("h3",[t._v("歌曲详情")]),s("div",{staticClass:"descript"}),s("div",[s("ul",[t.songId?s("div",{staticClass:"details"},[s("div",{staticClass:"details-img"},[s("img",{attrs:{src:t.songDetails.al.picUrl,alt:""}})]),s("div",{staticClass:"detailsRight"},[s("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.songDetails.name)+" ")]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[s("span",{staticClass:"playListNickName"},[t._v(t._s(t.songDetails.ar[0].name))]),s("span",[s("br"),t._v(" 时长  -  "),s("span",{staticStyle:{color:"antiquewhite"}},[t._v(t._s(t.songDetails.dt))])]),s("div",{staticClass:"option"},[s("div",{staticClass:"flexBetween"},[s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.listenMusic(t.songDetails.id,t.songDetails.fee)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==t.songDetails.fee||8==t.songDetails.fee?s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return e.stopPropagation(),t.playMusic(t.songDetails.id,t.songDetails.fee)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(t.songDetails.mv)?s("span",{staticClass:"inline-block",on:{click:function(e){return t.playMV(t.songDetails.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"}),t._v("  ")]):t._e(),0==t.songDetails.fee||8==t.songDetails.fee?s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.getDownloadUrl(t.songDetails.id,t.songDetails.name)}}},[s("i",{staticClass:"el-icon-download iconhover"}),t._v(" ")]):t._e(),0!=t.songDetails.fee?s("span",[t._v("    ")]):t._e()])])]),s("div",{staticStyle:{"margin-top":"30px","font-size":"14px"}},[s("span",[t._v(t._s(t.songDetails.alia[0]))])]),s("br")])]):t._e(),s("div",{staticStyle:{padding:"0px 50px"}},[s("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t.commentCount?s("span",[t._v("评论("+t._s(t.commentCount)+"条)")]):t._e()]),t._l(t.songComment,(function(e){return s("div",{key:e.id,staticClass:"hoverBackColor"},[s("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),s("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),s("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticStyle:{height:"30px"}},[s("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),s("div",{staticClass:"pagination"},[0!=t.commentCount?s("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.songhandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2)])])])},a=[],i=(s(8309),s(1539),s(9714),s(9531)),o=s(767),l={data:function(){return{currentPage:1,songUrlAdd:null,songId:"",songDetails:{al:{picUrl:""}},songComment:[],commentCount:0,count:""}},mounted:function(){this.$route.params.songId&&localStorage.setItem("songId",this.$route.params.songId),this.$route.params.songId?this.songId=this.$route.params.songId:this.songId=localStorage.getItem("songId"),this.getSongDetails(),this.getSongComment()},methods:{songhandleCurrentChange:function(t){var e=this;e.currentPage=t,e.getSongComment()},getSongDetails:function(){var t=this,e={ids:t.songId};(0,i.t7)(e).then((function(e){t.songDetails=e.data.songs[0],t.$set(t.songDetails,"timer",!0);var s=parseInt(t.songDetails.dt/1e3/60),n=parseInt(t.songDetails.dt/1e3%60);s<10&&(s="0"+s),n<10&&(n="0"+n),t.songDetails.dt=s+":"+n}))},getSongComment:function(){var t=this,e={id:t.songId,limit:7,offset:7*(t.currentPage-1)};(0,i.Lp)(e).then((function(e){t.songComment=e.data.comments,t.commentCount=e.data.total}))},listenMusic:function(t,e){var s=this,n=null,a="";s.songDetails.timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return s.$message({message:"这首歌暂无版权",type:"error"}),s.songDetails.timer=!1,void setTimeout((function(){s.songDetails.timer=!0}),3e3);n=t.data.data[0].url})),(0,i.mq)({id:t}).then((function(t){a=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((function(e){null!=n&&(s.$store.commit("addAUDITION",{name:e.data.songs[0].name,artist:e.data.songs[0].ar[0].name,url:n,cover:e.data.songs[0].al.picUrl,lrc:a,id:t,timer:!0}),s.songDetails.timer=!1,setTimeout((function(){s.songDetails.timer=!0}),3e3))})))},playMusic:function(t,e){var s=this,n=null,a="";s.songDetails.timer&&(1==e&&s.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return s.$message({message:"这首歌暂无版权",type:"error"}),s.songDetails.timer=!1,void setTimeout((function(){s.songDetails.timer=!0}),3e3);n=t.data.data[0].url})),(0,i.mq)({id:t}).then((function(t){a=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((function(e){null!=n&&(s.$store.commit("addSONG",{name:e.data.songs[0].name,artist:e.data.songs[0].ar[0].name,url:n,cover:e.data.songs[0].al.picUrl,lrc:a,id:t}),s.songDetails.timer=!1,setTimeout((function(){s.songDetails.timer=!0}),3e3))})))},getDownloadUrl:function(t,e){var s=this,n={id:t};(0,i.km)(n).then((function(t){(0,o.download)(t.data.data.url,e),s.$message({type:"success",message:"开始下载了"})}))},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},r=l,c=s(1001),g=(0,c.Z)(r,n,a,!1,null,"f975c736",null),d=g.exports}}]);
//# sourceMappingURL=414-legacy.aa27307a.js.map