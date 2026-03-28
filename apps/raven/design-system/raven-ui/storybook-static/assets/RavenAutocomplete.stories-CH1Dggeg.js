import{o as ua,r as d,b as oa,j as o,k as It,c as Ft}from"./iframe-CXEw8YqF.js";import{C as ma,a as ga}from"./CheckBoxRounded-DyfpLAzx.js";import{u as Dt}from"./useControlled-BuJew9Ci.js";import{u as ha}from"./usePreviousProps-CKw9I2yT.js";import{u as st}from"./useEventCallback-Cb3cx0Sb.js";import{s as fa}from"./Portal-n68pU-aO.js";import{g as aa,b as na,c as At,a as sa,s as U,m as Ae}from"./memoTheme-CQZK3ANR.js";import{A as ba,f as ke,o as Ut,i as $t}from"./Select-YC9I_7cS.js";import{i as Te}from"./InputBase-C320U_6j.js";import{C as va}from"./Close-bbTIZ8Ox.js";import{u as Vt}from"./useSlot-DGLNvGs3.js";import{P as ra}from"./Paper-SJt3C1w7.js";import{P as la}from"./Popper-PvaMDO-Z.js";import{C as Ht}from"./Chip-TCpK2l-H.js";import{I as ia}from"./IconButton-B6fFVoV9.js";import{T as ya}from"./TextField-BlnEFttr.js";import{C as xa}from"./CircularProgress-DVqw_gkI.js";import{T as Ie}from"./Typography-DAy4giaA.js";import{C as Ca}from"./Checkbox-4A8DsxXt.js";import{S as Sa}from"./Stack-nkLupI6a.js";import{B as Oa}from"./Box-ffj_WZAu.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B15l7tE5.js";import"./index-C6O5uVVA.js";import"./index-Dj4WRxPt.js";import"./useForkRef-D-NHcfer.js";import"./getReactElementRef-CbqsfprK.js";import"./Menu-CXBB97T1.js";import"./useSlotProps-c9dXOIyd.js";import"./resolveComponentProps-DPy2-98Z.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-DRgOrKUJ.js";import"./useTheme-CpXYfoxd.js";import"./utils-BygEin2U.js";import"./TransitionGroupContext-Bc261l7d.js";import"./mergeSlotProps-Cv9QnIon.js";import"./Modal-ictgPmZL.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./MenuList-D2ULDrWP.js";import"./List-CX0z1nbu.js";import"./utils-iop7lDec.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBc1P3Dj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-VzJ3_ui6.js";import"./isFocusVisible-B8k4qzLc.js";import"./FormLabel-fZDvreNm.js";import"./isMuiElement-CREbmVQV.js";import"./SwitchBase-BvtNKSch.js";function Gt(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function Bt(e={}){const{ignoreAccents:n=!0,ignoreCase:r=!0,limit:l,matchFrom:y="any",stringify:f,trim:C=!1}=e;return(P,{inputValue:L,getOptionLabel:R})=>{let O=C?L.trim():L;r&&(O=O.toLowerCase()),n&&(O=Gt(O));const E=O?P.filter(B=>{let w=(f||R)(B);return r&&(w=w.toLowerCase()),n&&(w=Gt(w)),y==="start"?w.startsWith(O):w.includes(O)}):P;return typeof l=="number"?E.slice(0,l):E}}const Ta=Bt(),Wt=5,Aa=e=>{var n;return e.current!==null&&((n=e.current.parentElement)==null?void 0:n.contains(document.activeElement))},Ia=[];function Kt(e,n,r){if(n||e==null)return"";const l=r(e);return typeof l=="string"?l:""}function Pa(e){const{unstable_isActiveElementInListbox:n=Aa,unstable_classNamePrefix:r="Mui",autoComplete:l=!1,autoHighlight:y=!1,autoSelect:f=!1,blurOnSelect:C=!1,clearOnBlur:P=!e.freeSolo,clearOnEscape:L=!1,componentName:R="useAutocomplete",defaultValue:O=e.multiple?Ia:null,disableClearable:E=!1,disableCloseOnSelect:B=!1,disabled:w,disabledItemsFocusable:oe=!1,disableListWrap:le=!1,filterOptions:ue=Ta,filterSelectedOptions:ie=!1,freeSolo:Y=!1,getOptionDisabled:N,getOptionKey:me,getOptionLabel:Me=a=>a.label??a,groupBy:ae,handleHomeEndKeys:Ee=!e.freeSolo,id:Ge,includeInputInList:ge=!1,inputValue:Pe,isOptionEqualToValue:ne=(a,t)=>a===t,multiple:b=!1,onChange:Fe,onClose:De,onHighlightChange:Re,onInputChange:Q,onOpen:Ne,open:We,openOnFocus:Ke=!1,options:Je,readOnly:pe=!1,selectOnFocus:he=!e.freeSolo,value:fe}=e,F=ua(Ge);let T=Me;T=a=>{const t=Me(a);return typeof t!="string"?String(t):t};const X=d.useRef(!1),be=d.useRef(!0),A=d.useRef(null),D=d.useRef(null),[ve,Ye]=d.useState(null),[$,we]=d.useState(-1),Qe=y?0:-1,k=d.useRef(Qe),_e=d.useRef(Kt(O??fe,b,T)).current,[i,$e]=Dt({controlled:fe,default:O,name:R}),[h,_]=Dt({controlled:Pe,default:_e,name:R,state:"inputValue"}),[H,se]=d.useState(!1),G=d.useCallback((a,t,s)=>{if(!(b?i.length<t.length:t!==null)&&!P)return;const u=Kt(t,b,T);h!==u&&(_(u),Q&&Q(a,u,s))},[T,h,b,Q,_,P,i]),[V,ye]=Dt({controlled:We,default:!1,name:R,state:"open"}),[Ve,je]=d.useState(!0),Xe=!b&&i!=null&&h===T(i),q=V&&!pe,S=q?ue(Je.filter(a=>!(ie&&(b?i:[i]).some(t=>t!==null&&ne(a,t)))),{inputValue:Xe&&Ve?"":h,getOptionLabel:T}):[],W=ha({filteredOptions:S,value:i,inputValue:h});d.useEffect(()=>{const a=i!==W.value;H&&!a||Y&&!a||G(null,i,"reset")},[i,G,H,W.value,Y]);const Ze=V&&S.length>0&&!pe,xe=st(a=>{a===-1?A.current.focus():ve.querySelector(`[data-tag-index="${a}"]`).focus()});d.useEffect(()=>{b&&$>i.length-1&&(we(-1),xe(-1))},[i,b,$,xe]);function Pt(a,t){if(!D.current||a<0||a>=S.length)return-1;let s=a;for(;;){const p=D.current.querySelector(`[data-option-index="${s}"]`),u=oe?!1:!p||p.disabled||p.getAttribute("aria-disabled")==="true";if(p&&p.hasAttribute("tabindex")&&!u)return s;if(t==="next"?s=(s+1)%S.length:s=(s-1+S.length)%S.length,s===a)return-1}}const re=st(({event:a,index:t,reason:s})=>{if(k.current=t,t===-1?A.current.removeAttribute("aria-activedescendant"):A.current.setAttribute("aria-activedescendant",`${F}-option-${t}`),Re&&["mouse","keyboard","touch"].includes(s)&&Re(a,t===-1?null:S[t],s),!D.current)return;const p=D.current.querySelector(`[role="option"].${r}-focused`);p&&(p.classList.remove(`${r}-focused`),p.classList.remove(`${r}-focusVisible`));let u=D.current;if(D.current.getAttribute("role")!=="listbox"&&(u=D.current.parentElement.querySelector('[role="listbox"]')),!u)return;if(t===-1){u.scrollTop=0;return}const x=D.current.querySelector(`[data-option-index="${t}"]`);if(x&&(x.classList.add(`${r}-focused`),s==="keyboard"&&x.classList.add(`${r}-focusVisible`),u.scrollHeight>u.clientHeight&&s!=="mouse"&&s!=="touch")){const I=x,z=u.clientHeight+u.scrollTop,Et=I.offsetTop+I.offsetHeight;Et>z?u.scrollTop=Et-u.clientHeight:I.offsetTop-I.offsetHeight*(ae?1.3:0)<u.scrollTop&&(u.scrollTop=I.offsetTop-I.offsetHeight*(ae?1.3:0))}}),K=st(({event:a,diff:t,direction:s="next",reason:p})=>{if(!q)return;const x=Pt((()=>{const I=S.length-1;if(t==="reset")return Qe;if(t==="start")return 0;if(t==="end")return I;const z=k.current+t;return z<0?z===-1&&ge?-1:le&&k.current!==-1||Math.abs(t)>1?0:I:z>I?z===I+1&&ge?-1:le||Math.abs(t)>1?I:0:z})(),s);if(re({index:x,reason:p,event:a}),l&&t!=="reset")if(x===-1)A.current.value=h;else{const I=T(S[x]);A.current.value=I,I.toLowerCase().indexOf(h.toLowerCase())===0&&h.length>0&&A.current.setSelectionRange(h.length,I.length)}}),Rt=()=>{const a=(t,s)=>{const p=t?T(t):"",u=s?T(s):"";return p===u};if(k.current!==-1&&W.filteredOptions&&W.filteredOptions.length!==S.length&&W.inputValue===h&&(b?i.length===W.value.length&&W.value.every((t,s)=>T(i[s])===T(t)):a(W.value,i))){const t=W.filteredOptions[k.current];if(t)return S.findIndex(s=>T(s)===T(t))}return-1},qe=d.useCallback(()=>{if(!q)return;const a=Rt();if(a!==-1){k.current=a;return}const t=b?i[0]:i;if(S.length===0||t==null){K({diff:"reset"});return}if(D.current){if(t!=null){const s=S[k.current];if(b&&s&&i.findIndex(u=>ne(s,u))!==-1)return;const p=S.findIndex(u=>ne(u,t));p===-1?K({diff:"reset"}):re({index:p});return}if(k.current>=S.length-1){re({index:S.length-1});return}re({index:k.current})}},[S.length,b?!1:i,ie,K,re,q,h,b]),Nt=st(a=>{fa(D,a),a&&qe()});d.useEffect(()=>{qe()},[qe]);const J=a=>{V||(ye(!0),je(!0),Ne&&Ne(a))},Ce=(a,t)=>{V&&(ye(!1),De&&De(a,t))},ce=(a,t,s,p)=>{if(b){if(i.length===t.length&&i.every((u,x)=>u===t[x]))return}else if(i===t)return;Fe&&Fe(a,t,s,p),$e(t)},Le=d.useRef(!1),Z=(a,t,s="selectOption",p="options")=>{let u=s,x=t;if(b){x=Array.isArray(i)?i.slice():[];const I=x.findIndex(z=>ne(t,z));I===-1?x.push(t):p!=="freeSolo"&&(x.splice(I,1),u="removeOption")}G(a,x,u),ce(a,x,u,{option:t}),!B&&(!a||!a.ctrlKey&&!a.metaKey)&&Ce(a,u),(C===!0||C==="touch"&&Le.current||C==="mouse"&&!Le.current)&&A.current.blur()};function et(a,t){if(a===-1)return-1;let s=a;for(;;){if(t==="next"&&s===i.length||t==="previous"&&s===-1)return-1;const p=ve.querySelector(`[data-tag-index="${s}"]`);if(!p||!p.hasAttribute("tabindex")||p.disabled||p.getAttribute("aria-disabled")==="true")s+=t==="next"?1:-1;else return s}}const tt=(a,t)=>{if(!b)return;h===""&&Ce(a,"toggleInput");let s=$;$===-1?h===""&&t==="previous"&&(s=i.length-1):(s+=t==="next"?1:-1,s<0&&(s=0),s===i.length&&(s=-1)),s=et(s,t),we(s),xe(s)},Se=a=>{X.current=!0,_(""),Q&&Q(a,"","clear"),ce(a,b?[]:null,"clear")},wt=a=>t=>{if(a.onKeyDown&&a.onKeyDown(t),!t.defaultMuiPrevented&&($!==-1&&!["ArrowLeft","ArrowRight"].includes(t.key)&&(we(-1),xe(-1)),t.which!==229))switch(t.key){case"Home":q&&Ee&&(t.preventDefault(),K({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":q&&Ee&&(t.preventDefault(),K({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),K({diff:-Wt,direction:"previous",reason:"keyboard",event:t}),J(t);break;case"PageDown":t.preventDefault(),K({diff:Wt,direction:"next",reason:"keyboard",event:t}),J(t);break;case"ArrowDown":t.preventDefault(),K({diff:1,direction:"next",reason:"keyboard",event:t}),J(t);break;case"ArrowUp":t.preventDefault(),K({diff:-1,direction:"previous",reason:"keyboard",event:t}),J(t);break;case"ArrowLeft":tt(t,"previous");break;case"ArrowRight":tt(t,"next");break;case"Enter":if(k.current!==-1&&q){const s=S[k.current],p=N?N(s):!1;if(t.preventDefault(),p)return;Z(t,s,"selectOption"),l&&A.current.setSelectionRange(A.current.value.length,A.current.value.length)}else Y&&h!==""&&Xe===!1&&(b&&t.preventDefault(),Z(t,h,"createOption","freeSolo"));break;case"Escape":q?(t.preventDefault(),t.stopPropagation(),Ce(t,"escape")):L&&(h!==""||b&&i.length>0)&&(t.preventDefault(),t.stopPropagation(),Se(t));break;case"Backspace":if(b&&!pe&&h===""&&i.length>0){const s=$===-1?i.length-1:$,p=i.slice();p.splice(s,1),ce(t,p,"removeOption",{option:i[s]})}break;case"Delete":if(b&&!pe&&h===""&&i.length>0&&$!==-1){const s=$,p=i.slice();p.splice(s,1),ce(t,p,"removeOption",{option:i[s]})}break}},_t=a=>{se(!0),Ke&&!X.current&&J(a)},Oe=a=>{if(n(D)){A.current.focus();return}se(!1),be.current=!0,X.current=!1,f&&k.current!==-1&&q?Z(a,S[k.current],"blur"):f&&Y&&h!==""?Z(a,h,"blur","freeSolo"):P&&G(a,i,"blur"),Ce(a,"blur")},He=a=>{const t=a.target.value;h!==t&&(_(t),je(!1),Q&&Q(a,t,"input")),t===""?!E&&!b&&ce(a,null,"clear"):J(a)},Be=a=>{const t=Number(a.currentTarget.getAttribute("data-option-index"));k.current!==t&&re({event:a,index:t,reason:"mouse"})},jt=a=>{re({event:a,index:Number(a.currentTarget.getAttribute("data-option-index")),reason:"touch"}),Le.current=!0},Lt=a=>{const t=Number(a.currentTarget.getAttribute("data-option-index"));Z(a,S[t],"selectOption"),Le.current=!1},kt=a=>t=>{const s=i.slice();s.splice(a,1),ce(t,s,"removeOption",{option:i[a]})},Mt=a=>{V?Ce(a,"toggleInput"):J(a)},ze=a=>{a.currentTarget.contains(a.target)&&a.target.getAttribute("id")!==F&&a.preventDefault()},M=a=>{a.currentTarget.contains(a.target)&&(A.current.focus(),he&&be.current&&A.current.selectionEnd-A.current.selectionStart===0&&A.current.select(),be.current=!1)},j=a=>{!w&&(h===""||!V)&&Mt(a)};let ee=Y&&h.length>0;ee=ee||(b?i.length>0:i!==null);let ot=S;return ae&&(ot=S.reduce((a,t,s)=>{const p=ae(t);return a.length>0&&a[a.length-1].group===p?a[a.length-1].options.push(t):a.push({key:s,index:s,group:p,options:[t]}),a},[])),w&&H&&Oe(),{getRootProps:(a={})=>({...a,onKeyDown:wt(a),onMouseDown:ze,onClick:M}),getInputLabelProps:()=>({id:`${F}-label`,htmlFor:F}),getInputProps:()=>({id:F,value:h,onBlur:Oe,onFocus:_t,onChange:He,onMouseDown:j,"aria-activedescendant":q?"":null,"aria-autocomplete":l?"both":"list","aria-controls":Ze?`${F}-listbox`:void 0,"aria-expanded":Ze,autoComplete:"off",ref:A,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:w}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:Se}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:Mt}),getTagProps:({index:a})=>({key:a,"data-tag-index":a,tabIndex:-1,...!pe&&{onDelete:kt(a)}}),getListboxProps:()=>({role:"listbox",id:`${F}-listbox`,"aria-labelledby":`${F}-label`,ref:Nt,onMouseDown:a=>{a.preventDefault()}}),getOptionProps:({index:a,option:t})=>{const s=(b?i:[i]).some(u=>u!=null&&ne(t,u)),p=N?N(t):!1;return{key:(me==null?void 0:me(t))??T(t),tabIndex:-1,role:"option",id:`${F}-option-${a}`,onMouseMove:Be,onClick:Lt,onTouchStart:jt,"data-option-index":a,"aria-disabled":p,"aria-selected":s}},id:F,inputValue:h,value:i,dirty:ee,expanded:q&&ve,popupOpen:q,focused:H||$!==-1,anchorEl:ve,setAnchorEl:Ye,focusedTag:$,groupedOptions:ot}}function Ra(e){return aa("MuiListSubheader",e)}na("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const Na=e=>{const{classes:n,color:r,disableGutters:l,inset:y,disableSticky:f}=e,C={root:["root",r!=="default"&&`color${It(r)}`,!l&&"gutters",y&&"inset",!f&&"sticky"]};return sa(C,Ra,n)},wa=U("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.color!=="default"&&n[`color${It(r.color)}`],!r.disableGutters&&n.gutters,r.inset&&n.inset,!r.disableSticky&&n.sticky]}})(Ae(({theme:e})=>({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14),variants:[{props:{color:"primary"},style:{color:(e.vars||e).palette.primary.main}},{props:{color:"inherit"},style:{color:"inherit"}},{props:({ownerState:n})=>!n.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:n})=>n.inset,style:{paddingLeft:72}},{props:({ownerState:n})=>!n.disableSticky,style:{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper}}]}))),qt=d.forwardRef(function(n,r){const l=oa({props:n,name:"MuiListSubheader"}),{className:y,color:f="default",component:C="li",disableGutters:P=!1,disableSticky:L=!1,inset:R=!1,...O}=l,E={...l,color:f,component:C,disableGutters:P,disableSticky:L,inset:R},B=Na(E);return o.jsx(wa,{as:C,className:At(B.root,y),ref:r,ownerState:E,...O})});qt&&(qt.muiSkipListHighlight=!0);function _a(e){return aa("MuiAutocomplete",e)}const c=na("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]);var Jt,Yt;const ja=e=>{const{classes:n,disablePortal:r,expanded:l,focused:y,fullWidth:f,hasClearIcon:C,hasPopupIcon:P,inputFocused:L,popupOpen:R,size:O}=e,E={root:["root",l&&"expanded",y&&"focused",f&&"fullWidth",C&&"hasClearIcon",P&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",L&&"inputFocused"],tag:["tag",`tagSize${It(O)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",R&&"popupIndicatorOpen"],popper:["popper",r&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return sa(E,_a,n)},La=U("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e,{fullWidth:l,hasClearIcon:y,hasPopupIcon:f,inputFocused:C,size:P}=r;return[{[`& .${c.tag}`]:n.tag},{[`& .${c.tag}`]:n[`tagSize${It(P)}`]},{[`& .${c.inputRoot}`]:n.inputRoot},{[`& .${c.input}`]:n.input},{[`& .${c.input}`]:C&&n.inputFocused},n.root,l&&n.fullWidth,f&&n.hasPopupIcon,y&&n.hasClearIcon]}})({[`&.${c.focused} .${c.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${c.clearIndicator}`]:{visibility:"visible"}},[`& .${c.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${c.inputRoot}`]:{[`.${c.hasPopupIcon}&, .${c.hasClearIcon}&`]:{paddingRight:30},[`.${c.hasPopupIcon}.${c.hasClearIcon}&`]:{paddingRight:56},[`& .${c.input}`]:{width:0,minWidth:30}},[`& .${$t.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${$t.root}.${Te.sizeSmall}`]:{[`& .${$t.input}`]:{padding:"2px 4px 3px 0"}},[`& .${Ut.root}`]:{padding:9,[`.${c.hasPopupIcon}&, .${c.hasClearIcon}&`]:{paddingRight:39},[`.${c.hasPopupIcon}.${c.hasClearIcon}&`]:{paddingRight:65},[`& .${c.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${c.endAdornment}`]:{right:9}},[`& .${Ut.root}.${Te.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${c.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${ke.root}`]:{paddingTop:19,paddingLeft:8,[`.${c.hasPopupIcon}&, .${c.hasClearIcon}&`]:{paddingRight:39},[`.${c.hasPopupIcon}.${c.hasClearIcon}&`]:{paddingRight:65},[`& .${ke.input}`]:{padding:"7px 4px"},[`& .${c.endAdornment}`]:{right:9}},[`& .${ke.root}.${Te.sizeSmall}`]:{paddingBottom:1,[`& .${ke.input}`]:{padding:"2.5px 4px"}},[`& .${Te.hiddenLabel}`]:{paddingTop:8},[`& .${ke.root}.${Te.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${c.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${ke.root}.${Te.hiddenLabel}.${Te.sizeSmall}`]:{[`& .${c.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${c.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${c.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${c.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${c.inputRoot}`]:{flexWrap:"wrap"}}}]}),ka=U("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,n)=>n.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),Ma=U(ia,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,n)=>n.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Ea=U(ia,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.popupIndicator,r.popupOpen&&n.popupIndicatorOpen]}})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),Fa=U(la,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[{[`& .${c.option}`]:n.option},n.popper,r.disablePortal&&n.popperDisablePortal]}})(Ae(({theme:e})=>({zIndex:(e.vars||e).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]}))),Da=U(ra,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,n)=>n.paper})(Ae(({theme:e})=>({...e.typography.body1,overflow:"auto"}))),$a=U("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,n)=>n.loading})(Ae(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),Va=U("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,n)=>n.noOptions})(Ae(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"}))),qa=U("ul",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,n)=>n.listbox})(Ae(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${c.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${c.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${c.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Ft(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${c.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Ft(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Ft(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}}))),Ha=U(qt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,n)=>n.groupLabel})(Ae(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8}))),Ba=U("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,n)=>n.groupUl})({padding:0,[`& .${c.option}`]:{paddingLeft:24}}),za=d.forwardRef(function(n,r){const l=oa({props:n,name:"MuiAutocomplete"}),{autoComplete:y=!1,autoHighlight:f=!1,autoSelect:C=!1,blurOnSelect:P=!1,ChipProps:L,className:R,clearIcon:O=Jt||(Jt=o.jsx(va,{fontSize:"small"})),clearOnBlur:E=!l.freeSolo,clearOnEscape:B=!1,clearText:w="Clear",closeText:oe="Close",componentsProps:le,defaultValue:ue=l.multiple?[]:null,disableClearable:ie=!1,disableCloseOnSelect:Y=!1,disabled:N=!1,disabledItemsFocusable:me=!1,disableListWrap:Me=!1,disablePortal:ae=!1,filterOptions:Ee,filterSelectedOptions:Ge=!1,forcePopupIcon:ge="auto",freeSolo:Pe=!1,fullWidth:ne=!1,getLimitTagsText:b=g=>`+${g}`,getOptionDisabled:Fe,getOptionKey:De,getOptionLabel:Re,isOptionEqualToValue:Q,groupBy:Ne,handleHomeEndKeys:We=!l.freeSolo,id:Ke,includeInputInList:Je=!1,inputValue:pe,limitTags:he=-1,ListboxComponent:fe,ListboxProps:F,loading:T=!1,loadingText:X="Loading…",multiple:be=!1,noOptionsText:A="No options",onChange:D,onClose:ve,onHighlightChange:Ye,onInputChange:$,onOpen:we,open:Qe,openOnFocus:k=!1,openText:_e="Open",options:i,PaperComponent:$e,PopperComponent:h,popupIcon:_=Yt||(Yt=o.jsx(ba,{})),readOnly:H=!1,renderGroup:se,renderInput:G,renderOption:V,renderTags:ye,selectOnFocus:Ve=!l.freeSolo,size:je="medium",slots:Xe={},slotProps:q={},value:S,...W}=l,{getRootProps:Ze,getInputProps:xe,getInputLabelProps:Pt,getPopupIndicatorProps:re,getClearProps:K,getTagProps:Rt,getListboxProps:qe,getOptionProps:Nt,value:J,dirty:Ce,expanded:ce,id:Le,popupOpen:Z,focused:et,focusedTag:tt,anchorEl:Se,setAnchorEl:wt,inputValue:_t,groupedOptions:Oe}=Pa({...l,componentName:"Autocomplete"}),He=!ie&&!N&&Ce&&!H,Be=(!Pe||ge===!0)&&ge!==!1,{onMouseDown:jt}=xe(),{ref:Lt,...kt}=qe(),ze=Re||(g=>g.label??g),M={...l,disablePortal:ae,expanded:ce,focused:et,fullWidth:ne,getOptionLabel:ze,hasClearIcon:He,hasPopupIcon:Be,inputFocused:tt===-1,popupOpen:Z,size:je},j=ja(M),ee={slots:{paper:$e,popper:h,...Xe},slotProps:{chip:L,listbox:F,...le,...q}},[ot,a]=Vt("listbox",{elementType:qa,externalForwardedProps:ee,ownerState:M,className:j.listbox,additionalProps:kt,ref:Lt}),[t,s]=Vt("paper",{elementType:ra,externalForwardedProps:ee,ownerState:M,className:j.paper}),[p,u]=Vt("popper",{elementType:la,externalForwardedProps:ee,ownerState:M,className:j.popper,additionalProps:{disablePortal:ae,style:{width:Se?Se.clientWidth:null},role:"presentation",anchorEl:Se,open:Z}});let x;if(be&&J.length>0){const g=te=>({className:j.tag,disabled:N,...Rt(te)});ye?x=ye(J,g,M):x=J.map((te,de)=>{const{key:Ue,...da}=g({index:de});return o.jsx(Ht,{label:ze(te),size:je,...da,...ee.slotProps.chip},Ue)})}if(he>-1&&Array.isArray(x)){const g=x.length-he;!et&&g>0&&(x=x.splice(0,he),x.push(o.jsx("span",{className:j.tag,children:b(g)},x.length)))}const z=se||(g=>o.jsxs("li",{children:[o.jsx(Ha,{className:j.groupLabel,ownerState:M,component:"div",children:g.group}),o.jsx(Ba,{className:j.groupUl,ownerState:M,children:g.children})]},g.key)),ca=V||((g,te)=>{const{key:de,...Ue}=g;return o.jsx("li",{...Ue,children:ze(te)},de)}),zt=(g,te)=>{const de=Nt({option:g,index:te});return ca({...de,className:j.option},g,{selected:de["aria-selected"],index:te,inputValue:_t},M)},at=ee.slotProps.clearIndicator,nt=ee.slotProps.popupIndicator;return o.jsxs(d.Fragment,{children:[o.jsx(La,{ref:r,className:At(j.root,R),ownerState:M,...Ze(W),children:G({id:Le,disabled:N,fullWidth:!0,size:je==="small"?"small":void 0,InputLabelProps:Pt(),InputProps:{ref:wt,className:j.inputRoot,startAdornment:x,onMouseDown:g=>{g.target===g.currentTarget&&jt(g)},...(He||Be)&&{endAdornment:o.jsxs(ka,{className:j.endAdornment,ownerState:M,children:[He?o.jsx(Ma,{...K(),"aria-label":w,title:w,ownerState:M,...at,className:At(j.clearIndicator,at==null?void 0:at.className),children:O}):null,Be?o.jsx(Ea,{...re(),disabled:N,"aria-label":Z?oe:_e,title:Z?oe:_e,ownerState:M,...nt,className:At(j.popupIndicator,nt==null?void 0:nt.className),children:_}):null]})}},inputProps:{className:j.input,disabled:N,readOnly:H,...xe()}})}),Se?o.jsx(Fa,{as:p,...u,children:o.jsxs(Da,{as:t,...s,children:[T&&Oe.length===0?o.jsx($a,{className:j.loading,ownerState:M,children:X}):null,Oe.length===0&&!Pe&&!T?o.jsx(Va,{className:j.noOptions,ownerState:M,role:"presentation",onMouseDown:g=>{g.preventDefault()},children:A}):null,Oe.length>0?o.jsx(ot,{as:fe,...a,children:Oe.map((g,te)=>Ne?z({key:g.key,group:g.group,children:g.options.map((de,Ue)=>zt(de,g.index+Ue))}):zt(g,te))}):null]})}):null]})}),Ua=o.jsx(ga,{fontSize:"small"}),Ga=o.jsx(ma,{fontSize:"small"});function v({options:e,label:n,placeholder:r,helperText:l,error:y,value:f,inputValue:C,onChange:P,onInputChange:L,getOptionLabel:R,getOptionDisabled:O,isOptionEqualToValue:E,groupBy:B,filterOptions:w,renderOption:oe,renderGroup:le,renderTags:ue,renderInput:ie,disabled:Y,readOnly:N,loading:me,loadingText:Me="Loading…",noOptionsText:ae="No options",multiple:Ee,freeSolo:Ge,disableClearable:ge,disableCloseOnSelect:Pe,disablePortal:ne,clearOnBlur:b,clearOnEscape:Fe,selectOnFocus:De,handleHomeEndKeys:Re,autoComplete:Q,autoHighlight:Ne,autoSelect:We,includeInputInList:Ke,openOnFocus:Je,blurOnSelect:pe,limitTags:he,size:fe="medium",fullWidth:F=!0,checkboxSelection:T,creatable:X,creatableLabel:be="Add",id:A,className:D,sx:ve,open:Ye,onOpen:$,onClose:we}){const k=["raven-autocomplete",fe==="small"?"raven-autocomplete--small":"",D].filter(Boolean).join(" "),_e=_=>o.jsx(ya,{..._,label:n,placeholder:r,helperText:l,error:y,slotProps:{input:{..._.InputProps,endAdornment:o.jsxs(o.Fragment,{children:[me?o.jsx(xa,{color:"inherit",size:20}):null,_.InputProps.endAdornment]})}}}),i=T?(_,H,{selected:se})=>{const{key:G,...V}=_;return o.jsxs("li",{...V,children:[o.jsx(Ca,{icon:Ua,checkedIcon:Ga,checked:se,className:"raven-autocomplete__checkbox"}),R?R(H):String(H)]},G)}:void 0,$e=_=>o.jsxs("li",{children:[o.jsx(Ie,{className:"raven-autocomplete__group-header",children:_.group}),o.jsx("ul",{className:"raven-autocomplete__group-items",children:_.children})]},_.key);let h=w;if(X&&!w){const _=Bt();h=((H,se)=>{const G=_(H,se),{inputValue:V}=se,ye=H.some(Ve=>V===(R?R(Ve):String(Ve)));return V!==""&&!ye&&G.push(`${be} "${V}"`),G})}return o.jsx(za,{id:A,className:k,options:e,value:f,inputValue:C,onChange:P,onInputChange:L,getOptionLabel:R,getOptionDisabled:O,isOptionEqualToValue:E,groupBy:B,filterOptions:h,renderOption:oe??i,renderGroup:le??(B?$e:void 0),renderTags:ue,renderInput:ie??_e,disabled:Y,readOnly:N,loading:me,loadingText:Me,noOptionsText:ae,multiple:Ee,freeSolo:Ge,disableClearable:ge,disableCloseOnSelect:Pe??(T?!0:void 0),disablePortal:ne,clearOnBlur:b??(X?!0:void 0),clearOnEscape:Fe,selectOnFocus:De??(X?!0:void 0),handleHomeEndKeys:Re??(X?!0:void 0),autoComplete:Q,autoHighlight:Ne,autoSelect:We,includeInputInList:Ke,openOnFocus:Je,blurOnSelect:pe,limitTags:he,size:fe,fullWidth:F,sx:ve,open:Ye,onOpen:$,onClose:we})}v.__docgenInfo={description:"",methods:[],displayName:"RavenAutocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"unknown"},description:""},inputValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"AutocompleteProps['onChange']",raw:"AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['onChange']"},description:""},onInputChange:{required:!1,tsType:{name:"AutocompleteProps['onInputChange']",raw:"AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['onInputChange']"},description:""},getOptionLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},getOptionDisabled:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"boolean"}}},description:""},isOptionEqualToValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T, value: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"option"},{type:{name:"T"},name:"value"}],return:{name:"boolean"}}},description:""},groupBy:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},filterOptions:{required:!1,tsType:{name:"AutocompleteProps['filterOptions']",raw:"AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['filterOptions']"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: React.HTMLAttributes<HTMLLIElement> & { key: string },
  option: T,
  state: AutocompleteRenderOptionState,
) => React.ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:"React.HTMLAttributes<HTMLLIElement> & { key: string }",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},{name:"signature",type:"object",raw:"{ key: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}}]}}]},name:"props"},{type:{name:"T"},name:"option"},{type:{name:"AutocompleteRenderOptionState"},name:"state"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderGroup:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: AutocompleteRenderGroupParams) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteRenderGroupParams"},name:"params"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderTags:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: T[],
  getTagProps: AutocompleteRenderGetTagProps,
) => React.ReactNode`,signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"value"},{type:{name:"AutocompleteRenderGetTagProps"},name:"getTagProps"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},renderInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: AutocompleteRenderInputParams) => React.ReactNode",signature:{arguments:[{type:{name:"AutocompleteRenderInputParams"},name:"params"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},loadingText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'Loading…'",computed:!1}},noOptionsText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'No options'",computed:!1}},multiple:{required:!1,tsType:{name:"Multiple"},description:""},freeSolo:{required:!1,tsType:{name:"FreeSolo"},description:""},disableClearable:{required:!1,tsType:{name:"DisableClearable"},description:""},disableCloseOnSelect:{required:!1,tsType:{name:"boolean"},description:""},disablePortal:{required:!1,tsType:{name:"boolean"},description:""},clearOnBlur:{required:!1,tsType:{name:"boolean"},description:""},clearOnEscape:{required:!1,tsType:{name:"boolean"},description:""},selectOnFocus:{required:!1,tsType:{name:"boolean"},description:""},handleHomeEndKeys:{required:!1,tsType:{name:"boolean"},description:""},autoComplete:{required:!1,tsType:{name:"boolean"},description:""},autoHighlight:{required:!1,tsType:{name:"boolean"},description:""},autoSelect:{required:!1,tsType:{name:"boolean"},description:""},includeInputInList:{required:!1,tsType:{name:"boolean"},description:""},openOnFocus:{required:!1,tsType:{name:"boolean"},description:""},blurOnSelect:{required:!1,tsType:{name:"union",raw:"boolean | 'touch' | 'mouse'",elements:[{name:"boolean"},{name:"literal",value:"'touch'"},{name:"literal",value:"'mouse'"}]},description:""},limitTags:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},checkboxSelection:{required:!1,tsType:{name:"boolean"},description:""},creatable:{required:!1,tsType:{name:"boolean"},description:""},creatableLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Add'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"AutocompleteProps['sx']",raw:"AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>['sx']"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, reason: string) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"string"},name:"reason"}],return:{name:"void"}}},description:""}}};const m=["Equipment Failure","Human Error","Process Deviation","Environmental Hazard","Near Miss","Safety Observation","Chemical Spill","Slip / Trip / Fall","Electrical Hazard","Fire / Explosion Risk","Confined Space","Falling Object","Ergonomic Issue","Vehicle / Transport","PPE Non-Compliance"],Wa=[{label:"Plant A — Reactor Unit",id:"plant-a-reactor"},{label:"Plant A — Storage Area",id:"plant-a-storage"},{label:"Plant B — Packaging Line",id:"plant-b-packaging"},{label:"Plant B — Warehouse",id:"plant-b-warehouse"},{label:"Plant C — Lab",id:"plant-c-lab"},{label:"Plant C — Loading Dock",id:"plant-c-loading"},{label:"Office — Ground Floor",id:"office-ground"},{label:"Office — First Floor",id:"office-first"},{label:"Yard — Parking Lot",id:"yard-parking"},{label:"Yard — Main Gate",id:"yard-gate"}],Qt=[{name:"Rajesh Kumar",department:"EHS"},{name:"Sarah Chen",department:"Operations"},{name:"David Smith",department:"Maintenance"},{name:"Priya Sharma",department:"Quality"},{name:"Ahmed Hassan",department:"EHS"},{name:"Maria Garcia",department:"HR"},{name:"James Wilson",department:"Engineering"},{name:"Li Wei",department:"Production"}],pa=[{label:"Critical",group:"High Priority"},{label:"Major",group:"High Priority"},{label:"Moderate",group:"Medium Priority"},{label:"Minor",group:"Low Priority"},{label:"Negligible",group:"Low Priority"}],Ka=["06:00 AM","07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM"],Ja=[{code:"IN",label:"India",phone:"91"},{code:"TH",label:"Thailand",phone:"66"},{code:"ID",label:"Indonesia",phone:"62"},{code:"US",label:"United States",phone:"1"},{code:"DE",label:"Germany",phone:"49"},{code:"FR",label:"France",phone:"33"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"NL",label:"Netherlands",phone:"31"},{code:"IT",label:"Italy",phone:"39"},{code:"ES",label:"Spain",phone:"34"},{code:"PL",label:"Poland",phone:"48"},{code:"PT",label:"Portugal",phone:"351"},{code:"NG",label:"Nigeria",phone:"234"},{code:"EG",label:"Egypt",phone:"20"},{code:"CI",label:"Côte d'Ivoire",phone:"225"},{code:"BR",label:"Brazil",phone:"55"},{code:"MX",label:"Mexico",phone:"52"},{code:"CN",label:"China",phone:"86"},{code:"JP",label:"Japan",phone:"81"},{code:"AU",label:"Australia",phone:"61"}];function Ya(e){return typeof String.fromCodePoint<"u"?e.toUpperCase().replace(/./g,n=>String.fromCodePoint(n.charCodeAt(0)+127397)):e}const Qn={title:"Components/Inputs/Autocomplete",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`
A normal text input enhanced by a panel of suggested options, built on MUI v6 Autocomplete with full Raven styling.

**Two primary use cases:**
1. **Combo box** — value must be chosen from a predefined set (e.g., incident category, location)
2. **Free solo** — textbox may contain any arbitrary value but suggests options (e.g., search input)

Supports: multiple selection, grouped options, async loading, checkboxes, creatable mode, disabled options, country select, custom rendering, and all MUI v6 features.

[MUI v6 Autocomplete Documentation](https://v6.mui.com/material-ui/react-autocomplete/)
        `}}}},rt={name:"Combo Box",args:{options:m,label:"Incident Category",placeholder:"Select a category…"},parameters:{docs:{description:{story:"The value must be chosen from a predefined set of allowed values. This is the default Autocomplete behavior."}}}},lt={name:"Object Options",args:{options:Wa,label:"Location",placeholder:"Search locations…",getOptionLabel:e=>e.label??"",isOptionEqualToValue:(e,n)=>e.id===n.id},parameters:{docs:{description:{story:"When options are objects, provide `getOptionLabel` and `isOptionEqualToValue` to ensure correct display and selection."}}}},it={name:"Country Select",render:()=>o.jsx("div",{className:"raven-autocomplete-demo",children:o.jsx(v,{options:Ja,label:"Plant Country",placeholder:"Choose a country",getOptionLabel:e=>e.label,isOptionEqualToValue:(e,n)=>e.code===n.code,autoHighlight:!0,renderOption:(e,n)=>{const{key:r,...l}=e;return o.jsxs("li",{...l,children:[o.jsx("span",{className:"raven-autocomplete__country-flag",children:Ya(n.code)}),o.jsx("span",{className:"raven-autocomplete__country-label",children:n.label}),o.jsxs("span",{className:"raven-autocomplete__country-code",children:["+",n.phone]})]},r)}})}),parameters:{docs:{description:{story:"Choose from a list of countries with flag emoji and phone code. Uses custom `renderOption` for rich display. Relevant for selecting plant locations across Indorama Ventures global operations."}}}},pt={name:"Controlled States",render:()=>{const[e,n]=d.useState(null),[r,l]=d.useState("");return o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsxs("div",{className:"raven-autocomplete-demo__state-display",children:[o.jsxs("div",{children:["value: ",e!==null?`'${e}'`:"null"]}),o.jsxs("div",{children:["inputValue: '",r,"'"]})]}),o.jsx(v,{options:m,label:"Controlled Category",value:e,onChange:(y,f)=>n(f),inputValue:r,onInputChange:(y,f)=>l(f)})]})},parameters:{docs:{description:{story:"The component has two independently controlled states:\n1. **value** — the selected value (controlled with `value`/`onChange`)\n2. **inputValue** — the text in the textbox (controlled with `inputValue`/`onInputChange`)\n\nBoth states are isolated and should be controlled independently."}}}},ct={name:"Free Solo — Search Input",args:{options:m,label:"Search Incidents",placeholder:"Type to search…",freeSolo:!0},parameters:{docs:{description:{story:"Set `freeSolo` to true so the textbox can contain any arbitrary value. Useful for search inputs where suggestions are provided but any text is valid."}}}},dt={name:"Free Solo — Creatable",render:()=>{const[e,n]=d.useState(null);return o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Ie,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:`Type a new category that doesn't exist in the list to see the "Add" option.`}),o.jsx(v,{options:m,label:"Category",placeholder:"Select or create…",freeSolo:!0,creatable:!0,creatableLabel:"Add",value:e,onChange:(r,l)=>n(l)}),e&&o.jsxs("div",{className:"raven-autocomplete-demo__state-display",children:["Selected: ",e]})]})},parameters:{docs:{description:{story:'Combines `freeSolo` with `creatable` to allow adding new values. When the user types something not in the list, an "Add" option appears. Uses `selectOnFocus`, `clearOnBlur`, and `handleHomeEndKeys` for a combo-box-like experience.'}}}},ut={name:"Grouped Options",render:()=>o.jsx("div",{className:"raven-autocomplete-demo",children:o.jsx(v,{options:pa.sort((e,n)=>-n.group.localeCompare(e.group)),label:"Severity Level",placeholder:"Select severity…",getOptionLabel:e=>e.label,groupBy:e=>e.group})}),parameters:{docs:{description:{story:"Group options with the `groupBy` prop. Options should be sorted by the same dimension they are grouped by to avoid duplicate headers. Group headers use Raven purple with uppercase styling."}}}},mt={name:"Disabled Options",render:()=>o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Ie,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:"Some time slots are unavailable (disabled)."}),o.jsx(v,{options:Ka,label:"Incident Time",getOptionDisabled:e=>e==="06:00 AM"||e==="12:00 PM"})]}),parameters:{docs:{description:{story:"Use `getOptionDisabled` to conditionally disable specific options. Disabled options appear faded and cannot be selected."}}}},gt={name:"Asynchronous — Load on Open",render:()=>{const[e,n]=d.useState(!1),[r,l]=d.useState([]),[y,f]=d.useState(!1);return d.useEffect(()=>{if(!e)return;f(!0);const C=setTimeout(()=>{l(m),f(!1)},1500);return()=>clearTimeout(C)},[e]),d.useEffect(()=>{e||l([])},[e]),o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Ie,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:"Options load asynchronously when the dropdown opens. A spinner is shown while loading."}),o.jsx(v,{options:r,label:"Incident Category",placeholder:"Click to load…",loading:y,open:e,onOpen:()=>n(!0),onClose:()=>n(!1)})]})},parameters:{docs:{description:{story:"Load options on open — waits for user interaction before fetching. Displays a loading spinner while the request is pending. Use the `loading` prop to control the loading state."}}}},ht={name:"Multiple Values",args:{options:m,label:"Tags",placeholder:"Select tags…",multiple:!0},parameters:{docs:{description:{story:"Allow the user to select more than one value. Selected values appear as Raven-styled chips (tags) with purple background and pill border radius."}}}},ft={name:"Fixed Options (Locked Tags)",render:()=>{const e=[{name:"Rajesh Kumar",department:"EHS",fixed:!0}],[n,r]=d.useState([...e,Qt[1]]);return o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Ie,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:'"Rajesh Kumar" is a fixed tag that cannot be removed.'}),o.jsx(v,{multiple:!0,options:Qt,label:"Investigation Team",value:n,onChange:(l,y)=>{r([...e,...y.filter(f=>!f.fixed)])},getOptionLabel:l=>l.name,isOptionEqualToValue:(l,y)=>l.name===y.name,renderTags:(l,y)=>l.map((f,C)=>{const{key:P,...L}=y({index:C});return o.jsx(Ht,{label:f.name,...L,disabled:f.fixed},P)})})]})},parameters:{docs:{description:{story:"Lock certain tags so they cannot be removed. Use `renderTags` with a disabled Chip for fixed items. Useful for mandatory investigation team leads."}}}},bt={name:"Multiple — Checkboxes",args:{options:m,label:"Root Causes",placeholder:"Select root causes…",multiple:!0,checkboxSelection:!0},parameters:{docs:{description:{story:"Use `checkboxSelection` to render a checkbox before each option. Automatically sets `disableCloseOnSelect` so the dropdown stays open while selecting multiple items."}}}},vt={name:"Multiple — Limit Tags",render:()=>o.jsx("div",{className:"raven-autocomplete-demo",children:o.jsx(v,{multiple:!0,limitTags:2,options:m,label:"Categories",placeholder:"Favorites",value:[m[0],m[1],m[4]],onChange:()=>{}})}),parameters:{docs:{description:{story:'Use `limitTags` to limit the number of displayed chips when not focused. A "+N" indicator shows how many additional items are selected.'}}}},yt={name:"Sizes",render:()=>o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Small"}),o.jsx(v,{options:m,label:"Category",size:"small"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Medium (default)"}),o.jsx(v,{options:m,label:"Category",size:"medium"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Small — Multiple"}),o.jsx(v,{multiple:!0,options:m,label:"Tags",size:"small",value:[m[0],m[4]],onChange:()=>{}})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Medium — Multiple"}),o.jsx(v,{multiple:!0,options:m,label:"Tags",size:"medium",value:[m[0],m[4]],onChange:()=>{}})]})]}),parameters:{docs:{description:{story:'Use the `size` prop to control input density. `"small"` gives a more compact input, useful for dense forms or filters.'}}}},xt={name:"Disabled & Read Only",render:()=>o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Disabled"}),o.jsx(v,{options:m,label:"Category",value:"Near Miss",disabled:!0})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Read Only"}),o.jsx(v,{options:m,label:"Category",value:"Near Miss",readOnly:!0})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Disabled — Multiple"}),o.jsx(v,{multiple:!0,options:m,label:"Tags",value:["Near Miss","Human Error"],onChange:()=>{},disabled:!0})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Read Only — Multiple"}),o.jsx(v,{multiple:!0,options:m,label:"Tags",value:["Near Miss","Human Error"],onChange:()=>{},readOnly:!0})]})]}),parameters:{docs:{description:{story:"Disabled state shows a grey background with muted text. Read-only state shows a dashed border to distinguish from disabled. Both prevent user interaction."}}}},Ct={name:"Error State",render:()=>o.jsx("div",{className:"raven-autocomplete-demo",children:o.jsx(v,{options:m,label:"Incident Category",placeholder:"Required field",error:!0,helperText:"Category is required"})}),parameters:{docs:{description:{story:"Pass `error` and `helperText` to show validation errors. The border and label turn red (Raven error token)."}}}},St={name:"Custom Filter — Match From Start",render:()=>{const e=Bt({matchFrom:"start",stringify:n=>n});return o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Ie,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:'Options must start with the typed text. Try typing "S" vs "E".'}),o.jsx(v,{options:m,label:"Category (starts with)",filterOptions:e})]})},parameters:{docs:{description:{story:"Use `createFilterOptions` to customize filter behavior:\n- `matchFrom: 'start'` — options must start with the query\n- `matchFrom: 'any'` (default) — options can contain the query anywhere\n- `ignoreCase`, `ignoreAccents`, `limit`, `trim` for fine-tuning"}}}},Ot={name:"Playground",render:()=>{const[e,n]=d.useState(!1),[r,l]=d.useState(!1),[y,f]=d.useState(!1),[C,P]=d.useState(!1),[L,R]=d.useState(!1),[O,E]=d.useState(!1),[B,w]=d.useState(!1),[oe,le]=d.useState(!1),[ue,ie]=d.useState(!1),Y=[{label:"disableCloseOnSelect",value:e,set:n},{label:"clearOnEscape",value:r,set:l},{label:"disableClearable",value:y,set:f},{label:"openOnFocus",value:C,set:P},{label:"autoHighlight",value:L,set:R},{label:"autoSelect",value:O,set:E},{label:"disablePortal",value:B,set:w},{label:"disabled",value:oe,set:le},{label:"readOnly",value:ue,set:ie}];return o.jsxs("div",{className:"raven-autocomplete-demo",children:[o.jsx(Oa,{sx:{display:"flex",flexWrap:"wrap",gap:1,mb:2},children:Y.map(N=>o.jsx(Ht,{label:N.label,onClick:()=>N.set(!N.value),color:N.value?"primary":"default",variant:N.value?"filled":"outlined",size:"small"},N.label))}),o.jsx(v,{options:m,label:"Incident Category",disableCloseOnSelect:e,clearOnEscape:r,disableClearable:y,openOnFocus:C,autoHighlight:L,autoSelect:O,disablePortal:B,disabled:oe,readOnly:ue})]})},parameters:{docs:{description:{story:"Toggle various Autocomplete props interactively. Click the chips to enable/disable each feature and see how it affects the component behavior."}}}},Tt={name:"All Variants Gallery",render:()=>o.jsxs(Sa,{spacing:4,sx:{maxWidth:500,p:3},children:[o.jsx(Ie,{variant:"h6",sx:{fontWeight:600,color:"#4A148C"},children:"Autocomplete — All Variants"}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Standard Combo Box"}),o.jsx(v,{options:m,label:"Category"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Free Solo (Search)"}),o.jsx(v,{options:m,label:"Search",freeSolo:!0,placeholder:"Type anything…"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Multiple with Checkboxes"}),o.jsx(v,{options:m,label:"Root Causes",multiple:!0,checkboxSelection:!0})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Grouped"}),o.jsx(v,{options:pa.sort((e,n)=>-n.group.localeCompare(e.group)),label:"Severity",getOptionLabel:e=>e.label,groupBy:e=>e.group})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Small Size"}),o.jsx(v,{options:m,label:"Compact",size:"small"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Error"}),o.jsx(v,{options:m,label:"Category",error:!0,helperText:"This field is required"})]}),o.jsxs("div",{className:"raven-autocomplete-demo__section",children:[o.jsx("span",{className:"raven-autocomplete-demo__section-title",children:"Disabled"}),o.jsx(v,{options:m,label:"Category",value:"Near Miss",disabled:!0})]})]}),parameters:{docs:{description:{story:"A gallery showcasing all major Autocomplete variants side by side in the Raven design system."}}}};var Xt,Zt,eo;rt.parameters={...rt.parameters,docs:{...(Xt=rt.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  name: 'Combo Box',
  args: {
    options: incidentCategories,
    label: 'Incident Category',
    placeholder: 'Select a category…'
  },
  parameters: {
    docs: {
      description: {
        story: 'The value must be chosen from a predefined set of allowed values. This is the default Autocomplete behavior.'
      }
    }
  }
}`,...(eo=(Zt=rt.parameters)==null?void 0:Zt.docs)==null?void 0:eo.source}}};var to,oo,ao;lt.parameters={...lt.parameters,docs:{...(to=lt.parameters)==null?void 0:to.docs,source:{originalSource:`{
  name: 'Object Options',
  args: {
    options: locations,
    label: 'Location',
    placeholder: 'Search locations…',
    getOptionLabel: (option: any) => option.label ?? '',
    isOptionEqualToValue: (option: any, value: any) => option.id === value.id
  },
  parameters: {
    docs: {
      description: {
        story: 'When options are objects, provide \`getOptionLabel\` and \`isOptionEqualToValue\` to ensure correct display and selection.'
      }
    }
  }
}`,...(ao=(oo=lt.parameters)==null?void 0:oo.docs)==null?void 0:ao.source}}};var no,so,ro;it.parameters={...it.parameters,docs:{...(no=it.parameters)==null?void 0:no.docs,source:{originalSource:`{
  name: 'Country Select',
  render: () => <div className="raven-autocomplete-demo">
      <RavenAutocomplete options={countries} label="Plant Country" placeholder="Choose a country" getOptionLabel={(option: Country) => option.label} isOptionEqualToValue={(a: Country, b: Country) => a.code === b.code} autoHighlight renderOption={(props, option: Country) => {
      const {
        key,
        ...rest
      } = props;
      return <li key={key} {...rest}>
              <span className="raven-autocomplete__country-flag">
                {countryToFlag(option.code)}
              </span>
              <span className="raven-autocomplete__country-label">
                {option.label}
              </span>
              <span className="raven-autocomplete__country-code">
                +{option.phone}
              </span>
            </li>;
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Choose from a list of countries with flag emoji and phone code. Uses custom \`renderOption\` for rich display. Relevant for selecting plant locations across Indorama Ventures global operations.'
      }
    }
  }
}`,...(ro=(so=it.parameters)==null?void 0:so.docs)==null?void 0:ro.source}}};var lo,io,po;pt.parameters={...pt.parameters,docs:{...(lo=pt.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  name: 'Controlled States',
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    return <div className="raven-autocomplete-demo">
        <div className="raven-autocomplete-demo__state-display">
          <div>value: {value !== null ? \`'\${value}'\` : 'null'}</div>
          <div>inputValue: '{inputValue}'</div>
        </div>
        <RavenAutocomplete options={incidentCategories} label="Controlled Category" value={value} onChange={(_event, newValue) => setValue(newValue)} inputValue={inputValue} onInputChange={(_event, newInputValue) => setInputValue(newInputValue)} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`The component has two independently controlled states:
1. **value** — the selected value (controlled with \\\`value\\\`/\\\`onChange\\\`)
2. **inputValue** — the text in the textbox (controlled with \\\`inputValue\\\`/\\\`onInputChange\\\`)

Both states are isolated and should be controlled independently.\`
      }
    }
  }
}`,...(po=(io=pt.parameters)==null?void 0:io.docs)==null?void 0:po.source}}};var co,uo,mo;ct.parameters={...ct.parameters,docs:{...(co=ct.parameters)==null?void 0:co.docs,source:{originalSource:`{
  name: 'Free Solo — Search Input',
  args: {
    options: incidentCategories,
    label: 'Search Incidents',
    placeholder: 'Type to search…',
    freeSolo: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Set \`freeSolo\` to true so the textbox can contain any arbitrary value. Useful for search inputs where suggestions are provided but any text is valid.'
      }
    }
  }
}`,...(mo=(uo=ct.parameters)==null?void 0:uo.docs)==null?void 0:mo.source}}};var go,ho,fo;dt.parameters={...dt.parameters,docs:{...(go=dt.parameters)==null?void 0:go.docs,source:{originalSource:`{
  name: 'Free Solo — Creatable',
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Type a new category that doesn't exist in the list to see the "Add"
          option.
        </Typography>
        <RavenAutocomplete options={incidentCategories} label="Category" placeholder="Select or create…" freeSolo creatable creatableLabel="Add" value={value} onChange={(_e, newVal) => setValue(newVal)} />
        {value && <div className="raven-autocomplete-demo__state-display">
            Selected: {value}
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Combines \`freeSolo\` with \`creatable\` to allow adding new values. When the user types something not in the list, an "Add" option appears. Uses \`selectOnFocus\`, \`clearOnBlur\`, and \`handleHomeEndKeys\` for a combo-box-like experience.'
      }
    }
  }
}`,...(fo=(ho=dt.parameters)==null?void 0:ho.docs)==null?void 0:fo.source}}};var bo,vo,yo;ut.parameters={...ut.parameters,docs:{...(bo=ut.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  name: 'Grouped Options',
  render: () => <div className="raven-autocomplete-demo">
      <RavenAutocomplete options={severityLevels.sort((a, b) => -b.group.localeCompare(a.group))} label="Severity Level" placeholder="Select severity…" getOptionLabel={(option: (typeof severityLevels)[0]) => option.label} groupBy={(option: (typeof severityLevels)[0]) => option.group} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Group options with the \`groupBy\` prop. Options should be sorted by the same dimension they are grouped by to avoid duplicate headers. Group headers use Raven purple with uppercase styling.'
      }
    }
  }
}`,...(yo=(vo=ut.parameters)==null?void 0:vo.docs)==null?void 0:yo.source}}};var xo,Co,So;mt.parameters={...mt.parameters,docs:{...(xo=mt.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  name: 'Disabled Options',
  render: () => <div className="raven-autocomplete-demo">
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Some time slots are unavailable (disabled).
      </Typography>
      <RavenAutocomplete options={timeSlots} label="Incident Time" getOptionDisabled={(option: string) => option === '06:00 AM' || option === '12:00 PM'} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`getOptionDisabled\` to conditionally disable specific options. Disabled options appear faded and cannot be selected.'
      }
    }
  }
}`,...(So=(Co=mt.parameters)==null?void 0:Co.docs)==null?void 0:So.source}}};var Oo,To,Ao;gt.parameters={...gt.parameters,docs:{...(Oo=gt.parameters)==null?void 0:Oo.docs,source:{originalSource:`{
  name: 'Asynchronous — Load on Open',
  render: () => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly string[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (!open) return;
      setLoading(true);
      const timer = setTimeout(() => {
        setOptions(incidentCategories);
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, [open]);
    useEffect(() => {
      if (!open) setOptions([]);
    }, [open]);
    return <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Options load asynchronously when the dropdown opens. A spinner is
          shown while loading.
        </Typography>
        <RavenAutocomplete options={options as string[]} label="Incident Category" placeholder="Click to load…" loading={loading} open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Load options on open — waits for user interaction before fetching. Displays a loading spinner while the request is pending. Use the \`loading\` prop to control the loading state.'
      }
    }
  }
}`,...(Ao=(To=gt.parameters)==null?void 0:To.docs)==null?void 0:Ao.source}}};var Io,Po,Ro;ht.parameters={...ht.parameters,docs:{...(Io=ht.parameters)==null?void 0:Io.docs,source:{originalSource:`{
  name: 'Multiple Values',
  args: {
    options: incidentCategories,
    label: 'Tags',
    placeholder: 'Select tags…',
    multiple: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Allow the user to select more than one value. Selected values appear as Raven-styled chips (tags) with purple background and pill border radius.'
      }
    }
  }
}`,...(Ro=(Po=ht.parameters)==null?void 0:Po.docs)==null?void 0:Ro.source}}};var No,wo,_o;ft.parameters={...ft.parameters,docs:{...(No=ft.parameters)==null?void 0:No.docs,source:{originalSource:`{
  name: 'Fixed Options (Locked Tags)',
  render: () => {
    const fixedInvestigators: Investigator[] = [{
      name: 'Rajesh Kumar',
      department: 'EHS',
      fixed: true
    }];
    const [value, setValue] = useState<Investigator[]>([...fixedInvestigators, investigators[1]]);
    return <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          "Rajesh Kumar" is a fixed tag that cannot be removed.
        </Typography>
        <RavenAutocomplete multiple options={investigators} label="Investigation Team" value={value} onChange={(_event, newValue: Investigator[]) => {
        setValue([...fixedInvestigators, ...newValue.filter(v => !v.fixed)]);
      }} getOptionLabel={(option: Investigator) => option.name} isOptionEqualToValue={(a: Investigator, b: Investigator) => a.name === b.name} renderTags={(tagValue, getTagProps) => tagValue.map((option: Investigator, index: number) => {
        const {
          key,
          ...tagProps
        } = getTagProps({
          index
        });
        return <Chip key={key} label={option.name} {...tagProps} disabled={option.fixed} />;
      })} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Lock certain tags so they cannot be removed. Use \`renderTags\` with a disabled Chip for fixed items. Useful for mandatory investigation team leads.'
      }
    }
  }
}`,...(_o=(wo=ft.parameters)==null?void 0:wo.docs)==null?void 0:_o.source}}};var jo,Lo,ko;bt.parameters={...bt.parameters,docs:{...(jo=bt.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  name: 'Multiple — Checkboxes',
  args: {
    options: incidentCategories,
    label: 'Root Causes',
    placeholder: 'Select root causes…',
    multiple: true,
    checkboxSelection: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use \`checkboxSelection\` to render a checkbox before each option. Automatically sets \`disableCloseOnSelect\` so the dropdown stays open while selecting multiple items.'
      }
    }
  }
}`,...(ko=(Lo=bt.parameters)==null?void 0:Lo.docs)==null?void 0:ko.source}}};var Mo,Eo,Fo;vt.parameters={...vt.parameters,docs:{...(Mo=vt.parameters)==null?void 0:Mo.docs,source:{originalSource:`{
  name: 'Multiple — Limit Tags',
  render: () => <div className="raven-autocomplete-demo">
      <RavenAutocomplete multiple limitTags={2} options={incidentCategories} label="Categories" placeholder="Favorites" value={[incidentCategories[0], incidentCategories[1], incidentCategories[4]]} onChange={() => {}} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`limitTags\` to limit the number of displayed chips when not focused. A "+N" indicator shows how many additional items are selected.'
      }
    }
  }
}`,...(Fo=(Eo=vt.parameters)==null?void 0:Eo.docs)==null?void 0:Fo.source}}};var Do,$o,Vo;yt.parameters={...yt.parameters,docs:{...(Do=yt.parameters)==null?void 0:Do.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="raven-autocomplete-demo">
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Small
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" size="small" />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Medium (default)
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" size="medium" />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Small — Multiple
        </span>
        <RavenAutocomplete multiple options={incidentCategories} label="Tags" size="small" value={[incidentCategories[0], incidentCategories[4]]} onChange={() => {}} />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Medium — Multiple
        </span>
        <RavenAutocomplete multiple options={incidentCategories} label="Tags" size="medium" value={[incidentCategories[0], incidentCategories[4]]} onChange={() => {}} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the \`size\` prop to control input density. \`"small"\` gives a more compact input, useful for dense forms or filters.'
      }
    }
  }
}`,...(Vo=($o=yt.parameters)==null?void 0:$o.docs)==null?void 0:Vo.source}}};var qo,Ho,Bo;xt.parameters={...xt.parameters,docs:{...(qo=xt.parameters)==null?void 0:qo.docs,source:{originalSource:`{
  name: 'Disabled & Read Only',
  render: () => <div className="raven-autocomplete-demo">
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Disabled
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" value="Near Miss" disabled />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Read Only
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" value="Near Miss" readOnly />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Disabled — Multiple
        </span>
        <RavenAutocomplete multiple options={incidentCategories} label="Tags" value={['Near Miss', 'Human Error']} onChange={() => {}} disabled />
      </div>
      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Read Only — Multiple
        </span>
        <RavenAutocomplete multiple options={incidentCategories} label="Tags" value={['Near Miss', 'Human Error']} onChange={() => {}} readOnly />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled state shows a grey background with muted text. Read-only state shows a dashed border to distinguish from disabled. Both prevent user interaction.'
      }
    }
  }
}`,...(Bo=(Ho=xt.parameters)==null?void 0:Ho.docs)==null?void 0:Bo.source}}};var zo,Uo,Go;Ct.parameters={...Ct.parameters,docs:{...(zo=Ct.parameters)==null?void 0:zo.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => <div className="raven-autocomplete-demo">
      <RavenAutocomplete options={incidentCategories} label="Incident Category" placeholder="Required field" error helperText="Category is required" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pass \`error\` and \`helperText\` to show validation errors. The border and label turn red (Raven error token).'
      }
    }
  }
}`,...(Go=(Uo=Ct.parameters)==null?void 0:Uo.docs)==null?void 0:Go.source}}};var Wo,Ko,Jo;St.parameters={...St.parameters,docs:{...(Wo=St.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
  name: 'Custom Filter — Match From Start',
  render: () => {
    const filterOpts = createFilterOptions({
      matchFrom: 'start',
      stringify: (option: string) => option
    });
    return <div className="raven-autocomplete-demo">
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Options must start with the typed text. Try typing "S" vs "E".
        </Typography>
        <RavenAutocomplete options={incidentCategories} label="Category (starts with)" filterOptions={filterOpts} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`Use \\\`createFilterOptions\\\` to customize filter behavior:
- \\\`matchFrom: 'start'\\\` — options must start with the query
- \\\`matchFrom: 'any'\\\` (default) — options can contain the query anywhere
- \\\`ignoreCase\\\`, \\\`ignoreAccents\\\`, \\\`limit\\\`, \\\`trim\\\` for fine-tuning\`
      }
    }
  }
}`,...(Jo=(Ko=St.parameters)==null?void 0:Ko.docs)==null?void 0:Jo.source}}};var Yo,Qo,Xo;Ot.parameters={...Ot.parameters,docs:{...(Yo=Ot.parameters)==null?void 0:Yo.docs,source:{originalSource:`{
  name: 'Playground',
  render: () => {
    const [disableCloseOnSelect, setDCOS] = useState(false);
    const [clearOnEscape, setCOE] = useState(false);
    const [disableClearable, setDC] = useState(false);
    const [openOnFocus, setOOF] = useState(false);
    const [autoHighlight, setAH] = useState(false);
    const [autoSelect, setAS] = useState(false);
    const [disablePortal, setDP] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [readOnly, setRO] = useState(false);
    const toggles = [{
      label: 'disableCloseOnSelect',
      value: disableCloseOnSelect,
      set: setDCOS
    }, {
      label: 'clearOnEscape',
      value: clearOnEscape,
      set: setCOE
    }, {
      label: 'disableClearable',
      value: disableClearable,
      set: setDC
    }, {
      label: 'openOnFocus',
      value: openOnFocus,
      set: setOOF
    }, {
      label: 'autoHighlight',
      value: autoHighlight,
      set: setAH
    }, {
      label: 'autoSelect',
      value: autoSelect,
      set: setAS
    }, {
      label: 'disablePortal',
      value: disablePortal,
      set: setDP
    }, {
      label: 'disabled',
      value: disabled,
      set: setDisabled
    }, {
      label: 'readOnly',
      value: readOnly,
      set: setRO
    }];
    return <div className="raven-autocomplete-demo">
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        mb: 2
      }}>
          {toggles.map(t => <Chip key={t.label} label={t.label} onClick={() => t.set(!t.value)} color={t.value ? 'primary' : 'default'} variant={t.value ? 'filled' : 'outlined'} size="small" />)}
        </Box>
        <RavenAutocomplete options={incidentCategories} label="Incident Category" disableCloseOnSelect={disableCloseOnSelect} clearOnEscape={clearOnEscape} disableClearable={disableClearable} openOnFocus={openOnFocus} autoHighlight={autoHighlight} autoSelect={autoSelect} disablePortal={disablePortal} disabled={disabled} readOnly={readOnly} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggle various Autocomplete props interactively. Click the chips to enable/disable each feature and see how it affects the component behavior.'
      }
    }
  }
}`,...(Xo=(Qo=Ot.parameters)==null?void 0:Qo.docs)==null?void 0:Xo.source}}};var Zo,ea,ta;Tt.parameters={...Tt.parameters,docs:{...(Zo=Tt.parameters)==null?void 0:Zo.docs,source:{originalSource:`{
  name: 'All Variants Gallery',
  render: () => <Stack spacing={4} sx={{
    maxWidth: 500,
    p: 3
  }}>
      <Typography variant="h6" sx={{
      fontWeight: 600,
      color: '#4A148C'
    }}>
        Autocomplete — All Variants
      </Typography>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Standard Combo Box
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Free Solo (Search)
        </span>
        <RavenAutocomplete options={incidentCategories} label="Search" freeSolo placeholder="Type anything…" />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Multiple with Checkboxes
        </span>
        <RavenAutocomplete options={incidentCategories} label="Root Causes" multiple checkboxSelection />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Grouped
        </span>
        <RavenAutocomplete options={severityLevels.sort((a, b) => -b.group.localeCompare(a.group))} label="Severity" getOptionLabel={(o: (typeof severityLevels)[0]) => o.label} groupBy={(o: (typeof severityLevels)[0]) => o.group} />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Small Size
        </span>
        <RavenAutocomplete options={incidentCategories} label="Compact" size="small" />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Error
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" error helperText="This field is required" />
      </div>

      <div className="raven-autocomplete-demo__section">
        <span className="raven-autocomplete-demo__section-title">
          Disabled
        </span>
        <RavenAutocomplete options={incidentCategories} label="Category" value="Near Miss" disabled />
      </div>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'A gallery showcasing all major Autocomplete variants side by side in the Raven design system.'
      }
    }
  }
}`,...(ta=(ea=Tt.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};const Xn=["ComboBox","ObjectOptions","CountrySelect","ControlledStates","FreeSolo","Creatable","Grouped","DisabledOptions","AsyncLoading","MultipleValues","FixedOptions","WithCheckboxes","LimitTags","Sizes","DisabledAndReadOnly","ErrorState","CustomFilter","Playground","AllVariantsGallery"];export{Tt as AllVariantsGallery,gt as AsyncLoading,rt as ComboBox,pt as ControlledStates,it as CountrySelect,dt as Creatable,St as CustomFilter,xt as DisabledAndReadOnly,mt as DisabledOptions,Ct as ErrorState,ft as FixedOptions,ct as FreeSolo,ut as Grouped,vt as LimitTags,ht as MultipleValues,lt as ObjectOptions,Ot as Playground,yt as Sizes,bt as WithCheckboxes,Xn as __namedExportsOrder,Qn as default};
