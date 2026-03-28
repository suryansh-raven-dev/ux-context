import{r as c,j as t}from"./iframe-CXEw8YqF.js";import{V as x,a as V}from"./ViewModuleRounded-HhuX-yWK.js";import{B as S}from"./Box-ffj_WZAu.js";import{S as T}from"./Stack-nkLupI6a.js";import{T as h}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function u({options:a,value:n,onChange:r}){const f=c.useCallback((e,i)=>{if(e.key==="ArrowRight"||e.key==="ArrowDown"){e.preventDefault();const l=Math.min(i+1,a.length-1);r(a[l].value)}else if(e.key==="ArrowLeft"||e.key==="ArrowUp"){e.preventDefault();const l=Math.max(i-1,0);r(a[l].value)}else e.key==="Home"?(e.preventDefault(),r(a[0].value)):e.key==="End"&&(e.preventDefault(),r(a[a.length-1].value))},[r,a]);return a.length===0?null:t.jsx(S,{className:"raven-view-toggle",role:"radiogroup","aria-label":"View mode",children:a.map((e,i)=>{const l=n===e.value,y=["raven-view-toggle__option",l?"raven-view-toggle__option--active":""].filter(Boolean).join(" ");return t.jsx("button",{type:"button",role:"radio","aria-checked":l,tabIndex:l?0:-1,className:y,onClick:()=>r(e.value),onKeyDown:b=>f(b,i),children:t.jsxs(T,{direction:"row",alignItems:"center",spacing:.75,component:"span",children:[e.icon?t.jsx("span",{className:"raven-view-toggle__icon","aria-hidden":!0,children:e.icon}):null,t.jsx(h,{component:"span",variant:"body2",className:"raven-view-toggle__label",sx:{color:"inherit"},children:e.label})]})},e.value)})})}u.__docgenInfo={description:"Segmented control for switching list/card (or similar) views.",methods:[],displayName:"ViewToggle",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; icon?: ReactNode; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; icon?: ReactNode; value: string }[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const z={title:"Navigation/View Toggle",component:u},o={render:function(){const[n,r]=c.useState("list");return t.jsx(u,{options:[{label:"List",value:"list",icon:t.jsx(x,{fontSize:"small"})},{label:"Grid",value:"grid",icon:t.jsx(V,{fontSize:"small"})}],value:n,onChange:r})}},s={render:function(){const[n,r]=c.useState("a");return t.jsx(u,{options:[{label:"Summary",value:"a"},{label:"Details",value:"b"}],value:n,onChange:r})}};var m,g,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function ViewToggleStory() {
    const [value, setValue] = useState('list');
    return <ViewToggle options={[{
      label: 'List',
      value: 'list',
      icon: <ViewList fontSize="small" />
    }, {
      label: 'Grid',
      value: 'grid',
      icon: <ViewModule fontSize="small" />
    }]} value={value} onChange={setValue} />;
  }
}`,...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,v,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function ViewToggleTextStory() {
    const [value, setValue] = useState('a');
    return <ViewToggle options={[{
      label: 'Summary',
      value: 'a'
    }, {
      label: 'Details',
      value: 'b'
    }]} value={value} onChange={setValue} />;
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const E=["Default","TextOnly"];export{o as Default,s as TextOnly,E as __namedExportsOrder,z as default};
