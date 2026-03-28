import{j as e}from"./iframe-CXEw8YqF.js";import{A as x}from"./AddRounded-BlBODZhr.js";import{A as _}from"./ArrowForwardRounded-GmA3aOx-.js";import{E as b}from"./EditRounded-Cr8yxqZj.js";import{c as h}from"./createSvgIcon-B15l7tE5.js";import{B as j}from"./Box-ffj_WZAu.js";import{T as r}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const N=h(e.jsx("path",{d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1"}),"RemoveRounded"),I={updates:{label:"Updates",className:"raven-diff-card--updates",labelClass:"raven-diff-card__label-row--updates",Icon:b},added:{label:"Added",className:"raven-diff-card--added",labelClass:"raven-diff-card__label-row--added",Icon:x},removed:{label:"Removed",className:"raven-diff-card--removed",labelClass:"raven-diff-card__label-row--removed",Icon:N}};function w({type:n,changes:V}){const d=I[n],y=d.Icon;return e.jsxs(j,{className:`raven-diff-card ${d.className}`,component:"section","aria-label":`${d.label} changes`,children:[e.jsxs("div",{className:`raven-diff-card__label-row ${d.labelClass}`,children:[e.jsx(y,{fontSize:"small","aria-hidden":!0}),e.jsx(r,{variant:"overline",component:"h2",sx:{lineHeight:1.2},children:d.label})]}),V.map(a=>e.jsxs("div",{className:"raven-diff-card__field",children:[e.jsx(r,{variant:"caption",color:"text.secondary",className:"raven-diff-card__field-name",children:a.field}),e.jsxs("div",{className:"raven-diff-card__values",children:[n==="removed"&&a.oldValue!=null?e.jsx(r,{variant:"body2",component:"span",className:"raven-diff-card__old-value",children:a.oldValue}):null,n==="added"&&a.newValue!=null?e.jsx(r,{variant:"body2",component:"span",color:"text.primary",children:a.newValue}):null,n==="updates"&&a.oldValue!=null&&a.newValue!=null?e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"body2",component:"span",className:"raven-diff-card__old-value",children:a.oldValue}),e.jsx(_,{className:"raven-diff-card__arrow",fontSize:"small","aria-hidden":!0}),e.jsx(r,{variant:"body2",component:"span",color:"text.primary",children:a.newValue})]}):null,n==="updates"&&(a.oldValue==null||a.newValue==null)?e.jsx(r,{variant:"body2",color:"text.secondary",children:a.newValue??a.oldValue??"—"}):null]})]},a.field))]})}w.__docgenInfo={description:"Highlights field-level changes for audit or review UIs.",methods:[],displayName:"DiffCard",props:{type:{required:!0,tsType:{name:"union",raw:"'updates' | 'added' | 'removed'",elements:[{name:"literal",value:"'updates'"},{name:"literal",value:"'added'"},{name:"literal",value:"'removed'"}]},description:""},changes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; oldValue?: string; newValue?: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"oldValue",value:{name:"string",required:!1}},{key:"newValue",value:{name:"string",required:!1}}]}}],raw:"{ field: string; oldValue?: string; newValue?: string }[]"},description:""}}};const L={title:"Data Display/Diff Card",component:w},l={args:{type:"updates",changes:[{field:"Severity",oldValue:"Low",newValue:"Medium"},{field:"Owner",oldValue:"Team A",newValue:"Team B"}]}},s={args:{type:"added",changes:[{field:"Tag",newValue:"Confined space"}]}},o={args:{type:"removed",changes:[{field:"Legacy ID",oldValue:"NM-0092"}]}};var i,t,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'updates',
    changes: [{
      field: 'Severity',
      oldValue: 'Low',
      newValue: 'Medium'
    }, {
      field: 'Owner',
      oldValue: 'Team A',
      newValue: 'Team B'
    }]
  }
}`,...(c=(t=l.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'added',
    changes: [{
      field: 'Tag',
      newValue: 'Confined space'
    }]
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,v,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'removed',
    changes: [{
      field: 'Legacy ID',
      oldValue: 'NM-0092'
    }]
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const O=["Updates","Added","Removed"];export{s as Added,o as Removed,l as Updates,O as __namedExportsOrder,L as default};
