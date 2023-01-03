import{f as V,h as x,j as D,J as S,r as t,o as f,c as b,w as o,a as e,V as v,u as C,ad as U,b as N,e as R,a1 as A,t as T,p as $,d as j,_ as q}from"./_plugin-vue_export-helper-916c4ad5.js";import"./index-03184213.js";import"./index-e4360b37.js";import{a as J}from"./useApiSystem-2731b2c8.js";import{l as L}from"./index-faf5766f.js";import"./index-954a8ef1.js";import"./vue-router-7a234af7.js";import"./runtime-dom.esm-bundler-fb8da9e1.js";const O=V({__name:"EditRoleModal",setup(m,{expose:y}){const i=x(""),k=D(()=>i.value?"编辑角色":"新增角色"),c=x(!1),n=S({name:"",roleCode:"",remarks:""});return y({add:()=>{i.value="",c.value=!0},edit:r=>{i.value=r,c.value=!0}}),(r,a)=>{const d=t("a-input"),p=t("a-form-item"),l=t("a-textarea"),g=t("a-form"),w=t("a-modal");return f(),b(w,{visible:c.value,"onUpdate:visible":a[3]||(a[3]=s=>c.value=s),title:C(k)},{default:o(()=>[e(g,{model:n,size:"medium","auto-label-width":""},{default:o(()=>[e(p,{label:"角色名称",name:"name",field:"name",rules:[{required:!0,message:"请输入角色名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],"validate-trigger":["change","input"]},{default:o(()=>[e(d,{placeholder:"请输入角色名称",modelValue:n.name,"onUpdate:modelValue":a[0]||(a[0]=s=>n.name=s)},null,8,["modelValue"])]),_:1}),e(p,{label:"角色编号",name:"roleCode"},{default:o(()=>[e(d,{placeholder:"请输入角色编号",modelValue:n.roleCode,"onUpdate:modelValue":a[1]||(a[1]=s=>n.roleCode=s)},{prepend:o(()=>[v("role_")]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"描述",name:"remarks"},{default:o(()=>[e(l,{modelValue:n.remarks,"onUpdate:modelValue":a[2]||(a[2]=s=>n.remarks=s),placeholder:"角色描述","auto-size":{minRows:3,maxRows:5}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])}}}),W=m=>($("data-v-728eeb34"),m=m(),j(),m),F={class:"role-manage"},G=W(()=>R("span",null,"新增角色",-1)),H={class:"table-box"},K=V({name:"RoleManage"}),P=V({...K,setup(m){const y=x(!1),i=x(),{roleList:k}=J(),c=()=>{var _;(_=i.value)==null||_.add()},n=_=>{var r;(r=i.value)==null||r.edit(_.id)},h=()=>{L.info("点击了确认按钮")};return(_,r)=>{const a=t("icon-plus"),d=t("a-button"),p=t("a-row"),l=t("a-table-column"),g=t("a-tag"),w=t("icon-delete"),s=t("a-popconfirm"),I=t("icon-edit"),M=t("icon-safe"),z=t("a-space"),E=t("a-table"),B=U("loading");return f(),N("div",F,[e(p,{class:"head"},{default:o(()=>[e(d,{type:"primary",onClick:c},{icon:o(()=>[e(a)]),default:o(()=>[G]),_:1})]),_:1}),R("section",H,[A((f(),b(E,{data:C(k),"row-key":"id",scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1},{columns:o(()=>[e(l,{title:"序号",width:60},{cell:o(u=>[v(T(u.rowIndex+1),1)]),_:1}),e(l,{title:"角色名称","data-index":"name"}),e(l,{title:"角色编号","data-index":"roleCode"}),e(l,{title:"状态",width:100},{cell:o(({record:u})=>[u.status==1?(f(),b(g,{key:0,color:"green"},{default:o(()=>[v("正常")]),_:1})):(f(),b(g,{key:1,color:"red"},{default:o(()=>[v("禁用")]),_:1}))]),_:1}),e(l,{title:"角色描述","data-index":"description"}),e(l,{title:"创建时间","data-index":"createTime"}),e(l,{title:"操作",width:220,align:"center"},{cell:o(({record:u})=>[e(z,null,{default:o(()=>[e(s,{type:"warning",content:"您确定要删除该项吗?",onOk:h},{default:o(()=>[e(d,{type:"primary",status:"danger",size:"mini"},{icon:o(()=>[e(w)]),_:1})]),_:1}),e(d,{type:"primary",size:"mini",onClick:Q=>n(u)},{icon:o(()=>[e(I)]),_:2},1032,["onClick"]),e(d,{type:"primary",status:"success",size:"mini"},{icon:o(()=>[e(M)]),default:o(()=>[v("菜单权限")]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[B,y.value]])]),e(O,{ref_key:"EditRoleModalRef",ref:i},null,512)])}}});const le=q(P,[["__scopeId","data-v-728eeb34"]]);export{le as default};
