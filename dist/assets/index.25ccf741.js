import{d as v,h as d,o as h,l as p,w as r,H,j as w,I as B,c as F,J as E,K as A,L as te,u as V,N as be,r as L,n as oe,b as s,i as f,_ as D,q as ne,s as se,F as Se,O as K,P as ke,Q as Ce,m as $e,k as R,y as we,p as ae,e as ie,a as k,f as Fe,R as Ee,S as le,T as Ae,U as xe,V as He}from"./index.64ef6439.js";import{_ as Be}from"./GiSvgIcon.c1cfd46c.js";import{a as De,_ as Te}from"./logo.1bac670e.js";import{s as N}from"./index.463d26de.js";import"./viewer.8a0458a1.js";import{b as Le}from"./index.baea6f5b.js";const Me=v({name:"MenuItem"}),ze=v({...Me,props:{data:{type:Object,default:()=>{}}},emits:["click"],setup(e,{emit:t}){const n=o=>{t("click",o)};return(o,i)=>{const l=Be,a=d("MenuItem",!0),u=d("a-sub-menu"),c=d("icon-unordered-list"),m=d("a-menu-item");return e.data.children&&e.data.children.length?(h(),p(u,{key:e.data.path},{icon:r(()=>[e.data.icon?(h(),p(l,{key:0,size:24,name:e.data.icon},null,8,["name"])):H("",!0)]),title:r(()=>[w(B(e.data.name),1)]),default:r(()=>[(h(!0),F(A,null,E(e.data.children,_=>(h(),p(a,{key:_.id,data:_,onClick:n},null,8,["data"]))),128))]),_:1})):(h(),p(m,{key:e.data.path,onClick:i[0]||(i[0]=_=>n(e.data))},{icon:r(()=>[e.data.icon?(h(),p(l,{key:0,size:24,name:e.data.icon},null,8,["name"])):(h(),p(c,{key:1,size:20}))]),default:r(()=>[w(" "+B(e.data.name),1)]),_:1}))}}}),Ie=v({name:"Aside"}),Ne=v({...Ie,setup(e){const t=te(),n=V(),o=be(),i=c=>{const m=[];function _(y){y.forEach(g=>{var C;g.path&&m.push(g.path),(C=g.children)!=null&&C.length&&_(g.children)})}return _(c),m},l=L("/home"),a=i(o.menuTree);oe(()=>t.path,()=>{a.includes(t.path)&&(l.value=t.path)},{immediate:!0});const u=c=>{c.path&&(c.path==="/file"?n.push({path:c.path,query:{fileType:0}}):n.push({path:c.path}),a.includes(c.path)&&(l.value=c.path))};return(c,m)=>{const _=d("a-menu"),y=d("a-layout-sider");return h(),p(y,{collapsible:"",breakpoint:"xl",class:"aside"},{default:r(()=>[s(_,{"selected-keys":[l.value],"default-open-keys":["/home"],"auto-open-selected":!0,style:{width:"100%",height:"100%"}},{default:r(()=>[(h(!0),F(A,null,E(f(o).menuTree,g=>(h(),p(ze,{key:g.id,data:g,onClick:u},null,8,["data"]))),128))]),_:1},8,["selected-keys"])]),_:1})}}});const Re=D(Ne,[["__scopeId","data-v-c450194f"]]);function Oe(){const e=L(!1),t=()=>{e.value=N.isFullscreen},n=()=>{N.toggle()};return ne(()=>{N.on("change",t)}),se(()=>{N.off("change",t)}),{isFullScreen:e,onToggleFullScreen:n}}/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function x(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=Pe(e):/rgb/.test(e)?t=ee(e):typeof e=="string"?t=ee(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(t=e);const{r:n,g:o,b:i,a:l}=t,{h:a,s:u,v:c}=Ve(t);return{r:n,g:o,b:i,a:l===void 0?1:l,h:a,s:u,v:c}}function W(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=e*2;return t.width=o,t.height=o,n.fillStyle="#ffffff",n.fillRect(0,0,o,o),n.fillStyle="#ccd5db",n.fillRect(0,0,e,e),n.fillRect(e,e,e,e),t}function P(e,t,n,o,i,l){const a=e==="l",u=t.createLinearGradient(0,0,a?n:0,a?0:o);u.addColorStop(.01,i),u.addColorStop(.99,l),t.fillStyle=u,t.fillRect(0,0,n,o)}function je({r:e,g:t,b:n},o){const i=a=>("0"+Number(a).toString(16)).slice(-2),l=`#${i(e)}${i(t)}${i(n)}`;return o?l.toUpperCase():l}function Pe(e){e=e.slice(1);const t=n=>parseInt(n,16)||0;return{r:t(e.slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}}function ee(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function Ve({r:e,g:t,b:n}){e=e/255,t=t/255,n=n/255;const o=Math.max(e,t,n),i=Math.min(e,t,n),l=o-i;let a=0;o===i?a=0:o===e?t>=n?a=60*(t-n)/l:a=60*(t-n)/l+360:o===t?a=60*(n-e)/l+120:o===n&&(a=60*(e-t)/l+240),a=Math.floor(a);let u=parseFloat((o===0?0:1-i/o).toFixed(2)),c=parseFloat(o.toFixed(2));return{h:a,s:u,v:c}}var U=v({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,n=e.getContext("2d");e.width=t,e.height=t,n.fillStyle=this.color,n.fillRect(0,0,t,t),P("l",n,t,t,"#FFFFFF","rgba(255,255,255,0)"),P("p",n,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:n}=this.$el.getBoundingClientRect(),o=e.target.getContext("2d"),i=a=>{let u=a.clientX-n,c=a.clientY-t;u<0&&(u=0),c<0&&(c=0),u>this.size&&(u=this.size),c>this.size&&(c=this.size),this.slideSaturationStyle={left:u-5+"px",top:c-5+"px"};const m=o.getImageData(Math.min(u,this.size-1),Math.min(c,this.size-1),1,1),[_,y,g]=m.data;this.$emit("selectSaturation",{r:_,g:y,b:g})};i(e);const l=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",l)}}});const Ke={ref:"canvasSaturation"};function We(e,t,n,o,i,l){return h(),p("div",{class:"saturation",onMousedown:t[1]||(t[1]=K((...a)=>e.selectSaturation&&e.selectSaturation(...a),["prevent","stop"]))},[s("canvas",Ke,null,512),s("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}U.render=We;U.__file="src/color/Saturation.vue";var G=v({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,n=this.height,o=e.getContext("2d");e.width=t,e.height=n;const i=o.createLinearGradient(0,0,0,n);i.addColorStop(0,"#FF0000"),i.addColorStop(.17*1,"#FF00FF"),i.addColorStop(.17*2,"#0000FF"),i.addColorStop(.17*3,"#00FFFF"),i.addColorStop(.17*4,"#00FF00"),i.addColorStop(.17*5,"#FFFF00"),i.addColorStop(1,"#FF0000"),o.fillStyle=i,o.fillRect(0,0,t,n)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),n=e.target.getContext("2d"),o=l=>{let a=l.clientY-t;a<0&&(a=0),a>this.height&&(a=this.height),this.slideHueStyle={top:a-2+"px"};const u=n.getImageData(0,Math.min(a,this.height-1),1,1),[c,m,_]=u.data;this.$emit("selectHue",{r:c,g:m,b:_})};o(e);const i=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}}});const Ue={ref:"canvasHue"};function Ge(e,t,n,o,i,l){return h(),p("div",{class:"hue",onMousedown:t[1]||(t[1]=K((...a)=>e.selectHue&&e.selectHue(...a),["prevent","stop"]))},[s("canvas",Ue,null,512),s("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}G.render=Ge;G.__file="src/color/Hue.vue";var X=v({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,n=this.height,o=this.alphaSize,i=W(o),l=e.getContext("2d");e.width=t,e.height=n,l.fillStyle=l.createPattern(i,"repeat"),l.fillRect(0,0,t,n),P("p",l,t,n,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),n=i=>{let l=i.clientY-t;l<0&&(l=0),l>this.height&&(l=this.height);let a=parseFloat((l/this.height).toFixed(2));this.$emit("selectAlpha",a)};n(e);const o=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}}});const Xe={ref:"canvasAlpha"};function qe(e,t,n,o,i,l){return h(),p("div",{class:"color-alpha",onMousedown:t[1]||(t[1]=K((...a)=>e.selectAlpha&&e.selectAlpha(...a),["prevent","stop"]))},[s("canvas",Xe,null,512),s("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}X.render=qe;X.__file="src/color/Alpha.vue";var q=v({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,n=this.height,o=this.alphaSize,i=W(o),l=e.getContext("2d");e.width=t,e.height=n,l.fillStyle=l.createPattern(i,"repeat"),l.fillRect(0,0,t,n),l.fillStyle=this.color,l.fillRect(0,0,t,n)}}});function Ye(e,t,n,o,i,l){return h(),p("canvas")}q.render=Ye;q.__file="src/color/Preview.vue";var Y=v({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:n}=e,{top:o,left:i,width:l,height:a}=this.suckerCanvas.getBoundingClientRect(),u=t-i,c=n-o,_=this.suckerCanvas.getContext("2d").getImageData(Math.min(u,l-1),Math.min(c,a-1),1,1);let[y,g,C,$]=_.data;$=parseFloat(($/255).toFixed(2));const S=this.suckerPreview.style;Object.assign(S,{position:"absolute",left:t+20+"px",top:n-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${y}, ${g}, ${C}, ${$})`,zIndex:95}),this.suckerArea.length&&t>=this.suckerArea[0]&&n>=this.suckerArea[1]&&t<=this.suckerArea[2]&&n<=this.suckerArea[3]?S.display="":S.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:n,clientY:o}=t,{top:i,left:l,width:a,height:u}=e.getBoundingClientRect(),c=n-l,m=o-i,y=e.getContext("2d").getImageData(Math.min(c,a-1),Math.min(m,u-1),1,1);let[g,C,$,S]=y.data;S=parseFloat((S/255).toFixed(2)),this.$emit("selectSucker",{r:g,g:C,b:$,a:S})}))}}});const Je=s("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),Qe={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},Ze=s("g",{fill:"none","fill-rule":"evenodd"},[s("g",{transform:"translate(1 1)","stroke-width":"4"},[s("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),s("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[s("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function et(e,t,n,o,i,l){return h(),p("div",null,[e.isSucking?H("v-if",!0):(h(),p("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:t[1]||(t[1]=(...a)=>e.openSucker&&e.openSucker(...a))},[Je],2)),e.isSucking?(h(),p("svg",Qe,[Ze])):H("v-if",!0)])}Y.render=et;Y.__file="src/color/Sucker.vue";var J=v({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:t}){return{modelColor:Se({get(){return e.color||""},set(o){t("inputColor",o)}})}}});const tt={class:"color-type"},ot={class:"name"};function nt(e,t,n,o,i,l){return h(),p("div",tt,[s("span",ot,B(e.name),1),ke(s("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.modelColor=a),class:"value"},null,512),[[Ce,e.modelColor]])])}J.render=nt;J.__file="src/color/Box.vue";var Q=v({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:t}){const n=L(),o=L([]),i=L();e.colorsHistoryKey&&localStorage&&(o.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),i.value=W(4).toDataURL(),se(()=>{l(n.value)});function l(u){if(!u)return;const c=o.value||[],m=c.indexOf(u);m>=0&&c.splice(m,1),c.length>=8&&(c.length=7),c.unshift(u),o.value=c||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(c))}function a(u){t("selectColor",u)}return{setColorsHistory:l,colorsHistory:o,color:n,imgAlphaBase64:i,selectColor:a}}});const st={class:"colors"},at={key:0,class:"colors history"};function it(e,t,n,o,i,l){return h(),p("div",null,[s("ul",st,[(h(!0),p(A,null,E(e.colorsDefault,a=>(h(),p("li",{key:a,class:"item",onClick:u=>e.selectColor(a)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),p("ul",at,[(h(!0),p(A,null,E(e.colorsHistory,a=>(h(),p("li",{key:a,class:"item",onClick:u=>e.selectColor(a)},[s("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),s("div",{style:{background:a},class:"color"},null,4)],8,["onClick"]))),128))])):H("v-if",!0)])}Q.render=it;Q.__file="src/color/Colors.vue";var M=v({components:{Saturation:U,Hue:G,Alpha:X,Preview:q,Sucker:Y,Box:J,Colors:Q},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return je(this.rgba,!0)}},created(){Object.assign(this,x(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:n,b:o,h:i,s:l,v:a}=x(e);Object.assign(this,{r:t,g:n,b:o,h:i,s:l,v:a}),this.setText()},selectHue(e){const{r:t,g:n,b:o,h:i,s:l,v:a}=x(e);Object.assign(this,{r:t,g:n,b:o,h:i,s:l,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:n,b:o,a:i,h:l,s:a,v:u}=x(e);Object.assign(this,{r:t,g:n,b:o,a:i,h:l,s:a,v:u}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:n,b:o,a:i,h:l,s:a,v:u}=x(e);Object.assign(this,{r:t,g:n,b:o,a:i,h:l,s:a,v:u}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:n,b:o,a:i,h:l,s:a,v:u}=x(e);Object.assign(this,{r:t,g:n,b:o,a:i,h:l,s:a,v:u}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:n,b:o,a:i,h:l,s:a,v:u}=x(e);Object.assign(this,{r:t,g:n,b:o,a:i,h:l,s:a,v:u}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const lt={class:"color-set"};function rt(e,t,n,o,i,l){const a=d("Saturation"),u=d("Hue"),c=d("Alpha"),m=d("Preview"),_=d("Sucker"),y=d("Box"),g=d("Colors");return h(),p("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[s("div",lt,[s(a,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),s(u,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),s(c,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),s("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[s(m,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?H("v-if",!0):(h(),p(_,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),s(y,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),s(y,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),s(g,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),H(" custom options "),$e(e.$slots,"default")],6)}M.render=rt;M.__file="src/color/ColorPicker.vue";M.install=e=>{e.component(M.name,M)};const ct=[{label:"\u5361\u7247",value:"card"},{label:"\u95F4\u9694\u5361\u7247",value:"card-gutter"},{label:"\u5706\u89D2",value:"rounded"}],ut=[{label:"\u9ED8\u8BA4",value:"zoom-fade"},{label:"\u6ED1\u52A8",value:"fade-slide"},{label:"\u6E10\u53D8",value:"fade"},{label:"\u5E95\u90E8\u6ED1\u51FA",value:"fade-bottom"},{label:"\u7F29\u653E\u6D88\u9000",value:"fade-scale"}],z=e=>(ae("data-v-b6a70abe"),e=e(),ie(),e),dt=w("\u9879\u76EE\u914D\u7F6E"),ht=z(()=>k("span",{class:"title"},"\u7CFB\u7EDF\u4E3B\u9898",-1)),pt=z(()=>k("span",{class:"title"},"\u754C\u9762\u663E\u793A",-1)),_t=z(()=>k("span",{class:"label"},"\u9875\u7B7E\u663E\u793A",-1)),mt=z(()=>k("span",{class:"label"},"\u9875\u7B7E\u98CE\u683C",-1)),ft=z(()=>k("span",{class:"label"},"\u52A8\u753B\u663E\u793A",-1)),gt=z(()=>k("span",{class:"label"},"\u52A8\u753B\u5207\u6362\u7C7B\u578B",-1)),vt=v({name:"SettingDrawer"}),yt=v({...vt,props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=R(),i=Le(n,"modelValue",t),l=["#1890ff","#409EFF","#2d8cf0","#007AFF","#5ac8fa","#5856D6","#536dfe","#9c27b0","#AF52DE","#0096c7","#00C1D4","#34C759","#43a047","#7cb342","#c0ca33","#78DEC7","#e53935","#d81b60","#f4511e","#fb8c00","#ffb300","#fdd835","#6d4c41","#546e7a"];o.themeColor&&(o.setThemeColor(o.themeColor),o.changeThemeColor(o.themeColor));const a=u=>{!/^#[0-9A-Za-z]{6}/.test(u.hex)||(o.setThemeColor(u.hex),o.changeThemeColor(o.themeColor))};return(u,c)=>{const m=d("a-divider"),_=d("a-row"),y=d("a-switch"),g=d("a-option"),C=d("a-select"),$=d("a-space"),S=d("a-drawer");return h(),p(S,{visible:f(i),"onUpdate:visible":c[2]||(c[2]=b=>we(i)?i.value=b:null),width:"300px","unmount-on-close":"",footer:!1},{title:r(()=>[dt]),default:r(()=>[s($,{size:15,direction:"vertical",fill:""},{default:r(()=>[s(m,{orientation:"center"},{default:r(()=>[ht]),_:1}),s(_,{justify:"center"},{default:r(()=>[s(f(M),{theme:"dark",color:f(o).themeColor,"sucker-hide":!0,"colors-default":l,onChangeColor:a},null,8,["color"])]),_:1}),s(m,{orientation:"center"},{default:r(()=>[pt]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[_t,s(y,{size:"medium","model-value":f(o).tab,onChange:c[0]||(c[0]=b=>f(o).setTabVisible(b))},null,8,["model-value"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[mt,s(C,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(o).tabMode,disabled:!f(o).tab,style:{width:"120px"},"trigger-props":{autoFitPopupMinWidth:!0}},{default:r(()=>[(h(!0),F(A,null,E(f(ct),b=>(h(),p(g,{key:b.value,value:b.value,onClick:I=>f(o).setTabMode(b.value)},{default:r(()=>[w(B(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[ft,s(y,{size:"medium","model-value":f(o).animate,onChange:c[1]||(c[1]=b=>f(o).setAnimateVisible(b))},null,8,["model-value"])]),_:1}),s(_,{justify:"space-between",align:"center"},{default:r(()=>[gt,s(C,{placeholder:"\u8BF7\u9009\u62E9","model-value":f(o).animateMode,disabled:!f(o).animate,style:{width:"120px"}},{default:r(()=>[(h(!0),F(A,null,E(f(ut),b=>(h(),p(g,{key:b.value,value:b.value,onClick:I=>f(o).setAnimateMode(b.value)},{default:r(()=>[w(B(b.label),1)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["model-value","disabled"])]),_:1})]),_:1})]),_:1},8,["visible"])}}});const bt=D(yt,[["__scopeId","data-v-b6a70abe"]]),St={class:"message"},kt=w("\u901A\u77E5(1)"),Ct=w("\u5173\u6CE8(1)"),$t=w("\u5F85\u529E(2)"),wt=["src"],Ft=v({name:"Message"}),Et=v({...Ft,setup(e){const t=[{name:"Socrates",datetime:"1\u5C0F\u65F6\u4E4B\u524D",content:"Comment body content.",avatar:"https://lolicode.gitee.io/scui-doc/demo/img/avatar2.gif"},{name:"\u6728\u6728\u7CD6\u9187",datetime:"2\u5C0F\u65F6\u4E4B\u524D",content:"\u5173\u6CE8\u4E86\u4F60",avatar:"https://s1.ax1x.com/2022/06/14/XhteeO.jpg"},{name:"\u5F90\u6B23",datetime:"2\u4E2A\u534A\u5C0F\u65F6\u4E4B\u524D",content:"\u6536\u85CF\u4E86\u4F60\u7684\u6587\u7AE0",avatar:"https://s1.ax1x.com/2022/06/14/XhtSwF.jpg"}];return(n,o)=>{const i=d("a-tab-pane"),l=d("a-tabs"),a=d("a-avatar"),u=d("a-comment");return h(),F("div",St,[s(l,{"default-active-key":"1"},{default:r(()=>[s(i,{key:"1"},{title:r(()=>[kt]),_:1}),s(i,{key:"2"},{title:r(()=>[Ct]),_:1}),s(i,{key:"3"},{title:r(()=>[$t]),_:1})]),_:1}),k("section",null,[(h(),F(A,null,E(t,(c,m)=>s(u,{key:m,author:c.name,content:c.content,datetime:c.datetime},{actions:r(()=>[]),avatar:r(()=>[s(a,null,{default:r(()=>[k("img",{src:c.avatar},null,8,wt)]),_:2},1024)]),_:2},1032,["author","content","datetime"])),64))])])}}});const At=D(Et,[["__scopeId","data-v-433a0fee"]]),xt=e=>(ae("data-v-3ecd7ee2"),e=e(),ie(),e),Ht=xt(()=>k("img",{src:Te},null,-1)),Bt={class:"gi_hover system-name"},Dt=["src"],Tt={class:"username"},Lt={class:"doption-icon",style:{background:"rgba(var(--primary-6))"}},Mt=w("\u4E2A\u4EBA\u4E2D\u5FC3"),zt={class:"doption-icon",style:{background:"rgba(var(--success-6))"}},It=w("\u9879\u76EE\u5730\u5740"),Nt={class:"doption-icon",style:{background:"rgba(var(--warning-6))"}},Rt=w("\u9000\u51FA\u767B\u5F55"),Ot=v({name:"Header"}),jt=v({...Ot,setup(e){const t=V(),n=R(),o=Fe(),{isFullScreen:i,onToggleFullScreen:l}=Oe(),a=L(!1),u=()=>{t.push("/")},c=()=>{t.push("/system/user-center")},m=()=>{Ee.warning({title:"\u63D0\u793A",content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",hideCancel:!1,onOk:()=>{o.logout(),t.replace("/login")}})},_=()=>{window.open("https://gitee.com/lin0716/gi-demo")};return(y,g)=>{const C=d("icon-settings"),$=d("a-button"),S=d("a-tooltip"),b=d("icon-notification"),I=d("a-badge"),O=d("a-popover"),T=d("icon-fullscreen"),re=d("icon-fullscreen-exit"),ce=De,ue=d("a-avatar"),de=d("icon-down"),he=d("a-row"),pe=d("icon-user"),j=d("a-doption"),_e=d("icon-github"),me=d("a-divider"),fe=d("icon-export"),ge=d("a-dropdown"),ve=d("a-space"),ye=d("a-layout-header");return h(),p(ye,null,{default:r(()=>[k("section",{class:"system-logo",onClick:u},[Ht,k("span",Bt,B(f(n).systemName),1)]),s(ve,{class:"system-head",size:"medium"},{default:r(()=>[s(S,{content:"\u9879\u76EE\u914D\u7F6E",position:"bl"},{default:r(()=>[s($,{size:"mini",class:"gi_hover_btn",onClick:g[0]||(g[0]=Z=>a.value=!a.value)},{icon:r(()=>[s(C,{size:18})]),_:1})]),_:1}),s(O,{position:"br",trigger:"click"},{content:r(()=>[s(At)]),default:r(()=>[s(I,{count:9,dot:""},{default:r(()=>[s($,{size:"mini",class:"gi_hover_btn"},{icon:r(()=>[s(b,{size:18})]),_:1})]),_:1})]),_:1}),s(S,{content:"\u5168\u5C4F\u5207\u6362",position:"bottom"},{default:r(()=>[s($,{size:"mini",class:"gi_hover_btn",onClick:f(l)},{icon:r(()=>[f(i)?(h(),p(re,{key:1,size:18})):(h(),p(T,{key:0,size:18}))]),_:1},8,["onClick"])]),_:1}),s(S,{content:"\u4E3B\u9898\u5207\u6362",position:"bottom"},{default:r(()=>[s(ce)]),_:1}),s(ge,{trigger:"hover"},{content:r(()=>[s(j,{onClick:c},{icon:r(()=>[k("span",Lt,[s(pe)])]),default:r(()=>[Mt]),_:1}),s(j,{onClick:_},{icon:r(()=>[k("span",zt,[s(_e)])]),default:r(()=>[It]),_:1}),s(me,{style:{margin:"0"}}),s(j,{onClick:m},{icon:r(()=>[k("span",Nt,[s(fe)])]),default:r(()=>[Rt]),_:1})]),default:r(()=>[s(he,{align:"center",class:"user"},{default:r(()=>[s(ue,{size:32},{default:r(()=>[k("img",{src:f(o).userInfo.avatar},null,8,Dt)]),_:1}),k("span",Tt,B(f(o).userName),1),s(de)]),_:1})]),_:1})]),_:1}),s(bt,{modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=Z=>a.value=Z)},null,8,["modelValue"])]),_:1})}}});const Pt=D(jt,[["__scopeId","data-v-3ecd7ee2"]]),Vt=v({name:"Main"}),Kt=v({...Vt,setup(e){const t=le(),n=R();return(o,i)=>{const l=d("router-view"),a=d("a-layout");return h(),p(a,{class:"main"},{default:r(()=>[s(l,null,{default:r(({Component:u,route:c})=>[s(Ae,{name:f(n).transitionName,mode:"out-in",appear:""},{default:r(()=>[(h(),p(xe,{include:f(t).cacheList},[(h(),p(He(u),{key:c.path}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})]),_:1})}}});const Wt=D(Kt,[["__scopeId","data-v-0832c025"]]),Ut={key:0,class:"nav-tab"},Gt=w("\u5173\u95ED\u5F53\u524D\u9875\u7B7E"),Xt=w("\u5173\u95ED\u6240\u6709\u9875\u7B7E"),qt=v({name:"NavTab"}),Yt=v({...qt,setup(e){const t=te(),n=V(),o=le(),i=R();ne(()=>{l()}),oe(()=>t.path,()=>{l()});const l=()=>{o.addTagItem({name:t.meta.title||"\u672A\u547D\u540D",path:t.path,componentName:t.name}),t.meta.keepAlive&&o.addCacheItem(String(t.name))},a=m=>{n.push({path:m.toString()})},u=m=>{const _=o.tagList.find(y=>y.path===m);o.removeTagItem(m.toString()),_!=null&&_.componentName&&o.removeCacheItem(_.componentName)},c=()=>{o.clearTagList()};return(m,_)=>{const y=d("a-tab-pane"),g=d("icon-settings"),C=d("a-button"),$=d("icon-minus-circle-fill"),S=d("a-doption"),b=d("icon-close-circle-fill"),I=d("a-dropdown"),O=d("a-tabs");return f(i).tab?(h(),F("div",Ut,[s(O,{editable:"","hide-content":"",size:"medium",type:f(i).tabMode,"active-key":f(t).path,onTabClick:a,onDelete:u},{extra:r(()=>[s(I,{trigger:"hover"},{content:r(()=>[s(S,{onClick:_[0]||(_[0]=T=>u(f(t).path))},{icon:r(()=>[s($,{size:20,style:{color:"#ff7d00"}})]),default:r(()=>[Gt]),_:1}),s(S,{onClick:c},{icon:r(()=>[s(b,{size:20,style:{color:"#f53f3f"}})]),default:r(()=>[Xt]),_:1})]),default:r(()=>[s(C,{type:"primary",class:"extra-btn"},{icon:r(()=>[s(g,{size:18})]),_:1})]),_:1})]),default:r(()=>[(h(!0),F(A,null,E(f(o).tagList,T=>(h(),p(y,{key:T.path,title:T.name,closable:T.path!=="/home"},null,8,["title","closable"]))),128))]),_:1},8,["type","active-key"])])):H("",!0)}}});const Jt=D(Yt,[["__scopeId","data-v-12cc9161"]]),Qt=v({__name:"index",setup(e){return(t,n)=>{const o=d("a-layout");return h(),p(o,{class:"layout"},{default:r(()=>[s(Re),s(o,null,{default:r(()=>[s(Pt),s(Jt),s(Wt)]),_:1})]),_:1})}}});const ao=D(Qt,[["__scopeId","data-v-7766801a"]]);export{ao as default};
