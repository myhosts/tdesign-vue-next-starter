import{d as m,j as a,E as d,G as O,H as y}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var j={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 4a1 1 0 100 2 1 1 0 000-2zM5.17 4a3 3 0 015.66 0H22v2H10.83a3 3 0 01-5.66 0H2V4h3.17zm8 7a3 3 0 015.66 0H22v2h-3.17a3 3 0 01-5.66 0H2v-2h11.17zM16 11a1 1 0 100 2 1 1 0 000-2zm-8 7a1 1 0 100 2 1 1 0 000-2zm-2.83 0a3 3 0 015.66 0H22v2H10.83a3 3 0 01-5.66 0H2v-2h3.17z"}}]},g=m({name:"AdjustmentIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=d(r),p=a(()=>["t-icon","t-icon-adjustment",o.value]),u=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(j,v.value)}});export{g as default};
