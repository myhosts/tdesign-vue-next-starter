import{d as m,j as a,E as O,G as y,H as d}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 4a3 3 0 00-3 3c0 1.24.78 2.5 1.74 3.54.45.5.91.91 1.26 1.2.35-.29.8-.7 1.26-1.2C14.22 9.5 15 8.24 15 7a3 3 0 00-3-3zm0 10.21l-.57-.39h-.02l-.04-.04a8.7 8.7 0 01-.63-.49c-.4-.33-.94-.8-1.48-1.4C8.22 10.75 7 9.01 7 7a5 5 0 0110 0c0 2.01-1.22 3.75-2.26 4.9a14.58 14.58 0 01-2.11 1.88l-.04.03-.02.01-.57.4zm0-6.96a.25.25 0 100-.5.25.25 0 000 .5zM10.25 7a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM2 10h5v2H4v6.5l5.08-2.12L15 19.84l5-2.91V12h-3v-2h5v8.07l-7 4.09-6.07-3.55L2 21.5V10z"}}]},b=m({name:"MapInformation1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=O(t),p=a(()=>["t-icon","t-icon-map-information-1",o.value]),v=a(()=>c(c({},s.value),r.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>y(h,f.value)}});export{b as default};