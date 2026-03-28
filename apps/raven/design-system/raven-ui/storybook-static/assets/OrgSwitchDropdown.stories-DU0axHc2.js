import{j as r}from"./iframe-CXEw8YqF.js";import{E as N}from"./ExpandMoreRounded-CKn2f4Wd.js";import{S as D}from"./Stack-nkLupI6a.js";import{B as o}from"./Box-ffj_WZAu.js";import{T as c}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const _=["#757575","#212121"];function v({initials:x,name:n,role:t,gradientColors:s=_}){const S=`linear-gradient(to bottom, ${s[0]}, ${s[1]})`;return r.jsx("button",{type:"button",className:"raven-org-switch","aria-haspopup":"true","aria-label":`Organization: ${n}`,children:r.jsxs(D,{direction:"row",alignItems:"center",spacing:1,sx:{width:"100%",minWidth:0},children:[r.jsx(o,{className:"raven-org-switch__avatar","aria-hidden":!0,style:{background:S},children:x}),r.jsxs(o,{className:"raven-org-switch__info",children:[r.jsx(c,{variant:"subtitle2",noWrap:!0,component:"span",title:n,children:n}),t?r.jsx(c,{variant:"caption",color:"text.secondary",noWrap:!0,component:"span",children:t}):null]}),r.jsx(N,{className:"raven-org-switch__chevron",fontSize:"small","aria-hidden":!0})]})})}v.__docgenInfo={description:"Organization switcher control (trigger surface; menu wiring is app-level).",methods:[],displayName:"OrgSwitchDropdown",props:{initials:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},role:{required:!1,tsType:{name:"string"},description:""},gradientColors:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:"",defaultValue:{value:"['#757575', '#212121']",computed:!1}}}};const G={title:"Navigation/Org Switch Dropdown",component:v},e={args:{initials:"AC",name:"Acme Chemicals — River Plant",role:"Site admin"}},a={args:{initials:"SL",name:"Near Miss Demo Org",role:"Viewer",gradientColors:["#0cdacc","#311b92"]}},i={args:{initials:"RG",name:"Regional Operations — North America — Division 7"}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initials: 'AC',
    name: 'Acme Chemicals — River Plant',
    role: 'Site admin'
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    initials: 'SL',
    name: 'Near Miss Demo Org',
    role: 'Viewer',
    gradientColors: ['#0cdacc', '#311b92']
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,w,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    initials: 'RG',
    name: 'Regional Operations — North America — Division 7'
  }
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const q=["Default","CustomGradient","LongName"];export{a as CustomGradient,e as Default,i as LongName,q as __namedExportsOrder,G as default};
