"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[647],{6857:function(t,i,s){s.d(i,{Z:function(){return g}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",t._l(t.songlist,(function(i,a){return s("div",{key:i.id,staticClass:"music-list"},[s("div",{staticStyle:{width:"20px"}},[t._v(t._s(a+1)+".")]),s("div",{staticClass:"music-list-info",on:{dblclick:function(s){return t.goSongDetails(i)}}},[s("div",{staticClass:"music-list-span"},[t._v(t._s(i.name))]),s("div",{staticClass:"music-list-span"},[t._v(t._s(i.ar[0].name))]),s("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(i.dt))])]),s("div",{staticClass:"option"},[s("span",{on:{click:function(s){return t.likeMusic(i.id)}}},[s("i",{staticClass:"iFont el-icon-star-off"})]),s("span",{on:{click:function(s){return t.listenMusic(i)}}},[s("i",{staticClass:"el-icon-headset iconhover"})]),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMusic(i)}}},[s("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(i.mv)?s("span",{on:{click:function(s){return s.stopPropagation(),t.playMV(i.mv)}}},[s("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==i.fee||8==i.fee?s("span",{on:{click:function(s){return t.getDownloadUrl(i.id,i.name)}}},[s("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},e=[],l=s(8898),n=s(4979),c=s(5615),r=s(767),o={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songDetails:t}})},likeMusic(t){(0,c.Y)({id:t}).then((t=>{console.log("添加",t),200===t.data.code?this.$message({type:"success",message:"已添加入我的喜欢-可进入网易云音乐查看"}):this.$message({type:"error",message:`添加失败：状态码${t.data.code}`})})).catch((t=>{}))},listenMusic(t){var i=this;(0,n.b)(t,i)},playMusic(t){var i=this;(0,n.H)(t,i)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,i){var s=this;s.$message({type:"success",message:"正在尝试下载"});let a={id:t};(0,l.km)(a).then((t=>{(0,r.download)(t.data.data[0].url,i),s.$message({type:"success",message:"开始下载了"})}))}}},u=o,v=s(1001),d=(0,v.Z)(u,a,e,!1,null,null,null),g=d.exports},7647:function(t,i,s){s.r(i),s.d(i,{default:function(){return d}});var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"tagWrap"},[t.tagSwitch.songSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("songSwitch")}}},[t._v("单曲")]),t.tagSwitch.songSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("单曲")]):t._e(),t.tagSwitch.albumSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("albumSwitch")}}},[t._v("专辑")]),t.tagSwitch.albumSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("专辑")]):t._e(),t.tagSwitch.singerSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("singerSwitch")}}},[t._v("歌手")]),t.tagSwitch.singerSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌手")]):t._e(),t.tagSwitch.playListSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("playListSwitch")}}},[t._v("歌单")]),t.tagSwitch.playListSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("歌单")]):t._e(),t.tagSwitch.videoSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("videoSwitch")}}},[t._v("视频")]),t.tagSwitch.videoSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("视频")]):t._e(),t.tagSwitch.mvSwitch?t._e():s("span",{on:{click:function(i){return t.tagSelect("mvSwitch")}}},[t._v("MV")]),t.tagSwitch.mvSwitch?s("span",{staticStyle:{color:"rgb(80, 180, 220)"}},[t._v("MV")]):t._e()]),s("div",{staticClass:"descript"}),s("div",[s("ul",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.songSwitch,expression:"tagSwitch.songSwitch"}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.musicList.length,expression:"musicList.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),s("songlist",{attrs:{songlist:t.musicList}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.albumSwitch,expression:"tagSwitch.albumSwitch"}],staticClass:"albumListClass"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.albumList.length,expression:"albumList.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),t._l(t.albumList,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goAlbumDetail(i.id)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.blurPicUrl,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[s("span",{staticClass:"albumName"},[t._v(t._s(i.name)+" "),i.alias[0]?s("span",{staticClass:"albumName2"},[t._v(t._s(i.alias[0]))]):t._e()])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 作者："),s("span",[t._v(t._s(i.artist.name))])]),s("span",{staticClass:"inline-block",staticStyle:{display:"inline-block",width:"50px"}}),s("div",{staticClass:"divOther",staticStyle:{width:"100px"}},[t._v(" 歌曲："),s("span",[t._v(t._s(i.size))])])])])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.singerSwitch,expression:"tagSwitch.singerSwitch"}],staticClass:"singerListClass"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.artists.length,expression:"artists.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),t._l(t.artists,(function(i,a){return s("li",{key:a,staticClass:"liWrap",on:{click:function(s){return s.stopPropagation(),t.goSingerDetail(i)}}},[s("div",{staticClass:"liWrap-block1"},[s("img",{attrs:{src:i.img1v1Url,alt:""}})]),s("div",{staticClass:"liWrap-block2"},[s("div",{staticClass:"div1"},[t._v(" 歌手："),s("span",[t._v(t._s(i.name))])]),s("div",[s("div",{staticClass:"divOther"},[t._v(" 专辑："),s("span",[t._v(t._s(i.albumSize))])]),s("div",{staticClass:"divOther"},[t._v(" MV："),s("span",[t._v(t._s(i.mvSize))])])])])])}))],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.albumSwitch,expression:"tagSwitch.albumSwitch"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.playListSwitch,expression:"tagSwitch.playListSwitch"}],staticClass:"playListClass"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"recPlay"},[s("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(i,a){return s("li",{key:a,staticClass:"playListTable"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:i.coverImgUrl,alt:"",title:""},on:{click:function(s){return t.goSongList(i)}}}),s("span",{staticClass:"playCount"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))])]),s("p",{staticClass:"List-title",on:{click:function(s){return t.goSongList(i)}}},[s("span",[t._v(t._s(i.name)+" ")])])])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.videoSwitch,expression:"tagSwitch.videoSwitch"}],staticClass:"videoListClass"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.videoList.length,expression:"videoList.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.videoList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.coverUrl,alt:"",title:""},on:{click:function(s){return t.goVideo(i.vid,i.type)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playTime))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.durationms))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.vid,i.type)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.title))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[i.markTypes?s("span",[t._v("by ")]):t._e(),s("span",[t._v(t._s(i.creator[0].userName))])])])])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagSwitch.mvSwitch,expression:"tagSwitch.mvSwitch"}],staticClass:"videoListClass"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.mvList.length,expression:"mvList.length === 0"}],staticClass:"loading"},[s("i",{staticClass:"el-icon-loading"})]),s("div",{staticClass:"videoPlay"},[s("ul",{staticClass:"videoPlaywrap"},t._l(t.mvList,(function(i,a){return s("li",{key:a,staticClass:"videoPlayList"},[s("div",{staticClass:"videoImage"},[s("img",{staticClass:"videoImg",staticStyle:{position:"absolute",width:"240px",height:"155px","border-radius":"10px"},attrs:{src:i.cover,alt:"",title:""},on:{click:function(s){return t.goVideo(i.id,i.mark)}}}),s("span",{staticClass:"videoPlayTime"},[s("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(i.playCount))]),s("span",{staticClass:"videoPlayTime",staticStyle:{bottom:"0"}},[t._v(t._s(i.duration))])]),s("p",{staticClass:"List-title",staticStyle:{"font-size":"10px"},on:{click:function(s){return t.goVideo(i.id,i.mark)}}},[s("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[i.type?t._e():s("span",{staticStyle:{color:"red"}},[t._v("MV ")]),t._v(t._s(i.name))]),s("br"),s("span",{staticStyle:{color:"rgb(199, 199, 199)"}},[s("span",[t._v("by ")]),s("span",[t._v(t._s(i.artistName))])])])])})),0)])])])]),s("div",{staticClass:"pagination"},[s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!=t.count,expression:"count != 0"}],attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(i){t.currentPage=i},"update:current-page":function(i){t.currentPage=i}}})],1)])},e=[],l=s(8898),n=s(767),c=s(6857),r={components:{songlist:c.Z},data(){return{listen:[],tagSwitch:{},videoList:[],playListTable:[],musicList:[],albumList:[],artists:[],mvList:[],downLoadUrl:"",activeName:"first",count:0,currentPage:1}},created(){var t=this;t.tagSwitch=t.$store.state.musicPlayList.tagSwitch,t.search()},methods:{tagSelect(t){var i=this;i.$store.commit("musicPlayList/tagSelect",t),i.$nextTick((()=>{i.search()}))},handleCurrentChange:function(t){this.currentPage=t;var i=this;i.tagSwitch.songSwitch?i.getSingleMuscic():i.tagSwitch.playListSwitch?i.getMusicList():i.tagSwitch.videoSwitch?i.getVideoList():i.tagSwitch.mvSwitch?i.getMVList():(i.tagSwitch.singerSwitch||i.tagSwitch.albumSwitch)&&i.getSingerList()},search(){var t=this;t.tagSwitch.songSwitch?t.getSingleMuscic():t.tagSwitch.playListSwitch?t.getMusicList():t.tagSwitch.videoSwitch?t.getVideoList():t.tagSwitch.mvSwitch?t.getMVList():t.tagSwitch.singerSwitch?t.getSingerList():t.tagSwitch.albumSwitch&&t.getAlbumList()},goAlbumDetail(t){this.$router.push({name:"albumDetail",params:{albumId:t}})},goSingerDetail(t){let i={id:t.id,img1v1Url:t.img1v1Url,name:t.name,alias:t.alias,musicSize:t.musicSize,albumSize:t.albumSize,mvSize:t.mvSize,briefDesc:""};this.$router.push({name:"singerDetail",params:{artist:i}})},goSongList(t){let i={id:t.id,name:t.name,coverImgUrl:t.picUrl,trackCount:t.trackCount,creator:{avatarUrl:"",nickname:t.creator.nickname,signature:""},tags:[],description:""};this.$router.push({name:"playListDetails",params:{playListDetail:i}})},getSingleMuscic(){var t=this;t.$route.query.reload;let i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:1};t.musicList=[],(0,l.Hv)(i).then((async i=>{t.musicList=await i.data.result.songs,t.count=await i.data.result.songCount,(0,n.transMusicTime)(t.musicList,"dt");for(let s of t.musicList)t.$set(s,"timer",!0)}))},getAlbumList(){var t=this;let i={keywords:t.$route.query.keywords,limit:30,offset:30*(t.currentPage-1),type:10};t.albumList=[],(0,l.Hv)(i).then((i=>{t.albumList=i.data.result.albums,t.count=i.data.result.albumCount}))},getSingerList(){var t=this;let i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:100};t.artists=[],(0,l.Hv)(i).then((i=>{t.artists=i.data.result.artists,t.count=i.data.result.artistCount}))},getMusicList(){var t=this;let i={keywords:t.$route.query.keywords,limit:15,offset:15*(t.currentPage-1),type:1e3};t.playListTable=[],(0,l.Hv)(i).then((async i=>{t.playListTable=await i.data.result.playlists,t.count=await i.data.result.playlistCount,(0,n.transPlayCount)(t.playListTable,"playCount")}))},getVideoList(){var t=this;let i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1014};t.videoList=[],(0,l.Hv)(i).then((async i=>{t.videoList=await i.data.result.videos,t.count=await i.data.result.videoCount,(0,n.transMusicTime)(t.videoList,"durationms"),(0,n.transPlayCount)(t.videoList,"playTime")}))},getMVList(){var t=this;let i={keywords:t.$route.query.keywords,limit:12,offset:12*(t.currentPage-1),type:1004};t.mvList=[],(0,l.Hv)(i).then((async i=>{t.mvList=await i.data.result.mvs,t.count=await i.data.result.mvCount,(0,n.transMusicTime)(t.mvList,"duration"),(0,n.transPlayCount)(t.mvList,"playCount")}))},goVideo(t,i){0===i?this.$router.push({name:"mvPlay",params:{mvId:t}}):this.$router.push({name:"videoPlay",params:{videoId:t}})},randomColor(){return`#${(16777215*Math.random()<<0).toString(16)}`}}},o=r,u=s(1001),v=(0,u.Z)(o,a,e,!1,null,"102d5632",null),d=v.exports},5615:function(t,i,s){s.d(i,{Y:function(){return l},k:function(){return e}});var a=s(9950);function e(t){return(0,a.l)({url:"/playlist/subscribe",method:"post",data:t})}function l(t){return(0,a.l)({url:"/like",method:"post",data:t})}}}]);
//# sourceMappingURL=647.4d04217b.js.map