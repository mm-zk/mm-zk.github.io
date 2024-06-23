import{P,T,U as _,S as b,M as g,j as W,Q as B,V as K,R as V,F as G}from"./VC-URk-h.js";let L=Symbol("headlessui.useid"),X=0;function ye(){return T(L,()=>`${++X}`)()}function Ee(e){P(L,e)}function h(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function N(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,N),l}var q=Object.defineProperty,Y=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t,n)=>(Y(e,typeof t!="symbol"?t+"":t,n),n);let Q=class{constructor(){A(this,"current",this.detect()),A(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},$=new Q;function O(e){if($.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let F=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var z=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(z||{}),J=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(J||{}),Z=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Z||{});function I(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(F)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var M=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(M||{});function k(e,t=0){var n;return e===((n=O(e))==null?void 0:n.body)?!1:N(t,{0(){return e.matches(F)},1(){let l=e;for(;l!==null;){if(l.matches(F))return!0;l=l.parentElement}return!1}})}function Ne(e){let t=O(e);_(()=>{t&&!k(t.activeElement,0)&&te(e)})}var ee=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ee||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function te(e){e==null||e.focus({preventScroll:!0})}let ne=["textarea","input"].join(",");function re(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ne))!=null?n:!1}function le(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),r=t(l);if(o===null||r===null)return 0;let i=o.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $e(e,t){return oe(I(),t,{relativeTo:e})}function oe(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){var r;let i=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,u=Array.isArray(e)?n?le(e):e:I(e);o.length>0&&u.length>1&&(u=u.filter(c=>!o.includes(c))),l=l??i.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(l))-1;if(t&4)return Math.max(0,u.indexOf(l))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,m=u.length,v;do{if(p>=m||p+m<=0)return 0;let c=a+p;if(t&16)c=(c+m)%m;else{if(c<0)return 3;if(c>=m)return 1}v=u[c],v==null||v.focus(s),p+=f}while(v!==i.activeElement);return t&6&&re(v)&&v.select(),2}function ue(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ie(){return/Android/gi.test(window.navigator.userAgent)}function ae(){return ue()||ie()}function w(e,t,n){$.isServer||b(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function se(e,t,n){$.isServer||b(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function Oe(e,t,n=W(()=>!0)){function l(r,i){if(!n.value||r.defaultPrevented)return;let u=i(r);if(u===null||!u.getRootNode().contains(u))return;let f=function a(s){return typeof s=="function"?a(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let a of f){if(a===null)continue;let s=a instanceof HTMLElement?a:h(a);if(s!=null&&s.contains(u)||r.composed&&r.composedPath().includes(s))return}return!k(u,M.Loose)&&u.tabIndex!==-1&&r.preventDefault(),t(r,u)}let o=g(null);w("pointerdown",r=>{var i,u;n.value&&(o.value=((u=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:u[0])||r.target)},!0),w("mousedown",r=>{var i,u;n.value&&(o.value=((u=(i=r.composedPath)==null?void 0:i.call(r))==null?void 0:u[0])||r.target)},!0),w("click",r=>{ae()||o.value&&(l(r,()=>o.value),o.value=null)},!0),w("touchend",r=>l(r,()=>r.target instanceof HTMLElement?r.target:null),!0),se("blur",r=>l(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function S(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Ae(e,t){let n=g(S(e.value.type,e.value.as));return B(()=>{n.value=S(e.value.type,e.value.as)}),b(()=>{var l;n.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((l=h(t))!=null&&l.hasAttribute("type"))&&(n.value="button")}),n}function x(e){return[e.screenX,e.screenY]}function Se(){let e=g([-1,-1]);return{wasMoved(t){let n=x(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=x(t)}}}function xe({container:e,accept:t,walk:n,enabled:l}){b(()=>{let o=e.value;if(!o||l!==void 0&&!l.value)return;let r=O(e);if(!r)return;let i=Object.assign(f=>t(f),{acceptNode:t}),u=r.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,i,!1);for(;u.nextNode();)n(u.currentNode)})}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),de=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(de||{});function De({visible:e=!0,features:t=0,ourProps:n,theirProps:l,...o}){var r;let i=H(l,n),u=Object.assign(o,{props:i});if(e||t&2&&i.static)return E(u);if(t&1){let f=(r=i.unmount)==null||r?0:1;return N(f,{0(){return null},1(){return E({...o,props:{...i,hidden:!0,style:{display:"none"}}})}})}return E(u)}function E({props:e,attrs:t,slots:n,slot:l,name:o}){var r,i;let{as:u,...f}=fe(e,["unmount","static"]),a=(r=n.default)==null?void 0:r.call(n,l),s={};if(l){let p=!1,m=[];for(let[v,c]of Object.entries(l))typeof c=="boolean"&&(p=!0),c===!0&&m.push(v);p&&(s["data-headlessui-state"]=m.join(" "))}if(u==="template"){if(a=C(a??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[p,...m]=a??[];if(!ve(p)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(d=>d.trim()).filter((d,y,R)=>R.indexOf(d)===y).sort((d,y)=>d.localeCompare(y)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let v=H((i=p.props)!=null?i:{},f,s),c=K(p,v,!0);for(let d in v)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=v[d]);return c}return Array.isArray(a)&&a.length===1?a[0]:a}return V(u,Object.assign({},f,s),{default:()=>a})}function C(e){return e.flatMap(t=>t.type===G?C(t.children):[t])}function H(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let o in l)o.startsWith("on")&&typeof l[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(l[o])):t[o]=l[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](o,...r){let i=n[l];for(let u of i){if(o instanceof Event&&o.defaultPrevented)return;u(o,...r)}}});return t}function je(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function fe(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function ve(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let U=Symbol("Context");var pe=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(pe||{});function Pe(){return T(U,null)}function Te(e){P(U,e)}var me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(me||{});function he(e){throw new Error("Unexpected object: "+e)}var ge=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(ge||{});function Le(e,t){let n=t.resolveItems();if(n.length<=0)return null;let l=t.resolveActiveIndex(),o=l??-1;switch(e.focus){case 0:{for(let r=0;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return l}case 1:{o===-1&&(o=n.length);for(let r=o-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return l}case 2:{for(let r=o+1;r<n.length;++r)if(!t.resolveDisabled(n[r],r,n))return r;return l}case 3:{for(let r=n.length-1;r>=0;--r)if(!t.resolveDisabled(n[r],r,n))return r;return l}case 4:{for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return l}case 5:return null;default:he(e)}}let D=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function j(e){var t,n;let l=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return l;let r=!1;for(let u of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),r=!0;let i=r?(n=o.innerText)!=null?n:"":l;return D.test(i)&&(i=i.replace(D,"")),i}function we(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let l=n.split(" ").map(o=>{let r=document.getElementById(o);if(r){let i=r.getAttribute("aria-label");return typeof i=="string"?i.trim():j(r).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return j(e).trim()}function Ie(e){let t=g(""),n=g("");return()=>{let l=h(e);if(!l)return"";let o=l.innerText;if(t.value===o)return n.value;let r=we(l).trim().toLowerCase();return t.value=o,n.value=r,r}}export{De as A,je as E,ye as I,ce as N,le as O,fe as T,Ne as _,O as a,xe as b,ge as c,Se as d,me as e,Le as f,k as g,M as h,pe as i,Ee as j,z as k,Pe as l,ae as n,h as o,Ie as p,Ae as s,Te as t,N as u,$e as v,Oe as w};
