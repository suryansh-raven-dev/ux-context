import{r as fe,j as e}from"./iframe-CXEw8YqF.js";import{T as je}from"./Typography-DAy4giaA.js";import{S as t}from"./Stack-nkLupI6a.js";import{B as r}from"./Box-ffj_WZAu.js";import{D as d}from"./Divider-5kMQhmTu.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQZK3ANR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./dividerClasses-DCRmppAS.js";const a=fe.forwardRef(function({className:c,variant:Te="body1",...Se},Re){const Be=["raven-typography",c].filter(Boolean).join(" ");return e.jsx(je,{ref:Re,className:Be,variant:Te,...Se})});a.__docgenInfo={description:`Raven-styled wrapper around MUI v6 Typography.

Applies the Near-Miss design tokens: Source Sans 3 font family, custom
Raven type scale (body1Bold, tableHeader), and purple brand palette.
Supports all standard MUI Typography props (variant, color, align,
gutterBottom, noWrap, paragraph, component, sx) forwarded unchanged.

The variant-to-element mapping matches MUI defaults, with custom
variants (body1Bold → span, tableHeader → span) added for
Near-Miss product-specific use cases.`,methods:[],displayName:"RavenTypography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'subtitle1'
| 'subtitle2'
| 'body1'
| 'body1Bold'
| 'body2'
| 'button'
| 'caption'
| 'overline'
| 'tableHeader'
| 'inherit'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body1Bold'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'button'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'overline'"},{name:"literal",value:"'tableHeader'"},{name:"literal",value:"'inherit'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"RavenTypographyColor | string",elements:[{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'error'
| 'info'
| 'warning'
| 'textPrimary'
| 'textSecondary'
| 'textDisabled'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'textPrimary'"},{name:"literal",value:"'textSecondary'"},{name:"literal",value:"'textDisabled'"}]},{name:"string"}]},description:""},align:{required:!1,tsType:{name:"union",raw:`| 'center'
| 'inherit'
| 'justify'
| 'left'
| 'right'`,elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'inherit'"},{name:"literal",value:"'justify'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}},composes:["Omit"]};const De={title:"Components/Typography",component:a,parameters:{docs:{description:{component:"Raven-styled Typography component wrapping MUI v6 Typography. Uses the Near-Miss Source Sans 3 font family, Raven type scale, and brand purple palette. Supports all standard MUI variants (h1–h6, subtitle1/2, body1/2, button, caption, overline) plus custom Raven variants (body1Bold, tableHeader). All MUI Typography props (color, align, gutterBottom, noWrap, paragraph, component, sx, variantMapping) are forwarded unchanged."}}}},C=[{variant:"h1",label:"h1",size:"6rem",sizePx:"96px",weight:300,weightName:"Light",lineHeight:"1.167",leadingPx:"112px",letterSpacing:"-1.5px",textTransform:"none",element:"<h1>",figmaStyle:"—",sample:"Heading 1"},{variant:"h2",label:"h2",size:"3.75rem",sizePx:"60px",weight:300,weightName:"Light",lineHeight:"1.2",leadingPx:"72px",letterSpacing:"-0.5px",textTransform:"none",element:"<h2>",figmaStyle:"—",sample:"Heading 2"},{variant:"h3",label:"h3",size:"3rem",sizePx:"48px",weight:400,weightName:"Regular",lineHeight:"1.167",leadingPx:"56px",letterSpacing:"0",textTransform:"none",element:"<h3>",figmaStyle:"—",sample:"Heading 3"},{variant:"h4",label:"h4",size:"2.125rem",sizePx:"34px",weight:600,weightName:"SemiBold",lineHeight:"40px",leadingPx:"40px",letterSpacing:"0.25px",textTransform:"none",element:"<h4>",figmaStyle:"Product Typography/h4",sample:"Heading 4"},{variant:"h5",label:"h5",size:"1.5rem",sizePx:"24px",weight:600,weightName:"SemiBold",lineHeight:"32px",leadingPx:"32px",letterSpacing:"0",textTransform:"none",element:"<h5>",figmaStyle:"—",sample:"Heading 5"},{variant:"h6",label:"h6",size:"1.25rem",sizePx:"20px",weight:600,weightName:"SemiBold",lineHeight:"32px",leadingPx:"32px",letterSpacing:"0.15px",textTransform:"none",element:"<h6>",figmaStyle:"Product Typography/h6",sample:"Heading 6"},{variant:"subtitle1",label:"subtitle1",size:"1rem",sizePx:"16px",weight:400,weightName:"Regular",lineHeight:"1.75",leadingPx:"28px",letterSpacing:"0.15px",textTransform:"none",element:"<h6>",figmaStyle:"—",sample:"Subtitle 1"},{variant:"subtitle2",label:"subtitle2",size:"0.875rem",sizePx:"14px",weight:400,weightName:"Regular",lineHeight:"22px",leadingPx:"22px",letterSpacing:"0.1px",textTransform:"none",element:"<h6>",figmaStyle:"Product Typography/subtitle-2",sample:"Subtitle 2"},{variant:"body1",label:"body1",size:"1rem",sizePx:"16px",weight:400,weightName:"Regular",lineHeight:"1.75",leadingPx:"28px",letterSpacing:"0.15px",textTransform:"none",element:"<p>",figmaStyle:"Product Typography/body-1",sample:"Body 1 — default variant"},{variant:"body1Bold",label:"body1Bold ★",size:"1rem",sizePx:"16px",weight:600,weightName:"SemiBold",lineHeight:"1.75",leadingPx:"28px",letterSpacing:"0.15px",textTransform:"none",element:"<span>",figmaStyle:"Product Typography/body-1-bold",sample:"Body 1 Bold (custom)"},{variant:"body2",label:"body2",size:"0.875rem",sizePx:"14px",weight:400,weightName:"Regular",lineHeight:"20px",leadingPx:"20px",letterSpacing:"0.25px",textTransform:"none",element:"<p>",figmaStyle:"Product Typography/body-2",sample:"Body 2"},{variant:"button",label:"button",size:"0.875rem",sizePx:"14px",weight:500,weightName:"Medium",lineHeight:"24px",leadingPx:"24px",letterSpacing:"0.4px",textTransform:"UPPERCASE",element:"<span>",figmaStyle:"Product Typography/button-medium",sample:"Button Text"},{variant:"caption",label:"caption",size:"0.75rem",sizePx:"12px",weight:400,weightName:"Regular",lineHeight:"1 (100%)",leadingPx:"12px",letterSpacing:"0.4px",textTransform:"none",element:"<span>",figmaStyle:"Product Typography/caption",sample:"Caption text"},{variant:"overline",label:"overline",size:"0.75rem",sizePx:"12px",weight:600,weightName:"SemiBold",lineHeight:"32px",leadingPx:"32px",letterSpacing:"2px",textTransform:"UPPERCASE",element:"<span>",figmaStyle:"Product Typography/overline",sample:"Overline Text"},{variant:"tableHeader",label:"tableHeader ★",size:"0.875rem",sizePx:"14px",weight:600,weightName:"SemiBold",lineHeight:"1 (100%)",leadingPx:"14px",letterSpacing:"0.17px",textTransform:"none",element:"<span>",figmaStyle:"Product Typography/tabel header",sample:"Table Header (custom)"}],we={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",alignItems:"start",padding:"24px 0",borderBottom:"1px solid #E0E0E0"},i={fontFamily:'"Source Sans 3", sans-serif',fontSize:"11px",fontWeight:600,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:"0.5px",lineHeight:1},s={fontFamily:'"Source Sans 3", sans-serif',fontSize:"13px",fontWeight:500,color:"rgba(0,0,0,0.87)",lineHeight:"18px"};function l({label:n,value:c}){return e.jsxs(r,{sx:{minWidth:0},children:[e.jsx(r,{sx:i,children:n}),e.jsx(r,{sx:{...s,mt:"4px"},children:c})]})}const o={fontFamily:'"Source Sans 3", sans-serif',fontSize:"12px",fontWeight:600,color:"#4A148C",textTransform:"uppercase",letterSpacing:"0.5px",padding:"10px 12px",textAlign:"left",borderBottom:"2px solid #CE93D8",whiteSpace:"nowrap"},H={fontFamily:'"Source Sans 3", sans-serif',fontSize:"13px",fontWeight:400,color:"rgba(0,0,0,0.87)",padding:"10px 12px",borderBottom:"1px solid #F3E5F5",whiteSpace:"nowrap"},p={...H,fontFamily:'"SF Mono", "Fira Code", "Consolas", monospace',fontSize:"12px",color:"rgba(0,0,0,0.7)"},h={name:"Type Scale",render:()=>e.jsxs(r,{sx:{maxWidth:1100},children:[e.jsx(a,{variant:"h5",gutterBottom:!0,children:"Raven Typography Scale"}),e.jsxs(a,{variant:"body2",color:"textSecondary",sx:{mb:4},children:["Font family: Source Sans 3 · Fallback: Roboto, Helvetica, Arial, sans-serif · ","★"," = Custom Raven variant"]}),C.map(n=>e.jsxs(r,{sx:we,children:[e.jsx(r,{children:e.jsx(a,{variant:n.variant,display:"block",children:n.sample})}),e.jsxs(r,{children:[e.jsx(r,{sx:{display:"inline-block",backgroundColor:"#F3E5F5",borderRadius:"4px",px:1,py:.25,mb:1.5},children:e.jsx(r,{sx:{fontFamily:'"Source Sans 3", sans-serif',fontSize:"12px",fontWeight:600,color:"#4A148C"},children:n.label})}),e.jsxs(r,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px 16px"},children:[e.jsx(l,{label:"Font Size",value:`${n.sizePx} (${n.size})`}),e.jsx(l,{label:"Weight",value:`${n.weight} (${n.weightName})`}),e.jsx(l,{label:"Line Height (Leading)",value:n.lineHeight}),e.jsx(l,{label:"Leading (px)",value:n.leadingPx}),e.jsx(l,{label:"Letter Spacing (Kerning)",value:n.letterSpacing}),e.jsx(l,{label:"Text Transform",value:n.textTransform}),e.jsx(l,{label:"HTML Element",value:n.element}),e.jsx(l,{label:"Figma Style",value:n.figmaStyle})]})]})]},n.variant)),e.jsx(d,{sx:{my:6}}),e.jsx(a,{variant:"h5",gutterBottom:!0,children:"Typography Specifications Reference"}),e.jsx(a,{variant:"body2",color:"textSecondary",sx:{mb:3},children:"Complete token reference for every Raven typography variant. All values sourced from Figma design file and ravenNearMissTheme."}),e.jsx(r,{sx:{overflow:"auto"},children:e.jsxs(r,{component:"table",sx:{width:"100%",borderCollapse:"collapse",border:"1px solid #E0E0E0",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(r,{component:"thead",sx:{backgroundColor:"#FDFAFE"},children:e.jsxs(r,{component:"tr",children:[e.jsx(r,{component:"th",sx:o,children:"Variant"}),e.jsx(r,{component:"th",sx:o,children:"Size (rem)"}),e.jsx(r,{component:"th",sx:o,children:"Size (px)"}),e.jsx(r,{component:"th",sx:o,children:"Weight"}),e.jsx(r,{component:"th",sx:o,children:"Line Height"}),e.jsx(r,{component:"th",sx:o,children:"Leading (px)"}),e.jsx(r,{component:"th",sx:o,children:"Kerning"}),e.jsx(r,{component:"th",sx:o,children:"Transform"}),e.jsx(r,{component:"th",sx:o,children:"Element"})]})}),e.jsx(r,{component:"tbody",children:C.map((n,c)=>e.jsxs(r,{component:"tr",sx:{backgroundColor:c%2===0?"#FFFFFF":"#FDFAFE"},children:[e.jsx(r,{component:"td",sx:{...H,fontWeight:600,color:"#4A148C"},children:n.label}),e.jsx(r,{component:"td",sx:p,children:n.size}),e.jsx(r,{component:"td",sx:p,children:n.sizePx}),e.jsxs(r,{component:"td",sx:H,children:[n.weight," (",n.weightName,")"]}),e.jsx(r,{component:"td",sx:p,children:n.lineHeight}),e.jsx(r,{component:"td",sx:p,children:n.leadingPx}),e.jsx(r,{component:"td",sx:p,children:n.letterSpacing}),e.jsx(r,{component:"td",sx:H,children:n.textTransform}),e.jsx(r,{component:"td",sx:p,children:n.element})]},n.variant))})]})}),e.jsxs(r,{sx:{mt:4},children:[e.jsx(a,{variant:"h6",gutterBottom:!0,children:"Glossary"}),e.jsxs(r,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",backgroundColor:"#FDFAFE",border:"1px solid #F3E5F5",borderRadius:"8px",p:3},children:[e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Font Size"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"The size of the type in rem (relative to root 16px) and absolute pixels."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Weight"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"CSS font-weight. 300 = Light, 400 = Regular, 500 = Medium, 600 = SemiBold."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Line Height (Leading)"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"Vertical distance between baselines. Unitless values are multipliers of font size; px values are absolute."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Leading (px)"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"Computed line height in pixels. For unitless values: fontSize × multiplier."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Letter Spacing (Kerning)"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"Extra space added between characters. Negative values tighten; positive values loosen."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Text Transform"}),e.jsx(r,{sx:{...s,mt:"4px"},children:'CSS text-transform. "UPPERCASE" forces all-caps; "none" preserves original case.'})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"HTML Element"}),e.jsx(r,{sx:{...s,mt:"4px"},children:"Default semantic element rendered via variantMapping. Override with the component prop."})]}),e.jsxs(r,{children:[e.jsx(r,{sx:i,children:"Figma Style"}),e.jsx(r,{sx:{...s,mt:"4px"},children:'Corresponding Figma text style name from the Near-Miss design file. "—" means no direct Figma match.'})]})]})]})]})},x={name:"Headings",render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(a,{variant:"h1",children:"h1. Heading"}),e.jsx(d,{}),e.jsx(a,{variant:"h2",children:"h2. Heading"}),e.jsx(d,{}),e.jsx(a,{variant:"h3",children:"h3. Heading"}),e.jsx(d,{}),e.jsx(a,{variant:"h4",children:"h4. Heading"}),e.jsx(d,{}),e.jsx(a,{variant:"h5",children:"h5. Heading"}),e.jsx(d,{}),e.jsx(a,{variant:"h6",children:"h6. Heading"})]})},m={name:"Body Variants",render:()=>e.jsxs(t,{spacing:3,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"body1 (default)"}),e.jsx(a,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"body1Bold (custom)"}),e.jsx(a,{variant:"body1Bold",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus."})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"body2"}),e.jsx(a,{variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})]})]})},y={name:"Subtitle Variants",render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(a,{variant:"subtitle1",children:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"}),e.jsx(a,{variant:"subtitle2",children:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"})]})},g={name:"Custom Raven Variants",render:()=>e.jsxs(t,{spacing:3,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"body1Bold — used for emphasized chat messages and section labels"}),e.jsx(a,{variant:"body1Bold",children:"What happened? Please include time & date."})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"tableHeader — used for data table column headers"}),e.jsxs(t,{direction:"row",spacing:4,children:[e.jsx(a,{variant:"tableHeader",children:"Incident ID"}),e.jsx(a,{variant:"tableHeader",children:"Description"}),e.jsx(a,{variant:"tableHeader",children:"Status"}),e.jsx(a,{variant:"tableHeader",children:"Assigned To"})]})]})]})},u={name:"Utility Variants",render:()=>e.jsxs(t,{spacing:2,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"button"}),e.jsx(a,{variant:"button",display:"block",children:"Submit Report"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"caption"}),e.jsx(a,{variant:"caption",display:"block",children:"Last updated: 2 minutes ago"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"overline"}),e.jsx(a,{variant:"overline",display:"block",children:"Equipment Details"})]})]})},v={name:"Colors",render:()=>e.jsxs(t,{spacing:1,children:[e.jsx(a,{color:"primary",children:"primary — Brand purple"}),e.jsx(a,{color:"secondary",children:"secondary — Deep purple"}),e.jsx(a,{color:"textPrimary",children:"textPrimary — rgba(0,0,0,0.87)"}),e.jsx(a,{color:"textSecondary",children:"textSecondary — rgba(0,0,0,0.6)"}),e.jsx(a,{color:"textDisabled",children:"textDisabled — rgba(0,0,0,0.42)"}),e.jsx(a,{color:"success",children:"success — Green"}),e.jsx(a,{color:"error",children:"error — Red"}),e.jsx(a,{color:"warning",children:"warning — Orange"}),e.jsx(a,{color:"info",children:"info — Blue"})]})},b={name:"Alignment",render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(a,{align:"left",children:"Left aligned text"}),e.jsx(a,{align:"center",children:"Center aligned text"}),e.jsx(a,{align:"right",children:"Right aligned text"}),e.jsx(a,{align:"justify",children:"Justified text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."})]})},T={name:"Gutter Bottom",render:()=>e.jsxs(r,{sx:{border:"1px dashed #E0E0E0",p:2},children:[e.jsx(a,{variant:"h5",gutterBottom:!0,children:"With gutterBottom"}),e.jsx(a,{variant:"body1",children:"This paragraph follows a heading with gutterBottom enabled, adding a small bottom margin for visual separation."})]})},S={name:"No Wrap (Truncation)",render:()=>e.jsx(r,{sx:{width:300,border:"1px dashed #E0E0E0",p:2},children:e.jsx(a,{noWrap:!0,children:"This is a very long text that will be truncated with an ellipsis when it overflows the container width of 300 pixels."})})},R={name:"Paragraph",render:()=>e.jsxs(r,{children:[e.jsx(a,{paragraph:!0,children:"First paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit."}),e.jsx(a,{paragraph:!0,children:"Second paragraph. Quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum."}),e.jsx(a,{children:"Third block without paragraph spacing."})]})},B={name:"Semantic Element Override",render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(a,{variant:"h1",component:"h2",children:"h1 variant rendered as h2 element"}),e.jsx(a,{variant:"h6",component:"span",children:"h6 variant rendered as span element"}),e.jsx(a,{variant:"body1",component:"div",children:"body1 variant rendered as div element"})]})},f={name:"Theme Keys",render:()=>e.jsx(r,{sx:n=>({...n.typography.button,backgroundColor:"#F3E5F5",padding:n.spacing(2),borderRadius:2,color:"#4A148C"}),children:"This div's text uses the button typography theme key."})},j={name:"Raven Product Patterns",render:()=>e.jsxs(t,{spacing:4,children:[e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Section Header (overline)"}),e.jsx(a,{variant:"overline",color:"primary",display:"block",children:"Report Information"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Page Title (h4)"}),e.jsx(a,{variant:"h4",children:"Analysis Dashboard"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Card Title (h6)"}),e.jsx(a,{variant:"h6",children:"Near-Miss Incident Summary"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Chat Message (body1 + body1Bold)"}),e.jsx(a,{variant:"body1Bold",gutterBottom:!0,children:"Hi Ramesh!"}),e.jsx(a,{variant:"body1",children:"I'll help you report the near-miss incident quickly and easily."})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Form Label + Helper (caption)"}),e.jsx(a,{variant:"body2",gutterBottom:!0,children:"Date of Incident"}),e.jsx(a,{variant:"caption",color:"textSecondary",children:"Select when the near-miss event occurred"})]}),e.jsxs(r,{children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Table Headers (tableHeader)"}),e.jsxs(t,{direction:"row",spacing:6,sx:{borderBottom:"1px solid #E0E0E0",pb:1},children:[e.jsx(a,{variant:"tableHeader",children:"ID"}),e.jsx(a,{variant:"tableHeader",children:"Description"}),e.jsx(a,{variant:"tableHeader",children:"Severity"}),e.jsx(a,{variant:"tableHeader",children:"Status"})]}),e.jsxs(t,{direction:"row",spacing:6,sx:{pt:1},children:[e.jsx(a,{variant:"body2",children:"NM-001"}),e.jsx(a,{variant:"body2",children:"Forklift near-miss"}),e.jsx(a,{variant:"body2",children:"High"}),e.jsx(a,{variant:"body2",color:"success",children:"Closed"})]})]})]})},w={name:"Accessibility: Heading Hierarchy",render:()=>e.jsxs(t,{spacing:2,children:[e.jsx(a,{variant:"overline",color:"textSecondary",children:"Proper heading hierarchy for accessibility (WCAG)"}),e.jsx(a,{variant:"h4",component:"h1",children:"Page Title (h4 style as h1 element)"}),e.jsx(a,{variant:"h5",component:"h2",children:"Section Title (h5 style as h2 element)"}),e.jsx(a,{variant:"h6",component:"h3",children:"Subsection Title (h6 style as h3 element)"}),e.jsx(a,{variant:"body1",children:"Content paragraph following the heading hierarchy."})]})};var P,F,E;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Type Scale',
  render: () => <Box sx={{
    maxWidth: 1100
  }}>
      {/* ── Type Scale ──────────────────────────────── */}
      <RavenTypography variant="h5" gutterBottom>
        Raven Typography Scale
      </RavenTypography>
      <RavenTypography variant="body2" color="textSecondary" sx={{
      mb: 4
    }}>
        Font family: Source Sans 3 &middot; Fallback: Roboto, Helvetica, Arial, sans-serif
        &middot; {'\\u2605'} = Custom Raven variant
      </RavenTypography>

      {TYPE_SCALE.map(spec => <Box key={spec.variant} sx={specRowStyle}>
          <Box>
            <RavenTypography variant={spec.variant} display="block">
              {spec.sample}
            </RavenTypography>
          </Box>

          <Box>
            <Box sx={{
          display: 'inline-block',
          backgroundColor: '#F3E5F5',
          borderRadius: '4px',
          px: 1,
          py: 0.25,
          mb: 1.5
        }}>
              <Box sx={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            color: '#4A148C'
          }}>
                {spec.label}
              </Box>
            </Box>

            <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px 16px'
        }}>
              <SpecDetail label="Font Size" value={\`\${spec.sizePx} (\${spec.size})\`} />
              <SpecDetail label="Weight" value={\`\${spec.weight} (\${spec.weightName})\`} />
              <SpecDetail label="Line Height (Leading)" value={spec.lineHeight} />
              <SpecDetail label="Leading (px)" value={spec.leadingPx} />
              <SpecDetail label="Letter Spacing (Kerning)" value={spec.letterSpacing} />
              <SpecDetail label="Text Transform" value={spec.textTransform} />
              <SpecDetail label="HTML Element" value={spec.element} />
              <SpecDetail label="Figma Style" value={spec.figmaStyle} />
            </Box>
          </Box>
        </Box>)}

      {/* ── Specifications Table ────────────────────── */}
      <Divider sx={{
      my: 6
    }} />

      <RavenTypography variant="h5" gutterBottom>
        Typography Specifications Reference
      </RavenTypography>
      <RavenTypography variant="body2" color="textSecondary" sx={{
      mb: 3
    }}>
        Complete token reference for every Raven typography variant. All values sourced from Figma
        design file and ravenNearMissTheme.
      </RavenTypography>

      <Box sx={{
      overflow: 'auto'
    }}>
        <Box component="table" sx={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
          <Box component="thead" sx={{
          backgroundColor: '#FDFAFE'
        }}>
            <Box component="tr">
              <Box component="th" sx={thCell}>Variant</Box>
              <Box component="th" sx={thCell}>Size (rem)</Box>
              <Box component="th" sx={thCell}>Size (px)</Box>
              <Box component="th" sx={thCell}>Weight</Box>
              <Box component="th" sx={thCell}>Line Height</Box>
              <Box component="th" sx={thCell}>Leading (px)</Box>
              <Box component="th" sx={thCell}>Kerning</Box>
              <Box component="th" sx={thCell}>Transform</Box>
              <Box component="th" sx={thCell}>Element</Box>
            </Box>
          </Box>
          <Box component="tbody">
            {TYPE_SCALE.map((spec, i) => <Box component="tr" key={spec.variant} sx={{
            backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FDFAFE'
          }}>
                <Box component="td" sx={{
              ...tdCell,
              fontWeight: 600,
              color: '#4A148C'
            }}>
                  {spec.label}
                </Box>
                <Box component="td" sx={tdCellMono}>{spec.size}</Box>
                <Box component="td" sx={tdCellMono}>{spec.sizePx}</Box>
                <Box component="td" sx={tdCell}>{spec.weight} ({spec.weightName})</Box>
                <Box component="td" sx={tdCellMono}>{spec.lineHeight}</Box>
                <Box component="td" sx={tdCellMono}>{spec.leadingPx}</Box>
                <Box component="td" sx={tdCellMono}>{spec.letterSpacing}</Box>
                <Box component="td" sx={tdCell}>{spec.textTransform}</Box>
                <Box component="td" sx={tdCellMono}>{spec.element}</Box>
              </Box>)}
          </Box>
        </Box>
      </Box>

      {/* ── Glossary ────────────────────────────────── */}
      <Box sx={{
      mt: 4
    }}>
        <RavenTypography variant="h6" gutterBottom>
          Glossary
        </RavenTypography>
        <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        backgroundColor: '#FDFAFE',
        border: '1px solid #F3E5F5',
        borderRadius: '8px',
        p: 3
      }}>
          <Box>
            <Box sx={specLabelStyle}>Font Size</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              The size of the type in rem (relative to root 16px) and absolute pixels.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Weight</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              CSS font-weight. 300 = Light, 400 = Regular, 500 = Medium, 600 = SemiBold.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Line Height (Leading)</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              Vertical distance between baselines. Unitless values are multipliers of font size; px values are absolute.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Leading (px)</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              Computed line height in pixels. For unitless values: fontSize &times; multiplier.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Letter Spacing (Kerning)</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              Extra space added between characters. Negative values tighten; positive values loosen.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Text Transform</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              CSS text-transform. &quot;UPPERCASE&quot; forces all-caps; &quot;none&quot; preserves original case.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>HTML Element</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              Default semantic element rendered via variantMapping. Override with the component prop.
            </Box>
          </Box>
          <Box>
            <Box sx={specLabelStyle}>Figma Style</Box>
            <Box sx={{
            ...specValueStyle,
            mt: '4px'
          }}>
              Corresponding Figma text style name from the Near-Miss design file. &quot;&mdash;&quot; means no direct Figma match.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var k,z,L;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Headings',
  render: () => <Stack spacing={2}>
      <RavenTypography variant="h1">h1. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h2">h2. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h3">h3. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h4">h4. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h5">h5. Heading</RavenTypography>
      <Divider />
      <RavenTypography variant="h6">h6. Heading</RavenTypography>
    </Stack>
}`,...(L=(z=x.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var q,D,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Body Variants',
  render: () => <Stack spacing={3}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1 (default)
        </RavenTypography>
        <RavenTypography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1Bold (custom)
        </RavenTypography>
        <RavenTypography variant="body1Bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body2
        </RavenTypography>
        <RavenTypography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </RavenTypography>
      </Box>
    </Stack>
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var N,M,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Subtitle Variants',
  render: () => <Stack spacing={2}>
      <RavenTypography variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </RavenTypography>
      <RavenTypography variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </RavenTypography>
    </Stack>
}`,...(W=(M=y.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var V,I,U;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Custom Raven Variants',
  render: () => <Stack spacing={3}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          body1Bold — used for emphasized chat messages and section labels
        </RavenTypography>
        <RavenTypography variant="body1Bold">
          What happened? Please include time &amp; date.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          tableHeader — used for data table column headers
        </RavenTypography>
        <Stack direction="row" spacing={4}>
          <RavenTypography variant="tableHeader">Incident ID</RavenTypography>
          <RavenTypography variant="tableHeader">Description</RavenTypography>
          <RavenTypography variant="tableHeader">Status</RavenTypography>
          <RavenTypography variant="tableHeader">Assigned To</RavenTypography>
        </Stack>
      </Box>
    </Stack>
}`,...(U=(I=g.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var Q,G,K;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Utility Variants',
  render: () => <Stack spacing={2}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          button
        </RavenTypography>
        <RavenTypography variant="button" display="block">
          Submit Report
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          caption
        </RavenTypography>
        <RavenTypography variant="caption" display="block">
          Last updated: 2 minutes ago
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          overline
        </RavenTypography>
        <RavenTypography variant="overline" display="block">
          Equipment Details
        </RavenTypography>
      </Box>
    </Stack>
}`,...(K=(G=u.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var O,_,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Colors',
  render: () => <Stack spacing={1}>
      <RavenTypography color="primary">primary — Brand purple</RavenTypography>
      <RavenTypography color="secondary">secondary — Deep purple</RavenTypography>
      <RavenTypography color="textPrimary">
        textPrimary — rgba(0,0,0,0.87)
      </RavenTypography>
      <RavenTypography color="textSecondary">
        textSecondary — rgba(0,0,0,0.6)
      </RavenTypography>
      <RavenTypography color="textDisabled">
        textDisabled — rgba(0,0,0,0.42)
      </RavenTypography>
      <RavenTypography color="success">success — Green</RavenTypography>
      <RavenTypography color="error">error — Red</RavenTypography>
      <RavenTypography color="warning">warning — Orange</RavenTypography>
      <RavenTypography color="info">info — Blue</RavenTypography>
    </Stack>
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var Y,J,X;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Alignment',
  render: () => <Stack spacing={2}>
      <RavenTypography align="left">Left aligned text</RavenTypography>
      <RavenTypography align="center">Center aligned text</RavenTypography>
      <RavenTypography align="right">Right aligned text</RavenTypography>
      <RavenTypography align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </RavenTypography>
    </Stack>
}`,...(X=(J=b.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,ae;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Gutter Bottom',
  render: () => <Box sx={{
    border: '1px dashed #E0E0E0',
    p: 2
  }}>
      <RavenTypography variant="h5" gutterBottom>
        With gutterBottom
      </RavenTypography>
      <RavenTypography variant="body1">
        This paragraph follows a heading with gutterBottom enabled, adding
        a small bottom margin for visual separation.
      </RavenTypography>
    </Box>
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'No Wrap (Truncation)',
  render: () => <Box sx={{
    width: 300,
    border: '1px dashed #E0E0E0',
    p: 2
  }}>
      <RavenTypography noWrap>
        This is a very long text that will be truncated with an ellipsis when it
        overflows the container width of 300 pixels.
      </RavenTypography>
    </Box>
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Paragraph',
  render: () => <Box>
      <RavenTypography paragraph>
        First paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Quos blanditiis tenetur unde suscipit.
      </RavenTypography>
      <RavenTypography paragraph>
        Second paragraph. Quam beatae rerum inventore consectetur, neque
        doloribus, cupiditate numquam dignissimos laborum.
      </RavenTypography>
      <RavenTypography>
        Third block without paragraph spacing.
      </RavenTypography>
    </Box>
}`,...(se=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,pe,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Semantic Element Override',
  render: () => <Stack spacing={2}>
      <RavenTypography variant="h1" component="h2">
        h1 variant rendered as h2 element
      </RavenTypography>
      <RavenTypography variant="h6" component="span">
        h6 variant rendered as span element
      </RavenTypography>
      <RavenTypography variant="body1" component="div">
        body1 variant rendered as div element
      </RavenTypography>
    </Stack>
}`,...(de=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,he,xe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Theme Keys',
  render: () => <Box sx={theme => ({
    ...theme.typography.button,
    backgroundColor: '#F3E5F5',
    padding: theme.spacing(2),
    borderRadius: 2,
    color: '#4A148C'
  })}>
      {"This div's text uses the button typography theme key."}
    </Box>
}`,...(xe=(he=f.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var me,ye,ge;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Raven Product Patterns',
  render: () => <Stack spacing={4}>
      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Section Header (overline)
        </RavenTypography>
        <RavenTypography variant="overline" color="primary" display="block">
          Report Information
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Page Title (h4)
        </RavenTypography>
        <RavenTypography variant="h4">
          Analysis Dashboard
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Card Title (h6)
        </RavenTypography>
        <RavenTypography variant="h6">
          Near-Miss Incident Summary
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Chat Message (body1 + body1Bold)
        </RavenTypography>
        <RavenTypography variant="body1Bold" gutterBottom>
          Hi Ramesh!
        </RavenTypography>
        <RavenTypography variant="body1">
          I'll help you report the near-miss incident quickly and easily.
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Form Label + Helper (caption)
        </RavenTypography>
        <RavenTypography variant="body2" gutterBottom>
          Date of Incident
        </RavenTypography>
        <RavenTypography variant="caption" color="textSecondary">
          Select when the near-miss event occurred
        </RavenTypography>
      </Box>

      <Box>
        <RavenTypography variant="overline" color="textSecondary">
          Table Headers (tableHeader)
        </RavenTypography>
        <Stack direction="row" spacing={6} sx={{
        borderBottom: '1px solid #E0E0E0',
        pb: 1
      }}>
          <RavenTypography variant="tableHeader">ID</RavenTypography>
          <RavenTypography variant="tableHeader">Description</RavenTypography>
          <RavenTypography variant="tableHeader">Severity</RavenTypography>
          <RavenTypography variant="tableHeader">Status</RavenTypography>
        </Stack>
        <Stack direction="row" spacing={6} sx={{
        pt: 1
      }}>
          <RavenTypography variant="body2">NM-001</RavenTypography>
          <RavenTypography variant="body2">Forklift near-miss</RavenTypography>
          <RavenTypography variant="body2">High</RavenTypography>
          <RavenTypography variant="body2" color="success">Closed</RavenTypography>
        </Stack>
      </Box>
    </Stack>
}`,...(ge=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ue,ve,be;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Accessibility: Heading Hierarchy',
  render: () => <Stack spacing={2}>
      <RavenTypography variant="overline" color="textSecondary">
        Proper heading hierarchy for accessibility (WCAG)
      </RavenTypography>
      <RavenTypography variant="h4" component="h1">
        Page Title (h4 style as h1 element)
      </RavenTypography>
      <RavenTypography variant="h5" component="h2">
        Section Title (h5 style as h2 element)
      </RavenTypography>
      <RavenTypography variant="h6" component="h3">
        Subsection Title (h6 style as h3 element)
      </RavenTypography>
      <RavenTypography variant="body1">
        Content paragraph following the heading hierarchy.
      </RavenTypography>
    </Stack>
}`,...(be=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Ae=["TypeScale","Headings","BodyVariants","SubtitleVariants","CustomRavenVariants","UtilityVariants","Colors","Alignment","GutterBottom","NoWrap","Paragraph","SemanticElement","ThemeKeys","RavenProductPatterns","HeadingHierarchy"];export{b as Alignment,m as BodyVariants,v as Colors,g as CustomRavenVariants,T as GutterBottom,w as HeadingHierarchy,x as Headings,S as NoWrap,R as Paragraph,j as RavenProductPatterns,B as SemanticElement,y as SubtitleVariants,f as ThemeKeys,h as TypeScale,u as UtilityVariants,Ae as __namedExportsOrder,De as default};
