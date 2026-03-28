import{r as R,b as ct,j as t,k as i,c as Bt,R as mt}from"./iframe-CXEw8YqF.js";import{A as gt}from"./ArrowDropDownRounded-D_OKpvkS.js";import{g as xt,b as ht,c as vt,a as bt,s as jt,m as yt}from"./memoTheme-CQZK3ANR.js";import{c as D}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{a as ft,b as Tt,B as r}from"./Button-Dc-49q6L.js";import{g as $t}from"./getValidReactChildren-D5DT3DNN.js";import{S as h}from"./Stack-nkLupI6a.js";import{B as u}from"./Box-ffj_WZAu.js";import{T as p}from"./Typography-DAy4giaA.js";import{P as Ct}from"./Popper-PvaMDO-Z.js";import{G as St}from"./Grow-DRgOrKUJ.js";import{P as Gt}from"./Paper-SJt3C1w7.js";import{C as wt}from"./ClickAwayListener-B_a0Faud.js";import{M as Rt}from"./MenuList-D2ULDrWP.js";import{M as kt}from"./MenuItem-6opGP_wo.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useForkRef-D-NHcfer.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DVqw_gkI.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-n68pU-aO.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";import"./getReactElementRef-CbqsfprK.js";import"./useSlotProps-c9dXOIyd.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useTheme-CpXYfoxd.js";import"./utils-BygEin2U.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CX0z1nbu.js";import"./listItemIconClasses-CN_GsrVk.js";import"./listItemTextClasses-Cfq3R5d6.js";import"./dividerClasses-DCRmppAS.js";function Ot(o){return xt("MuiButtonGroup",o)}const e=ht("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),Pt=(o,n)=>{const{ownerState:a}=o;return[{[`& .${e.grouped}`]:n.grouped},{[`& .${e.grouped}`]:n[`grouped${i(a.orientation)}`]},{[`& .${e.grouped}`]:n[`grouped${i(a.variant)}`]},{[`& .${e.grouped}`]:n[`grouped${i(a.variant)}${i(a.orientation)}`]},{[`& .${e.grouped}`]:n[`grouped${i(a.variant)}${i(a.color)}`]},{[`& .${e.firstButton}`]:n.firstButton},{[`& .${e.lastButton}`]:n.lastButton},{[`& .${e.middleButton}`]:n.middleButton},n.root,n[a.variant],a.disableElevation===!0&&n.disableElevation,a.fullWidth&&n.fullWidth,a.orientation==="vertical"&&n.vertical]},zt=o=>{const{classes:n,color:a,disabled:c,disableElevation:m,fullWidth:v,orientation:d,variant:l}=o,B={root:["root",l,d,v&&"fullWidth",m&&"disableElevation",`color${i(a)}`],grouped:["grouped",`grouped${i(d)}`,`grouped${i(l)}`,`grouped${i(l)}${i(d)}`,`grouped${i(l)}${i(a)}`,c&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return bt(B,Ot,n)},It=jt("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:Pt})(yt(({theme:o})=>({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(o.vars||o).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${e.lastButton},& .${e.middleButton}`]:{borderTopRightRadius:0,borderTopLeftRadius:0},[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${e.lastButton},& .${e.middleButton}`]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderRight:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${e.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}}}},{props:{variant:"text",orientation:"vertical"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottom:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${o.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${e.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}}}},...Object.entries(o.palette).filter(D()).flatMap(([n])=>[{props:{variant:"text",color:n},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderColor:o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:Bt(o.palette[n].main,.5)}}}]),{props:{variant:"outlined",orientation:"horizontal"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},[`& .${e.lastButton},& .${e.middleButton}`]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},[`& .${e.lastButton},& .${e.middleButton}`]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderRight:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${e.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}}}},{props:{variant:"contained",orientation:"vertical"},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottom:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${e.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}}}},...Object.entries(o.palette).filter(D(["dark"])).map(([n])=>({props:{variant:"contained",color:n},style:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderColor:(o.vars||o).palette[n].dark}}}))],[`& .${e.grouped}`]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}))),s=R.forwardRef(function(n,a){const c=ct({props:n,name:"MuiButtonGroup"}),{children:m,className:v,color:d="primary",component:l="div",disabled:B=!1,disableElevation:g=!1,disableFocusRipple:b=!1,disableRipple:k=!1,fullWidth:O=!1,orientation:st="horizontal",size:P="medium",variant:z="outlined",...dt}=c,I={...c,color:d,component:l,disabled:B,disableElevation:g,disableFocusRipple:b,disableRipple:k,fullWidth:O,orientation:st,size:P,variant:z},x=zt(I),lt=R.useMemo(()=>({className:x.grouped,color:d,disabled:B,disableElevation:g,disableFocusRipple:b,disableRipple:k,fullWidth:O,size:P,variant:z}),[d,B,g,b,k,O,P,z,x.grouped]),V=$t(m),ut=V.length,pt=y=>{const j=y===0,E=y===ut-1;return j&&E?"":j?x.firstButton:E?x.lastButton:x.middleButton};return t.jsx(It,{as:l,role:"group",className:vt(x.root,v),ref:a,ownerState:I,...dt,children:t.jsx(ft.Provider,{value:lt,children:V.map((y,j)=>t.jsx(Tt.Provider,{value:pt(j),children:y},j))})})}),it=({buttons:o,...n})=>t.jsx(s,{...n,children:o.map((a,c)=>t.jsx(r,{onClick:a.onClick,disabled:a.disabled,children:a.label},c))});it.__docgenInfo={description:"",methods:[],displayName:"RavenButtonGroup",props:{buttons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick?: () => void; disabled?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Array<{ label: string; onClick?: () => void; disabled?: boolean }>"},description:""}},composes:["Omit"]};const yo={title:"Components/Inputs/Button Group",component:it,parameters:{docs:{description:{component:"Raven-styled ButtonGroup component wrapping MUI v6 ButtonGroup. Uses the Near-Miss purple palette, pill radius (50px), and Raven border tokens. Groups related buttons together with consistent spacing and connected borders. Supports all three MUI variants (contained, outlined, text), three sizes, vertical orientation, and split-button patterns."}}}},f={name:"Basic Variants",render:()=>t.jsxs(h,{spacing:3,alignItems:"center",children:[t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Contained"}),t.jsxs(s,{variant:"contained",children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]}),t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Outlined"}),t.jsxs(s,{variant:"outlined",children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]}),t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Text"}),t.jsxs(s,{variant:"text",children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]})]})},T={name:"Sizes",render:()=>t.jsx(h,{spacing:3,alignItems:"center",children:["small","medium","large"].map(o=>t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:o}),t.jsxs(s,{variant:"contained",size:o,children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]},o))})},$={name:"Vertical Group",render:()=>t.jsx(h,{direction:"row",spacing:4,children:["contained","outlined","text"].map(o=>t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:o}),t.jsxs(s,{orientation:"vertical",variant:o,children:[t.jsx(r,{children:"Create"}),t.jsx(r,{children:"Edit"}),t.jsx(r,{children:"Delete"})]})]},o))})},C={name:"Colors",render:()=>t.jsx(h,{spacing:2,alignItems:"center",children:["primary","secondary","success","error","warning","info"].map(o=>t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:o}),t.jsxs(s,{variant:"contained",color:o,children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]},o))})},S={name:"Disabled",render:()=>t.jsxs(h,{spacing:3,alignItems:"center",children:[t.jsxs(s,{variant:"contained",disabled:!0,children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]}),t.jsxs(s,{variant:"outlined",disabled:!0,children:[t.jsx(r,{children:"One"}),t.jsx(r,{children:"Two"}),t.jsx(r,{children:"Three"})]})]})},M=["Create incident","Create near-miss","Create observation"];function Vt(){const[o,n]=R.useState(!1),[a,c]=R.useState(0),m=mt.useRef(null),v=(d,l)=>{c(l),n(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs(s,{variant:"contained",ref:m,children:[t.jsx(r,{children:M[a]}),t.jsx(r,{size:"small",onClick:()=>n(d=>!d),children:t.jsx(gt,{})})]}),t.jsx(Ct,{open:o,anchorEl:m.current,transition:!0,disablePortal:!0,children:({TransitionProps:d,placement:l})=>t.jsx(St,{...d,style:{transformOrigin:l==="bottom"?"center top":"center bottom"},children:t.jsx(Gt,{children:t.jsx(wt,{onClickAway:()=>n(!1),children:t.jsx(Rt,{children:M.map((B,g)=>t.jsx(kt,{selected:g===a,onClick:b=>v(b,g),children:B},B))})})})})})]})}const G={name:"Split Button",render:()=>t.jsxs(u,{sx:{minHeight:200},children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Split button with dropdown actions"}),t.jsx(Vt,{})]})},w={name:"Raven Product Patterns",render:()=>t.jsxs(h,{spacing:4,children:[t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Incident Status Actions"}),t.jsxs(s,{variant:"contained",children:[t.jsx(r,{children:"Draft"}),t.jsx(r,{children:"In Review"}),t.jsx(r,{children:"Approved"}),t.jsx(r,{children:"Closed"})]})]}),t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"View Toggle (outlined)"}),t.jsxs(s,{variant:"outlined",size:"small",children:[t.jsx(r,{children:"List"}),t.jsx(r,{children:"Grid"}),t.jsx(r,{children:"Timeline"})]})]}),t.jsxs(u,{children:[t.jsx(p,{variant:"subtitle2",gutterBottom:!0,children:"Export Options"}),t.jsxs(s,{variant:"outlined",children:[t.jsx(r,{children:"PDF"}),t.jsx(r,{children:"CSV"}),t.jsx(r,{children:"Excel"})]})]})]})};var A,L,W;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Basic Variants',
  render: () => <Stack spacing={3} alignItems="center">
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Contained
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Outlined
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text
        </Typography>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...(W=(L=f.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,F,H;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <Stack spacing={3} alignItems="center">
      {(['small', 'medium', 'large'] as const).map(size => <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <ButtonGroup variant="contained" size={size}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>)}
    </Stack>
}`,...(H=(F=T.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,_,q;$.parameters={...$.parameters,docs:{...(N=$.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Vertical Group',
  render: () => <Stack direction="row" spacing={4}>
      {(['contained', 'outlined', 'text'] as const).map(variant => <Box key={variant}>
          <Typography variant="subtitle2" gutterBottom>
            {variant}
          </Typography>
          <ButtonGroup orientation="vertical" variant={variant}>
            <Button>Create</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </Box>)}
    </Stack>
}`,...(q=(_=$.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <Stack spacing={2} alignItems="center">
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map(color => <Box key={color}>
            <Typography variant="subtitle2" gutterBottom>
              {color}
            </Typography>
            <ButtonGroup variant="contained" color={color}>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Box>)}
    </Stack>
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <Stack spacing={3} alignItems="center">
      <ButtonGroup variant="contained" disabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" disabled>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,ot,et;G.parameters={...G.parameters,docs:{...(tt=G.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Split Button',
  render: () => <Box sx={{
    minHeight: 200
  }}>
      <Typography variant="subtitle2" gutterBottom>
        Split button with dropdown actions
      </Typography>
      <SplitButtonDemo />
    </Box>
}`,...(et=(ot=G.parameters)==null?void 0:ot.docs)==null?void 0:et.source}}};var rt,nt,at;w.parameters={...w.parameters,docs:{...(rt=w.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'Raven Product Patterns',
  render: () => <Stack spacing={4}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Incident Status Actions
        </Typography>
        <ButtonGroup variant="contained">
          <Button>Draft</Button>
          <Button>In Review</Button>
          <Button>Approved</Button>
          <Button>Closed</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          View Toggle (outlined)
        </Typography>
        <ButtonGroup variant="outlined" size="small">
          <Button>List</Button>
          <Button>Grid</Button>
          <Button>Timeline</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Export Options
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>PDF</Button>
          <Button>CSV</Button>
          <Button>Excel</Button>
        </ButtonGroup>
      </Box>
    </Stack>
}`,...(at=(nt=w.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const fo=["BasicVariants","Sizes","VerticalGroup","Colors","Disabled","SplitButton","RavenProductPatterns"];export{f as BasicVariants,C as Colors,S as Disabled,w as RavenProductPatterns,T as Sizes,G as SplitButton,$ as VerticalGroup,fo as __namedExportsOrder,yo as default};
