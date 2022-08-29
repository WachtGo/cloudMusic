"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[197],{4197:function(e,a,r){r.r(a),r.d(a,{default:function(){return d}});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",{staticClass:"list-wrap"},[r("div",[r("div",[r("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[r("span",{staticStyle:{"font-size":"16px"}},[e._v("类型：")]),e._l(e.singerType,(function(a,t){return r("span",{key:a.type,staticClass:"type-area singer-type",on:{click:function(r){e.checkedStyle(e.typeElement,t),e.getSingerlist(a.type,e.area)}}},[e._v(" "+e._s(a.typeName)+" ")])}))],2)]),r("div",[r("div",{staticClass:"inline-block",staticStyle:{padding:"5px 0"}},[r("span",{staticStyle:{"font-size":"16px"}},[e._v("地区：")]),e._l(e.singerArea,(function(a,t){return r("span",{key:a.area,staticClass:"type-area singer-area",on:{click:function(r){e.checkedStyle(e.areaElement,t),e.getSingerlist(e.type,a.area)}}},[e._v(" "+e._s(a.areaName)+" ")])}))],2),r("div",{staticClass:"inline-block clearfix ",staticStyle:{float:"right",padding:"5px 0"}},[r("span",{staticStyle:{color:"#eee"}},[e._v(" 排列：")]),r("span",{staticClass:"categary-select",on:{click:function(a){e.categaryShow=!e.categaryShow}}},[e._v(e._s(e.align))]),e.categaryShow?r("div",{staticClass:"categary-allTag-wrap"},e._l(e.initialtitle,(function(a,t){return r("div",{key:t,staticClass:"categary-allTag-wrap-list"},[r("div",[r("span",[e._v(e._s(a)+":")])]),r("div",{staticClass:"categary-allTag-wrap-list-item"},e._l(e.initialData[t],(function(a,t){return r("span",{key:t,on:{click:function(r){e.initial=a.orderValue,e.align=a.order,e.categaryShow=!1}}},[e._v(e._s(a.order))])})),0)])})),0):e._e()])])]),r("div",{staticClass:"singerListClass"},[r("h3",{directives:[{name:"show",rawName:"v-show",value:0===e.singerList.length,expression:"singerList.length === 0"}],staticStyle:{"text-align":"center"}},[r("i",{staticClass:"el-icon-loading"})]),e._l(e.singerList,(function(a,t){return r("li",{key:t,staticClass:"liWrap",on:{click:function(r){return r.stopPropagation(),e.goSingerDetail(a.id)}}},[r("div",{staticClass:"liWrap-block1"},[r("img",{attrs:{src:a.img1v1Url,alt:""}})]),r("div",{staticClass:"liWrap-block2"},[r("div",{staticClass:"div1"},[e._v(" 歌手："),r("span",[e._v(e._s(a.name))])]),r("div",[r("div",{staticClass:"divOther"},[e._v(" 专辑："),r("span",[e._v(e._s(a.albumSize))])]),r("div",{staticClass:"divOther"},[e._v(" 歌曲："),r("span",[e._v(e._s(a.musicSize))])])])])])}))],2)]),r("div",{staticClass:"pagination"},[r("el-pagination",{directives:[{name:"show",rawName:"v-show",value:0!==e.count,expression:"count !== 0"}],attrs:{"current-page":e.currentPage,"page-size":9,layout:"prev, pager, next, jumper",total:e.count,background:!0},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a}}})],1)])},i=[],s=r(9531),n={data(){return{type:"-1",area:"-1",align:"热门",categaryShow:!1,initialtitle:["热门","序号"],initialData:{0:[{order:"热门",orderValue:"a"}],1:[{order:"A",orderValue:"a"},{order:"B",orderValue:"b"},{order:"C",orderValue:"c"},{order:"D",orderValue:"d"},{order:"E",orderValue:"e"},{order:"F",orderValue:"f"},{order:"G",orderValue:"g"},{order:"F",orderValue:"f"},{order:"H",orderValue:"h"},{order:"I",orderValue:"i"},{order:"J",orderValue:"j"},{order:"K",orderValue:"k"},{order:"L",orderValue:"l"},{order:"M",orderValue:"m"},{order:"N",orderValue:"n"},{order:"O",orderValue:"o"},{order:"P",orderValue:"p"},{order:"Q",orderValue:"q"},{order:"R",orderValue:"r"},{order:"S",orderValue:"s"},{order:"T",orderValue:"t"},{order:"U",orderValue:"u"},{order:"V",orderValue:"v"},{order:"W",orderValue:"w"},{order:"X",orderValue:"x"},{order:"Y",orderValue:"y"},{order:"Z",orderValue:"z"}]},initial:"-1",singerType:[{type:"-1",typeName:"全部"},{type:"1",typeName:"男歌手"},{type:"2",typeName:"女歌手"},{type:"3",typeName:"乐队"}],singerArea:[{area:"-1",areaName:"全部"},{area:"7",areaName:"华语"},{area:"96",areaName:"欧美"},{area:"8",areaName:"日本"},{area:"16",areaName:"韩国"},{area:"0",areaName:"其他"}],typeareaElement:[],singerList:[],count:999,currentPage:1}},watch:{initial(){this.getSingerlist(this.type,this.area)}},mounted(){this.typeElement=document.querySelectorAll(".singer-type"),this.areaElement=document.querySelectorAll(".singer-area"),this.getSingerlist(this.currentTag)},methods:{checkedStyle(e,a){e.forEach(((e,r)=>{a===r?e.classList.add("type-area-checked"):e.classList.contains("type-area-checked")&&e.classList.remove("type-area-checked")}))},areaStyle(){},async getSingerlist(e,a){let r=this;r.type=e,r.area=a;let t={type:r.type,area:r.area,initial:this.initial,limit:9,offset:9*(r.currentPage-1)};r.singerList=[],await(0,s.zd)(t).then((e=>{r.singerList=e.data.artists}))},goSingerDetail(e){e&&this.$router.push({name:"singerDetail",params:{singerId:e}})},handleCurrentChange:function(e){var a=this;a.currentPage=e,a.getSingerlist(a.type,a.area)}}},l=n,o=r(1001),c=(0,o.Z)(l,t,i,!1,null,"94b8cce6",null),d=c.exports}}]);
//# sourceMappingURL=197.a56c1df1.js.map