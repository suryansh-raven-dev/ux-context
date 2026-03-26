import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as I}from"./createSvgIcon-iJIBX0qc.js";import{B as t}from"./Box-BpWUXKTb.js";import{I as S}from"./IconButton-Dq-iQMUB.js";import{T as l}from"./Typography-Dh7MeB_o.js";import{B as p}from"./Button-BjJEk2v3.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C3TUYdx9.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./useForkRef-C3HHWd7T.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlP4V8jk.js";import"./index-4qhqXJuN.js";const N=I(e.jsx("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");function y({title:k,subtitle:i,onBack:n,actions:c}){return e.jsxs(t,{component:"header",role:"banner",className:"raven-page-header",children:[e.jsxs(t,{className:"raven-page-header__title-group",children:[n?e.jsx(S,{edge:"start",size:"small","aria-label":"Go back",onClick:n,className:"raven-page-header__back",children:e.jsx(N,{fontSize:"small"})}):null,e.jsxs(t,{children:[e.jsx(l,{variant:"h6",component:"h1",className:"raven-page-header__title",children:k}),i?e.jsx(l,{variant:"body2",color:"text.secondary",className:"raven-page-header__subtitle",children:i}):null]})]}),c?e.jsx(t,{className:"raven-page-header__actions",children:c}):null]})}y.__docgenInfo={description:"Sticky page header with optional back control and trailing actions.",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Z={title:"Layout/PageHeader",component:y},r={args:{title:"Incidents"}},a={args:{title:"Investigation details",subtitle:"Case #1042 · Opened Mar 12, 2026"}},s={args:{title:"Edit report",subtitle:"Autosaved",onBack:()=>{console.log("back")}}},o={args:{title:"Reports",subtitle:"Last 30 days",actions:e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"outlined",size:"small",children:"Export"}),e.jsx(p,{variant:"contained",size:"small",children:"New report"})]})}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Incidents'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Investigation details',
    subtitle: 'Case #1042 · Opened Mar 12, 2026'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,b,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Edit report',
    subtitle: 'Autosaved',
    onBack: () => {
      // eslint-disable-next-line no-console
      console.log('back');
    }
  }
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var _,f,j;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Reports',
    subtitle: 'Last 30 days',
    actions: <>
        <Button variant="outlined" size="small">
          Export
        </Button>
        <Button variant="contained" size="small">
          New report
        </Button>
      </>
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const $=["SimpleTitle","WithSubtitle","WithBackButton","WithActions"];export{r as SimpleTitle,o as WithActions,s as WithBackButton,a as WithSubtitle,$ as __namedExportsOrder,Z as default};
