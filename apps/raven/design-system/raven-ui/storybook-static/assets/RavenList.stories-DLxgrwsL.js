import{r as a,b as Q,j as o}from"./iframe-CXEw8YqF.js";import{I as le,R as ue}from"./ReportRounded-XL6LzHLw.js";import{S as ye}from"./StarRounded-CRwZnbcf.js";import{a as v,L as ge}from"./List-CX0z1nbu.js";import{g as V,b as X,c as C,a as Z,s as A,m as Ie}from"./memoTheme-CQZK3ANR.js";import{i as w}from"./isHostComponent-DVu5iVWx.js";import{i as xe}from"./isMuiElement-CREbmVQV.js";import{u as fe}from"./useForkRef-D-NHcfer.js";import{l as be,L as he}from"./ListItemButton-CQheRDeR.js";import{L as Se}from"./ListItemIcon-DVqAZlp7.js";import{L as ve}from"./ListItemText-Cfh85Fkq.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./ButtonBase-VzJ3_ui6.js";import"./TransitionGroupContext-Bc261l7d.js";import"./useEventCallback-Cb3cx0Sb.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-CN_GsrVk.js";import"./listItemTextClasses-Cfq3R5d6.js";import"./useSlot-DGLNvGs3.js";import"./resolveComponentProps-DPy2-98Z.js";import"./Typography-DAy4giaA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function Re(t){return V("MuiListItem",t)}X("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function Le(t){return V("MuiListItemSecondaryAction",t)}X("MuiListItemSecondaryAction",["root","disableGutters"]);const Ce=t=>{const{disableGutters:e,classes:s}=t;return Z({root:["root",e&&"disableGutters"]},Le,s)},Ae=A("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),ee=a.forwardRef(function(e,s){const r=Q({props:e,name:"MuiListItemSecondaryAction"}),{className:n,...m}=r,p=a.useContext(v),i={...r,disableGutters:p.disableGutters},y=Ce(i);return o.jsx(Ae,{className:C(y.root,n),ownerState:i,ref:s,...m})});ee.muiName="ListItemSecondaryAction";const Ne=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.hasSecondaryAction&&e.secondaryAction]},Pe=t=>{const{alignItems:e,classes:s,dense:r,disableGutters:n,disablePadding:m,divider:p,hasSecondaryAction:i}=t;return Z({root:["root",r&&"dense",!n&&"gutters",!m&&"padding",p&&"divider",e==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},Re,s)},je=A("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ne})(Ie(({theme:t})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${be.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]}))),De=A("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ge=a.forwardRef(function(e,s){const r=Q({props:e,name:"MuiListItem"}),{alignItems:n="center",children:m,className:p,component:i,components:y={},componentsProps:oe={},ContainerComponent:N="li",ContainerProps:{className:re,...ne}={},dense:P=!1,disableGutters:R=!1,disablePadding:ie=!1,divider:ae=!1,secondaryAction:j,slotProps:de={},slots:ce={},...me}=r,D=a.useContext(v),L=a.useMemo(()=>({dense:P||D.dense||!1,alignItems:n,disableGutters:R}),[n,D.dense,P,R]),pe=a.useRef(null),d=a.Children.toArray(m),G=d.length&&xe(d[d.length-1],["ListItemSecondaryAction"]),g={...r,alignItems:n,dense:L.dense,disableGutters:R,disablePadding:ie,divider:ae,hasSecondaryAction:G},M=Pe(g),J=fe(pe,s),I=ce.root||y.Root||je,l=de.root||oe.root||{},u={className:C(M.root,l.className,p),...me};let c=i||"li";return G?(c=!u.component&&!i?"div":c,N==="li"&&(c==="li"?c="div":u.component==="li"&&(u.component="div")),o.jsx(v.Provider,{value:L,children:o.jsxs(De,{as:N,className:C(M.container,re),ref:J,ownerState:g,...ne,children:[o.jsx(I,{...l,...!w(I)&&{as:c,ownerState:{...g,...l.ownerState}},...u,children:d}),d.pop()]})})):o.jsx(v.Provider,{value:L,children:o.jsxs(I,{...l,as:c,ref:J,...!w(I)&&{ownerState:{...g,...l.ownerState}},...u,children:[d,j&&o.jsx(ee,{children:j})]})})}),te=({items:t,dense:e})=>o.jsx(ge,{className:"raven-list",dense:e,children:t.map(s=>o.jsx(Ge,{disablePadding:!0,children:o.jsxs(he,{onClick:s.onClick,selected:s.selected,className:"raven-list__item-button",children:[s.icon&&o.jsx(Se,{children:s.icon}),o.jsx(ve,{primary:s.primary,secondary:s.secondary})]})},s.id))});te.__docgenInfo={description:"",methods:[],displayName:"RavenList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"RavenListItem"}],raw:"RavenListItem[]"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:""}}};const tt={title:"Components/Data Display/List",component:te,tags:["autodocs"]},se=[{id:"1",primary:"Near-miss report #1042"},{id:"2",primary:"Safety inspection checklist"},{id:"3",primary:"Corrective action plan"}],x={args:{items:se}},f={args:{items:[{id:"1",primary:"Inbox",icon:o.jsx(le,{})},{id:"2",primary:"Starred",icon:o.jsx(ye,{})},{id:"3",primary:"Reports",icon:o.jsx(ue,{})}]}},b={args:{items:[{id:"1",primary:"Near-miss #1042",secondary:"Reported by John Doe — Jan 15"},{id:"2",primary:"Near-miss #1043",secondary:"Reported by Jane Smith — Jan 16"},{id:"3",primary:"Near-miss #1044",secondary:"Reported by Alex Lee — Jan 17"}]}},h={args:{items:se,dense:!0}},S={args:{items:[{id:"1",primary:"Dashboard"},{id:"2",primary:"Incidents",selected:!0},{id:"3",primary:"Settings"}]}};var k,T,_;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(_=(T=x.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var U,W,B;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(W=f.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,F,$;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(F=b.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var q,z,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    dense: true
  }
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var O,Y,K;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const st=["Default","WithIcons","WithSecondaryText","Dense","WithSelectedItem"];export{x as Default,h as Dense,f as WithIcons,b as WithSecondaryText,S as WithSelectedItem,st as __namedExportsOrder,tt as default};
