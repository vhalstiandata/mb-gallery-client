"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[912],{2960:(e,t,n)=>{n.d(t,{default:()=>u}),n(2265);var r=n(5735),l=n(7547),o=n(2737);function u(){let e=(0,r.default)(l.Z);return e[o.Z]||e}},5158:(e,t,n)=>{n.d(t,{V:()=>u,Z:()=>a});var r=n(2265),l=n(7437);let o=r.createContext(),u=()=>r.useContext(o)??!1,a=function({value:e,...t}){return(0,l.jsx)(o.Provider,{value:e??!0,...t})}},5702:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(2265),l=n(4839),o=n(424),u=n(587),a=n(6990),s=n(8718),i=n(8762),c=n(261),f=n(9812),d=n(1911),v=n(9099),p=n(7437);let m=(0,f.Z)(),Z=(0,s.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,i.default)({props:e,name:"MuiStack",defaultTheme:m})}let h=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],k=({ownerState:e,theme:t})=>{let n={display:"flex",flexDirection:"column",...(0,d.k9)({theme:t},(0,d.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let r=(0,v.hB)(t),l=Object.keys(t.breakpoints.values).reduce((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t),{}),u=(0,d.P$)({values:e.direction,base:l}),a=(0,d.P$)({values:e.spacing,base:l});"object"==typeof u&&Object.keys(u).forEach((e,t,n)=>{if(!u[e]){let r=t>0?u[n[t-1]]:"column";u[e]=r}}),n=(0,o.Z)(n,(0,d.k9)({theme:t},a,(t,n)=>e.useFlexGap?{gap:(0,v.NA)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${h(n?u[n]:e.direction)}`]:(0,v.NA)(r,t)}}))}return(0,d.dt)(t.breakpoints,n)};function N(e={}){let{createStyledComponent:t=Z,useThemeProps:n=y,componentName:o="MuiStack"}=e,s=()=>(0,a.Z)({root:["root"]},e=>(0,u.ZP)(o,e),{}),i=t(k);return r.forwardRef(function(e,t){let o=n(e),{component:u="div",direction:a="column",spacing:f=0,divider:d,children:v,className:m,useFlexGap:Z=!1,...y}=(0,c.Z)(o),h=s();return(0,p.jsx)(i,{as:u,ownerState:{direction:a,spacing:f,useFlexGap:Z},ref:t,className:(0,l.Z)(h.root,m),...y,children:d?function(e,t){let n=r.Children.toArray(e).filter(Boolean);return n.reduce((e,l,o)=>(e.push(l),o<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e),[])}(v,d):v})})}},4929:(e,t,n)=>{n.d(t,{default:()=>c});var r=n(2265),l=n(4839),o=n(3992),u=n(7267),a=n(261),s=n(5735),i=n(7437);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:n,defaultClassName:c="MuiBox-root",generateClassName:f}=e,d=(0,o.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(u.Z);return r.forwardRef(function(e,r){let o=(0,s.default)(n),{className:u,component:v="div",...p}=(0,a.Z)(e);return(0,i.jsx)(d,{as:v,ref:r,className:(0,l.Z)(u,f?f(c):c),theme:t&&o[t]||o,...p})})}},8718:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(4788).ZP)()},9430:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3075);function l(e){let{theme:t,name:n,props:l}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?(0,r.Z)(t.components[n].defaultProps,l):l}},8762:(e,t,n)=>{n.d(t,{default:()=>o});var r=n(9430),l=n(5735);function o(e){let{props:t,name:n,defaultTheme:o,themeId:u}=e,a=(0,l.default)(o);return u&&(a=a[u]||a),(0,r.Z)({theme:a,name:n,props:t})}},7754:(e,t,n)=>{n.d(t,{Z:()=>r});let r=function(e,t,n){return void 0===e||"string"==typeof e?t:{...t,ownerState:{...t.ownerState,...n}}}},2044:(e,t,n)=>{n.d(t,{Z:()=>r});let r=function(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},4686:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2265);function l(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)}},7664:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(4839),l=n(2044);let o=function(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t},u=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:u,externalForwardedProps:a,className:s}=e;if(!t){let e=(0,r.Z)(n?.className,s,a?.className,u?.className),t={...n?.style,...a?.style,...u?.style},l={...n,...a,...u};return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}let i=(0,l.Z)({...a,...u}),c=o(u),f=o(a),d=t(i),v=(0,r.Z)(d?.className,n?.className,s,a?.className,u?.className),p={...d?.style,...n?.style,...a?.style,...u?.style},m={...d,...n,...f,...c};return v.length>0&&(m.className=v),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:d.ref}}},8507:(e,t,n)=>{n.d(t,{Z:()=>r});let r=function(e,t,n){return"function"==typeof e?e(t,n):e}},1519:(e,t,n)=>{n.d(t,{default:()=>l});var r=n(2265);function l(e){let{controlled:t,default:n,name:l,state:o="value"}=e,{current:u}=r.useRef(void 0!==t),[a,s]=r.useState(n),i=r.useCallback(e=>{u||s(e)},[]);return[u?t:a,i]}},292:(e,t,n)=>{n.d(t,{default:()=>a});var r,l=n(2265);let o=0,u={...r||(r=n.t(l,2))}.useId;function a(e){if(void 0!==u){let t=u();return null!=e?e:t}return function(e){let[t,n]=l.useState(e),r=e||t;return l.useEffect(()=>{null==t&&(o+=1,n("mui-".concat(o)))},[t]),r}(e)}},3331:(e,t,n)=>{n.d(t,{default:()=>l});var r=n(2265);let l=e=>{let t=r.useRef({});return r.useEffect(()=>{t.current=e}),t.current}},608:(e,t,n)=>{n.d(t,{default:()=>a});var r=n(7740),l=n(7754),o=n(7664),u=n(8507);let a=function(e){var t;let{elementType:n,externalSlotProps:a,ownerState:s,skipResolvingSlotProps:i=!1,...c}=e,f=i?{}:(0,u.Z)(a,s),{props:d,internalRef:v}=(0,o.Z)({...c,externalSlotProps:f}),p=(0,r.default)(v,null==f?void 0:f.ref,null===(t=e.additionalProps)||void 0===t?void 0:t.ref);return(0,l.Z)(n,{...d,ref:p},s)}}}]);