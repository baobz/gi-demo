var h=Object.defineProperty,B=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var _=(e,s,a)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,d=(e,s)=>{for(var a in s||(s={}))F.call(s,a)&&_(e,a,s[a]);if(r)for(var a of r(s))D.call(s,a)&&_(e,a,s[a]);return e},i=(e,s)=>B(e,x(s));import{_ as E,d as p,f as l,r as b,k as C,ad as I,g as k,o as w,c as y,a as t,u as n,b as P,w as S,h as N,v as T,p as V,e as A,L as M,j as R}from"./index.a007832b.js";var j="/gi-demo/assets/403.231745f4.svg",z="/gi-demo/assets/404.ca8b86de.svg",L="/gi-demo/assets/500.d7d89683.svg";const c=e=>(V("data-v-6d4797f4"),e=e(),A(),e),U={class:"error-page"},q={class:"container"},G={class:"img-box"},H=["src"],J={class:"tip-box"},K=c(()=>t("div",{class:"ops"},"\u62B1\u6B49!",-1)),O=c(()=>t("div",{class:"tip"},"\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728...",-1)),Q=c(()=>t("div",{class:"info"},"\u8BF7\u68C0\u67E5\u60A8\u8F93\u5165\u7684\u7F51\u5740\u662F\u5426\u6B63\u786E\uFF0C\u6216\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8FD4\u56DE\u9996\u9875",-1)),W=p({name:"ErrorPage"}),X=p(i(d({},W),{setup(e){const s=M(),a=R();let o=l(5),u=l(0);const v=b({403:j,404:z,500:L});C(()=>{g()}),I(()=>{clearInterval(u.value)});const m=()=>{a.back()},g=()=>{u.value=setInterval(()=>{o.value?o.value--:clearInterval(u.value)},1e3)};return(Y,Z)=>{const f=k("a-button");return w(),y("div",U,[t("section",q,[t("div",G,[t("img",{class:"img-parent",src:n(v)[n(s).params.id||404]},null,8,H)]),t("div",J,[K,O,Q,P(f,{type:"primary",shape:"round",size:"large",onClick:m},{default:S(()=>[N(T(n(o))+" \u8FD4\u56DE\u9996\u9875",1)]),_:1})])])])}}}));var se=E(X,[["__scopeId","data-v-6d4797f4"]]);export{se as default};