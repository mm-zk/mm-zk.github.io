import{a as j,b as G}from"./DDKP8QyW.js";import{_ as q,a as z,b as J}from"./Baig94vH.js";import{_ as K}from"./CdcDx_4b.js";import{m as Q,n as k,v as X,_ as Z}from"./DJ4o4lhc.js";import{_ as tt}from"./9hk4BnPi.js";import{g as et,a0 as ot,W as nt,H as o,D,w as u,o as e,b as n,d as m,t as d,Y as t,c as s,x as r,a as p,A as st,F as at,a1 as rt}from"./Bv7MNHO9.js";import{C as B,R as ct,_ as it}from"./BnCO_dDe.js";import{B as ut}from"./BnUShGWR.js";import{D as lt}from"./CJnDfkvU.js";import"./DC-FCEYN.js";import"./BJGrno59.js";import"./ChehFXd5.js";import"./CUxkBcNo.js";import"./lHGMc_ei.js";import"./CVPfHb8q.js";import"./xBA07dEl.js";import"./BQkc-AXV.js";const _t={key:0,class:"m-4"},mt={key:1},dt={key:2},pt=p("br",null,null,-1),ht={key:0},gt={key:0},ft={key:1},bt={key:1},vt={key:0,class:"m-4"},wt=p("br",null,null,-1),yt=p("br",null,null,-1),Wt=et({__name:"[githublogin]",setup(kt){const R=ot(),{account:h}=nt(Q()),c=R.params.githublogin,g=k({address:B.DevNFT,abi:lt}),T=o(0),C=o(""),f=o(!1),A=o(BigInt(0)),b=o(""),$=X(),v=o(!1),E=k({address:B.ReviewToken,abi:ct}),N=k({address:B.Bounty,abi:ut}),w=o(0),y=o([]),x=o(0);$.getBlock().then(i=>{console.log("setting bt: ",i.timestamp),x.value=Number(i.timestamp)});const l=o(null);(async()=>{const i=`https://api.github.com/users/${c}`;l.value=await fetch(i).then(a=>a.json()).then(a=>a.message?null:a)})();const F=async()=>{w.value=Number(await N.read.getUserBountiesCount([c])),y.value=await N.read.getUserBounties([c,BigInt(w.value)]),console.log(y.value)};return(async()=>{if(await g.read.exists([c])){C.value="exists";const a=await g.read.githubToToken([c]);A.value=a;const _=await g.read.ownerOf([a]);b.value=_,v.value=_==h.value.address,T.value=Number(await E.read.balanceOf([_]))}else C.value="not set",f.value=!0;F()})(),(i,a)=>{const _=j,I=q,U=K,O=Z,S=tt,H=J,P=z,V=rt,M=G,W=it;return e(),D(W,null,{default:u(()=>[n(M,{grow:""},{default:u(()=>[n(_,{title:"PR Bounty List"}),n(I,{class:"py-0 px-4 overflow-x-auto"},{default:u(()=>[m(" Browsing #"+d(t(c))+" github ",1)]),_:1}),t(l)?(e(),s("div",_t,[n(U,{ghUser:t(l)},null,8,["ghUser"])])):r("",!0),t(f)?(e(),s("div",mt," ADDRESS NOT Mapped - please click Add button above to connect link your wallet. ")):r("",!0),t(f)?r("",!0):(e(),s("div",dt,[m(" Current owner of this github is: "+d(t(b))+" ",1),pt,t(h).isConnected?(e(),s("div",ht,[t(v)?(e(),s("div",gt,"YOU ARE THE OWNER.")):r("",!0),t(v)?r("",!0):(e(),s("div",ft," You are NOT the owner - maybe you connected a wrong wallet? "))])):r("",!0),t(h).isConnected?r("",!0):(e(),s("div",bt," You didn't connect the wallet, but you can still browse. ")),n(S,null,{default:u(()=>[t(l)?(e(),s("div",vt,[n(U,{ghUser:t(l),showShowButton:"false"},null,8,["ghUser"])])):r("",!0),m(" "+d(t(b))+" ",1),wt,n(O,{class:"w-12 h-12 text-green-600",name:"ph:coin-vertical-duotone",dynamic:""}),m(" RVW: "+d(t(T)),1)]),_:1})])),p("div",null,[m(" Bounties for this user "+d(t(w))+" ",1),yt,n(V,{class:"mt-4"},{default:u(()=>[n(P,null,{default:u(()=>[(e(!0),s(at,null,st(t(y),(Y,L)=>(e(),D(H,{key:L,bounty:Y,currentBlockTimestamp:t(x)},null,8,["bounty","currentBlockTimestamp"]))),128))]),_:1})]),_:1})])]),_:1})]),_:1})}}});export{Wt as default};