import{J as qt}from"./yhpzh7P7.js";import{H as Ot,J as ve,N as de}from"./Dk_43wzT.js";function T(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function G(t){var e=T(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=T(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var e=T(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var J=Math.max,ht=Math.min,Q=Math.round;function Et(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Kt(){return!/^((?!chrome|android).)*safari/i.test(Et())}function Z(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&k(t)&&(a=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1);var c=G(t)?T(t):window,i=c.visualViewport,s=!Kt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,m=n.width/a,h=n.height/o;return{width:m,height:h,top:f,right:u+m,bottom:f+h,left:u,x:u,y:f}}function Dt(t){var e=T(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function me(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function he(t){return t===T(t)||!k(t)?Dt(t):me(t)}function V(t){return t?(t.nodeName||"").toLowerCase():null}function q(t){return((G(t)?t.ownerDocument:t.document)||window.document).documentElement}function jt(t){return Z(q(t)).left+Dt(t).scrollLeft}function N(t){return T(t).getComputedStyle(t)}function Bt(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ge(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function ye(t,e,r){r===void 0&&(r=!1);var n=k(e),a=k(e)&&ge(e),o=q(e),c=Z(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(e)!=="body"||Bt(o))&&(i=he(e)),k(e)?(s=Z(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=jt(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function $t(t){var e=Z(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function gt(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||q(t)}function Qt(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:k(t)&&Bt(t)?t:Qt(gt(t))}function at(t,e){var r;e===void 0&&(e=[]);var n=Qt(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=T(n),c=a?[o].concat(o.visualViewport||[],Bt(n)?n:[]):n,i=e.concat(c);return a?i:i.concat(at(gt(c)))}function be(t){return["table","td","th"].indexOf(V(t))>=0}function Xt(t){return!k(t)||N(t).position==="fixed"?null:t.offsetParent}function we(t){var e=/firefox/i.test(Et()),r=/Trident/i.test(Et());if(r&&k(t)){var n=N(t);if(n.position==="fixed")return null}var a=gt(t);for(Pt(a)&&(a=a.host);k(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function st(t){for(var e=T(t),r=Xt(t);r&&be(r)&&N(r).position==="static";)r=Xt(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?e:r||we(t)||e}var C="top",S="bottom",W="right",R="left",Ct="auto",ft=[C,S,W,R],_="start",it="end",xe="clippingParents",Zt="viewport",nt="popper",Oe="reference",Yt=ft.reduce(function(t,e){return t.concat([e+"-"+_,e+"-"+it])},[]),_t=[].concat(ft,[Ct]).reduce(function(t,e){return t.concat([e,e+"-"+_,e+"-"+it])},[]),Ee="beforeRead",Ae="read",Pe="afterRead",De="beforeMain",je="main",Be="afterMain",$e="beforeWrite",Ce="write",Re="afterWrite",Te=[Ee,Ae,Pe,De,je,Be,$e,Ce,Re];function ke(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function Le(t){var e=ke(t);return Te.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Me(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Se(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function We(t,e){var r=T(t),n=q(t),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,i=0,s=0;if(a){o=a.width,c=a.height;var u=Kt();(u||!u&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:c,x:i+jt(t),y:s}}function He(t){var e,r=q(t),n=Dt(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+jt(t),s=-n.scrollTop;return N(a||r).direction==="rtl"&&(i+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function te(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Pt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ve(t,e){var r=Z(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function It(t,e,r){return e===Zt?At(We(t,r)):G(e)?Ve(e,r):At(He(q(t)))}function Ne(t){var e=at(gt(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&k(t)?st(t):t;return G(n)?e.filter(function(a){return G(a)&&te(a,n)&&V(a)!=="body"}):[]}function Fe(t,e,r,n){var a=e==="clippingParents"?Ne(t):[].concat(e),o=[].concat(a,[r]),c=o[0],i=o.reduce(function(s,u){var f=It(t,u,n);return s.top=J(f.top,s.top),s.right=ht(f.right,s.right),s.bottom=ht(f.bottom,s.bottom),s.left=J(f.left,s.left),s},It(t,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function H(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Rt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ee(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?tt(n):null,c=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case C:s={x:c,y:e.y-r.height};break;case S:s={x:c,y:e.y+e.height};break;case W:s={x:e.x+e.width,y:i};break;case R:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var u=a?Rt(a):null;if(u!=null){var f=u==="y"?"height":"width";switch(o){case _:s[u]=s[u]-(e[f]/2-r[f]/2);break;case it:s[u]=s[u]+(e[f]/2-r[f]/2);break}}return s}function re(){return{top:0,right:0,bottom:0,left:0}}function ne(t){return Object.assign({},re(),t)}function ae(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function Tt(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,c=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?xe:i,u=r.rootBoundary,f=u===void 0?Zt:u,m=r.elementContext,h=m===void 0?nt:m,p=r.altBoundary,g=p===void 0?!1:p,d=r.padding,v=d===void 0?0:d,y=ne(typeof v!="number"?v:ae(v,ft)),x=h===nt?Oe:nt,E=t.rects.popper,l=t.elements[g?x:h],b=Fe(G(l)?l:l.contextElement||q(t.elements.popper),s,f,c),w=Z(t.elements.reference),O=ee({reference:w,element:E,strategy:"absolute",placement:a}),D=At(Object.assign({},E,O)),P=h===nt?D:w,A={top:b.top-P.top+y.top,bottom:P.bottom-b.bottom+y.bottom,left:b.left-P.left+y.left,right:P.right-b.right+y.right},j=t.modifiersData.offset;if(h===nt&&j){var L=j[a];Object.keys(A).forEach(function(B){var X=[W,S].indexOf(B)>=0?1:-1,Y=[C,S].indexOf(B)>=0?"y":"x";A[B]+=L[Y]*X})}return A}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ut(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qe(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?zt:a;return function(i,s,u){u===void 0&&(u=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],h=!1,p={state:f,setOptions:function(y){var x=typeof y=="function"?y(f.options):y;d(),f.options=Object.assign({},o,f.options,x),f.scrollParents={reference:G(i)?at(i):i.contextElement?at(i.contextElement):[],popper:at(s)};var E=Le(Se([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(l){return l.enabled}),g(),p.update()},forceUpdate:function(){if(!h){var y=f.elements,x=y.reference,E=y.popper;if(Ut(x,E)){f.rects={reference:ye(x,st(E),f.options.strategy==="fixed"),popper:$t(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var b=f.orderedModifiers[l],w=b.fn,O=b.options,D=O===void 0?{}:O,P=b.name;typeof w=="function"&&(f=w({state:f,options:D,name:P,instance:p})||f)}}}},update:Me(function(){return new Promise(function(v){p.forceUpdate(),v(f)})}),destroy:function(){d(),h=!0}};if(!Ut(i,s))return p;p.setOptions(u).then(function(v){!h&&u.onFirstUpdate&&u.onFirstUpdate(v)});function g(){f.orderedModifiers.forEach(function(v){var y=v.name,x=v.options,E=x===void 0?{}:x,l=v.effect;if(typeof l=="function"){var b=l({state:f,name:y,instance:p,options:E}),w=function(){};m.push(b||w)}})}function d(){m.forEach(function(v){return v()}),m=[]}return p}}var dt={passive:!0};function Xe(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,i=c===void 0?!0:c,s=T(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(f){f.addEventListener("scroll",r.update,dt)}),i&&s.addEventListener("resize",r.update,dt),function(){o&&u.forEach(function(f){f.removeEventListener("scroll",r.update,dt)}),i&&s.removeEventListener("resize",r.update,dt)}}const oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xe,data:{}};function Ye(t){var e=t.state,r=t.name;e.modifiersData[r]=ee({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Ie={name:"popperOffsets",enabled:!0,phase:"read",fn:Ye,data:{}};var ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ue(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:Q(r*a)/a||0,y:Q(n*a)/a||0}}function Jt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,c=t.offsets,i=t.position,s=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,m=t.isFixed,h=c.x,p=h===void 0?0:h,g=c.y,d=g===void 0?0:g,v=typeof f=="function"?f({x:p,y:d}):{x:p,y:d};p=v.x,d=v.y;var y=c.hasOwnProperty("x"),x=c.hasOwnProperty("y"),E=R,l=C,b=window;if(u){var w=st(r),O="clientHeight",D="clientWidth";if(w===T(r)&&(w=q(r),N(w).position!=="static"&&i==="absolute"&&(O="scrollHeight",D="scrollWidth")),w=w,a===C||(a===R||a===W)&&o===it){l=S;var P=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];d-=P-n.height,d*=s?1:-1}if(a===R||(a===C||a===S)&&o===it){E=W;var A=m&&w===b&&b.visualViewport?b.visualViewport.width:w[D];p-=A-n.width,p*=s?1:-1}}var j=Object.assign({position:i},u&&ze),L=f===!0?Ue({x:p,y:d},T(r)):{x:p,y:d};if(p=L.x,d=L.y,s){var B;return Object.assign({},j,(B={},B[l]=x?"0":"",B[E]=y?"0":"",B.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+d+"px)":"translate3d("+p+"px, "+d+"px, 0)",B))}return Object.assign({},j,(e={},e[l]=x?d+"px":"",e[E]=y?p+"px":"",e.transform="",e))}function Je(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:H(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Jt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Jt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ie={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Je,data:{}};function Ge(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!k(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var i=a[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function Ke(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!k(a)||!V(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const Qe={name:"applyStyles",enabled:!0,phase:"write",fn:Ge,effect:Ke,requires:["computeStyles"]};var Ze=[oe,Ie,ie,Qe],_e={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,function(e){return _e[e]})}var tr={start:"end",end:"start"};function Gt(t){return t.replace(/start|end/g,function(e){return tr[e]})}function er(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?_t:s,f=tt(n),m=f?i?Yt:Yt.filter(function(g){return tt(g)===f}):ft,h=m.filter(function(g){return u.indexOf(g)>=0});h.length===0&&(h=m);var p=h.reduce(function(g,d){return g[d]=Tt(t,{placement:d,boundary:a,rootBoundary:o,padding:c})[H(d)],g},{});return Object.keys(p).sort(function(g,d){return p[g]-p[d]})}function rr(t){if(H(t)===Ct)return[];var e=mt(t);return[Gt(t),e,Gt(e)]}function nr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,f=r.boundary,m=r.rootBoundary,h=r.altBoundary,p=r.flipVariations,g=p===void 0?!0:p,d=r.allowedAutoPlacements,v=e.options.placement,y=H(v),x=y===v,E=s||(x||!g?[mt(v)]:rr(v)),l=[v].concat(E).reduce(function(K,F){return K.concat(H(F)===Ct?er(e,{placement:F,boundary:f,rootBoundary:m,padding:u,flipVariations:g,allowedAutoPlacements:d}):F)},[]),b=e.rects.reference,w=e.rects.popper,O=new Map,D=!0,P=l[0],A=0;A<l.length;A++){var j=l[A],L=H(j),B=tt(j)===_,X=[C,S].indexOf(L)>=0,Y=X?"width":"height",$=Tt(e,{placement:j,boundary:f,rootBoundary:m,altBoundary:h,padding:u}),M=X?B?W:R:B?S:C;b[Y]>w[Y]&&(M=mt(M));var ct=mt(M),I=[];if(o&&I.push($[L]<=0),i&&I.push($[M]<=0,$[ct]<=0),I.every(function(K){return K})){P=j,D=!1;break}O.set(j,I)}if(D)for(var ut=g?3:1,yt=function(F){var rt=l.find(function(lt){var z=O.get(lt);if(z)return z.slice(0,F).every(function(bt){return bt})});if(rt)return P=rt,"break"},et=ut;et>0;et--){var pt=yt(et);if(pt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const ar={name:"flip",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"],data:{_skip:!1}};function or(t,e,r){var n=H(t),a=[R,C].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*a,[R,W].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function ir(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,c=_t.reduce(function(f,m){return f[m]=or(m,e.rects,o),f},{}),i=c[e.placement],s=i.x,u=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=c}const sr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ir};function fr(t){return t==="x"?"y":"x"}function ot(t,e,r){return J(t,ht(e,r))}function cr(t,e,r){var n=ot(t,e,r);return n>r?r:n}function ur(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,f=r.altBoundary,m=r.padding,h=r.tether,p=h===void 0?!0:h,g=r.tetherOffset,d=g===void 0?0:g,v=Tt(e,{boundary:s,rootBoundary:u,padding:m,altBoundary:f}),y=H(e.placement),x=tt(e.placement),E=!x,l=Rt(y),b=fr(l),w=e.modifiersData.popperOffsets,O=e.rects.reference,D=e.rects.popper,P=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(w){if(o){var B,X=l==="y"?C:R,Y=l==="y"?S:W,$=l==="y"?"height":"width",M=w[l],ct=M+v[X],I=M-v[Y],ut=p?-D[$]/2:0,yt=x===_?O[$]:D[$],et=x===_?-D[$]:-O[$],pt=e.elements.arrow,K=p&&pt?$t(pt):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:re(),rt=F[X],lt=F[Y],z=ot(0,O[$],K[$]),bt=E?O[$]/2-ut-z-rt-A.mainAxis:yt-z-rt-A.mainAxis,se=E?-O[$]/2+ut+z+lt+A.mainAxis:et+z+lt+A.mainAxis,wt=e.elements.arrow&&st(e.elements.arrow),fe=wt?l==="y"?wt.clientTop||0:wt.clientLeft||0:0,kt=(B=j==null?void 0:j[l])!=null?B:0,ce=M+bt-kt-fe,ue=M+se-kt,Lt=ot(p?ht(ct,ce):ct,M,p?J(I,ue):I);w[l]=Lt,L[l]=Lt-M}if(i){var Mt,pe=l==="x"?C:R,le=l==="x"?S:W,U=w[b],vt=b==="y"?"height":"width",St=U+v[pe],Wt=U-v[le],xt=[C,R].indexOf(y)!==-1,Ht=(Mt=j==null?void 0:j[b])!=null?Mt:0,Vt=xt?St:U-O[vt]-D[vt]-Ht+A.altAxis,Nt=xt?U+O[vt]+D[vt]-Ht-A.altAxis:Wt,Ft=p&&xt?cr(Vt,U,Nt):ot(p?Vt:St,U,p?Nt:Wt);w[b]=Ft,L[b]=Ft-U}e.modifiersData[n]=L}}const pr={name:"preventOverflow",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"]};var lr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ne(typeof e!="number"?e:ae(e,ft))};function vr(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=H(r.placement),s=Rt(i),u=[R,W].indexOf(i)>=0,f=u?"height":"width";if(!(!o||!c)){var m=lr(a.padding,r),h=$t(o),p=s==="y"?C:R,g=s==="y"?S:W,d=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],v=c[s]-r.rects.reference[s],y=st(o),x=y?s==="y"?y.clientHeight||0:y.clientWidth||0:0,E=d/2-v/2,l=m[p],b=x-h[f]-m[g],w=x/2-h[f]/2+E,O=ot(l,w,b),D=s;r.modifiersData[n]=(e={},e[D]=O,e.centerOffset=O-w,e)}}function dr(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||te(e.elements.popper,a)&&(e.elements.arrow=a))}const mr={name:"arrow",enabled:!0,phase:"main",fn:vr,effect:dr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},hr=qe({defaultModifiers:[...Ze,sr,ar,pr,ie,oe,mr]});function br({locked:t=!1,overflowPadding:e=8,offsetDistance:r=8,offsetSkid:n=0,gpuAcceleration:a=!0,adaptive:o=!0,scroll:c=!0,resize:i=!0,arrow:s=!1,placement:u,strategy:f},m){const h=Ot(null),p=Ot(null),g=Ot(null);return ve(()=>{de(d=>{if(!p.value||!h.value&&!(m!=null&&m.value))return;const v=qt(p),y=qt(h);if(!(v instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!t},{name:"preventOverflow",options:{padding:e}},{name:"offset",options:{offset:[n,r]}},{name:"computeStyles",options:{adaptive:o,gpuAcceleration:a}},{name:"eventListeners",options:{scroll:c,resize:i}},{name:"arrow",enabled:s}]};u&&(x.placement=u),f&&(x.strategy=f),g.value=hr(y,v,x),d(g.value.destroy)})}),[h,p,g]}export{br as u};
