import{j as e}from"./iframe-CXEw8YqF.js";import{c as I}from"./createSvgIcon-B15l7tE5.js";import{B as t}from"./Box-ffj_WZAu.js";import{I as S}from"./IconButton-B6fFVoV9.js";import{T as l}from"./Typography-DAy4giaA.js";import{B as d}from"./Button-Dc-49q6L.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useForkRef-D-NHcfer.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DVqw_gkI.js";const N=I(e.jsx("path",{d:"M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"}),"ArrowBackIosRounded");function y({title:k,subtitle:n,onBack:i,actions:c}){return e.jsxs(t,{component:"header",role:"banner",className:"raven-page-header",children:[e.jsxs(t,{className:"raven-page-header__title-group",children:[i?e.jsx(S,{edge:"start",size:"small","aria-label":"Go back",onClick:i,className:"raven-page-header__back",children:e.jsx(N,{fontSize:"small"})}):null,e.jsxs(t,{children:[e.jsx(l,{variant:"h6",component:"h1",className:"raven-page-header__title",children:k}),n?e.jsx(l,{variant:"body2",color:"text.secondary",className:"raven-page-header__subtitle",children:n}):null]})]}),c?e.jsx(t,{className:"raven-page-header__actions",children:c}):null]})}y.__docgenInfo={description:"Sticky page header with optional back control and trailing actions.",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const G={title:"Layout/Page Header",component:y},a={args:{title:"Incidents"}},r={args:{title:"Investigation details",subtitle:"Case #1042 · Opened Mar 12, 2026"}},s={args:{title:"Edit report",subtitle:"Autosaved",onBack:()=>{console.log("back")}}},o={args:{title:"Reports",subtitle:"Last 30 days",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outlined",size:"small",children:"Export"}),e.jsx(d,{variant:"contained",size:"small",children:"New report"})]})}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Incidents'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Investigation details',
    subtitle: 'Case #1042 · Opened Mar 12, 2026'
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,b,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const D=["SimpleTitle","WithSubtitle","WithBackButton","WithActions"];export{a as SimpleTitle,o as WithActions,s as WithBackButton,r as WithSubtitle,D as __namedExportsOrder,G as default};
