import{d as O,j as a,E as y,G as d,H as m}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 .85l9.66 5.57v11.16L12 23.15l-9.66-5.57V6.42L12 .85zm0 2.3L4.34 7.58v8.84L12 20.85l7.66-4.43V7.58L12 3.15zM8.72 8.61L12 10.8l3.28-2.19 1.1 1.67L13 12.54V16h-2v-3.46l-3.39-2.26L8.72 8.6z"}}]},j=O({name:"ApplicationIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=y(r),s=a(()=>["t-icon","t-icon-application",l.value]),v=a(()=>p(p({},c.value),t.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,u.value)}});export{j as default};
