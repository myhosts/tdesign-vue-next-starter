import{d,j as a,E as O,G as y,H as h}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.25 3H23v2H12.75L7.88 21.42l-4.21-6.78H1v-2h3.78l2.45 3.94L11.25 3zM22 10v2.14a2 2 0 01-.73 1.54l-2.2 1.82 2.2 1.82a2 2 0 01.73 1.54V21h-2v-2.14l-2.5-2.06-2.5 2.06V21h-2v-2.14a2 2 0 01.73-1.54l2.2-1.82-2.2-1.82a2 2 0 01-.73-1.54V10h2v2.14l2.5 2.06 2.5-2.06V10h2z"}}]},b=d({name:"QuadraticIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-quadratic",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};