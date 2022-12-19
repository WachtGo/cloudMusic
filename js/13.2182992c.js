"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[13],{2699:function(t,s,i){i.d(s,{Z:function(){return m}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",t._l(t.songlist,(function(s,e){return i("div",{key:s.id,staticClass:"music-list"},[i("div",{staticStyle:{width:"20px"}},[t._v(t._s(e+1)+".")]),i("div",{staticClass:"music-list-info",on:{dblclick:function(i){return t.goSongDetails(s.id)}}},[i("div",{staticClass:"music-list-span"},[t._v(t._s(s.name))]),i("div",{staticClass:"music-list-span"},[t._v(t._s(s.ar[0].name))]),i("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(s.dt))])]),i("div",{staticClass:"option"},[i("span",{on:{click:function(i){return t.listenMusic(s.id,s.fee,e,s.noCopyrightRcmd)}}},[i("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMusic(s.id,s.fee,e,s.noCopyrightRcmd)}}},[i("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?i("span",{on:{click:function(i){return i.stopPropagation(),t.playMV(s.mv)}}},[i("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee||8==s.fee?i("span",{on:{click:function(i){return t.getDownloadUrl(s.id,s.name)}}},[i("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},a=[],n=i(9531),l=i(4979),r=i(767),c={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songId:t}})},listenMusic(t,s,i){var e=this,a="songlist";(0,l.b)(t,s,i,a,e)},playMusic(t,s,i){var e=this,a="songlist";(0,l.H)(t,s,i,a,e)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,s){var i=this;i.$message({type:"success",message:"正在尝试下载"});let e={id:t};(0,n.km)(e).then((t=>{(0,r.download)(t.data.data[0].url,s),i.$message({type:"success",message:"开始下载了"})}))}}},o=c,g=i(1001),u=(0,g.Z)(o,e,a,!1,null,null,null),m=u.exports},1013:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list-wrap"},[i("h3",[t._v("歌手详情")]),i("div",{staticClass:"descript"}),i("div",[i("div",{staticClass:"ul"},[i("div",{staticClass:"details"},[i("div",{staticClass:"details-img"},[i("img",{attrs:{src:t.singerDesc.img1v1Url,alt:""}})]),i("div",{staticClass:"detailsRight"},[i("h3",{staticStyle:{"margin-left":"0px","text-align":"left","font-size":"20px"}},[t._v(" "+t._s(t.singerDesc.name)+" ")]),i("div",{staticStyle:{"font-size":"14px"}},[i("div",{staticClass:"aliasClass"},[t.singerDesc.alias[0]?i("span",{staticClass:"playListNickName"},[t._v(t._s(t.singerDesc.alias[0]))]):t._e(),t.singerDesc.alias[1]?i("span",{staticClass:"playListNickName"},[t._v("-")]):t._e(),i("span",{staticClass:"playListNickName2"},[t._v(t._s(t.singerDesc.alias[1]))]),t._m(0)]),i("div",{staticClass:"option"},[i("div",{staticClass:"flexBetween"},[i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerSongList("songSwitch")}}},[t._v("歌曲："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.musicSize))])]),i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerAlbum("albumSwitch")}}},[t._v("专辑："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.albumSize))])]),i("span",{staticClass:"inline-block",on:{click:function(s){return t.getSingerMvList("mvSwitch")}}},[t._v("MV："),i("span",{staticClass:"musicSize"},[t._v(t._s(t.singerDesc.mvSize))])])])])])])]),t.tagSwitch.detailSwitch?i("div",{staticClass:"singerDetail"},[i("h3",{staticStyle:{"font-size":"15px"}},[t._v("简介：")]),i("p",[t._v("        "+t._s(t.singerDesc.briefDesc)+" ")])]):t._e(),t.tagSwitch.songSwitch?i("div",{attrs:{id:"singleSongs"}},[i("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.songList.length,expression:"songList.length === 0"}],staticStyle:{"text-align":"center"}},[i("i",{staticClass:"el-icon-loading"})]),0!==t.songList.length?i("div",[i("ul",{staticClass:"song-album-wrap"},[i("songlist",{attrs:{songlist:t.songList}})],1),i("div",{staticClass:"pagination"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.singerDesc.musicSize>30,expression:"singerDesc.musicSize > 30"}],attrs:{"current-page":t.songcurrentPage,"page-size":30,layout:"prev, pager, next, jumper",total:t.singerDesc.musicSize,background:!0},on:{"current-change":t.songHandleCurrentChange,"update:currentPage":function(s){t.songcurrentPage=s},"update:current-page":function(s){t.songcurrentPage=s}}})],1)]):t._e()]):t._e(),t.tagSwitch.albumSwitch?i("div",{attrs:{id:"albumList"}},[i("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.albumList.length,expression:"albumList.length === 0"}],staticStyle:{"text-align":"center"}},[i("i",{staticClass:"el-icon-loading"})]),0!==t.albumList.length?i("div",[i("ul",{staticClass:"song-album-wrap"},t._l(t.albumList,(function(s,e){return i("li",{key:e,staticClass:"liWrap",on:{click:function(i){return t.goAlbumDetail(s.id)}}},[i("div",{staticClass:"liWrap-block1"},[i("img",{attrs:{src:s.blurPicUrl,alt:""}})]),i("div",{staticClass:"liWrap-block2"},[i("div",{staticClass:"div1"},[i("span",{staticClass:"albumName"},[t._v(t._s(s.name)+" "),s.alias[0]?i("span",{staticClass:"albumName2"},[t._v(t._s(s.alias[0]))]):t._e()])]),i("div",[i("div",{staticClass:"divOther"}),i("span",{staticClass:"inline-block",staticStyle:{display:"inline-block",width:"50px"}}),i("div",{staticClass:"divOther",staticStyle:{width:"100px"}},[t._v(" 歌曲："),i("span",[t._v(t._s(s.size))])])])])])})),0),i("div",{staticClass:"pagination"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.singerDesc.albumSize>6,expression:"singerDesc.albumSize > 6"}],attrs:{"current-page":t.albumcurrentPage,"page-size":6,layout:"prev, pager, next, jumper",total:t.singerDesc.albumSize,background:!0},on:{"current-change":t.albumHandleCurrentChange,"update:currentPage":function(s){t.albumcurrentPage=s},"update:current-page":function(s){t.albumcurrentPage=s}}})],1)]):t._e()]):t._e(),t.tagSwitch.mvSwitch?i("div",{attrs:{id:"singerMvs"}},[i("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.mvList.length,expression:"mvList.length === 0"}],staticStyle:{"text-align":"center"}},[i("i",{staticClass:"el-icon-loading"})]),0!==t.mvList.length?i("div",[i("ul",{staticClass:"videoPlaywrap"},t._l(t.mvList,(function(s,e){return i("li",{key:e,staticClass:"videoPlayList"},[i("div",{staticClass:"videoImage"},[i("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:s.imgurl16v9,alt:"",title:""},on:{click:function(i){return t.playMV(s.id)}}}),i("span",{staticClass:"videoPlayTime"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))]),i("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(s.duration))])]),i("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"}},[i("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[s.type?t._e():i("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(s.name))]),i("br"),i("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[i("span",[t._v("by ")]),i("span",[t._v(t._s(s.artistName))])])])])})),0),i("div",{staticClass:"pagination"},[i("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.singerDesc.mvSize>8,expression:"singerDesc.mvSize > 8"}],attrs:{"current-page":t.mvcurrentPage,"page-size":8,layout:"prev, pager, next, jumper",total:t.singerDesc.mvSize,background:!0},on:{"current-change":t.mvHandleCurrentChange,"update:currentPage":function(s){t.mvcurrentPage=s},"update:current-page":function(s){t.mvcurrentPage=s}}})],1)]):t._e()]):t._e()])])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("br"),i("span",{staticStyle:{color:"antiquewhite"}})])}],n=i(9531),l=i(767),r=i(2699),c={components:{songlist:r.Z},data(){return{singerId:"",singerDesc:{},songList:[],albumList:[],mvList:[],tagSwitch:{detailSwitch:!0,songSwitch:!1,albumSwitch:!1,mvSwitch:!1},songcurrentPage:1,albumcurrentPage:1,mvcurrentPage:1}},mounted(){this.$route.params.singerId&&localStorage.setItem("singerId",this.$route.params.singerId),this.$route.params.singerId?this.singerId=this.$route.params.singerId:this.singerId=localStorage.getItem("singerId"),this.getSingerDesc()},methods:{switchChange(t){var s=this;for(let i in s.tagSwitch)i!=t&&(s.tagSwitch[i]=!1);s.tagSwitch[t]=!0},getSingerSongList(t){var s=this;let i={id:s.singerId,limit:30,offset:30*(s.songcurrentPage-1)};s.detailShow=!1,s.songList=[],(0,n.UV)(i).then((t=>{s.songList=t.data.songs;for(let e of s.songList)s.$set(e,"timer",!0);let i="dt";(0,l.transMusicTime)(s.songList,i)})),s.switchChange(t)},getSingerAlbum(t){var s=this;let i={id:s.singerId,limit:6,offset:6*(s.albumcurrentPage-1)};s.detailShow=!1,s.albumList=[],(0,n.F7)(i).then((t=>{s.albumList=t.data.hotAlbums})),s.switchChange(t)},getSingerMvList(t){var s=this;let i={id:s.singerId,limit:8,offset:8*(s.mvcurrentPage-1)};s.mvList=[],(0,n.Rf)(i).then((t=>{console.log("获取到的歌手MV：",t.data.mvs),s.mvList=t.data.mvs,(0,l.transMusicTime)(s.mvList,"duration"),(0,l.transPlayCount)(s.mvList,"playCount")})),s.switchChange(t)},getSingerDesc(){var t=this;let s={id:t.singerId};(0,n.dn)(s).then((s=>{t.singerDesc=s.data.artist}))},goAlbumDetail(t){this.$router.push({name:"albumDetail",params:{albumId:t}})},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},songHandleCurrentChange:function(t){var s=this;s.songcurrentPage=t,s.getSingerSongList("songSwitch")},albumHandleCurrentChange:function(t){var s=this;s.albumcurrentPage=t,s.getSingerAlbum("albumSwitch")},mvHandleCurrentChange:function(t){var s=this;s.mvcurrentPage=t,s.getSingerMvList("mvSwitch")}}},o=c,g=i(1001),u=(0,g.Z)(o,e,a,!1,null,"3bd70d0b",null),m=u.exports}}]);
//# sourceMappingURL=13.2182992c.js.map