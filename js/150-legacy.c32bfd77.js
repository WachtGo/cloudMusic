"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[150],{8150:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-wrap"},[n("h3",[t._v("歌曲详情")]),n("div",{staticClass:"descript"}),n("div",[n("ul",[t.songId?n("div",{staticClass:"playListDetailes"},[n("div",{staticClass:"playListImg"},[n("img",{attrs:{src:t.songDetails.al.picUrl,alt:""}})]),n("div",{staticClass:"detailsRight"},[n("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.songDetails.name)+" ")]),n("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[n("span",{staticClass:"playListNickName"},[t._v(t._s(t.songDetails.ar[0].name))]),n("span",[n("br"),t._v(" 时长  -  "),n("span",{staticStyle:{color:"antiquewhite"}},[t._v(t._s(t.songDetails.dt))])]),n("div",{staticClass:"option"},[n("div",{staticClass:"flexBetween"},[n("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.listenMusic(t.songDetails.id,t.songDetails.fee)}}},[n("i",{staticClass:"el-icon-headset iconhover"})]),0==t.songDetails.fee||8==t.songDetails.fee?n("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return e.stopPropagation(),t.playMusic(t.songDetails.id,t.songDetails.fee)}}},[n("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(t.songDetails.mv)?n("span",{staticClass:"inline-block",on:{click:function(e){return t.playMV(t.songDetails.mv)}}},[n("i",{staticClass:"el-icon-video-camera iconhover"}),t._v("  ")]):t._e(),0==t.songDetails.fee?n("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.getDownloadUrl(t.songDetails.id,t.songDetails.name)}}},[n("i",{staticClass:"el-icon-download iconhover"}),t._v(" ")]):t._e(),0!=t.songDetails.fee?n("span",[t._v("    ")]):t._e()])])]),n("div",{staticStyle:{"margin-top":"30px","font-size":"14px"}},[n("span",[t._v(t._s(t.songDetails.alia[0]))])]),n("br")])]):t._e(),n("div",{staticStyle:{padding:"0px 50px"}},[n("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t.commentCount?n("span",[t._v("评论("+t._s(t.commentCount)+"条)")]):t._e()]),t._l(t.songComment,(function(e){return n("div",{key:e.id,staticClass:"hoverBackColor"},[n("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),n("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),n("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),n("div",{staticStyle:{height:"30px"}},[n("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),n("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),n("div",{staticClass:"pagination"},[0!=t.commentCount?n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.songhandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[n("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])])])},a=[],i=(n(8309),n(1539),n(9714),n(801)),o=n(9012),l={data:function(){return{listen:[],currentPage:1,songUrlAdd:null,songId:"",songDetails:{},songComment:[],commentCount:"",count:"",songurladd:null,songlrc:""}},mounted:function(){this.$route.params.songId&&localStorage.setItem("songId",this.$route.params.songId),this.$route.params.songId?this.songId=this.$route.params.songId:this.songId=localStorage.getItem("songId"),this.getSongDetails(),this.getSongComment()},methods:{songhandleCurrentChange:function(t){var e=this;e.currentPage=t,e.getSongComment()},getSongDetails:function(){var t=this,e={ids:t.songId};(0,i.t7)(e).then((function(e){t.songDetails=e.data.songs[0],t.$set(t.songDetails,"timer",!0);var n=parseInt(t.songDetails.dt/1e3/60),s=parseInt(t.songDetails.dt/1e3%60);n<10&&(n="0"+n),s<10&&(s="0"+s),t.songDetails.dt=n+":"+s}))},getSongComment:function(){var t=this,e=this,n={id:e.songId,limit:7,offset:7*(e.currentPage-1)};(0,i.Lp)(n).then((function(n){t.songComment=n.data.comments,e.commentCount=n.data.total}))},listenMusic:function(t,e){var n=this;n.songDetails.timer&&(1==e&&n.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return n.$message({message:"不好意思这首歌暂无版权",type:"error"}),n.songDetails.timer=!1,void setTimeout((function(){n.songDetails.timer=!0}),3e3);n.songUrlAdd=t.data.data[0].url})),(0,i.mq)({id:t}).then((function(t){n.songlrc=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((function(t){null!=n.songUrlAdd&&(n.listen=[],n.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:n.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:n.songlrc}),n.songUrlAdd=null,n.songlrc="",n.songDetails.timer=!1,setTimeout((function(){n.songDetails.timer=!0}),3e3))})))},playMusic:function(t,e){var n=this;n.songDetails.timer&&(1==e&&n.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,i.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return n.$message({message:"不好意思这首歌暂无版权",type:"error"}),n.songDetails.timer=!1,void setTimeout((function(){n.songDetails.timer=!0}),3e3);n.songUrlAdd=t.data.data[0].url})),(0,i.mq)({id:t}).then((function(t){n.songlrc=t.data.lrc.lyric})),(0,i.t7)({ids:t}).then((function(t){null!=n.songUrlAdd&&(n.$store.commit("addSONG",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:n.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:n.songlrc}),n.songUrlAdd=null,n.songlrc="",n.songDetails.timer=!1,setTimeout((function(){n.songDetails.timer=!0}),3e3))})))},getDownloadUrl:function(t,e){var n=this,s={id:t};(0,i.km)(s).then((function(t){(0,o.L)(t.data.data.url,e),n.$message({type:"success",message:"开始下载了"})}))},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},r=l,c=n(3736),d=(0,c.Z)(r,s,a,!1,null,"9b3d1774",null),g=d.exports},9012:function(t,e,n){n.d(e,{L:function(){return i}});n(1539),n(8783),n(3948),n(285),n(1637);var s=n(6265),a=n.n(s),i=function(t,e){if(t){var n=e||"";a()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var e=new Blob([t.data],{type:t.data.type}),s=document.createElement("a"),a=window.URL.createObjectURL(e);s.href=a,s.download=n,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(a)})).catch((function(t){}))}}}}]);
//# sourceMappingURL=150-legacy.c32bfd77.js.map