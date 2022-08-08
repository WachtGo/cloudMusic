"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[376],{4376:function(t,i,s){s.r(i),s.d(i,{default:function(){return g}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list-wrap"},[s("h3",[s("div",{staticClass:"tagWrap"},[t.tagSwitch.songSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("songSwitch")}}},[t._v("单曲")]),t.tagSwitch.songSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("单曲")]):t._e(),t.tagSwitch.albumSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("albumSwitch")}}},[t._v("专辑")]),t.tagSwitch.albumSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("专辑")]):t._e(),t.tagSwitch.singerSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("singerSwitch")}}},[t._v("歌手")]),t.tagSwitch.singerSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌手")]):t._e(),t.tagSwitch.playListSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("playListSwitch")}}},[t._v("歌单")]),t.tagSwitch.playListSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌单")]):t._e(),t.tagSwitch.videoSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("videoSwitch")}}},[t._v("视频")]),t.tagSwitch.videoSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("视频")]):t._e(),t.tagSwitch.mvSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("mvSwitch")}}},[t._v("MV")]),t.tagSwitch.mvSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("MV")]):t._e()])]),s("div",{staticClass:"descript"}),s("div",[s("ul",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.songSwitch,expression:"tagSwitch.songSwitch"}]},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.musicList.length,expression:"musicList.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),t._l(t.musicList,(function(i,a){return s("li",{key:i.id,staticClass:"music-list"},[s("span",{staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),s("div",{on:{dblclick:function(s){return t.goSongDetails(i.id)}}},[s("span",{staticClass:"music-list-span"},[t._v(t._s(i.name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.ar[0].name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.listenMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(i.mv)?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMV(i.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==i.fee?s("span",{on:{click:function(s){return t.getDownloadUrl(i.id,i.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.albumSwitch,expression:"tagSwitch.albumSwitch"}],staticClass:"albumListClass"},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.albumList.length,expression:"albumList.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),t._l(t.albumList,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goAlbumDetail(i.id)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.blurPicUrl,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[s("span",{staticClass:"albumName"},[t._v(t._s(i.name)+" "),i.alias[0]?s("span",{staticClass:"albumName2"},[t._v(t._s(i.alias[0]))]):t._e()])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 作者："),s("span",[t._v(t._s(i.artist.name))])]),s("span",{staticClass:"inline-block",staticStyle:{display:"inline-block",width:"50px"}}),s("div",{staticClass:"divOther",staticStyle:{width:"100px"}},[t._v(" 歌曲："),s("span",[t._v(t._s(i.size))])])])])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.singerSwitch,expression:"tagSwitch.singerSwitch"}],staticClass:"singerListClass"},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.singerList.length,expression:"singerList.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),t._l(t.singerList,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goSingerDetail(i.id)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.img1v1Url,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[t._v(" 歌手："),s("span",[t._v(t._s(i.name))])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 专辑："),s("span",[t._v(t._s(i.albumSize))])]),s("div",{staticClass:"divOther"},[t._v(" MV："),s("span",[t._v(t._s(i.mvSize))])])])])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.albumSwitch,expression:"tagSwitch.albumSwitch"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.playListSwitch,expression:"tagSwitch.playListSwitch"}],staticClass:"playListClass"},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"recPlay"},[s("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(i,a){return s("li",{key:a,staticClass:"playListTable"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:i.coverImgUrl,alt:"",title:""},on:{click:function(s){return t.goSongList(i.id)}}}),s("span",{staticClass:"playCount"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))])]),s("p",{staticClass:"List-title",on:{click:function(s){return t.goSongList(i.id)}}},[s("span",[t._v(t._s(i.name)+" ")])])])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.videoSwitch,expression:"tagSwitch.videoSwitch"}],staticClass:"videoListClass"},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.videoList.length,expression:"videoList.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.videoList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.coverUrl,alt:"",title:""},on:{click:function(s){return t.goVideo(i.vid,i.type)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playTime))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.durationms))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.vid,i.type)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.title))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[i.markTypes?s("span",[t._v("by ")]):t._e(),s("span",[t._v(t._s(i.creator[0].userName))])])])])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.mvSwitch,expression:"tagSwitch.mvSwitch"}],staticClass:"videoListClass"},[s("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.mvList.length,expression:"mvList.length === 0"}]},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.mvList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.cover,alt:"",title:""},on:{click:function(s){return t.goVideo(i.id,i.mark)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.duration))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.id,i.mark)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.name))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[s("span",[t._v("by ")]),s("span",[t._v(t._s(i.artistName))])])])])})),0)])])])]),s("div",{staticStyle:{"text-align":"center","margin-top":"10px","box-sizing":"border-box"}},[s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!=t.count,expression:"count != 0"}],attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(i){t.currentPage=i},"update:current-page":function(i){t.currentPage=i}}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[s("aplayer",{attrs:{autoplay:"",fixed:!0,audio:t.listen,"liric-type":1}})],1)])},e=[],n=s(8439),c=(s(4916),s(4765),s(8309),s(1539),s(9714),s(6055)),l=s(9171),o=s(767),r={data:function(){return{listen:[],tagSwitch:{},videoList:[],playListTable:[],musicList:[],albumList:[],singerList:[],mvList:[],downLoadUrl:"",activeName:"first",count:"",songUrlAdd:null,songlrc:"",currentPage:1}},created:function(){var t=this;t.tagSwitch=t.$store.state.tagSwitch,t.search()},methods:{tagSelect:function(t){var i=this;i.$store.commit("tagSelect",t),i.$nextTick((function(){i.search()}))},handleCurrentChange:function(t){this.currentPage=t;var i=this;i.tagSwitch.songSwitch?i.getSingleMuscic():i.tagSwitch.playListSwitch?i.getMusicList():i.tagSwitch.videoSwitch?i.getVideoList():i.tagSwitch.mvSwitch?i.getMVList():(i.tagSwitch.singerSwitch||i.tagSwitch.albumSwitch)&&i.getSingerList()},search:function(){var t=this;t.tagSwitch.songSwitch?t.getSingleMuscic():t.tagSwitch.playListSwitch?t.getMusicList():t.tagSwitch.videoSwitch?t.getVideoList():t.tagSwitch.mvSwitch?t.getMVList():t.tagSwitch.singerSwitch?t.getSingerList():t.tagSwitch.albumSwitch&&t.getAlbumList()},goSongDetails:function(t){this.$router.push({name:"songDetails",params:{songId:t}})},goAlbumDetail:function(t){this.$router.push({name:"albumDetail",params:{albumId:t}})},goSingerDetail:function(t){t&&this.$router.push({name:"singerDetail",params:{singerId:t}})},goSongList:function(t){var i=this;i.$router.push({name:"playListDetails",params:{songListId:t}})},playMV:function(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},listenMusic:function(t,i,s){var a=this;a.musicList[s].timer&&(1==i&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,c.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((function(){a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,c.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,c.t7)({ids:t}).then((function(t){null!=a.songUrlAdd&&(a.listen=[],a.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="")})))},playMusic:function(t,i,s){var a=this;a.musicList[s].timer&&(1==i&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,c.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((function(){a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,c.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,c.t7)({ids:t}).then((function(i){null!=a.songUrlAdd&&(a.$store.commit("addSONG",{name:i.data.songs[0].name,artist:i.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:i.data.songs[0].al.picUrl,lrc:a.songlrc,id:t}),a.songUrlAdd=null,a.songlrc="",a.musicList[s].timer=!1,setTimeout((function(){a.musicList[s].timer=!0}),3e3))})))},getSingleMuscic:function(){var t=this;t.$route.query.reload;var i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:1};(0,c.Hv)(i).then((function(i){t.musicList=i.data.result.songs,t.count=i.data.result.songCount,(0,o.transMusicTime)(t.musicList,"dt");var s,a=(0,n.Z)(t.musicList);try{for(a.s();!(s=a.n()).done;){var e=s.value;t.$set(e,"timer",!0)}}catch(c){a.e(c)}finally{a.f()}}))},getAlbumList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:10};(0,c.Hv)(i).then((function(i){t.albumList=i.data.result.albums,t.count=i.data.result.albumCount}))},getSingerList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:100};(0,c.Hv)(i).then((function(i){t.singerList=i.data.result.artists,t.count=i.data.result.artistCount}))},getMusicList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:1e3};(0,c.Hv)(i).then((function(i){t.playListTable=i.data.result.playlists,t.count=i.data.result.playlistCount,(0,o.transPlayCount)(t.playListTable)}))},getVideoList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1014};(0,c.Hv)(i).then((function(i){t.videoList=i.data.result.videos,t.count=i.data.result.videoCount,(0,o.transMusicTime)(t.videoList,"durationms"),(0,o.transPlayCount)(t.videoList,"playTime")}))},getMVList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1004};(0,c.Hv)(i).then((function(i){t.mvList=i.data.result.mvs,t.count=i.data.result.mvCount,(0,o.transMusicTime)(t.mvList,"duration"),(0,o.transPlayCount)(t.mvList,"playCount")}))},getDownloadUrl:function(t,i){var s=this,a={id:t};(0,c.km)(a).then((function(t){(0,l.L)(t.data.data.url,i),s.$message({type:"success",message:"开始下载了"})}))},goVideo:function(t,i){0===i?this.$router.push({name:"mvPlay",params:{mvId:t}}):this.$router.push({name:"videoPlay",params:{videoId:t}})},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},u=r,d=s(3736),v=(0,d.Z)(u,a,e,!1,null,"adaa35a6",null),g=v.exports}}]);
//# sourceMappingURL=376-legacy.10545573.js.map