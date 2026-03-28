import{j as t}from"./iframe-CXEw8YqF.js";import{B as g}from"./Box-ffj_WZAu.js";import{T as e}from"./Typography-DAy4giaA.js";import{C as i}from"./Chip-TCpK2l-H.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B15l7tE5.js";import"./useForkRef-D-NHcfer.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";function l({fromStatus:s,toStatus:o}){return t.jsxs(g,{className:"raven-status-transition",component:"div",role:"status","aria-live":"polite","aria-label":`Status updated from ${s} to ${o}`,children:[t.jsx(e,{variant:"body2",component:"p",className:"raven-status-transition__label",children:"Status updated from"}),t.jsx(i,{label:s,size:"small",variant:"outlined"}),t.jsx(e,{variant:"body2",component:"span",color:"text.primary",children:"to"}),t.jsx(i,{label:o,size:"small",variant:"outlined"})]})}l.__docgenInfo={description:"Inline summary of a status change with outlined chips.",methods:[],displayName:"StatusTransitionCard",props:{fromStatus:{required:!0,tsType:{name:"string"},description:""},toStatus:{required:!0,tsType:{name:"string"},description:""}}};const L={title:"Data Display/Status Transition Card",component:l},a={args:{fromStatus:"Pending",toStatus:"In Progress"}},r={args:{fromStatus:"Awaiting site verification",toStatus:"Verified — action plan assigned"}};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    fromStatus: 'Pending',
    toStatus: 'In Progress'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fromStatus: 'Awaiting site verification',
    toStatus: 'Verified — action plan assigned'
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const P=["Default","LongLabels"];export{a as Default,r as LongLabels,P as __namedExportsOrder,L as default};
