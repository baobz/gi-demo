import{_ as j,a as E}from"./logo.1bac670e.js";import{r as w,d as _,o as p,c as f,a as o,b as e,p as C,e as $,_ as b,u as Z,f as A,g as P,h as n,w as s,i as R,j as m,M as y}from"./index.64ef6439.js";import"./index.463d26de.js";import"./viewer.8a0458a1.js";import"./index.baea6f5b.js";function Y(t=!1){const l=w(t);return{loading:l,setLoading:d=>{l.value=d},toggle:()=>{l.value=!l.value}}}const q="/gi-demo/assets/login-img.1c12ae60.svg",H={height:"1337",width:"1337"},J=o("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),K={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},O=["stop-color"],Q=["stop-color"],W=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),X=_({__name:"CornerTop",props:{startColor:{type:String,default:"#28aff0"},endColor:{type:String,default:"#120fc4"}},setup(t){return(l,c)=>(p(),f("svg",H,[o("defs",null,[J,o("linearGradient",K,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,O),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,Q)])]),W]))}}),oo={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"896",width:"967.8852157128662"},eo=o("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),to={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},so=["stop-color"],no=["stop-color"],lo=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),ao=_({__name:"CornerBottom",props:{startColor:{type:String,default:"#28aff0"},endColor:{type:String,default:"#120fc4"}},setup(t){return(l,c)=>(p(),f("svg",oo,[o("defs",null,[eo,o("linearGradient",to,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,so),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,no)])]),lo]))}}),g=t=>(C("data-v-9d91e2cc"),t=t(),$(),t),io={class:"login-bg"},co={class:"corner-top-box"},ro={class:"corner-bottom-box"},_o=g(()=>o("div",{class:"fly bg-fly-circle1"},null,-1)),uo=g(()=>o("div",{class:"fly bg-fly-circle2"},null,-1)),po=g(()=>o("div",{class:"fly bg-fly-circle3"},null,-1)),fo=g(()=>o("div",{class:"fly bg-fly-circle4"},null,-1)),mo=_({__name:"index",props:{themeColor:null},setup(t){return(l,c)=>(p(),f("div",io,[o("div",co,[e(X)]),o("div",ro,[e(ao)]),_o,uo,po,fo]))}});const go=b(mo,[["__scopeId","data-v-9d91e2cc"]]),B=t=>(C("data-v-8725ad74"),t=t(),$(),t),ho={class:"login"},yo={class:"login-box animated flipInY"},wo=B(()=>o("div",{class:"login-left"},[o("img",{class:"login-img",src:q})],-1)),xo={class:"login-right"},vo=B(()=>o("h3",{class:"login-form-title"},[o("img",{class:"logo",src:j}),o("span",null,"Admin Pro")],-1)),Co=m("\u8BB0\u4F4F\u5BC6\u7801"),$o=m("\u5FD8\u8BB0\u5BC6\u7801"),bo=m("\u767B\u5F55"),Bo=m("\u6CE8\u518C\u8D26\u53F7"),ko=_({name:"Login"}),Fo=_({...ko,setup(t){const l=Z(),c=A(),a=P({username:"admin",password:"123456"}),d=w(!1),{loading:k,setLoading:h}=Y(),F=w(""),S=async()=>{try{if(!a.username)return y.warning("\u8BF7\u8F93\u5165\u8D26\u6237\u540D\u79F0");if(!a.password)return y.warning("\u8BF7\u8F93\u5165\u8D26\u6237\u5BC6\u7801");h(!0),await c.login(a),l.push("/home"),h(!1),y.success("\u767B\u5F55\u6210\u529F")}catch(x){F.value=x.message}finally{h(!1)}};return(x,i)=>{const V=n("icon-user"),G=n("a-input"),u=n("a-form-item"),I=n("icon-lock"),z=n("a-input-password"),D=n("a-checkbox"),L=n("a-link"),M=n("a-row"),v=n("a-button"),U=n("a-space"),N=n("a-form"),T=E;return p(),f("div",ho,[o("section",yo,[wo,o("div",xo,[e(N,{model:a,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:s(()=>[vo,e(u,{field:"username"},{default:s(()=>[e(G,{modelValue:a.username,"onUpdate:modelValue":i[0]||(i[0]=r=>a.username=r),placeholder:"\u8D26\u53F7",size:"medium","allow-clear":""},{prefix:s(()=>[e(V,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1}),e(u,{field:"password"},{default:s(()=>[e(z,{modelValue:a.password,"onUpdate:modelValue":i[1]||(i[1]=r=>a.password=r),placeholder:"\u5BC6\u7801",size:"medium","allow-clear":""},{prefix:s(()=>[e(I,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:s(()=>[e(M,{justify:"space-between",align:"center",style:{width:"100%"}},{default:s(()=>[e(D,{modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=r=>d.value=r)},{default:s(()=>[Co]),_:1},8,["modelValue"]),e(L,null,{default:s(()=>[$o]),_:1})]),_:1})]),_:1}),e(u,null,{default:s(()=>[e(U,{direction:"vertical",fill:"",style:{width:"100%"}},{default:s(()=>[e(v,{type:"primary",size:"large",long:"",loading:R(k),onClick:S},{default:s(()=>[bo]),_:1},8,["loading"]),e(v,{type:"text",size:"large",long:"",class:"register-btn"},{default:s(()=>[Bo]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])]),e(T,{class:"theme-btn"}),e(go)])}}});const Do=b(Fo,[["__scopeId","data-v-8725ad74"]]);export{Do as default};
