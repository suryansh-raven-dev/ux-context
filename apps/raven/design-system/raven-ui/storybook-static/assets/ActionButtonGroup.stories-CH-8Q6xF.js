import{j as t,r as b}from"./iframe-CXEw8YqF.js";import{D as g}from"./DoneRounded-B4q1zZRa.js";import{B as v}from"./Box-ffj_WZAu.js";import{B as i}from"./Button-Dc-49q6L.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useForkRef-D-NHcfer.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DVqw_gkI.js";function s({onSaveDraft:u,onClearAll:a,onSubmit:o,submitDisabled:r=!1}){return t.jsxs(v,{className:"raven-action-buttons",role:"group","aria-label":"Form actions",children:[t.jsx(i,{type:"button",variant:"text",color:"secondary",onClick:u,children:"Save as draft"}),t.jsx(i,{type:"button",variant:"outlined",color:"error",onClick:a,children:"Clear all"}),t.jsx(i,{type:"button",variant:"contained",color:"secondary",startIcon:t.jsx(g,{"aria-hidden":!0}),onClick:o,disabled:r,children:"Submit"})]})}s.__docgenInfo={description:"Primary form actions: draft, clear, and submit.",methods:[],displayName:"ActionButtonGroup",props:{onSaveDraft:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={title:"Forms/Action Button Group",component:s},e={render:function(){const[a,o]=b.useState([]);return t.jsxs("div",{children:[t.jsx(s,{onSaveDraft:()=>o(r=>[...r,"draft"]),onClearAll:()=>o(r=>[...r,"clear"]),onSubmit:()=>o(r=>[...r,"submit"])}),t.jsxs("p",{style:{marginTop:16},children:["Last actions: ",a.join(", ")||"—"]})]})}},n={args:{onSaveDraft:()=>{},onClearAll:()=>{},onSubmit:()=>{},submitDisabled:!0}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: function ActionButtonGroupStory() {
    const [log, setLog] = useState<string[]>([]);
    return <div>
        <ActionButtonGroup onSaveDraft={() => setLog(l => [...l, 'draft'])} onClearAll={() => setLog(l => [...l, 'clear'])} onSubmit={() => setLog(l => [...l, 'submit'])} />
        <p style={{
        marginTop: 16
      }}>Last actions: {log.join(', ') || '—'}</p>
      </div>;
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onSaveDraft: () => {},
    onClearAll: () => {},
    onSubmit: () => {},
    submitDisabled: true
  }
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["Default","SubmitDisabled"];export{e as Default,n as SubmitDisabled,w as __namedExportsOrder,k as default};
