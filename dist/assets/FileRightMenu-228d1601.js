import{d as e,o as a,c as n,V as l,_ as t,r as o,h as i,e as s,J as c,t as d,E as p,n as u,w as m,a as r,i as f,p as _,j as k}from"./index-e0f7d8a5.js";const v={class:"gi-option"},w=t(e({name:"GiOption",__name:"index",setup:e=>(e,t)=>(a(),n("ul",v,[l(e.$slots,"default",{},void 0,!0)]))}),[["__scopeId","data-v-9f37533c"]]),y={class:"wrap"},h={class:"icon-wrapper"},C=t(e({name:"GiOptionItem",__name:"index",props:{icon:{default:""},label:{default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const m=()=>{t("click")};return(e,t)=>{const r=o("IconRight");return a(),n("li",{class:u(["gi-option-item",{more:e.more,active:e.active}]),onClick:m},[i("section",y,[i("span",h,[l(e.$slots,"icon",{},(()=>[(a(),s(c(e.icon),{size:16,"stroke-width":2}))]),!0)]),l(e.$slots,"default",{},(()=>[i("span",null,d(e.label),1)]),!0)]),e.more?(a(),s(r,{key:0})):p("",!0)],2)}}}),[["__scopeId","data-v-a30237e2"]]),x=e=>(_("data-v-69787072"),e=e(),k(),e),I=x((()=>i("span",null,"重命名",-1))),g=x((()=>i("span",null,"移动到",-1))),z=x((()=>i("span",null,"下载",-1))),B=x((()=>i("span",null,"解压",-1))),$=x((()=>i("span",null,"解压到当前目录",-1))),b=x((()=>i("span",null,"解压到其他目录",-1))),j=x((()=>i("span",null,"详情",-1))),G=x((()=>i("span",null,"删除",-1))),N=t(e({__name:"FileRightMenu",props:{fileInfo:{default:()=>({id:"",type:"",name:"",extendName:"",src:"",updateTime:"",isDir:!1,filePath:""})},showClassStyle:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:n}){const l=e,t=e=>{n("click",e)};return(e,n)=>{const i=f,c=o("a-popover");return a(),s(w,{class:u({option:e.showClassStyle})},{default:m((()=>[r(C,{onClick:n[0]||(n[0]=e=>t("rename"))},{icon:m((()=>[r(i,{name:"menu-edit"})])),default:m((()=>[I])),_:1}),r(C,{onClick:n[1]||(n[1]=e=>t("move"))},{icon:m((()=>[r(i,{name:"menu-move"})])),default:m((()=>[g])),_:1}),r(C,{onClick:n[2]||(n[2]=e=>t("download"))},{icon:m((()=>[r(i,{name:"menu-download"})])),default:m((()=>[z])),_:1}),"zip"===l.fileInfo.extendName?(a(),s(c,{key:0,position:"right","content-style":{padding:0,overflow:"hidden",width:"150px"},"arrow-style":{display:"none"}},{content:m((()=>[r(w,null,{default:m((()=>[r(C,{onClick:n[3]||(n[3]=e=>t("zip1"))},{icon:m((()=>[r(i,{name:"file-rar"})])),default:m((()=>[$])),_:1}),r(C,{onClick:n[4]||(n[4]=e=>t("zip2"))},{icon:m((()=>[r(i,{name:"file-rar"})])),default:m((()=>[b])),_:1})])),_:1})])),default:m((()=>[r(C,{more:""},{icon:m((()=>[r(i,{name:"menu-zip"})])),default:m((()=>[B])),_:1})])),_:1})):p("",!0),r(C,{onClick:n[5]||(n[5]=e=>t("detail"))},{icon:m((()=>[r(i,{name:"menu-detail"})])),default:m((()=>[j])),_:1}),r(C,{onClick:n[6]||(n[6]=e=>t("delete"))},{icon:m((()=>[r(i,{name:"menu-delete"})])),default:m((()=>[G])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-69787072"]]);export{N as default};