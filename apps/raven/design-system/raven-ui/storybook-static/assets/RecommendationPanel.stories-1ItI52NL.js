import{j as e,r as u}from"./iframe-CXEw8YqF.js";import{L as v}from"./LightbulbRounded-Cvto3xuA.js";import{c as I}from"./createSvgIcon-B15l7tE5.js";import{E as _}from"./ExpandMoreRounded-CKn2f4Wd.js";import{B as n}from"./Box-ffj_WZAu.js";import{T as i}from"./Typography-DAy4giaA.js";import{C as N}from"./Collapse-C7cg-Z7P.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-CpXYfoxd.js";import"./utils-BygEin2U.js";import"./TransitionGroupContext-Bc261l7d.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";import"./useForkRef-D-NHcfer.js";const O=I([e.jsx("path",{d:"M21 6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11z"},"0"),e.jsx("circle",{cx:"12",cy:"12",r:"3"},"1")],"PolicyRounded");function x({incidentId:g,sections:d}){const r=u.useId(),[b,j]=u.useState(()=>d.map(t=>t.defaultOpen??!1));return e.jsxs(n,{className:"raven-rec-panel",component:"aside","aria-label":"Recommendations",children:[e.jsx(n,{className:"raven-rec-panel__header",children:e.jsxs(i,{variant:"subtitle2",component:"h2",id:`${r}-panel-title`,children:["Incident ID: ",g]})}),e.jsx(n,{className:"raven-rec-panel__sections",role:"presentation","aria-labelledby":`${r}-panel-title`,children:d.map((t,a)=>{const s=b[a]??!1,m=`${r}-section-${a}-header`,p=`${r}-section-${a}-region`;return e.jsxs(n,{className:"raven-rec-panel__section",children:[e.jsxs(n,{component:"button",type:"button",id:m,className:"raven-rec-panel__section-header","aria-expanded":s,"aria-controls":p,onClick:()=>j(c=>{const l=[...c];return l[a]=!l[a],l}),children:[e.jsx(n,{className:"raven-rec-panel__section-header-main","aria-hidden":!0,children:t.icon}),e.jsx(i,{variant:"body2",component:"span",sx:{flex:1,textAlign:"left"},children:t.title}),e.jsx(_,{fontSize:"small","aria-hidden":!0,sx:{flexShrink:0,transform:s?"rotate(180deg)":"rotate(0deg)",transition:c=>c.transitions.create("transform"),color:"text.secondary"}})]}),e.jsx(N,{in:s,children:e.jsx(n,{id:p,role:"region","aria-labelledby":m,className:"raven-rec-panel__section-body",children:t.children})})]},`${t.title}-${a}`)})})]})}x.__docgenInfo={description:"Fixed recommendations panel with collapsible guidance sections for an incident.",methods:[],displayName:"RecommendationPanel",props:{incidentId:{required:!0,tsType:{name:"string"},description:""},sections:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"defaultOpen",value:{name:"boolean",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}],raw:"RecommendationSection[]"},description:""}}};const F={title:"Feedback/Recommendation Panel",component:x},o={args:{incidentId:"NM-2026-0142",sections:[{icon:e.jsx(v,{fontSize:"small"}),title:"Immediate actions",defaultOpen:!0,children:e.jsx(i,{variant:"body2",color:"text.secondary",children:"Isolate the affected line and verify lockout/tagout before resuming work."})},{icon:e.jsx(O,{fontSize:"small"}),title:"Policy references",defaultOpen:!1,children:e.jsx(i,{variant:"body2",color:"text.secondary",children:"See site procedure SMP-12 for near-miss escalation and documentation."})}]}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    incidentId: 'NM-2026-0142',
    sections: [{
      icon: <LightbulbOutlinedIcon fontSize="small" />,
      title: 'Immediate actions',
      defaultOpen: true,
      children: <Typography variant="body2" color="text.secondary">
            Isolate the affected line and verify lockout/tagout before resuming work.
          </Typography>
    }, {
      icon: <PolicyOutlinedIcon fontSize="small" />,
      title: 'Policy references',
      defaultOpen: false,
      children: <Typography variant="body2" color="text.secondary">
            See site procedure SMP-12 for near-miss escalation and documentation.
          </Typography>
    }]
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,F as default};
