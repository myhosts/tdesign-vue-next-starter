import{d as N,i as z,r as $,j as I,k as V,n as j,l as A,w as m,o as F,f as L,p as e,s as l,a as t,u as s,e as o,q as x,b as n,x as h,t as f,y as q,g as H}from"./index-Ml_qX-84.js";import{T as C}from"./index-Bm6LPhrA.js";import{L as k}from"./date-Dv7FH39n.js";import{c as B}from"./index-tGiBIPZO.js";import{u as M,i as Y,h as G,j as J}from"./charts-JWXmVNkS.js";import{c as K,b as P,a as Q}from"./install-QUJsnd72.js";const R={class:"inner-card__content"},U={class:"inner-card__content-footer"},X={class:"inner-card__content"},Z={class:"inner-card__content-footer"},ee={name:"DashboardBase"},te=N({...ee,setup(ae){M([K,P,Q,Y,G]);const _=z(),p=$(1),v=I(()=>_.chartColors);let d,r;const O=()=>{d||(d=document.getElementById("stokeContainer")),r=J(d),r.setOption(B({dateTime:k,...v.value}))},b=()=>{O()},g=()=>{document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?p.value=Number((document.documentElement.clientWidth/2080).toFixed(2)):document.documentElement.clientWidth<1080?p.value=Number((document.documentElement.clientWidth/1080).toFixed(2)):p.value=1,r.resize({width:d.clientWidth,height:d.clientHeight})};V(()=>{b(),j(()=>{g()})});const{width:T,height:S}=A();m([T,S],()=>{g()}),m(()=>_.brandTheme,()=>{q([r])}),m(()=>_.mode,()=>{[r].forEach(c=>{c.dispose()}),b()});const y=c=>{r.setOption(B({dateTime:c,...v.value}))};return(c,a)=>{const E=l("t-date-range-picker"),i=l("t-card"),u=l("t-col"),W=l("t-button"),w=l("t-row");return F(),L(i,{bordered:!1},{default:e(()=>[t(w,null,{default:e(()=>[t(u,{xs:12,xl:9},{default:e(()=>[t(i,{bordered:!1,title:s(o)("pages.dashboardBase.outputOverview.title"),subtitle:s(o)("pages.dashboardBase.outputOverview.subtitle"),class:x({"dashboard-overview-card":!0,"overview-panel":!0})},{actions:e(()=>[t(E,{class:"card-date-picker-container",theme:"primary",mode:"date","default-value":s(k),onChange:a[0]||(a[0]=D=>y(D))},null,8,["default-value"])]),default:e(()=>[a[1]||(a[1]=n("div",{id:"stokeContainer",style:{width:"100%",height:"351px"},class:"dashboard-chart-container"},null,-1))]),_:1},8,["title","subtitle"])]),_:1}),t(u,{xs:12,xl:3},{default:e(()=>[t(i,{bordered:!1,class:x({"dashboard-overview-card":!0,"export-panel":!0})},{actions:e(()=>[t(W,null,{default:e(()=>[h(f(s(o)("pages.dashboardBase.outputOverview.export")),1)]),_:1})]),default:e(()=>[t(w,null,{default:e(()=>[t(u,{xs:6,xl:12},{default:e(()=>[t(i,{bordered:!1,subtitle:s(o)("pages.dashboardBase.outputOverview.month.input"),class:"inner-card"},{default:e(()=>[n("div",R,[a[2]||(a[2]=n("div",{class:"inner-card__content-title"},"1726",-1)),n("div",U,[h(f(s(o)("pages.dashboardBase.outputOverview.since"))+" ",1),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1},8,["subtitle"])]),_:1}),t(u,{xs:6,xl:12},{default:e(()=>[t(i,{bordered:!1,subtitle:s(o)("pages.dashboardBase.outputOverview.month.output"),class:"inner-card"},{default:e(()=>[n("div",X,[a[3]||(a[3]=n("div",{class:"inner-card__content-title"},"226",-1)),n("div",Z,[h(f(s(o)("pages.dashboardBase.outputOverview.since"))+" ",1),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1},8,["subtitle"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),le=H(te,[["__scopeId","data-v-1372ad89"]]);export{le as default};
