import{_ as e}from"./index-e80b15a4.js";import{d as l,g as a,l as d,N as t,r as u,o,e as n,w as s,a as i,u as m,f as p,E as r,H as f}from"./index-b67f5b14.js";const _=l({__name:"AddMenuModal",setup(l,{expose:_}){const V=a(),c=a(""),y=a(!1),b=d((()=>c.value?"编辑菜单":"新增菜单")),h=t({type:1,icon:"",title:"",sort:0,permission:"",path:"",name:"",isExternal:!1,component:"",isCache:!1,isHidden:!1,parentId:""}),v={title:[{required:!0,message:"请输入菜单标题"}],path:[{required:!0,message:"请输入路由地址"}],name:[{required:!0,message:"请输入组件名称"}],component:[{required:!0,message:"请输入组件路径"}],permission:[{required:!0,message:"请输入权限标识"}],sort:[{required:!0,message:"请输入菜单排序"}]};return _({add:()=>{c.value="",y.value=!0},edit:async e=>{c.value=e,y.value=!0}}),(l,a)=>{const d=u("a-radio"),t=u("a-radio-group"),_=u("a-form-item"),c=e,U=u("a-input"),g=u("a-col"),k=u("a-input-number"),x=u("a-row"),E=u("a-tree-select"),q=u("a-form"),w=u("a-modal");return o(),n(w,{title:m(b),visible:m(y),"onUpdate:visible":a[12]||(a[12]=e=>f(y)?y.value=e:null),width:625,"mask-closable":!1,"unmount-on-close":"","render-to-body":""},{default:s((()=>[i(q,{ref_key:"FormRef",ref:V,model:m(h),rules:v,"auto-label-width":""},{default:s((()=>[i(_,{label:"菜单类型",field:"type"},{default:s((()=>[i(t,{modelValue:m(h).type,"onUpdate:modelValue":a[0]||(a[0]=e=>m(h).type=e),type:"button"},{default:s((()=>[i(d,{value:1},{default:s((()=>[p("目录")])),_:1}),i(d,{value:2},{default:s((()=>[p("菜单")])),_:1}),i(d,{value:3},{default:s((()=>[p("按钮")])),_:1})])),_:1},8,["modelValue"])])),_:1}),3!==m(h).type?(o(),n(_,{key:0,label:"菜单图标",field:"icon"},{default:s((()=>[i(c,{modelValue:m(h).icon,"onUpdate:modelValue":a[1]||(a[1]=e=>m(h).icon=e)},null,8,["modelValue"])])),_:1})):r("",!0),i(x,{gutter:16},{default:s((()=>[i(g,{span:12},{default:s((()=>[i(_,{label:"菜单标题",field:"title"},{default:s((()=>[i(U,{modelValue:m(h).title,"onUpdate:modelValue":a[2]||(a[2]=e=>m(h).title=e),placeholder:"请输入菜单标题"},null,8,["modelValue"])])),_:1})])),_:1}),i(g,{span:12},{default:s((()=>[i(_,{label:"菜单排序",field:"sort"},{default:s((()=>[i(k,{modelValue:m(h).sort,"onUpdate:modelValue":a[3]||(a[3]=e=>m(h).sort=e),placeholder:"请输入菜单排序",min:1,mode:"button"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),1!==m(h).type?(o(),n(_,{key:1,label:"权限标识",field:"permission"},{default:s((()=>[i(U,{modelValue:m(h).permission,"onUpdate:modelValue":a[4]||(a[4]=e=>m(h).permission=e),placeholder:"请输入权限标识"},null,8,["modelValue"])])),_:1})):r("",!0),3!==m(h).type?(o(),n(_,{key:2,label:"路由地址",field:"path"},{default:s((()=>[i(U,{modelValue:m(h).path,"onUpdate:modelValue":a[5]||(a[5]=e=>m(h).path=e),placeholder:"请输入路由地址"},null,8,["modelValue"])])),_:1})):r("",!0),i(x,{gutter:16},{default:s((()=>[i(g,{span:12},{default:s((()=>[m(h).isExternal||2!==m(h).type?r("",!0):(o(),n(_,{key:0,label:"组件名称",field:"name"},{default:s((()=>[i(U,{modelValue:m(h).name,"onUpdate:modelValue":a[6]||(a[6]=e=>m(h).name=e),placeholder:"请输入组件名称"},null,8,["modelValue"])])),_:1}))])),_:1}),i(g,{span:12},{default:s((()=>[m(h).isExternal||2!==m(h).type?r("",!0):(o(),n(_,{key:0,label:"组件路径",field:"component"},{default:s((()=>[i(U,{modelValue:m(h).component,"onUpdate:modelValue":a[7]||(a[7]=e=>m(h).component=e),placeholder:"请输入组件路径"},null,8,["modelValue"])])),_:1}))])),_:1})])),_:1}),i(x,{gutter:16},{default:s((()=>[i(g,{span:12},{default:s((()=>[3!==m(h).type?(o(),n(_,{key:0,label:"是否外链",field:"isExternal"},{default:s((()=>[i(t,{modelValue:m(h).isExternal,"onUpdate:modelValue":a[8]||(a[8]=e=>m(h).isExternal=e),type:"button"},{default:s((()=>[i(d,{value:!0},{default:s((()=>[p("是")])),_:1}),i(d,{value:!1},{default:s((()=>[p("否")])),_:1})])),_:1},8,["modelValue"])])),_:1})):r("",!0)])),_:1}),i(g,{span:12},{default:s((()=>[2===m(h).type?(o(),n(_,{key:0,label:"是否缓存",field:"isCache"},{default:s((()=>[i(t,{modelValue:m(h).isCache,"onUpdate:modelValue":a[9]||(a[9]=e=>m(h).isCache=e),type:"button"},{default:s((()=>[i(d,{value:!0},{default:s((()=>[p("是")])),_:1}),i(d,{value:!1},{default:s((()=>[p("否")])),_:1})])),_:1},8,["modelValue"])])),_:1})):r("",!0)])),_:1})])),_:1}),3!==m(h).type?(o(),n(_,{key:3,label:"是否隐藏",field:"isHidden"},{default:s((()=>[i(t,{modelValue:m(h).isHidden,"onUpdate:modelValue":a[10]||(a[10]=e=>m(h).isHidden=e),type:"button"},{default:s((()=>[i(d,{value:!0},{default:s((()=>[p("是")])),_:1}),i(d,{value:!1},{default:s((()=>[p("否")])),_:1})])),_:1},8,["modelValue"])])),_:1})):r("",!0),i(_,{label:"上级菜单",field:"parentId"},{default:s((()=>[i(E,{modelValue:m(h).parentId,"onUpdate:modelValue":a[11]||(a[11]=e=>m(h).parentId=e),placeholder:"请选择上级菜单","allow-clear":"","allow-search":"","fallback-option":!1},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title","visible"])}}});export{_};
