import{j as e}from"./iframe-CXEw8YqF.js";import{B as f}from"./Box-ffj_WZAu.js";import{T as i}from"./Typography-DAy4giaA.js";import{S as x}from"./Stack-nkLupI6a.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function s({variant:n,children:y,timestamp:g}){const v=n==="user"?"User message":"Assistant message";return e.jsxs(f,{role:"log","aria-label":v,className:`raven-chat-bubble raven-chat-bubble--${n}`,children:[e.jsx(i,{variant:"body1",component:"div",className:"raven-chat-bubble__content",children:y}),e.jsx(i,{variant:"caption",color:"text.secondary",component:"div",className:"raven-chat-bubble__timestamp",children:g})]})}s.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{variant:{required:!0,tsType:{name:"union",raw:"'user' | 'ai'",elements:[{name:"literal",value:"'user'"},{name:"literal",value:"'ai'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""}}};const j={title:"Chat/Chat Bubble",component:s},a={render:()=>e.jsxs(x,{spacing:2,sx:{maxWidth:400,p:2},children:[e.jsx(s,{variant:"user",timestamp:"10:42 AM",children:"I noticed a forklift crossing without honking near Bay 3."}),e.jsx(s,{variant:"ai",timestamp:"10:42 AM",children:"Thanks — that sounds like a near-miss. Would you classify severity as low, medium, or high?"})]})},r={args:{variant:"user",timestamp:"9:15 AM",children:"Short confirmation."}},t={args:{variant:"ai",timestamp:"9:15 AM",children:"Here is a longer assistant reply that wraps within the bubble layout for the story."}};var o,m,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const M=["UserAndAi","UserOnly","AiOnly"];export{t as AiOnly,a as UserAndAi,r as UserOnly,M as __namedExportsOrder,j as default};
