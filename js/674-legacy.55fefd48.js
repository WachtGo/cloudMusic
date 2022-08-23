"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[674],{5674:function(t,s,i){i.r(s),i.d(s,{default:function(){return z}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("hotSearch"),i("RecPlaylist"),i("RecMvList"),i("NewMvList")],1)},e=[],n=i(4648),l=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("热搜:")]),i("div",{staticClass:"hotSearch "},[i("div",{staticClass:"hotSearchWrap"},t._l(t.hotSearch,(function(s,a){return i("span",{key:a,staticClass:"hotSearchWord",on:{click:function(i){return t.getMusicList(s.searchWord)}}},[t._v(t._s(s.searchWord))])})),0)])])},c=[],r=i(9531),o={data:function(){return{hotSearch:[]}},mounted:function(){this.getHotSearch()},methods:{getHotSearch:function(){var t=this;(0,r.Kl)().then((function(s){t.hotSearch=s.data.data}))},getMusicList:function(t){this.$router.push({name:"MusicPlayList",query:{keywords:t}})}}},u=o,h=i(1001),v=(0,h.Z)(u,l,c,!1,null,"570815c6",null),p=v.exports,d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("推荐歌单 :")]),i("div",{staticClass:"recPlay Ocenter"},[i("ul",{staticClass:"recPlaywrap"},t._l(t.recPlayList,(function(s,a){return i("li",{key:a,staticClass:"recPlayList"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:s.picUrl,alt:"",title:""},on:{click:function(i){return t.goSongList(s.id)}}}),i("span",{staticClass:"playCount"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),i("p",{staticClass:"List-title",on:{click:function(i){return t.goSongList(s.id)}}},[i("span",[t._v(t._s(s.name))])])])})),0)])])},m=[],y=i(767),f={data:function(){return{limit:10,recPlayList:[]}},mounted:function(){this.getSuggestPlayList()},methods:{getSuggestPlayList:function(){var t=this,s={limit:t.limit};(0,r.gZ)(s).then((function(s){t.recPlayList=s.data.result,(0,y.transPlayCount)(t.recPlayList,"playCount")}))},goSongList:function(t){var s=this;s.$router.push({name:"playListDetails",params:{songListId:t}})}}},g=f,C=(0,h.Z)(g,d,m,!1,null,"7c98bb26",null),L=C.exports,_=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("最新MV :")]),i("div",{staticClass:"recPlay Ocenter"},[i("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(s,a){return i("li",{key:a,staticClass:"recPlayList"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:s.cover,alt:"",title:""},on:{click:function(i){return t.goPlayMv(s.id)}}}),i("span",{staticClass:"playCount"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),i("p",{staticClass:"List-title"},[i("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(s.name))]),i("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(s.artists[0].name))])])])})),0)])])},P=[],M={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getNewMvList()},methods:{getNewMvList:function(){var t=this,s={limit:t.limit};(0,r.Wv)(s).then((function(s){t.recMvList=s.data.data,(0,y.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var s=this;s.$router.push({name:"mvPlay",params:{mvId:t}})}}},S=M,w=(0,h.Z)(S,_,P,!1,null,"3e0fff74",null),k=w.exports,x=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("推荐MV :")]),i("div",{staticClass:"recPlay Ocenter"},[i("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(s,a){return i("li",{key:a,staticClass:"recPlayList"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:s.picUrl,alt:"",title:""},on:{click:function(i){return t.goPlayMv(s.id)}}}),i("span",{staticClass:"playCount"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),i("p",{staticClass:"List-title"},[i("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(s.name))]),i("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(s.artists[0].name))])])])})),0)])])},b=[],$={data:function(){return{limit:4,recMvList:[]}},mounted:function(){this.getSuggestMvList()},methods:{getSuggestMvList:function(){var t=this,s={limit:t.limit};(0,r.lK)(s).then((function(s){t.recMvList=s.data.result,(0,y.transPlayCount)(t.recMvList,"playCount")}))},goPlayMv:function(t){var s=this;s.$router.push({name:"mvPlay",params:{mvId:t}})}}},Z=$,E=(0,h.Z)(Z,x,b,!1,null,"0c67a8bb",null),W=E.exports,I=i(3822),N={name:"recommend",components:{hotSearch:p,RecPlaylist:L,NewMvList:k,RecMvList:W},mounted:function(){this.changehomeTAG(0)},methods:(0,n.Z)({},(0,I.OI)(["changehomeTAG"]))},O=N,R=(0,h.Z)(O,a,e,!1,null,null,null),z=R.exports}}]);
//# sourceMappingURL=674-legacy.55fefd48.js.map