import{d as h,j as a,E as O,G as y,H as g}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.17 5h5.66a3 3 0 00-5.66 0zM7 6a5 5 0 0110 0v1H7V6zM5 4v2.59L6.41 8H17.6L19 6.59V4h2v3.41l-3 3V12h3v2h-3v1.59l3 3V22h-2v-2.59l-1.36-1.36A6 6 0 0113 21.92V22h-1a6 6 0 01-5.64-3.95L5 19.41V22H3v-3.41l3-3V14H3v-2h3v-1.59l-3-3V4h2zm3 6.41V16a4 4 0 003 3.87V10H8.41l-.41.41zm5-.41v9.87A4 4 0 0016 16v-5.59l-.41-.41H13z"}}]},b=h({name:"BugIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:v}=O(t),c=a(()=>["t-icon","t-icon-bug",l.value]),p=a(()=>s(s({},v.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
