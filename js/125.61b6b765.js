"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[125],{9125:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"list-wrap"},[e("div",[e("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[e("span",{staticStyle:{"font-size":"16px"}},[t._v("热门歌单分类：")]),t._l(t.hotPlaylistTag,(function(a){return e("span",{key:a.id,staticClass:"hotCategary",on:{click:function(e){return t.getPlaylist(a.name)}}},[t._v(" "+t._s(a.name)+" ")])}))],2),e("div",{staticClass:"inline-block clearfix ",staticStyle:{float:"right",padding:"5px 0"}},[e("span",{staticStyle:{color:"#eee"}},[t._v("当前：")]),e("span",{staticClass:"categary-select"},[t._v(t._s(t.currentTag))]),t._v(" - "),e("span",{staticStyle:{color:"#eee"}},[t._v(" 排列：")]),"最热"===t.order?e("span",{staticClass:"categary-select",on:{click:function(a){t.order="最新"}}},[t._v("最热")]):t._e(),"最新"===t.order?e("span",{staticClass:"categary-select",on:{click:function(a){t.order="最热"}}},[t._v("最新")]):t._e(),t._v(" - "),e("span",{staticClass:"categary-allTag",on:{click:function(a){t.categaryShow=!t.categaryShow}}},[t._v(" 全部分类")]),t.categaryShow?e("div",{staticClass:"categary-allTag-wrap"},[t._l(t.categories,(function(a,s){return e("div",{key:s,staticClass:"categary-allTag-wrap-list"},[e("div",[e("span",[t._v(t._s(a)+":")])]),e("div",{staticClass:"categary-allTag-wrap-list-item"},t._l(t.categoryTag[s],(function(a,s){return e("span",{key:s,on:{click:function(e){return t.getPlaylist(a.name)}}},[t._v(t._s(a.name))])})),0)])})),e("div",{staticClass:"categary-allTag-wrap-list"},[t._m(0),e("div",{staticClass:"categary-allTag-wrap-list-item"},[e("span",{on:{click:function(a){return t.getPlaylist("全部")}}},[t._v("全部")])])])],2):t._e()])]),e("div",{staticClass:"playListClass"},[e("div",{staticClass:"recPlay"},[e("h3",{directives:[{name:"show",rawName:"v-show",value:0===t.playListTable.length,expression:"playListTable.length === 0"}],staticStyle:{"text-align":"center"}},[e("i",{staticClass:"el-icon-loading"})]),e("ul",{staticClass:"playListWrap"},t._l(t.playListTable,(function(a,s){return e("li",{key:s,staticClass:"playListTable"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:a.coverImgUrl,alt:"",title:""},on:{click:function(e){return t.goSongList(a.id)}}}),e("span",{staticClass:"playCount"},[e("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(a.playCount))])]),e("p",{staticClass:"List-title",on:{click:function(e){return t.goSongList(a.id)}}},[e("span",[t._v(t._s(a.name)+" ")])])])})),0)])])]),e("div",{staticClass:"pagination"},[e("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==t.count,expression:"count !== 0"}],attrs:{"current-page":t.currentPage,"page-size":15,layout:"prev, pager, next, jumper",total:t.count,background:!0},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}}})],1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("全部:")])])}],l=e(9531),n=e(767),r={data(){return{hotPlaylistTag:[],categaryShow:!1,order:"最新",currentTag:"全部",categories:{},categoryTag:{0:[],1:[],2:[],3:[],4:[]},playListTable:[],count:0,currentPage:1}},watch:{order(){this.getPlaylist(this.currentTag)}},mounted(){this.getHotPlayList(),this.getAllPlayList(),this.getPlaylist(this.currentTag)},methods:{getHotPlayList(){let t=this;(0,l.ip)().then((a=>{t.hotPlaylistTag=a.data.tags}))},getAllPlayList(){let t=this;(0,l.m8)().then((a=>{t.categories=a.data.categories;for(let e in t.categoryTag)a.data.sub.forEach((a=>{a.category==e&&t.categoryTag[e].push(a)}))}))},async getPlaylist(t,a){let e=this,s={cat:t,order:e.order,limit:15,offset:15*(e.currentPage-1)};e.categaryShow=!1,e.currentTag===t&&a||(e.playListTable=[],e.currentTag=t,await(0,l.A5)(s).then((t=>{e.playListTable=t.data.playlists,e.count=t.data.total,(0,n.transPlayCount)(e.playListTable,"playCount")})))},goSongList(t){var a=this;a.$router.push({name:"playListDetails",params:{songListId:t}})},handleCurrentChange:function(t){var a=this;a.currentPage=t,a.getPlaylist(a.currentTag,!1)}}},c=r,o=e(1001),g=(0,o.Z)(c,s,i,!1,null,"6f2eb0f8",null),u=g.exports}}]);
//# sourceMappingURL=125.61b6b765.js.map