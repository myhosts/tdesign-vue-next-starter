import{d as m,j as a,E as f,G as O,H as y}from"./index-Ml_qX-84.js";function v(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?v(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var z={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2h16v20H4V2zm2 2v4h12V4H6zm12 6h-3v2h3v-2zm0 4h-3v2h3v-2zm0 4h-3v2h3v-2zm-5 2v-2h-2v2h2zm-4 0v-2H6v2h3zm-3-4h3v-2H6v2zm0-4h3v-2H6v2zm5-2v2h2v-2h-2zm2 4h-2v2h2v-2z"}}]},g=m({name:"Calculator1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:i}=f(t),s=a(()=>["t-icon","t-icon-calculator-1",l.value]),p=a(()=>c(c({},i.value),r.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>O(z,u.value)}});export{g as default};
