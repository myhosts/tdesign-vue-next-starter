import{d as f,j as a,E as m,G as y,H as O}from"./index-Ml_qX-84.js";function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?v(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h12v8h8v12H2V2zm10 8V8H9v2h3zm-3 2v2h3v-2H9zm-2-2V8H4v2h3zm-3 2v2h3v-2H4zm0 4v4h8v-4H4zm10 4h2v-4h2v4h2v-8h-6v8zM4 6h3V4H4v2zm5-2v2h3V4H9z"}}]},g=f({name:"City8Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=m(r),s=a(()=>["t-icon","t-icon-city-8",o.value]),p=a(()=>l(l({},c.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:h})}}));return()=>y(d,u.value)}});export{g as default};
