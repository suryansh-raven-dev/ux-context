import{j as s}from"./iframe-CXEw8YqF.js";import{T as R}from"./TextField-BlnEFttr.js";import{M as T}from"./MenuItem-6opGP_wo.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./Select-YC9I_7cS.js";import"./Menu-CXBB97T1.js";import"./useSlotProps-c9dXOIyd.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-SJt3C1w7.js";import"./useTheme-CpXYfoxd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DRgOrKUJ.js";import"./utils-BygEin2U.js";import"./TransitionGroupContext-Bc261l7d.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";import"./getReactElementRef-CbqsfprK.js";import"./mergeSlotProps-Cv9QnIon.js";import"./Modal-ictgPmZL.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cb3cx0Sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-n68pU-aO.js";import"./MenuList-D2ULDrWP.js";import"./List-CX0z1nbu.js";import"./utils-iop7lDec.js";import"./useControlled-BuJew9Ci.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBc1P3Dj.js";import"./createSvgIcon-B15l7tE5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./InputBase-C320U_6j.js";import"./FormLabel-fZDvreNm.js";import"./isMuiElement-CREbmVQV.js";import"./ButtonBase-VzJ3_ui6.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-CN_GsrVk.js";import"./listItemTextClasses-Cfq3R5d6.js";import"./dividerClasses-DCRmppAS.js";const D=({options:M,...i})=>s.jsx(R,{select:!0,className:`raven-select ${i.className||""}`,...i,children:M.map(n=>s.jsx(T,{value:n.value,children:n.label},n.value))});D.__docgenInfo={description:"",methods:[],displayName:"RavenSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenSelectOption"}],raw:"RavenSelectOption[]"},description:""}},composes:["Omit"]};const Se={title:"Components/Inputs/Select",component:D,tags:["autodocs"]},o=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"}],e={args:{options:o,defaultValue:"medium"}},a={args:{label:"Priority",options:o,defaultValue:"medium"}},t={args:{label:"Severity",helperText:"Select the severity level.",options:o,defaultValue:"low"}},r={args:{label:"Priority",options:o,defaultValue:"high",disabled:!0}},l={args:{label:"Department",options:[{value:"eng",label:"Engineering"},{value:"design",label:"Design"},{value:"product",label:"Product"},{value:"marketing",label:"Marketing"},{value:"sales",label:"Sales"},{value:"hr",label:"Human Resources"},{value:"finance",label:"Finance"},{value:"legal",label:"Legal"},{value:"ops",label:"Operations"},{value:"support",label:"Support"}],defaultValue:"eng"}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Severity',
    helperText: 'Select the severity level.',
    options: basicOptions,
    defaultValue: 'low'
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,S,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    options: basicOptions,
    defaultValue: 'high',
    disabled: true
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var O,x,V;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const ye=["Default","WithLabel","WithHelperText","Disabled","WithManyOptions"];export{e as Default,r as Disabled,t as WithHelperText,a as WithLabel,l as WithManyOptions,ye as __namedExportsOrder,Se as default};
