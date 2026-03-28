import{r as D,b as $,j as m}from"./iframe-CXEw8YqF.js";import{A as G}from"./Alert-CSHaxfwS.js";import{g as H,b as J,c as K,a as L,s as Q,m as V}from"./memoTheme-CQZK3ANR.js";import{T as X}from"./Typography-DAy4giaA.js";import{B as Y}from"./Button-Dc-49q6L.js";import"./preload-helper-Dp1pzeXC.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B15l7tE5.js";import"./Close-bbTIZ8Ox.js";import"./IconButton-B6fFVoV9.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DVqw_gkI.js";import"./Paper-SJt3C1w7.js";import"./useTheme-CpXYfoxd.js";function Z(e){return H("MuiAlertTitle",e)}J("MuiAlertTitle",["root"]);const ee=e=>{const{classes:r}=e;return L({root:["root"]},Z,r)},re=Q(X,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,r)=>r.root})(V(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2}))),se=D.forwardRef(function(r,s){const t=$({props:r,name:"MuiAlertTitle"}),{className:_,...O}=t,u=t,z=ee(u);return m.jsx(re,{gutterBottom:!0,component:"div",ownerState:u,ref:s,className:K(z.root,_),...O})}),U=({title:e,children:r,className:s,...t})=>m.jsxs(G,{className:`raven-alert ${s||""}`,...t,children:[e&&m.jsx(se,{children:e}),r]});U.__docgenInfo={description:"",methods:[],displayName:"RavenAlert",props:{title:{required:!1,tsType:{name:"string"},description:""}},composes:["AlertProps"]};const xe={title:"Components/Feedback/Alert",component:U,tags:["autodocs"]},i={args:{severity:"success",children:"Incident report submitted successfully."}},o={args:{severity:"error",children:"Failed to save incident — please try again."}},a={args:{severity:"warning",children:"This incident has not been reviewed in over 30 days."}},n={args:{severity:"info",children:"A new analysis workflow is available for this report."}},c={args:{severity:"info",title:"Review Required",children:"Please review the updated risk assessment before closing this incident."}},l={args:{severity:"warning",title:"Pending Approval",children:"This corrective action is waiting for manager sign-off.",action:m.jsx(Y,{color:"inherit",size:"small",children:"Approve"})}},d={args:{severity:"success",variant:"outlined",children:"All corrective actions have been completed."}},p={args:{severity:"error",variant:"filled",children:"Critical safety threshold exceeded — immediate action required."}};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    children: 'Incident report submitted successfully.'
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    children: 'Failed to save incident — please try again.'
  }
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var w,T,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    children: 'This incident has not been reviewed in over 30 days.'
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var x,R,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    children: 'A new analysis workflow is available for this report.'
  }
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var C,W,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'Review Required',
    children: 'Please review the updated risk assessment before closing this incident.'
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var P,k,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Pending Approval',
    children: 'This corrective action is waiting for manager sign-off.',
    action: <Button color="inherit" size="small">Approve</Button>
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,E,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    variant: 'outlined',
    children: 'All corrective actions have been completed.'
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,M,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    variant: 'filled',
    children: 'Critical safety threshold exceeded — immediate action required.'
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Re=["Success","Error","Warning","Info","WithTitle","WithAction","Outlined","Filled"];export{o as Error,p as Filled,n as Info,d as Outlined,i as Success,a as Warning,l as WithAction,c as WithTitle,Re as __namedExportsOrder,xe as default};
