import{d,j as a,E as O,G as y,H as g}from"./index-Ml_qX-84.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1 2.5h8.48l2 2.5H23v6h-2V7H10.52l-2-2.5H3V19h8v2H1V2.5zm18 9.25v1.38a4 4 0 011.85 1.07l1.2-.7 1 1.74-1.2.69a4 4 0 010 2.14l1.2.69-1 1.73-1.2-.69A4 4 0 0119 20.87v1.38h-2v-1.38a4 4 0 01-1.85-1.07l-1.2.7-1-1.74 1.2-.69a4 4 0 010-2.14l-1.2-.69 1-1.73 1.2.69A4 4 0 0117 13.13v-1.38h2zm-2.75 4.28a2 2 0 000 1.94l.04.06a2 2 0 003.42 0l.04-.06a2 2 0 000-1.94l-.04-.06a2 2 0 00-3.42 0l-.04.06z"}}]},b=d({name:"FolderSettingIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=O(r),p=a(()=>["t-icon","t-icon-folder-setting",l.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};
