import{j as e}from"./iframe-CXEw8YqF.js";import{D}from"./Divider-5kMQhmTu.js";import{T as r}from"./Typography-DAy4giaA.js";import{B as b}from"./Box-ffj_WZAu.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./dividerClasses-DCRmppAS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const n=({label:j,className:T,...f})=>e.jsx(D,{className:`raven-divider ${T||""}`.trim(),...f,children:j});n.__docgenInfo={description:"",methods:[],displayName:"RavenDivider",props:{label:{required:!1,tsType:{name:"string"},description:""}},composes:["DividerProps"]};const _={title:"Components/Data Display/Divider",component:n,tags:["autodocs"]},o={render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Content above"}),e.jsx(n,{}),e.jsx(r,{children:"Content below"})]})},a={render:()=>e.jsxs(b,{display:"flex",alignItems:"center",gap:2,height:40,children:[e.jsx(r,{children:"Left"}),e.jsx(n,{orientation:"vertical",flexItem:!0}),e.jsx(r,{children:"Right"})]})},t={render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Section A"}),e.jsx(n,{label:"OR"}),e.jsx(r,{children:"Section B"})]})},i={render:()=>e.jsxs("div",{children:[e.jsx(r,{children:"Full-width content above"}),e.jsx(n,{variant:"inset"}),e.jsx(r,{children:"Full-width content below"})]})};var s,p,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div>
      <Typography>Content above</Typography>
      <RavenDivider />
      <Typography>Content below</Typography>
    </div>
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Box display="flex" alignItems="center" gap={2} height={40}>
      <Typography>Left</Typography>
      <RavenDivider orientation="vertical" flexItem />
      <Typography>Right</Typography>
    </Box>
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var m,y,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <Typography>Section A</Typography>
      <RavenDivider label="OR" />
      <Typography>Section B</Typography>
    </div>
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var g,x,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div>
      <Typography>Full-width content above</Typography>
      <RavenDivider variant="inset" />
      <Typography>Full-width content below</Typography>
    </div>
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const O=["Default","Vertical","WithLabel","Inset"];export{o as Default,i as Inset,a as Vertical,t as WithLabel,O as __namedExportsOrder,_ as default};
