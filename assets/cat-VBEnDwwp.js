import{d as m,j as a,E as O,G as y,H as d}from"./index-Ml_qX-84.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 .66l6.48 1.92a11.24 11.24 0 019.04 0L23 .66v12.05C22.77 18.46 17.9 23 12 23 6.1 23 1.22 18.46 1 12.71V.66zm2 5.52c.6-.83 1.32-1.58 2.14-2.2L3 3.33v2.84zm0 6.14C3 17.08 7 21 12 21s9-3.92 9-8.68a8.66 8.66 0 00-4.99-7.77 9.23 9.23 0 00-8.02 0A8.66 8.66 0 003 12.32zm18-6.14V3.34l-2.14.63c.82.63 1.54 1.38 2.14 2.2zM9 9v3H7V9h2zm8 0v3h-2V9h2zm-5 3.26l.9 1.8c.37.75.85.98 1.18 1 .34.03.76-.13 1.09-.61l.55-.84 1.67 1.11-.56.83a3.2 3.2 0 01-2.91 1.5 3.16 3.16 0 01-1.92-.88c-.55.52-1.2.83-1.92.89a3.2 3.2 0 01-2.91-1.5l-.56-.84 1.67-1.1.55.83c.33.48.75.64 1.09.62.33-.03.8-.26 1.19-1.02l.89-1.79z"}}]},b=m({name:"CatIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=O(r),p=a(()=>["t-icon","t-icon-cat",l.value]),v=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(g,u.value)}});export{b as default};
