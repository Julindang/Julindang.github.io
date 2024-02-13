(function(){"use strict";var e={1576:function(e,t,n){var a=n(7764),o=n(4108);const s={style:{width:"100%",height:"100%",position:"absolute",top:"0%"}};function l(e,t,n,a,l,r){const i=(0,o.E1)("sideMenu"),c=(0,o.E1)("router-view");return(0,o.Wz)(),(0,o.An)("div",s,[(0,o.K2)(i),(0,o.K2)(c)])}var r=n(9096);const i=e=>((0,o.ED)("data-v-241c60cf"),e=e(),(0,o.ii)(),e),c={class:"menu-container"},u=i((()=>(0,o.QD)("hr",{class:"slicer"},null,-1)));function d(e,t,n,a,s,l){const i=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",c,[(0,o.K2)(i,{to:"/dashboard",style:{color:"#d8d8d8"}},{default:(0,o.Ql)((()=>[(0,o.mY)("Dashboard")])),_:1}),u,(0,o.K2)(i,{to:"/",class:(0,r.WN)({selectedMenu:0==this.$store.state.menuStore.menuFlag}),onClick:t[0]||(t[0]=e=>l.selectMenu(0))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 홈 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/account",class:(0,r.WN)({selectedMenu:1==this.$store.state.menuStore.menuFlag}),onClick:t[1]||(t[1]=e=>l.selectMenu(1))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 계정 관리 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/statistic",class:(0,r.WN)({selectedMenu:2==this.$store.state.menuStore.menuFlag}),onClick:t[2]||(t[2]=e=>l.selectMenu(2))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 사용자 통계 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/cafe",class:(0,r.WN)({selectedMenu:3==this.$store.state.menuStore.menuFlag}),onClick:t[3]||(t[3]=e=>l.selectMenu(3))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 음료 편집 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/topping",class:(0,r.WN)({selectedMenu:9==this.$store.state.menuStore.menuFlag}),onClick:t[4]||(t[4]=e=>l.selectMenu(9))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 토핑 추가 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/faq",class:(0,r.WN)({selectedMenu:4==this.$store.state.menuStore.menuFlag}),onClick:t[5]||(t[5]=e=>l.selectMenu(4))},{default:(0,o.Ql)((()=>[(0,o.mY)(" FAQ ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/announcement",class:(0,r.WN)({selectedMenu:5==this.$store.state.menuStore.menuFlag}),onClick:t[6]||(t[6]=e=>l.selectMenu(5))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 알림 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/bmi",class:(0,r.WN)({selectedMenu:6==this.$store.state.menuStore.menuFlag}),onClick:t[7]||(t[7]=e=>l.selectMenu(6))},{default:(0,o.Ql)((()=>[(0,o.mY)(" BMI 항목 관리 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/diabetes",class:(0,r.WN)({selectedMenu:7==this.$store.state.menuStore.menuFlag}),onClick:t[8]||(t[8]=e=>l.selectMenu(7))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 당뇨 체크리스트 관리 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/diagnostic",class:(0,r.WN)({selectedMenu:8==this.$store.state.menuStore.menuFlag}),onClick:t[9]||(t[9]=e=>l.selectMenu(8))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 회원 진단 결과 편집 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/status",class:(0,r.WN)({selectedMenu:10==this.$store.state.menuStore.menuFlag}),onClick:t[10]||(t[10]=e=>l.selectMenu(10))},{default:(0,o.Ql)((()=>[(0,o.mY)("사용자 상태 멘트 관리 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/inquiry",class:(0,r.WN)({selectedMenu:11==this.$store.state.menuStore.menuFlag}),onClick:t[11]||(t[11]=e=>l.selectMenu(11))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 문의 관리 ")])),_:1},8,["class"]),(0,o.K2)(i,{to:"/notification",class:(0,r.WN)({selectedMenu:12==this.$store.state.menuStore.menuFlag}),onClick:t[12]||(t[12]=e=>l.selectMenu(12))},{default:(0,o.Ql)((()=>[(0,o.mY)(" 공지사항 관리 ")])),_:1},8,["class"]),(0,o.QD)("button",{onClick:t[13]||(t[13]=e=>l.logout()),class:"logoutBtn"},"logout")])}var p={name:"sideMenu",data(){return{menuFlag:0}},methods:{selectMenu(e){this.$store.commit("setMenuFlag",e)},logout(){console.log("logout")}}},m=n(4100);const g=(0,m.c)(p,[["render",d],["__scopeId","data-v-241c60cf"]]);var h=g,f={name:"App",data(){return{}},components:{sideMenu:h},created(){},methods:{}};const v=(0,m.c)(f,[["render",l]]);var Q=v,D=n(2964),b=n(7464);const C={class:"whole-container"},A=(0,o.QD)("h1",null,"Home",-1),y=[A];function F(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",C,y)}var x={name:"App",data(){return{}},components:{},methods:{}};const N=(0,m.c)(x,[["render",F]]);var k=N;const W={class:"whole-container"},w=(0,o.QD)("h1",null,"카페 데이터 추가",-1),M={class:"form-container"},z={id:"cafeForm"},O={class:"form-group"},T=(0,o.QD)("label",{for:"cafeName"},"카페명",-1),S={class:"form-group"},q=(0,o.QD)("label",{for:"drinkName"},"음료 이름",-1),$={class:"form-group"},_=(0,o.QD)("label",null,"온도",-1),U={class:"radio-group"},V=(0,o.QD)("label",{for:"hot"},"HOT",-1),K=(0,o.QD)("label",{for:"ice"},"ICE",-1),Y=(0,o.QD)("br",null,null,-1),P={class:"form-group"},j=(0,o.QD)("label",{for:"kcal"},"칼로리 (숫자만 입력)",-1),I={class:"form-group"},E=(0,o.QD)("label",{for:"sugar"},"당류 (숫자만 입력)",-1),B={class:"form-group"},H=(0,o.QD)("label",{for:"serve"},"용량 (숫자만 입력)",-1),L={class:"form-group"},R=(0,o.QD)("label",{for:"size"},"사이즈",-1),G={class:"form-group"},J=(0,o.QD)("label",{for:"manager"},"담당자",-1),X={class:"list-container"},Z={class:"cafe-list-table"},ee=(0,o.QD)("thead",null,[(0,o.QD)("tr",null,[(0,o.QD)("th",null,"ID"),(0,o.QD)("th",null,"카페명"),(0,o.QD)("th",null,"음료명"),(0,o.QD)("th",null,"사이즈"),(0,o.QD)("th",null,"제공량(ml)"),(0,o.QD)("th",null,"당류"),(0,o.QD)("th",null,"칼로리"),(0,o.QD)("th",null,"온도(true = hot, false = ice)"),(0,o.QD)("th",null,"삭제 여부"),(0,o.QD)("th",null,"담당자"),(0,o.QD)("th",null,"삭제 전환")])],-1),te={class:"btn-cover"},ne=["disabled"],ae={class:"page-count"},oe=["disabled"];function se(e,t,n,s,l,i){return(0,o.Wz)(),(0,o.An)("div",W,[w,(0,o.QD)("div",M,[(0,o.QD)("form",z,[(0,o.QD)("div",O,[T,(0,o.wt)((0,o.QD)("input",{type:"text",id:"cafeName",placeholder:"ex. 투썸플레이스",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.saveCafes.cafeName=e)},null,512),[[a.Og,l.saveCafes.cafeName]])]),(0,o.QD)("div",S,[q,(0,o.wt)((0,o.QD)("input",{type:"text",id:"drinkName",placeholder:"ex. 딸기 라떼",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>l.saveCafes.beverageName=e)},null,512),[[a.Og,l.saveCafes.beverageName]])]),(0,o.QD)("div",$,[_,(0,o.QD)("div",U,[(0,o.wt)((0,o.QD)("input",{type:"radio",id:"hot",name:"temperature",value:"true","onUpdate:modelValue":t[2]||(t[2]=e=>l.saveCafes.temperature=e),checked:""},null,512),[[a.sz,l.saveCafes.temperature]]),V,(0,o.wt)((0,o.QD)("input",{type:"radio",id:"ice",name:"temperature",value:"false","onUpdate:modelValue":t[3]||(t[3]=e=>l.saveCafes.temperature=e)},null,512),[[a.sz,l.saveCafes.temperature]]),K])]),Y,(0,o.QD)("div",P,[j,(0,o.wt)((0,o.QD)("input",{type:"number",id:"kcal",placeholder:"ex. 165",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>l.saveCafes.calorie=e)},null,512),[[a.Og,l.saveCafes.calorie]])]),(0,o.QD)("div",I,[E,(0,o.wt)((0,o.QD)("input",{type:"number",id:"sugar",placeholder:"ex. 30",required:"","onUpdate:modelValue":t[5]||(t[5]=e=>l.saveCafes.sugar=e)},null,512),[[a.Og,l.saveCafes.sugar]])]),(0,o.QD)("div",B,[H,(0,o.wt)((0,o.QD)("input",{type:"number",id:"serve",placeholder:"ex. 355",required:"","onUpdate:modelValue":t[6]||(t[6]=e=>l.saveCafes.serve=e)},null,512),[[a.Og,l.saveCafes.serve]])]),(0,o.QD)("div",L,[R,(0,o.wt)((0,o.QD)("input",{type:"text",id:"size",placeholder:"ex. tall",required:"","onUpdate:modelValue":t[7]||(t[7]=e=>l.saveCafes.size=e)},null,512),[[a.Og,l.saveCafes.size]])]),(0,o.QD)("div",G,[J,(0,o.wt)((0,o.QD)("input",{type:"text",id:"manager",placeholder:"ex. 홍길동",required:"","onUpdate:modelValue":t[8]||(t[8]=e=>l.saveCafes.manager=e)},null,512),[[a.Og,l.saveCafes.manager]])]),(0,o.QD)("button",{type:"button",onClick:t[9]||(t[9]=e=>i.submitForm())},"완료")])]),(0,o.QD)("div",X,[(0,o.QD)("table",Z,[ee,(0,o.QD)("tbody",null,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.paginatedData,(n=>((0,o.Wz)(),(0,o.An)("tr",{key:n},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(n,(e=>((0,o.Wz)(),(0,o.An)("th",{key:e},(0,r.WA)(e),1)))),128)),(0,o.QD)("button",{class:"delete-button",onClick:t[10]||(t[10]=t=>i.deleteCafe(l.storedCafes[e.idx].id))}," 삭제 ")])))),128))])]),(0,o.QD)("div",te,[(0,o.QD)("button",{disabled:0===l.pageNum,onClick:t[11]||(t[11]=(...e)=>i.prevPage&&i.prevPage(...e)),class:"page-btn"}," ◀︎ ",8,ne),(0,o.QD)("span",ae,(0,r.WA)(l.pageNum+1)+" / "+(0,r.WA)(i.pageCount),1),(0,o.QD)("button",{disabled:l.pageNum>=i.pageCount-1,onClick:t[12]||(t[12]=(...e)=>i.nextPage&&i.nextPage(...e)),class:"page-btn"}," ► ",8,oe)])])])}var le={name:"App",data(){return{pageNum:0,storedCafes:[{cafeId:0,beverageName:"",cafeName:"",calorie:0,serve:0,size:"",suger:0,temperature:!0,deleted:!0,manager:""}],saveCafes:{beverageName:"",cafeName:"",temperature:!0,calorie:"",sugar:"",size:"",manager:"",deleted:!1}}},mounted(){this.loadContents()},computed:{pageCount(){let e=this.storedCafes.length,t=10,n=Math.floor(e/t);return e%t>0&&(n+=1),n},paginatedData(){const e=10*this.pageNum,t=e+10;return this.storedCafes.slice(e,t)}},methods:{nextPage(){this.pageNum+=1},prevPage(){console.log(this.paginatedData),this.pageNum-=1},loadContents(){this.$axios.get("/admin/cafe").then((e=>{this.storedCafes=e.data,console.log(e.data)}))},submitForm(){console.log(this.saveCafes),this.$axios.post("/admin/cafe/save",this.saveCafes).then((e=>{console.log(e),this.loadContents()})).catch((e=>{console.log(e)}))},deleteCafe(e){this.$axios.delete("/admin/cafe/delete/"+e).then((()=>{this.loadContents()})).catch((e=>{console.log(e)}))}}};const re=(0,m.c)(le,[["render",se]]);var ie=re;const ce={class:"whole-container"},ue=(0,o.QD)("h1",null,"토핑 데이터 추가",-1),de={class:"form-container"},pe={id:"cafeForm"},me={class:"form-group"},ge=(0,o.QD)("label",{for:"toppingName"},"카페 이름",-1),he={class:"form-group"},fe=(0,o.QD)("label",{for:"beverageName"},"음료 이름",-1),ve={class:"form-group"},Qe=(0,o.QD)("label",{for:"toppingName"},"토핑 이름",-1),De={class:"form-group"},be=(0,o.QD)("label",{for:"kcal"},"칼로리 (숫자만 입력)",-1),Ce={class:"form-group"},Ae=(0,o.QD)("label",{for:"sugar"},"당류 (숫자만 입력)",-1),ye={class:"form-group"},Fe=(0,o.QD)("label",{for:"manager"},"담당자",-1),xe={class:"list-container"},Ne={class:"cafe-list-table"},ke=(0,o.QD)("thead",null,[(0,o.QD)("tr",null,[(0,o.QD)("th",null,"ID"),(0,o.QD)("th",null,"토핑 이름"),(0,o.QD)("th",null,"당류"),(0,o.QD)("th",null,"칼로리"),(0,o.QD)("th",null,"삭제 여부"),(0,o.QD)("th",null,"카페 이름"),(0,o.QD)("th",null,"음료 이름"),(0,o.QD)("th",null,"담당자"),(0,o.QD)("th",null,"삭제 전환")])],-1),We=["onClick"];function we(e,t,n,s,l,i){return(0,o.Wz)(),(0,o.An)("div",ce,[ue,(0,o.QD)("div",de,[(0,o.QD)("form",pe,[(0,o.QD)("div",me,[ge,(0,o.wt)((0,o.QD)("input",{type:"text",id:"cafeName",placeholder:"ex. 스타벅스",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.saveToppingsDto.cafeName=e)},null,512),[[a.Og,l.saveToppingsDto.cafeName]])]),(0,o.QD)("div",he,[fe,(0,o.wt)((0,o.QD)("input",{type:"text",id:"toppingName",placeholder:"ex. 아이스 아메리카노",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>l.saveToppingsDto.beverageName=e)},null,512),[[a.Og,l.saveToppingsDto.beverageName]])]),(0,o.QD)("div",ve,[Qe,(0,o.wt)((0,o.QD)("input",{type:"text",id:"toppingName",placeholder:"ex. 휘핑크림",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>l.saveToppingsDto.toppingName=e)},null,512),[[a.Og,l.saveToppingsDto.toppingName]])]),(0,o.QD)("div",De,[be,(0,o.wt)((0,o.QD)("input",{type:"number",id:"kcal",placeholder:"ex. 165",required:"","onUpdate:modelValue":t[3]||(t[3]=e=>l.saveToppingsDto.calorie=e)},null,512),[[a.Og,l.saveToppingsDto.calorie]])]),(0,o.QD)("div",Ce,[Ae,(0,o.wt)((0,o.QD)("input",{type:"number",id:"sugar",placeholder:"ex. 30",required:"","onUpdate:modelValue":t[4]||(t[4]=e=>l.saveToppingsDto.sugar=e)},null,512),[[a.Og,l.saveToppingsDto.sugar]])]),(0,o.QD)("div",ye,[Fe,(0,o.wt)((0,o.QD)("input",{type:"text",id:"manager",placeholder:"ex. 홍길동",required:"","onUpdate:modelValue":t[5]||(t[5]=e=>l.saveToppingsDto.manager=e)},null,512),[[a.Og,l.saveToppingsDto.manager]])]),(0,o.QD)("button",{type:"button",onClick:t[6]||(t[6]=e=>i.submitForm())},"완료")])]),(0,o.QD)("div",xe,[(0,o.QD)("table",Ne,[ke,(0,o.QD)("tbody",null,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(l.storedToppings,((e,t)=>((0,o.Wz)(),(0,o.An)("tr",{key:e},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e,(e=>((0,o.Wz)(),(0,o.An)("th",{key:e},(0,r.WA)(e),1)))),128)),(0,o.QD)("button",{class:"delete-button",onClick:e=>i.deleteTopping(l.storedToppings[t].id)}," 삭제 토글 ",8,We)])))),128))])])])])}var Me={name:"App",data(){return{storedToppings:[{toppingId:0,cafeName:"",beverageName:"",toppingName:"test",sugar:1,calorie:2,deleted:!1,manager:"tm"}],saveToppingsDto:{cafeName:"",beverageName:"",toppingName:"",sugar:"",calorie:"",deleted:!1,manager:""}}},components:{},mounted(){this.loadContents()},methods:{loadContents(){this.$axios.get("/admin/topping").then((e=>{this.storedToppings=e.data,console.log(e.data)}))},submitForm(){console.log(this.saveToppingsDto),this.$axios.post("/admin/topping/save",this.saveToppingsDto).then((e=>{this.saveToppingsDto.cafeId=this.storedToppings.length+1,console.log(e),this.loadContents()})).catch((e=>{console.log(e)}))},deleteTopping(e){console.log(e),this.$axios.delete("/admin/topping/delete/"+e).then((()=>{this.loadContents()})).catch((e=>{console.log(e)}))}}};const ze=(0,m.c)(Me,[["render",we]]);var Oe=ze;const Te={class:"whole-container"},Se=(0,o.QD)("h1",null,"FAQ",-1),qe={class:"form-container"},$e=(0,o.QD)("a",{style:{"font-weight":"800"}},"제목",-1),_e=(0,o.QD)("a",{style:{"font-weight":"800"}},"내용",-1),Ue=["onClick"],Ve=["onClick"];function Ke(e,t,n,s,l,i){return(0,o.Wz)(),(0,o.An)("div",Te,[Se,(0,o.QD)("div",qe,[$e,(0,o.wt)((0,o.QD)("input",{placeholder:"제목을 입력하세요",type:"text",id:"title",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>l.FAQSaveDto.title=e),style:{"margin-bottom":"50px"}},null,512),[[a.Og,l.FAQSaveDto.title]]),_e,(0,o.wt)((0,o.QD)("textarea",{placeholder:"내용을 입력하세요",type:"text",id:"contents",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>l.FAQSaveDto.contents=e),style:{height:"150px",width:"100%",padding:"8px","box-sizing":"border-box",border:"1px solid #ccc","border-radius":"4px"}},null,512),[[a.Og,l.FAQSaveDto.contents]]),(0,o.QD)("button",{style:{"margin-top":"30px"},onClick:t[2]||(t[2]=e=>i.saveFAQ())},"저장")]),((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(l.storedFAQs,((e,t)=>((0,o.Wz)(),(0,o.An)("div",{class:"contents-container",key:e},[(0,o.QD)("a",null,(0,r.WA)(e.title),1),(0,o.QD)("a",null,(0,r.WA)(t),1),1==this.FAQFlag[t]?((0,o.Wz)(),(0,o.An)("button",{key:0,class:"extend-button",onClick:e=>i.closeDiv(t)}," ▲ ",8,Ue)):((0,o.Wz)(),(0,o.An)("button",{key:1,class:"extend-button",onClick:e=>i.openDiv(t)},"▼",8,Ve))])))),128))])}var Ye={name:"App",data(){return{FAQSaveDto:{title:"",contents:""},storedFAQs:[{title:"제목제목제목제목제목제목제목제목제목제목제목제목",contents:"2"},{title:"3",contents:"4"},{title:"5",contents:"6"}],FAQFlag:0}},components:{},mounted(){this.loadContents()},methods:{saveFAQ(){},loadContents(){this.FAQFlag=new Array(this.storedFAQs.length),console.log(this.FAQFlag)},closeDiv(e){this.FAQFlag[e]=0},openDiv(e){console.log(this.FAQFlag),this.FAQFlag[e]=1}}};const Pe=(0,m.c)(Ye,[["render",Ke]]);var je=Pe;const Ie={class:"whole-container"},Ee=(0,o.QD)("h1",null,"계정관리",-1),Be=[Ee];function He(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Ie,Be)}var Le={name:"App",data(){return{}},components:{},methods:{}};const Re=(0,m.c)(Le,[["render",He]]);var Ge=Re;const Je={class:"whole-container"},Xe=(0,o.QD)("h1",null,"사용자 통계",-1),Ze=[Xe];function et(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Je,Ze)}var tt={name:"App",data(){return{}},components:{},methods:{}};const nt=(0,m.c)(tt,[["render",et]]);var at=nt;const ot={class:"whole-container"},st=(0,o.QD)("h1",null,"알림",-1),lt=[st];function rt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",ot,lt)}var it={name:"App",data(){return{}},components:{},methods:{}};const ct=(0,m.c)(it,[["render",rt]]);var ut=ct;const dt={class:"whole-container"},pt=(0,o.QD)("h1",null,"BMI 멘트 관리",-1),mt=[pt];function gt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",dt,mt)}var ht={name:"App",data(){return{}},components:{},methods:{}};const ft=(0,m.c)(ht,[["render",gt]]);var vt=ft;const Qt={class:"whole-container"},Dt=(0,o.QD)("h1",null,"당뇨 체크리스트 멘트 관리",-1),bt=[Dt];function Ct(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Qt,bt)}var At={name:"App",data(){return{}},components:{},methods:{}};const yt=(0,m.c)(At,[["render",Ct]]);var Ft=yt;const xt={class:"whole-container"},Nt=(0,o.QD)("h1",null,"사용자 상태 멘트 관리",-1),kt=[Nt];function Wt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",xt,kt)}var wt={name:"App",data(){return{}},components:{},methods:{}};const Mt=(0,m.c)(wt,[["render",Wt]]);var zt=Mt;const Ot={class:"whole-container"},Tt=(0,o.QD)("h1",null,"문의 관리",-1),St=[Tt];function qt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Ot,St)}var $t={name:"App",data(){return{}},components:{},methods:{}};const _t=(0,m.c)($t,[["render",qt]]);var Ut=_t;const Vt={class:"whole-container"},Kt=(0,o.QD)("h1",null,"공지사항 관리",-1),Yt=[Kt];function Pt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Vt,Yt)}var jt={name:"App",data(){return{}},components:{},methods:{}};const It=(0,m.c)(jt,[["render",Pt]]);var Et=It;const Bt={class:"whole-container"},Ht=(0,o.QD)("h1",null,"회원 진단 결과 관리",-1),Lt=[Ht];function Rt(e,t,n,a,s,l){return(0,o.Wz)(),(0,o.An)("div",Bt,Lt)}var Gt={name:"App",data(){return{}},components:{},methods:{}};const Jt=(0,m.c)(Gt,[["render",Rt]]);var Xt=Jt;const Zt=(0,b.gv)({history:(0,b.oz)(),routes:[{path:"/",name:"home",component:k},{path:"/cafe",name:"cafe",component:ie},{path:"/topping",name:"topping",component:Oe},{path:"/faq",name:"faq",component:je},{path:"/account",name:"account",component:Ge},{path:"/statistic",name:"statistic",component:at},{path:"/announcement",name:"announcement",component:ut},{path:"/bmi",name:"bmi",component:vt},{path:"/diabetes",name:"diabetes",component:Ft},{path:"/status",name:"status",component:zt},{path:"/inquiry",name:"inquiry",component:Ut},{path:"/notification",name:"notification",component:Et},{path:"/diagnostic",name:"diagnostic",component:Xt}]});var en=Zt,tn=n(7192),nn=n(6888);const an={state:{menuFlag:0},mutations:{setMenuFlag:function(e,t){e.menuFlag=t}},actions:{}};var on=an;const sn=(0,a.W0)(Q);sn.use(tn.cp);const ln=new tn.cp.Store({modules:{menuStore:on},plugins:[(0,nn.c)({paths:["menuStore"]})]});var rn=ln;const cn=(0,a.W0)(Q);cn.config.globalProperties.$axios=D.c,D.c.defaults.baseURL="http://jaehan1346dev.duckdns.org:60608",cn.use(rn),cn.use(en),cn.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var r=!0,i=0;i<a.length;i++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(r=!1,s<l&&(l=s));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,l=a[0],r=a[1],i=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var u=i(n)}for(t&&t(a);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},a=self["webpackChunkbackoffice"]=self["webpackChunkbackoffice"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[999],(function(){return n(1576)}));a=n.O(a)})();
//# sourceMappingURL=app.efc73c34.js.map