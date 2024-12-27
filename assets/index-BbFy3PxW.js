import{d as ae,i as oe,M as ne,a4 as p,e,a5 as T,r as f,j as V,k as le,a2 as se,s as m,o as u,c as b,a as o,p as a,u as t,x as i,t as c,b as ce,f as h,O as d,a6 as B,P as me,g as ue}from"./index-Ml_qX-84.js";import{g as ie}from"./list-C-jGMewC.js";import{T as w}from"./index-Bm6LPhrA.js";const re={class:"list-common-table"},pe={class:"table-container"},de={key:0},_e={key:1},Te={key:2},fe={key:0,class:"payment-col"},be={key:1,class:"payment-col"},ye="index",ve="top",ge=!0,he=ae({__name:"index",setup(Ee){const D=oe(),O=ne(),M=[{value:p.FAIL,label:e("components.commonTable.contractStatusEnum.fail")},{value:p.AUDIT_PENDING,label:e("components.commonTable.contractStatusEnum.audit")},{value:p.EXEC_PENDING,label:e("components.commonTable.contractStatusEnum.pending")},{value:p.EXECUTING,label:e("components.commonTable.contractStatusEnum.executing")},{value:p.FINISH,label:e("components.commonTable.contractStatusEnum.finish")}],R=[{value:T.MAIN,label:e("components.commonTable.contractTypeEnum.main")},{value:T.SUB,label:e("components.commonTable.contractTypeEnum.sub")},{value:T.SUPPLEMENT,label:e("components.commonTable.contractTypeEnum.supplement")}],K=[{title:e("components.commonTable.contractName"),fixed:"left",width:280,ellipsis:!0,align:"left",colKey:"name"},{title:e("components.commonTable.contractStatus"),colKey:"status",width:160},{title:e("components.commonTable.contractNum"),width:160,ellipsis:!0,colKey:"no"},{title:e("components.commonTable.contractType"),width:160,ellipsis:!0,colKey:"contractType"},{title:e("components.commonTable.contractPayType"),width:160,ellipsis:!0,colKey:"paymentType"},{title:e("components.commonTable.contractAmount"),width:160,ellipsis:!0,colKey:"amount"},{align:"left",fixed:"right",width:160,colKey:"op",title:e("components.commonTable.operation")}],r=f({...{name:"",no:"",type:""}}),E=f({defaultPageSize:20,total:100,defaultCurrent:1}),C=f(!1),y=f([]),S=f(!1),L=async()=>{S.value=!0;try{const{list:l}=await ie();y.value=l,E.value={...E.value,total:l.length}}catch(l){console.log(l)}finally{S.value=!1}},v=f(-1),F=V(()=>{if(v.value>-1){const{name:l}=y.value[v.value];return`删除后，${l}的所有合同信息将被清空，且无法恢复`}return""}),P=()=>{v.value=-1},G=()=>{y.value.splice(v.value,1),E.value.total=y.value.length,C.value=!1,me.success("删除成功"),P()},Y=()=>{P()};le(()=>{L()});const X=l=>{v.value=l.row.rowIndex,C.value=!0},$=l=>{console.log(l)},H=()=>{O.push("/detail/base")},W=l=>{console.log(l),console.log(r.value)},j=(l,s)=>{console.log("分页变化",l,s)},q=(l,s)=>{console.log("统一Change",l,s)},z=V(()=>({offsetTop:D.isUseTabsRouter?48:0,container:`.${se}-layout`}));return(l,s)=>{const k=m("t-input"),N=m("t-form-item"),_=m("t-col"),I=m("t-select"),x=m("t-row"),A=m("t-button"),J=m("t-form"),g=m("t-tag"),U=m("t-link"),Q=m("t-space"),Z=m("t-table"),ee=m("t-dialog");return u(),b("div",re,[o(J,{ref:"form",data:r.value,"label-width":80,colon:"",onReset:$,onSubmit:W},{default:a(()=>[o(x,null,{default:a(()=>[o(_,{span:10},{default:a(()=>[o(x,{gutter:[24,24]},{default:a(()=>[o(_,{span:4},{default:a(()=>[o(N,{label:t(e)("components.commonTable.contractName"),name:"name"},{default:a(()=>[o(k,{modelValue:r.value.name,"onUpdate:modelValue":s[0]||(s[0]=n=>r.value.name=n),class:"form-item-content",type:"search",placeholder:t(e)("components.commonTable.contractNamePlaceholder"),style:{minWidth:"134px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(_,{span:4},{default:a(()=>[o(N,{label:t(e)("components.commonTable.contractStatus"),name:"status"},{default:a(()=>[o(I,{modelValue:r.value.status,"onUpdate:modelValue":s[1]||(s[1]=n=>r.value.status=n),class:"form-item-content",options:M,placeholder:t(e)("components.commonTable.contractStatusPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(_,{span:4},{default:a(()=>[o(N,{label:t(e)("components.commonTable.contractNum"),name:"no"},{default:a(()=>[o(k,{modelValue:r.value.no,"onUpdate:modelValue":s[2]||(s[2]=n=>r.value.no=n),class:"form-item-content",placeholder:t(e)("components.commonTable.contractNumPlaceholder"),style:{minWidth:"134px"}},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),o(_,{span:4},{default:a(()=>[o(N,{label:t(e)("components.commonTable.contractType"),name:"type"},{default:a(()=>[o(I,{modelValue:r.value.type,"onUpdate:modelValue":s[3]||(s[3]=n=>r.value.type=n),style:{display:"inline-block"},class:"form-item-content",options:R,placeholder:t(e)("components.commonTable.contractTypePlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),o(_,{span:2,class:"operation-container"},{default:a(()=>[o(A,{theme:"primary",type:"submit",style:{marginLeft:"var(--td-comp-margin-s)"}},{default:a(()=>[i(c(t(e)("components.commonTable.query")),1)]),_:1}),o(A,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[i(c(t(e)("components.commonTable.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),ce("div",pe,[o(Z,{data:y.value,columns:K,"row-key":ye,"vertical-align":ve,hover:ge,pagination:E.value,loading:S.value,"header-affixed-top":z.value,onPageChange:j,onChange:q},{status:a(({row:n})=>[n.status===t(p).FAIL?(u(),h(g,{key:0,theme:"danger",variant:"light"},{default:a(()=>[i(c(t(e)("components.commonTable.contractStatusEnum.fail")),1)]),_:1})):d("",!0),n.status===t(p).AUDIT_PENDING?(u(),h(g,{key:1,theme:"warning",variant:"light"},{default:a(()=>[i(c(t(e)("components.commonTable.contractStatusEnum.audit")),1)]),_:1})):d("",!0),n.status===t(p).EXEC_PENDING?(u(),h(g,{key:2,theme:"warning",variant:"light"},{default:a(()=>[i(c(t(e)("components.commonTable.contractStatusEnum.pending")),1)]),_:1})):d("",!0),n.status===t(p).EXECUTING?(u(),h(g,{key:3,theme:"success",variant:"light"},{default:a(()=>[i(c(t(e)("components.commonTable.contractStatusEnum.executing")),1)]),_:1})):d("",!0),n.status===t(p).FINISH?(u(),h(g,{key:4,theme:"success",variant:"light"},{default:a(()=>[i(c(t(e)("components.commonTable.contractStatusEnum.finish")),1)]),_:1})):d("",!0)]),contractType:a(({row:n})=>[n.contractType===t(T).MAIN?(u(),b("p",de,c(t(e)("pages.listBase.contractStatusEnum.fail")),1)):d("",!0),n.contractType===t(T).SUB?(u(),b("p",_e,c(t(e)("pages.listBase.contractStatusEnum.audit")),1)):d("",!0),n.contractType===t(T).SUPPLEMENT?(u(),b("p",Te,c(t(e)("pages.listBase.contractStatusEnum.pending")),1)):d("",!0)]),paymentType:a(({row:n})=>[n.paymentType===t(B).PAYMENT?(u(),b("div",fe,[i(c(t(e)("pages.listBase.pay")),1),o(w,{class:"dashboard-item-trend",type:"up"})])):d("",!0),n.paymentType===t(B).RECEIPT?(u(),b("div",be,[i(c(t(e)("pages.listBase.receive")),1),o(w,{class:"dashboard-item-trend",type:"down"})])):d("",!0)]),op:a(n=>[o(Q,null,{default:a(()=>[o(U,{theme:"primary",onClick:s[4]||(s[4]=te=>H())},{default:a(()=>[i(c(t(e)("pages.listBase.detail")),1)]),_:1}),o(U,{theme:"danger",onClick:te=>X(n)},{default:a(()=>[i(c(t(e)("pages.listBase.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["data","pagination","loading","header-affixed-top"]),o(ee,{visible:C.value,"onUpdate:visible":s[5]||(s[5]=n=>C.value=n),header:"确认删除当前所选合同？",body:F.value,"on-cancel":Y,onConfirm:G},null,8,["visible","body"])])])}}}),ke=ue(he,[["__scopeId","data-v-ec46839e"]]);export{ke as C};
