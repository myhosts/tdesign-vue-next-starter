import{d as O,j as a,E as y,G as g,H as h}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.13 1.6l2.36 2.83a7.49 7.49 0 015.02 0l2.36-2.84 1.54 1.28-2.09 2.5A7.52 7.52 0 0119.07 9H22v2h-2.52l.02.5v5c0 .17 0 .33-.02.5H22v2h-2.93a7.5 7.5 0 01-14.14 0H2v-2h2.52a7.61 7.61 0 01-.02-.5v-5c0-.17 0-.33.02-.5H2V9h2.93a7.52 7.52 0 012.75-3.63l-2.09-2.5L7.13 1.6zM12 6a5.47 5.47 0 00-5.5 5.5v5a5.5 5.5 0 0011 0v-5A5.5 5.5 0 0012 6zm-3 4h6v2H9v-2zm0 6h6v2H9v-2z"}}]},b=O({name:"BugReportIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),v=a(()=>["t-icon","t-icon-bug-report",o.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>g(m,u.value)}});export{b as default};