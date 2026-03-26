import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-Dx_1l3Sb.js";import{g as D,a as P,c as V,b as q,s as z,m as G}from"./memoTheme-ZM2DYSWk.js";import{u as H,e as J}from"./DefaultPropsProvider-Sd0H8ooC.js";import{k as X,c as _}from"./emotion-react.browser.esm-CSzDDnfi.js";import{B as o}from"./Box-BpWUXKTb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";function L(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Q(t){return parseFloat(t)}function Y(t){return D("MuiSkeleton",t)}P("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Z=t=>{const{classes:a,variant:r,animation:n,hasChildren:i,width:m,height:l}=t;return q({root:["root",r,n,i&&"withChildren",i&&!m&&"fitContent",i&&!l&&"heightAuto"]},Y,a)},x=X`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,g=X`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,tt=typeof x!="string"?_`
        animation: ${x} 2s ease-in-out 0.5s infinite;
      `:null,et=typeof g!="string"?_`
        &::after {
          animation: ${g} 2s linear 0.5s infinite;
        }
      `:null,at=z("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(G(({theme:t})=>{const a=L(t.shape.borderRadius)||"px",r=Q(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:J(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:tt||{animation:`${x} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:et||{"&::after":{animation:`${g} 2s linear 0.5s infinite`}}}]}})),rt=W.forwardRef(function(a,r){const n=H({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:m,component:l="span",height:v,style:E,variant:F="text",width:K,...f}=n,w={...n,animation:i,component:l,variant:F,hasChildren:!!f.children},O=Z(w);return e.jsx(at,{as:l,ref:r,className:V(O.root,m),ownerState:w,...f,style:{width:K,height:v,...E}})}),s=({className:t,...a})=>e.jsx(rt,{className:`raven-skeleton ${t||""}`,...a});s.__docgenInfo={description:"",methods:[],displayName:"RavenSkeleton"};const mt={title:"Feedback/RavenSkeleton",component:s,tags:["autodocs"]},c={args:{variant:"text",width:210}},d={args:{variant:"rectangular",width:210,height:118}},h={args:{variant:"circular",width:48,height:48}},p={render:()=>e.jsxs(o,{sx:{width:300},children:[e.jsx(s,{variant:"rectangular",width:"100%",height:140}),e.jsxs(o,{sx:{pt:1},children:[e.jsx(s,{variant:"text",width:"80%"}),e.jsx(s,{variant:"text",width:"60%"})]}),e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:1,mt:1},children:[e.jsx(s,{variant:"circular",width:32,height:32}),e.jsx(s,{variant:"text",width:100})]})]})},u={render:()=>e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:2,p:1,width:"100%"},children:[e.jsx(s,{variant:"circular",width:40,height:40}),e.jsxs(o,{sx:{flex:1},children:[e.jsx(s,{variant:"text",width:"40%"}),e.jsx(s,{variant:"text",width:"70%"})]}),e.jsx(s,{variant:"rectangular",width:80,height:32,sx:{borderRadius:"50px"}})]})};var k,y,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 210
  }
}`,...(R=(y=c.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var S,b,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 210,
    height: 118
  }
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var j,B,$;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...($=(B=h.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var U,I,M;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300
  }}>
      <RavenSkeleton variant="rectangular" width="100%" height={140} />
      <Box sx={{
      pt: 1
    }}>
        <RavenSkeleton variant="text" width="80%" />
        <RavenSkeleton variant="text" width="60%" />
      </Box>
      <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mt: 1
    }}>
        <RavenSkeleton variant="circular" width={32} height={32} />
        <RavenSkeleton variant="text" width={100} />
      </Box>
    </Box>
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,A,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    p: 1,
    width: '100%'
  }}>
      <RavenSkeleton variant="circular" width={40} height={40} />
      <Box sx={{
      flex: 1
    }}>
        <RavenSkeleton variant="text" width="40%" />
        <RavenSkeleton variant="text" width="70%" />
      </Box>
      <RavenSkeleton variant="rectangular" width={80} height={32} sx={{
      borderRadius: '50px'
    }} />
    </Box>
}`,...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const xt=["Text","Rectangular","Circular","Card","TableRow"];export{p as Card,h as Circular,d as Rectangular,u as TableRow,c as Text,xt as __namedExportsOrder,mt as default};
