import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as x}from"./createSvgIcon-iJIBX0qc.js";import{E as z}from"./Edit-D1TchvYZ.js";import{r as C,R}from"./index-Dx_1l3Sb.js";import{M as S}from"./Menu-BJLmQtfy.js";import{M as B}from"./MenuItem-BG-sBDa-.js";import{L as O}from"./ListItemIcon-DX8g0GNB.js";import{L as k}from"./ListItemText-BGGOQvdT.js";import{B as a}from"./Button-BjJEk2v3.js";import"./index-yBjzXJbu.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BUMq8Awr.js";import"./useSlot-Bl1_nPO2.js";import"./useForkRef-C3HHWd7T.js";import"./useSlotProps-B6fBr4t-.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BTRkgBdF.js";import"./useTheme-C0BMCT-Q.js";import"./useTheme-Dbu05CKd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-Qypf4Pnm.js";import"./utils-vM8Acyw6.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./getReactElementRef-CtHzcV_w.js";import"./mergeSlotProps-Da0jXlCj.js";import"./Modal-B_A5VqS_.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DVLo-Jou.js";import"./List-CRi5rOFQ.js";import"./ButtonBase-Bq0L8UA2.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-C_MKIDq8.js";import"./listItemTextClasses-B8l64lZu.js";import"./dividerClasses-BUQYvG1R.js";import"./Typography-Dh7MeB_o.js";import"./index-4qhqXJuN.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C3TUYdx9.js";import"./CircularProgress-BlP4V8jk.js";const A=x(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy"),_=x(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),D=({options:E,trigger:j,anchorOrigin:I})=>{const[n,l]=C.useState(null),M=!!n,y=t=>l(t.currentTarget),s=()=>l(null);return e.jsxs(e.Fragment,{children:[R.cloneElement(j,{onClick:y,"aria-haspopup":"true"}),e.jsx(S,{className:"raven-menu",anchorEl:n,open:M,onClose:s,anchorOrigin:I,children:E.map(t=>e.jsxs(B,{disabled:t.disabled,onClick:()=>{var m;(m=t.onClick)==null||m.call(t),s()},className:"raven-menu__item",children:[t.icon&&e.jsx(O,{children:t.icon}),e.jsx(k,{children:t.label})]},t.id))})]})};D.__docgenInfo={description:"",methods:[],displayName:"RavenMenu",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenMenuOption"}],raw:"RavenMenuOption[]"},description:""},trigger:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:"{ vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }",signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:""}}};const Se={title:"Navigation/RavenMenu",component:D,tags:["autodocs"]},i={args:{trigger:e.jsx(a,{variant:"outlined",children:"Open Menu"}),options:[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"delete",label:"Delete"}]}},r={args:{trigger:e.jsx(a,{variant:"outlined",children:"Actions"}),options:[{id:"edit",label:"Edit",icon:e.jsx(z,{fontSize:"small"})},{id:"copy",label:"Duplicate",icon:e.jsx(A,{fontSize:"small"})},{id:"delete",label:"Delete",icon:e.jsx(_,{fontSize:"small"})}]}},o={args:{trigger:e.jsx(a,{variant:"outlined",children:"Options"}),options:[{id:"edit",label:"Edit"},{id:"archive",label:"Archive",disabled:!0},{id:"delete",label:"Delete"}]}};var c,p,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Open Menu</Button>,
    options: [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'duplicate',
      label: 'Duplicate'
    }, {
      id: 'delete',
      label: 'Delete'
    }]
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Actions</Button>,
    options: [{
      id: 'edit',
      label: 'Edit',
      icon: <EditIcon fontSize="small" />
    }, {
      id: 'copy',
      label: 'Duplicate',
      icon: <ContentCopyIcon fontSize="small" />
    }, {
      id: 'delete',
      label: 'Delete',
      icon: <DeleteIcon fontSize="small" />
    }]
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,b,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Options</Button>,
    options: [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'archive',
      label: 'Archive',
      disabled: true
    }, {
      id: 'delete',
      label: 'Delete'
    }]
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Be=["Default","WithIcons","WithDisabledItem"];export{i as Default,o as WithDisabledItem,r as WithIcons,Be as __namedExportsOrder,Se as default};
