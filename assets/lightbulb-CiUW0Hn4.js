import{d as h,j as l,E as b,G as g,H as O}from"./index-Ml_qX-84.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var y={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_7256)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 2a6.2 6.2 0 00-5.57 8.92c.16.39.4.91.7 1.54l.45.97c.37.81.78 1.71 1.11 2.57h6.63c.34-.85.74-1.75 1.11-2.56l.4-.85c.3-.68.57-1.25.74-1.66A6.21 6.21 0 0012 2zM3.8 8.2a8.2 8.2 0 0116.4 0c0 1.26-.26 2.23-.78 3.49-.19.45-.48 1.08-.8 1.78l-.37.8a48.74 48.74 0 00-1.3 3.08l-.25.65H7.29l-.24-.67c-.34-.95-.82-2.04-1.29-3.06l-.42-.91c-.3-.65-.58-1.24-.75-1.67A8.4 8.4 0 013.8 8.2zM7.5 19h9v2h-9v-2zm2 3h5v2h-5v-2z"}}]}]},m=h({name:"LightbulbIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=b(r),p=l(()=>["t-icon","t-icon-lightbulb",a.value]),u=l(()=>o(o({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>g(y,v.value)}});export{m as default};
