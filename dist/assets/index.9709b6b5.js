import{g as S}from"./table.0b828bf0.js";import{_ as T,d as N,r as h,f as v,g as a,X as U,o as x,c as j,b as e,w as t,a as d,A as G,u as L,m as O,h as s,t as g,O as W,aa as X,p as q,e as H}from"./index.93fa3f78.js";import"./axios.cb5ba89f.js";const p=i=>(q("data-v-e453618c"),i=i(),H(),i),J={class:"main-table"},K=p(()=>d("span",null,"\u65B0\u589E",-1)),M=p(()=>d("span",null,"\u5220\u9664",-1)),P=p(()=>d("span",null,"\u5BFC\u5165",-1)),Q={class:"table-box"},R=s("\u5F00\u542F"),Y=s("\u5173\u95ED"),Z=s("\u4FEE\u6539"),$=s("\u8BE6\u60C5"),ee=s("\u5220\u9664"),te=N({__name:"index",setup(i){h({value1:"",value2:"",value3:"",value4:"",value5:""});const m=v([]);let l=v(!1);const b=h({page:1,pageSize:1e3});return(async()=>{try{l.value=!0;const u=await S(b);m.value=u.data.list,l.value=!1}catch(u){return l.value=!1,u}})(),(u,oe)=>{const w=a("icon-plus"),c=a("a-button"),y=a("icon-delete"),B=a("icon-export"),r=a("a-space"),f=a("a-switch"),_=a("a-tooltip"),F=a("icon-refresh"),z=a("icon-settings"),C=a("icon-fullscreen"),E=a("a-row"),o=a("a-table-column"),k=a("a-avatar"),D=a("a-popconfirm"),A=a("a-table"),V=U("loading");return x(),j("div",J,[e(E,{justify:"space-between"},{default:t(()=>[e(r,null,{default:t(()=>[e(c,{type:"primary"},{icon:t(()=>[e(w)]),default:t(()=>[K]),_:1}),e(c,{type:"primary",status:"danger"},{icon:t(()=>[e(y)]),default:t(()=>[M]),_:1}),e(c,null,{icon:t(()=>[e(B)]),default:t(()=>[P]),_:1})]),_:1}),e(r,{size:15},{default:t(()=>[e(_,{content:"\u8868\u683C\u6591\u9A6C\u7EB9"},{default:t(()=>[e(f,{size:"medium"})]),_:1}),e(_,{content:"\u5237\u65B0"},{default:t(()=>[e(F,{size:18})]),_:1}),e(_,{content:"\u5217\u8BBE\u7F6E"},{default:t(()=>[e(z,{size:18})]),_:1}),e(_,{content:"\u5168\u5C4F"},{default:t(()=>[e(C,{size:18})]),_:1})]),_:1})]),_:1}),d("section",Q,[G((x(),O(A,{"row-key":"id",data:m.value,scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:{"show-page-size":!0},"row-selection":{type:"checkbox",showCheckedAll:!0}},{columns:t(()=>[e(o,{title:"\u5E8F\u53F7",width:60},{cell:t(n=>[s(g(n.rowIndex+1),1)]),_:1}),e(o,{title:"\u59D3\u540D","data-index":"name"}),e(o,{title:"\u5934\u50CF",width:100},{cell:t(({record:n})=>[e(k,{size:30,style:W({backgroundColor:n.color})},{default:t(()=>[s(g(n.name[0]),1)]),_:2},1032,["style"])]),_:1}),e(o,{title:"\u624B\u673A\u53F7","data-index":"phone",width:150}),e(o,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"startTime"}),e(o,{title:"\u5730\u5740","data-index":"address"}),e(o,{title:"\u72B6\u6001",width:100},{cell:t(({record:n})=>[e(f,{modelValue:n.status,"onUpdate:modelValue":I=>n.status=I,size:"medium"},{checked:t(()=>[R]),unchecked:t(()=>[Y]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(o,{title:"\u64CD\u4F5C",width:200},{cell:t(({record:n})=>[e(r,null,{default:t(()=>[e(c,{type:"primary",size:"mini"},{default:t(()=>[Z]),_:1}),e(c,{size:"mini"},{default:t(()=>[$]),_:1}),e(D,{content:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u9879\u5417?"},{default:t(()=>[e(c,{type:"primary",status:"danger",size:"mini"},{default:t(()=>[ee]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["data"])),[[V,L(l)]])]),e(X)])}}});var ie=T(te,[["__scopeId","data-v-e453618c"]]);export{ie as default};