import{d as y,j as a,E as O,G as h,H as m}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 1h12.41L21 6.59v4.91h-2V9h-6V3H5v18h6.5v2H3V1zm12 2.41V7h3.59L15 3.41zM13.5 13.5h9v5.63a3 3 0 01-1.36 2.52L18 23.7l-3.14-2.05a3 3 0 01-1.36-2.52V13.5zm2 2v3.63a1 1 0 00.45.84L18 21.31l2.05-1.34a1 1 0 00.45-.84V15.5h-5z"}}]},b=y({name:"FileSafetyIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-file-safety",l.value]),v=a(()=>s(s({},c.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>h(d,f.value)}});export{b as default};
