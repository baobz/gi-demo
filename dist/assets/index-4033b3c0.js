import{d as x,g as d,r as i,o as a,c as y,h as C,a as t,w as o,f as r,u as c,e as m,M as N,G as A,T as B,_ as S}from"./index-f4aadaae.js";import T from"./Step1-cad3cde1.js";import g from"./Step2-431381b8.js";import h from"./Step3-9e02c5ad.js";const k={class:"step-form"},V={class:"form-box"},w=x({name:"FormStep",__name:"index",setup(M){const l={1:T,2:g,3:h},e=d(1),p=d({payAccount:"",recAccount:"",payType:1,recName:"",amount:""}),u=n=>{e.value++,n&&(p.value=n)},f=()=>{e.value--};return(n,_)=>{const s=i("a-step"),v=i("a-steps");return a(),y("div",k,[C("section",V,[t(v,{current:c(e)},{default:o(()=>[t(s,{description:"确保填写正确"},{default:o(()=>[r("填写转账信息")]),_:1}),t(s,{description:"确认转账信息"},{default:o(()=>[r("确认转账信息")]),_:1}),t(s,{description:"恭喜您，转账成功"},{default:o(()=>[r("完成转账")]),_:1})]),_:1},8,["current"]),t(B,{name:"fade-slide",mode:"out-in",appear:""},{default:o(()=>[(a(),m(N,null,[(a(),m(A(l[c(e)]),{form:c(p),onNext:u,onPrev:f,onAgain:_[0]||(_[0]=b=>e.value=1)},null,40,["form"]))],1024))]),_:1})])])}}});const K=S(w,[["__scopeId","data-v-dd88ae81"]]);export{K as default};
