import{r as y,j as e,R as C}from"./iframe-CXEw8YqF.js";import{C as M}from"./ContentCopyRounded-C688zs7O.js";import{D as S}from"./DeleteRounded-DamfGKnI.js";import{E as B}from"./EditRounded-Cr8yxqZj.js";import{M as z}from"./Menu-CXBB97T1.js";import{M as O}from"./MenuItem-6opGP_wo.js";import{L as k}from"./ListItemIcon-DVqAZlp7.js";import{L as A}from"./ListItemText-Cfh85Fkq.js";import{B as a}from"./Button-Dc-49q6L.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./memoTheme-CQZK3ANR.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./useForkRef-D-NHcfer.js";import"./useSlotProps-c9dXOIyd.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-SJt3C1w7.js";import"./useTheme-CpXYfoxd.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DRgOrKUJ.js";import"./utils-BygEin2U.js";import"./TransitionGroupContext-Bc261l7d.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";import"./getReactElementRef-CbqsfprK.js";import"./mergeSlotProps-Cv9QnIon.js";import"./Modal-ictgPmZL.js";import"./getScrollbarSize-CaCM53D3.js";import"./useEventCallback-Cb3cx0Sb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-n68pU-aO.js";import"./MenuList-D2ULDrWP.js";import"./List-CX0z1nbu.js";import"./ButtonBase-VzJ3_ui6.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-CN_GsrVk.js";import"./listItemTextClasses-Cfq3R5d6.js";import"./dividerClasses-DCRmppAS.js";import"./Typography-DAy4giaA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-DVqw_gkI.js";const x=({options:D,trigger:E,anchorOrigin:j})=>{const[n,l]=y.useState(null),I=!!n,R=t=>l(t.currentTarget),s=()=>l(null);return e.jsxs(e.Fragment,{children:[C.cloneElement(E,{onClick:R,"aria-haspopup":"true"}),e.jsx(z,{className:"raven-menu",anchorEl:n,open:I,onClose:s,anchorOrigin:j,children:D.map(t=>e.jsxs(O,{disabled:t.disabled,onClick:()=>{var m;(m=t.onClick)==null||m.call(t),s()},className:"raven-menu__item",children:[t.icon&&e.jsx(k,{children:t.icon}),e.jsx(A,{children:t.label})]},t.id))})]})};x.__docgenInfo={description:"",methods:[],displayName:"RavenMenu",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RavenMenuOption"}],raw:"RavenMenuOption[]"},description:""},trigger:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},anchorOrigin:{required:!1,tsType:{name:"signature",type:"object",raw:"{ vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }",signature:{properties:[{key:"vertical",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!0}},{key:"horizontal",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}},description:""}}};const Re={title:"Components/Navigation/Menu",component:x,tags:["autodocs"]},i={args:{trigger:e.jsx(a,{variant:"outlined",children:"Open Menu"}),options:[{id:"edit",label:"Edit"},{id:"duplicate",label:"Duplicate"},{id:"delete",label:"Delete"}]}},r={args:{trigger:e.jsx(a,{variant:"outlined",children:"Actions"}),options:[{id:"edit",label:"Edit",icon:e.jsx(B,{fontSize:"small"})},{id:"copy",label:"Duplicate",icon:e.jsx(M,{fontSize:"small"})},{id:"delete",label:"Delete",icon:e.jsx(S,{fontSize:"small"})}]}},o={args:{trigger:e.jsx(a,{variant:"outlined",children:"Options"}),options:[{id:"edit",label:"Edit"},{id:"archive",label:"Archive",disabled:!0},{id:"delete",label:"Delete"}]}};var p,d,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Open Menu</Button>,
    options: [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'duplicate',
      label: 'Duplicate'
    }, {
      id: 'delete',
      label: 'Delete'
    }]
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Actions</Button>,
    options: [{
      id: 'edit',
      label: 'Edit',
      icon: <EditIcon fontSize="small" />
    }, {
      id: 'copy',
      label: 'Duplicate',
      icon: <ContentCopyIcon fontSize="small" />
    }, {
      id: 'delete',
      label: 'Delete',
      icon: <DeleteIcon fontSize="small" />
    }]
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outlined">Options</Button>,
    options: [{
      id: 'edit',
      label: 'Edit'
    }, {
      id: 'archive',
      label: 'Archive',
      disabled: true
    }, {
      id: 'delete',
      label: 'Delete'
    }]
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const ye=["Default","WithIcons","WithDisabledItem"];export{i as Default,o as WithDisabledItem,r as WithIcons,ye as __namedExportsOrder,Re as default};
