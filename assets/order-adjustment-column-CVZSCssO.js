import{d,j as a,E as m,G as O,H as y}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 3v8h5.59l-2-2L18 7.59 22.41 12 18 16.41 16.59 15l2-2H13v8h-2v-8H5.41l2 2L6 16.41 1.59 12 6 7.59 7.41 9l-2 2H11V3h2z"}}]},h=d({name:"OrderAdjustmentColumnIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=m(t),u=a(()=>["t-icon","t-icon-order-adjustment-column",o.value]),p=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:u.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(j,v.value)}});export{h as default};
