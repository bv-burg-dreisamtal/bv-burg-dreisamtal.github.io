import{d as G,p as C,I as H,m as S,a as K,g as B,u as U,c as y,b as Y,t as J,e as Q,f as a,h as W,i as f,o as i,j as d,k as m,l as X,n as l,w as v,q as P,r as Z,s as ee,v as te,x as ae,T as se,y as ne,F as oe}from"./index-01bbfcb2.js";import{V as $,y as le,u as ie,a as re,b as ce}from"./ssrBoot-8bf922ed.js";import{c as de,m as ue,a as ve,b as me,d as _e,e as ye,f as fe,g as w,h as pe,u as ge,i as ke,j as be,k as he,l as xe,n as Ve,o as Ce,p as Se,q as Be,V as Pe,r as x}from"./VGrid-e22cbc98.js";import{V}from"./VContainer-37d98d04.js";const p=G("app",{state:()=>({hint:!0,opacity:.5,video:!1}),persist:!0});const $e=de("v-alert-title"),we=["success","info","warning","error"],Ae=C({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:H,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>we.includes(e)},...S(),...ue(),...ve(),...me(),..._e(),...ye(),...fe(),...w(),...K(),...pe({variant:"flat"})},"VAlert"),Ie=B()({name:"VAlert",props:Ae(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{emit:s,slots:t}=n;const r=U(e,"modelValue"),o=y(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),c=y(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:g}=Y(e),{colorClasses:A,colorStyles:I,variantClasses:T}=ge(c),{densityClasses:D}=ke(e),{dimensionStyles:z}=be(e),{elevationClasses:L}=he(e),{locationStyles:M}=xe(e),{positionClasses:E}=Ve(e),{roundedClasses:F}=Ce(e),{textColorClasses:R,textColorStyles:j}=Se(J(e,"borderColor")),{t:N}=Q(),k=y(()=>({"aria-label":N(e.closeLabel),onClick(_){r.value=!1,s("click:close",_)}}));return()=>{const _=!!(t.prepend||o.value),q=!!(t.title||e.title),O=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},g.value,A.value,D.value,L.value,E.value,F.value,T.value,e.class],style:[I.value,z.value,M.value,e.style],role:"alert"},{default:()=>{var b,h;return[Be(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",R.value],style:j.value},null),_&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(x,{key:"prepend-defaults",disabled:!o.value,defaults:{VIcon:{density:e.density,icon:o.value,size:e.prominent?44:28}}},t.prepend):a(Pe,{key:"prepend-icon",density:e.density,icon:o.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[q&&a($e,{key:"title"},{default:()=>{var u;return[((u=t.title)==null?void 0:u.call(t))??e.title]}}),((b=t.text)==null?void 0:b.call(t))??e.text,(h=t.default)==null?void 0:h.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),O&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(x,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var u;return[(u=t.close)==null?void 0:u.call(t,{props:k.value})]}}):a($,W({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},k.value),null)])]}})}}}),Te={class:"text-h3 text-lg-h2"},De=m("div",{class:"text-h5 mt-3"},"um 17.15 Uhr in Burg-Birkenhof",-1),ze=f({__name:"Headline",setup(e){const n=p();return(s,t)=>(i(),d("div",null,[m("div",Te,"Burger Adventskalender "+X(l(le)),1),De,a(Ie,{"model-value":l(n).hint,class:"text-h5 mx-10 my-5",closable:"",density:"compact",icon:"mdi-coffee-to-go",type:"warning",variant:"tonal","onClick:close":t[0]||(t[0]=r=>l(n).hint=!1)},{default:v(()=>[P(" Bitte bringt Becher mit! Es gibt eventl. Kinderpunch und Glühwein. ")]),_:1},8,["model-value"])]))}}),Le="/burger-adventskalender/assets/octagon-40edf812.mp4",Me="/burger-adventskalender/assets/octagon-1392ff22.png",Ee={class:"no-print background"},Fe={key:0,class:"video-background",autoplay:"",loop:"",muted:""},Re=m("source",{src:Le,type:"video/mp4"},null,-1),je={key:1,class:"img-background",src:Me},Ne=f({__name:"Background",setup(e){const n=p();return(s,t)=>(i(),d("div",Ee,[m("div",{style:Z({opacity:l(n).opacity})},[l(n).video?(i(),d("video",Fe,[Re,P(" Your browser does not support the video tag. ")])):(i(),d("img",je))],4)]))}});const qe=C({scrollable:Boolean,...S(),...w({tag:"main"})},"VMain"),Oe=B()({name:"VMain",props:qe(),setup(e,n){let{slots:s}=n;const{mainStyles:t}=ee(),{ssrBootStyles:r}=ie();return te(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,r.value,e.style]},{default:()=>{var o,c;return[e.scrollable?a("div",{class:"v-main__scroller"},[(o=s.default)==null?void 0:o.call(s)]):(c=s.default)==null?void 0:c.call(s)]}})),{}}}),Ge={key:0},He=m("footer",{class:"mx-1 text-white"},"2023 - Burger Elterninitiative",-1),Qe=f({__name:"Default",setup(e){const n=p(),s=re();let t;return t=setInterval(()=>{s.calendar!=null&&(clearInterval(t),s.ready=!0)},100),(r,o)=>{const c=ae("router-view");return i(),d(oe,null,[a(Ne),a(Oe,{style:{position:"relative"}},{default:v(()=>[a(se,{name:"fade"},{default:v(()=>[l(s).ready?(i(),d("div",Ge,[a($,{icon:l(n).video?"mdi-video-outline":"mdi-video-off-outline",onClick:o[0]||(o[0]=g=>l(n).video=!l(n).video),class:"ma-2",color:"white",size:"small",style:{position:"absolute"},variant:"text"},null,8,["icon"]),a(V,{class:"handlee text-center text-white",style:{"max-width":"1226px"}},{default:v(()=>[a(ze,{class:"pt-10"}),a(c)]),_:1})])):(i(),ne(V,{key:1,class:"d-flex h-100",style:{position:"absolute"}},{default:v(()=>[a(ce,{class:"ma-auto",color:"orange",indeterminate:""})]),_:1}))]),_:1})]),_:1}),He],64)}}});export{Qe as default};
