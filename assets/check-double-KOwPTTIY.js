import{d as O,j as l,E as y,G as d,H as b}from"./index-Ml_qX-84.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.66 7.17l-5.3 5.3-1.42-1.41 5.3-5.3 1.42 1.41zm5.65 0l-10.6 10.6-6.37-6.36L7.76 10l4.95 4.95 9.19-9.2 1.41 1.42zM2.11 10l4.94 4.95.35-.35L8.82 16l-1.77 1.77L.69 11.4 2.1 10z"}}]},h=O({name:"CheckDoubleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=y(t),p=l(()=>["t-icon","t-icon-check-double",a.value]),u=l(()=>i(i({},s.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(m,v.value)}});export{h as default};
