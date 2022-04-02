var w=Object.defineProperty,D=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var B=(a,o,s)=>o in a?w(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,$=(a,o)=>{for(var s in o||(o={}))S.call(o,s)&&B(a,s,o[s]);if(b)for(var s of b(o))z.call(o,s)&&B(a,s,o[s]);return a},k=(a,o)=>D(a,M(o));import{_ as L}from"./avatar.d240db71.js";import{_ as y}from"./index.f21ca4de.js";import{r as n,o as r,h as v,a as e,w as t,i as _,O as H,P as N,H as u,f as x,p as E,B as V,u as h,c as A,k as U,J,I as K,t as O}from"./vendor.1cc33248.js";import P from"./index.e89c4162.js";import R from"./index.74ce281f.js";import T from"./index.3f3d8246.js";import"./system.93f8b0f7.js";import"./axios.69b7c190.js";const j={},f=a=>(H("data-v-40badd38"),a=a(),N(),a),q={class:"head"},G=f(()=>_("img",{src:L},null,-1)),Q=f(()=>_("section",{class:"user-name"},"Lin",-1)),W={class:"label-list"},X=f(()=>_("span",null,"\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08",-1)),Y=f(()=>_("span",null,"\u524D\u7AEF",-1)),Z=f(()=>_("span",null,"\u5E7F\u5DDE",-1)),ee=u("\u7F16\u8F91\u4FE1\u606F");function te(a,o){const s=n("IconCamera"),c=n("a-avatar"),i=n("icon-user"),d=n("icon-safe"),l=n("icon-location"),p=n("icon-edit"),m=n("a-button");return r(),v("div",q,[e(c,{size:60,"trigger-icon-style":{color:"#3491FA"}},{"trigger-icon":t(()=>[e(s)]),default:t(()=>[G]),_:1}),Q,_("section",W,[_("div",null,[e(i),X]),_("div",null,[e(d),Y]),_("div",null,[e(l),Z])]),e(m,{type:"primary",class:"edit-btn"},{icon:t(()=>[e(p)]),default:t(()=>[ee]),_:1})])}var oe=y(j,[["render",te],["__scopeId","data-v-40badd38"]]);const ne={class:"user-center"},ae={style:{"margin-top":"20px","padding-left":"20px"}},se=u("Lin"),_e=u("\u53CC\u9C7C\u5EA7"),ce=u("07\u670816\u65E5"),ue=u("vue3"),ie=u("pinia"),de=u("vite"),le=u("ts"),re=u("arco design"),pe=u("\u738B\u8005\u8363\u8000"),me=u("\u65C5\u884C"),fe=u("\u54C8\u54C8\u54C8"),he=x({setup(a){return(o,s)=>{const c=n("a-descriptions-item"),i=n("a-tag"),d=n("a-space"),l=n("icon-man"),p=n("icon-woman"),m=n("a-switch"),g=n("a-descriptions");return r(),v("div",ne,[e(oe),_("section",ae,[e(g,{title:"\u57FA\u672C\u4FE1\u606F",column:1},{default:t(()=>[e(c,{label:"\u6635\u79F0"},{default:t(()=>[se]),_:1}),e(c,{label:"\u661F\u5EA7"},{default:t(()=>[_e]),_:1}),e(c,{label:"\u751F\u65E5"},{default:t(()=>[ce]),_:1}),e(c,{label:"\u6807\u7B7E"},{default:t(()=>[e(d,{size:5},{default:t(()=>[e(i,{color:"#f53f3f"},{default:t(()=>[ue]),_:1}),e(i,{color:"#7816ff"},{default:t(()=>[ie]),_:1}),e(i,{color:"#00b42a"},{default:t(()=>[de]),_:1}),e(i,{color:"#165dff"},{default:t(()=>[le]),_:1}),e(i,{color:"#ff7d00"},{default:t(()=>[re]),_:1})]),_:1})]),_:1}),e(c,{label:"\u7231\u597D"},{default:t(()=>[e(d,{size:5},{default:t(()=>[e(i,{color:"purple"},{default:t(()=>[pe]),_:1}),e(i,{color:"magenta"},{default:t(()=>[me]),_:1})]),_:1})]),_:1}),e(c,{label:"\u6027\u522B"},{default:t(()=>[e(m,{size:"medium","model-value":!0},{"checked-icon":t(()=>[e(l)]),"unchecked-icon":t(()=>[e(p)]),_:1})]),_:1}),e(c,{label:"\u5EA7\u53F3\u94ED"},{default:t(()=>[fe]),_:1})]),_:1})])])}}});var I=y(he,[["__scopeId","data-v-115a5a92"]]);const ve={class:"system-manage"},ge={class:"left"},Ce={class:"right"},ye=x({name:"SystemManage"}),xe=x(k($({},ye),{setup(a){let o=E("01"),s=E(0);const c=V([{id:"01",name:"\u4E2A\u4EBA\u4E2D\u5FC3",value:I},{id:"04",name:"\u90E8\u95E8\u7BA1\u7406",value:P},{id:"02",name:"\u7528\u6237\u7BA1\u7406",value:R},{id:"03",name:"\u89D2\u8272\u7BA1\u7406",value:T},{id:"05",name:"\u83DC\u5355\u7BA1\u7406",value:I}]),i=(d,l)=>{o.value=d.id,s.value=l};return(d,l)=>{const p=n("a-menu-item"),m=n("a-sub-menu"),g=n("a-menu");return r(),v("div",ve,[_("section",ge,[e(g,{style:{width:"220px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":[h(o)]},{default:t(()=>[e(m,{key:"0"},{default:t(()=>[(r(!0),v(J,null,K(h(c),(C,F)=>(r(),A(p,{key:C.id,onClick:be=>i(C,F)},{default:t(()=>[_("span",null,O(C.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["default-selected-keys"])]),_("section",Ce,[(r(),A(U(h(c)[h(s)].value)))])])}}}));var Me=y(xe,[["__scopeId","data-v-24f50165"]]);export{Me as default};
