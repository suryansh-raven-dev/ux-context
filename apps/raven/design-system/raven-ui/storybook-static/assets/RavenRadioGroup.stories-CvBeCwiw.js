import{j as e,r as S}from"./iframe-CXEw8YqF.js";import{F as P,a as T}from"./FormLabel-fZDvreNm.js";import{R as E,a as O}from"./RadioGroup-ENsAuCtp.js";import{F as L}from"./FormControlLabel-SRiEPJH0.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./utils-iop7lDec.js";import"./useFormControl-DBc1P3Dj.js";import"./isMuiElement-CREbmVQV.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./SwitchBase-BvtNKSch.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./useControlled-BuJew9Ci.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B15l7tE5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Typography-DAy4giaA.js";const m=({label:s,options:a,value:l,onChange:p,row:w})=>e.jsxs(P,{className:"raven-radio-group",children:[s&&e.jsx(T,{children:s}),e.jsx(E,{value:l,onChange:p,row:w,children:a.map(r=>e.jsx(L,{value:r.value,control:e.jsx(O,{}),label:r.label,disabled:r.disabled},r.value))})]});m.__docgenInfo={description:"",methods:[],displayName:"RavenRadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenRadioOption"}],raw:"RavenRadioOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},row:{required:!1,tsType:{name:"boolean"},description:""}}};const ee={title:"Components/Inputs/Radio Group",component:m,tags:["autodocs"]},u=[{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"critical",label:"Critical"}],o={args:{label:"Severity",options:u,value:"medium"}},t={args:{label:"Layout direction",options:u,value:"low",row:!0}},n={args:{label:"Priority",options:[{value:"p0",label:"P0 – Blocker"},{value:"p1",label:"P1 – Critical"},{value:"p2",label:"P2 – Major"},{value:"p3",label:"P3 – Minor",disabled:!0}],value:"p1"}},i={render:function(){const[a,l]=S.useState("medium");return e.jsxs("div",{children:[e.jsx(m,{label:"Severity",options:u,value:a,onChange:p=>l(p.target.value)}),e.jsxs("p",{style:{marginTop:16},children:["Selected: ",a]})]})}};var d,c,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var R,h,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,x,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: function ControlledRadio() {
    const [val, setVal] = useState('medium');
    return <div>
        <RavenRadioGroup label="Severity" options={severityOptions} value={val} onChange={e => setVal(e.target.value)} />
        <p style={{
        marginTop: 16
      }}>Selected: {val}</p>
      </div>;
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const ae=["Default","Row","WithDisabledOption","Controlled"];export{i as Controlled,o as Default,t as Row,n as WithDisabledOption,ae as __namedExportsOrder,ee as default};
