"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[674],{5674:function(t,s,i){i.r(s),i.d(s,{default:function(){return d}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-wrap"},[i("h3",[t._v("歌手详情")]),i("div",{staticClass:"descript"}),i("div",[i("div",{staticClass:"ul"},[i("div",{staticClass:"playListDetailes"},[i("div",{staticClass:"playListImg"},[i("img",{attrs:{src:t.singerDesc.img1v1Url,alt:""}})]),i("div",{staticClass:"detailsRight"},[i("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.singerDesc.name)+" ")]),i("div",{staticStyle:{"font-size":"14px"}},[i("div",{staticClass:"aliasClass"},[t.singerDesc.alias[0]?i("span",{staticClass:"playListNickName"},[t._v(t._s(t.singerDesc.alias[0]))]):t._e(),t.singerDesc.alias[1]?i("span",{staticClass:"playListNickName"},[t._v("-")]):t._e(),i("span",{staticClass:"playListNickName2"},[t._v(t._s(t.singerDesc.alias[1]))]),t._m(0)]),i("div",{staticClass:"option"},[i("div",{staticClass:"flexBetween"},[i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerSongList("songSwitch")}}},[t._v("歌曲："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.musicSize))])]),i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerAlbum("albumSwitch")}}},[t._v("专辑："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.albumSize))])]),i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerMvList("mvSwitch")}}},[t._v("MV："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.mvSize))])])])])])])]),t.tagSwitch.detailSwitch?i("div",{staticClass:"singerDetail"},[i("h3",{staticStyle:{"font-size":"15px"}},[t._v("简介：")]),i("p",[t._v("        "+t._s(t.singerDesc.briefDesc)+" ")])]):t._e(),t.tagSwitch.songSwitch?i("div",{attrs:{id:"singleSongs"}},[i("h3",[t._v(" 歌曲："+t._s(t.songList.length)+"    "),i("span",{staticStyle:{}},[t._v("(受接口限制-这里最多获取50首歌手热门歌曲-建议直接搜)")])]),t._l(t.songList,(function(s,a){return i("div",{key:a,staticClass:"SingsList"},[i("span",{staticClass:"song-list",staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),i("div",{on:{dblclick:function(i){return t.goSongDetails(s.id)}}},[i("span",{staticClass:"song-list",staticStyle:{width:"350px"}},[t._v(" "+t._s(s.name)+" ")]),i("span",{staticClass:"song-list",staticStyle:{width:"250px","text-align":"center"}},[t._v(" "+t._s(s.ar[0].name)+" ")]),i("span",{staticClass:"song-list",staticStyle:{width:"230px"}},[t._v(" "+t._s(s.dt)+" ")]),i("span",{staticClass:"song-list",staticStyle:{width:"150px"}})]),i("span",{staticClass:"song-list song-list-option"},[i("span",{on:{click:function(i){return i.stopPropagation(),t.listenMusic(s.id,s.fee,a)}}},[i("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMusic(s.id,s.fee,a)}}},[i("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMV(s.mv)}}},[i("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.getDownloadUrl(s.id,s.name)}}},[i("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])}))],2):t._e(),t.tagSwitch.albumSwitch?i("div",{attrs:{id:"albumList"}},t._l(t.albumList,(function(s,a){return i("li",{key:a,staticClass:"liWrap",on:{click:function(i){return i.stopPropagation(),t.goAlbumDetail(s.id)}}},[i("div",{staticClass:"liWrap-block1"},[i("img",{attrs:{src:s.blurPicUrl,alt:""}})]),i("div",{staticClass:"liWrap-block2"},[i("div",{staticClass:"div1"},[i("span",{staticClass:"albumName"},[t._v(t._s(s.name)+" "),s.alias[0]?i("span",{staticClass:"albumName2"},[t._v(t._s(s.alias[0]))]):t._e()])]),i("div",[i("div",{staticClass:"divOther"}),i("span",{staticClass:"inline-block",staticStyle:{display:"inline-block",width:"50px"}}),i("div",{staticClass:"divOther",staticStyle:{width:"100px"}},[t._v(" 歌曲："),i("span",[t._v(t._s(s.size))])])])])])})),0):t._e(),t.tagSwitch.mvSwitch?i("div",{attrs:{id:"singerMvs"}},[i("h3",{staticStyle:{margin:"0 auto"}},[t._v(" MV："+t._s(t.mvList.length)+"    "),i("span",{staticStyle:{}},[t._v("(受接口限制-这里最多获取10个-建议直接搜)")])]),i("ul",{staticClass:"videoPlaywrap"},t._l(t.mvList,(function(s,a){return i("li",{key:a,staticClass:"videoPlayList"},[i("div",{staticClass:"videoImage"},[i("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:s.imgurl16v9,alt:"",title:""},on:{click:function(i){return t.goMv(s.id)}}}),i("span",{staticClass:"videoPlayTime"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))]),i("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(s.duration))])]),i("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"}},[i("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[s.type?t._e():i("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(s.name))]),i("br"),i("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[i("span",[t._v("by ")]),i("span",[t._v(t._s(s.artistName))])])])])})),0)]):t._e()])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[i("aplayer",{attrs:{autoplay:!0,fixed:!0,audio:t.listen,"liric-type":1}})],1)])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("br"),i("span",{staticStyle:{color:"antiquewhite"}})])}],e=i(8439),l=(i(8309),i(1539),i(9714),i(801)),r=i(9012),o={data:function(){return{listen:[],singerId:"",singerDesc:{},songList:[],albumList:[],mvList:[],tagSwitch:{detailSwitch:!0,songSwitch:!1,albumSwitch:!1,mvSwitch:!1}}},mounted:function(){this.$route.params.singerId&&localStorage.setItem("singerId",this.$route.params.singerId),this.$route.params.singerId?this.singerId=this.$route.params.singerId:this.singerId=localStorage.getItem("singerId"),this.getSingerDesc()},methods:{switchChange:function(t){var s=this;for(var i in s.tagSwitch)i!=t&&(s.tagSwitch[i]=!1);s.tagSwitch[t]=!0},getSingerSongList:function(t){var s=this;s.detailShow=!1;var i={id:s.singerId};(0,l.UV)(i).then((function(t){s.songList=t.data.hotSongs;var i,a=(0,e.Z)(s.songList);try{for(a.s();!(i=a.n()).done;){var n=i.value;s.$set(n,"timer",!0)}}catch(r){a.e(r)}finally{a.f()}var l="dt";s.transMusicTime(s.songList,l)})),s.switchChange(t)},getSingerAlbum:function(t){var s=this;s.detailShow=!1;var i={id:s.singerId,limit:999};(0,l.F7)(i).then((function(t){s.albumList=t.data.hotAlbums})),s.switchChange(t)},getSingerMvList:function(t){var s=this,i={id:s.singerId};(0,l.Rf)(i).then((function(t){s.mvList=t.data.mvs;var i="duration";s.transMusicTime(s.mvList,i);for(var a=0;a<s.mvList.length;a++)String(s.mvList[a].playCount).length>5&&String(s.mvList[a].playCount).length<9?s.mvList[a].playCount=String(s.mvList[a].playCount).substr(0,String(s.mvList[a].playCount).length-4)+"万":5==String(s.mvList[a].playCount).length?s.mvList[a].playCount=String(s.mvList[a].playCount).substr(0,1)+"."+String(s.mvList[a].playCount).substr(1,2)+"万":9==String(s.mvList[a].playCount).length?s.mvList[a].playCount=String(s.mvList[a].playCount).substr(0,1)+"."+String(s.mvList[a].playCount).substr(1,2)+"亿":String(s.mvList[a].playCount).length>9&&(s.mvList[a].playCount=String(s.mvList[a].playCount).substr(0,String(s.mvList[a].playCount).length-8)+"亿")})),s.switchChange(t)},getSingerDesc:function(){var t=this,s={id:t.singerId};(0,l.dn)(s).then((function(s){t.singerDesc=s.data.artist}))},transMusicTime:function(t,s){for(var i=0;i<t.length;i++){var a=parseInt(t[i][s]/1e3/60),n=parseInt(t[i][s]/1e3%60);a<10&&(a="0"+a),n<10&&(n="0"+n),t[i][s]=a+":"+n}},listenMusic:function(t,s,i){var a=this;a.songList[i].timer&&(1==s&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.songList[i].timer=!1,void setTimeout((function(){a.songList[i].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(t){null!=a.songUrlAdd&&(a.listen=[],a.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="")})))},playMusic:function(t,s,i){var a=this;a.songList[i].timer&&(1==s&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.songList[i].timer=!1,void setTimeout((function(){a.songList[i].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(t){null!=a.songUrlAdd&&(a.$store.commit("addSONG",{name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="",a.songList[i].timer=!1,setTimeout((function(){a.songList[i].timer=!0}),3e3))})))},goSongDetails:function(t){this.$router.push({name:"songDetails",params:{songId:t}})},goAlbumDetail:function(t){this.$router.push({name:"albumDetail",params:{id:t}})},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},goMv:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl:function(t,s){var i=this,a={id:t};(0,l.km)(a).then((function(t){(0,r.L)(t.data.data.url,s),i.$message({type:"success",message:"开始下载了"})}))},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},c=o,g=i(3736),u=(0,g.Z)(c,a,n,!1,null,"3484f65e",null),d=u.exports},9012:function(t,s,i){i.d(s,{L:function(){return e}});i(1539),i(8783),i(3948),i(285),i(1637);var a=i(6265),n=i.n(a),e=function(t,s){if(t){var i=s||"";n()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var s=new Blob([t.data],{type:t.data.type}),a=document.createElement("a"),n=window.URL.createObjectURL(s);a.href=n,a.download=i,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(n)})).catch((function(t){}))}}}}]);
//# sourceMappingURL=674-legacy.e97a80c7.js.map