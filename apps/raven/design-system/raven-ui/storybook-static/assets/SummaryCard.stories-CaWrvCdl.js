import{r as E,b as M,j as e}from"./iframe-CXEw8YqF.js";import{A as V}from"./AssessmentRounded-rrP0V3Hz.js";import{C as x}from"./ChevronRightRounded-Cm8eR43k.js";import{T as a}from"./Typography-DAy4giaA.js";import{I as U}from"./IconButton-B6fFVoV9.js";import{B as h}from"./Box-ffj_WZAu.js";import{C as W}from"./Card-Rqz_4A7m.js";import{g as $,b as z,c as b,a as G,s as D,m as S}from"./memoTheme-CQZK3ANR.js";import{u as j}from"./useSlot-DGLNvGs3.js";import{B as J}from"./ButtonBase-VzJ3_ui6.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DVqw_gkI.js";import"./Paper-SJt3C1w7.js";import"./useTheme-CpXYfoxd.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";function K(r){return $("MuiCardActionArea",r)}const y=z("MuiCardActionArea",["root","focusVisible","focusHighlight"]),L=r=>{const{classes:s}=r;return G({root:["root"],focusHighlight:["focusHighlight"]},K,s)},Q=D(J,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(r,s)=>s.root})(S(({theme:r})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${y.focusHighlight}`]:{opacity:(r.vars||r).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${y.focusVisible} .${y.focusHighlight}`]:{opacity:(r.vars||r).palette.action.focusOpacity}}))),X=D("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(r,s)=>s.focusHighlight})(S(({theme:r})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:r.transitions.create("opacity",{duration:r.transitions.duration.short})}))),Y=E.forwardRef(function(s,i){const l=M({props:s,name:"MuiCardActionArea"}),{children:c,className:u,focusVisibleClassName:o,slots:d={},slotProps:t={},...P}=l,v=l,g=L(v),f={slots:d,slotProps:t},[I,O]=j("root",{elementType:Q,externalForwardedProps:{...f,...P},shouldForwardComponentProp:!0,ownerState:v,ref:i,className:b(g.root,u),additionalProps:{focusVisibleClassName:b(o,g.focusVisible)}}),[F,B]=j("focusHighlight",{elementType:X,externalForwardedProps:f,ownerState:v,ref:i,className:g.focusHighlight});return e.jsxs(I,{...O,children:[c,e.jsx(F,{...B})]})});function H({icon:r,title:s,stats:i,closureRate:l,departments:c,trend:u,onClick:o}){const d=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"raven-summary-card__header",children:[e.jsxs("div",{className:"raven-summary-card__header-main",children:[e.jsx("span",{className:"raven-summary-card__icon","aria-hidden":!0,children:r}),e.jsx(a,{component:"h2",variant:"subtitle2",fontWeight:600,className:"raven-summary-card__title",color:"text.primary",children:s})]}),o?e.jsx(U,{size:"small","aria-label":`Open ${s}`,onClick:t=>{t.stopPropagation(),o()},children:e.jsx(x,{fontSize:"small","aria-hidden":!0})}):e.jsx(h,{component:"span","aria-hidden":!0,sx:{display:"inline-flex",alignItems:"center",color:"action.disabled"},children:e.jsx(x,{fontSize:"small"})})]}),e.jsx("div",{className:"raven-summary-card__stats",role:"list",children:i.map(t=>e.jsxs("div",{className:"raven-summary-card__stat",role:"listitem",children:[e.jsxs("div",{className:"raven-summary-card__stat-row",children:[e.jsx("span",{className:"raven-summary-card__stat-dot",style:{backgroundColor:t.color??"rgba(0,0,0,0.38)"},"aria-hidden":!0}),e.jsx(a,{variant:"h4",component:"span",color:"text.primary",children:t.value})]}),e.jsx(a,{variant:"body2",color:"text.secondary",component:"span",children:t.label})]},t.label))}),e.jsxs("div",{className:"raven-summary-card__closure",children:[e.jsxs(a,{variant:"body2",component:"span",color:"text.secondary",children:["Closure rate:"," "]}),e.jsx(a,{component:"span",variant:"body2",fontWeight:600,color:l.positive?"success.dark":"error.dark",children:l.value})]}),e.jsxs("div",{className:"raven-summary-card__footer",children:[e.jsxs(a,{variant:"body2",color:"text.secondary",component:"p",children:["Across ",c.count," departments — top:"," ",e.jsx(a,{component:"span",variant:"body2",color:"text.primary",fontWeight:600,children:c.top})]}),e.jsx(a,{variant:"body2",component:"span",fontWeight:600,color:u.positive?"success.dark":"error.dark",children:u.value})]})]});return e.jsx(W,{elevation:0,className:"raven-summary-card",sx:{borderRadius:"8px"},children:o?e.jsx(Y,{onClick:o,sx:{alignItems:"stretch",flexDirection:"column",width:"100%"},children:e.jsx(h,{component:"div",width:"100%",children:d})}):e.jsx(h,{children:d})})}H.__docgenInfo={description:"Dashboard-style summary with stats, closure rate, and department/trend footer.",methods:[],displayName:"SummaryCard",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""},stats:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: number; label: string; color?: string }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}}]}}],raw:"{ value: number; label: string; color?: string }[]"},description:""},closureRate:{required:!0,tsType:{name:"signature",type:"object",raw:"{ value: string; positive: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"positive",value:{name:"boolean",required:!0}}]}},description:""},departments:{required:!0,tsType:{name:"signature",type:"object",raw:"{ count: number; top: string }",signature:{properties:[{key:"count",value:{name:"number",required:!0}},{key:"top",value:{name:"string",required:!0}}]}},description:""},trend:{required:!0,tsType:{name:"signature",type:"object",raw:"{ value: string; positive: boolean }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"positive",value:{name:"boolean",required:!0}}]}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const be={title:"Data Display/Summary Card",component:H},n={args:{icon:e.jsx(V,{}),title:"Near-miss overview",stats:[{value:42,label:"Open",color:"#0288D1"},{value:18,label:"Closed",color:"#2E7D32"}],closureRate:{value:"76%",positive:!0},departments:{count:5,top:"Operations"},trend:{value:"+12% vs last month",positive:!0}}},m={args:{...n.args,onClick:()=>{}}},p={args:{...n.args,closureRate:{value:"54%",positive:!1},trend:{value:"-3% vs last month",positive:!1}}};var C,A,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(A=n.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var N,k,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => {}
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var q,R,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const je=["Default","Clickable","NegativeTrend"];export{m as Clickable,n as Default,p as NegativeTrend,je as __namedExportsOrder,be as default};
