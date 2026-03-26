import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-Dx_1l3Sb.js";import{c as f}from"./createSvgIcon-iJIBX0qc.js";import{B as x}from"./Box-BpWUXKTb.js";import{S as b}from"./Stack-DzJHroyU.js";import{T as S}from"./Typography-Dh7MeB_o.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const T=f(a.jsx("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList"),z=f(a.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule");function u({options:r,value:i,onChange:t}){const y=c.useCallback((e,o)=>{if(e.key==="ArrowRight"||e.key==="ArrowDown"){e.preventDefault();const l=Math.min(o+1,r.length-1);t(r[l].value)}else if(e.key==="ArrowLeft"||e.key==="ArrowUp"){e.preventDefault();const l=Math.max(o-1,0);t(r[l].value)}else e.key==="Home"?(e.preventDefault(),t(r[0].value)):e.key==="End"&&(e.preventDefault(),t(r[r.length-1].value))},[t,r]);return r.length===0?null:a.jsx(x,{className:"raven-view-toggle",role:"radiogroup","aria-label":"View mode",children:r.map((e,o)=>{const l=i===e.value,V=["raven-view-toggle__option",l?"raven-view-toggle__option--active":""].filter(Boolean).join(" ");return a.jsx("button",{type:"button",role:"radio","aria-checked":l,tabIndex:l?0:-1,className:V,onClick:()=>t(e.value),onKeyDown:h=>y(h,o),children:a.jsxs(b,{direction:"row",alignItems:"center",spacing:.75,component:"span",children:[e.icon?a.jsx("span",{className:"raven-view-toggle__icon","aria-hidden":!0,children:e.icon}):null,a.jsx(S,{component:"span",variant:"body2",className:"raven-view-toggle__label",sx:{color:"inherit"},children:e.label})]})},e.value)})})}u.__docgenInfo={description:"Segmented control for switching list/card (or similar) views.",methods:[],displayName:"ViewToggle",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; icon?: ReactNode; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; icon?: ReactNode; value: string }[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const O={title:"Navigation/ViewToggle",component:u},n={render:function(){const[i,t]=c.useState("list");return a.jsx(u,{options:[{label:"List",value:"list",icon:a.jsx(T,{fontSize:"small"})},{label:"Grid",value:"grid",icon:a.jsx(z,{fontSize:"small"})}],value:i,onChange:t})}},s={render:function(){const[i,t]=c.useState("a");return a.jsx(u,{options:[{label:"Summary",value:"a"},{label:"Details",value:"b"}],value:i,onChange:t})}};var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,v,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const G=["Default","TextOnly"];export{n as Default,s as TextOnly,G as __namedExportsOrder,O as default};
