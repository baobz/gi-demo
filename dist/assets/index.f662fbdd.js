import{N as a,n as r}from"./vendor.3be56953.js";import{r as n}from"./index.4cb13fe5.js";const d=a({id:"App",state:()=>({systemName:"Admin\u7BA1\u7406\u7CFB\u7EDF",theme:"light",activePath:window.localStorage.getItem("ActivePath")||"/home",menuList:[{icon:"menu-work",id:"GZT",name:"\u5DE5\u4F5C\u53F0",path:"/home"},{icon:"menu-indicator",id:"ZBGL",name:"\u6307\u6807\u7BA1\u7406",path:"/indicator-manage"},{icon:"menu-file",id:"WJGL",name:"\u6587\u4EF6\u7BA1\u7406",path:"/file-manage"},{icon:"menu-user",id:"ZBGL",name:"\u4E2A\u4EBA\u4E2D\u5FC3",path:"/user"},{icon:"menu-page",id:"P404",name:"404\u9875",path:"/404"},{icon:"menu-test",id:"TEST",name:"\u6D4B\u8BD5",path:"/test"}]}),getters:{},actions:{setActivePath(e){this.activePath=e,window.localStorage.setItem("ActivePath",e)},toggleTheme(e){e?(this.theme="dark",document.body.setAttribute("arco-theme","dark")):(this.theme="light",document.body.removeAttribute("arco-theme"))}}}),s={name:"\u9996\u9875",path:"/home",componentName:"Home"},o=a({id:"NavTab",state:()=>({tabList:[s],cacheList:[]}),getters:{},actions:{addTabItem(e){this.tabList.findIndex(i=>i.path===e.path)>=0||this.tabList.push(e)},addCacheItem(e){this.cacheList.includes(e)||this.cacheList.push(e)},removeTabItem(e){if(e===s.path)return;const t=this.tabList.findIndex(i=>i.path===e);if(t>=0){const i=n.currentRoute.value.path===this.tabList[t].path;this.tabList.splice(t,1),i&&n.push({path:this.tabList[this.tabList.length-1].path})}},removeCacheItem(e){const t=this.cacheList.findIndex(i=>i===e);t>=0&&this.cacheList.splice(t,1)},clearTabList(){this.tabList=[s],n.push(s.path)},clearCacheList(){this.cacheList=[]}}}),u=a({id:"User",state:()=>({user:JSON.parse(localStorage.getItem("USER"))||{id:"admin123456",name:"admin"}}),getters:{userName(){return this.user.name}},actions:{setUser(e){const{id:t,name:i}=e;this.user={id:t,name:i},localStorage.setItem("USER",JSON.stringify(this.user))}}}),m=a({id:"File",state:()=>({viewMode:"grid",isBatchMode:!1,selectedFileList:JSON.parse(sessionStorage.getItem("FILE_LIST"))||[]}),getters:{selectedFileIdList(){return this.selectedFileList.map(e=>e.id)}},actions:{changeViewMode(){this.viewMode=this.viewMode==="grid"?"list":"grid"},addSelectedFileItem(e){if(this.selectedFileIdList.includes(e.id)){let t=this.selectedFileList.findIndex(i=>i.id===e.id);this.selectedFileList.splice(t,1),window.sessionStorage.setItem("FILE_LIST",JSON.stringify(this.selectedFileList))}else this.selectedFileList.push(e),window.sessionStorage.setItem("FILE_LIST",JSON.stringify(this.selectedFileList))}}});r();export{u as a,o as b,m as c,d as u};