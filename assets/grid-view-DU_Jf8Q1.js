import{d as h,j as a,E as m,G as d,H as O}from"./index-Ml_qX-84.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h9v9H2V2zm2 2v5h5V4H4zm9-2h9v9h-9V2zm2 2v5h5V4h-5zM2 13h9v9H2v-9zm2 2v5h5v-5H4zm9-2h9v9h-9v-9zm2 2v5h5v-5h-5z"}}]},w=h({name:"GridViewIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=m(t),c=a(()=>["t-icon","t-icon-grid-view",i.value]),p=a(()=>v(v({},s.value),r.style)),u=a(()=>({class:c.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(y,u.value)}});export{w as default};
