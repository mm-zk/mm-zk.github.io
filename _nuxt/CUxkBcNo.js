import{_ as T}from"./lHGMc_ei.js";import{z as U,B as V,C as y,D as Y,F as j,G as z,H as X,_ as F}from"./DJ4o4lhc.js";import{_ as P}from"./9hk4BnPi.js";import{H as v,g as R,a8 as H,j as c,a9 as x,l as O,a7 as q,h as G,i as S,o as d,c as k,b as $,w as C,a as A,D as J,q as L,Y as o,x as u,r as p,s as f,d as B,t as I,p as W,e as K,_ as Q}from"./Bv7MNHO9.js";const Z=U(V);function ee(r,e={}){const{x:s,y:i}=Z(e),g=v(r??(window==null?void 0:window.document.body)),l=v(0),n=v(0);return y&&Y([g,s,i],()=>{const m=j(g);if(!m)return;const{left:w,top:a}=m.getBoundingClientRect(),b=s.value-(w+y.scrollX),h=i.value-(a+y.scrollY);Math.abs(b)>1500||Math.abs(h)>1500||y.screen.width<=800||(l.value=b,n.value=h)},{immediate:!0,throttle:50}),{x:s,y:i,elementX:l,elementY:n}}const _=r=>r.map(e=>{if(!e.children||typeof e.children=="string")return e.children||"";if(Array.isArray(e.children))return _(e.children);if(e.children.default)return _(e.children.default())}).join(""),te=r=>(W("data-v-cc0b2707"),r=r(),K(),r),re=te(()=>A("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),oe=R({inheritAttrs:!1,__name:"LandingCard",props:{...z,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(r){H(t=>({ffc28df2:o(s),"35aaa965":o(i)}));const e=r,s=c(()=>{var t;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((t=x[e.color])==null?void 0:t["500"])||x[e.color]||e.color}),i=c(()=>{var t;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((t=x[e.color])==null?void 0:t["400"])||x[e.color]||e.color}),g=c(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",e.orientation==="vertical"&&"flex flex-col",!!n.default&&e.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),l=v(),n=q(),{elementX:m,elementY:w}=ee(l),{ui:a,attrs:b}=G("landing.card",S(e,"ui"),g,S(e,"class"),!0),h=c(()=>X(e)),D=c(()=>(e.title||n.title&&_(n.title())||"Card link").trim());return(t,ae)=>{const N=T,E=F,M=P;return d(),k("div",L({ref_key:"el",ref:l,style:{"--x":`${o(m)}px`,"--y":`${o(w)}px`},class:[o(a).wrapper,t.to&&o(a).to]},o(b)),[$(M,{ui:o(a)},{default:C(()=>[A("div",{class:p(o(a).container)},[t.to?(d(),J(N,L({key:0,"aria-label":o(D)},o(h),{class:"focus:outline-none",tabindex:"-1"}),{default:C(()=>[re]),_:1},16,["aria-label"])):u("",!0),r.icon||t.$slots.icon?(d(),k("div",{key:1,class:p(o(a).icon.wrapper)},[f(t.$slots,"icon",{},()=>[$(E,{name:r.icon,class:p(o(a).icon.base)},null,8,["name","class"])],!0)],2)):u("",!0),r.title||t.$slots.title?(d(),k("p",{key:2,class:p(o(a).title)},[f(t.$slots,"title",{},()=>[B(I(r.title),1)],!0)],2)):u("",!0),r.description||t.$slots.description?(d(),k("div",{key:3,class:p(o(a).description)},[f(t.$slots,"description",{},()=>[B(I(r.description),1)],!0)],2)):u("",!0),f(t.$slots,"container",{},void 0,!0)],2),t.$slots.default?f(t.$slots,"default",{key:0},void 0,!0):u("",!0)]),_:3},8,["ui"])],16)}}}),ce=Q(oe,[["__scopeId","data-v-cc0b2707"]]);export{ce as _};