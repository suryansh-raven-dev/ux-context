import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-Dx_1l3Sb.js";import{F as P,a as T}from"./FormLabel-rLOevlt4.js";import{R as E,a as O}from"./RadioGroup-vMZFKtcY.js";import{F as L}from"./FormControlLabel-DsuExY1P.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./utils-iop7lDec.js";import"./useFormControl-Nl1AoOAr.js";import"./isMuiElement-DBnxyDB2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-iJIBX0qc.js";import"./useSlot-Bl1_nPO2.js";import"./useForkRef-C3HHWd7T.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useControlled-B2SBLCZB.js";import"./useId-C3TUYdx9.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";import"./Typography-Dh7MeB_o.js";import"./index-4qhqXJuN.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";const m=({label:s,options:r,value:l,onChange:p,row:w})=>e.jsxs(P,{className:"raven-radio-group",children:[s&&e.jsx(T,{children:s}),e.jsx(E,{value:l,onChange:p,row:w,children:r.map(a=>e.jsx(L,{value:a.value,control:e.jsx(O,{}),label:a.label,disabled:a.disabled},a.value))})]});m.__docgenInfo={description:"",methods:[],displayName:"RavenRadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenRadioOption"}],raw:"RavenRadioOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},row:{required:!1,tsType:{name:"boolean"},description:""}}};const ie={title:"Inputs/RavenRadioGroup",component:m,tags:["autodocs"]},u=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}],o={args:{label:"Severity",options:u,value:"medium"}},t={args:{label:"Layout direction",options:u,value:"low",row:!0}},n={args:{label:"Priority",options:[{value:"p0",label:"P0 – Blocker"},{value:"p1",label:"P1 – Critical"},{value:"p2",label:"P2 – Major"},{value:"p3",label:"P3 – Minor",disabled:!0}],value:"p1"}},i={render:function(){const[r,l]=S.useState("medium");return e.jsxs("div",{children:[e.jsx(m,{label:"Severity",options:u,value:r,onChange:p=>l(p.target.value)}),e.jsxs("p",{style:{marginTop:16},children:["Selected: ",r]})]})}};var d,c,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Severity',
    options: severityOptions,
    value: 'medium'
  }
}`,...(v=(c=o.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Layout direction',
    options: severityOptions,
    value: 'low',
    row: true
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var R,h,f;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    options: [{
      value: 'p0',
      label: 'P0 – Blocker'
    }, {
      value: 'p1',
      label: 'P1 – Critical'
    }, {
      value: 'p2',
      label: 'P2 – Major'
    }, {
      value: 'p3',
      label: 'P3 – Minor',
      disabled: true
    }],
    value: 'p1'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,x,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function ControlledRadio() {
    const [val, setVal] = useState('medium');
    return <div>
        <RavenRadioGroup label="Severity" options={severityOptions} value={val} onChange={e => setVal(e.target.value)} />
        <p style={{
        marginTop: 16
      }}>Selected: {val}</p>
      </div>;
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const se=["Default","Row","WithDisabledOption","Controlled"];export{i as Controlled,o as Default,t as Row,n as WithDisabledOption,se as __namedExportsOrder,ie as default};
