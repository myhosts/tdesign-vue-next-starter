import{d as h,j as a,E as O,G as m,H as y}from"./index-Ml_qX-84.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2h8c1.2 0 2.27.52 3 1.35A3.99 3.99 0 0115 2h8v19h-1c-2.94 0-5.14.25-6.59.49a20.76 20.76 0 00-2.08.45h-.01l-.16.06h-2.32l-.15-.05h-.02a5.53 5.53 0 00-.47-.14c-.35-.08-.9-.2-1.61-.32A40.34 40.34 0 002 21H1V2zm2 2v15c2.56.06 4.54.28 5.91.51a22.78 22.78 0 012.09.45V6a2 2 0 00-2-2H3zm10 2v13.96l.32-.09c.4-.1.99-.23 1.77-.36a40.8 40.8 0 015.91-.5V4h-6a2 2 0 00-2 2zm2 2h4v2h-4V8zm0 3h4v2h-4v-2z"}}]},g=h({name:"BookOpenIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-book-open",o.value]),v=a(()=>i(i({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(d,u.value)}});export{g as default};
