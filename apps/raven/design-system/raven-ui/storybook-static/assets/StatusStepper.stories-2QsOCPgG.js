import{j as e}from"./iframe-CXEw8YqF.js";import{T as j}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function v({steps:n}){return e.jsx("ol",{className:"raven-status-stepper",children:n.map((t,l)=>{const s=!!t.active,p=!!t.completed,o=!s&&!p,_=["raven-status-stepper__dot",o?"raven-status-stepper__dot--upcoming":"raven-status-stepper__dot--active"].join(" "),f=["raven-status-stepper__label",s?"raven-status-stepper__label--active":"",o?"raven-status-stepper__label--muted":""].filter(Boolean).join(" "),g=l<n.length-1,S=p||s;return e.jsxs("li",{className:"raven-status-stepper__step",children:[e.jsxs("div",{className:"raven-status-stepper__track","aria-hidden":!0,children:[e.jsx("span",{className:_}),g?e.jsx("span",{className:["raven-status-stepper__connector",S?"raven-status-stepper__connector--complete":""].filter(Boolean).join(" ")}):null]}),e.jsx(j,{variant:"body2",component:"span",className:f,color:o?"text.secondary":"text.primary",children:t.label})]},`${l}-${t.label}`)})})}v.__docgenInfo={description:"Vertical workflow stepper for incident or review states.",methods:[],displayName:"StatusStepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; completed?: boolean; active?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"completed",value:{name:"boolean",required:!1}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; completed?: boolean; active?: boolean }[]"},description:""}}};const N={title:"Components/Navigation/Stepper",component:v},a={args:{steps:[{label:"Submitted",completed:!0},{label:"Under review",completed:!0,active:!1},{label:"Action required",active:!0},{label:"Closed"}]}},r={args:{steps:[{label:"Draft",completed:!0},{label:"Submitted",completed:!0},{label:"Closed",completed:!0}]}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(d=r.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const q=["Default","AllComplete"];export{r as AllComplete,a as Default,q as __namedExportsOrder,N as default};
