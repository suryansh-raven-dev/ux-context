import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as M}from"./TextField-Bed1q6lk.js";import{M as T}from"./MenuItem-BG-sBDa-.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useSlot-Bl1_nPO2.js";import"./useForkRef-C3HHWd7T.js";import"./useId-C3TUYdx9.js";import"./Select-DvihVt7O.js";import"./Menu-BJLmQtfy.js";import"./index-BUMq8Awr.js";import"./useSlotProps-B6fBr4t-.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-BTRkgBdF.js";import"./useTheme-C0BMCT-Q.js";import"./useTheme-Dbu05CKd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./Grow-Qypf4Pnm.js";import"./utils-vM8Acyw6.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./getReactElementRef-CtHzcV_w.js";import"./mergeSlotProps-Da0jXlCj.js";import"./Modal-B_A5VqS_.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-DVLo-Jou.js";import"./List-CRi5rOFQ.js";import"./utils-iop7lDec.js";import"./useControlled-B2SBLCZB.js";import"./useFormControl-Nl1AoOAr.js";import"./createSvgIcon-iJIBX0qc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./InputBase-UL9yXQAo.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./extendSxProp-DutLj_5J.js";import"./FormLabel-rLOevlt4.js";import"./isMuiElement-DBnxyDB2.js";import"./ButtonBase-Bq0L8UA2.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-C_MKIDq8.js";import"./listItemTextClasses-B8l64lZu.js";import"./dividerClasses-BUQYvG1R.js";const D=({options:R,...i})=>s.jsx(M,{select:!0,className:`raven-select ${i.className||""}`,...i,children:R.map(n=>s.jsx(T,{value:n.value,children:n.label},n.value))});D.__docgenInfo={description:"",methods:[],displayName:"RavenSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenSelectOption"}],raw:"RavenSelectOption[]"},description:""}},composes:["Omit"]};const De={title:"Inputs/RavenSelect",component:D,tags:["autodocs"]},o=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],e={args:{options:o,defaultValue:"medium"}},a={args:{label:"Priority",options:o,defaultValue:"medium"}},r={args:{label:"Severity",helperText:"Select the severity level.",options:o,defaultValue:"low"}},t={args:{label:"Priority",options:o,defaultValue:"high",disabled:!0}},l={args:{label:"Department",options:[{value:"eng",label:"Engineering"},{value:"design",label:"Design"},{value:"product",label:"Product"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"},{value:"finance",label:"Finance"},{value:"legal",label:"Legal"},{value:"ops",label:"Operations"},{value:"support",label:"Support"}],defaultValue:"eng"}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'medium'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,d,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'medium'
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Severity',
    helperText: 'Select the severity level.',
    options: basicOptions,
    defaultValue: 'low'
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,S,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'high',
    disabled: true
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var O,x,V;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Department',
    options: [{
      value: 'eng',
      label: 'Engineering'
    }, {
      value: 'design',
      label: 'Design'
    }, {
      value: 'product',
      label: 'Product'
    }, {
      value: 'marketing',
      label: 'Marketing'
    }, {
      value: 'sales',
      label: 'Sales'
    }, {
      value: 'hr',
      label: 'Human Resources'
    }, {
      value: 'finance',
      label: 'Finance'
    }, {
      value: 'legal',
      label: 'Legal'
    }, {
      value: 'ops',
      label: 'Operations'
    }, {
      value: 'support',
      label: 'Support'
    }],
    defaultValue: 'eng'
  }
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const Re=["Default","WithLabel","WithHelperText","Disabled","WithManyOptions"];export{e as Default,t as Disabled,r as WithHelperText,a as WithLabel,l as WithManyOptions,Re as __namedExportsOrder,De as default};
