"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[71],{6071:function(t,s,i){i.r(s),i.d(s,{default:function(){return x}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"Home"},[i("hotSearch"),i("RecPlaylist"),i("RecMvList"),i("div",{staticClass:"footerDiv"},[t._v("到底了···")])],1)},a=[],l=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("热搜歌曲 :")]),i("div",{staticClass:"hotSearch "},[i("div",{staticClass:"hotSearchWrap"},t._l(t.hotSearch,(function(s,e){return i("span",{key:e,staticClass:"hotSearchWord",on:{click:function(i){return t.getMusicList(s.searchWord)}}},[t._v(t._s(s.searchWord))])})),0)])])},r=[],n=i(3629),c={data(){return{hotSearch:[]}},mounted(){this.getHotSearch()},methods:{getHotSearch(){(0,n.Kl)().then((t=>{this.hotSearch=t.data.data}))},getMusicList(t){this.$router.push({name:"MusicPlayList",query:{keywords:t}})}}},u=c,o=i(1001),y=(0,o.Z)(u,l,r,!1,null,"d161369e",null),g=y.exports,p=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("推荐歌单 :")]),i("div",{staticClass:"recPlay Ocenter"},[i("ul",{staticClass:"recPlaywrap"},t._l(t.recPlayList,(function(s,e){return i("li",{key:e,staticClass:"recPlayList"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:s.picUrl,alt:"",title:""},on:{click:function(i){return t.goSongList(s.id)}}}),i("span",{staticClass:"playCount"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),i("p",{staticClass:"List-title",on:{click:function(i){return t.goSongList(s.id)}}},[i("span",[t._v(t._s(s.name))])])])})),0)])])},h=[],v={data(){return{limit:10,recPlayList:[]}},mounted(){this.getSuggestPlayList()},methods:{getSuggestPlayList(){var t=this;let s={limit:t.limit};(0,n.gZ)(s).then((s=>{t.recPlayList=s.data.result;for(let i=0;i<t.recPlayList.length;i++)String(t.recPlayList[i].playCount).length>5&&String(t.recPlayList[i].playCount).length<9?t.recPlayList[i].playCount=String(t.recPlayList[i].playCount).substr(0,String(t.recPlayList[i].playCount).length-4)+"万":(String(t.recPlayList[i].playCount).length=5)?t.recPlayList[i].playCount=String(t.recPlayList[i].playCount).substr(0,1)+"."+String(t.recPlayList[i].playCount).substr(1,2)+"万":(String(t.recPlayList[i].playCount).length=9)?t.recPlayList[i].playCount=String(t.recPlayList[i].playCount).substr(0,1)+"."+String(t.recPlayList[i].playCount).substr(1,2)+"亿":String(t.recPlayList[i].playCount).length>9&&(t.recPlayList[i].playCount=String(t.recPlayList[i].playCount).substr(0,String(t.recPlayList[i].playCount).length-8)+"亿")}))},goSongList(t){var s=this;s.$router.push({name:"playListDetails",query:{recplaylist:!0,songListId:t}})}}},C=v,L=(0,o.Z)(C,p,h,!1,null,"02d4c556",null),S=L.exports,d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("h3",{staticClass:"h2title"},[t._v("最新MV :")]),i("div",{staticClass:"recPlay Ocenter"},[i("ul",{staticClass:"recPlaywrap"},t._l(t.recMvList,(function(s,e){return i("li",{key:e,staticClass:"recPlayList"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:s.cover,alt:"",title:""},on:{click:function(i){return t.goPlayMv(s.id)}}}),i("span",{staticClass:"playCount"},[i("i",{staticClass:"el-icon-video-play",staticStyle:{"margin-right":"1px"}}),t._v(t._s(s.playCount))])]),i("p",{staticClass:"List-title"},[i("span",{staticStyle:{display:"inline-block",width:"100%",overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(s.name))]),i("span",{staticStyle:{"font-size":"10px",color:"rgb(220, 220, 220)"}},[t._v(t._s(s.artists[0].name))])])])})),0)])])},m=[],P={data(){return{limit:12,recMvList:[]}},mounted(){this.getNewMvList()},methods:{getNewMvList(){var t=this;let s={limit:t.limit};(0,n.Wv)(s).then((s=>{t.recMvList=s.data.data;for(let i=0;i<t.recMvList.length;i++)String(t.recMvList[i].playCount).length>5&&String(t.recMvList[i].playCount).length<9?t.recMvList[i].playCount=String(t.recMvList[i].playCount).substr(0,String(t.recMvList[i].playCount).length-4)+"万":5==String(t.recMvList[i].playCount).length?t.recMvList[i].playCount=String(t.recMvList[i].playCount).substr(0,1)+"."+String(t.recMvList[i].playCount).substr(1,2)+"万":9==String(t.recMvList[i].playCount).length?t.recMvList[i].playCount=String(t.recMvList[i].playCount).substr(0,1)+"."+String(t.recMvList[i].playCount).substr(1,2)+"亿":String(t.recMvList[i].playCount).length>9&&(t.recMvList[i].playCount=String(t.recMvList[i].playCount).substr(0,String(t.recMvList[i].playCount).length-8)+"亿")}))},goPlayMv(t){var s=this;s.$router.push({name:"mvPlay",query:{recplaylist:!0,mvId:t}})}}},M=P,_=(0,o.Z)(M,d,m,!1,null,"09b42ca0",null),f=_.exports,b={name:"HomePage",components:{hotSearch:g,RecPlaylist:S,RecMvList:f}},k=b,w=(0,o.Z)(k,e,a,!1,null,null,null),x=w.exports}}]);
//# sourceMappingURL=71.7e92e6e9.js.map