"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[44,890,67,227],{73067:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"list-wrap"},[a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("热门歌单分类：")]),t._l(t.hotPlaylistTag,(function(e){return a("span",{key:e.id,staticClass:"hotCategary",on:{click:function(a){return t.getPlaylist(e.name)}}},[t._v(" "+t._s(e.name)+" ")])}))],2),a("div",{staticClass:"inline-block clearfix",staticStyle:{float:"right",padding:"5px 0"}},[a("span",{staticStyle:{color:"#eee"}},[t._v("当前：")]),a("span",{staticClass:"categary-select"},[t._v(t._s(t.currentTag))]),t._v(" - "),a("span",{staticStyle:{color:"#eee"}},[t._v(" 排列：")]),"最热"===t.order?a("span",{staticClass:"categary-select",on:{click:function(e){t.order="最新"}}},[t._v("最热")]):t._e(),"最新"===t.order?a("span",{staticClass:"categary-select",on:{click:function(e){t.order="最热"}}},[t._v("最新")]):t._e(),t._v(" - "),a("span",{staticClass:"categary-allTag",on:{click:function(e){t.categaryShow=!t.categaryShow}}},[t._v(" 全部分类")]),t.categaryShow?a("div",{staticClass:"categary-allTag-wrap"},[t._l(t.categories,(function(e,r){return a("div",{key:r,staticClass:"categary-allTag-wrap-list"},[a("div",[a("span",[t._v(t._s(e)+":")])]),a("div",{staticClass:"categary-allTag-wrap-list-item"},t._l(t.categoryTag[r],(function(e,r){return a("span",{key:r,on:{click:function(a){return t.getPlaylist(e.name)}}},[t._v(t._s(e.name))])})),0)])})),a("div",{staticClass:"categary-allTag-wrap-list"},[t._m(0),a("div",{staticClass:"categary-allTag-wrap-list-item"},[a("span",{on:{click:function(e){return t.getPlaylist("全部")}}},[t._v("全部")])])])],2):t._e()])]),a("div",{staticClass:"playListClass"},[a("div",{staticClass:"recPlay"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}],staticClass:"loading"},[a("i",{staticClass:"el-icon-loading"})]),a("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(e,r){return a("li",{key:r,staticClass:"playListTable"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.coverImgUrl,alt:"",title:""},on:{click:function(a){return t.goSongList(e)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title",on:{click:function(a){return t.goSongList(e)}}},[a("span",[t._v(t._s(e.name)+" ")])])])})),0)])])]),a("div",{staticClass:"pagination"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.count,expression:"count !== 0"}],attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",[t._v("全部:")])])}],s=a(48534),n=(a(36133),a(41539),a(54747),a(60086),a(38898)),l=a(30767),c={data:function(){return{hotPlaylistTag:[],categaryShow:!1,order:"最新",currentTag:"全部",categories:{},categoryTag:{0:[],1:[],2:[],3:[],4:[]},playListTable:[],count:0,currentPage:1}},watch:{order:function(){this.getPlaylist(this.currentTag)}},mounted:function(){this.getHotPlayList(),this.getAllPlayList(),this.getPlaylist(this.currentTag)},methods:{getHotPlayList:function(){var t=this;(0,n.ip)().then((function(e){t.hotPlaylistTag=e.data.tags}))},getAllPlayList:function(){var t=this;(0,n.m8)().then(function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(a){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.data.categories;case 2:for(i in t.categories=e.sent,r=function(e){a.data.sub.forEach((function(a){a.category==e&&t.categoryTag[e].push(a)}))},t.categoryTag)r(i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getPlaylist:function(t,e){var a=this,r={cat:t,order:a.order,limit:15,offset:15*(a.currentPage-1)};a.categaryShow=!1,a.currentTag===t&&e||(a.playListTable=[],a.currentTag=t,(0,n.A5)(r).then(function(){var t=(0,s.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.data.playlists;case 2:return a.playListTable=t.sent,t.next=5,e.data.total;case 5:a.count=t.sent,(0,l.transPlayCount)(a.playListTable,"playCount");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},goSongList:function(t){var e=this;e.$router.push({name:"playListDetails",params:{playListDetail:t}})},handleCurrentChange:function(t){var e=this;e.currentPage=t,e.getPlaylist(e.currentTag,!1)}}},o=c,u=a(1001),g=(0,u.Z)(o,r,i,!1,null,"07ea1c14",null),d=g.exports},51227:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"list-wrap"},[a("div",[a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("类型：")]),t._l(t.singerType,(function(e,r){return a("span",{key:e.type,staticClass:"type-area singer-type",on:{click:function(a){t.checkedStyle(t.typeElement,r),t.getSingerlist(e.type,t.area)}}},[t._v(" "+t._s(e.typeName)+" ")])}))],2)]),a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("地区：")]),t._l(t.singerArea,(function(e,r){return a("span",{key:e.area,staticClass:"type-area singer-area",on:{click:function(a){t.checkedStyle(t.areaElement,r),t.getSingerlist(t.type,e.area)}}},[t._v(" "+t._s(e.areaName)+" ")])}))],2),a("div",{staticClass:"inline-block clearfix",staticStyle:{float:"right",padding:"5px 0"}},[a("span",{staticStyle:{color:"#eee"}},[t._v(" 排列：")]),a("span",{staticClass:"categary-select",on:{click:function(e){t.categaryShow=!t.categaryShow}}},[t._v(t._s(t.align))]),t.categaryShow?a("div",{staticClass:"categary-allTag-wrap"},t._l(t.initialtitle,(function(e,r){return a("div",{key:r,staticClass:"categary-allTag-wrap-list"},[a("div",[a("span",[t._v(t._s(e)+":")])]),a("div",{staticClass:"categary-allTag-wrap-list-item"},t._l(t.initialData[r],(function(e,r){return a("span",{key:r,on:{click:function(a){t.initial=e.orderValue,t.align=e.order,t.categaryShow=!1}}},[t._v(t._s(e.order))])})),0)])})),0):t._e()])])]),a("div",{staticClass:"singerListClass"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.singerList.length,expression:"singerList.length === 0"}],staticClass:"loading"},[a("i",{staticClass:"el-icon-loading"})]),t._l(t.singerList,(function(e,r){return a("li",{key:r,staticClass:"liWrap",on:{click:function(a){return a.stopPropagation(),t.goSingerDetail(e)}}},[a("div",{staticClass:"liWrap-block1"},[a("img",{attrs:{src:e.img1v1Url,alt:""}})]),a("div",{staticClass:"liWrap-block2"},[a("div",{staticClass:"div1"},[t._v(" 歌手："),a("span",[t._v(t._s(e.name))])]),a("div",[a("div",{staticClass:"divOther"},[t._v(" 专辑："),a("span",[t._v(t._s(e.albumSize))])]),a("div",{staticClass:"divOther"},[t._v(" 歌曲："),a("span",[t._v(t._s(e.musicSize))])])])])])}))],2)]),a("div",{staticClass:"pagination"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.count,expression:"count !== 0"}],attrs:{"current-page":t.currentPage,"page-size":9,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])},i=[],s=a(48534),n=(a(36133),a(41539),a(54747),a(68309),a(38898)),l={data:function(){return{type:"-1",area:"-1",align:"热门",categaryShow:!1,initialtitle:["热门","序号"],initialData:{0:[{order:"热门",orderValue:"a"}],1:[{order:"A",orderValue:"a"},{order:"B",orderValue:"b"},{order:"C",orderValue:"c"},{order:"D",orderValue:"d"},{order:"E",orderValue:"e"},{order:"F",orderValue:"f"},{order:"G",orderValue:"g"},{order:"F",orderValue:"f"},{order:"H",orderValue:"h"},{order:"I",orderValue:"i"},{order:"J",orderValue:"j"},{order:"K",orderValue:"k"},{order:"L",orderValue:"l"},{order:"M",orderValue:"m"},{order:"N",orderValue:"n"},{order:"O",orderValue:"o"},{order:"P",orderValue:"p"},{order:"Q",orderValue:"q"},{order:"R",orderValue:"r"},{order:"S",orderValue:"s"},{order:"T",orderValue:"t"},{order:"U",orderValue:"u"},{order:"V",orderValue:"v"},{order:"W",orderValue:"w"},{order:"X",orderValue:"x"},{order:"Y",orderValue:"y"},{order:"Z",orderValue:"z"}]},initial:"-1",singerType:[{type:"-1",typeName:"全部"},{type:"1",typeName:"男歌手"},{type:"2",typeName:"女歌手"},{type:"3",typeName:"乐队"}],singerArea:[{area:"-1",areaName:"全部"},{area:"7",areaName:"华语"},{area:"96",areaName:"欧美"},{area:"8",areaName:"日本"},{area:"16",areaName:"韩国"},{area:"0",areaName:"其他"}],typeareaElement:[],singerList:[],count:999,currentPage:1}},watch:{initial:function(){this.getSingerlist(this.type,this.area)}},mounted:function(){this.typeElement=document.querySelectorAll(".singer-type"),this.areaElement=document.querySelectorAll(".singer-area"),this.getSingerlist(this.currentTag)},methods:{checkedStyle:function(t,e){t.forEach((function(t,a){e===a?t.classList.add("type-area-checked"):t.classList.contains("type-area-checked")&&t.classList.remove("type-area-checked")}))},areaStyle:function(){},getSingerlist:function(t,e){var a=this;return(0,s.Z)(regeneratorRuntime.mark((function r(){var i,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=a,i.type=t,i.area=e,l={type:i.type,area:i.area,initial:a.initial,limit:9,offset:9*(i.currentPage-1)},i.singerList=[],r.next=7,(0,n.zd)(l).then(function(){var t=(0,s.Z)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.data.artists;case 2:i.singerList=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:case"end":return r.stop()}}),r)})))()},goSingerDetail:function(t){var e={id:t.id,img1v1Url:t.img1v1Url,name:t.name,alias:t.alias,musicSize:t.musicSize,albumSize:t.albumSize,mvSize:t.mvSize,briefDesc:""};this.$router.push({name:"singerDetail",params:{artist:e}})},handleCurrentChange:function(t){var e=this;e.currentPage=t,e.getSingerlist(e.type,e.area)}}},c=l,o=a(1001),u=(0,o.Z)(c,r,i,!1,null,"4009c979",null),g=u.exports},50044:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("div",{staticClass:"tags"},t._l(t.homeTags.tags,(function(e,r){return a("span",{key:r,staticClass:"tags-select",on:{click:function(a){return t.tagsChange(e.page,!0)}}},[t._v(t._s(e.pageName))])})),0),a("router-view")],1)},i=[],s=a(95082),n=(a(41539),a(54747),a(57890)),l=a(73067),c=a(51227),o=a(63822),u={name:"HomePage",components:{recommend:n["default"],playlistCategary:l["default"],singerCategaryVue:c["default"]},data:function(){return{tags:[]}},computed:(0,s.Z)({},(0,o.rn)("homePage",["homeTags"])),mounted:function(){this.tags=document.querySelectorAll(".tags-select"),this.tagsChange(this.homeTags.routerPage)},methods:(0,s.Z)((0,s.Z)({},(0,o.OI)("homePage",["changehomeTAG"])),{},{tagsChange:function(t,e){this.tags.forEach((function(e,a){t===a?e.classList.add("tags-select-click"):e.classList.contains("tags-select-click")&&e.classList.remove("tags-select-click")})),e&&(0===t?this.$router.push({name:"recommend"}):1===t?this.$router.push({name:"playlistCategary"}):2===t&&this.$router.push({name:"singerCategary"}),this.changehomeTAG(t))}})},g=u,d=a(1001),p=(0,d.Z)(g,r,i,!1,null,null,null),h=p.exports},57890:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hotSearch"),a("RecPlaylist"),a("NewMvList"),a("RecMvList")],1)},i=[],s=a(95082),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("热搜:")]),a("div",{staticClass:"hotSearch"},[a("div",{staticClass:"hotSearchWrap"},t._l(t.hotSearch,(function(e,r){return a("div",{key:r,staticClass:"hotSearchWord",on:{click:function(a){return t.getMusicList(e.searchWord)}}},[a("span",[t._v(t._s(e.searchWord))]),e.iconType?a("img",{staticClass:"hot",attrs:{src:e.iconUrl,alt:""}}):t._e()])})),0)])])},l=[],c=a(38898),o={data:function(){return{hotSearch:[]}},mounted:function(){this.getHotSearch()},methods:{getHotSearch:function(){var t=this;(0,c.Kl)().then((function(e){t.hotSearch=e.data.data}))},getMusicList:function(t){this.$router.push({name:"MusicPlayList",query:{keywords:t}})}}},u=o,g=a(1001),d=(0,g.Z)(u,n,l,!1,null,"595af448",null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("推荐歌单 :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recPlayList,(function(e,r){return a("li",{key:r,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.picUrl,alt:"",title:""},on:{click:function(a){return t.goSongList(e)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title",on:{click:function(a){return t.goSongList(e)}}},[a("span",[t._v(t._s(e.name))])])])})),0)])])},v=[],y=a(48534),m=(a(68309),a(36133),a(30767)),f={data:function(){return{limit:10,recPlayList:[]}},mounted:function(){this.getSuggestPlayList()},methods:{getSuggestPlayList:function(){var t=this,e={limit:t.limit};(0,c.gZ)(e).then(function(){var e=(0,y.Z)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.data.result;case 2:t.recPlayList=e.sent,(0,m.transPlayCount)(t.recPlayList,"playCount");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goSongList:function(t){var e={id:t.id,name:t.name,coverImgUrl:t.picUrl,trackCount:t.trackCount,creator:{avatarUrl:"",nickname:"",signature:""},tags:[],description:""};this.$router.push({name:"playListDetails",params:{playListDetail:e}})}}},C=f,_=(0,g.Z)(C,h,v,!1,null,"4c1a0486",null),S=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("最新MV :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(e,r){return a("li",{key:r,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.cover,alt:"",title:""},on:{click:function(a){return t.goPlayMv(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title"},[a("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.name))]),a("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(e.artists[0].name))])])])})),0)])])},L=[],k={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getNewMvList()},methods:{getNewMvList:function(){var t=this,e={limit:t.limit};(0,c.Wv)(e).then((function(e){t.recMvList=e.data.data,(0,m.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var e=this;e.$router.push({name:"mvPlay",params:{mvId:t}})}}},P=k,x=(0,g.Z)(P,w,L,!1,null,"4105a470",null),T=x.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("推荐MV :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(e,r){return a("li",{key:r,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.picUrl,alt:"",title:""},on:{click:function(a){return t.goPlayMv(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title"},[a("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.name))]),a("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(e.artists[0].name))])])])})),0)])])},V=[],M={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getSuggestMvList()},methods:{getSuggestMvList:function(){var t=this,e={limit:t.limit};(0,c.lK)(e).then((function(e){t.recMvList=e.data.result,(0,m.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var e=this;e.$router.push({name:"mvPlay",params:{mvId:t}})}}},N=M,Z=(0,g.Z)(N,b,V,!1,null,"12421bb1",null),E=Z.exports,$=a(63822),z={name:"recommend",components:{hotSearch:p,RecPlaylist:S,NewMvList:T,RecMvList:E},mounted:function(){this.changehomeTAG(0)},methods:(0,s.Z)({},(0,$.OI)("homePage",["changehomeTAG"]))},R=z,A=(0,g.Z)(R,r,i,!1,null,null,null),D=A.exports},60086:function(t,e,a){var r=a(82109),i=a(14230),s=a(43429);r({target:"String",proto:!0,forced:s("sub")},{sub:function(){return i(this,"sub","","")}})}}]);
//# sourceMappingURL=44-legacy.bc1e19ef.js.map