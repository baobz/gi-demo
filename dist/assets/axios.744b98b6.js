import{X as Pe,Y as Ne,M as Te}from"./index.2a1a572c.js";var Y={exports:{}},pe=function(e,r){return function(){for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];return e.apply(r,s)}},Ae=pe,P=Object.prototype.toString;function Q(t){return Array.isArray(t)}function X(t){return typeof t=="undefined"}function Ue(t){return t!==null&&!X(t)&&t.constructor!==null&&!X(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function he(t){return P.call(t)==="[object ArrayBuffer]"}function $e(t){return P.call(t)==="[object FormData]"}function Be(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&he(t.buffer),e}function Le(t){return typeof t=="string"}function qe(t){return typeof t=="number"}function me(t){return t!==null&&typeof t=="object"}function j(t){if(P.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function je(t){return P.call(t)==="[object Date]"}function ke(t){return P.call(t)==="[object File]"}function De(t){return P.call(t)==="[object Blob]"}function ve(t){return P.call(t)==="[object Function]"}function Fe(t){return me(t)&&ve(t.pipe)}function _e(t){return P.call(t)==="[object URLSearchParams]"}function Me(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Ie(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Z(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Q(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function K(){var t={};function e(s,a){j(t[a])&&j(s)?t[a]=K(t[a],s):j(s)?t[a]=K({},s):Q(s)?t[a]=s.slice():t[a]=s}for(var r=0,n=arguments.length;r<n;r++)Z(arguments[r],e);return t}function He(t,e,r){return Z(e,function(s,a){r&&typeof s=="function"?t[a]=Ae(s,r):t[a]=s}),t}function Je(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var g={isArray:Q,isArrayBuffer:he,isBuffer:Ue,isFormData:$e,isArrayBufferView:Be,isString:Le,isNumber:qe,isObject:me,isPlainObject:j,isUndefined:X,isDate:je,isFile:ke,isBlob:De,isFunction:ve,isStream:Fe,isURLSearchParams:_e,isStandardBrowserEnv:Ie,forEach:Z,merge:K,extend:He,trim:Me,stripBOM:Je},A=g;function ne(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ye=function(e,r,n){if(!r)return e;var s;if(n)s=n(r);else if(A.isURLSearchParams(r))s=r.toString();else{var a=[];A.forEach(r,function(d,E){d===null||typeof d=="undefined"||(A.isArray(d)?E=E+"[]":d=[d],A.forEach(d,function(p){A.isDate(p)?p=p.toISOString():A.isObject(p)&&(p=JSON.stringify(p)),a.push(ne(E)+"="+ne(p))}))}),s=a.join("&")}if(s){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},ze=g;function F(){this.handlers=[]}F.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};F.prototype.forEach=function(e){ze.forEach(this.handlers,function(n){n!==null&&e(n)})};var We=F,Ve=g,Xe=function(e,r){Ve.forEach(e,function(s,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(e[r]=s,delete e[a])})},be=function(e,r,n,s,a){return e.config=r,n&&(e.code=n),e.request=s,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ke=be,Ee=function(e,r,n,s,a){var u=new Error(e);return Ke(u,r,n,s,a)},Ge=Ee,Ye=function(e,r,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):r(Ge("Request failed with status code "+n.status,n.config,null,n.request,n))},L=g,Qe=L.isStandardBrowserEnv()?function(){return{write:function(r,n,s,a,u,f){var d=[];d.push(r+"="+encodeURIComponent(n)),L.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),L.isString(a)&&d.push("path="+a),L.isString(u)&&d.push("domain="+u),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ze=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},er=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},rr=Ze,tr=er,nr=function(e,r){return e&&!rr(r)?tr(e,r):r},J=g,sr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ir=function(e){var r={},n,s,a;return e&&J.forEach(e.split(`
`),function(f){if(a=f.indexOf(":"),n=J.trim(f.substr(0,a)).toLowerCase(),s=J.trim(f.substr(a+1)),n){if(r[n]&&sr.indexOf(n)>=0)return;n==="set-cookie"?r[n]=(r[n]?r[n]:[]).concat([s]):r[n]=r[n]?r[n]+", "+s:s}}),r},se=g,ar=se.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(a){var u=a;return e&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(u){var f=se.isString(u)?s(u):u;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}();function ee(t){this.message=t}ee.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ee.prototype.__CANCEL__=!0;var _=ee,q=g,or=Ye,ur=Qe,fr=ye,lr=nr,cr=ir,dr=ar,z=Ee,pr=I,hr=_,ie=function(e){return new Promise(function(n,s){var a=e.data,u=e.headers,f=e.responseType,d;function E(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}q.isFormData(a)&&delete u["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(p+":"+w)}var y=lr(e.baseURL,e.url);o.open(e.method.toUpperCase(),fr(y,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function i(){if(!!o){var c="getAllResponseHeaders"in o?cr(o.getAllResponseHeaders()):null,m=!f||f==="text"||f==="json"?o.responseText:o.response,v={data:m,status:o.status,statusText:o.statusText,headers:c,config:e,request:o};or(function(h){n(h),E()},function(h){s(h),E()},v),o=null}}if("onloadend"in o?o.onloadend=i:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(i)},o.onabort=function(){!o||(s(z("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){s(z("Network Error",e,null,o)),o=null},o.ontimeout=function(){var m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",v=e.transitional||pr.transitional;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),s(z(m,e,v.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},q.isStandardBrowserEnv()){var l=(e.withCredentials||dr(y))&&e.xsrfCookieName?ur.read(e.xsrfCookieName):void 0;l&&(u[e.xsrfHeaderName]=l)}"setRequestHeader"in o&&q.forEach(u,function(m,v){typeof a=="undefined"&&v.toLowerCase()==="content-type"?delete u[v]:o.setRequestHeader(v,m)}),q.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),f&&f!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(c){!o||(s(!c||c&&c.type?new hr("canceled"):c),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),a||(a=null),o.send(a)})},b=g,ae=Xe,mr=be,vr={"Content-Type":"application/x-www-form-urlencoded"};function oe(t,e){!b.isUndefined(t)&&b.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function yr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ie),t}function br(t,e,r){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var M={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:yr(),transformRequest:[function(e,r){return ae(r,"Accept"),ae(r,"Content-Type"),b.isFormData(e)||b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e)?e:b.isArrayBufferView(e)?e.buffer:b.isURLSearchParams(e)?(oe(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):b.isObject(e)||r&&r["Content-Type"]==="application/json"?(oe(r,"application/json"),br(e)):e}],transformResponse:[function(e){var r=this.transitional||M.transitional,n=r&&r.silentJSONParsing,s=r&&r.forcedJSONParsing,a=!n&&this.responseType==="json";if(a||s&&b.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(a)throw u.name==="SyntaxError"?mr(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){M.headers[e]={}});b.forEach(["post","put","patch"],function(e){M.headers[e]=b.merge(vr)});var I=M,Er=g,wr=I,gr=function(e,r,n){var s=this||wr;return Er.forEach(n,function(u){e=u.call(s,e,r)}),e},we=function(e){return!!(e&&e.__CANCEL__)},ue=g,W=gr,Sr=we,Cr=I,Or=_;function V(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Or("canceled")}var xr=function(e){V(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ue.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var r=e.adapter||Cr.adapter;return r(e).then(function(s){return V(e),s.data=W.call(e,s.data,s.headers,e.transformResponse),s},function(s){return Sr(s)||(V(e),s&&s.response&&(s.response.data=W.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},S=g,ge=function(e,r){r=r||{};var n={};function s(o,p){return S.isPlainObject(o)&&S.isPlainObject(p)?S.merge(o,p):S.isPlainObject(p)?S.merge({},p):S.isArray(p)?p.slice():p}function a(o){if(S.isUndefined(r[o])){if(!S.isUndefined(e[o]))return s(void 0,e[o])}else return s(e[o],r[o])}function u(o){if(!S.isUndefined(r[o]))return s(void 0,r[o])}function f(o){if(S.isUndefined(r[o])){if(!S.isUndefined(e[o]))return s(void 0,e[o])}else return s(void 0,r[o])}function d(o){if(o in r)return s(e[o],r[o]);if(o in e)return s(void 0,e[o])}var E={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:d};return S.forEach(Object.keys(e).concat(Object.keys(r)),function(p){var w=E[p]||a,y=w(p);S.isUndefined(y)&&w!==d||(n[p]=y)}),n},Se={version:"0.25.0"},Rr=Se.version,re={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){re[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var fe={};re.transitional=function(e,r,n){function s(a,u){return"[Axios v"+Rr+"] Transitional option '"+a+"'"+u+(n?". "+n:"")}return function(a,u,f){if(e===!1)throw new Error(s(u," has been removed"+(r?" in "+r:"")));return r&&!fe[u]&&(fe[u]=!0,console.warn(s(u," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(a,u,f):!0}};function Pr(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),s=n.length;s-- >0;){var a=n[s],u=e[a];if(u){var f=t[a],d=f===void 0||u(f,a,t);if(d!==!0)throw new TypeError("option "+a+" must be "+d);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Nr={assertOptions:Pr,validators:re},Ce=g,Tr=ye,le=We,ce=xr,H=ge,Oe=Nr,U=Oe.validators;function B(t){this.defaults=t,this.interceptors={request:new le,response:new le}}B.prototype.request=function(e,r){if(typeof e=="string"?(r=r||{},r.url=e):r=e||{},!r.url)throw new Error("Provided config url is not valid");r=H(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&Oe.assertOptions(n,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1);var s=[],a=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(a=a&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});var u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});var f;if(!a){var d=[ce,void 0];for(Array.prototype.unshift.apply(d,s),d=d.concat(u),f=Promise.resolve(r);d.length;)f=f.then(d.shift(),d.shift());return f}for(var E=r;s.length;){var o=s.shift(),p=s.shift();try{E=o(E)}catch(w){p(w);break}}try{f=ce(E)}catch(w){return Promise.reject(w)}for(;u.length;)f=f.then(u.shift(),u.shift());return f};B.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=H(this.defaults,e),Tr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ce.forEach(["delete","get","head","options"],function(e){B.prototype[e]=function(r,n){return this.request(H(n||{},{method:e,url:r,data:(n||{}).data}))}});Ce.forEach(["post","put","patch"],function(e){B.prototype[e]=function(r,n,s){return this.request(H(s||{},{method:e,url:r,data:n}))}});var Ar=B,Ur=_;function $(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var r=this;this.promise.then(function(n){if(!!r._listeners){var s,a=r._listeners.length;for(s=0;s<a;s++)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,a=new Promise(function(u){r.subscribe(u),s=u}).then(n);return a.cancel=function(){r.unsubscribe(s)},a},t(function(s){r.reason||(r.reason=new Ur(s),e(r.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};$.source=function(){var e,r=new $(function(s){e=s});return{token:r,cancel:e}};var $r=$,Br=function(e){return function(n){return e.apply(null,n)}},Lr=g,qr=function(e){return Lr.isObject(e)&&e.isAxiosError===!0},de=g,jr=pe,k=Ar,kr=ge,Dr=I;function xe(t){var e=new k(t),r=jr(k.prototype.request,e);return de.extend(r,k.prototype,e),de.extend(r,e),r.create=function(s){return xe(kr(t,s))},r}var R=xe(Dr);R.Axios=k;R.Cancel=_;R.CancelToken=$r;R.isCancel=we;R.VERSION=Se.version;R.all=function(e){return Promise.all(e)};R.spread=Br;R.isAxiosError=qr;Y.exports=R;Y.exports.default=R;var Fr=Y.exports;const _r=()=>localStorage.getItem("token");var Re={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(r,n){t.exports=n()})(Pe,function(){var r={};r.version="0.2.0";var n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(i){var l,c;for(l in i)c=i[l],c!==void 0&&i.hasOwnProperty(l)&&(n[l]=c);return this},r.status=null,r.set=function(i){var l=r.isStarted();i=s(i,n.minimum,1),r.status=i===1?null:i;var c=r.render(!l),m=c.querySelector(n.barSelector),v=n.speed,O=n.easing;return c.offsetWidth,f(function(h){n.positionUsing===""&&(n.positionUsing=r.getPositioningCSS()),d(m,u(i,v,O)),i===1?(d(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout(function(){d(c,{transition:"all "+v+"ms linear",opacity:0}),setTimeout(function(){r.remove(),h()},v)},v)):setTimeout(h,v)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var i=function(){setTimeout(function(){!r.status||(r.trickle(),i())},n.trickleSpeed)};return n.trickle&&i(),this},r.done=function(i){return!i&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(i){var l=r.status;return l?(typeof i!="number"&&(i=(1-l)*s(Math.random()*l,.1,.95)),l=s(l+i,0,.994),r.set(l)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},function(){var i=0,l=0;r.promise=function(c){return!c||c.state()==="resolved"?this:(l===0&&r.start(),i++,l++,c.always(function(){l--,l===0?(i=0,r.done()):r.set((i-l)/i)}),this)}}(),r.render=function(i){if(r.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var l=document.createElement("div");l.id="nprogress",l.innerHTML=n.template;var c=l.querySelector(n.barSelector),m=i?"-100":a(r.status||0),v=document.querySelector(n.parent),O;return d(c,{transition:"all 0 linear",transform:"translate3d("+m+"%,0,0)"}),n.showSpinner||(O=l.querySelector(n.spinnerSelector),O&&y(O)),v!=document.body&&o(v,"nprogress-custom-parent"),v.appendChild(l),l},r.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(n.parent),"nprogress-custom-parent");var i=document.getElementById("nprogress");i&&y(i)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var i=document.body.style,l="WebkitTransform"in i?"Webkit":"MozTransform"in i?"Moz":"msTransform"in i?"ms":"OTransform"in i?"O":"";return l+"Perspective"in i?"translate3d":l+"Transform"in i?"translate":"margin"};function s(i,l,c){return i<l?l:i>c?c:i}function a(i){return(-1+i)*100}function u(i,l,c){var m;return n.positionUsing==="translate3d"?m={transform:"translate3d("+a(i)+"%,0,0)"}:n.positionUsing==="translate"?m={transform:"translate("+a(i)+"%,0)"}:m={"margin-left":a(i)+"%"},m.transition="all "+l+"ms "+c,m}var f=function(){var i=[];function l(){var c=i.shift();c&&c(l)}return function(c){i.push(c),i.length==1&&l()}}(),d=function(){var i=["Webkit","O","Moz","ms"],l={};function c(h){return h.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(C,x){return x.toUpperCase()})}function m(h){var C=document.body.style;if(h in C)return h;for(var x=i.length,T=h.charAt(0).toUpperCase()+h.slice(1),N;x--;)if(N=i[x]+T,N in C)return N;return h}function v(h){return h=c(h),l[h]||(l[h]=m(h))}function O(h,C,x){C=v(C),h.style[C]=x}return function(h,C){var x=arguments,T,N;if(x.length==2)for(T in C)N=C[T],N!==void 0&&C.hasOwnProperty(T)&&O(h,T,N);else O(h,x[1],x[2])}}();function E(i,l){var c=typeof i=="string"?i:w(i);return c.indexOf(" "+l+" ")>=0}function o(i,l){var c=w(i),m=c+l;E(c,l)||(i.className=m.substring(1))}function p(i,l){var c=w(i),m;!E(i,l)||(m=c.replace(" "+l+" "," "),i.className=m.substring(1,m.length-1))}function w(i){return(" "+(i.className||"")+" ").replace(/\s+/gi," ")}function y(i){i&&i.parentNode&&i.parentNode.removeChild(i)}return r})})(Re);var G=Re.exports;const te=Fr.create({timeout:3e4});te.interceptors.request.use(t=>{G.start();const e=_r();return e&&(t.headers||(t.headers={}),t.headers.token=e),t},t=>Promise.reject(t));te.interceptors.response.use(t=>{const{data:e}=t,{msg:r,message:n,success:s}=e;return s?(G.done(),t):(Ne.error(n||r||"\u670D\u52A1\u5668\u7AEF\u9519\u8BEF"),Promise.reject(new Error(r||"Error")))},t=>(G.done(),Te.error({content:t.msg||"\u7CFB\u7EDF\u5F02\u5E38, \u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u8054\u7CFB\u7BA1\u7406\u5458\uFF01",duration:3*1e3}),Promise.reject(t)));const D=t=>new Promise((e,r)=>{te.request(t).then(n=>e(n.data)).catch(n=>r(n))});D.get=(t,e,r)=>D({method:"get",url:t,params:e,headers:r});D.post=(t,e,r)=>D({method:"post",url:t,data:e,headers:r});export{D as r};
