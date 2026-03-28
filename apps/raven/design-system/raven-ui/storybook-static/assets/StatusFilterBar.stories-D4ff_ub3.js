import{r as m,j as s}from"./iframe-CXEw8YqF.js";import{B as f}from"./Box-ffj_WZAu.js";import{T as x}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function l({filters:n,activeIndex:i,onChange:t}){const d=m.useCallback((e,r)=>{if(e.key==="ArrowRight"||e.key==="ArrowDown"){e.preventDefault();const a=Math.min(r+1,n.length-1);t(a)}else if(e.key==="ArrowLeft"||e.key==="ArrowUp"){e.preventDefault();const a=Math.max(r-1,0);t(a)}else e.key==="Home"?(e.preventDefault(),t(0)):e.key==="End"&&(e.preventDefault(),t(n.length-1))},[n.length,t]);return s.jsx(f,{className:"raven-status-filter",role:"radiogroup","aria-label":"Filter by status",children:n.map((e,r)=>{const a=i===r,b=["raven-status-filter__chip",a?"raven-status-filter__chip--active":""].filter(Boolean).join(" ");return s.jsx("button",{type:"button",role:"radio","aria-checked":a,tabIndex:a?0:-1,className:b,onClick:()=>t(r),onKeyDown:y=>d(y,r),children:s.jsxs(x,{component:"span",variant:"body2",className:"raven-status-filter__chip-label",sx:{color:"inherit"},children:[e.label," ",s.jsxs("span",{className:"raven-status-filter__chip-count",children:["(",e.count,")"]})]})},`${e.label}-${r}`)})})}l.__docgenInfo={description:"Pill-style status filters with radiogroup semantics.",methods:[],displayName:"StatusFilterBar",props:{filters:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; count: number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"count",value:{name:"number",required:!0}}]}}],raw:"{ label: string; count: number }[]"},description:""},activeIndex:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const S={title:"Navigation/Status Filter Bar",component:l},o={render:function(){const[i,t]=m.useState(0);return s.jsx(l,{filters:[{label:"All",count:48},{label:"Open",count:12},{label:"In review",count:7},{label:"Closed",count:29}],activeIndex:i,onChange:t})}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,S as default};
