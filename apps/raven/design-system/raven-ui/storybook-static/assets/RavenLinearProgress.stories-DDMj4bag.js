import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{B as H}from"./Box-BpWUXKTb.js";import{r as J}from"./index-Dx_1l3Sb.js";import{g as Q,a as Y,c as Z,b as rr,s as y,m as h}from"./memoTheme-ZM2DYSWk.js";import{u as er}from"./index-BUMq8Awr.js";import{c}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as ar,f as t,x as tr,y as or}from"./DefaultPropsProvider-Sd0H8ooC.js";import{c as B,k as I}from"./emotion-react.browser.esm-CSzDDnfi.js";import{T as nr}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4qhqXJuN.js";function sr(e){return Q("MuiLinearProgress",e)}Y("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const L=4,x=I`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,ir=typeof x!="string"?B`
        animation: ${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,$=I`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,lr=typeof $!="string"?B`
        animation: ${$} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,k=I`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,cr=typeof k!="string"?B`
        animation: ${k} 3s infinite linear;
      `:null,pr=e=>{const{classes:r,variant:a,color:o}=e,C={root:["root",`color${t(o)}`,a],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar","bar1",`barColor${t(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",a!=="buffer"&&`barColor${t(o)}`,a==="buffer"&&`color${t(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return rr(C,sr,r)},j=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?tr(e.palette[r].main,.62):or(e.palette[r].main,.5),mr=y("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${t(a.color)}`],r[a.variant]]}})(h(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{backgroundColor:j(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),ur=y("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${t(a.color)}`]]}})(h(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(c()).map(([r])=>{const a=j(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),cr||{animation:`${k} 3s infinite linear`}),dr=y("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r.bar1,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(h(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${L}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${L}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:ir||{animation:`${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),fr=y("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r.bar2,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(h(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(c()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:j(e,r),transition:`transform .${L}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:lr||{animation:`${$} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),br=J.forwardRef(function(r,a){const o=ar({props:r,name:"MuiLinearProgress"}),{className:C,color:V="primary",value:P,valueBuffer:R,variant:i="indeterminate",...G}=o,l={...o,color:V,variant:i},p=pr(l),q=er(),m={},u={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&P!==void 0){m["aria-valuenow"]=Math.round(P),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let n=P-100;q&&(n=-n),u.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&R!==void 0){let n=(R||0)-100;q&&(n=-n),u.bar2.transform=`translateX(${n}%)`}return s.jsxs(mr,{className:Z(p.root,C),ownerState:l,role:"progressbar",...m,ref:a,...G,children:[i==="buffer"?s.jsx(ur,{className:p.dashed,ownerState:l}):null,s.jsx(dr,{className:p.bar1,ownerState:l,style:u.bar1}),i==="determinate"?null:s.jsx(fr,{className:p.bar2,ownerState:l,style:u.bar2})]})}),X=({showLabel:e,value:r,...a})=>s.jsxs(H,{className:"raven-linear-progress",children:[s.jsx(br,{value:r,...a}),e&&r!==void 0&&s.jsx(nr,{variant:"caption",className:"raven-linear-progress__label",children:`${Math.round(r)}%`})]});X.__docgenInfo={description:"",methods:[],displayName:"RavenLinearProgress",props:{showLabel:{required:!1,tsType:{name:"boolean"},description:""}},composes:["LinearProgressProps"]};const qr={title:"Feedback/RavenLinearProgress",component:X,tags:["autodocs"]},d={args:{variant:"determinate",value:50}},f={args:{variant:"indeterminate"}},b={args:{variant:"determinate",value:72,showLabel:!0}},g={args:{variant:"buffer",value:40,valueBuffer:60}},v={args:{variant:"determinate",value:100,showLabel:!0}};var w,N,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 50
  }
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var O,D,M;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'indeterminate'
  }
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var z,T,_;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 72,
    showLabel: true
  }
}`,...(_=(T=b.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var A,U,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'buffer',
    value: 40,
    valueBuffer: 60
  }
}`,...(F=(U=g.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var E,K,W;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 100,
    showLabel: true
  }
}`,...(W=(K=v.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};const wr=["Determinate","Indeterminate","WithLabel","Buffer","FullProgress"];export{g as Buffer,d as Determinate,v as FullProgress,f as Indeterminate,b as WithLabel,wr as __namedExportsOrder,qr as default};
