import{d as O,j as a,E as y,G as d,H as m}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M16.5 8.45a2 2 0 00.5-1.33V4h-2v3.12l-3 3.37-3-3.37V4H7v3.12a2 2 0 00.5 1.33L10.67 12l-3.15 3.55A2 2 0 007 16.88V20h2v-3.12l3-3.37 3 3.37V20h2v-3.12a2 2 0 00-.5-1.33L13.33 12l3.15-3.55z"}}]},b=O({name:"LettersXIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=y(r),p=a(()=>["t-icon","t-icon-letters-x",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,u.value)}});export{b as default};