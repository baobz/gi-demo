import{_ as u}from"./index.03971a68.js";import{g as d,o as s,j as o,F as _,z as i,I as c,C as p,i as v,l as f,m,p as x}from"./vendor.f51fca5b.js";const g={class:"gi-text-radio"},y=["onClick"],b=d({props:{modelValue:{type:[Number,String],default:""},list:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(n,{emit:t}){const a=l=>{t("update:modelValue",l.value),t("change",l)};return(l,r)=>(s(),o("div",g,[(s(!0),o(_,null,i(n.list,e=>(s(),o("div",{class:c(["item",{active:e.value===n.modelValue}]),key:e.value,onClick:k=>a(e)},p(e.label),11,y))),128))]))}});var C=u(b,[["__scopeId","data-v-b0c3a6fe"]]);const V={class:"gi_box test"},h=d({setup(n){const t=[{label:"\u560E\u560E",value:"01"},{label:"\u54C8\u54C8",value:"02"}];let a=v("01");return(l,r)=>(s(),o("div",V,[f(C,{list:t,modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=e=>x(a)?a.value=e:a=e)},null,8,["modelValue"])]))}});var I=u(h,[["__scopeId","data-v-5cb1fad9"]]);export{I as default};