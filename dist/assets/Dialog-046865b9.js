import{d as N,g as k,Q as V,z as D,r as l,o as c,e as d,w as n,a as s,u as i,h as q,i as _,L as B,_ as I}from"./index-f4aadaae.js";const U=[{title:"图片文件夹",key:"0-0",children:[{title:"图片文件夹1",key:"0-0-0",children:[{title:"图片文件夹1-1",key:"0-0-0-0"},{title:"图片文件夹1-2",key:"0-0-0-1"},{title:"图片文件夹1-3",key:"0-0-0-2"}]},{title:"新建文件夹",key:"0-0-1"},{title:"视频文件夹",key:"0-0-2",children:[{title:"视频文件夹1",key:"0-0-2-0"},{title:"视频文件夹2",key:"0-0-2-1"}]}]},{title:"音频文件夹",key:"0-1"},{title:"音频文件夹1",key:"0-2",children:[{title:"音频文件夹1-1",key:"0-2-0",children:[{title:"音频文件夹1-1-1",key:"0-2-0-0"},{title:"音频文件夹1-1-2",key:"0-2-0-1"}]}]}],$=U,j={class:"tree-box"},F=N({__name:"Dialog",props:{fileInfo:Object,onClose:Function},setup(h,{expose:y}){const m=h,e=k(!1),a=V({path:"/"}),r=k([]);r.value=$,D(()=>{e.value=!0});const p=(v,t)=>{a.path=`/${t.selectedNodes[0].title}`},u=()=>{e.value=!1,m.onClose&&m.onClose()};return y({form:a,visible:e,treeData:r,handleClickNode:p,handleCancel:u}),(v,t)=>{const b=l("a-input"),g=l("a-form-item"),C=l("a-form"),w=l("icon-drive-file"),x=l("a-tree"),z=l("a-modal");return c(),d(z,{title:"移动到",width:"500px",visible:i(e),"onUpdate:visible":t[1]||(t[1]=o=>B(e)?e.value=o:null),"modal-animation-name":"el-dialog","mask-animation-name":"el-mask",onCancel:u},{default:n(()=>[s(C,{model:i(a),style:{width:"100%"},"label-align":"left"},{default:n(()=>[s(g,{field:"path",label:"目标路径：",required:""},{default:n(()=>[s(b,{modelValue:i(a).path,"onUpdate:modelValue":t[0]||(t[0]=o=>i(a).path=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),q("section",j,[s(x,{"show-line":"",size:"mini",blockNode:"",data:i(r),onSelect:p},{"switcher-icon":n((o,{checked:K,selected:L,expanded:f})=>[o.children&&f?(c(),d(_,{key:0,class:"switcher-icon",name:"plus-square",size:16})):o.children&&!f?(c(),d(_,{key:1,class:"switcher-icon",name:"minus-square",size:16,style:{transform:"rotate(0deg)"}})):(c(),d(w,{key:2,size:16}))]),icon:n(()=>[s(_,{name:"menu-zip",size:16})]),_:1},8,["data"])])]),_:1},8,["visible"])}}});const O=I(F,[["__scopeId","data-v-2e3c5de5"]]);export{O as default};
