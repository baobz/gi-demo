import{d as n,s as p,h as c,B as u,C as v,a as m,o as h,i as f,g as e,b as g,w as b,e as x,f as I,l as C,t as k,_ as w}from"./index-ad0224cd.js";const a=s=>(x("data-v-506e4a8b"),s=s(),I(),s),y={class:"error-page"},B={class:"container"},E={class:"img-box"},S=["src"],D={class:"tip-box"},N=a(()=>e("div",{class:"ops"},"抱歉!",-1)),P=a(()=>e("div",{class:"tip"},"当前页面不存在...",-1)),T=a(()=>e("div",{class:"info"},"请检查您输入的网址是否正确，或点击下面的按钮返回首页",-1)),V=n({name:"ErrorPage"}),z=n({...V,props:{src:{default:""}},setup(s){const r=s,_=p(),o=c(5),t=c(0);u(()=>{l()}),v(()=>{clearInterval(t.value)});const i=()=>{_.back()},l=()=>{t.value=setInterval(()=>{o.value?o.value--:clearInterval(t.value)},1e3)};return(M,R)=>{const d=m("a-button");return h(),f("div",y,[e("section",B,[e("div",E,[e("img",{class:"img-parent",src:r.src},null,8,S)]),e("div",D,[N,P,T,g(d,{type:"primary",shape:"round",size:"large",onClick:i},{default:b(()=>[C(k(o.value)+" 返回首页",1)]),_:1})])])])}}});const j=w(z,[["__scopeId","data-v-506e4a8b"]]);export{j as E};