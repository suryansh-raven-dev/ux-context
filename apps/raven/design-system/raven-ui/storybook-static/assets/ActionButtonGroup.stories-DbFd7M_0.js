import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-Dx_1l3Sb.js";import{c as b}from"./createSvgIcon-iJIBX0qc.js";import{B as v}from"./Box-BpWUXKTb.js";import{B as i}from"./Button-BjJEk2v3.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C3TUYdx9.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./useForkRef-C3HHWd7T.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlP4V8jk.js";const S=b(t.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done");function s({onSaveDraft:u,onClearAll:a,onSubmit:o,submitDisabled:r=!1}){return t.jsxs(v,{className:"raven-action-buttons",role:"group","aria-label":"Form actions",children:[t.jsx(i,{type:"button",variant:"text",color:"secondary",onClick:u,children:"Save as draft"}),t.jsx(i,{type:"button",variant:"outlined",color:"error",onClick:a,children:"Clear all"}),t.jsx(i,{type:"button",variant:"contained",color:"secondary",startIcon:t.jsx(S,{"aria-hidden":!0}),onClick:o,disabled:r,children:"Submit"})]})}s.__docgenInfo={description:"Primary form actions: draft, clear, and submit.",methods:[],displayName:"ActionButtonGroup",props:{onSaveDraft:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O={title:"Forms/ActionButtonGroup",component:s},e={render:function(){const[a,o]=g.useState([]);return t.jsxs("div",{children:[t.jsx(s,{onSaveDraft:()=>o(r=>[...r,"draft"]),onClearAll:()=>o(r=>[...r,"clear"]),onSubmit:()=>o(r=>[...r,"submit"])}),t.jsxs("p",{style:{marginTop:16},children:["Last actions: ",a.join(", ")||"—"]})]})}},n={args:{onSaveDraft:()=>{},onClearAll:()=>{},onSubmit:()=>{},submitDisabled:!0}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function ActionButtonGroupStory() {
    const [log, setLog] = useState<string[]>([]);
    return <div>
        <ActionButtonGroup onSaveDraft={() => setLog(l => [...l, 'draft'])} onClearAll={() => setLog(l => [...l, 'clear'])} onSubmit={() => setLog(l => [...l, 'submit'])} />
        <p style={{
        marginTop: 16
      }}>Last actions: {log.join(', ') || '—'}</p>
      </div>;
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onSaveDraft: () => {},
    onClearAll: () => {},
    onSubmit: () => {},
    submitDisabled: true
  }
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const P=["Default","SubmitDisabled"];export{e as Default,n as SubmitDisabled,P as __namedExportsOrder,O as default};
