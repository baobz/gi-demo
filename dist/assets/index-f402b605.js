import{ey as _,ez as b,d as L,s as y,z as x,o as P,c as k,p as j,j as E,h as S,_ as C}from"./index-f4aadaae.js";var h={exports:{}};(function(M,w){(function(c,f){M.exports=f()})(_,function(){function c(e){var p=[];return e.AMapUI&&p.push(f(e.AMapUI)),e.Loca&&p.push(I(e.Loca)),Promise.all(p)}function f(e){return new Promise(function(p,o){var u=[];if(e.plugins)for(var i=0;i<e.plugins.length;i+=1)a.AMapUI.plugins.indexOf(e.plugins[i])==-1&&u.push(e.plugins[i]);if(s.AMapUI===n.failed)o("前次请求 AMapUI 失败");else if(s.AMapUI===n.notload){s.AMapUI=n.loading,a.AMapUI.version=e.version||a.AMapUI.version,i=a.AMapUI.version;var l=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+i+"/main.js",d.onerror=function(t){s.AMapUI=n.failed,o("请求 AMapUI 失败")},d.onload=function(){if(s.AMapUI=n.loaded,u.length)window.AMapUI.loadUI(u,function(){for(var t=0,A=u.length;t<A;t++){var v=u[t].split("/").slice(-1)[0];window.AMapUI[v]=arguments[t]}for(p();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()});else for(p();r.AMapUI.length;)r.AMapUI.splice(0,1)[0]()},l.appendChild(d)}else s.AMapUI===n.loaded?e.version&&e.version!==a.AMapUI.version?o("不允许多个版本 AMapUI 混用"):u.length?window.AMapUI.loadUI(u,function(){for(var t=0,A=u.length;t<A;t++){var v=u[t].split("/").slice(-1)[0];window.AMapUI[v]=arguments[t]}p()}):p():e.version&&e.version!==a.AMapUI.version?o("不允许多个版本 AMapUI 混用"):r.AMapUI.push(function(t){t?o(t):u.length?window.AMapUI.loadUI(u,function(){for(var A=0,v=u.length;A<v;A++){var U=u[A].split("/").slice(-1)[0];window.AMapUI[U]=arguments[A]}p()}):p()})})}function I(e){return new Promise(function(p,o){if(s.Loca===n.failed)o("前次请求 Loca 失败");else if(s.Loca===n.notload){s.Loca=n.loading,a.Loca.version=e.version||a.Loca.version;var u=a.Loca.version,i=a.AMap.version.startsWith("2"),l=u.startsWith("2");if(i&&!l||!i&&l)o("JSAPI 与 Loca 版本不对应！！");else{i=a.key,l=document.body||document.head;var d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+u+"&key="+i,d.onerror=function(t){s.Loca=n.failed,o("请求 AMapUI 失败")},d.onload=function(){for(s.Loca=n.loaded,p();r.Loca.length;)r.Loca.splice(0,1)[0]()},l.appendChild(d)}}else s.Loca===n.loaded?e.version&&e.version!==a.Loca.version?o("不允许多个版本 Loca 混用"):p():e.version&&e.version!==a.Loca.version?o("不允许多个版本 Loca 混用"):r.Loca.push(function(t){t?o(t):o()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var n;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(n||(n={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},r={AMap:[],AMapUI:[],Loca:[]},g=[],m=function(e){typeof e=="function"&&(s.AMap===n.loaded?e(window.AMap):g.push(e))};return{load:function(e){return new Promise(function(p,o){if(s.AMap==n.failed)o("");else if(s.AMap==n.notload){var u=e.key,i=e.version,l=e.plugins;u?(window.AMap&&location.host!=="lbs.amap.com"&&o("禁止多种API加载方式混用"),a.key=u,a.AMap.version=i||a.AMap.version,a.AMap.plugins=l||a.AMap.plugins,s.AMap=n.loading,i=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)s.AMap=n.failed,o(t);else for(s.AMap=n.loaded,c(e).then(function(){p(window.AMap)}).catch(o);g.length;)g.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+u+"&plugin="+a.AMap.plugins.join(","),l.onerror=function(t){s.AMap=n.failed,o(t)},i.appendChild(l)):o("请填写key")}else if(s.AMap==n.loaded)if(e.key&&e.key!==a.key)o("多个不一致的 key");else if(e.version&&e.version!==a.AMap.version)o("不允许多个版本 JSAPI 混用");else{if(u=[],e.plugins)for(i=0;i<e.plugins.length;i+=1)a.AMap.plugins.indexOf(e.plugins[i])==-1&&u.push(e.plugins[i]);u.length?window.AMap.plugin(u,function(){c(e).then(function(){p(window.AMap)}).catch(o)}):c(e).then(function(){p(window.AMap)}).catch(o)}else if(e.key&&e.key!==a.key)o("多个不一致的 key");else if(e.version&&e.version!==a.AMap.version)o("不允许多个版本 JSAPI 混用");else{var d=[];if(e.plugins)for(i=0;i<e.plugins.length;i+=1)a.AMap.plugins.indexOf(e.plugins[i])==-1&&d.push(e.plugins[i]);m(function(){d.length?window.AMap.plugin(d,function(){c(e).then(function(){p(window.AMap)}).catch(o)}):c(e).then(function(){p(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:n.notload,AMapUI:n.notload,Loca:n.notload},r={AMap:[],AMapUI:[],Loca:[]}}}})})(h);var z=h.exports;const B=b(z),J=M=>(j("data-v-8e7c0152"),M=M(),E(),M),O={class:"map"},W=J(()=>S("div",{id:"container"},null,-1)),q=[W],D=L({__name:"index",setup(M){const w=y(null),c=()=>{B.load({key:"e07635e8e50a1ae1e936d204f14e386d",version:"2.0",plugins:[""]}).then(f=>{w.value=new f.Map("container",{resizeEnable:!0,zoom:5,center:[105.602725,37.076636]})}).catch(f=>{console.log(f)})};return x(()=>{c()}),(f,I)=>(P(),k("div",O,q))}});const G=C(D,[["__scopeId","data-v-8e7c0152"]]);export{G as default};
