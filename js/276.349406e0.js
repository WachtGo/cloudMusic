(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[276],{9407:function(t,s,e){"use strict";e.d(s,{Z:function(){return m}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.songlist,(function(s,a){return e("div",{key:s.id,staticClass:"music-list"},[e("div",{staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),e("div",{staticClass:"music-list-info",on:{dblclick:function(e){return t.goSongDetails(s.id)}}},[e("div",{staticClass:"music-list-span"},[t._v(t._s(s.name))]),e("div",{staticClass:"music-list-span"},[t._v(t._s(s.ar[0].name))]),e("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(s.dt))])]),e("div",{staticClass:"option"},[e("span",{on:{click:function(e){return t.listenMusic(s)}}},[e("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?e("span",{on:{click:function(e){return e.stopPropagation(),t.playMusic(s)}}},[e("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?e("span",{on:{click:function(e){return e.stopPropagation(),t.playMV(s.mv)}}},[e("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee||8==s.fee?e("span",{on:{click:function(e){return t.getDownloadUrl(s.id,s.name)}}},[e("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},i=[],n=e(801),l=e(4979),r=e(767),o={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},listenMusic(t){var s=this;(0,l.b)(t,s)},playMusic(t){var s=this;(0,l.H)(t,s)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,s){var e=this;e.$message({type:"success",message:"正在尝试下载"});let a={id:t};(0,n.km)(a).then((t=>{(0,r.download)(t.data.data[0].url,s),e.$message({type:"success",message:"开始下载了"})}))}}},c=o,u=e(1001),d=(0,u.Z)(c,a,i,!1,null,null,null),m=d.exports},8315:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return m}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-wrap"},[e("h3",[t._v("专辑详情")]),e("div",{staticClass:"descript"}),e("div",[e("div",{staticClass:"ul"},[e("div",{staticClass:"details"},[e("div",{staticClass:"details-img"},[e("img",{attrs:{src:t.albumDesc.blurPicUrl,alt:""}})]),e("div",{staticClass:"detailsRight"},[e("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.albumDesc.name)+" ")]),e("div",{staticStyle:{"font-size":"14px"}},[e("div",{staticClass:"aliasClass"},[e("img",{staticClass:"artistPic",attrs:{src:t.albumDesc.artist.img1v1Url,alt:""}}),t._v("- "),e("span",{staticClass:"playListNickName"},[t._v(t._s(t.albumDesc.artist.name))])])])])]),e("div",{attrs:{id:"singleSongs"}},[e("h3",[t._v("专辑歌曲："+t._s(t.albumSongs.length)+"首")]),e("songlist",{attrs:{songlist:t.albumSongs}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},i=[],n=e(801),l=e(767),r=e(9407),o={components:{songlist:r.Z},data(){return{listen:[],albumId:"",albumSongs:[],albumDesc:{artist:{img1v1Url:""}}}},mounted(){this.$route.params.albumId&&localStorage.setItem("albumId",this.$route.params.albumId),this.$route.params.albumId?this.albumId=this.$route.params.albumId:this.albumId=localStorage.getItem("albumId"),this.getAlbumContent()},methods:{getAlbumContent(){var t=this;let s={id:t.albumId};(0,n.Li)(s).then((s=>{console.log("专辑信息---：",s.data.album),t.albumDesc=s.data.album,t.albumSongs=s.data.songs;for(let a of t.albumSongs)t.$set(a,"timer",!0);let e="dt";(0,l.transMusicTime)(t.albumSongs,e)}))}}},c=o,u=e(1001),d=(0,u.Z)(c,a,i,!1,null,null,null),m=d.exports},767:function(t){const s=t=>{if(!t)return;let s=new Date(t).getFullYear(),e=new Date(t).getMonth()+1,a=new Date(t).getDate();return s+"-"+e+"-"+a},e=(t,s)=>{for(let e=0;e<t.length;e++){let a=parseInt(t[e][s]/1e3/60),i=parseInt(t[e][s]/1e3%60);a<10&&(a="0"+a),i<10&&(i="0"+i),t[e][s]=a+":"+i}},a=(t,s)=>{for(let e=0;e<t.length;e++)String(t[e][s]).length>5&&String(t[e][s]).length<9?t[e][s]=String(t[e][s]).substr(0,String(t[e][s]).length-4)+"万":5==String(t[e][s]).length?t[e][s]=String(t[e][s]).substr(0,1)+"."+String(t[e][s]).substr(1,2)+"万":9==String(t[e][s]).length?t[e][s]=String(t[e][s]).substr(0,1)+"."+String(t[e][s]).substr(1,2)+"亿":String(t[e][s]).length>9&&(t[e][s]=String(t[e][s]).substr(0,String(t[e][s]).length-8)+"亿")},i=(t,s)=>{fetch(t).then((t=>t.blob())).then((t=>{const e=document.createElement("a");document.body.appendChild(e),e.style.display="none";const a=window.URL.createObjectURL(t);e.href=a,e.download=`${s}.mp3`,e.click(),document.body.removeChild(e),window.URL.revokeObjectURL(a)}))},n=()=>(new Date).getTime(),l=(t,s)=>Math.floor(Math.random()*(s-t))+t;t.exports={transtime:s,transMusicTime:e,transPlayCount:a,download:i,getTimestamp:n,randomRange:l}}}]);
//# sourceMappingURL=276.349406e0.js.map