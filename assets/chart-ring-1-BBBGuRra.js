import{d as O,j as a,E as y,G as g,H as m}from"./index-Ml_qX-84.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.17 2.98l-.98.2a9 9 0 1010.67 10.4l.18-.98 1.97.35-.18.98A11 11 0 119.8 1.23l.98-.2.4 1.95zm2.14-1.95l.98.2a11 11 0 018.49 8.56l.2.98-1.96.4-.2-.98a9 9 0 00-6.95-7L12.9 3l.42-1.96zm2.61 10.17a4 4 0 10-7.84 1.6 4 4 0 007.84-1.6zM10.8 6.12a6 6 0 112.4 11.76 6 6 0 01-2.4-11.76z"}}]},b=O({name:"ChartRing1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-chart-ring-1",l.value]),u=a(()=>c(c({},s.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(d,v.value)}});export{b as default};
