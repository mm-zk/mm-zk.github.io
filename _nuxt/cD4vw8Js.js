import{w as ge,d as be,h as ye,o as k,t as he,c as ke,i as H,A as U,I as q,l as Me,N as G,e as h,S as Ie,U as ee,V as re,O as we,_ as le,k as Se,u as Te,H as Pe,W as Re,m as Ce,X as De,Y as _e,a as Oe}from"./DJ4o4lhc.js";import{_ as se}from"./lHGMc_ei.js";import{_ as ue}from"./CVPfHb8q.js";import{_ as ie}from"./BJGrno59.js";import{al as Ae,g as $,H as P,j as S,I as $e,J as de,M as Be,N as Ne,O as A,P as Ee,m as xe,f as te,_ as Le,h as Fe,i as ae,B as He,K as ne,k as Ue,l as je,S as E,o as y,D,w as T,b as B,r as R,s as oe,a as K,c as C,y as Ke,U as ze,q as x,x as L,F as z,A as J,T as Je,t as V,d as ce,W as We,Y as F}from"./Bv7MNHO9.js";import{s as Ve,i as qe,p as Qe,u as Ye,f as Xe,c as w}from"./DFfz1GyD.js";import{u as Ze}from"./ChehFXd5.js";const Ge={wrapper:"relative inline-flex text-left rtl:text-right",container:"z-20 group",trigger:"inline-flex w-full",width:"w-48",height:"",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-700",base:"relative focus:outline-none overflow-y-auto scroll-py-1",divide:"divide-y divide-gray-200 dark:divide-gray-700",padding:"p-1",item:{base:"group flex items-center gap-1.5 w-full",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",active:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",inactive:"text-gray-700 dark:text-gray-200",disabled:"cursor-not-allowed opacity-50",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-500 dark:text-gray-400",inactive:"text-gray-400 dark:text-gray-500"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"truncate",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"},transition:{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},popper:{placement:"bottom-end",strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...Ae,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};var et=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(et||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{});function at(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let pe=Symbol("MenuContext");function j(e){let m=Ee(pe,null);if(m===null){let f=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,j),f}return m}let nt=$({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:m,attrs:f}){let b=P(1),c=P(null),g=P(null),t=P([]),o=P(""),s=P(null),p=P(1);function M(a=u=>u){let u=s.value!==null?t.value[s.value]:null,r=we(a(t.value.slice()),l=>k(l.dataRef.domRef)),i=u?r.indexOf(u):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let d={menuState:b,buttonRef:c,itemsRef:g,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{b.value=1,s.value=null},openMenu:()=>b.value=0,goToItem(a,u,r){let i=M(),l=Xe(a===w.Specific?{focus:w.Specific,id:u}:{focus:a},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",s.value=l,p.value=r??1,t.value=i.items},search(a){let u=o.value!==""?0:1;o.value+=a.toLowerCase();let r=(s.value!==null?t.value.slice(s.value+u).concat(t.value.slice(0,s.value+u)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),i=r?t.value.indexOf(r):-1;i===-1||i===s.value||(s.value=i,p.value=1)},clearSearch(){o.value=""},registerItem(a,u){let r=M(i=>[...i,{id:a,dataRef:u}]);t.value=r.items,s.value=r.activeItemIndex,p.value=1},unregisterItem(a){let u=M(r=>{let i=r.findIndex(l=>l.id===a);return i!==-1&&r.splice(i,1),r});t.value=u.items,s.value=u.activeItemIndex,p.value=1}};return ge([c,g],(a,u)=>{var r;d.closeMenu(),be(u,ye.Loose)||(a.preventDefault(),(r=k(c))==null||r.focus())},S(()=>b.value===0)),$e(pe,d),he(S(()=>ke(b.value,{0:H.Open,1:H.Closed}))),()=>{let a={open:b.value===0,close:d.closeMenu};return U({ourProps:{},theirProps:e,slot:a,slots:m,attrs:f,name:"Menu"})}}}),ot=$({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:m,slots:f,expose:b}){var c;let g=(c=e.id)!=null?c:`headlessui-menu-button-${q()}`,t=j("MenuButton");b({el:t.buttonRef,$el:t.buttonRef});function o(d){switch(d.key){case h.Space:case h.Enter:case h.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=k(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.First)});break;case h.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=k(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(w.Last)});break}}function s(d){switch(d.key){case h.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=k(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),at(()=>{var a;return(a=k(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let M=Ve(S(()=>({as:e.as,type:m.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{...u}=e,r={ref:t.buttonRef,id:g,type:M.value,"aria-haspopup":"menu","aria-controls":(d=k(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return U({ourProps:r,theirProps:u,slot:a,attrs:m,slots:f,name:"MenuButton"})}}}),rt=$({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:m,slots:f,expose:b}){var c;let g=(c=e.id)!=null?c:`headlessui-menu-items-${q()}`,t=j("MenuItems"),o=P(null);b({el:t.itemsRef,$el:t.itemsRef}),qe({container:S(()=>k(t.itemsRef)),enabled:S(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var u;switch(o.value&&clearTimeout(o.value),a.key){case h.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case h.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let r=t.items.value[t.activeItemIndex.value];(u=k(r.dataRef.domRef))==null||u.click()}t.closeMenu(),re(k(t.buttonRef));break;case h.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Next);case h.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Previous);case h.Home:case h.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.First);case h.End:case h.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(w.Last);case h.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var r;return(r=k(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case h.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>Ie(k(t.buttonRef),a.shiftKey?ee.Previous:ee.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case h.Space:a.preventDefault();break}}let M=Me(),d=S(()=>M!==null?(M.value&H.Open)===H.Open:t.menuState.value===0);return()=>{var a,u;let r={open:t.menuState.value===0},{...i}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(u=k(t.buttonRef))==null?void 0:u.id,id:g,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:l,theirProps:i,slot:r,attrs:m,slots:f,features:G.RenderStrategy|G.Static,visible:d.value,name:"MenuItems"})}}}),lt=$({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:m,attrs:f,expose:b}){var c;let g=(c=e.id)!=null?c:`headlessui-menu-item-${q()}`,t=j("MenuItem"),o=P(null);b({el:o,$el:o});let s=S(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===g:!1),p=Qe(o),M=S(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));de(()=>t.registerItem(g,M)),Be(()=>t.unregisterItem(g)),Ne(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&A(()=>{var n,v;return(v=(n=k(o))==null?void 0:n.scrollIntoView)==null?void 0:v.call(n,{block:"nearest"})})});function d(n){if(e.disabled)return n.preventDefault();t.closeMenu(),re(k(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(w.Nothing);t.goToItem(w.Specific,g)}let u=Ye();function r(n){u.update(n)}function i(n){u.wasMoved(n)&&(e.disabled||s.value||t.goToItem(w.Specific,g,0))}function l(n){u.wasMoved(n)&&(e.disabled||s.value&&t.goToItem(w.Nothing))}return()=>{let{disabled:n,...v}=e,I={active:s.value,disabled:n,close:t.closeMenu};return U({ourProps:{id:g,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:r,onMouseenter:r,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l},theirProps:{...f,...v},slot:I,attrs:f,slots:m,name:"MenuItem"})}}});const W=xe(te.ui.strategy,te.ui.dropdown,Ge),st=$({components:{HMenu:nt,HMenuButton:ot,HMenuItems:rt,HMenuItem:lt,UIcon:le,UAvatar:ue,UKbd:ie},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>W.default.openDelay},closeDelay:{type:Number,default:()=>W.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:m}){const{ui:f,attrs:b}=Fe("dropdown",ae(e,"ui"),W,ae(e,"class")),c=S(()=>He(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[g,t]=Ze(c.value),o=P(null);let s=null,p=null;de(()=>{var v,I;const l=(v=g.value)==null?void 0:v.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((I=o.value)==null||I.openMenu())});const M=S(()=>{var I,_,O;if(e.mode!=="hover")return{};const l=((I=e.popper)==null?void 0:I.offsetDistance)||((_=f.value.popper)==null?void 0:_.offsetDistance)||8,n=(O=c.value.placement)==null?void 0:O.split("-")[0],v=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:v,paddingBottom:v}:n==="left"||n==="right"?{paddingLeft:v,paddingRight:v}:{paddingTop:v,paddingBottom:v,paddingLeft:v,paddingRight:v}});function d(l){!l.cancelable||!o.value||(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function u(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function r(l,n,{href:v,navigate:I,close:_,isExternal:O}){n.click&&n.click(l),v&&!O&&(I(l),_())}ne(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),ne(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||m("update:open",l===0)});const i=se;return Se(()=>Te("$ctlRmIk4j0")),{ui:f,attrs:b,popper:c,trigger:g,container:t,containerStyle:M,onTouchStart:d,onMouseEnter:a,onMouseLeave:u,onClick:r,getNuxtLinkProps:Pe,twMerge:Ue,twJoin:je,NuxtLink:i}}}),ut=["disabled"];function it(e,m,f,b,c,g){const t=E("HMenuButton"),o=le,s=ue,p=ie,M=E("HMenuItem"),d=se,a=E("HMenuItems"),u=E("HMenu");return y(),D(u,x({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:T(({open:r})=>[B(t,{ref:"trigger",as:"div",disabled:e.disabled,class:R(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:T(()=>[oe(e.$slots,"default",{open:r,disabled:e.disabled},()=>[K("button",{disabled:e.disabled}," Open ",8,ut)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),r&&e.items.length?(y(),C("div",{key:0,ref:"container",class:R([e.ui.container,e.ui.width]),style:Ke(e.containerStyle),onMouseenter:m[0]||(m[0]=(...i)=>e.onMouseEnter&&e.onMouseEnter(...i))},[B(ze,x({appear:""},e.ui.transition),{default:T(()=>[K("div",null,[e.popper.arrow?(y(),C("div",{key:0,"data-popper-arrow":"",class:R(Object.values(e.ui.arrow))},null,2)):L("",!0),B(a,{class:R([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:T(()=>[(y(!0),C(z,null,J(e.items,(i,l)=>(y(),C("div",{key:l,class:R(e.ui.padding)},[(y(!0),C(z,null,J(i,(n,v)=>(y(),D(d,x({key:v,ref_for:!0},e.getNuxtLinkProps(n),{custom:""}),{default:T(({href:I,target:_,rel:O,navigate:ve,isExternal:fe,isActive:Q})=>[B(M,{disabled:n.disabled},{default:T(({active:Y,disabled:X,close:me})=>[(y(),D(Je(I?"a":"button"),{href:X?void 0:I,rel:O,target:_,class:R(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,Y||Q?e.ui.item.active:e.ui.item.inactive,X&&e.ui.item.disabled),n.class)),onClick:N=>e.onClick(N,n,{href:I,navigate:ve,close:me,isExternal:fe})},{default:T(()=>[oe(e.$slots,n.slot||"item",{item:n},()=>{var N;return[n.icon?(y(),D(o,{key:0,name:n.icon,class:R(e.twMerge(e.twJoin(e.ui.item.icon.base,Y||Q?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(y(),D(s,x({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):L("",!0),K("span",{class:R(e.twMerge(e.ui.item.label,n.labelClass))},V(n.label),3),(N=n.shortcuts)!=null&&N.length?(y(),C("span",{key:2,class:R(e.ui.item.shortcuts)},[(y(!0),C(z,null,J(n.shortcuts,Z=>(y(),D(p,{key:Z},{default:T(()=>[ce(V(Z),1)]),_:2},1024))),128))],2)):L("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):L("",!0)]),_:3},16,["class","onMouseleave"])}const dt=Le(st,[["render",it]]),yt=$({__name:"Connect",setup(e){const m=Re(),{account:f}=We(Ce()),b=S(()=>[m.connectors.map(c=>({label:c.name,click:()=>De({connector:c})}))]);return(c,g)=>{const t=Oe,o=dt;return y(),C("div",null,[F(f).isConnected?(y(),D(t,{key:0,onClick:F(_e),color:"primary",variant:"solid"},{default:T(()=>{var s;return[ce(" Disconnect from "+V((s=F(f).connector)==null?void 0:s.name),1)]}),_:1},8,["onClick"])):(y(),D(o,{key:1,items:F(b),mode:"hover",popper:{placement:"bottom-start"}},{default:T(()=>[B(t,{color:"gray",label:"Connect Wallet","trailing-icon":"i-heroicons-chevron-down-20-solid"})]),_:1},8,["items"]))])}}});export{yt as _};
