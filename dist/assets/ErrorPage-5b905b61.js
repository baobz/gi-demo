import{u as p}from"./vue-router-7a234af7.js";import{f as n,h as c,l as u,W as v,r as m,o as h,b as f,e,a as b,w as g,V as x,t as I,p as k,d as w,_ as y}from"./_plugin-vue_export-helper-916c4ad5.js";const a=s=>(k("data-v-506e4a8b"),s=s(),w(),s),C={class:"error-page"},E={class:"container"},B={class:"img-box"},S=["src"],V={class:"tip-box"},D=a(()=>e("div",{class:"ops"},"抱歉!",-1)),N=a(()=>e("div",{class:"tip"},"当前页面不存在...",-1)),P=a(()=>e("div",{class:"info"},"请检查您输入的网址是否正确，或点击下面的按钮返回首页",-1)),T=n({name:"ErrorPage"}),z=n({...T,props:{src:{default:""}},setup(s){const r=s,_=p(),o=c(5),t=c(0);u(()=>{l()}),v(()=>{clearInterval(t.value)});const i=()=>{_.back()},l=()=>{t.value=setInterval(()=>{o.value?o.value--:clearInterval(t.value)},1e3)};return(M,R)=>{const d=m("a-button");return h(),f("div",C,[e("section",E,[e("div",B,[e("img",{class:"img-parent",src:r.src},null,8,S)]),e("div",V,[D,N,P,b(d,{type:"primary",shape:"round",size:"large",onClick:i},{default:g(()=>[x(I(o.value)+" 返回首页",1)]),_:1})])])])}}});const j=y(z,[["__scopeId","data-v-506e4a8b"]]);export{j as E};
