import{u as e}from"./useDept-834b41f1.js";import{d as a,g as l,l as t,N as d,r as u,o as s,e as o,w as m,a as r,u as n,f as i,H as p}from"./index-bf679b9f.js";const f=a({__name:"EditDeptModal",setup(a,{expose:f}){const c=l(""),v=l(!1),V=t((()=>c.value?"编辑部门":"新增部门")),{deptList:_,getDeptList:g}=e();g();const b=d({id:"",parentId:"",name:"",sort:0,status:1});return f({add:()=>{c.value="",v.value=!0},edit:async e=>{_.value.length||await g(),c.value=e,v.value=!0}}),(e,a)=>{const l=u("a-tree-select"),t=u("a-form-item"),d=u("a-input"),f=u("a-input-number"),c=u("a-radio"),g=u("a-radio-group"),h=u("a-form"),w=u("a-modal");return s(),o(w,{visible:n(v),"onUpdate:visible":a[4]||(a[4]=e=>p(v)?v.value=e:null),title:n(V)},{default:m((()=>[r(h,{ref:"formRef",model:n(b),size:"medium","auto-label-width":""},{default:m((()=>[r(t,{label:"上级部门",name:"parentId"},{default:m((()=>[r(l,{modelValue:n(b).parentId,"onUpdate:modelValue":a[0]||(a[0]=e=>n(b).parentId=e),"allow-clear":"",data:n(_),placeholder:"请选择",fieldNames:{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])])),_:1}),r(t,{label:"部门名称",field:"name",rules:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],"validate-trigger":["change","input"]},{default:m((()=>[r(d,{modelValue:n(b).name,"onUpdate:modelValue":a[1]||(a[1]=e=>n(b).name=e),placeholder:"请输入部门名称","allow-clear":""},null,8,["modelValue"])])),_:1}),r(t,{label:"排序",name:"sort",rules:[{required:!0,message:"请输入排序序号"}]},{default:m((()=>[r(f,{modelValue:n(b).sort,"onUpdate:modelValue":a[2]||(a[2]=e=>n(b).sort=e),style:{width:"120px"}},null,8,["modelValue"])])),_:1}),r(t,{label:"状态",name:"status"},{default:m((()=>[r(g,{modelValue:n(b).status,"onUpdate:modelValue":a[3]||(a[3]=e=>n(b).status=e)},{default:m((()=>[r(c,{value:1},{default:m((()=>[i("正常")])),_:1}),r(c,{value:0},{default:m((()=>[i("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])}}});export{f as _};