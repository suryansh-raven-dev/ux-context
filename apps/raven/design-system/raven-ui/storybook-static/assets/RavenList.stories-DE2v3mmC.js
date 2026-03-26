import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as A}from"./createSvgIcon-iJIBX0qc.js";import{L as v,a as ue}from"./List-CRi5rOFQ.js";import{r as a}from"./index-Dx_1l3Sb.js";import{g as Q,a as X,c as C,b as Z,s as j,m as ye}from"./memoTheme-ZM2DYSWk.js";import{i as k}from"./isHostComponent-DVu5iVWx.js";import{u as ee}from"./DefaultPropsProvider-Sd0H8ooC.js";import{i as ge}from"./isMuiElement-DBnxyDB2.js";import{u as Ie}from"./useForkRef-C3HHWd7T.js";import{l as xe,L as fe}from"./ListItemButton-pDLE1q7y.js";import{L as he}from"./ListItemIcon-DX8g0GNB.js";import{L as be}from"./ListItemText-BGGOQvdT.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useEnhancedEffect-CioLkZex.js";import"./ButtonBase-Bq0L8UA2.js";import"./TransitionGroupContext-CnK3OA_L.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./useEventCallback-CXnF2NLt.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-C_MKIDq8.js";import"./listItemTextClasses-B8l64lZu.js";import"./useSlot-Bl1_nPO2.js";import"./Typography-Dh7MeB_o.js";import"./index-4qhqXJuN.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function Le(t){return Q("MuiListItem",t)}X("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function ve(t){return Q("MuiListItemSecondaryAction",t)}X("MuiListItemSecondaryAction",["root","disableGutters"]);const Se=t=>{const{disableGutters:e,classes:s}=t;return Z({root:["root",e&&"disableGutters"]},ve,s)},Re=j("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),te=a.forwardRef(function(e,s){const r=ee({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...m}=r,p=a.useContext(v),i={...r,disableGutters:p.disableGutters},y=Se(i);return o.jsx(Re,{className:C(y.root,n),ownerState:i,ref:s,...m})});te.muiName="ListItemSecondaryAction";const Ce=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.hasSecondaryAction&&e.secondaryAction]},Ae=t=>{const{alignItems:e,classes:s,dense:r,disableGutters:n,disablePadding:m,divider:p,hasSecondaryAction:i}=t;return Z({root:["root",r&&"dense",!n&&"gutters",!m&&"padding",p&&"divider",e==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},Le,s)},je=j("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ce})(ye(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${xe.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),Ne=j("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Pe=a.forwardRef(function(e,s){const r=ee({props:e,name:"MuiListItem"}),{alignItems:n="center",children:m,className:p,component:i,components:y={},componentsProps:re={},ContainerComponent:N="li",ContainerProps:{className:ne,...ie}={},dense:P=!1,disableGutters:S=!1,disablePadding:ae=!1,divider:ce=!1,secondaryAction:M,slotProps:de={},slots:me={},...pe}=r,D=a.useContext(v),R=a.useMemo(()=>({dense:P||D.dense||!1,alignItems:n,disableGutters:S}),[n,D.dense,P,S]),le=a.useRef(null),c=a.Children.toArray(m),G=c.length&&ge(c[c.length-1],["ListItemSecondaryAction"]),g={...r,alignItems:n,dense:R.dense,disableGutters:S,disablePadding:ae,divider:ce,hasSecondaryAction:G},J=Ae(g),w=Ie(le,s),I=me.root||y.Root||je,l=de.root||re.root||{},u={className:C(J.root,l.className,p),...pe};let d=i||"li";return G?(d=!u.component&&!i?"div":d,N==="li"&&(d==="li"?d="div":u.component==="li"&&(u.component="div")),o.jsx(v.Provider,{value:R,children:o.jsxs(Ne,{as:N,className:C(J.container,ne),ref:w,ownerState:g,...ie,children:[o.jsx(I,{...l,...!k(I)&&{as:d,ownerState:{...g,...l.ownerState}},...u,children:c}),c.pop()]})})):o.jsx(v.Provider,{value:R,children:o.jsxs(I,{...l,as:d,ref:w,...!k(I)&&{ownerState:{...g,...l.ownerState}},...u,children:[c,M&&o.jsx(te,{children:M})]})})}),Me=A(o.jsx("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19z"}),"Inbox"),De=A(o.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"}),"Report"),Ge=A(o.jsx("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),se=({items:t,dense:e})=>o.jsx(ue,{className:"raven-list",dense:e,children:t.map(s=>o.jsx(Pe,{disablePadding:!0,children:o.jsxs(fe,{onClick:s.onClick,selected:s.selected,className:"raven-list__item-button",children:[s.icon&&o.jsx(he,{children:s.icon}),o.jsx(be,{primary:s.primary,secondary:s.secondary})]})},s.id))});se.__docgenInfo={description:"",methods:[],displayName:"RavenList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"RavenListItem"}],raw:"RavenListItem[]"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const at={title:"Data display/RavenList",component:se,tags:["autodocs"]},oe=[{id:"1",primary:"Near-miss report #1042"},{id:"2",primary:"Safety inspection checklist"},{id:"3",primary:"Corrective action plan"}],x={args:{items:oe}},f={args:{items:[{id:"1",primary:"Inbox",icon:o.jsx(Me,{})},{id:"2",primary:"Starred",icon:o.jsx(Ge,{})},{id:"3",primary:"Reports",icon:o.jsx(De,{})}]}},h={args:{items:[{id:"1",primary:"Near-miss #1042",secondary:"Reported by John Doe — Jan 15"},{id:"2",primary:"Near-miss #1043",secondary:"Reported by Jane Smith — Jan 16"},{id:"3",primary:"Near-miss #1044",secondary:"Reported by Alex Lee — Jan 17"}]}},b={args:{items:oe,dense:!0}},L={args:{items:[{id:"1",primary:"Dashboard"},{id:"2",primary:"Incidents",selected:!0},{id:"3",primary:"Settings"}]}};var T,_,H;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(H=(_=x.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var U,W,z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Inbox',
      icon: <InboxIcon />
    }, {
      id: '2',
      primary: 'Starred',
      icon: <StarIcon />
    }, {
      id: '3',
      primary: 'Reports',
      icon: <ReportIcon />
    }]
  }
}`,...(z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,E,F;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Near-miss #1042',
      secondary: 'Reported by John Doe — Jan 15'
    }, {
      id: '2',
      primary: 'Near-miss #1043',
      secondary: 'Reported by Jane Smith — Jan 16'
    }, {
      id: '3',
      primary: 'Near-miss #1044',
      secondary: 'Reported by Alex Lee — Jan 17'
    }]
  }
}`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,$,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    dense: true
  }
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var O,Y,K;L.parameters={...L.parameters,docs:{...(O=L.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      primary: 'Dashboard'
    }, {
      id: '2',
      primary: 'Incidents',
      selected: true
    }, {
      id: '3',
      primary: 'Settings'
    }]
  }
}`,...(K=(Y=L.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const ct=["Default","WithIcons","WithSecondaryText","Dense","WithSelectedItem"];export{x as Default,b as Dense,f as WithIcons,h as WithSecondaryText,L as WithSelectedItem,ct as __namedExportsOrder,at as default};
