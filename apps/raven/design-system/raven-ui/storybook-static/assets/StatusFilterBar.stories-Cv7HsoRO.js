import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-Dx_1l3Sb.js";import{B as y}from"./Box-BpWUXKTb.js";import{T as x}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./memoTheme-ZM2DYSWk.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function l({filters:n,activeIndex:i,onChange:t}){const d=m.useCallback((e,r)=>{if(e.key==="ArrowRight"||e.key==="ArrowDown"){e.preventDefault();const a=Math.min(r+1,n.length-1);t(a)}else if(e.key==="ArrowLeft"||e.key==="ArrowUp"){e.preventDefault();const a=Math.max(r-1,0);t(a)}else e.key==="Home"?(e.preventDefault(),t(0)):e.key==="End"&&(e.preventDefault(),t(n.length-1))},[n.length,t]);return s.jsx(y,{className:"raven-status-filter",role:"radiogroup","aria-label":"Filter by status",children:n.map((e,r)=>{const a=i===r,b=["raven-status-filter__chip",a?"raven-status-filter__chip--active":""].filter(Boolean).join(" ");return s.jsx("button",{type:"button",role:"radio","aria-checked":a,tabIndex:a?0:-1,className:b,onClick:()=>t(r),onKeyDown:f=>d(f,r),children:s.jsxs(x,{component:"span",variant:"body2",className:"raven-status-filter__chip-label",sx:{color:"inherit"},children:[e.label," ",s.jsxs("span",{className:"raven-status-filter__chip-count",children:["(",e.count,")"]})]})},`${e.label}-${r}`)})})}l.__docgenInfo={description:"Pill-style status filters with radiogroup semantics.",methods:[],displayName:"StatusFilterBar",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; count: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}}]}}],raw:"{ label: string; count: number }[]"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const N={title:"Navigation/StatusFilterBar",component:l},o={render:function(){const[i,t]=m.useState(0);return s.jsx(l,{filters:[{label:"All",count:48},{label:"Open",count:12},{label:"In review",count:7},{label:"Closed",count:29}],activeIndex:i,onChange:t})}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: function StatusFilterBarStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    return <StatusFilterBar filters={[{
      label: 'All',
      count: 48
    }, {
      label: 'Open',
      count: 12
    }, {
      label: 'In review',
      count: 7
    }, {
      label: 'Closed',
      count: 29
    }]} activeIndex={activeIndex} onChange={setActiveIndex} />;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Default"];export{o as Default,q as __namedExportsOrder,N as default};
