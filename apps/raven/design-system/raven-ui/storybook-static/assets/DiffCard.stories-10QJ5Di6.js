import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as i}from"./createSvgIcon-iJIBX0qc.js";import{E as h}from"./Edit-D1TchvYZ.js";import{B as _}from"./Box-BpWUXKTb.js";import{T as r}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const b=i(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),j=i(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),N=i(e.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),I={updates:{label:"Updates",className:"raven-diff-card--updates",labelClass:"raven-diff-card__label-row--updates",Icon:h},added:{label:"Added",className:"raven-diff-card--added",labelClass:"raven-diff-card__label-row--added",Icon:b},removed:{label:"Removed",className:"raven-diff-card--removed",labelClass:"raven-diff-card__label-row--removed",Icon:N}};function V({type:n,changes:x}){const d=I[n],y=d.Icon;return e.jsxs(_,{className:`raven-diff-card ${d.className}`,component:"section","aria-label":`${d.label} changes`,children:[e.jsxs("div",{className:`raven-diff-card__label-row ${d.labelClass}`,children:[e.jsx(y,{fontSize:"small","aria-hidden":!0}),e.jsx(r,{variant:"overline",component:"h2",sx:{lineHeight:1.2},children:d.label})]}),x.map(a=>e.jsxs("div",{className:"raven-diff-card__field",children:[e.jsx(r,{variant:"caption",color:"text.secondary",className:"raven-diff-card__field-name",children:a.field}),e.jsxs("div",{className:"raven-diff-card__values",children:[n==="removed"&&a.oldValue!=null?e.jsx(r,{variant:"body2",component:"span",className:"raven-diff-card__old-value",children:a.oldValue}):null,n==="added"&&a.newValue!=null?e.jsx(r,{variant:"body2",component:"span",color:"text.primary",children:a.newValue}):null,n==="updates"&&a.oldValue!=null&&a.newValue!=null?e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"body2",component:"span",className:"raven-diff-card__old-value",children:a.oldValue}),e.jsx(j,{className:"raven-diff-card__arrow",fontSize:"small","aria-hidden":!0}),e.jsx(r,{variant:"body2",component:"span",color:"text.primary",children:a.newValue})]}):null,n==="updates"&&(a.oldValue==null||a.newValue==null)?e.jsx(r,{variant:"body2",color:"text.secondary",children:a.newValue??a.oldValue??"—"}):null]})]},a.field))]})}V.__docgenInfo={description:"Highlights field-level changes for audit or review UIs.",methods:[],displayName:"DiffCard",props:{type:{required:!0,tsType:{name:"union",raw:"'updates' | 'added' | 'removed'",elements:[{name:"literal",value:"'updates'"},{name:"literal",value:"'added'"},{name:"literal",value:"'removed'"}]},description:""},changes:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ field: string; oldValue?: string; newValue?: string }",signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"oldValue",value:{name:"string",required:!1}},{key:"newValue",value:{name:"string",required:!1}}]}}],raw:"{ field: string; oldValue?: string; newValue?: string }[]"},description:""}}};const U={title:"Data display/DiffCard",component:V},l={args:{type:"updates",changes:[{field:"Severity",oldValue:"Low",newValue:"Medium"},{field:"Owner",oldValue:"Team A",newValue:"Team B"}]}},s={args:{type:"added",changes:[{field:"Tag",newValue:"Confined space"}]}},o={args:{type:"removed",changes:[{field:"Legacy ID",oldValue:"NM-0092"}]}};var t,c,m;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'added',
    changes: [{
      field: 'Tag',
      newValue: 'Confined space'
    }]
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'removed',
    changes: [{
      field: 'Legacy ID',
      oldValue: 'NM-0092'
    }]
  }
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const k=["Updates","Added","Removed"];export{s as Added,o as Removed,l as Updates,k as __namedExportsOrder,U as default};
