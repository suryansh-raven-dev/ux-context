import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as f}from"./Box-BpWUXKTb.js";import{T as n}from"./Typography-Dh7MeB_o.js";import{S as x}from"./Stack-DzJHroyU.js";import"./index-yBjzXJbu.js";import"./DefaultPropsProvider-Sd0H8ooC.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./memoTheme-ZM2DYSWk.js";import"./useTheme-Dbu05CKd.js";import"./extendSxProp-DutLj_5J.js";import"./index-4qhqXJuN.js";import"./emotion-react.browser.esm-CSzDDnfi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function s({variant:i,children:y,timestamp:g}){const v=i==="user"?"User message":"Assistant message";return e.jsxs(f,{role:"log","aria-label":v,className:`raven-chat-bubble raven-chat-bubble--${i}`,children:[e.jsx(n,{variant:"body1",component:"div",className:"raven-chat-bubble__content",children:y}),e.jsx(n,{variant:"caption",color:"text.secondary",component:"div",className:"raven-chat-bubble__timestamp",children:g})]})}s.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{variant:{required:!0,tsType:{name:"union",raw:"'user' | 'ai'",elements:[{name:"literal",value:"'user'"},{name:"literal",value:"'ai'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""}}};const q={title:"Chat/ChatBubble",component:s},a={render:()=>e.jsxs(x,{spacing:2,sx:{maxWidth:400,p:2},children:[e.jsx(s,{variant:"user",timestamp:"10:42 AM",children:"I noticed a forklift crossing without honking near Bay 3."}),e.jsx(s,{variant:"ai",timestamp:"10:42 AM",children:"Thanks — that sounds like a near-miss. Would you classify severity as low, medium, or high?"})]})},r={args:{variant:"user",timestamp:"9:15 AM",children:"Short confirmation."}},t={args:{variant:"ai",timestamp:"9:15 AM",children:"Here is a longer assistant reply that wraps within the bubble layout for the story."}};var o,m,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    maxWidth: 400,
    p: 2
  }}>
      <ChatBubble variant="user" timestamp="10:42 AM">
        I noticed a forklift crossing without honking near Bay 3.
      </ChatBubble>
      <ChatBubble variant="ai" timestamp="10:42 AM">
        Thanks — that sounds like a near-miss. Would you classify severity as low, medium, or high?
      </ChatBubble>
    </Stack>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    timestamp: '9:15 AM',
    children: 'Short confirmation.'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,h,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'ai',
    timestamp: '9:15 AM',
    children: 'Here is a longer assistant reply that wraps within the bubble layout for the story.'
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const I=["UserAndAi","UserOnly","AiOnly"];export{t as AiOnly,a as UserAndAi,r as UserOnly,I as __namedExportsOrder,q as default};
