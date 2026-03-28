import{j as a}from"./iframe-CXEw8YqF.js";import{m as _,M as P,a as Q}from"./muiV6Catalog-BfprIApM.js";import{T as r}from"./Typography-DAy4giaA.js";import{L as h}from"./Link-qU4jwG7G.js";import{C as y}from"./Chip-TCpK2l-H.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-CpXYfoxd.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B15l7tE5.js";import"./useForkRef-D-NHcfer.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";const W={available:"Raven component available",themed:"Raven theme support",guidance:"Guidance only"},J=({category:v="All"})=>{const K=v==="All"?Q:[v],o=_.reduce((s,t)=>(s.total+=1,s[t.ravenSupport]+=1,s),{total:0,available:0,themed:0,guidance:0});return a.jsxs("div",{className:"mui-v6-catalog",children:[a.jsxs("div",{className:"mui-v6-catalog__hero",children:[a.jsx("div",{className:"mui-v6-catalog__eyebrow",children:"Raven Design System"}),a.jsx(r,{variant:"h4",className:"mui-v6-catalog__title",children:"Canonical MUI v6 Component Catalog"}),a.jsx(r,{variant:"body1",className:"mui-v6-catalog__description",children:"Exact component names, official MUI references, and Raven-specific implementation notes for the Near Miss design library. This page keeps the MUI v6 naming model intact while mapping each item to Raven wrappers, theme support, or documented usage guidance."}),a.jsx("div",{className:"mui-v6-catalog__actions",children:a.jsx(h,{href:P,target:"_blank",rel:"noreferrer",children:"Open official MUI v6 catalog"})})]}),a.jsxs("div",{className:"mui-v6-catalog__summary",children:[a.jsxs("div",{className:"mui-v6-catalog__summary-card",children:[a.jsx("span",{className:"mui-v6-catalog__summary-value",children:o.total}),a.jsx("span",{className:"mui-v6-catalog__summary-label",children:"MUI catalog entries tracked"})]}),a.jsxs("div",{className:"mui-v6-catalog__summary-card",children:[a.jsx("span",{className:"mui-v6-catalog__summary-value",children:o.available}),a.jsx("span",{className:"mui-v6-catalog__summary-label",children:"Available as Raven components"})]}),a.jsxs("div",{className:"mui-v6-catalog__summary-card",children:[a.jsx("span",{className:"mui-v6-catalog__summary-value",children:o.themed}),a.jsx("span",{className:"mui-v6-catalog__summary-label",children:"Covered by Raven theming"})]}),a.jsxs("div",{className:"mui-v6-catalog__summary-card",children:[a.jsx("span",{className:"mui-v6-catalog__summary-value",children:o.guidance}),a.jsx("span",{className:"mui-v6-catalog__summary-label",children:"Guidance-first entries"})]})]}),K.map(s=>{const t=_.filter(e=>e.category===s);return a.jsxs("section",{className:"mui-v6-catalog__section",children:[a.jsxs("div",{className:"mui-v6-catalog__section-header",children:[a.jsx(r,{variant:"h6",children:s}),a.jsxs(r,{variant:"body2",className:"mui-v6-catalog__section-meta",children:[t.length," component",t.length===1?"":"s"]})]}),a.jsx("div",{className:"mui-v6-catalog__grid",children:t.map(e=>a.jsxs("article",{className:"mui-v6-catalog__card",children:[a.jsxs("div",{className:"mui-v6-catalog__card-top",children:[a.jsx(r,{variant:"h6",className:"mui-v6-catalog__card-title",children:e.name}),a.jsxs("div",{className:"mui-v6-catalog__chips",children:[a.jsx(y,{label:e.guideline,size:"small",className:"mui-v6-catalog__chip mui-v6-catalog__chip--guideline"}),a.jsx(y,{label:W[e.ravenSupport],size:"small",className:`mui-v6-catalog__chip mui-v6-catalog__chip--${e.ravenSupport}`})]})]}),a.jsxs("div",{className:"mui-v6-catalog__meta",children:[a.jsx("span",{className:"mui-v6-catalog__meta-label",children:"Raven mapping"}),a.jsx(r,{variant:"body2",children:e.ravenEquivalent})]}),a.jsx(r,{variant:"body2",className:"mui-v6-catalog__notes",children:e.notes}),a.jsx("div",{className:"mui-v6-catalog__footer",children:a.jsx(h,{href:e.docsUrl,target:"_blank",rel:"noreferrer",children:"MUI docs"})})]},`${e.category}-${e.name}`))})]},s)})]})};J.__docgenInfo={description:"",methods:[],displayName:"MuiV6Catalog",props:{category:{required:!1,tsType:{name:"union",raw:"MuiV6Category | 'All'",elements:[{name:"union",raw:`| 'Inputs'
| 'Data display'
| 'Feedback'
| 'Surface'
| 'Navigation'
| 'Layout'
| 'Lab'
| 'Utils'`,elements:[{name:"literal",value:"'Inputs'"},{name:"literal",value:"'Data display'"},{name:"literal",value:"'Feedback'"},{name:"literal",value:"'Surface'"},{name:"literal",value:"'Navigation'"},{name:"literal",value:"'Layout'"},{name:"literal",value:"'Lab'"},{name:"literal",value:"'Utils'"}]},{name:"literal",value:"'All'"}]},description:"",defaultValue:{value:"'All'",computed:!1}}}};const da={title:"Components/All Components",component:J,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Canonical Material UI v6 catalog aligned to the Raven Near Miss design system. Uses exact MUI component names, links to official docs, and maps each entry to Raven wrappers, theme support, or design guidance."}}}},c={args:{category:"All"}},l={args:{category:"Inputs"}},n={args:{category:"Data display"}},i={args:{category:"Feedback"}},m={args:{category:"Surface"}},u={args:{category:"Navigation"}},d={args:{category:"Layout"}},p={args:{category:"Lab"}},g={args:{category:"Utils"}};var x,N,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    category: 'All'
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var b,f,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    category: 'Inputs'
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,U,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    category: 'Data display'
  }
}`,...(I=(U=n.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var L,M,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    category: 'Feedback'
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var k,R,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    category: 'Surface'
  }
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,w,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    category: 'Navigation'
  }
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var T,E,G;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    category: 'Layout'
  }
}`,...(G=(E=d.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var O,$,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    category: 'Lab'
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,B,H;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    category: 'Utils'
  }
}`,...(H=(B=g.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const pa=["AllComponents","Inputs","DataDisplay","Feedback","Surface","Navigation","Layout","Lab","Utils"];export{c as AllComponents,n as DataDisplay,i as Feedback,l as Inputs,p as Lab,d as Layout,u as Navigation,m as Surface,g as Utils,pa as __namedExportsOrder,da as default};
