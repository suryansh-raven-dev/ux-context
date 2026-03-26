import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{E as N}from"./ExpandMore-DanfJ2vj.js";import{S as D}from"./Stack-DzJHroyU.js";import{B as s}from"./Box-BpWUXKTb.js";import{T as c}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./createSvgIcon-iJIBX0qc.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./extendSxProp-DutLj_5J.js";import"./useTheme-Dbu05CKd.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const _=["#757575","#212121"];function v({initials:x,name:t,role:n,gradientColors:o=_}){const S=`linear-gradient(to bottom, ${o[0]}, ${o[1]})`;return r.jsx("button",{type:"button",className:"raven-org-switch","aria-haspopup":"true","aria-label":`Organization: ${t}`,children:r.jsxs(D,{direction:"row",alignItems:"center",spacing:1,sx:{width:"100%",minWidth:0},children:[r.jsx(s,{className:"raven-org-switch__avatar","aria-hidden":!0,style:{background:S},children:x}),r.jsxs(s,{className:"raven-org-switch__info",children:[r.jsx(c,{variant:"subtitle2",noWrap:!0,component:"span",title:t,children:t}),n?r.jsx(c,{variant:"caption",color:"text.secondary",noWrap:!0,component:"span",children:n}):null]}),r.jsx(N,{className:"raven-org-switch__chevron",fontSize:"small","aria-hidden":!0})]})})}v.__docgenInfo={description:"Organization switcher control (trigger surface; menu wiring is app-level).",methods:[],displayName:"OrgSwitchDropdown",props:{initials:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},gradientColors:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:"",defaultValue:{value:"['#757575', '#212121']",computed:!1}}}};const W={title:"Navigation/OrgSwitchDropdown",component:v},e={args:{initials:"AC",name:"Acme Chemicals — River Plant",role:"Site admin"}},i={args:{initials:"SL",name:"Near Miss Demo Org",role:"Viewer",gradientColors:["#0cdacc","#311b92"]}},a={args:{initials:"RG",name:"Regional Operations — North America — Division 7"}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initials: 'AC',
    name: 'Acme Chemicals — River Plant',
    role: 'Site admin'
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    initials: 'SL',
    name: 'Near Miss Demo Org',
    role: 'Viewer',
    gradientColors: ['#0cdacc', '#311b92']
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,w,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    initials: 'RG',
    name: 'Regional Operations — North America — Division 7'
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const $=["Default","CustomGradient","LongName"];export{i as CustomGradient,e as Default,a as LongName,$ as __namedExportsOrder,W as default};
