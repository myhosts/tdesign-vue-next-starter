import{d as m,j as a,E as O,G as y,H as h}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.88 1.38l1.28.22a4 4 0 013.34 3.94V8h5.32a2 2 0 011.97 2.33l-1.66 10A2 2 0 0119.15 22H7V10.8l3.88-9.42zm1.23 2.26L9 11.2V20h10.15l1.67-10H13.5V5.54a2 2 0 00-1.39-1.9zM4 10v12H2V10h2z"}}]},g=m({name:"ThumbUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=O(r),c=a(()=>["t-icon","t-icon-thumb-up",l.value]),u=a(()=>s(s({},p.value),t.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(b,v.value)}});export{g as default};
