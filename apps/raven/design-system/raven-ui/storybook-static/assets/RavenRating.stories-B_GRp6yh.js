import{j as e,r as g,b as nt,o as $e,z as rt,k as De,K as it}from"./iframe-CXEw8YqF.js";import{F as lt}from"./FavoriteRounded-OrZyXb3A.js";import{F as ct,S as ut,a as dt,b as pt,c as mt}from"./SentimentVerySatisfiedRounded-y8ZLdo_Q.js";import{S as gt}from"./StarRounded-CRwZnbcf.js";import{c as me}from"./createSvgIcon-B15l7tE5.js";import{g as yt,b as vt,c as ae,a as ht,s as se,m as _e,e as xt}from"./memoTheme-CQZK3ANR.js";import{u as _}from"./useSlot-DGLNvGs3.js";import{u as ft}from"./useControlled-BuJew9Ci.js";import{u as St}from"./useForkRef-D-NHcfer.js";import{i as xe}from"./isFocusVisible-B8k4qzLc.js";import{v as bt}from"./visuallyHidden-Dan1xhjv.js";import{S}from"./Stack-nkLupI6a.js";import{B as c}from"./Box-ffj_WZAu.js";import{T as r}from"./Typography-DAy4giaA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveComponentProps-DPy2-98Z.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const Rt=me(e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),jt=me(e.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Bt(t){return yt("MuiRating",t)}const D=vt("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function Ft(t){const o=t.toString().split(".")[1];return o?o.length:0}function pe(t,o){if(t==null)return t;const s=Math.round(t/o)*o;return Number(s.toFixed(Ft(o)))}const Vt=t=>{const{classes:o,size:s,readOnly:d,disabled:h,emptyValueFocused:y,focusVisible:V}=t,b={root:["root",`size${De(s)}`,h&&"disabled",V&&"focusVisible",d&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return ht(b,Bt,o)},Tt=se("span",{name:"MuiRating",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[{[`& .${D.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${De(s.size)}`],s.readOnly&&o.readOnly]}})(_e(({theme:t})=>({display:"inline-flex",position:"relative",fontSize:t.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${D.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${D.focusVisible} .${D.iconActive}`]:{outline:"1px solid #999"},[`& .${D.visuallyHidden}`]:bt,variants:[{props:{size:"small"},style:{fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:t.typography.pxToRem(30)}},{props:({ownerState:o})=>o.readOnly,style:{pointerEvents:"none"}}]}))),Ue=se("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:t},o)=>[o.label,t.emptyValueFocused&&o.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:t})=>t.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),It=se("span",{name:"MuiRating",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.icon,s.iconEmpty&&o.iconEmpty,s.iconFilled&&o.iconFilled,s.iconHover&&o.iconHover,s.iconFocus&&o.iconFocus,s.iconActive&&o.iconActive]}})(_e(({theme:t})=>({display:"flex",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:o})=>o.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:o})=>o.iconEmpty,style:{color:(t.vars||t).palette.action.disabled}}]}))),Ct=se("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:t=>xt(t)&&t!=="iconActive",overridesResolver:(t,o)=>{const{iconActive:s}=t;return[o.decimal,s&&o.iconActive]}})({position:"relative",variants:[{props:({iconActive:t})=>t,style:{transform:"scale(1.2)"}}]});function Ht(t){const{value:o,...s}=t;return e.jsx("span",{...s})}function fe(t){const{classes:o,disabled:s,emptyIcon:d,focus:h,getLabelText:y,highlightSelectedOnly:V,hover:b,icon:U,IconContainerComponent:X,isActive:T,itemValue:m,labelProps:R,name:A,onBlur:I,onChange:ne,onClick:C,onFocus:H,readOnly:G,ownerState:O,ratingValue:u,ratingValueRounded:j,slots:re={},slotProps:ie={}}=t,B=V?m===u:m<=u,E=m<=b,Q=m<=h,L=m===j,W=`${A}-${$e()}`,N={slots:re,slotProps:ie},[k,le]=_("icon",{elementType:It,className:ae(o.icon,B?o.iconFilled:o.iconEmpty,E&&o.iconHover,Q&&o.iconFocus,T&&o.iconActive),externalForwardedProps:N,ownerState:{...O,iconEmpty:!B,iconFilled:B,iconHover:E,iconFocus:Q,iconActive:T},additionalProps:{value:m},internalForwardedProps:{as:X}}),[p,P]=_("label",{elementType:Ue,externalForwardedProps:N,ownerState:{...O,emptyValueFocused:void 0},additionalProps:{style:R==null?void 0:R.style,htmlFor:W}}),x=e.jsx(k,{...le,children:d&&!B?d:U});return G?e.jsx("span",{...R,children:x}):e.jsxs(g.Fragment,{children:[e.jsxs(p,{...P,children:[x,e.jsx("span",{className:o.visuallyHidden,children:y(m)})]}),e.jsx("input",{className:o.visuallyHidden,onFocus:H,onBlur:I,onChange:ne,onClick:C,disabled:s,value:m,id:W,type:"radio",name:A,checked:L})]})}const kt=e.jsx(Rt,{fontSize:"inherit"}),Pt=e.jsx(jt,{fontSize:"inherit"});function wt(t){return`${t||"0"} Star${t!==1?"s":""}`}const i=g.forwardRef(function(o,s){const d=nt({name:"MuiRating",props:o}),{component:h="span",className:y,defaultValue:V=null,disabled:b=!1,emptyIcon:U=Pt,emptyLabelText:X="Empty",getLabelText:T=wt,highlightSelectedOnly:m=!1,icon:R=kt,IconContainerComponent:A=Ht,max:I=5,name:ne,onChange:C,onChangeActive:H,onMouseLeave:G,onMouseMove:O,precision:u=1,readOnly:j=!1,size:re="medium",value:ie,slots:B={},slotProps:E={},...Q}=d,L=$e(ne),[W,N]=ft({controlled:ie,default:V,name:"Rating"}),k=pe(W,u),le=rt(),[{hover:p,focus:P},x]=g.useState({hover:-1,focus:-1});let w=k;p!==-1&&(w=p),P!==-1&&(w=P);const[Ge,ce]=g.useState(!1),ge=g.useRef(),Qe=St(ge,s),We=a=>{O&&O(a);const n=ge.current,{right:l,left:K,width:z}=n.getBoundingClientRect();let M;le?M=(l-a.clientX)/z:M=(a.clientX-K)/z;let v=pe(I*M+u/2,u);v=it(v,u,I),x(F=>F.hover===v&&F.focus===v?F:{hover:v,focus:v}),ce(!1),H&&p!==v&&H(a,v)},Ke=a=>{G&&G(a);const n=-1;x({hover:n,focus:n}),H&&p!==n&&H(a,n)},ye=a=>{let n=a.target.value===""?null:parseFloat(a.target.value);p!==-1&&(n=p),N(n),C&&C(a,n)},Ye=a=>{a.clientX===0&&a.clientY===0||(x({hover:-1,focus:-1}),N(null),C&&parseFloat(a.target.value)===k&&C(a,null))},qe=a=>{xe(a.target)&&ce(!0);const n=parseFloat(a.target.value);x(l=>({hover:l.hover,focus:n}))},Je=a=>{if(p!==-1)return;xe(a.target)||ce(!1);const n=-1;x(l=>({hover:l.hover,focus:n}))},[Ze,ve]=g.useState(!1),$={...d,component:h,defaultValue:V,disabled:b,emptyIcon:U,emptyLabelText:X,emptyValueFocused:Ze,focusVisible:Ge,getLabelText:T,icon:R,IconContainerComponent:A,max:I,precision:u,readOnly:j,size:re},f=Vt($),ue={slots:B,slotProps:E},[et,tt]=_("root",{ref:Qe,className:ae(f.root,y),elementType:Tt,externalForwardedProps:{...ue,...Q,component:h},getSlotProps:a=>({...a,onMouseMove:n=>{var l;We(n),(l=a.onMouseMove)==null||l.call(a,n)},onMouseLeave:n=>{var l;Ke(n),(l=a.onMouseLeave)==null||l.call(a,n)}}),ownerState:$,additionalProps:{role:j?"img":null,"aria-label":j?T(w):null}}),[ot,at]=_("label",{className:ae(f.label,f.labelEmptyValue),elementType:Ue,externalForwardedProps:ue,ownerState:$}),[st,he]=_("decimal",{className:f.decimal,elementType:Ct,externalForwardedProps:ue,ownerState:$});return e.jsxs(et,{...tt,children:[Array.from(new Array(I)).map((a,n)=>{const l=n+1,K={classes:f,disabled:b,emptyIcon:U,focus:P,getLabelText:T,highlightSelectedOnly:m,hover:p,icon:R,IconContainerComponent:A,name:L,onBlur:Je,onChange:ye,onClick:Ye,onFocus:qe,ratingValue:w,ratingValueRounded:k,readOnly:j,ownerState:$,slots:B,slotProps:E},z=l===Math.ceil(w)&&(p!==-1||P!==-1);if(u<1){const M=Array.from(new Array(1/u));return g.createElement(st,{...he,key:l,className:ae(he.className,z&&f.iconActive),iconActive:z},M.map((v,F)=>{const de=pe(l-1+(F+1)*u,u);return e.jsx(fe,{...K,isActive:!1,itemValue:de,labelProps:{style:M.length-1===F?{}:{width:de===w?`${(F+1)*u*100}%`:"0%",overflow:"hidden",position:"absolute"}}},de)}))}return e.jsx(fe,{...K,isActive:z,itemValue:l},l)}),!j&&!b&&e.jsxs(ot,{...at,children:[e.jsx("input",{className:f.visuallyHidden,value:"",id:`${L}-empty`,type:"radio",name:L,checked:k==null,onFocus:()=>ve(!0),onBlur:()=>ve(!1),onChange:ye}),e.jsx("span",{className:f.visuallyHidden,children:X})]})]})}),zt=me([e.jsx("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),e.jsx("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),e.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.41-6.11c-.35-.22-.82-.11-1.03.24-.74 1.17-2 1.87-3.38 1.87s-2.64-.7-3.38-1.88c-.22-.35-.68-.46-1.03-.24s-.46.68-.24 1.03C8.37 16.54 10.1 17.5 12 17.5s3.63-.97 4.65-2.58c.22-.35.11-.81-.24-1.03"},"2")],"SentimentSatisfiedAltRounded"),Xe=t=>e.jsx(i,{...t});Xe.__docgenInfo={description:"",methods:[],displayName:"RavenRating",composes:["RatingProps"]};const Mt={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},Zt={title:"Components/Inputs/Rating",component:Xe,parameters:{docs:{description:{component:"Raven-styled Rating component wrapping MUI v6 Rating. Uses the Near-Miss deep purple (#4A148C) for filled stars and purple-800 (#6A1B9A) for hover. Supports half-star precision, custom icons, sizes, read-only mode, hover feedback labels, and configurable max stars. Ideal for severity scoring, risk assessment, and feedback collection."}}}},Y={name:"Basic",render:()=>{const[t,o]=g.useState(3);return e.jsxs(S,{spacing:2,children:[e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Controlled"}),e.jsx(i,{value:t,onChange:(s,d)=>o(d)})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Read Only"}),e.jsx(i,{value:4,readOnly:!0})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Disabled"}),e.jsx(i,{value:2,disabled:!0})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"No Rating"}),e.jsx(i,{value:null})]})]})}},q={name:"Half Precision",render:()=>e.jsxs(S,{spacing:2,children:[e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Half-star precision (0.5)"}),e.jsx(i,{defaultValue:2.5,precision:.5})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Read-only half values"}),e.jsxs(S,{spacing:1,children:[e.jsx(i,{value:3.5,precision:.5,readOnly:!0}),e.jsx(i,{value:4.5,precision:.5,readOnly:!0}),e.jsx(i,{value:1.5,precision:.5,readOnly:!0})]})]})]})},J={name:"Sizes",render:()=>e.jsx(S,{spacing:2,children:["small","medium","large"].map(t=>e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:t}),e.jsx(i,{defaultValue:3,size:t})]},t))})},Z={name:"Hover Feedback",render:()=>{const[t,o]=g.useState(3),[s,d]=g.useState(-1);return e.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(i,{value:t,precision:.5,onChange:(h,y)=>o(y),onChangeActive:(h,y)=>d(y),emptyIcon:e.jsx(gt,{style:{opacity:.3},fontSize:"inherit"})}),t!==null&&e.jsx(r,{variant:"body2",children:Mt[s!==-1?s:t]})]})}},ee={name:"Custom Icons",render:()=>e.jsxs(S,{spacing:3,children:[e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Heart Icons"}),e.jsx(i,{defaultValue:3,icon:e.jsx(lt,{fontSize:"inherit"}),emptyIcon:e.jsx(ct,{fontSize:"inherit"}),sx:{"& .MuiRating-iconFilled":{color:"#F44336"},"& .MuiRating-iconHover":{color:"#D32F2F"}}})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"Sentiment Icons (10-star scale)"}),e.jsx(i,{defaultValue:3,max:5,IconContainerComponent:({value:t,...o})=>{const s={1:e.jsx(mt,{}),2:e.jsx(pt,{}),3:e.jsx(dt,{}),4:e.jsx(zt,{}),5:e.jsx(ut,{})};return e.jsx("span",{...o,children:s[t]})},highlightSelectedOnly:!0})]})]})},te={name:"Max Stars",render:()=>e.jsxs(S,{spacing:2,children:[e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"3-star scale"}),e.jsx(i,{defaultValue:2,max:3})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"subtitle2",gutterBottom:!0,children:"10-star scale"}),e.jsx(i,{defaultValue:7,max:10})]})]})},oe={name:"Raven Product Patterns",render:()=>e.jsxs(S,{spacing:4,children:[e.jsxs(c,{children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Severity Assessment"}),e.jsx(r,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:"Rate the severity of the near-miss incident (1 = negligible, 5 = critical)"}),e.jsx(i,{defaultValue:3,size:"large"})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Risk Likelihood"}),e.jsx(r,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:"How likely is recurrence? (half-star precision)"}),e.jsx(i,{defaultValue:2.5,precision:.5,size:"large"})]}),e.jsxs(c,{children:[e.jsx(r,{variant:"h6",gutterBottom:!0,children:"Investigation Quality Score (read-only summary)"}),e.jsxs(S,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(i,{value:4.5,precision:.5,readOnly:!0}),e.jsx(r,{variant:"body2",color:"text.secondary",children:"4.5 / 5 (32 reviews)"})]})]})]})};var Se,be,Re;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Basic',
  render: () => {
    const [value, setValue] = useState<number | null>(3);
    return <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Controlled
          </Typography>
          <Rating value={value} onChange={(_, newVal) => setValue(newVal)} />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Read Only
          </Typography>
          <Rating value={4} readOnly />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Disabled
          </Typography>
          <Rating value={2} disabled />
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            No Rating
          </Typography>
          <Rating value={null} />
        </Box>
      </Stack>;
  }
}`,...(Re=(be=Y.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var je,Be,Fe;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Half Precision',
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Half-star precision (0.5)
        </Typography>
        <Rating defaultValue={2.5} precision={0.5} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Read-only half values
        </Typography>
        <Stack spacing={1}>
          <Rating value={3.5} precision={0.5} readOnly />
          <Rating value={4.5} precision={0.5} readOnly />
          <Rating value={1.5} precision={0.5} readOnly />
        </Stack>
      </Box>
    </Stack>
}`,...(Fe=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Ve,Te,Ie;J.parameters={...J.parameters,docs:{...(Ve=J.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <Stack spacing={2}>
      {(['small', 'medium', 'large'] as const).map(size => <Box key={size}>
          <Typography variant="subtitle2" gutterBottom>
            {size}
          </Typography>
          <Rating defaultValue={3} size={size} />
        </Box>)}
    </Stack>
}`,...(Ie=(Te=J.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Ce,He,ke;Z.parameters={...Z.parameters,docs:{...(Ce=Z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Hover Feedback',
  render: () => {
    const [value, setValue] = useState<number | null>(3);
    const [hover, setHover] = useState(-1);
    return <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}>
        <Rating value={value} precision={0.5} onChange={(_, newVal) => setValue(newVal)} onChangeActive={(_, newHover) => setHover(newHover)} emptyIcon={<StarIcon style={{
        opacity: 0.3
      }} fontSize="inherit" />} />
        {value !== null && <Typography variant="body2">
            {labels[hover !== -1 ? hover : value]}
          </Typography>}
      </Box>;
  }
}`,...(ke=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var Pe,we,ze;ee.parameters={...ee.parameters,docs:{...(Pe=ee.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Custom Icons',
  render: () => <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Heart Icons
        </Typography>
        <Rating defaultValue={3} icon={<FavoriteIcon fontSize="inherit" />} emptyIcon={<FavoriteBorderIcon fontSize="inherit" />} sx={{
        '& .MuiRating-iconFilled': {
          color: '#F44336'
        },
        '& .MuiRating-iconHover': {
          color: '#D32F2F'
        }
      }} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Sentiment Icons (10-star scale)
        </Typography>
        <Rating defaultValue={3} max={5} IconContainerComponent={({
        value: v,
        ...rest
      }) => {
        const icons: Record<number, React.ReactElement> = {
          1: <SentimentVeryDissatisfiedIcon />,
          2: <SentimentDissatisfiedIcon />,
          3: <SentimentSatisfiedIcon />,
          4: <SentimentSatisfiedAltIcon />,
          5: <SentimentVerySatisfiedIcon />
        };
        return <span {...rest}>{icons[v!]}</span>;
      }} highlightSelectedOnly />
      </Box>
    </Stack>
}`,...(ze=(we=ee.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Me,Ae,Oe;te.parameters={...te.parameters,docs:{...(Me=te.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Max Stars',
  render: () => <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          3-star scale
        </Typography>
        <Rating defaultValue={2} max={3} />
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          10-star scale
        </Typography>
        <Rating defaultValue={7} max={10} />
      </Box>
    </Stack>
}`,...(Oe=(Ae=te.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ee,Le,Ne;oe.parameters={...oe.parameters,docs:{...(Ee=oe.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Raven Product Patterns',
  render: () => <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Severity Assessment
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Rate the severity of the near-miss incident (1 = negligible, 5 = critical)
        </Typography>
        <Rating defaultValue={3} size="large" />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Risk Likelihood
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          How likely is recurrence? (half-star precision)
        </Typography>
        <Rating defaultValue={2.5} precision={0.5} size="large" />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Investigation Quality Score (read-only summary)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            4.5 / 5 (32 reviews)
          </Typography>
        </Stack>
      </Box>
    </Stack>
}`,...(Ne=(Le=oe.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};const eo=["Basic","HalfPrecision","Sizes","HoverFeedback","CustomIcons","MaxStars","RavenProductPatterns"];export{Y as Basic,ee as CustomIcons,q as HalfPrecision,Z as HoverFeedback,te as MaxStars,oe as RavenProductPatterns,J as Sizes,eo as __namedExportsOrder,Zt as default};
