import{d as w,g as x,Q as b,z as g,r as a,o as y,e as V,w as t,a as l,u as s,L as D,_ as I}from"./index-f4aadaae.js";const h=w({__name:"Dialog",props:{fileInfo:Object,onClose:Function},setup(d,{expose:c}){var r;const _=d,e=x(!1),o=b({name:""});o.name=((r=_.fileInfo)==null?void 0:r.name)||"",g(()=>{e.value=!0});const m=()=>{e.value=!1,_.onClose&&_.onClose()};return c({form:o,visible:e,handleCancel:m}),(j,n)=>{const u=a("a-input"),f=a("a-form-item"),p=a("a-form"),v=a("a-row"),C=a("a-modal");return y(),V(C,{title:"重命名",width:"500px",visible:s(e),"onUpdate:visible":n[1]||(n[1]=i=>D(e)?e.value=i:null),"modal-animation-name":"el-fade",onCancel:m},{default:t(()=>[l(v,{justify:"center",align:"center"},{default:t(()=>[l(p,{model:s(o),style:{width:"80%"}},{default:t(()=>[l(f,{field:"name",label:"文件名称：",required:""},{default:t(()=>[l(u,{modelValue:s(o).name,"onUpdate:modelValue":n[0]||(n[0]=i=>s(o).name=i),placeholder:"请输入","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["visible"])}}});const B=I(h,[["__scopeId","data-v-60763475"]]);export{B as default};
