import{a as v,b as D}from"./DDKP8QyW.js";import{_ as w,a as x,b as P}from"./Baig94vH.js";import{g as T,a0 as U,W as $,H as r,D as _,w as t,o as c,b as o,d as N,t as p,Y as a,c as R,A,F,a1 as I}from"./Bv7MNHO9.js";import{C as L,_ as S}from"./BnCO_dDe.js";import{m as V,n as W,v as z}from"./DJ4o4lhc.js";import{B as E}from"./BnUShGWR.js";import"./DC-FCEYN.js";import"./BJGrno59.js";import"./ChehFXd5.js";import"./CUxkBcNo.js";import"./lHGMc_ei.js";import"./9hk4BnPi.js";import"./CJnDfkvU.js";import"./xBA07dEl.js";import"./BQkc-AXV.js";const ct=T({__name:"[id]",setup(G){const e=U();$(V());const m="matter-labs/zksync-era",i=W({address:L.Bounty,abi:E}),n=r(0),s=r([]),u=r(0);return z().getBlock().then(l=>{u.value=Number(l.timestamp)}),(async()=>{n.value=Number(await i.read.getBountiesCount([m,e.params.id])),s.value=await i.read.getBounties([m,e.params.id,BigInt(n.value)]),console.log(s.value)})(),(l,j)=>{const d=v,f=w,b=P,B=x,g=I,y=D,C=S;return c(),_(C,null,{default:t(()=>[o(y,{grow:""},{default:t(()=>[o(d,{title:"PR Bounty List"}),o(f,{class:"py-0 px-4 overflow-x-auto"},{default:t(()=>[N(" PR #"+p(a(e).params.id)+" - "+p(a(n))+" bounties ",1)]),_:1}),o(g,{class:"mt-4"},{default:t(()=>[o(B,null,{default:t(()=>[(c(!0),R(F,null,A(a(s),(k,h)=>(c(),_(b,{key:h,bounty:k,currentBlockTimestamp:a(u)},null,8,["bounty","currentBlockTimestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ct as default};