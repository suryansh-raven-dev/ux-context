import{j as e}from"./iframe-CXEw8YqF.js";import{F as q}from"./FormControlLabel-SRiEPJH0.js";import{C as T}from"./Checkbox-4A8DsxXt.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./useFormControl-DBc1P3Dj.js";import"./Typography-DAy4giaA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-BvtNKSch.js";import"./useControlled-BuJew9Ci.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B15l7tE5.js";import"./mergeSlotProps-Cv9QnIon.js";const r=({label:S,checked:y,onChange:j,disabled:E,indeterminate:R})=>e.jsx(q,{className:"raven-checkbox",control:e.jsx(T,{checked:y,onChange:j,disabled:E,indeterminate:R}),label:S});r.__docgenInfo={description:"",methods:[],displayName:"RavenCheckbox",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"CheckboxProps['onChange']",raw:"CheckboxProps['onChange']"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};const W={title:"Components/Inputs/Checkbox",component:r,tags:["autodocs"]},a={args:{label:"Accept terms and conditions",checked:!1}},o={args:{label:"Accept terms and conditions",checked:!0}},s={args:{label:"Select all items",indeterminate:!0}},t={args:{label:"Unavailable option",checked:!1,disabled:!0}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(r,{label:"Email notifications",checked:!0}),e.jsx(r,{label:"SMS notifications",checked:!1}),e.jsx(r,{label:"Push notifications",checked:!0})]})};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: true
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Select all items',
    indeterminate: true
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,x,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Unavailable option',
    checked: false,
    disabled: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,C,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      <RavenCheckbox label="Email notifications" checked />
      <RavenCheckbox label="SMS notifications" checked={false} />
      <RavenCheckbox label="Push notifications" checked />
    </div>
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const X=["Unchecked","Checked","Indeterminate","Disabled","GroupExample"];export{o as Checked,t as Disabled,n as GroupExample,s as Indeterminate,a as Unchecked,X as __namedExportsOrder,W as default};
