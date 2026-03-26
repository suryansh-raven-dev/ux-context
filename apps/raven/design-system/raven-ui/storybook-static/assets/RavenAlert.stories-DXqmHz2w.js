import{j as m}from"./jsx-runtime-Cf8x2fCZ.js";import{A as D}from"./Alert-BEPkYJ1r.js";import{r as $}from"./index-Dx_1l3Sb.js";import{g as G,a as H,c as J,b as K,s as L,m as Q}from"./memoTheme-ZM2DYSWk.js";import{u as V}from"./DefaultPropsProvider-Sd0H8ooC.js";import{T as X}from"./Typography-Dh7MeB_o.js";import{B as Y}from"./Button-BjJEk2v3.js";import"./index-yBjzXJbu.js";import"./useSlot-Bl1_nPO2.js";import"./useForkRef-C3HHWd7T.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-iJIBX0qc.js";import"./Close-Cjsr4BrD.js";import"./IconButton-Dq-iQMUB.js";import"./useId-C3TUYdx9.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./useEventCallback-CXnF2NLt.js";import"./useEnhancedEffect-CioLkZex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlP4V8jk.js";import"./Paper-BTRkgBdF.js";import"./useTheme-C0BMCT-Q.js";import"./useTheme-Dbu05CKd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4qhqXJuN.js";import"./extendSxProp-DutLj_5J.js";function Z(e){return G("MuiAlertTitle",e)}H("MuiAlertTitle",["root"]);const ee=e=>{const{classes:r}=e;return K({root:["root"]},Z,r)},re=L(X,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,r)=>r.root})(Q(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2}))),se=$.forwardRef(function(r,s){const t=V({props:r,name:"MuiAlertTitle"}),{className:_,...O}=t,u=t,z=ee(u);return m.jsx(re,{gutterBottom:!0,component:"div",ownerState:u,ref:s,className:J(z.root,_),...O})}),U=({title:e,children:r,className:s,...t})=>m.jsxs(D,{className:`raven-alert ${s||""}`,...t,children:[e&&m.jsx(se,{children:e}),r]});U.__docgenInfo={description:"",methods:[],displayName:"RavenAlert",props:{title:{required:!1,tsType:{name:"string"},description:""}},composes:["AlertProps"]};const qe={title:"Feedback/RavenAlert",component:U,tags:["autodocs"]},i={args:{severity:"success",children:"Incident report submitted successfully."}},o={args:{severity:"error",children:"Failed to save incident — please try again."}},a={args:{severity:"warning",children:"This incident has not been reviewed in over 30 days."}},n={args:{severity:"info",children:"A new analysis workflow is available for this report."}},c={args:{severity:"info",title:"Review Required",children:"Please review the updated risk assessment before closing this incident."}},l={args:{severity:"warning",title:"Pending Approval",children:"This corrective action is waiting for manager sign-off.",action:m.jsx(Y,{color:"inherit",size:"small",children:"Approve"})}},p={args:{severity:"success",variant:"outlined",children:"All corrective actions have been completed."}},d={args:{severity:"error",variant:"filled",children:"Critical safety threshold exceeded — immediate action required."}};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var W,C,j;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    title: 'Review Required',
    children: 'Please review the updated risk assessment before closing this incident.'
  }
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var P,k,q;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    severity: 'warning',
    title: 'Pending Approval',
    children: 'This corrective action is waiting for manager sign-off.',
    action: <Button color="inherit" size="small">Approve</Button>
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,E,F;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    severity: 'success',
    variant: 'outlined',
    children: 'All corrective actions have been completed.'
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,M,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    severity: 'error',
    variant: 'filled',
    children: 'Critical safety threshold exceeded — immediate action required.'
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Be=["Success","Error","Warning","Info","WithTitle","WithAction","Outlined","Filled"];export{o as Error,d as Filled,n as Info,p as Outlined,i as Success,a as Warning,l as WithAction,c as WithTitle,Be as __namedExportsOrder,qe as default};
