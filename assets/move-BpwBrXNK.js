import{d as m,j as a,E as f,G as O,H as y}from"./index-Ml_qX-84.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.75 2.25h3v3h-3v-3zm7.5 0h3v3h-3v-3zm-7.5 5.5h3v3h-3v-3zm7.5 0h3v3h-3v-3zm-7.5 5.5h3v3h-3v-3zm7.5 0h3v3h-3v-3zm-7.5 5.5h3v3h-3v-3zm7.5 0h3v3h-3v-3z"}}]},z=m({name:"MoveIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=f(t),c=a(()=>["t-icon","t-icon-move",o.value]),p=a(()=>i(i({},s.value),r.style)),h=a(()=>({class:c.value,style:p.value,onClick:u=>{var v;return(v=e.onClick)===null||v===void 0?void 0:v.call(e,{e:u})}}));return()=>O(d,h.value)}});export{z as default};
