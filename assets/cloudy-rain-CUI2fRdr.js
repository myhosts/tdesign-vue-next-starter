import{d as f,j as a,E as m,G as y,H as d}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"g",attrs:{clipPath:"url(#clip0_8726_9655)"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17 1v2h-2V1h2zm-5.95 1.63l1.42 1.42-1.42 1.42-1.41-1.42 1.41-1.42zm9.9 0l1.42 1.42-1.42 1.42-1.42-1.42 1.42-1.42zm-9 3.43a6.3 6.3 0 00-7.25 6.4A4.46 4.46 0 002 16.53a4.46 4.46 0 002.57 4.01l.9.43.86-1.8-.9-.43A2.46 2.46 0 014 16.54a2.5 2.5 0 012-2.4l.96-.22-.19-.95A4.3 4.3 0 0111.1 8a4.29 4.29 0 014.34 3.5l.15.85.85-.02h.06c.64 0 1.24.17 1.76.45A3.3 3.3 0 0120 15.67c0 1.34-.84 2.52-2.09 3.05l-.92.39.78 1.84.92-.39a5.25 5.25 0 001.51-8.84 5 5 0 00-8.24-5.66zm2.12.65a3 3 0 014.41 3.98 5.6 5.6 0 00-1.26-.31 6.26 6.26 0 00-3.15-3.67zM22 8h2v2h-2V8zm-9 6h2v2h-2v-2zm-5 2h2v2H8v-2zm5 3h2v2h-2v-2zm-5 2h2v2H8v-2z"}}]}]},z=f({name:"CloudyRainIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=m(t),v=a(()=>["t-icon","t-icon-cloudy-rain",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>y(O,u.value)}});export{z as default};
