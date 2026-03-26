import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as y}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./index-4qhqXJuN.js";import"./useTheme-Dbu05CKd.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function v({steps:l}){return e.jsx("ol",{className:"raven-status-stepper",children:l.map((t,n)=>{const s=!!t.active,p=!!t.completed,o=!s&&!p,_=["raven-status-stepper__dot",o?"raven-status-stepper__dot--upcoming":"raven-status-stepper__dot--active"].join(" "),f=["raven-status-stepper__label",s?"raven-status-stepper__label--active":"",o?"raven-status-stepper__label--muted":""].filter(Boolean).join(" "),g=n<l.length-1,S=p||s;return e.jsxs("li",{className:"raven-status-stepper__step",children:[e.jsxs("div",{className:"raven-status-stepper__track","aria-hidden":!0,children:[e.jsx("span",{className:_}),g?e.jsx("span",{className:["raven-status-stepper__connector",S?"raven-status-stepper__connector--complete":""].filter(Boolean).join(" ")}):null]}),e.jsx(y,{variant:"body2",component:"span",className:f,color:o?"text.secondary":"text.primary",children:t.label})]},`${n}-${t.label}`)})})}v.__docgenInfo={description:"Vertical workflow stepper for incident or review states.",methods:[],displayName:"StatusStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; completed?: boolean; active?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"completed",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; completed?: boolean; active?: boolean }[]"},description:""}}};const U={title:"Data display/StatusStepper",component:v},a={args:{steps:[{label:"Submitted",completed:!0},{label:"Under review",completed:!0,active:!1},{label:"Action required",active:!0},{label:"Closed"}]}},r={args:{steps:[{label:"Draft",completed:!0},{label:"Submitted",completed:!0},{label:"Closed",completed:!0}]}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Submitted',
      completed: true
    }, {
      label: 'Under review',
      completed: true,
      active: false
    }, {
      label: 'Action required',
      active: true
    }, {
      label: 'Closed'
    }]
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,d,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Draft',
      completed: true
    }, {
      label: 'Submitted',
      completed: true
    }, {
      label: 'Closed',
      completed: true
    }]
  }
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const E=["Default","AllComplete"];export{r as AllComplete,a as Default,E as __namedExportsOrder,U as default};
