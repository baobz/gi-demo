import{d as f,r as k,g as v,h as o,o as C,c as U,b as e,a as _,w as u,I as A,j as n,p as w,e as I,_ as R}from"./index.64ef6439.js";const S=s=>(w("data-v-ea43eeb1"),s=s(),I(),s),N={class:"form-manage"},T={class:"content"},z=S(()=>_("div",null,"\u8BF7\u8F93\u5165\u4E2D\u6587\u59D3\u540D",-1)),j=n("\u7537"),q=n("\u5973"),L=n("\u672C\u79D1"),G=n("\u5927\u4E13"),H=n("\u7855\u58EB"),J=n("\u6211\u5DF2\u9605\u8BFB"),K=n("\u91CD\u7F6E"),M=n("\u63D0\u4EA4"),O=f({name:"BaseForm"}),P=f({...O,setup(s){const F=k([{key:"01",title:"\u5B66\u751F\u4F1A",children:[{key:"011",title:"\u7EC4\u7EC7\u90E8"},{key:"012",title:"\u5BA3\u4F20\u90E8"}]},{key:"02",title:"\u4F53\u80B2\u90E8",children:[{key:"021",title:"\u5BA3\u4F20\u90E8"},{key:"022",title:"\u7B56\u5212\u90E8"},{key:"023",title:"\u7EC4\u7EC7\u90E8"}]}]),a=v({name:"",age:"",sex:"1",birthday:"",grade:"1",rangDate:[],dept:[],startTime:"",endTime:"",isRead:!1}),E={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"},{maxLength:4,message:"\u59D3\u540D\u4E0D\u8D85\u8FC74\u4E2A\u5B57\u7B26"}]};return(Q,t)=>{const g=o("a-page-header"),r=o("a-input"),d=o("a-form-item"),m=o("a-radio"),V=o("a-radio-group"),B=o("a-date-picker"),D=o("a-tree-select"),i=o("a-option"),b=o("a-select"),h=o("a-range-picker"),x=o("a-checkbox"),p=o("a-button"),c=o("a-space"),y=o("a-form");return C(),U("div",N,[e(g,{title:"\u57FA\u7840\u8868\u5355",subtitle:"Base Form","show-back":!1}),_("section",T,[e(c,{size:50},{default:u(()=>[e(y,{model:a,size:"small",class:"form"},{default:u(()=>[e(d,{field:"name",label:"\u59D3\u540D",rules:E.name,"validate-trigger":["change","input"]},{extra:u(()=>[z]),default:u(()=>[e(r,{modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=l=>a.name=l),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules"]),e(d,{field:"age",label:"\u5E74\u9F84"},{default:u(()=>[e(r,{modelValue:a.age,"onUpdate:modelValue":t[1]||(t[1]=l=>a.age=l),placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1}),e(d,{field:"sex",label:"\u6027\u522B"},{default:u(()=>[e(V,{modelValue:a.sex,"onUpdate:modelValue":t[2]||(t[2]=l=>a.sex=l)},{default:u(()=>[e(m,{value:"1"},{default:u(()=>[j]),_:1}),e(m,{value:"2"},{default:u(()=>[q]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{field:"birthday",label:"\u751F\u65E5"},{default:u(()=>[e(B,{modelValue:a.birthday,"onUpdate:modelValue":t[3]||(t[3]=l=>a.birthday=l),placeholder:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),e(d,{field:"dept",label:"\u90E8\u95E8"},{default:u(()=>[e(D,{data:F.value,modelValue:a.dept,"onUpdate:modelValue":t[4]||(t[4]=l=>a.dept=l),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8"},null,8,["data","modelValue"])]),_:1}),e(d,{field:"grade",label:"\u5B66\u5386"},{default:u(()=>[e(b,{modelValue:a.grade,"onUpdate:modelValue":t[5]||(t[5]=l=>a.grade=l),placeholder:"\u8BF7\u9009\u62E9\u5B66\u5386",style:{width:"120px"}},{default:u(()=>[e(i,{value:"1"},{default:u(()=>[L]),_:1}),e(i,{value:"2"},{default:u(()=>[G]),_:1}),e(i,{value:"3"},{default:u(()=>[H]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{field:"rangDate",label:"\u5728\u6821\u65E5\u671F\u8303\u56F4"},{default:u(()=>[e(h,{modelValue:a.rangDate,"onUpdate:modelValue":t[6]||(t[6]=l=>a.rangDate=l)},null,8,["modelValue"])]),_:1}),e(d,{field:"isRead"},{default:u(()=>[e(x,{modelValue:a.isRead,"onUpdate:modelValue":t[7]||(t[7]=l=>a.isRead=l)},{default:u(()=>[J]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:u(()=>[e(c,null,{default:u(()=>[e(p,null,{default:u(()=>[K]),_:1}),e(p,{type:"primary"},{default:u(()=>[M]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),_("div",null,[_("pre",null,A(a),1)])]),_:1})])])}}});const X=R(P,[["__scopeId","data-v-ea43eeb1"]]);export{X as default};
