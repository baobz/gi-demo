import{r as d,o as p,c as f,a as _,b as h,d as g,e as v,A,f as E}from"./vendor.ff035d3f.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};I();var L=(o,t)=>{const a=o.__vccOpts||o;for(const[n,e]of t)a[n]=e;return a};const S={};function y(o,t){const a=d("router-view");return p(),f(a)}var B=L(S,[["render",y]]);const O="modulepreload",u={},P="./",s=function(t,a){return!a||a.length===0?t():Promise.all(a.map(n=>{if(n=`${P}${n}`,n in u)return;u[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":O,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((l,m)=>{i.addEventListener("load",l),i.addEventListener("error",m)})})).then(()=>t())},D=[{path:"/login",name:"Login",component:()=>s(()=>import("./index.8a93f044.js"),["assets/index.8a93f044.js","assets/index.b67671cf.css","assets/vendor.ff035d3f.js"]),meta:{title:"\u767B\u5F55",keepAlive:!1}},{path:"/",redirect:"/home",name:"Layout",component:()=>s(()=>import("./index.9e63674c.js"),["assets/index.9e63674c.js","assets/index.f0cb05ec.css","assets/vendor.ff035d3f.js","assets/avatar.d240db71.js"]),meta:{title:"\u9996\u9875",keepAlive:!1},children:[{path:"/home",name:"Home",component:()=>s(()=>import("./index.e66de730.js"),["assets/index.e66de730.js","assets/index.4aef351e.css","assets/avatar.d240db71.js","assets/vendor.ff035d3f.js"]),meta:{title:"\u9996\u9875",keepAlive:!1}},{path:"/indicator-manage",name:"IndicatorManage",component:()=>s(()=>import("./index.cae8e297.js"),["assets/index.cae8e297.js","assets/index.8c6ae55e.css","assets/vendor.ff035d3f.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406",keepAlive:!1}},{path:"/indicator-manage/add",name:"IndicatorManageAdd",component:()=>s(()=>import("./index.fd4e9f98.js"),["assets/index.fd4e9f98.js","assets/index.d2db47e7.css","assets/vendor.ff035d3f.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406-\u65B0\u589E",keepAlive:!1}},{path:"/indicator-manage/detail",name:"IndicatorManageDetail",component:()=>s(()=>import("./index.18f674e9.js"),["assets/index.18f674e9.js","assets/index.c8b9022e.css","assets/vendor.ff035d3f.js"]),meta:{title:"\u6307\u6807\u7BA1\u7406-\u8BE6\u60C5",keepAlive:!1}},{path:"/user",name:"User",component:()=>s(()=>import("./index.d77e8d96.js"),["assets/index.d77e8d96.js","assets/index.22ac84a3.css","assets/avatar.d240db71.js","assets/vendor.ff035d3f.js"]),meta:{title:"\u4E2A\u4EBA\u4E2D\u5FC3",keepAlive:!1}},{path:"/test",name:"Test",component:()=>s(()=>import("./index.64f651ba.js"),["assets/index.64f651ba.js","assets/index.7c8b6375.css","assets/vendor.ff035d3f.js"]),meta:{title:"\u6D4B\u8BD5\u9875",keepAlive:!1}}]}],T=_({history:h(),routes:D,scrollBehavior:()=>({left:0,top:0})}),k={systemName:"Admin\u7BA1\u7406\u7CFB\u7EDF",ThemeMode:window.localStorage.getItem("ThemeMode")||"light",activePath:JSON.parse(window.localStorage.getItem("ActivePath"))||"/home",menuList:[{icon:"IconRobot",id:"GZT",name:"\u5DE5\u4F5C\u53F0",path:"/home"},{icon:"IconCopyright",id:"ZBGL",name:"\u6307\u6807\u7BA1\u7406",path:"/indicator-manage"},{icon:"IconSettings",id:"ZBGL",name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/user"},{icon:"IconSettings",id:"TEST",name:"\u6D4B\u8BD5",path:"/test"}]},R={storeGetMenuList(o){return o.menuList}},w={storeSetActivePath(o,t){o.activePath=t,window.localStorage.setItem("ActivePath",JSON.stringify(t))},storeSetThemeMode(o,t){o.ThemeMode=t,window.localStorage.setItem("ThemeMode",t)}};var x={namespaced:!0,state:k,getters:R,mutations:w};const V={user:JSON.parse(localStorage.getItem("USER"))||{account:"",deptId:"",email:"",id:"",isAdmin:!1,name:"",phone:""}},j={storeUser(o){return o.user}},C={storeSetUser(o,t){const{id:a,name:n,phone:e}=t;o.user={id:a,name:n,phone:e},localStorage.setItem("USER",JSON.stringify(o.user))}},M={};var F={namespaced:!0,state:V,getters:j,mutations:C,actions:M};const N=g({modules:{app:x,user:F}});const c=v(B);c.use(T);c.use(N);c.use(A);c.use(E);c.mount("#app");export{L as _};