import{o as a,c as v,b as c,d as O,e as i,r as k,Y,Z as j,j as P,s as n,a as l,p as o,F as D,v as V,f as y,t as h,u,q as Z,$ as G,x as I,g as H}from"./index-Ml_qX-84.js";const J={xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none"};function K(L,g){return a(),v("svg",J,g[0]||(g[0]=[c("path",{fill:"currentcolor","fill-opacity":".26","fill-rule":"evenodd",d:"m32 10.69 26.248 15.155v22.31L32 63.308 5.75 48.155v-22.31zM9.75 30.464v15.381L32 58.69l22.248-12.845V30.464L32 43.309zM52.248 27 40.66 33.69l-8.66-5-8.66 5L11.75 27 32 15.31zM27.34 36 32 38.69 36.66 36 32 33.31zM30 8V0h4v8zM44.268 10.751l4-6.928 3.464 2-4 6.928zM16.268 12.751l-4-6.928 3.464-2 4 6.928z","clip-rule":"evenodd"},null,-1)]))}const Q={render:K},W={class:"secondary-notification"},X=["onClick"],ee={class:"msg-date"},te={class:"msg-action"},ae=["onClick"],se=["onClick"],ne={key:1,class:"secondary-msg-list__empty-list"},le={name:"DetailSecondary"},oe=O({...le,setup(L){const g=[{label:i("pages.detailSecondary.all"),value:"msgData"},{label:i("pages.detailSecondary.unread"),value:"unreadMsg"},{label:i("pages.detailSecondary.read"),value:"readMsg"}],_=k("msgData"),m=k(!1),f=k(),b=Y(),{msgData:M,unreadMsg:T,readMsg:w}=j(b),x=P(()=>_.value==="msgData"?M.value:_.value==="unreadMsg"?T.value:_.value==="readMsg"?w.value:[]),B=s=>{m.value=!0,f.value=s},S=s=>{const e=M.value;e.forEach(d=>{d.id===s.id&&(d.status=!d.status)}),b.setMsgData(e)},N=()=>{const s=f.value,e=M.value;e.forEach((d,p)=>{d.id===(s==null?void 0:s.id)&&e.splice(p,1)}),m.value=!1,b.setMsgData(e)};return(s,e)=>{const d=n("t-tag"),p=n("t-icon"),C=n("t-tooltip"),$=n("t-list-item"),E=n("t-list"),q=n("t-tab-panel"),F=n("t-tabs"),R=n("t-dialog");return a(),v("div",null,[c("div",W,[l(F,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=r=>_.value=r)},{default:o(()=>[(a(),v(D,null,V(g,(r,U)=>l(q,{key:U,value:r.value,label:r.label},{default:o(()=>[x.value.length>0?(a(),y(E,{key:0,class:"secondary-msg-list",split:!0},{default:o(()=>[(a(!0),v(D,null,V(x.value,(t,A)=>(a(),y($,{key:A},{action:o(()=>[c("span",ee,h(t.date),1),c("div",te,[l(C,{class:"set-read-icon","overlay-style":{margin:"6px"},content:t.status?u(i)("pages.detailSecondary.setRead"):u(i)("pages.detailSecondary.setUnread")},{default:o(()=>[c("span",{class:"msg-action-icon",onClick:z=>S(t)},[t.status?(a(),y(p,{key:0,name:"queue",size:"16px"})):(a(),y(p,{key:1,name:"chat"}))],8,ae)]),_:2},1032,["content"]),l(C,{content:u(i)("pages.detailSecondary.delete"),"overlay-style":{margin:"6px"}},{default:o(()=>[c("span",{onClick:z=>B(t)},[l(p,{name:"delete",size:"16px"})],8,se)]),_:2},1032,["content"])])]),default:o(()=>[c("p",{class:Z(["content",{unread:t.status}]),onClick:z=>S(t)},[l(d,{size:"medium",theme:u(G).get(t.quality),variant:"light"},{default:o(()=>[I(h(t.type),1)]),_:2},1032,["theme"]),I(" "+h(t.content),1)],10,X)]),_:2},1024))),128))]),_:1})):(a(),v("div",ne,[l(u(Q)),c("p",null,h(u(i)("pages.detailSecondary.empty")),1)]))]),_:2},1032,["value","label"])),64))]),_:1},8,["modelValue"])]),l(R,{visible:m.value,"onUpdate:visible":e[1]||(e[1]=r=>m.value=r),header:"删除通知",body:`确认删除通知：${f.value&&f.value.content}吗？`,"on-confirm":N},null,8,["visible","body"])])}}}),de=H(oe,[["__scopeId","data-v-ed5ad5ae"]]);export{de as default};
