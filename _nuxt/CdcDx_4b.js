import{_ as U}from"./CVPfHb8q.js";import{n as w,_ as B,a as T}from"./DJ4o4lhc.js";import{_ as b}from"./9hk4BnPi.js";import{C as g,R as A}from"./BnCO_dDe.js";import{D}from"./CJnDfkvU.js";import{g as N,H as i,K as H,o as a,D as s,w as S,a as t,b as R,t as m,Y as l,c as V,x as _}from"./Bv7MNHO9.js";const F={class:"flex items-center justify-between gap-3 py-3 px-4 sm:px-6"},I={class:"flex items-center gap-3 min-w-0"},$={class:"text-sm min-w-0"},L={class:"text-gray-900 dark:text-white font-medium truncate"},O={class:"text-gray-500 dark:text-gray-400 truncate"},j={key:0},E={class:"flex items-center gap-3"},J=N({__name:"Show",props:{ghUser:{},showShowButton:{type:Boolean}},emits:["createHunter"],setup(f){const d=f,n=i(!1),u=i(null),p=i(null),r=w({address:g.DevNFT,abi:D}),y=w({address:g.ReviewToken,abi:A}),v=async e=>{const o=await r.read.exists([e.login.toLowerCase()]);if(o){const c=await r.read.githubToToken([e.login.toLowerCase()]);u.value=await r.read.ownerOf([c]),p.value=await y.read.balanceOf([u.value])}n.value=o};H(()=>d.ghUser,async e=>{e&&await v(e)},{immediate:!0});const k=async()=>{window.location.href="/hunter/"+d.ghUser.login};return(e,o)=>{const c=U,x=B,h=T,C=b;return e.ghUser?(a(),s(C,{key:0},{default:S(()=>[t("div",F,[t("div",I,[R(c,{src:e.ghUser.avatar_url,alt:"Avatar"},null,8,["src"]),t("div",$,[t("p",L,m(e.ghUser.login),1),t("p",O,m(e.ghUser.name),1)]),l(n)?(a(),V("div",j,m(l(p))+" RVW",1)):_("",!0)]),t("div",E,[l(n)?(a(),s(x,{key:0,class:"w-12 h-12 text-primary-800",name:"game-icons:samus-helmet",dynamic:""})):(a(),s(h,{key:1,label:"Add",color:"primary",onClick:o[0]||(o[0]=K=>e.$emit("createHunter",e.ghUser.login))})),e.showShowButton?(a(),s(h,{key:2,label:"Show",color:"primary",onClick:k})):_("",!0)])])]),_:1})):_("",!0)}}});export{J as _};