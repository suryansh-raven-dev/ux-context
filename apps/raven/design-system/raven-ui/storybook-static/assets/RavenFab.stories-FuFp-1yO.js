import{r as sa,b as ia,j as a,k as I}from"./iframe-CXEw8YqF.js";import{A as s}from"./AddRounded-BlBODZhr.js";import{E as X}from"./EditRounded-Cr8yxqZj.js";import{c as ta}from"./createSvgIcon-B15l7tE5.js";import{F as na}from"./FavoriteRounded-OrZyXb3A.js";import{R as S,W as ca,N as Y,A as da}from"./NoteAddRounded-1j6kj6Hk.js";import{g as la,b as pa,c as z,a as ma,s as ba,r as xa,m as F}from"./memoTheme-CQZK3ANR.js";import{c as ua}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as ga}from"./ButtonBase-VzJ3_ui6.js";import{S as t}from"./Stack-nkLupI6a.js";import{B as c}from"./Box-ffj_WZAu.js";import{T as n}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useForkRef-D-NHcfer.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";function ha(r){return la("MuiFab",r)}const B=pa("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),va=r=>{const{color:o,variant:i,classes:d,size:h}=r,v={root:["root",i,`size${I(h)}`,o==="inherit"?"colorInherit":o]},y=ma(v,ha,d);return{...d,...y}},ya=ba(ga,{name:"MuiFab",slot:"Root",shouldForwardProp:r=>xa(r)||r==="classes",overridesResolver:(r,o)=>{const{ownerState:i}=r;return[o.root,o[i.variant],o[`size${I(i.size)}`],i.color==="inherit"&&o.colorInherit,o[I(i.size)],o[i.color]]}})(F(({theme:r})=>{var o,i;return{...r.typography.button,minHeight:36,transition:r.transitions.create(["background-color","box-shadow","border-color"],{duration:r.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(r.vars||r).zIndex.fab,boxShadow:(r.vars||r).shadows[6],"&:active":{boxShadow:(r.vars||r).shadows[12]},color:r.vars?r.vars.palette.text.primary:(i=(o=r.palette).getContrastText)==null?void 0:i.call(o,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],"&:hover":{backgroundColor:(r.vars||r).palette.grey.A100,"@media (hover: none)":{backgroundColor:(r.vars||r).palette.grey[300]},textDecoration:"none"},[`&.${B.focusVisible}`]:{boxShadow:(r.vars||r).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}}),F(({theme:r})=>({variants:[...Object.entries(r.palette).filter(ua(["dark","contrastText"])).map(([o])=>({props:{color:o},style:{color:(r.vars||r).palette[o].contrastText,backgroundColor:(r.vars||r).palette[o].main,"&:hover":{backgroundColor:(r.vars||r).palette[o].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[o].main}}}}))]})),F(({theme:r})=>({[`&.${B.disabled}`]:{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground}}))),e=sa.forwardRef(function(o,i){const d=ia({props:o,name:"MuiFab"}),{children:h,className:v,color:y="default",component:w="button",disabled:f=!1,disableFocusRipple:A=!1,focusVisibleClassName:aa,size:ra="large",variant:ea="circular",...oa}=d,k={...d,color:y,component:w,disabled:f,disableFocusRipple:A,size:ra,variant:ea},j=va(k);return a.jsx(ya,{className:z(j.root,v),component:w,disabled:f,focusRipple:!A,focusVisibleClassName:z(j.focusVisible,aa),ownerState:k,ref:i,...oa,classes:j,children:h})}),ja=ta(a.jsx("path",{d:"m12.93 4.26 6.15 14.99c.34.83-.51 1.66-1.33 1.29l-5.34-2.36c-.26-.11-.55-.11-.81 0l-5.34 2.36c-.82.36-1.67-.46-1.33-1.29l6.15-14.99c.33-.83 1.51-.83 1.85 0"}),"NavigationRounded"),Z=r=>a.jsx(e,{...r});Z.__docgenInfo={description:"",methods:[],displayName:"RavenFab",composes:["FabProps"]};const Va={title:"Components/Inputs/Floating Action Button",component:Z,parameters:{docs:{description:{component:"Raven-styled Floating Action Button (FAB) wrapping MUI v6 Fab. Uses the Near-Miss deep purple background (#4A148C) with white icons, MUI v6 elevation shadows, and hover/focus/active state transitions. Supports circular, extended, and mini sizes. Ideal for primary actions like creating incidents or reporting near-misses."}}}},l={name:"Basic",render:()=>a.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(e,{color:"primary","aria-label":"add",children:a.jsx(s,{})}),a.jsx(e,{color:"secondary","aria-label":"edit",children:a.jsx(X,{})}),a.jsxs(e,{variant:"extended",children:[a.jsx(ja,{sx:{mr:1}}),"Navigate"]}),a.jsx(e,{disabled:!0,"aria-label":"disabled",children:a.jsx(na,{})})]})},p={name:"Sizes",render:()=>a.jsxs(t,{spacing:3,children:[a.jsxs(c,{children:[a.jsx(n,{variant:"subtitle2",gutterBottom:!0,children:"Circular Sizes"}),a.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(e,{size:"small",color:"primary","aria-label":"small",children:a.jsx(s,{})}),a.jsx(e,{size:"medium",color:"primary","aria-label":"medium",children:a.jsx(s,{})}),a.jsx(e,{size:"large",color:"primary","aria-label":"large",children:a.jsx(s,{})})]})]}),a.jsxs(c,{children:[a.jsx(n,{variant:"subtitle2",gutterBottom:!0,children:"Extended Sizes"}),a.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[a.jsxs(e,{variant:"extended",size:"small",color:"primary",children:[a.jsx(s,{sx:{mr:1}}),"Small"]}),a.jsxs(e,{variant:"extended",size:"medium",color:"primary",children:[a.jsx(s,{sx:{mr:1}}),"Medium"]}),a.jsxs(e,{variant:"extended",size:"large",color:"primary",children:[a.jsx(s,{sx:{mr:1}}),"Large"]})]})]})]})},m={name:"Colors",render:()=>a.jsxs(t,{spacing:3,children:[a.jsxs(c,{children:[a.jsx(n,{variant:"subtitle2",gutterBottom:!0,children:"Semantic Colors"}),a.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(e,{color:"primary","aria-label":"primary",children:a.jsx(s,{})}),a.jsx(e,{color:"secondary","aria-label":"secondary",children:a.jsx(X,{})}),a.jsx(e,{color:"success","aria-label":"success",children:a.jsx(s,{})}),a.jsx(e,{color:"error","aria-label":"error",children:a.jsx(S,{})}),a.jsx(e,{color:"warning","aria-label":"warning",children:a.jsx(ca,{})}),a.jsx(e,{color:"info","aria-label":"info",children:a.jsx(s,{})})]})]}),a.jsxs(c,{children:[a.jsx(n,{variant:"subtitle2",gutterBottom:!0,children:"Default (inherit)"}),a.jsx(e,{"aria-label":"default",children:a.jsx(s,{})})]})]})},b={name:"Extended Variants",render:()=>a.jsxs(t,{spacing:2,children:[a.jsxs(e,{variant:"extended",color:"primary",children:[a.jsx(Y,{sx:{mr:1}}),"New Incident"]}),a.jsxs(e,{variant:"extended",color:"error",children:[a.jsx(S,{sx:{mr:1}}),"Report Near-Miss"]}),a.jsxs(e,{variant:"extended",color:"success",children:[a.jsx(da,{sx:{mr:1}}),"Create Observation"]})]})},x={name:"Disabled",render:()=>a.jsxs(t,{direction:"row",spacing:2,alignItems:"center",children:[a.jsx(e,{disabled:!0,color:"primary","aria-label":"disabled-circular",children:a.jsx(s,{})}),a.jsxs(e,{disabled:!0,variant:"extended",color:"primary",children:[a.jsx(s,{sx:{mr:1}}),"Disabled"]})]})},u={name:"Elevation States",render:()=>a.jsxs(t,{spacing:2,children:[a.jsx(n,{variant:"body2",color:"text.secondary",children:"Hover, press, and focus the FABs to see Raven elevation transitions. Default: shadows[6], Hover: shadows[12], Active: shadows[12], Disabled: none."}),a.jsxs(t,{direction:"row",spacing:3,alignItems:"center",children:[a.jsxs(c,{sx:{textAlign:"center"},children:[a.jsx(e,{color:"primary","aria-label":"interactive",children:a.jsx(s,{})}),a.jsx(n,{variant:"caption",display:"block",sx:{mt:1},children:"Interactive"})]}),a.jsxs(c,{sx:{textAlign:"center"},children:[a.jsx(e,{disabled:!0,"aria-label":"no-elevation",children:a.jsx(s,{})}),a.jsx(n,{variant:"caption",display:"block",sx:{mt:1},children:"Disabled (no shadow)"})]})]})]})},g={name:"Raven Product Patterns",render:()=>a.jsxs(c,{sx:{position:"relative",height:300,width:"100%",border:"1px dashed #E0E0E0",borderRadius:2},children:[a.jsx(n,{variant:"body2",sx:{p:2},color:"text.secondary",children:"Fixed-position FAB pattern — bottom-right corner for primary creation actions"}),a.jsxs(e,{color:"primary",variant:"extended",sx:{position:"absolute",bottom:24,right:24},children:[a.jsx(Y,{sx:{mr:1}}),"New Incident"]}),a.jsx(e,{color:"error",size:"medium",sx:{position:"absolute",bottom:24,right:220},"aria-label":"report",children:a.jsx(S,{})})]})};var R,C,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Basic',
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{
        mr: 1
      }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="disabled">
        <FavoriteIcon />
      </Fab>
    </Stack>
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,N,P;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Circular Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab size="small" color="primary" aria-label="small">
            <AddIcon />
          </Fab>
          <Fab size="medium" color="primary" aria-label="medium">
            <AddIcon />
          </Fab>
          <Fab size="large" color="primary" aria-label="large">
            <AddIcon />
          </Fab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Extended Sizes
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab variant="extended" size="small" color="primary">
            <AddIcon sx={{
            mr: 1
          }} />
            Small
          </Fab>
          <Fab variant="extended" size="medium" color="primary">
            <AddIcon sx={{
            mr: 1
          }} />
            Medium
          </Fab>
          <Fab variant="extended" size="large" color="primary">
            <AddIcon sx={{
            mr: 1
          }} />
            Large
          </Fab>
        </Stack>
      </Box>
    </Stack>
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var D,M,V;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Semantic Colors
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Fab color="primary" aria-label="primary">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="secondary">
            <EditIcon />
          </Fab>
          <Fab color="success" aria-label="success">
            <AddIcon />
          </Fab>
          <Fab color="error" aria-label="error">
            <ReportProblemIcon />
          </Fab>
          <Fab color="warning" aria-label="warning">
            <WarningAmberIcon />
          </Fab>
          <Fab color="info" aria-label="info">
            <AddIcon />
          </Fab>
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Default (inherit)
        </Typography>
        <Fab aria-label="default">
          <AddIcon />
        </Fab>
      </Box>
    </Stack>
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,W,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Extended Variants',
  render: () => <Stack spacing={2}>
      <Fab variant="extended" color="primary">
        <NoteAddIcon sx={{
        mr: 1
      }} />
        New Incident
      </Fab>
      <Fab variant="extended" color="error">
        <ReportProblemIcon sx={{
        mr: 1
      }} />
        Report Near-Miss
      </Fab>
      <Fab variant="extended" color="success">
        <AssignmentIcon sx={{
        mr: 1
      }} />
        Create Observation
      </Fab>
    </Stack>
}`,...(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var _,O,$;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <Stack direction="row" spacing={2} alignItems="center">
      <Fab disabled color="primary" aria-label="disabled-circular">
        <AddIcon />
      </Fab>
      <Fab disabled variant="extended" color="primary">
        <AddIcon sx={{
        mr: 1
      }} />
        Disabled
      </Fab>
    </Stack>
}`,...($=(O=x.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var L,q,G;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Elevation States',
  render: () => <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Hover, press, and focus the FABs to see Raven elevation transitions.
        Default: shadows[6], Hover: shadows[12], Active: shadows[12], Disabled: none.
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box sx={{
        textAlign: 'center'
      }}>
          <Fab color="primary" aria-label="interactive">
            <AddIcon />
          </Fab>
          <Typography variant="caption" display="block" sx={{
          mt: 1
        }}>
            Interactive
          </Typography>
        </Box>
        <Box sx={{
        textAlign: 'center'
      }}>
          <Fab disabled aria-label="no-elevation">
            <AddIcon />
          </Fab>
          <Typography variant="caption" display="block" sx={{
          mt: 1
        }}>
            Disabled (no shadow)
          </Typography>
        </Box>
      </Stack>
    </Stack>
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Raven Product Patterns',
  render: () => <Box sx={{
    position: 'relative',
    height: 300,
    width: '100%',
    border: '1px dashed #E0E0E0',
    borderRadius: 2
  }}>
      <Typography variant="body2" sx={{
      p: 2
    }} color="text.secondary">
        Fixed-position FAB pattern — bottom-right corner for primary creation actions
      </Typography>
      <Fab color="primary" variant="extended" sx={{
      position: 'absolute',
      bottom: 24,
      right: 24
    }}>
        <NoteAddIcon sx={{
        mr: 1
      }} />
        New Incident
      </Fab>
      <Fab color="error" size="medium" sx={{
      position: 'absolute',
      bottom: 24,
      right: 220
    }} aria-label="report">
        <ReportProblemIcon />
      </Fab>
    </Box>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ua=["Basic","Sizes","Colors","ExtendedVariants","DisabledState","ElevationStates","RavenProductPatterns"];export{l as Basic,m as Colors,x as DisabledState,u as ElevationStates,b as ExtendedVariants,g as RavenProductPatterns,p as Sizes,Ua as __namedExportsOrder,Va as default};
