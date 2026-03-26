import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as V}from"./createSvgIcon-iJIBX0qc.js";import{C as x}from"./ChevronRight-C4TDEzAv.js";import{T as a}from"./Typography-Dh7MeB_o.js";import{I as z}from"./IconButton-Dq-iQMUB.js";import{B as g}from"./Box-BpWUXKTb.js";import{C as B}from"./Card-CsFqaWZX.js";import{r as E}from"./index-Dx_1l3Sb.js";import{g as U,a as W,c as b,b as $,s as S,m as T}from"./memoTheme-ZM2DYSWk.js";import{u as j}from"./useSlot-Bl1_nPO2.js";import{u as G}from"./DefaultPropsProvider-Sd0H8ooC.js";import{B as J}from"./ButtonBase-Bq0L8UA2.js";import"./index-yBjzXJbu.js";import"./index-4qhqXJuN.js";import"./useTheme-Dbu05CKd.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C3TUYdx9.js";import"./CircularProgress-BlP4V8jk.js";import"./Paper-BTRkgBdF.js";import"./useTheme-C0BMCT-Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useForkRef-C3HHWd7T.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";function K(r){return U("MuiCardActionArea",r)}const y=W("MuiCardActionArea",["root","focusVisible","focusHighlight"]),L=r=>{const{classes:t}=r;return $({root:["root"],focusHighlight:["focusHighlight"]},K,t)},Q=S(J,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(r,t)=>t.root})(T(({theme:r})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${y.focusHighlight}`]:{opacity:(r.vars||r).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${y.focusVisible} .${y.focusHighlight}`]:{opacity:(r.vars||r).palette.action.focusOpacity}}))),X=S("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(r,t)=>t.focusHighlight})(T(({theme:r})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:r.transitions.create("opacity",{duration:r.transitions.duration.short})}))),Y=E.forwardRef(function(t,i){const l=G({props:t,name:"MuiCardActionArea"}),{children:c,className:u,focusVisibleClassName:o,slots:m={},slotProps:s={},...P}=l,v=l,h=L(v),f={slots:m,slotProps:s},[I,O]=j("root",{elementType:Q,externalForwardedProps:{...f,...P},shouldForwardComponentProp:!0,ownerState:v,ref:i,className:b(h.root,u),additionalProps:{focusVisibleClassName:b(o,h.focusVisible)}}),[F,M]=j("focusHighlight",{elementType:X,externalForwardedProps:f,ownerState:v,ref:i,className:h.focusHighlight});return e.jsxs(I,{...O,children:[c,e.jsx(F,{...M})]})}),Z=V(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"}),"Assessment");function D({icon:r,title:t,stats:i,closureRate:l,departments:c,trend:u,onClick:o}){const m=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"raven-summary-card__header",children:[e.jsxs("div",{className:"raven-summary-card__header-main",children:[e.jsx("span",{className:"raven-summary-card__icon","aria-hidden":!0,children:r}),e.jsx(a,{component:"h2",variant:"subtitle2",fontWeight:600,className:"raven-summary-card__title",color:"text.primary",children:t})]}),o?e.jsx(z,{size:"small","aria-label":`Open ${t}`,onClick:s=>{s.stopPropagation(),o()},children:e.jsx(x,{fontSize:"small","aria-hidden":!0})}):e.jsx(g,{component:"span","aria-hidden":!0,sx:{display:"inline-flex",alignItems:"center",color:"action.disabled"},children:e.jsx(x,{fontSize:"small"})})]}),e.jsx("div",{className:"raven-summary-card__stats",role:"list",children:i.map(s=>e.jsxs("div",{className:"raven-summary-card__stat",role:"listitem",children:[e.jsxs("div",{className:"raven-summary-card__stat-row",children:[e.jsx("span",{className:"raven-summary-card__stat-dot",style:{backgroundColor:s.color??"rgba(0,0,0,0.38)"},"aria-hidden":!0}),e.jsx(a,{variant:"h4",component:"span",color:"text.primary",children:s.value})]}),e.jsx(a,{variant:"body2",color:"text.secondary",component:"span",children:s.label})]},s.label))}),e.jsxs("div",{className:"raven-summary-card__closure",children:[e.jsxs(a,{variant:"body2",component:"span",color:"text.secondary",children:["Closure rate:"," "]}),e.jsx(a,{component:"span",variant:"body2",fontWeight:600,color:l.positive?"success.dark":"error.dark",children:l.value})]}),e.jsxs("div",{className:"raven-summary-card__footer",children:[e.jsxs(a,{variant:"body2",color:"text.secondary",component:"p",children:["Across ",c.count," departments — top:"," ",e.jsx(a,{component:"span",variant:"body2",color:"text.primary",fontWeight:600,children:c.top})]}),e.jsx(a,{variant:"body2",component:"span",fontWeight:600,color:u.positive?"success.dark":"error.dark",children:u.value})]})]});return e.jsx(B,{elevation:0,className:"raven-summary-card",sx:{borderRadius:"8px"},children:o?e.jsx(Y,{onClick:o,sx:{alignItems:"stretch",flexDirection:"column",width:"100%"},children:e.jsx(g,{component:"div",width:"100%",children:m})}):e.jsx(g,{children:m})})}D.__docgenInfo={description:"Dashboard-style summary with stats, closure rate, and department/trend footer.",methods:[],displayName:"SummaryCard",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},stats:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: number; label: string; color?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}}]}}],raw:"{ value: number; label: string; color?: string }[]"},description:""},closureRate:{required:!0,tsType:{name:"signature",type:"object",raw:"{ value: string; positive: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"positive",value:{name:"boolean",required:!0}}]}},description:""},departments:{required:!0,tsType:{name:"signature",type:"object",raw:"{ count: number; top: string }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"top",value:{name:"string",required:!0}}]}},description:""},trend:{required:!0,tsType:{name:"signature",type:"object",raw:"{ value: string; positive: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"positive",value:{name:"boolean",required:!0}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const qe={title:"Data display/SummaryCard",component:D},n={args:{icon:e.jsx(Z,{}),title:"Near-miss overview",stats:[{value:42,label:"Open",color:"#0288D1"},{value:18,label:"Closed",color:"#2E7D32"}],closureRate:{value:"76%",positive:!0},departments:{count:5,top:"Operations"},trend:{value:"+12% vs last month",positive:!0}}},d={args:{...n.args,onClick:()=>{}}},p={args:{...n.args,closureRate:{value:"54%",positive:!1},trend:{value:"-3% vs last month",positive:!1}}};var C,A,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    icon: <AssessmentIcon />,
    title: 'Near-miss overview',
    stats: [{
      value: 42,
      label: 'Open',
      color: '#0288D1'
    }, {
      value: 18,
      label: 'Closed',
      color: '#2E7D32'
    }],
    closureRate: {
      value: '76%',
      positive: true
    },
    departments: {
      count: 5,
      top: 'Operations'
    },
    trend: {
      value: '+12% vs last month',
      positive: true
    }
  }
}`,...(_=(A=n.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var N,k,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => {}
  }
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var q,R,H;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closureRate: {
      value: '54%',
      positive: false
    },
    trend: {
      value: '-3% vs last month',
      positive: false
    }
  }
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const Re=["Default","Clickable","NegativeTrend"];export{d as Clickable,n as Default,p as NegativeTrend,Re as __namedExportsOrder,qe as default};
