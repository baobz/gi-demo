var b=Object.defineProperty,g=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))m.call(e,o)&&r(t,o,e[o]);if(a)for(var o of a(e))x.call(e,o)&&r(t,o,e[o]);return t},i=(t,e)=>g(t,u(e));import{d,g as l,o as f,c as h,b as n,w as c,a as v,y,s as w,Q as S,_ as k}from"./index.fe796c6c.js";const z={class:"gi-title"},G={class:"title"},B=d({name:"GiTitle"}),C=d(i(s({},B),{props:{title:{type:String,default:""},borderStyle:{type:String,default:"dashed"}},setup(t){const e=t;return(o,T)=>{const _=l("a-space"),p=l("a-row");return f(),h("div",z,[n(p,{justify:"space-between",align:"center",class:"wrapper",style:S({"border-bottom-style":t.borderStyle})},{default:c(()=>[v("h3",G,y(e.title),1),n(_,null,{default:c(()=>[w(o.$slots,"default",{},void 0,!0)]),_:3})]),_:3},8,["style"])])}}}));var j=k(C,[["__scopeId","data-v-9c59e1ba"]]);export{j as G};