import{g as le,_ as D,f as ne,x as te,y as ie,a as oe}from"./BzQ-futs.js";import{P as F,H as M,j as s,m as se,a3 as ue,f as w,_ as de,g as R,h as H,i as A,B as re,J as ce,k as Y,l as S,o as f,c as B,a as N,q as T,s as y,r as c,b as U,x as p,a4 as ge,a5 as fe,a6 as ve,D as E,w as me,Y as o,d as J,t as L,Z as ye}from"./Ct7yaE1L.js";import{_ as be}from"./C_sRmFWt.js";const Ie=(e,l)=>{const b=F("form-events",void 0),a=F("form-group",void 0),C=F("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),C&&(C.value[a.name.value]=a.inputId.value));const I=M(!1);function g(i,v){b&&b.emit({type:i,path:v})}function d(){g("blur",a==null?void 0:a.name.value),I.value=!0}function $(){g("change",a==null?void 0:a.name.value)}const t=le(()=>{(I.value||a!=null&&a.eagerValidation.value)&&g("input",a==null?void 0:a.name.value)},300);return{inputId:s(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:s(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:s(()=>{var v;const i=l.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??i??((v=l==null?void 0:l.default)==null?void 0:v.size)}),color:s(()=>{var i;return(i=a==null?void 0:a.error)!=null&&i.value?"red":e==null?void 0:e.color}),emitFormBlur:d,emitFormInput:t,emitFormChange:$}},m=se(w.ui.strategy,w.ui.input,ue),he=R({components:{UIcon:D},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>m.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(m.size).includes(e)}},color:{type:String,default:()=>m.default.color,validator(e){return[...w.ui.colors,...Object.keys(m.color)].includes(e)}},variant:{type:String,default:()=>m.default.variant,validator(e){return[...Object.keys(m.variant),...Object.values(m.color).flatMap(l=>Object.keys(l))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:l,slots:b}){const{ui:a,attrs:C}=H("input",A(e,"ui"),m,A(e,"class")),{size:I,rounded:g}=ne({ui:a,props:e}),{emitFormBlur:d,emitFormInput:$,size:t,color:i,inputId:v,name:u}=Ie(e,m),r=s(()=>I.value||t.value),k=M(re({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),V=M(null),O=()=>{var n;e.autofocus&&((n=V.value)==null||n.focus())},z=n=>{k.value.trim&&(n=n.trim()),(k.value.number||e.type==="number")&&(n=ge(n)),l("update:modelValue",n),$()},Z=n=>{k.value.lazy||z(n.target.value)},K=n=>{if(e.type==="file"){const h=n.target.files;l("change",h)}else{const h=n.target.value;l("change",h),k.value.lazy&&z(h),k.value.trim&&(n.target.value=h.trim())}},Q=n=>{d(),l("blur",n)};ce(()=>{setTimeout(()=>{O()},e.autofocusDelay)});const X=s(()=>{var h,W;const n=((W=(h=a.value.color)==null?void 0:h[i.value])==null?void 0:W[e.variant])||a.value.variant[e.variant];return Y(S(a.value.base,a.value.form,g.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[r.value],e.padded?a.value.padding[r.value]:"p-0",n==null?void 0:n.replaceAll("{color}",i.value),(j.value||b.leading)&&a.value.leading.padding[r.value],(q.value||b.trailing)&&a.value.trailing.padding[r.value]),e.inputClass)}),j=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),q=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),x=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),G=s(()=>e.loading&&!j.value?e.loadingIcon:e.trailingIcon||e.icon),P=s(()=>S(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[r.value])),_=s(()=>S(a.value.icon.base,i.value&&w.ui.colors.includes(i.value)&&a.value.icon.color.replaceAll("{color}",i.value),a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),ee=s(()=>S(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[r.value])),ae=s(()=>S(a.value.icon.base,i.value&&w.ui.colors.includes(i.value)&&a.value.icon.color.replaceAll("{color}",i.value),a.value.icon.size[r.value],e.loading&&!j.value&&a.value.icon.loading));return{ui:a,attrs:C,name:u,inputId:v,input:V,isLeading:j,isTrailing:q,inputClass:X,leadingIconName:x,leadingIconClass:_,leadingWrapperIconClass:P,trailingIconName:G,trailingIconClass:ae,trailingWrapperIconClass:ee,onInput:Z,onChange:K,onBlur:Q}}}),pe=["id","name","value","type","required","placeholder","disabled"];function Be(e,l,b,a,C,I){const g=D;return f(),B("div",{class:c(e.type==="hidden"?"hidden":e.ui.wrapper)},[N("input",T({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:l[0]||(l[0]=(...d)=>e.onInput&&e.onInput(...d)),onBlur:l[1]||(l[1]=(...d)=>e.onBlur&&e.onBlur(...d)),onChange:l[2]||(l[2]=(...d)=>e.onChange&&e.onChange(...d))}),null,16,pe),y(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(f(),B("span",{key:0,class:c(e.leadingWrapperIconClass)},[y(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[U(g,{name:e.leadingIconName,class:c(e.leadingIconClass)},null,8,["name","class"])])],2)):p("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(f(),B("span",{key:1,class:c(e.trailingWrapperIconClass)},[y(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[U(g,{name:e.trailingIconName,class:c(e.trailingIconClass)},null,8,["name","class"])])],2)):p("",!0)],2)}const ze=de(he,[["render",Be]]),Se=R({inheritAttrs:!1,__name:"DashboardModal",props:{modelValue:{type:Boolean,default:!1},icon:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},preventClose:{type:Boolean,default:!1},closeButton:{type:Object,default:()=>({})},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:l}){const b=fe(),a=ve(),C=s(()=>({rounded:"sm:rounded-lg",shadow:"sm:shadow-xl",width:"sm:max-w-xl",height:"h-dvh sm:h-auto",padding:"p-0",header:{base:"flex items-start justify-between gap-x-1.5 flex-shrink-0 min-h-[--header-height]",inner:"flex items-start gap-4",padding:Y("px-4 py-4 sm:px-6",a.default||a.footer?"pb-0":void 0)},body:{base:"flex-1 flex flex-col gap-y-3",padding:"px-4 py-5 sm:p-6"},footer:{base:"flex items-center gap-x-1.5 flex-shrink-0",padding:"px-4 py-4 sm:px-6"},title:"text-gray-900 dark:text-white font-semibold",description:"mt-1 text-gray-500 dark:text-gray-400 text-sm",icon:{wrapper:"inline-flex",base:"w-12 h-12 flex-shrink-0 text-gray-900 dark:text-white"},default:{closeButton:{icon:b.ui.icons.close,color:"gray",variant:"ghost",size:"sm"}}})),I=e,g=l,d=s({get(){return I.modelValue},set(u){g("update:modelValue",u)}}),$=te(ie),{ui:t,attrs:i}=H("dashboard.modal",A(I,"ui"),C,void 0,!0),v=$.smaller("sm");return(u,r)=>{const k=D,V=oe,O=be;return f(),E(O,T({modelValue:o(d),"onUpdate:modelValue":r[1]||(r[1]=z=>ye(d)?d.value=z:null),overlay:!o(v),transition:!o(v),"prevent-close":e.preventClose,ui:o(t)},o(i)),{default:me(()=>[N("div",{class:c([o(t).header.base,o(t).header.padding])},[y(u.$slots,"header",{},()=>[N("div",{class:c(o(t).header.inner)},[e.icon||u.$slots.icon?(f(),B("div",{key:0,class:c(o(t).icon.wrapper)},[y(u.$slots,"icon",{},()=>[U(k,{name:e.icon,class:c(o(t).icon.base)},null,8,["name","class"])])],2)):p("",!0),N("div",null,[e.title||u.$slots.title?(f(),B("p",{key:0,class:c(o(t).title)},[y(u.$slots,"title",{},()=>[J(L(e.title),1)])],2)):p("",!0),e.description||u.$slots.description?(f(),B("p",{key:1,class:c(o(t).description)},[y(u.$slots,"description",{},()=>[J(L(e.description),1)])],2)):p("",!0)])],2),e.closeButton?(f(),E(V,T({key:0,"aria-label":"Close"},{...o(t).default.closeButton,...e.closeButton},{onClick:r[0]||(r[0]=z=>d.value=!1)}),null,16)):p("",!0)])],2),u.$slots.default?(f(),B("div",{key:0,class:c([o(t).body.base,o(t).body.padding])},[y(u.$slots,"default")],2)):p("",!0),u.$slots.footer?(f(),B("div",{key:1,class:c([o(t).footer.base,o(t).footer.padding])},[y(u.$slots,"footer")],2)):p("",!0)]),_:3},16,["modelValue","overlay","transition","prevent-close","ui"])}}});export{ze as _,Se as a,Ie as u};