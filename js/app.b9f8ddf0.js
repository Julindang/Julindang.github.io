(function(){"use strict";var e={832:function(e,t,a){var n=a(328),l=a(760);const s=(0,l.QD)("head",null,[(0,l.QD)("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})],-1);function o(e,t,a,n,o,r){const u=(0,l.E1)("sideMenu"),c=(0,l.E1)("router-view");return(0,l.Wz)(),(0,l.An)(l.ae,null,[s,(0,l.K2)(u),(0,l.K2)(c)],64)}var r=a(752);const u=e=>((0,l.ED)("data-v-19e1ef83"),e=e(),(0,l.ii)(),e),c={class:"menu-container"},i=u((()=>(0,l.QD)("p",{class:"title",style:{color:"#d8d8d8"}},"줄인당",-1)));function d(e,t,a,n,s,o){const u=(0,l.E1)("router-link");return(0,l.Wz)(),(0,l.An)("div",c,[i,(0,l.K2)(u,{to:"/",class:(0,r.WN)({selectedMenu:0==this.$store.state.menuStore.menuFlag}),onClick:t[0]||(t[0]=e=>o.selectMenu(0))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 홈 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/account",class:(0,r.WN)({selectedMenu:1==this.$store.state.menuStore.menuFlag}),onClick:t[1]||(t[1]=e=>o.selectMenu(1))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 계정 관리 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/statistic",class:(0,r.WN)({selectedMenu:2==this.$store.state.menuStore.menuFlag}),onClick:t[2]||(t[2]=e=>o.selectMenu(2))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 사용자 통계 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/cafe",class:(0,r.WN)({selectedMenu:3==this.$store.state.menuStore.menuFlag}),onClick:t[3]||(t[3]=e=>o.selectMenu(3))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 음료 추가 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/faq",class:(0,r.WN)({selectedMenu:4==this.$store.state.menuStore.menuFlag}),onClick:t[4]||(t[4]=e=>o.selectMenu(4))},{default:(0,l.Ql)((()=>[(0,l.mY)(" FAQ ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/announcement",class:(0,r.WN)({selectedMenu:5==this.$store.state.menuStore.menuFlag}),onClick:t[5]||(t[5]=e=>o.selectMenu(5))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 알림 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/bmi",class:(0,r.WN)({selectedMenu:6==this.$store.state.menuStore.menuFlag}),onClick:t[6]||(t[6]=e=>o.selectMenu(6))},{default:(0,l.Ql)((()=>[(0,l.mY)(" BMI 항목 관리 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/checklist",class:(0,r.WN)({selectedMenu:7==this.$store.state.menuStore.menuFlag}),onClick:t[7]||(t[7]=e=>o.selectMenu(7))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 체크리스트 관리 ")])),_:1},8,["class"]),(0,l.K2)(u,{to:"/health",class:(0,r.WN)({selectedMenu:8==this.$store.state.menuStore.menuFlag}),onClick:t[8]||(t[8]=e=>o.selectMenu(8))},{default:(0,l.Ql)((()=>[(0,l.mY)(" 건강 상태 편집 ")])),_:1},8,["class"])])}var f={name:"sideMenu",data(){return{menuFlag:0}},methods:{selectMenu(e){this.$store.commit("setMenuFlag",e)}}},m=a(152);const p=(0,m.c)(f,[["render",d],["__scopeId","data-v-19e1ef83"]]);var v=p,h={name:"App",data(){return{}},components:{sideMenu:v},created(){},methods:{}};const g=(0,m.c)(h,[["render",o]]);var Q=g,D=a(774),b=a(216);function C(e,t,a,n,s,o){return(0,l.Wz)(),(0,l.An)("a",null,"백 오피스 홈")}var y={name:"App",data(){return{}},components:{},methods:{}};const k=(0,m.c)(y,[["render",C]]);var M=k;const w={class:"whole-container"},O={class:"form-container"},x=(0,l.QD)("h2",null,"카페 데이터 추가",-1),N={id:"cafeForm"},W={class:"form-group"},F=(0,l.QD)("label",{for:"cafeName"},"카페명",-1),S={class:"form-group"},z=(0,l.QD)("label",{for:"drinkName"},"음료 이름",-1),A={class:"form-group"},$=(0,l.QD)("label",null,"온도",-1),_={class:"radio-group"},q=(0,l.QD)("label",{for:"hot"},"HOT",-1),K=(0,l.QD)("label",{for:"ice"},"ICE",-1),U=(0,l.QD)("br",null,null,-1),V={class:"form-group",style:{width:"300px"}},j=(0,l.QD)("label",{for:"toppings"},"토핑 종류(쉼표로 구분)",-1),Y=(0,l.QD)("br",null,null,-1),E={class:"form-group"},P=(0,l.QD)("label",{for:"kcal"},"칼로리 (숫자만 입력)",-1),I={class:"form-group"},T=(0,l.QD)("label",{for:"sugar"},"당류 (숫자만 입력)",-1),B={class:"form-group"},H=(0,l.QD)("label",{for:"serve"},"용량 (숫자만 입력)",-1),L={class:"form-group"},R=(0,l.QD)("label",{for:"size"},"사이즈",-1),G={class:"form-group"},J=(0,l.QD)("label",{for:"manager"},"담당자",-1),X={class:"list-container"},Z={class:"cafe-list-table"},ee=(0,l.QD)("thead",null,[(0,l.QD)("tr",null,[(0,l.QD)("th",null,"ID"),(0,l.QD)("th",null,"카페명"),(0,l.QD)("th",null,"음료명"),(0,l.QD)("th",null,"사이즈"),(0,l.QD)("th",null,"제공량(ml)"),(0,l.QD)("th",null,"당류"),(0,l.QD)("th",null,"칼로리"),(0,l.QD)("th",null,"온도(true = hot, false = ice)"),(0,l.QD)("th",null,"삭제 여부")])],-1);function te(e,t,a,s,o,u){return(0,l.Wz)(),(0,l.An)("div",w,[(0,l.QD)("div",O,[x,(0,l.QD)("form",N,[(0,l.QD)("div",W,[F,(0,l.wt)((0,l.QD)("input",{type:"text",id:"cafeName",placeholder:"ex. 투썸플레이스",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>o.saveCafes.cafeName=e)},null,512),[[n.Og,o.saveCafes.cafeName]])]),(0,l.QD)("div",S,[z,(0,l.wt)((0,l.QD)("input",{type:"text",id:"drinkName",placeholder:"ex. 딸기 라떼",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>o.saveCafes.beverageName=e)},null,512),[[n.Og,o.saveCafes.beverageName]])]),(0,l.QD)("div",A,[$,(0,l.QD)("div",_,[(0,l.wt)((0,l.QD)("input",{type:"radio",id:"hot",name:"temperature",value:"true","onUpdate:modelValue":t[2]||(t[2]=e=>o.saveCafes.temperature=e),checked:""},null,512),[[n.sz,o.saveCafes.temperature]]),q,(0,l.wt)((0,l.QD)("input",{type:"radio",id:"ice",name:"temperature",value:"false","onUpdate:modelValue":t[3]||(t[3]=e=>o.saveCafes.temperature=e)},null,512),[[n.sz,o.saveCafes.temperature]]),K])]),U,(0,l.QD)("div",V,[j,(0,l.wt)((0,l.QD)("input",{type:"text",id:"toppings",placeholder:"ex. 헤이즐넛 시럽, 카라멜 시럽, 휘핑크림, 초콜릿",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>o.saveCafes.topping=e)},null,512),[[n.Og,o.saveCafes.topping]])]),Y,(0,l.QD)("div",E,[P,(0,l.wt)((0,l.QD)("input",{type:"number",id:"kcal",placeholder:"ex. 165",required:"","onUpdate:modelValue":t[5]||(t[5]=e=>o.saveCafes.calorie=e)},null,512),[[n.Og,o.saveCafes.calorie]])]),(0,l.QD)("div",I,[T,(0,l.wt)((0,l.QD)("input",{type:"number",id:"sugar",placeholder:"ex. 30",required:"","onUpdate:modelValue":t[6]||(t[6]=e=>o.saveCafes.sugar=e)},null,512),[[n.Og,o.saveCafes.sugar]])]),(0,l.QD)("div",B,[H,(0,l.wt)((0,l.QD)("input",{type:"number",id:"serve",placeholder:"ex. 355",required:"","onUpdate:modelValue":t[7]||(t[7]=e=>o.saveCafes.serve=e)},null,512),[[n.Og,o.saveCafes.serve]])]),(0,l.QD)("div",L,[R,(0,l.wt)((0,l.QD)("input",{type:"text",id:"size",placeholder:"ex. tall",required:"","onUpdate:modelValue":t[8]||(t[8]=e=>o.saveCafes.size=e)},null,512),[[n.Og,o.saveCafes.size]])]),(0,l.QD)("div",G,[J,(0,l.wt)((0,l.QD)("input",{type:"text",id:"manager",placeholder:"ex. 홍길동",required:"","onUpdate:modelValue":t[9]||(t[9]=e=>o.saveCafes.owner=e)},null,512),[[n.Og,o.saveCafes.owner]])]),(0,l.QD)("button",{type:"button",onClick:t[10]||(t[10]=e=>u.submitForm())},"완료")])]),(0,l.QD)("div",X,[(0,l.QD)("table",Z,[ee,(0,l.QD)("tbody",null,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(o.storedCafes,(e=>((0,l.Wz)(),(0,l.An)("tr",{key:e},[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(e,(e=>((0,l.Wz)(),(0,l.An)("th",{key:e},(0,r.WA)(e),1)))),128))])))),128))])])])])}var ae={name:"App",data(){return{storedCafes:[{cafeId:0,beverageName:"",cafeName:"",calorie:0,serve:0,size:"",suger:0,temperature:!0,deleted:!0}],saveCafes:{beverageName:"",cafeName:"",temperature:!0,calorie:0,sugar:0,size:"",owner:"",topping:""}}},components:{},mounted(){this.loadContents()},methods:{loadContents(){this.$axios.get("/cafe").then((e=>{this.storedCafes=e.data}))},submitForm(){console.log(this.saveCafes),this.$axios.post("/cafe/save",this.saveCafes).then((e=>{console.log(e),this.loadContents()})).catch((e=>{console.log(e)}))}}};const ne=(0,m.c)(ae,[["render",te]]);var le=ne;const se=(0,b.gv)({history:(0,b.oz)(),routes:[{path:"/",name:"home",component:M},{path:"/cafe",name:"cafe",component:le}]});var oe=se,re=a(936),ue=a(56);const ce={state:{menuFlag:0},mutations:{setMenuFlag:function(e,t){e.menuFlag=t}},actions:{}};var ie=ce;const de=(0,n.W0)(Q);de.use(re.cp);const fe=new re.cp.Store({modules:{menuStore:ie},plugins:[(0,ue.c)({paths:["menuStore"]})]});var me=fe;const pe=(0,n.W0)(Q);pe.config.globalProperties.$axios=D.c,D.c.defaults.baseURL="http://jaehan1346dev.duckdns.org:60608",pe.use(me),pe.use(oe),pe.mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,s){if(!n){var o=1/0;for(i=0;i<e.length;i++){n=e[i][0],l=e[i][1],s=e[i][2];for(var r=!0,u=0;u<n.length;u++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(r=!1,s<o&&(o=s));if(r){e.splice(i--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[n,l,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,s,o=n[0],r=n[1],u=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(u)var i=u(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(i)},n=self["webpackChunkbackoffice"]=self["webpackChunkbackoffice"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[999],(function(){return a(832)}));n=a.O(n)})();
//# sourceMappingURL=app.b9f8ddf0.js.map