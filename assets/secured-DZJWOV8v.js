import{d,j as a,E as O,G as m,H as y}from"./index-Ml_qX-84.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .44l10 3.5V12c0 4.13-2.53 7.01-4.9 8.8a19.74 19.74 0 01-4.73 2.63l-.03.01-.34-.94-.33.94h-.04a6.99 6.99 0 01-.4-.16A19.75 19.75 0 016.9 20.8C4.54 19 2 16.12 2 12V3.94l10-3.5zm0 22.06l-.33.94.33.12.33-.12-.33-.94zm0-1.07a17.75 17.75 0 003.89-2.21c2.14-1.63 4.11-4 4.11-7.22V5.36l-8-2.8-8 2.8V12c0 3.22 1.97 5.59 4.1 7.2a17.75 17.75 0 003.9 2.23zm6.07-13.09L11 15.41l-4.24-4.24 1.41-1.41L11 12.59l5.66-5.66 1.41 1.41z"}}]},j=d({name:"SecuredIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-secured",l.value]),u=a(()=>i(i({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{j as default};