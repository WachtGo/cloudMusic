(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[478],{6478:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-wrap"},[s("h3",[t._v("歌曲详情")]),s("div",{staticClass:"descript"}),s("div",[s("ul",[t.songId?s("div",{staticClass:"details"},[s("div",{staticClass:"details-img"},[s("img",{attrs:{src:t.songDetails.al.picUrl,alt:""}})]),s("div",{staticClass:"detailsRight"},[s("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.songDetails.name)+" ")]),s("div",{staticStyle:{margin:"10px 0 10px 0",height:"30px","font-size":"14px"}},[s("span",{staticClass:"playListNickName"},[t._v(t._s(t.songDetails.ar[0].name))]),s("span",[s("br"),t._v(" 时长  -  "),s("span",{staticStyle:{color:"antiquewhite"}},[t._v(t._s(t.songDetails.dt))])]),s("div",{staticClass:"option"},[s("div",{staticClass:"flexBetween"},[s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.listenMusic(t.songDetails)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0===t.songDetails.fee||8===t.songDetails.fee?s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return e.stopPropagation(),t.playMusic(t.songDetails)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(t.songDetails.mv)?s("span",{staticClass:"inline-block",on:{click:function(e){return t.playMV(t.songDetails.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"}),t._v("  ")]):t._e(),0===t.songDetails.fee||8===t.songDetails.fee?s("span",{staticClass:"inline-block",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.getDownloadUrl(t.songDetails.id,t.songDetails.name)}}},[s("i",{staticClass:"el-icon-download iconhover"}),t._v(" ")]):t._e(),0!==t.songDetails.fee?s("span",[t._v("    ")]):t._e()])])]),s("div",{staticStyle:{"margin-top":"30px","font-size":"14px"}},[s("span",[t._v(t._s(t.songDetails.alia[0]))])]),s("br")])]):t._e(),s("div",{staticStyle:{padding:"0px 50px"}},[s("h3",{staticStyle:{margin:"5px 0 10px 0"}},[t.commentCount?s("span",[t._v("评论("+t._s(t.commentCount)+"条)")]):t._e()]),t._l(t.songComment,(function(e){return s("div",{key:e.id,staticClass:"hoverBackColor"},[s("img",{staticStyle:{width:"50px","border-radius":"25px"},attrs:{src:e.user.avatarUrl}}),s("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"15px"}},[t._v(t._s(e.user.nickname)+"  :  ")]),s("span",{staticStyle:{"margin-left":"20px",width:"750px"}},[t._v(" "+t._s(e.content)+" ")]),s("div",{staticStyle:{height:"30px"}},[s("span",{staticStyle:{float:"right",width:"130px"}},[t._v("  时间："+t._s(e.timeStr))]),s("span",{staticStyle:{float:"right"}},[t._v(t._s(e.likedCount)+" 赞   ")])])])})),s("div",{staticClass:"pagination"},[0!==t.commentCount?s("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":7,layout:"prev, pager, next, jumper",total:t.commentCount,background:!0},on:{"current-change":t.songhandleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}):t._e()],1)],2)])])])},n=[],i=s(801),r=s(767),o={data(){return{currentPage:1,songUrlAdd:null,songId:"",songDetails:{al:{picUrl:""},ar:[{name:""}],alia:[],fee:0},songComment:[],commentCount:0,count:0}},mounted(){this.$route.params.songId&&localStorage.setItem("songId",this.$route.params.songId),this.$route.params.songId?this.songId=this.$route.params.songId:this.songId=localStorage.getItem("songId"),this.getSongDetails(),this.getSongComment()},methods:{songhandleCurrentChange(t){var e=this;e.currentPage=t,e.getSongComment()},async getSongDetails(){var t=this;let e={ids:t.songId};await(0,i.t7)(e).then((e=>{t.songDetails=e.data.songs[0],t.$set(t.songDetails,"timer",!0);let s=parseInt(t.songDetails.dt/1e3/60),a=parseInt(t.songDetails.dt/1e3%60);s<10&&(s="0"+s),a<10&&(a="0"+a),t.songDetails.dt=s+":"+a}))},getSongComment(){var t=this;let e={id:t.songId,limit:7,offset:7*(t.currentPage-1)};(0,i.Lp)(e).then((e=>{t.songComment=e.data.comments,t.commentCount=e.data.total}))},listenMusic(t){if(t.timer){if(t.noCopyrightRcmd)return this.$message({message:"这首歌暂无版权",type:"error"}),t.timer=!1,void setTimeout((()=>{t.timer=!0}),3e3);1==t.fee&&this.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),this.$store.commit("aplayer/addAUDITION",{name:t.name,artist:t.ar[0].name,url:`https://music.163.com/song/media/outer/url?id=${t.id}.mp3`,cover:t.al.picUrl,id:t.id}),t.timer=!1,setTimeout((()=>{t.timer=!0}),3e3)}},playMusic(t){if(t.timer){if(t.noCopyrightRcmd)return this.$message({message:"这首歌暂无版权",type:"error"}),t.timer=!1,void setTimeout((()=>{t.timer=!0}),3e3);1==t.fee&&this.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),this.$store.commit("aplayer/addSONG",{name:t.name,artist:t.ar[0].name,url:`https://music.163.com/song/media/outer/url?id=${t.id}.mp3`,cover:t.al.picUrl,id:t.id}),t.timer=!1,setTimeout((()=>{t.timer=!0}),3e3)}},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},async getDownloadUrl(t,e){var s=this;s.$message({type:"warning",message:"正在尝试下载"});let a={id:t};await(0,i.km)(a).then((async t=>{await(0,r.download)(t.data.data[0].url,e),s.$message({type:"success",message:"可以开始下载了"})}))},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},randomColor(){return`#${(16777215*Math.random()<<0).toString(16)}`}}},l=o,g=s(1001),c=(0,g.Z)(l,a,n,!1,null,"95315a78",null),m=c.exports},767:function(t){const e=t=>{if(!t)return;let e=new Date(t).getFullYear(),s=new Date(t).getMonth()+1,a=new Date(t).getDate();return e+"-"+s+"-"+a},s=(t,e)=>{for(let s=0;s<t.length;s++){let a=parseInt(t[s][e]/1e3/60),n=parseInt(t[s][e]/1e3%60);a<10&&(a="0"+a),n<10&&(n="0"+n),t[s][e]=a+":"+n}},a=(t,e)=>{for(let s=0;s<t.length;s++)String(t[s][e]).length>5&&String(t[s][e]).length<9?t[s][e]=String(t[s][e]).substr(0,String(t[s][e]).length-4)+"万":5==String(t[s][e]).length?t[s][e]=String(t[s][e]).substr(0,1)+"."+String(t[s][e]).substr(1,2)+"万":9==String(t[s][e]).length?t[s][e]=String(t[s][e]).substr(0,1)+"."+String(t[s][e]).substr(1,2)+"亿":String(t[s][e]).length>9&&(t[s][e]=String(t[s][e]).substr(0,String(t[s][e]).length-8)+"亿")},n=(t,e)=>{fetch(t).then((t=>t.blob())).then((t=>{const s=document.createElement("a");document.body.appendChild(s),s.style.display="none";const a=window.URL.createObjectURL(t);s.href=a,s.download=`${e}.mp3`,s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(a)}))},i=()=>(new Date).getTime(),r=(t,e)=>Math.floor(Math.random()*(e-t))+t;t.exports={transtime:e,transMusicTime:s,transPlayCount:a,download:n,getTimestamp:i,randomRange:r}}}]);
//# sourceMappingURL=478.f28bb621.js.map