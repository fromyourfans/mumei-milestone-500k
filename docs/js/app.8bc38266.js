(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],v=0,d=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0384":function(t,e,a){"use strict";a("9219")},"0a26":function(t){t.exports=JSON.parse('{"whitelist":[],"messages":{},"tweets":{}}')},"1a0d":function(t,e,a){t.exports=a.p+"img/rune2.31e771a2.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("3f9b"),n=(a("13ea"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)}),o=[],i={data:function(){return{}}},c=i,l=a("2877"),u=a("6544"),v=a.n(u),d=a("7496"),m=a("f6c4"),f=Object(l["a"])(c,n,o,!1,null,null,null),g=f.exports;v()(f,{VApp:d["a"],VMain:m["a"]});var p=a("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=a("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"bar text-center"},[s("div",{staticClass:"mainphoto"},[s("div",{staticClass:"mainphoto-box"},[s("v-img",{attrs:{"aspect-ratio":1,"lazy-src":"https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium",src:"https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium"}})],1)])]),s("div",{staticClass:"content"},[s("v-container",{staticClass:"content-grid pt-16"},[s("div",{staticClass:"ribbon ribbon-left"}),s("div",{staticClass:"ribbon ribbon-right"}),s("p",{staticClass:"text-center mb-2"},[s("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"red",elevation:"0",href:"https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA",target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-youtube")]),t._v(" YouTube ")],1),s("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"blue lighten-2",elevation:"0",href:"https://twitter.com/nanashimumei_en",target:"_blank"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-twitter")]),t._v(" Twitter ")],1)],1),s("p",{staticClass:"text-center text-h6 mb-2"},[t._v(" Congratulations to Nanashi Mumei for reaching 500,000 subscribers on YouTube! ")]),s("v-row",{staticClass:"cards px-4 mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"text-center"},[s("v-btn",{staticClass:"brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#canvas")}}},[s("v-avatar",{attrs:{left:"",size:"34"}},[s("img",{staticClass:"navimg",attrs:{src:a("1a0d")}})]),s("span",{staticClass:"pl-2 text-h6"},[t._v("Mural")])],1),s("v-btn",{staticClass:"brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#messages")}}},[s("v-avatar",{attrs:{left:"",size:"34"}},[s("img",{staticClass:"navimg",attrs:{src:a("1a0d")}})]),s("span",{staticClass:"pl-2 text-h6"},[t._v("Messages")])],1),s("v-btn",{staticClass:"brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#artworks")}}},[s("v-avatar",{attrs:{left:"",size:"34"}},[s("img",{staticClass:"navimg",attrs:{src:a("1a0d")}})]),s("span",{staticClass:"pl-2 text-h6"},[t._v("Artworks")])],1),s("v-btn",{staticClass:"brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#collage")}}},[s("v-avatar",{attrs:{left:"",size:"34"}},[s("img",{staticClass:"navimg",attrs:{src:a("1a0d")}})]),s("span",{staticClass:"pl-2 text-h6"},[t._v("Collage")])],1)],1)],1),s("v-row",{staticClass:"mb-2",attrs:{"no-gutters":"",id:"canvas"}},[s("v-col",{staticClass:"text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl"},[t._v(" MURAL "),s("v-btn",{staticClass:"float-right brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"mural",attrs:{sm:"10","offset-sm":"1"}},[s("div",{staticClass:"mural-container mx-auto"},[s("inner-image-zoom",{attrs:{src:t.CanvasImg,zoomSrc:t.CanvasImg}})],1)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"messages"}},[s("v-col",{staticClass:"text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl"},[t._v(" MESSAGES "),s("v-btn",{staticClass:"float-right brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"cards px-4"},[s("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".card"}},t._l(t.cards,(function(e,r){return s("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:"card-"+r,staticClass:"card pt-6"},[s("div",{staticClass:"binder"}),s("div",{staticClass:"wings"},[s("img",{attrs:{src:a("9212")}})]),s("div",{staticClass:"card-name text-subtitle-2 pr-12"},[t._v(t._s(e.name))]),s("div",{staticClass:"card-text text-body-2 pr-4 pb-4"},[t._v(t._s(e.message))])])})),0)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"artworks"}},[s("v-col",{staticClass:"text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl"},[t._v(" ARTWORKS "),s("v-btn",{staticClass:"float-right brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"px-8"},t._l(t.tweets,(function(t,e){return s("v-col",{key:"tweet-"+e,attrs:{cols:"12",sm:"6",lg:"4",xl:"3"}},[s("v-card",{attrs:{elevation:"1",shaped:""}},[s("Tweet",{attrs:{id:t}})],1)],1)})),1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":"",id:"collage"}},[s("v-col",{staticClass:"text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl"},[t._v(" COLLAGE "),s("v-btn",{staticClass:"float-right brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"collage",attrs:{sm:"10","offset-sm":"1"}},[s("div",{staticClass:"collage-container mx-auto"},[s("inner-image-zoom",{attrs:{src:t.CollageImg,zoomSrc:t.CollageImg}})],1)])],1),s("v-row",{staticClass:"mt-8 mb-8",attrs:{"no-gutters":""}},[s("v-col",{staticClass:"text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl"},[t._v(" CREDITS "),s("v-btn",{staticClass:"float-right brown--text darken-3",attrs:{text:""},on:{click:function(e){return t.scrollTo("#header")}}},[t._v(" TOP ")])],1)],1),s("v-row",{staticClass:"mb-8 px-16"},[s("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[s("ul",[s("li",{staticClass:"pb-4"},[s("strong",{staticClass:"mr-2"},[t._v("jetrico")]),s("v-icon",[t._v("mdi-twitter")]),s("a",{attrs:{target:"_blank",href:"https://twitter.com/jetri_co"}},[t._v("@jetri_co")]),s("ul",[s("li",[t._v("Website development, graphics")]),s("li",[t._v("Backend automations")])])],1),s("li",{staticClass:"pb-4"},[s("strong",{staticClass:"mr-2"},[t._v("Mumei Civilization Discord")]),s("v-icon",[t._v("mdi-discord")]),s("ul",[s("li",[t._v("Event organization")]),s("li",[t._v("Mural, the community drawing")]),s("li",[t._v("Message/art collection")]),s("li",[t._v("Community announcements, etc")])])],1),s("li",{staticClass:"pb-4"},[s("strong",{staticClass:"mr-2"},[t._v("Mumei Sanctuary Discord")]),s("v-icon",[t._v("mdi-discord")]),s("ul",[s("li",[t._v("Art collage")]),s("li",[t._v("Yosetti message board")]),s("li",[t._v("Community announcements, etc")])])],1),s("li",{staticClass:"pb-4"},[s("strong",{staticClass:"mr-2"},[t._v("水卯")]),s("v-icon",[t._v("mdi-twitter")]),s("a",{attrs:{target:"_blank",href:"https://twitter.com/Minau_"}},[t._v("@Minau_")]),s("ul",[s("li",[t._v("Mumei Sanctuary logo")])])],1),s("li",{staticClass:"pb-4"},[s("strong",{staticClass:"mr-2"},[t._v("galex")]),s("ul",[s("li",[t._v("Message card graphic")])])])])]),s("v-col",{attrs:{cols:"12",sm:"6",lg:"8"}},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-img",{attrs:{"lazy-src":a("be93"),src:a("be93")}})],1),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-img",{attrs:{"lazy-src":a("be93"),src:a("be93")}})],1)],1)],1)],1)],1)],1)],1)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{id:"header"}},[a("div",{staticClass:"headbg mx-auto"}),a("div",{staticClass:"wings mx-auto"})])}],x=a("1da1"),w=(a("96cf"),a("4e82"),a("07ac"),a("d81d"),a("bc3a")),_=a.n(w),k=a("01ff"),y=a.n(k),T=a("7397"),O=a("0a26"),j=a("7ca7"),M=a.n(j),S=a("f48b"),z=a.n(S),A={data:function(){return{source:"https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei500k.json",cards:[],tweets:[],CanvasImg:M.a,CollageImg:z.a}},methods:{scrollTo:function(t){this.$vuetify.goTo(t,{duration:1e3,offset:20,easing:"easeInOutCubic"})}},mounted:function(){var t=this;Object(x["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get(t.source).catch((function(){return null}));case 2:a=e.sent,s=a&&a.data?a.data:O,t.cards=Object.values(s.messages).sort((function(t,e){return t.time-e.time})),t.tweets=Object.values(s.tweets).map((function(t){return String(t.id)})),console.log(s);case 7:case"end":return e.stop()}}),e)})))()},components:{"inner-image-zoom":y.a,Tweet:T["Tweet"]}},P=A,V=(a("0384"),a("8212")),I=a("8336"),E=a("b0af"),N=a("62ad"),R=a("a523"),D=a("132d"),F=a("adda"),$=a("0fd9"),U=Object(l["a"])(P,C,h,!1,null,"9896f8d4",null),W=U.exports;v()(U,{VAvatar:V["a"],VBtn:I["a"],VCard:E["a"],VCol:N["a"],VContainer:R["a"],VIcon:D["a"],VImg:F["a"],VRow:$["a"]}),s["default"].use(b["a"]);var B=[{path:"/",name:"Home",component:W}],G=new b["a"]({routes:B}),J=G,K=a("2f62");s["default"].use(K["a"]);var L=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=a("f309");s["default"].use(Y["a"]);var Q=new Y["a"]({});s["default"].use(r["a"]),s["default"].config.productionTip=!1,new s["default"]({router:J,store:L,vuetify:Q,render:function(t){return t(g)}}).$mount("#app")},"7ca7":function(t,e,a){t.exports=a.p+"img/sample1.a496fda5.png"},9212:function(t,e,a){t.exports=a.p+"img/feather.0ee2ad34.png"},9219:function(t,e,a){},be93:function(t,e,a){t.exports=a.p+"img/credits-civ.f644aecd.png"},f48b:function(t,e,a){t.exports=a.p+"img/sample2.85902030.png"}});
//# sourceMappingURL=app.8bc38266.js.map