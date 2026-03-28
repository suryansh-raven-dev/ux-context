import{r as i,A as ze,b as he,j as t,k as W,c as h}from"./iframe-CXEw8YqF.js";import{F as q,a as H,b as Q,c as Le,d as Fe,e as ke,f as Oe,V as fe,L as Ae,P as Pe}from"./PhoneAndroidRounded-BnpZOsZ2.js";import{V as ye,a as je}from"./ViewModuleRounded-HhuX-yWK.js";import{c as Me}from"./createSvgIcon-B15l7tE5.js";import{g as be,b as Ce,c as Se,a as Re,s as $e,m as we}from"./memoTheme-CQZK3ANR.js";import{c as _e}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as We}from"./ButtonBase-VzJ3_ui6.js";import{S as D}from"./Stack-nkLupI6a.js";import{B as p}from"./Box-ffj_WZAu.js";import{T as v}from"./Typography-DAy4giaA.js";import{g as De}from"./getValidReactChildren-D5DT3DNN.js";import"./preload-helper-Dp1pzeXC.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useForkRef-D-NHcfer.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";function Ee(e){return be("MuiToggleButton",e)}const f=Ce("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),Ge=i.createContext({}),Ie=i.createContext(void 0);function Ne(e,o){return o===void 0||e===void 0?!1:Array.isArray(o)?o.includes(e):e===o}const Ue=e=>{const{classes:o,fullWidth:l,selected:n,disabled:d,size:c,color:y}=e,m={root:["root",n&&"selected",d&&"disabled",l&&"fullWidth",`size${W(c)}`,y]};return Re(m,Ee,o)},qe=$e(We,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[o.root,o[`size${W(l.size)}`]]}})(we(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${f.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:h(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${f.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.text.primary,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(e.palette.text.primary,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette.text.primary,e.palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(_e()).map(([o])=>({props:{color:o},style:{[`&.${f.selected}`]:{color:(e.vars||e).palette[o].main,backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette[o].main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:h(e.palette[o].main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:h(e.palette[o].main,e.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),r=i.forwardRef(function(o,l){const{value:n,...d}=i.useContext(Ge),c=i.useContext(Ie),y=ze({...d,selected:Ne(o.value,n)},o),m=he({props:y,name:"MuiToggleButton"}),{children:G,className:C,color:x="standard",disabled:I=!1,disableFocusRipple:j=!1,fullWidth:u=!1,onChange:S,onClick:R,selected:T,size:V="medium",value:b,...E}=m,$={...m,color:x,disabled:I,disableFocusRipple:j,fullWidth:u,size:V},N=Ue($),U=s=>{R&&(R(s,b),s.defaultPrevented)||S&&S(s,b)},g=c||"";return t.jsx(qe,{className:Se(d.className,N.root,C,g),disabled:I,focusRipple:!j,ref:l,onClick:U,onChange:S,value:b,ownerState:$,"aria-pressed":T,...E,children:G})});function He(e){return be("MuiToggleButtonGroup",e)}const a=Ce("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Qe=e=>{const{classes:o,orientation:l,fullWidth:n,disabled:d}=e,c={root:["root",l,n&&"fullWidth"],grouped:["grouped",`grouped${W(l)}`,d&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return Re(c,He,o)},Je=$e("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${a.grouped}`]:o.grouped},{[`& .${a.grouped}`]:o[`grouped${W(l.orientation)}`]},{[`& .${a.firstButton}`]:o.firstButton},{[`& .${a.lastButton}`]:o.lastButton},{[`& .${a.middleButton}`]:o.middleButton},o.root,l.orientation==="vertical"&&o.vertical,l.fullWidth&&o.fullWidth]}})(we(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${a.grouped}`]:{[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderTop:0,marginTop:0}},[`& .${a.firstButton},& .${a.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${a.lastButton},& .${a.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${a.lastButton}.${f.disabled},& .${a.middleButton}.${f.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${a.grouped}`]:{[`&.${a.selected} + .${a.grouped}.${a.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${a.firstButton},& .${a.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${a.lastButton},& .${a.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${a.lastButton}.${f.disabled},& .${a.middleButton}.${f.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),B=i.forwardRef(function(o,l){const n=he({props:o,name:"MuiToggleButtonGroup"}),{children:d,className:c,color:y="standard",disabled:m=!1,exclusive:G=!1,fullWidth:C=!1,onChange:x,orientation:I="horizontal",size:j="medium",value:u,...S}=n,R={...n,disabled:m,fullWidth:C,orientation:I,size:j},T=Qe(R),V=i.useCallback((g,s)=>{if(!x)return;const w=u&&u.indexOf(s);let z;u&&w>=0?(z=u.slice(),z.splice(w,1)):z=u?u.concat(s):[s],x(g,z)},[x,u]),b=i.useCallback((g,s)=>{x&&x(g,u===s?null:s)},[x,u]),E=i.useMemo(()=>({className:T.grouped,onChange:G?b:V,value:u,size:j,fullWidth:C,color:y,disabled:m}),[T.grouped,G,b,V,u,j,C,y,m]),$=De(d),N=$.length,U=g=>{const s=g===0,w=g===N-1;return s&&w?"":s?T.firstButton:w?T.lastButton:T.middleButton};return t.jsx(Je,{role:"group",className:Se(T.root,c),ref:l,ownerState:R,...S,children:t.jsx(Ge.Provider,{value:E,children:$.map((g,s)=>t.jsx(Ie.Provider,{value:U(s),children:g},s))})})}),Ke=Me(t.jsx("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"}),"TvRounded"),Ve=e=>t.jsx(r,{...e});Ve.__docgenInfo={description:"",methods:[],displayName:"RavenToggleButton",composes:["ToggleButtonProps"]};const pt={title:"Components/Inputs/Toggle Button",component:Ve,parameters:{docs:{description:{component:"Raven-styled ToggleButton / ToggleButtonGroup wrapping MUI v6. Uses pill radius (50px), Source Sans 3 typography, and no forced text transform. Supports exclusive (single-select) and multiple selection, three sizes, vertical orientation, and enforced value selection. Perfect for view toggles, filter states, and toolbar actions."}}}},L={name:"Exclusive Selection",render:()=>{const[e,o]=i.useState("left");return t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Text alignment (single select)"}),t.jsxs(B,{value:e,exclusive:!0,onChange:(l,n)=>o(n),children:[t.jsx(r,{value:"left",children:t.jsx(q,{})}),t.jsx(r,{value:"center",children:t.jsx(H,{})}),t.jsx(r,{value:"right",children:t.jsx(Q,{})}),t.jsx(r,{value:"justify",children:t.jsx(Le,{})})]})]})}},F={name:"Multiple Selection",render:()=>{const[e,o]=i.useState(["bold","italic"]);return t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Text formatting (multi-select)"}),t.jsxs(B,{value:e,onChange:(l,n)=>o(n),children:[t.jsx(r,{value:"bold",children:t.jsx(Fe,{})}),t.jsx(r,{value:"italic",children:t.jsx(ke,{})}),t.jsx(r,{value:"underlined",children:t.jsx(Oe,{})})]})]})}},k={name:"Sizes",render:()=>t.jsx(D,{spacing:3,children:["small","medium","large"].map(e=>t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:e}),t.jsxs(B,{value:"list",exclusive:!0,size:e,children:[t.jsx(r,{value:"list",children:t.jsx(ye,{})}),t.jsx(r,{value:"module",children:t.jsx(je,{})}),t.jsx(r,{value:"quilt",children:t.jsx(fe,{})})]})]},e))})},O={name:"Colors",render:()=>t.jsx(D,{spacing:3,children:["primary","secondary","success","error","warning","info","standard"].map(e=>t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:e}),t.jsxs(B,{value:"one",exclusive:!0,color:e,children:[t.jsx(r,{value:"one",children:"One"}),t.jsx(r,{value:"two",children:"Two"}),t.jsx(r,{value:"three",children:"Three"})]})]},e))})},A={name:"Vertical",render:()=>{const[e,o]=i.useState("list");return t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Vertical orientation"}),t.jsxs(B,{value:e,exclusive:!0,onChange:(l,n)=>n&&o(n),orientation:"vertical",children:[t.jsx(r,{value:"list",children:t.jsx(ye,{})}),t.jsx(r,{value:"module",children:t.jsx(je,{})}),t.jsx(r,{value:"quilt",children:t.jsx(fe,{})})]})]})}},P={name:"With Text Labels",render:()=>{const[e,o]=i.useState("laptop");return t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Device selection with text labels"}),t.jsxs(B,{value:e,exclusive:!0,onChange:(l,n)=>n&&o(n),children:[t.jsxs(r,{value:"laptop",children:[t.jsx(Ae,{sx:{mr:.5}})," Laptop"]}),t.jsxs(r,{value:"tv",children:[t.jsx(Ke,{sx:{mr:.5}})," TV"]}),t.jsxs(r,{value:"phone",children:[t.jsx(Pe,{sx:{mr:.5}})," Phone"]})]})]})}},M={name:"Disabled",render:()=>t.jsxs(D,{spacing:2,children:[t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Entire group disabled"}),t.jsxs(B,{value:"left",exclusive:!0,disabled:!0,children:[t.jsx(r,{value:"left",children:t.jsx(q,{})}),t.jsx(r,{value:"center",children:t.jsx(H,{})}),t.jsx(r,{value:"right",children:t.jsx(Q,{})})]})]}),t.jsxs(p,{children:[t.jsx(v,{variant:"subtitle2",gutterBottom:!0,children:"Single button disabled"}),t.jsxs(B,{value:"left",exclusive:!0,children:[t.jsx(r,{value:"left",children:t.jsx(q,{})}),t.jsx(r,{value:"center",disabled:!0,children:t.jsx(H,{})}),t.jsx(r,{value:"right",children:t.jsx(Q,{})})]})]})]})},_={name:"Raven Product Patterns",render:()=>{const[e,o]=i.useState("list"),[l,n]=i.useState(["open","review"]);return t.jsxs(D,{spacing:4,children:[t.jsxs(p,{children:[t.jsx(v,{variant:"h6",gutterBottom:!0,children:"Incident View Toggle"}),t.jsxs(B,{value:e,exclusive:!0,onChange:(d,c)=>c&&o(c),size:"small",children:[t.jsx(r,{value:"list",children:"List"}),t.jsx(r,{value:"grid",children:"Grid"}),t.jsx(r,{value:"timeline",children:"Timeline"})]})]}),t.jsxs(p,{children:[t.jsx(v,{variant:"h6",gutterBottom:!0,children:"Status Filter (multi-select)"}),t.jsxs(B,{value:l,onChange:(d,c)=>n(c),size:"small",color:"primary",children:[t.jsx(r,{value:"open",children:"Open"}),t.jsx(r,{value:"review",children:"In Review"}),t.jsx(r,{value:"approved",children:"Approved"}),t.jsx(r,{value:"closed",children:"Closed"})]})]})]})}};var J,K,X;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Exclusive Selection',
  render: () => {
    const [alignment, setAlignment] = useState<string | null>('left');
    return <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text alignment (single select)
        </Typography>
        <ToggleButtonGroup value={alignment} exclusive onChange={(_, val) => setAlignment(val)}>
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
          <ToggleButton value="justify"><FormatAlignJustifyIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>;
  }
}`,...(X=(K=L.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Multiple Selection',
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold', 'italic']);
    return <Box>
        <Typography variant="subtitle2" gutterBottom>
          Text formatting (multi-select)
        </Typography>
        <ToggleButtonGroup value={formats} onChange={(_, val) => setFormats(val)}>
          <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>;
  }
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <Stack spacing={3}>
      {(['small', 'medium', 'large'] as const).map(size => <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <ToggleButtonGroup value="list" exclusive size={size}>
            <ToggleButton value="list"><ViewListIcon /></ToggleButton>
            <ToggleButton value="module"><ViewModuleIcon /></ToggleButton>
            <ToggleButton value="quilt"><ViewQuiltIcon /></ToggleButton>
          </ToggleButtonGroup>
        </Box>)}
    </Stack>
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ae,le,ne;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <Stack spacing={3}>
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'standard'] as const).map(color => <Box key={color}>
            <Typography variant="subtitle2" gutterBottom>
              {color}
            </Typography>
            <ToggleButtonGroup value="one" exclusive color={color}>
              <ToggleButton value="one">One</ToggleButton>
              <ToggleButton value="two">Two</ToggleButton>
              <ToggleButton value="three">Three</ToggleButton>
            </ToggleButtonGroup>
          </Box>)}
    </Stack>
}`,...(ne=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ie,ue;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => {
    const [view, setView] = useState('list');
    return <Box>
        <Typography variant="subtitle2" gutterBottom>
          Vertical orientation
        </Typography>
        <ToggleButtonGroup value={view} exclusive onChange={(_, val) => val && setView(val)} orientation="vertical">
          <ToggleButton value="list"><ViewListIcon /></ToggleButton>
          <ToggleButton value="module"><ViewModuleIcon /></ToggleButton>
          <ToggleButton value="quilt"><ViewQuiltIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>;
  }
}`,...(ue=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,de,ge;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'With Text Labels',
  render: () => {
    const [device, setDevice] = useState('laptop');
    return <Box>
        <Typography variant="subtitle2" gutterBottom>
          Device selection with text labels
        </Typography>
        <ToggleButtonGroup value={device} exclusive onChange={(_, val) => val && setDevice(val)}>
          <ToggleButton value="laptop">
            <LaptopIcon sx={{
            mr: 0.5
          }} /> Laptop
          </ToggleButton>
          <ToggleButton value="tv">
            <TvIcon sx={{
            mr: 0.5
          }} /> TV
          </ToggleButton>
          <ToggleButton value="phone">
            <PhoneAndroidIcon sx={{
            mr: 0.5
          }} /> Phone
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>;
  }
}`,...(ge=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var pe,ve,Be;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Entire group disabled
        </Typography>
        <ToggleButtonGroup value="left" exclusive disabled>
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Single button disabled
        </Typography>
        <ToggleButtonGroup value="left" exclusive>
          <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
          <ToggleButton value="center" disabled><FormatAlignCenterIcon /></ToggleButton>
          <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Stack>
}`,...(Be=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var me,xe,Te;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Raven Product Patterns',
  render: () => {
    const [view, setView] = useState('list');
    const [status, setStatus] = useState<string[]>(['open', 'review']);
    return <Stack spacing={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Incident View Toggle
          </Typography>
          <ToggleButtonGroup value={view} exclusive onChange={(_, val) => val && setView(val)} size="small">
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="grid">Grid</ToggleButton>
            <ToggleButton value="timeline">Timeline</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Status Filter (multi-select)
          </Typography>
          <ToggleButtonGroup value={status} onChange={(_, val) => setStatus(val)} size="small" color="primary">
            <ToggleButton value="open">Open</ToggleButton>
            <ToggleButton value="review">In Review</ToggleButton>
            <ToggleButton value="approved">Approved</ToggleButton>
            <ToggleButton value="closed">Closed</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>;
  }
}`,...(Te=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};const vt=["ExclusiveSelection","MultipleSelection","Sizes","Colors","VerticalToggle","TextLabels","DisabledState","RavenProductPatterns"];export{O as Colors,M as DisabledState,L as ExclusiveSelection,F as MultipleSelection,_ as RavenProductPatterns,k as Sizes,P as TextLabels,A as VerticalToggle,vt as __namedExportsOrder,pt as default};
