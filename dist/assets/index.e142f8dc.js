import{g,x as I,u as z,y as F,r as t,o as i,c as _,n as c,l as r,j as B,z as L,B as j,t as E,C as N,m as S,F as H,q as M,s as P,k as y,i as V,D as K,E as O,G as U,H as J}from"./vendor.f51fca5b.js";import{_ as b}from"./index.03971a68.js";import{_ as Q}from"./avatar.d240db71.js";const W=l=>(M("data-v-53be9d8c"),l=l(),P(),l),X=W(()=>y("div",{class:"logo"},null,-1)),Y=g({setup(l){const s=I(),u=z(),o=F(()=>s.state.app.menuList),p=F(()=>s.state.app.activePath),m=e=>{s.commit("app/storeSetActivePath",e.path),u.push(e.path)};return(e,a)=>{const n=t("a-menu-item"),d=t("a-menu"),f=t("IconCaretRight"),v=t("IconCaretLeft"),w=t("a-layout-sider");return i(),_(w,{collapsible:"",breakpoint:"xl",class:"gi-aside"},{trigger:c(({collapsed:h})=>[h?(i(),_(f,{key:0})):(i(),_(v,{key:1}))]),default:c(()=>[X,r(d,{defaultSelectedKeys:[S(p)],style:{width:"100%",height:"100%"}},{default:c(()=>[(i(!0),B(H,null,L(S(o),h=>(i(),_(n,{key:h.path,onClick:C=>m(h)},{default:c(()=>[(i(),_(j(h.icon))),E(" "+N(h.name),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["defaultSelectedKeys"])]),_:1})}}});var Z=b(Y,[["__scopeId","data-v-53be9d8c"]]),q={exports:{}};/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/(function(l){(function(){var s=typeof window!="undefined"&&typeof window.document!="undefined"?window.document:{},u=l.exports,o=function(){for(var e,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,d=a.length,f={};n<d;n++)if(e=a[n],e&&e[1]in s){for(n=0;n<e.length;n++)f[a[0][n]]=e[n];return f}return!1}(),p={change:o.fullscreenchange,error:o.fullscreenerror},m={request:function(e,a){return new Promise(function(n,d){var f=function(){this.off("change",f),n()}.bind(this);this.on("change",f),e=e||s.documentElement;var v=e[o.requestFullscreen](a);v instanceof Promise&&v.then(f).catch(d)}.bind(this))},exit:function(){return new Promise(function(e,a){if(!this.isFullscreen){e();return}var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n);var d=s[o.exitFullscreen]();d instanceof Promise&&d.then(n).catch(a)}.bind(this))},toggle:function(e,a){return this.isFullscreen?this.exit():this.request(e,a)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,a){var n=p[e];n&&s.addEventListener(n,a,!1)},off:function(e,a){var n=p[e];n&&s.removeEventListener(n,a,!1)},raw:o};if(!o){u?l.exports={isEnabled:!1}:window.screenfull={isEnabled:!1};return}Object.defineProperties(m,{isFullscreen:{get:function(){return Boolean(s[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return s[o.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(s[o.fullscreenEnabled])}}}),u?l.exports=m:window.screenfull=m})()})(q);var x=q.exports;const ee=g({setup(l){const s=V(!1),u=()=>{s.value=x.isFullscreen},o=()=>{x.toggle()};return K(()=>{x.on("change",u)}),O(()=>{x.off("change",u)}),(p,m)=>{const e=t("icon-fullscreen"),a=t("icon-fullscreen-exit");return i(),B("span",{class:"gi-fullscreen-icon",onClick:o},[s.value?(i(),_(a,{key:1,style:{"font-size":"18px"}})):(i(),_(e,{key:0,style:{"font-size":"18px"}}))])}}});var ne=b(ee,[["__scopeId","data-v-44fe8dd2"]]);const k=l=>(M("data-v-4f0a5d59"),l=l(),P(),l),te=k(()=>y("section",{class:"sys-name"},"Admin\u7BA1\u7406\u7CFB\u7EDF",-1)),oe=E("\u6D88\u606F\u901A\u77E5"),se=k(()=>y("img",{src:Q},null,-1)),ce=E("admin"),re=k(()=>y("span",{style:{"margin-left":"4px"}},"\u4E2A\u4EBA\u4E2D\u5FC3",-1)),ae=k(()=>y("span",{style:{"margin-left":"4px"}},"\u9000\u51FA\u767B\u5F55",-1)),le=g({setup(l){const s=z(),u=I(),o=F(()=>u.state.app.ThemeMode),p=()=>{o.value==="light"?(u.commit("app/storeSetThemeMode","dark"),document.body.setAttribute("arco-theme","dark")):(u.commit("app/storeSetThemeMode","light"),document.body.removeAttribute("arco-theme"))};(()=>{o.value==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")})();const e=()=>{U.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{s.replace("/login")}})};return(a,n)=>{const d=t("icon-notification"),f=t("a-popover"),v=t("icon-sun-fill"),w=t("icon-moon-fill"),h=t("a-button"),C=t("a-avatar"),G=t("icon-user"),A=t("a-doption"),T=t("icon-export"),R=t("a-dropdown"),$=t("a-space"),D=t("a-layout-header");return i(),_(D,null,{default:c(()=>[te,r($,{class:"sys-head",size:"medium"},{default:c(()=>[r(f,{position:"bl"},{content:c(()=>[oe]),default:c(()=>[r(d,{class:"gi_hover",style:{"font-size":"18px"}})]),_:1}),r(ne),r(h,{size:"mini",onClick:p},{icon:c(()=>[S(o)==="light"?(i(),_(v,{key:0})):(i(),_(w,{key:1}))]),_:1}),r(C,{size:32},{default:c(()=>[se]),_:1}),r(R,{trigger:"hover"},{content:c(()=>[r(A,null,{icon:c(()=>[r(G)]),default:c(()=>[re]),_:1}),r(A,{onClick:e},{icon:c(()=>[r(T)]),default:c(()=>[ae]),_:1})]),default:c(()=>[r(h,{type:"text",class:"username"},{default:c(()=>[ce]),_:1})]),_:1})]),_:1})]),_:1})}}});var ie=b(le,[["__scopeId","data-v-4f0a5d59"]]);const ue=g({setup(l){const s=J();return F(()=>s.path),(u,o)=>{const p=t("router-view"),m=t("a-layout");return i(),_(m,{class:"gi-main"},{default:c(()=>[r(p)]),_:1})}}});var _e=b(ue,[["__scopeId","data-v-1ac09226"]]);const de=g({setup(l){return(s,u)=>{const o=t("a-layout");return i(),_(o,{class:"gi-layout"},{default:c(()=>[r(Z),r(o,null,{default:c(()=>[r(ie),r(_e)]),_:1})]),_:1})}}});var he=b(de,[["__scopeId","data-v-30bad68a"]]);export{he as default};
