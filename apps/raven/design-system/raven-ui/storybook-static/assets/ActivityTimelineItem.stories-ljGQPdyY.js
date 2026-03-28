import{r as u,j as e}from"./iframe-CXEw8YqF.js";import{E}from"./ExpandMoreRounded-CKn2f4Wd.js";import{B as a}from"./Box-ffj_WZAu.js";import{A as I}from"./Avatar-DuzNOIiX.js";import{T as r}from"./Typography-DAy4giaA.js";import{I as N}from"./IconButton-B6fFVoV9.js";import{C as q}from"./Collapse-C7cg-Z7P.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./memoTheme-CQZK3ANR.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DVqw_gkI.js";import"./useTheme-CpXYfoxd.js";import"./utils-BygEin2U.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";function _({user:t,timestamp:w,actionLabel:A,expandedContent:c,showConnector:M=!1}){const[n,T]=u.useState(!1),d=!!c,p=u.useId();return e.jsxs(a,{className:"raven-timeline-item",children:[e.jsxs(a,{className:"raven-timeline-item__track",children:[e.jsx(I,{className:"raven-timeline-item__avatar",sx:{width:24,height:24,fontSize:"0.625rem",bgcolor:t.avatarColor,color:"rgba(0,0,0,0.87)"},"aria-label":`${t.name}, ${t.role}`,children:t.initials}),M?e.jsx(a,{className:"raven-timeline-item__connector"}):null]}),e.jsxs(a,{className:"raven-timeline-item__body",children:[e.jsxs(r,{variant:"body2",component:"div",color:"text.primary",children:[t.name," ",e.jsxs(r,{component:"span",variant:"body2",color:"text.secondary",children:["(",t.role,")"]})]}),e.jsx(r,{variant:"caption",component:"p",color:"text.secondary",sx:{mt:.25},children:w}),e.jsxs(a,{className:"raven-timeline-item__card",children:[e.jsxs(a,{className:"raven-timeline-item__card-row",children:[e.jsx(r,{variant:"body2",component:"span",sx:{flex:1},children:A}),d?e.jsx(N,{size:"small",onClick:()=>T(m=>!m),"aria-expanded":n,"aria-controls":p,"aria-label":n?"Collapse details":"Expand details",children:e.jsx(E,{fontSize:"small","aria-hidden":!0,sx:{transform:n?"rotate(180deg)":"rotate(0deg)",transition:m=>m.transitions.create("transform")}})}):null]}),d?e.jsx(q,{in:n,children:e.jsx(a,{id:p,className:"raven-timeline-item__expanded",role:"region",children:c})}):null]})]})]})}_.__docgenInfo={description:"Single row in an incident activity timeline with optional expandable detail.",methods:[],displayName:"ActivityTimelineItem",props:{user:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initials: string;
  name: string;
  role: string;
  avatarColor: string;
}`,signature:{properties:[{key:"initials",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"role",value:{name:"string",required:!0}},{key:"avatarColor",value:{name:"string",required:!0}}]}},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},actionLabel:{required:!0,tsType:{name:"string"},description:""},expandedContent:{required:!1,tsType:{name:"ReactNode"},description:""},showConnector:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const l={initials:"JD",name:"Jordan Doe",role:"Safety Lead",avatarColor:"#CE93D8"},ae={title:"Feedback/Activity Timeline",component:_},i={args:{user:l,timestamp:"Mar 26, 2026 · 2:14 PM",actionLabel:"Changed status from Open to Under review",showConnector:!0}},o={args:{user:l,timestamp:"Mar 26, 2026 · 2:14 PM",actionLabel:"Added investigation notes",showConnector:!0,expandedContent:e.jsx(r,{variant:"body2",color:"text.secondary",children:"Root cause hypothesis updated; awaiting maintenance sign-off."})}},s={args:{user:{...l,initials:"AK",name:"Alex Kim"},timestamp:"Mar 25, 2026 · 9:00 AM",actionLabel:"Incident created",showConnector:!1}};var x,g,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const te=["Basic","WithExpandableDetails","WithoutConnector"];export{i as Basic,o as WithExpandableDetails,s as WithoutConnector,te as __namedExportsOrder,ae as default};
