import{d as m,j as a,E as O,G as y,H as b}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm9.23-2.13l-3.46 2-1-1.74 3.46-2 1 1.74zm4.54-1.74l3.46 2-1 1.74-3.46-2 1-1.74zM9.5 15.5a1 1 0 00-1 1v1h-2v-1a3 3 0 015.06-2.18.99.99 0 00.25.18h.38l.04-.02a.99.99 0 00.2-.16 3 3 0 015.07 2.18v1h-2v-1a1 1 0 00-1.69-.73c-.32.31-.88.73-1.62.73h-.38a2.4 2.4 0 01-1.62-.73 1 1 0 00-.69-.27zm2.68-1zm-.36 0z"}}]},g=m({name:"UncomfortableIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-uncomfortable",o.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,v.value)}});export{g as default};