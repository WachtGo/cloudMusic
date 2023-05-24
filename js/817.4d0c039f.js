"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[817],{5305:function(t,s,a){a.d(s,{Z:function(){return g}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",t._l(t.songlist,(function(s,i){return a("div",{key:s.id,staticClass:"music-list"},[a("div",{staticStyle:{width:"35px"}},[t._v(t._s(i+1)+".")]),a("div",{staticClass:"music-list-info",on:{dblclick:function(a){return t.goSongDetails(s)}}},[a("div",{staticClass:"music-list-span"},[t._v(t._s(s.name))]),a("div",{staticClass:"music-list-span"},[t._v(t._s(s.ar[0].name))]),a("div",{staticClass:"music-list-span music-list-dt"},[t._v(t._s(s.dt))])]),a("div",{staticClass:"option"},[a("span",{on:{click:function(a){return t.likeMusic(s.id,!0)}}},[a("i",{staticClass:"iFont el-icon-star-on iconhover"})]),a("span",{on:{click:function(a){return t.likeMusic(s.id,!1)}}},[a("i",{staticClass:"iFont el-icon-star-off iconhover"})]),a("span",{on:{click:function(a){return t.listenMusic(s)}}},[a("i",{staticClass:"el-icon-headset iconhover"})]),0==s.fee||8==s.fee?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMusic(s)}}},[a("i",{staticClass:"el-icon-folder-add iconhover"})]):t._e(),Boolean(s.mv)?a("span",{on:{click:function(a){return a.stopPropagation(),t.playMV(s.mv)}}},[a("i",{staticClass:"el-icon-video-camera iconhover"})]):t._e(),0==s.fee||8==s.fee?a("span",{on:{click:function(a){return t.getDownloadUrl(s.id,s.name)}}},[a("i",{staticClass:"el-icon-download iconhover"})]):t._e()])])})),0)},e=[],n=a(8898),l=a(4979),r=a(5615),c=a(767),o={props:{songlist:Array},data(){return{}},methods:{goSongDetails(t){this.$router.push({name:"songDetails",params:{songDetails:t}})},likeMusic(t,s){const a=this.$loading({target:"#app_body",background:"rgba(255,255,255,0.1)"});(0,r.Yf)({id:t,like:s}).then((t=>{if(this.$nextTick((()=>{a.close()})),console.log("添加",t),200===t.data.code){if(s)return void this.$message.success("已添加入我的喜欢-可进入网易云音乐查看");this.$message.success("已从我的喜欢列表删除")}})).catch((t=>{this.$nextTick((()=>{a.close()}))}))},listenMusic(t){var s=this;(0,l.b)(t,s)},playMusic(t){var s=this;(0,l.H)(t,s)},playMV(t){this.$router.push({name:"mvPlay",params:{mvId:t}})},getDownloadUrl(t,s){var a=this;a.$message({type:"success",message:"正在尝试下载"});let i={id:t};(0,n.km)(i).then((t=>{(0,c.download)(t.data.data[0].url,s),a.$message({type:"success",message:"开始下载了"})}))}}},u=o,p=a(1001),d=(0,p.Z)(u,i,e,!1,null,null,null),g=d.exports},9817:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"pageName"},[t._v("我的歌单")]),a("ul",[a("div",{staticClass:"playListClass"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}],staticClass:"loading"},[a("i",{staticClass:"el-icon-loading"})]),a("div",{staticClass:"recPlay"},[a("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(s,i){return a("li",{key:i,staticClass:"playListTable"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:s.coverImgUrl,alt:" ",title:""},on:{click:function(a){return t.goSongList(s)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),a("p",{staticClass:"List-title",on:{click:function(a){return t.goSongList(s)}}},[a("span",[t._v(t._s(s.name)+" ")])])])})),0)])])]),a("div",{staticClass:"pagination"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!=t.count,expression:"count != 0"}],attrs:{"current-page":t.currentPage,"page-size":30,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(s){t.currentPage=s},"update:current-page":function(s){t.currentPage=s}}})],1)])},e=[],n=a(5615),l=a(767),r=a(5305),c={components:{songlist:r.Z},data(){return{playListTable:[],count:0,currentPage:1}},created(){this.getMyPlayList()},methods:{handleCurrentChange:function(t){this.currentPage=t,this.getMyPlayList()},goSongList(t){let s={id:t.id,name:t.name,coverImgUrl:t.picUrl,trackCount:t.trackCount,creator:{avatarUrl:"",nickname:t.creator.nickname,signature:""},tags:[],description:""};this.$router.push({name:"playListDetails",params:{playListDetail:s}})},getMyPlayList(){let t={uid:this.$store.state.user.userId,limit:30,offset:30*(this.currentPage-1)};this.playListTable=[],(0,n.XR)(t).then((async t=>{console.log("获取我的歌单列表----",t),200===t.data.code&&(this.playListTable=await t.data.playlist,this.count=this.playListTable.length,(0,l.transPlayCount)(this.playListTable,"playCount"))}))}}},o=c,u=a(1001),p=(0,u.Z)(o,i,e,!1,null,"5ebbd73e",null),d=p.exports},5615:function(t,s,a){a.d(s,{XR:function(){return l},Yf:function(){return n},jV:function(){return r},k2:function(){return e}});var i=a(9950);function e(t){return(0,i.l)({url:"/playlist/subscribe",method:"post",data:t})}function n(t){return(0,i.l)({url:"/like",method:"post",data:t})}function l(t){return(0,i.l)({url:"/user/playlist",method:"get",params:t})}function r(t){return(0,i.l)({url:"/playlist/delete",method:"get",params:t})}}}]);