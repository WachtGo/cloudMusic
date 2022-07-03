"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[195],{9195:function(t,i,s){s.r(i),s.d(i,{default:function(){return d}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list-wrap"},[s("h3",[s("div",{staticClass:"tagWrap"},[t.tagSwitch.songSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("songSwitch")}}},[t._v("单曲")]),t.tagSwitch.songSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("单曲")]):t._e(),t.tagSwitch.albumSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("albumSwitch")}}},[t._v("专辑")]),t.tagSwitch.albumSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("专辑")]):t._e(),t.tagSwitch.singerSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("singerSwitch")}}},[t._v("歌手")]),t.tagSwitch.singerSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌手")]):t._e(),t.tagSwitch.playListSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("playListSwitch")}}},[t._v("歌单")]),t.tagSwitch.playListSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌单")]):t._e(),t.tagSwitch.videoSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("videoSwitch")}}},[t._v("视频")]),t.tagSwitch.videoSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("视频")]):t._e(),t.tagSwitch.mvSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("mvSwitch")}}},[t._v("MV")]),t.tagSwitch.mvSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("MV")]):t._e()])]),s("div",{staticClass:"descript"}),s("div",[s("ul",[t.tagSwitch.songSwitch?s("div",t._l(t.musicList,(function(i,a){return s("li",{key:i.id,staticClass:"music-list"},[s("span",{staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),s("div",{on:{dblclick:function(s){return t.goSongDetails(i.id)}}},[s("span",{staticClass:"music-list-span"},[t._v(t._s(i.name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.ar[0].name))]),s("span",{staticClass:"music-list-span"},[t._v(t._s(i.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.listenMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(i.id,i.fee,a)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(i.mv)?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMV(i.mv,i.name)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==i.fee?s("span",{on:{click:function(s){return t.getDownloadUrl(i.id,i.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0):t._e(),t.tagSwitch.albumSwitch?s("div",{staticClass:"albumListClass"},t._l(t.albumList,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goAlbumDetail(i.id)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.blurPicUrl,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[s("span",{staticClass:"albumName"},[t._v(t._s(i.name)+" "),i.alias[0]?s("span",{staticClass:"albumName2"},[t._v(t._s(i.alias[0]))]):t._e()])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 作者："),s("span",[t._v(t._s(i.artist.name))])]),s("span",{staticClass:"inline-block",staticStyle:{display:"inline-block",width:"50px"}}),s("div",{staticClass:"divOther",staticStyle:{width:"100px"}},[t._v(" 歌曲："),s("span",[t._v(t._s(i.size))])])])])])})),0):t._e(),t.tagSwitch.singerSwitch?s("div",{staticClass:"singerListClass"},t._l(t.singerList,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goSingerDetail(i.id)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.img1v1Url,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[t._v(" 歌手："),s("span",[t._v(t._s(i.name))])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 专辑："),s("span",[t._v(t._s(i.albumSize))])]),s("div",{staticClass:"divOther"},[t._v(" MV："),s("span",[t._v(t._s(i.mvSize))])])])])])})),0):t._e(),t.tagSwitch.albumSwitch?s("div"):t._e(),t.tagSwitch.playListSwitch?s("div",{staticClass:"playListClass"},[s("div",{staticClass:"recPlay"},[s("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(i,a){return s("li",{key:a,staticClass:"playListTable"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:i.coverImgUrl,alt:"",title:""},on:{click:function(s){return t.goSongList(i.id)}}}),s("span",{staticClass:"playCount"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))])]),s("p",{staticClass:"List-title",on:{click:function(s){return t.goSongList(i.id)}}},[s("span",[t._v(t._s(i.name)+" ")])])])})),0)])]):t._e(),t.tagSwitch.videoSwitch?s("div",{staticClass:"videoListClass"},[s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.videoList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.coverUrl,alt:"",title:""},on:{click:function(s){return t.goVideo(i.vid,i.type)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playTime))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.durationms))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.vid,i.type)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.title))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[i.markTypes?s("span",[t._v("by ")]):t._e(),s("span",[t._v(t._s(i.creator[0].userName))])])])])})),0)])]):t._e(),t.tagSwitch.mvSwitch?s("div",{staticClass:"videoListClass"},[s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.mvList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.cover,alt:"",title:""},on:{click:function(s){return t.goVideo(i.id,i.mark)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.duration))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.id,i.mark)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.name))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[s("span",[t._v("by ")]),s("span",[t._v(t._s(i.artistName))])])])])})),0)])]):t._e()])]),s("div",{staticStyle:{"text-align":"center","margin-top":"10px","box-sizing":"border-box"}},[0!=t.count?s("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(i){t.currentPage=i},"update:current-page":function(i){t.currentPage=i}}}):t._e()],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[s("aplayer",{attrs:{autoplay:"",fixed:!0,audio:t.listen,"liric-type":1}})],1)])},e=[],n=s(7965),l=(s(4916),s(4765),s(8309),s(1539),s(9714),s(3629)),r=s(2650),o={data:function(){return{listen:[],tagSwitch:{},videoList:[],playListTable:[],musicList:[],albumList:[],singerList:[],mvList:[],downLoadUrl:"",activeName:"first",count:"",songUrlAdd:null,songlrc:"",currentPage:1}},created:function(){var t=this;t.tagSwitch=t.$store.state.tagSwitch,t.search()},methods:{tagSelect:function(t){var i=this;i.$store.commit("tagSelect",t),i.$nextTick((function(){i.search()}))},handleCurrentChange:function(t){this.currentPage=t;var i=this;i.$route.query.recplaylist?i.getSongList(t):i.tagSwitch.songSwitch?i.getSingleMuscic():i.tagSwitch.playListSwitch?i.getMusicList():i.tagSwitch.videoSwitch?i.getVideoList():i.tagSwitch.mvSwitch?i.getMVList():(i.tagSwitch.singerSwitch||i.tagSwitch.albumSwitch)&&i.getSingerList()},search:function(){var t=this;t.$route.query.recplaylist?t.getSongListDetails():t.tagSwitch.songSwitch?t.getSingleMuscic():t.tagSwitch.playListSwitch?t.getMusicList():t.tagSwitch.videoSwitch?t.getVideoList():t.tagSwitch.mvSwitch?t.getMVList():t.tagSwitch.singerSwitch?t.getSingerList():t.tagSwitch.albumSwitch&&t.getAlbumList()},goSongDetails:function(t){this.$router.push({name:"songDetails",query:{songId:t}})},goAlbumDetail:function(t){this.$router.push({name:"albumDetail",query:{id:t}})},goSingerDetail:function(t){t&&this.$router.push({name:"singerDetail",query:{id:t}})},goSongList:function(t){var i=this;i.$router.push({name:"playListDetails",query:{playListTable:!0,songListId:t}})},getSongListDetails:function(){var t=this,i={id:t.$route.query.songListId};(0,l.vw)(i).then((function(i){t.playList=i.data.playlist,t.musicList=t.playList.tracks,t.transMusicTime(t.playList,dt)}))},transMusicTime:function(t,i){for(var s=0;s<t.length;s++){var a=parseInt(t[s][i]/1e3/60),e=parseInt(t[s][i]/1e3%60);a<10&&(a="0"+a),e<10&&(e="0"+e),t[s][i]=a+":"+e}},playMV:function(t,i){this.$router.push({name:"mvPlay",query:{mvId:t,mvName:i}})},listenMusic:function(t,i,s){var a=this;a.musicList[s].timer&&(1==i&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((function(){a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(t){null!=a.songUrlAdd&&(a.listen=[],a.listen.push({name:t.data.songs[0].name,artist:t.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:t.data.songs[0].al.picUrl,lrc:a.songlrc}),a.songUrlAdd=null,a.songlrc="")})))},playMusic:function(t,i,s){var a=this;a.musicList[s].timer&&(1==i&&a.$message({message:"VIP歌曲 - 只能试听30s",type:"warning"}),(0,l.vJ)({id:t}).then((function(t){if(!t.data.data[0].url)return a.$message({message:"不好意思这首歌暂无版权",type:"error"}),a.musicList[s].timer=!1,void setTimeout((function(){a.musicList[s].timer=!0}),3e3);a.songUrlAdd=t.data.data[0].url})),(0,l.mq)({id:t}).then((function(t){a.songlrc=t.data.lrc.lyric})),(0,l.t7)({ids:t}).then((function(i){null!=a.songUrlAdd&&(a.$store.commit("addSong",{name:i.data.songs[0].name,artist:i.data.songs[0].ar[0].name,url:a.songUrlAdd,cover:i.data.songs[0].al.picUrl,lrc:a.songlrc,id:t}),a.songUrlAdd=null,a.songlrc="",a.musicList[s].timer=!1,setTimeout((function(){a.musicList[s].timer=!0}),3e3))})))},getSingleMuscic:function(){var t=this;t.$route.query.reload;var i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:1};(0,l.Hv)(i).then((function(i){var s="dt";t.musicList=i.data.result.songs,t.count=i.data.result.songCount,t.transMusicTime(t.musicList,s);var a,e=(0,n.Z)(t.musicList);try{for(e.s();!(a=e.n()).done;){var l=a.value;t.$set(l,"timer",!0)}}catch(r){e.e(r)}finally{e.f()}}))},getAlbumList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:10};(0,l.Hv)(i).then((function(i){t.albumList=i.data.result.albums,t.count=i.data.result.albumCount}))},getSingerList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:100};(0,l.Hv)(i).then((function(i){t.singerList=i.data.result.artists,t.count=i.data.result.artistCount}))},getMusicList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:1e3};(0,l.Hv)(i).then((function(i){t.playListTable=i.data.result.playlists,t.count=i.data.result.playlistCount;for(var s=0;s<t.playListTable.length;s++)String(t.playListTable[s].playCount).length>5&&String(t.playListTable[s].playCount).length<9?t.playListTable[s].playCount=String(t.playListTable[s].playCount).substr(0,String(t.playListTable[s].playCount).length-4)+"万":5==String(t.playListTable[s].playCount).length?t.playListTable[s].playCount=String(t.playListTable[s].playCount).substr(0,1)+"."+String(t.playListTable[s].playCount).substr(1,2)+"万":9==String(t.playListTable[s].playCount).length?t.playListTable[s].playCount=String(t.playListTable[s].playCount).substr(0,1)+"."+String(t.playListTable[s].playCount).substr(1,2)+"亿":String(t.playListTable[s].playCount).length>9&&(t.playListTable[s].playCount=String(t.playListTable[s].playCount).substr(0,String(t.playListTable[s].playCount).length-8)+"亿")}))},getVideoList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1014};(0,l.Hv)(i).then((function(i){var s="durationms";t.videoList=i.data.result.videos,t.count=i.data.result.videoCount,t.transMusicTime(t.videoList,s);for(var a=0;a<t.videoList.length;a++)String(t.videoList[a].playTime).length>5&&String(t.videoList[a].playTime).length<9?t.videoList[a].playTime=String(t.videoList[a].playTime).substr(0,String(t.videoList[a].playTime).length-4)+"万":5==String(t.videoList[a].playTime).length?t.videoList[a].playTime=String(t.videoList[a].playTime).substr(0,1)+"."+String(t.videoList[a].playTime).substr(1,2)+"万":9==String(t.videoList[a].playTime).length?t.videoList[a].playTime=String(t.videoList[a].playTime).substr(0,1)+"."+String(t.videoList[a].playTime).substr(1,2)+"亿":String(t.videoList[a].playTime).length>9&&(t.videoList[a].playTime=String(t.videoList[a].playTime).substr(0,String(t.videoList[a].playTime).length-8)+"亿")}))},getMVList:function(){var t=this,i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1004};(0,l.Hv)(i).then((function(i){var s="duration";t.mvList=i.data.result.mvs,t.count=i.data.result.mvCount,t.transMusicTime(t.mvList,s);for(var a=0;a<t.mvList.length;a++)String(t.mvList[a].playCount).length>5&&String(t.mvList[a].playCount).length<9?t.mvList[a].playCount=String(t.mvList[a].playCount).substr(0,String(t.mvList[a].playCount).length-4)+"万":5==String(t.mvList[a].playCount).length?t.mvList[a].playCount=String(t.mvList[a].playCount).substr(0,1)+"."+String(t.mvList[a].playCount).substr(1,2)+"万":9==String(t.mvList[a].playCount).length?t.mvList[a].playCount=String(t.mvList[a].playCount).substr(0,1)+"."+String(t.mvList[a].playCount).substr(1,2)+"亿":String(t.mvList[a].playCount).length>9&&(t.mvList[a].playCount=String(t.mvList[a].playCount).substr(0,String(t.mvList[a].playCount).length-8)+"亿")}))},getDownloadUrl:function(t,i){var s=this,a={id:t};(0,l.km)(a).then((function(t){(0,r.L)(t.data.data.url,i),s.$message({type:"success",message:"开始下载了"})}))},goVideo:function(t,i){0===i?this.$router.push({name:"mvPlay",query:{mvId:t}}):this.$router.push({name:"videoPlay",query:{vid:t}})},randomColor:function(){return"#".concat((16777215*Math.random()<<0).toString(16))}}},c=o,u=s(1001),g=(0,u.Z)(c,a,e,!1,null,"05630765",null),d=g.exports},2650:function(t,i,s){s.d(i,{L:function(){return n}});s(1539),s(8783),s(3948),s(285),s(1637);var a=s(6166),e=s.n(a),n=function(t,i){if(t){var s=i||"";e()({method:"get",url:t,responseType:"blob",headers:{"content-type":"audio/mpeg"}}).then((function(t){var i=new Blob([t.data],{type:t.data.type}),a=document.createElement("a"),e=window.URL.createObjectURL(i);a.href=e,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(e)})).catch((function(t){console.log(t)}))}}}}]);
//# sourceMappingURL=195-legacy.6dd9f8fb.js.map