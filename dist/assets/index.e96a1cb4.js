var I=Object.defineProperty,j=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var q=(l,o,t)=>o in l?I(l,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[o]=t,x=(l,o)=>{for(var t in o||(o={}))L.call(o,t)&&q(l,t,o[t]);if(N)for(var t of N(o))P.call(o,t)&&q(l,t,o[t]);return l},h=(l,o)=>j(l,O(o));import{d as y,r as S,f as E,g as a,o as B,c as A,b as e,w as u,u as n,_ as C,h as s,Q as k,v as D,a as T,N as Q,a3 as G,A as w,a2 as V,i as H}from"./index.f20d8353.js";const J={class:"step-1"},K=s("326***228@qq.com"),M=s("768***579@qq.com"),W=s("\u5FAE\u4FE1"),X=s("\u652F\u4ED8\u5B9D"),Y=s("\uFFE5"),Z=s("\u4E0B\u4E00\u6B65"),ee=y({name:"Step1"}),ue=y(h(x({},ee),{emits:["next"],setup(l,{emit:o}){const t=S({payAccount:"",recAccount:"1997***6962@qq.com",payType:1,recName:"Lin",amount:1980}),m={payAccount:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],recAccount:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"}],recName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"}]},p=E(),F=()=>{k(async()=>{await p.value.validate()||o("next",t)})};return(_,c)=>{const r=a("a-option"),f=a("a-select"),d=a("a-form-item"),v=a("a-input"),g=a("a-input-group"),$=a("a-button"),b=a("a-form");return B(),A("div",J,[e(b,{ref_key:"formRef",ref:p,model:n(t),size:"medium","auto-label-width":""},{default:u(()=>[e(d,{field:"payAccount",label:"\u4ED8\u6B3E\u8D26\u6237",rules:m.payAccount},{default:u(()=>[e(f,{modelValue:n(t).payAccount,"onUpdate:modelValue":c[0]||(c[0]=i=>n(t).payAccount=i),placeholder:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[e(r,{value:"326***228@qq.com"},{default:u(()=>[K]),_:1}),e(r,{value:"768***579@qq.com"},{default:u(()=>[M]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(d,{field:"recAccount",label:"\u6536\u6B3E\u8D26\u6237",rules:m.recAccount},{default:u(()=>[e(g,null,{default:u(()=>[e(f,{modelValue:n(t).payType,"onUpdate:modelValue":c[1]||(c[1]=i=>n(t).payType=i),style:{width:"150px"}},{default:u(()=>[e(r,{value:1},{default:u(()=>[W]),_:1}),e(r,{value:2},{default:u(()=>[X]),_:1})]),_:1},8,["modelValue"]),e(v,{modelValue:n(t).recAccount,"onUpdate:modelValue":c[2]||(c[2]=i=>n(t).recAccount=i),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules"]),e(d,{field:"recName",label:"\u6536\u6B3E\u4EBA\u59D3\u540D",rules:m.recName},{default:u(()=>[e(v,{modelValue:n(t).recName,"onUpdate:modelValue":c[3]||(c[3]=i=>n(t).recName=i),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules"]),e(d,{field:"amount",label:"\u8F6C\u8D26\u91D1\u989D",rules:m.amount},{default:u(()=>[e(v,{modelValue:n(t).amount,"onUpdate:modelValue":c[4]||(c[4]=i=>n(t).amount=i),placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{prefix:u(()=>[Y]),_:1},8,["modelValue"])]),_:1},8,["rules"]),e(d,null,{default:u(()=>[e($,{type:"primary",onClick:F},{default:u(()=>[Z]),_:1})]),_:1})]),_:1},8,["model"])])}}}));var te=C(ue,[["__scopeId","data-v-bc5cc322"]]);const oe={class:"step-2"},ae=s("\u63D0\u4EA4"),ne=s("\u4E0A\u4E00\u6B65"),se=y({name:"Step2"}),le=y(h(x({},se),{props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["next","prev"],setup(l,{emit:o}){const t=S({password:"123456"}),m={password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]};let p=E(!1);const F=E(),_=()=>{k(async()=>{try{p.value=!0,await F.value.validate()?p.value=!1:setTimeout(()=>{o("next"),p.value=!1},1e3)}catch(r){return r}})},c=()=>{o("prev")};return(r,f)=>{const d=a("a-descriptions-item"),v=a("a-descriptions"),g=a("a-divider"),$=a("a-input-password"),b=a("a-form-item"),i=a("a-button"),z=a("a-space"),U=a("a-form");return B(),A("div",oe,[e(v,{column:1,size:"medium"},{default:u(()=>[e(d,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[s(D(l.form.payAccount),1)]),_:1}),e(d,{label:"\u6536\u6B3E\u8D26\u6237"},{default:u(()=>[s(D(l.form.recAccount),1)]),_:1}),e(d,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:u(()=>[s(D(l.form.recName),1)]),_:1}),e(d,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:u(()=>[s(D(l.form.amount),1)]),_:1})]),_:1}),e(g,{style:{"border-bottom-style":"dashed"}}),e(U,{ref_key:"formRef",ref:F,size:"medium",model:n(t),"auto-label-width":""},{default:u(()=>[e(b,{field:"password",label:"\u652F\u4ED8\u5BC6\u7801",rules:m.password},{default:u(()=>[e($,{modelValue:n(t).password,"onUpdate:modelValue":f[0]||(f[0]=R=>n(t).password=R),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5BC6\u7801"},null,8,["modelValue"])]),_:1},8,["rules"]),e(b,null,{default:u(()=>[e(z,null,{default:u(()=>[e(i,{type:"primary",loading:n(p),onClick:_},{default:u(()=>[ae]),_:1},8,["loading"]),e(i,{onClick:c},{default:u(()=>[ne]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])}}}));var ce=C(le,[["__scopeId","data-v-d0f9166e"]]);const _e={class:"step-3"},re=s("\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26"),de={class:"info-box"},ie=s("\uFFE5"),me=s("\u5143"),pe=s("\u518D\u8F6C\u4E00\u7B14"),fe=s("\u67E5\u770B\u8D26\u5355"),Fe=y({name:"Step3"}),ve=y(h(x({},Fe),{props:{form:{type:Object,default:()=>({payAccount:"",recAccount:"",payType:1,recName:"",amount:0})}},emits:["again"],setup(l,{emit:o}){const t=()=>{o("again")};return(m,p)=>{const F=a("a-result"),_=a("a-descriptions-item"),c=a("a-statistic"),r=a("a-descriptions"),f=a("a-button"),d=a("a-space"),v=a("a-row");return B(),A("div",_e,[e(F,{status:"success",title:"\u64CD\u4F5C\u6210\u529F"},{subtitle:u(()=>[re]),_:1}),T("section",de,[e(r,{size:"medium",column:1},{default:u(()=>[e(_,{label:"\u4ED8\u6B3E\u8D26\u6237\uFF1A"},{default:u(()=>[s(D(l.form.payAccount),1)]),_:1}),e(_,{label:"\u6536\u6B3E\u8D26\u6237\uFF1A"},{default:u(()=>[s(D(l.form.recAccount),1)]),_:1}),e(_,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D\uFF1A"},{default:u(()=>[s(D(l.form.recName),1)]),_:1}),e(_,{label:"\u8F6C\u8D26\u91D1\u989D\uFF1A"},{default:u(()=>[e(c,{value:l.form.amount,precision:2,"value-from":0,animation:"","animation-duration":600},{prefix:u(()=>[ie]),suffix:u(()=>[me]),_:1},8,["value"])]),_:1})]),_:1})]),e(v,{justify:"center"},{default:u(()=>[e(d,null,{default:u(()=>[e(f,{type:"primary",size:"medium",onClick:t},{default:u(()=>[pe]),_:1}),e(f,{size:"medium"},{default:u(()=>[fe]),_:1})]),_:1})]),_:1})])}}}));var De=C(ve,[["__scopeId","data-v-34a66dd4"]]);const ye={class:"step-form"},Ee={class:"form-box"},Be=s("\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"),Ae=s("\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"),be=s("\u5B8C\u6210\u8F6C\u8D26"),xe=y({setup(l){let o=E(1),t=E({payAccount:"",recAccount:"",payType:1,recName:"",amount:0}),m=E("to-right");const p=_=>{o.value++,_&&(t.value=_)},F=()=>{o.value--};return Q(()=>o.value,(_,c)=>{_>c||_===1&&c===3?m.value="to-right":m.value="to-left"}),(_,c)=>{const r=a("a-step"),f=a("a-steps");return B(),A("div",ye,[T("section",Ee,[e(f,{current:n(o)},{default:u(()=>[e(r,{description:"\u786E\u4FDD\u586B\u5199\u6B63\u786E"},{default:u(()=>[Be]),_:1}),e(r,{description:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"},{default:u(()=>[Ae]),_:1}),e(r,{description:"\u606D\u559C\u60A8\uFF0C\u8F6C\u8D26\u6210\u529F"},{default:u(()=>[be]),_:1})]),_:1},8,["current"]),(B(),A("div",{key:n(o),class:G(n(m))},[w(e(te,{onNext:p},null,512),[[V,n(o)===1]]),w(e(ce,{form:n(t),onNext:p,onPrev:F},null,8,["form"]),[[V,n(o)===2]]),w(e(De,{form:n(t),onAgain:c[0]||(c[0]=d=>H(o)?o.value=1:o=1)},null,8,["form"]),[[V,n(o)===3]])],2))])])}}});var ge=C(xe,[["__scopeId","data-v-6fc5a48c"]]);export{ge as default};
