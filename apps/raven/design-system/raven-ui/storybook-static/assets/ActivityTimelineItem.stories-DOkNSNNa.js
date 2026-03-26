import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-Dx_1l3Sb.js";import{E as I}from"./ExpandMore-DanfJ2vj.js";import{B as t}from"./Box-BpWUXKTb.js";import{A as E}from"./Avatar-FAWwedfm.js";import{T as r}from"./Typography-Dh7MeB_o.js";import{I as N}from"./IconButton-Dq-iQMUB.js";import{C as q}from"./Collapse-CTxAxUeb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-iJIBX0qc.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./useSlot-Bl1_nPO2.js";import"./useForkRef-C3HHWd7T.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C3TUYdx9.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlP4V8jk.js";import"./useTheme-C0BMCT-Q.js";import"./utils-vM8Acyw6.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function _({user:a,timestamp:w,actionLabel:A,expandedContent:c,showConnector:M=!1}){const[n,T]=u.useState(!1),p=!!c,d=u.useId();return e.jsxs(t,{className:"raven-timeline-item",children:[e.jsxs(t,{className:"raven-timeline-item__track",children:[e.jsx(E,{className:"raven-timeline-item__avatar",sx:{width:24,height:24,fontSize:"0.625rem",bgcolor:a.avatarColor,color:"rgba(0,0,0,0.87)"},"aria-label":`${a.name}, ${a.role}`,children:a.initials}),M?e.jsx(t,{className:"raven-timeline-item__connector"}):null]}),e.jsxs(t,{className:"raven-timeline-item__body",children:[e.jsxs(r,{variant:"body2",component:"div",color:"text.primary",children:[a.name," ",e.jsxs(r,{component:"span",variant:"body2",color:"text.secondary",children:["(",a.role,")"]})]}),e.jsx(r,{variant:"caption",component:"p",color:"text.secondary",sx:{mt:.25},children:w}),e.jsxs(t,{className:"raven-timeline-item__card",children:[e.jsxs(t,{className:"raven-timeline-item__card-row",children:[e.jsx(r,{variant:"body2",component:"span",sx:{flex:1},children:A}),p?e.jsx(N,{size:"small",onClick:()=>T(m=>!m),"aria-expanded":n,"aria-controls":d,"aria-label":n?"Collapse details":"Expand details",children:e.jsx(I,{fontSize:"small","aria-hidden":!0,sx:{transform:n?"rotate(180deg)":"rotate(0deg)",transition:m=>m.transitions.create("transform")}})}):null]}),p?e.jsx(q,{in:n,children:e.jsx(t,{id:d,className:"raven-timeline-item__expanded",role:"region",children:c})}):null]})]})]})}_.__docgenInfo={description:"Single row in an incident activity timeline with optional expandable detail.",methods:[],displayName:"ActivityTimelineItem",props:{user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initials: string;
  name: string;
  role: string;
  avatarColor: string;
}`,signature:{properties:[{key:"initials",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!0}},{key:"avatarColor",value:{name:"string",required:!0}}]}},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!0,tsType:{name:"string"},description:""},expandedContent:{required:!1,tsType:{name:"ReactNode"},description:""},showConnector:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const l={initials:"JD",name:"Jordan Doe",role:"Safety Lead",avatarColor:"#CE93D8"},le={title:"Feedback/ActivityTimelineItem",component:_},i={args:{user:l,timestamp:"Mar 26, 2026 · 2:14 PM",actionLabel:"Changed status from Open to Under review",showConnector:!0}},o={args:{user:l,timestamp:"Mar 26, 2026 · 2:14 PM",actionLabel:"Added investigation notes",showConnector:!0,expandedContent:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Root cause hypothesis updated; awaiting maintenance sign-off."})}},s={args:{user:{...l,initials:"AK",name:"Alex Kim"},timestamp:"Mar 25, 2026 · 9:00 AM",actionLabel:"Incident created",showConnector:!1}};var x,g,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    timestamp: 'Mar 26, 2026 · 2:14 PM',
    actionLabel: 'Changed status from Open to Under review',
    showConnector: true
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    timestamp: 'Mar 26, 2026 · 2:14 PM',
    actionLabel: 'Added investigation notes',
    showConnector: true,
    expandedContent: <Typography variant="body2" color="text.secondary">
        Root cause hypothesis updated; awaiting maintenance sign-off.
      </Typography>
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,C,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    user: {
      ...sampleUser,
      initials: 'AK',
      name: 'Alex Kim'
    },
    timestamp: 'Mar 25, 2026 · 9:00 AM',
    actionLabel: 'Incident created',
    showConnector: false
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const ce=["Basic","WithExpandableDetails","WithoutConnector"];export{i as Basic,o as WithExpandableDetails,s as WithoutConnector,ce as __namedExportsOrder,le as default};
