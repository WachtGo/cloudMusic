"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[573,674,125,997],{9125:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"list-wrap"},[a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("热门歌单分类：")]),t._l(t.hotPlaylistTag,(function(e){return a("span",{key:e.id,staticClass:"hotCategary",on:{click:function(a){return t.getPlaylist(e.name)}}},[t._v(" "+t._s(e.name)+" ")])}))],2),a("div",{staticClass:"inline-block clearfix ",staticStyle:{float:"right",padding:"5px 0"}},[a("span",{staticStyle:{color:"#eee"}},[t._v("当前：")]),a("span",{staticClass:"categary-select"},[t._v(t._s(t.currentTag))]),t._v(" - "),a("span",{staticStyle:{color:"#eee"}},[t._v(" 排列：")]),"最热"===t.order?a("span",{staticClass:"categary-select",on:{click:function(e){t.order="最新"}}},[t._v("最热")]):t._e(),"最新"===t.order?a("span",{staticClass:"categary-select",on:{click:function(e){t.order="最热"}}},[t._v("最新")]):t._e(),t._v(" - "),a("span",{staticClass:"categary-allTag",on:{click:function(e){t.categaryShow=!t.categaryShow}}},[t._v(" 全部分类")]),t.categaryShow?a("div",{staticClass:"categary-allTag-wrap"},[t._l(t.categories,(function(e,i){return a("div",{key:i,staticClass:"categary-allTag-wrap-list"},[a("div",[a("span",[t._v(t._s(e)+":")])]),a("div",{staticClass:"categary-allTag-wrap-list-item"},t._l(t.categoryTag[i],(function(e,i){return a("span",{key:i,on:{click:function(a){return t.getPlaylist(e.name)}}},[t._v(t._s(e.name))])})),0)])})),a("div",{staticClass:"categary-allTag-wrap-list"},[t._m(0),a("div",{staticClass:"categary-allTag-wrap-list-item"},[a("span",{on:{click:function(e){return t.getPlaylist("全部")}}},[t._v("全部")])])])],2):t._e()])]),a("div",{staticClass:"playListClass"},[a("div",{staticClass:"recPlay"},[a("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}],staticStyle:{"text-align":"center"}},[a("i",{staticClass:"el-icon-loading"})]),a("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(e,i){return a("li",{key:i,staticClass:"playListTable"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.coverImgUrl,alt:"",title:""},on:{click:function(a){return t.goSongList(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title",on:{click:function(a){return t.goSongList(e.id)}}},[a("span",[t._v(t._s(e.name)+" ")])])])})),0)])])]),a("div",{staticClass:"pagination"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.count,expression:"count !== 0"}],attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",[t._v("全部:")])])}],s=a(8534),n=(a(6133),a(1539),a(4747),a(86),a(9531)),l=a(767),c={data:function(){return{hotPlaylistTag:[],categaryShow:!1,order:"最新",currentTag:"全部",categories:{},categoryTag:{0:[],1:[],2:[],3:[],4:[]},playListTable:[],count:0,currentPage:1}},watch:{order:function(){this.getPlaylist(this.currentTag)}},mounted:function(){this.getHotPlayList(),this.getAllPlayList(),this.getPlaylist(this.currentTag)},methods:{getHotPlayList:function(){var t=this;(0,n.ip)().then((function(e){t.hotPlaylistTag=e.data.tags}))},getAllPlayList:function(){var t=this;(0,n.m8)().then((function(e){t.categories=e.data.categories;var a=function(a){e.data.sub.forEach((function(e){e.category==a&&t.categoryTag[a].push(e)}))};for(var i in t.categoryTag)a(i)}))},getPlaylist:function(t,e){var a=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var r,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=a,s={cat:t,order:r.order,limit:15,offset:15*(r.currentPage-1)},r.categaryShow=!1,r.currentTag!==t||!e){i.next=5;break}return i.abrupt("return");case 5:return r.playListTable=[],r.currentTag=t,i.next=9,(0,n.A5)(s).then((function(t){r.playListTable=t.data.playlists,r.count=t.data.total,(0,l.transPlayCount)(r.playListTable,"playCount")}));case 9:case"end":return i.stop()}}),i)})))()},goSongList:function(t){var e=this;e.$router.push({name:"playListDetails",params:{songListId:t}})},handleCurrentChange:function(t){var e=this;e.currentPage=t,e.getPlaylist(e.currentTag,!1)}}},o=c,u=a(1001),g=(0,u.Z)(o,i,r,!1,null,"6f2eb0f8",null),d=g.exports},8997:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"list-wrap"},[a("div",[a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("类型：")]),t._l(t.singerType,(function(e,i){return a("span",{key:e.type,staticClass:"type-area singer-type",on:{click:function(a){t.checkedStyle(t.typeElement,i),t.getSingerlist(e.type,t.area)}}},[t._v(" "+t._s(e.typeName)+" ")])}))],2)]),a("div",[a("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v("地区：")]),t._l(t.singerArea,(function(e,i){return a("span",{key:e.area,staticClass:"type-area singer-area",on:{click:function(a){t.checkedStyle(t.areaElement,i),t.getSingerlist(t.type,e.area)}}},[t._v(" "+t._s(e.areaName)+" ")])}))],2),a("div",{staticClass:"inline-block clearfix ",staticStyle:{float:"right",padding:"5px 0"}},[a("span",{staticStyle:{color:"#eee"}},[t._v(" 排列：")]),a("span",{staticClass:"categary-select",on:{click:function(e){t.categaryShow=!t.categaryShow}}},[t._v(t._s(t.align))]),t.categaryShow?a("div",{staticClass:"categary-allTag-wrap"},t._l(t.initialtitle,(function(e,i){return a("div",{key:i,staticClass:"categary-allTag-wrap-list"},[a("div",[a("span",[t._v(t._s(e)+":")])]),a("div",{staticClass:"categary-allTag-wrap-list-item"},t._l(t.initialData[i],(function(e,i){return a("span",{key:i,on:{click:function(a){t.initial=e.orderValue,t.align=e.order,t.categaryShow=!1}}},[t._v(t._s(e.order))])})),0)])})),0):t._e()])])]),a("div",{staticClass:"singerListClass"},[a("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.singerList.length,expression:"singerList.length === 0"}],staticStyle:{"text-align":"center"}},[a("i",{staticClass:"el-icon-loading"})]),t._l(t.singerList,(function(e,i){return a("li",{key:i,staticClass:"liWrap",on:{click:function(a){return a.stopPropagation(),t.goSingerDetail(e.id)}}},[a("div",{staticClass:"liWrap-block1"},[a("img",{attrs:{src:e.img1v1Url,alt:""}})]),a("div",{staticClass:"liWrap-block2"},[a("div",{staticClass:"div1"},[t._v(" 歌手："),a("span",[t._v(t._s(e.name))])]),a("div",[a("div",{staticClass:"divOther"},[t._v(" 专辑："),a("span",[t._v(t._s(e.albumSize))])]),a("div",{staticClass:"divOther"},[t._v(" 歌曲："),a("span",[t._v(t._s(e.musicSize))])])])])])}))],2)]),a("div",{staticClass:"pagination"},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.count,expression:"count !== 0"}],attrs:{"current-page":t.currentPage,"page-size":9,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])},r=[],s=a(8534),n=(a(6133),a(1539),a(4747),a(9531)),l={data:function(){return{type:"-1",area:"-1",align:"热门",categaryShow:!1,initialtitle:["热门","序号"],initialData:{0:[{order:"热门",orderValue:"a"}],1:[{order:"A",orderValue:"a"},{order:"B",orderValue:"b"},{order:"C",orderValue:"c"},{order:"D",orderValue:"d"},{order:"E",orderValue:"e"},{order:"F",orderValue:"f"},{order:"G",orderValue:"g"},{order:"F",orderValue:"f"},{order:"H",orderValue:"h"},{order:"I",orderValue:"i"},{order:"J",orderValue:"j"},{order:"K",orderValue:"k"},{order:"L",orderValue:"l"},{order:"M",orderValue:"m"},{order:"N",orderValue:"n"},{order:"O",orderValue:"o"},{order:"P",orderValue:"p"},{order:"Q",orderValue:"q"},{order:"R",orderValue:"r"},{order:"S",orderValue:"s"},{order:"T",orderValue:"t"},{order:"U",orderValue:"u"},{order:"V",orderValue:"v"},{order:"W",orderValue:"w"},{order:"X",orderValue:"x"},{order:"Y",orderValue:"y"},{order:"Z",orderValue:"z"}]},initial:"-1",singerType:[{type:"-1",typeName:"全部"},{type:"1",typeName:"男歌手"},{type:"2",typeName:"女歌手"},{type:"3",typeName:"乐队"}],singerArea:[{area:"-1",areaName:"全部"},{area:"7",areaName:"华语"},{area:"96",areaName:"欧美"},{area:"8",areaName:"日本"},{area:"16",areaName:"韩国"},{area:"0",areaName:"其他"}],typeareaElement:[],singerList:[],count:999,currentPage:1}},watch:{initial:function(){this.getSingerlist(this.type,this.area)}},mounted:function(){this.typeElement=document.querySelectorAll(".singer-type"),this.areaElement=document.querySelectorAll(".singer-area"),this.getSingerlist(this.currentTag)},methods:{checkedStyle:function(t,e){t.forEach((function(t,a){e===a?t.classList.add("type-area-checked"):t.classList.contains("type-area-checked")&&t.classList.remove("type-area-checked")}))},areaStyle:function(){},getSingerlist:function(t,e){var a=this;return(0,s.Z)(regeneratorRuntime.mark((function i(){var r,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=a,r.type=t,r.area=e,s={type:r.type,area:r.area,initial:a.initial,limit:9,offset:9*(r.currentPage-1)},r.singerList=[],i.next=7,(0,n.zd)(s).then((function(t){r.singerList=t.data.artists}));case 7:case"end":return i.stop()}}),i)})))()},goSingerDetail:function(t){t&&this.$router.push({name:"singerDetail",params:{singerId:t}})},handleCurrentChange:function(t){var e=this;e.currentPage=t,e.getSingerlist(e.type,e.area)}}},c=l,o=a(1001),u=(0,o.Z)(c,i,r,!1,null,"7561be48",null),g=u.exports},8573:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[a("div",{staticClass:"tags"},t._l(t.homeTags.tags,(function(e,i){return a("span",{key:i,staticClass:"tags-select",on:{click:function(a){return t.tagsChange(e.page,!0)}}},[t._v(t._s(e.pageName))])})),0),a("router-view")],1)},r=[],s=a(4648),n=(a(1539),a(4747),a(5674)),l=a(9125),c=a(8997),o=a(3822),u={name:"HomePage",components:{recommend:n["default"],playlistCategary:l["default"],singerCategaryVue:c["default"]},data:function(){return{tags:[]}},computed:(0,s.Z)({},(0,o.rn)(["homeTags"])),mounted:function(){this.tags=document.querySelectorAll(".tags-select"),this.tagsChange(this.homeTags.routerPage)},methods:(0,s.Z)((0,s.Z)({},(0,o.OI)(["changehomeTAG"])),{},{tagsChange:function(t,e){this.tags.forEach((function(e,a){t===a?e.classList.add("tags-select-click"):e.classList.contains("tags-select-click")&&e.classList.remove("tags-select-click")})),e&&(0===t?this.$router.push({name:"recommend"}):1===t?this.$router.push({name:"playlistCategary"}):2===t&&this.$router.push({name:"singerCategary"}),this.changehomeTAG(t))}})},g=u,d=a(1001),p=(0,d.Z)(g,i,r,!1,null,null,null),h=p.exports},5674:function(t,e,a){a.r(e),a.d(e,{default:function(){return W}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hotSearch"),a("RecPlaylist"),a("RecMvList"),a("NewMvList")],1)},r=[],s=a(4648),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("热搜:")]),a("div",{staticClass:"hotSearch "},[a("div",{staticClass:"hotSearchWrap"},t._l(t.hotSearch,(function(e,i){return a("span",{key:i,staticClass:"hotSearchWord",on:{click:function(a){return t.getMusicList(e.searchWord)}}},[t._v(t._s(e.searchWord))])})),0)])])},l=[],c=a(9531),o={data:function(){return{hotSearch:[]}},mounted:function(){this.getHotSearch()},methods:{getHotSearch:function(){var t=this;(0,c.Kl)().then((function(e){t.hotSearch=e.data.data}))},getMusicList:function(t){this.$router.push({name:"MusicPlayList",query:{keywords:t}})}}},u=o,g=a(1001),d=(0,g.Z)(u,n,l,!1,null,"570815c6",null),p=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("推荐歌单 :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recPlayList,(function(e,i){return a("li",{key:i,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.picUrl,alt:"",title:""},on:{click:function(a){return t.goSongList(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title",on:{click:function(a){return t.goSongList(e.id)}}},[a("span",[t._v(t._s(e.name))])])])})),0)])])},v=[],y=a(767),f={data:function(){return{limit:10,recPlayList:[]}},mounted:function(){this.getSuggestPlayList()},methods:{getSuggestPlayList:function(){var t=this,e={limit:t.limit};(0,c.gZ)(e).then((function(e){t.recPlayList=e.data.result,(0,y.transPlayCount)(t.recPlayList,"playCount")}))},goSongList:function(t){var e=this;e.$router.push({name:"playListDetails",params:{songListId:t}})}}},m=f,C=(0,g.Z)(m,h,v,!1,null,"7c98bb26",null),_=C.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("最新MV :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(e,i){return a("li",{key:i,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.cover,alt:"",title:""},on:{click:function(a){return t.goPlayMv(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title"},[a("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.name))]),a("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(e.artists[0].name))])])])})),0)])])},S=[],k={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getNewMvList()},methods:{getNewMvList:function(){var t=this,e={limit:t.limit};(0,c.Wv)(e).then((function(e){t.recMvList=e.data.data,(0,y.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var e=this;e.$router.push({name:"mvPlay",params:{mvId:t}})}}},w=k,P=(0,g.Z)(w,L,S,!1,null,"3e0fff74",null),T=P.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"h2title"},[t._v("推荐MV :")]),a("div",{staticClass:"recPlay Ocenter"},[a("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(e,i){return a("li",{key:i,staticClass:"recPlayList"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.picUrl,alt:"",title:""},on:{click:function(a){return t.goPlayMv(e.id)}}}),a("span",{staticClass:"playCount"},[a("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(e.playCount))])]),a("p",{staticClass:"List-title"},[a("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(e.name))]),a("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(e.artists[0].name))])])])})),0)])])},b=[],V={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getSuggestMvList()},methods:{getSuggestMvList:function(){var t=this,e={limit:t.limit};(0,c.lK)(e).then((function(e){t.recMvList=e.data.result,(0,y.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var e=this;e.$router.push({name:"mvPlay",params:{mvId:t}})}}},M=V,N=(0,g.Z)(M,x,b,!1,null,"0c67a8bb",null),E=N.exports,$=a(3822),Z={name:"recommend",components:{hotSearch:p,RecPlaylist:_,NewMvList:T,RecMvList:E},mounted:function(){this.changehomeTAG(0)},methods:(0,s.Z)({},(0,$.OI)(["changehomeTAG"]))},A=Z,z=(0,g.Z)(A,i,r,!1,null,null,null),W=z.exports},86:function(t,e,a){var i=a(2109),r=a(4230),s=a(3429);i({target:"String",proto:!0,forced:s("sub")},{sub:function(){return r(this,"sub","","")}})}}]);
//# sourceMappingURL=573-legacy.c7be39ea.js.map