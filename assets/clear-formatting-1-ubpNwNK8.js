import{d as m,j as a,E as O,G as y,H as g}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){g(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.03 1.89l9.66 9.66-8.35 8.34-.27.27H20v2H6.75L3.08 18.5a4 4 0 010-5.66L14.03 1.89zm.32 16.16l6.5-6.5-6.82-6.83-6.83 6.83 6.83 6.82.32-.32zM5.8 12.96l-1.3 1.3a2 2 0 000 2.82l3.09 3.08h4.67l.37-.37-6.83-6.83z"}}]},j=m({name:"ClearFormatting1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),p=a(()=>["t-icon","t-icon-clear-formatting-1",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,v.value)}});export{j as default};
