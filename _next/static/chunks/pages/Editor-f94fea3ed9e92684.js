(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{2919:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Editor",function(){return t(4589)}])},1639:function(n,e,t){"use strict";t.d(e,{z:function(){return p}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n  width: fit-content;\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return s=function(){return n},n}function l(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return l=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=o.ZP.button.withConfig({componentId:"sc-96b76b10-0"})(s(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=o.ZP.div.withConfig({componentId:"sc-96b76b10-1"})(l()),p=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,i.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:e})}))}},4589:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return De}});var r=t(5893),i=t(7294),o=t(9008),c=t(4931),u=t(1664),a=t.n(u),s=t(2125),l=t(9327),f=t(9352),d=t(471),p=t(8193);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function x(){var n=m(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return x=function(){return n},n}function g(){var n=m(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 20%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",";\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return g=function(){return n},n}function v(){var n=m([""]);return v=function(){return n},n}var j=s.ZP.div.withConfig({componentId:"sc-5cff3129-0"})(x()),y=s.ZP.div.withConfig({componentId:"sc-5cff3129-1"})(g(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"})),w=s.ZP.div.withConfig({componentId:"sc-5cff3129-2"})(v()),O=function(n){var e=n.children,t=n.title,o=b(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(j,{children:[(0,r.jsx)(y,{visible:c,children:t}),(0,r.jsx)(w,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},C=t(5623),E=t(2971),I=t(1163),A=t(1639);function P(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(){var n=P(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return S=function(){return n},n}function R(){var n=P(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 6;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return R=function(){return n},n}function N(){var n=P(["\n  min-width: 440px;\n  max-width: 70%;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n"]);return N=function(){return n},n}function T(){var n=P(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return T=function(){return n},n}function _(){var n=P(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return _=function(){return n},n}function z(){var n=P(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden scroll;\n"]);return z=function(){return n},n}function Z(){var n=P(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return Z=function(){return n},n}var k=(0,s.F4)(S()),D=s.ZP.div.withConfig({componentId:"sc-d86e118a-0"})(R()),G=s.ZP.div.withConfig({componentId:"sc-d86e118a-1"})(N(),k),L=s.ZP.h2.withConfig({componentId:"sc-d86e118a-2"})(T(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),U=s.ZP.div.withConfig({componentId:"sc-d86e118a-3"})(_(),(function(n){return n.theme.MODAL_BACKGROUND})),V=s.ZP.div.withConfig({componentId:"sc-d86e118a-4"})(z(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),J=s.ZP.div.withConfig({componentId:"sc-d86e118a-5"})(Z(),(function(n){return n.theme.BACKGROUND_SECONDARY})),M=function(n){var e=n.children,t=n.visible,i=n.setVisible;return t?(0,r.jsx)(D,{onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(G,{children:e})}):null};function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function K(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return B(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Y(){var n=F(["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 12px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 30px;\n"]);return Y=function(){return n},n}function H(){var n=F(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}function X(){var n=F(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border: 2px dashed ",';\n  border-radius: 5px;\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return X=function(){return n},n}function $(){var n=F(["\n  color: ",";\n"]);return $=function(){return n},n}function W(){var n=F(["\n  color: ",";\n  margin-bottom: 0;\n"]);return W=function(){return n},n}M.Header=function(n){var e=n.children;return(0,r.jsx)(U,{children:(0,r.jsx)(L,{children:e})})},M.Content=function(n){var e=n.children;return(0,r.jsx)(V,{children:e})},M.Controls=function(n){var e=n.children,t=n.setVisible;return(0,r.jsxs)(J,{children:[(0,r.jsx)(A.z,{onClick:function(){return t(!1)},children:"Close"}),e]})};var q=s.ZP.input.withConfig({componentId:"sc-741e717b-0"})(Y(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),Q=(0,s.ZP)(M.Content).withConfig({componentId:"sc-741e717b-1"})(H()),nn=s.ZP.label.withConfig({componentId:"sc-741e717b-2"})(X(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),en=s.ZP.span.withConfig({componentId:"sc-741e717b-3"})($(),(function(n){return n.theme.INTERACTIVE_NORMAL})),tn=s.ZP.h3.withConfig({componentId:"sc-741e717b-4"})(W(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),rn=function(n){var e,t=n.visible,o=n.setVisible,u=(0,E.ZR)().dispatch,a=K(i.useState(""),2),s=a[0],l=a[1],f=K(i.useState(null),2),d=f[0],h=f[1];return i.useEffect((function(){return function(){h(null),l("")}}),[t]),(0,r.jsxs)(M,{visible:t,setVisible:o,children:[(0,r.jsx)(M.Header,{children:"Import JSON"}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(q,{value:s,onChange:function(n){return l(n.target.value)},type:"url",placeholder:"URL of JSON to fetch"}),(0,r.jsxs)(nn,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&h(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===d||void 0===d?void 0:d.name),(0,r.jsx)(p.aBR,{size:48}),(0,r.jsx)(tn,{children:"Click Here to Upload JSON"}),(0,r.jsx)(en,{children:null!==(e=null===d||void 0===d?void 0:d.name)&&void 0!==e?e:"None"})]})]}),(0,r.jsx)(M.Controls,{setVisible:o,children:(0,r.jsx)(A.z,{status:"SECONDARY",onClick:function(){if(s)return h(null),c.ZP.loading("Loading...",{id:"toastFetch"}),fetch(s).then((function(n){return n.json()})).then((function(n){u({type:C.n.SET_JSON,payload:JSON.stringify(n)}),o(!1)})).catch((function(){return c.ZP.error("Failed to fetch JSON!")})).finally((function(){return c.ZP.dismiss("toastFetch")}));if(d){var n=new FileReader;n.readAsText(d,"UTF-8"),n.onload=function(n){var e;u({type:C.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result}),o(!1)}}},disabled:!(d||s),children:"Import"})})]})},on=function(n){var e=n.visible,t=n.setVisible,i=(0,E.ZR)().dispatch;return(0,r.jsxs)(M,{visible:e,setVisible:t,children:[(0,r.jsx)(M.Header,{children:"Clear JSON"}),(0,r.jsx)(M.Content,{children:"Are you sure you want to clear JSON?"}),(0,r.jsx)(M.Controls,{setVisible:t,children:(0,r.jsx)(A.z,{status:"DANGER",onClick:function(){i({type:C.n.SET_JSON,payload:"{}"}),c.ZP.success("Cleared JSON and removed from memory."),t(!1)},children:"Confirm"})})]})},cn=t(1485),un=t(7516),an=t(8305);function sn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ln(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return sn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function dn(){var n=fn(["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  line-height: 32px;\n  padding: 12px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n  height: 30px;\n"]);return dn=function(){return n},n}function pn(){var n=fn([""]);return pn=function(){return n},n}function hn(){var n=fn(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  font-weight: 600;\n"]);return hn=function(){return n},n}var bn=s.ZP.input.withConfig({componentId:"sc-db97879a-0"})(dn(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),mn=s.ZP.p.withConfig({componentId:"sc-db97879a-1"})(pn()),xn=s.ZP.div.withConfig({componentId:"sc-db97879a-2"})(hn(),(function(n){return n.theme.TEXT_DANGER})),gn=function(n){var e=n.visible,t=n.setVisible,o=(0,E.ZR)().json,u=ln(i.useState(""),2),a=u[0],s=u[1],l=ln((0,cn.m9)(),2),f=(l[0],l[1]);i.useEffect((function(){var n=(0,an.nN)(JSON.parse(o)),e=JSON.stringify(n);s("http://localhost:3000/editor?json=".concat(encodeURIComponent(e)))}),[o]);return(0,r.jsxs)(M,{visible:e,setVisible:t,children:[(0,r.jsx)(M.Header,{children:"Create a Share Link"}),(0,r.jsx)(M.Content,{children:a.length>5e3?(0,r.jsxs)(xn,{children:[(0,r.jsx)(un.tJu,{size:60}),(0,r.jsx)(mn,{children:"Link size exceeds 5000 characters, unable to generate link for file of this size!"})]}):(0,r.jsx)(bn,{value:a,type:"url",readOnly:!0})}),(0,r.jsx)(M.Controls,{setVisible:t,children:a.length<5e3&&(0,r.jsx)(A.z,{status:"SECONDARY",onClick:function(){f(a),c.ZP.success("Link copied to clipboard."),t(!1)},children:"Copy"})})]})},vn=t(155);function jn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function yn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return jn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function On(){var n=wn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  background: ",";\n  padding: 4px;\n  border-right: 1px solid ",";\n"]);return On=function(){return n},n}function Cn(){var n=wn(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  ",";\n\n  svg {\n    padding: 8px;\n    vertical-align: middle;\n  }\n\n  a {\n    display: flex;\n  }\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n"]);return Cn=function(){return n},n}function En(){var n=wn(["\n  color: ",";\n"]);return En=function(){return n},n}function In(){var n=wn(["\n  transform: rotate(",");\n"]);return In=function(){return n},n}function An(){var n=wn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return An=function(){return n},n}function Pn(){var n=wn(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return Pn=function(){return n},n}function Sn(){var n=wn(["\n  color: ",";\n"]);return Sn=function(){return n},n}function Rn(){var n=wn(["\n  color: ",";\n"]);return Rn=function(){return n},n}var Nn=s.ZP.div.withConfig({componentId:"sc-562ab152-0"})(On(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),Tn=s.ZP.div.withConfig({componentId:"sc-562ab152-1"})(Cn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){var e=n.theme;return n.beta&&"\n    &::after {\n      position: absolute;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      bottom: 0;\n      right: 0;\n      content: 'Beta';\n      font-size: 10px;\n      font-weight: 500;\n      background: ".concat(e.BLURPLE,";\n      border-radius: 4px;\n      color: ").concat(e.FULL_WHITE,";\n      padding: 2px;\n      height: 14px;\n      z-index: 0;\n    }\n  ")}),(function(n){return n.theme.INTERACTIVE_HOVER})),_n=s.ZP.span.withConfig({componentId:"sc-562ab152-2"})(En(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),zn=(0,s.ZP)(l.S$H).withConfig({componentId:"sc-562ab152-3"})(In(),(function(n){var e=n.rotate;return"".concat(e,"deg")})),Zn=s.ZP.nav.withConfig({componentId:"sc-562ab152-4"})(An(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),kn=s.ZP.nav.withConfig({componentId:"sc-562ab152-5"})(Pn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),Dn=s.ZP.div.withConfig({componentId:"sc-562ab152-6"})(Sn(),(function(n){return n.theme.FULL_WHITE}));var Gn=(0,s.ZP)(vn.iP_).withConfig({componentId:"sc-562ab152-7"})(Rn(),(function(n){return n.theme.ORANGE})),Ln=function(){var n,e=(0,E.ZR)(),t=e.json,o=e.settings,u=e.dispatch,s=(0,I.useRouter)(),l=yn(i.useState(!1),2),h=l[0],b=l[1],m=yn(i.useState(!1),2),x=m[0],g=m[1],v=yn(i.useState(!1),2),j=v[0],y=v[1];return(0,r.jsxs)(Nn,{children:[(0,r.jsxs)(Zn,{children:[(0,r.jsx)(a(),{passHref:!0,href:"/",children:(0,r.jsx)(Tn,{onClick:function(){return s.push("/")},children:(0,r.jsxs)(Dn,{children:[(0,r.jsx)(_n,{children:"J"}),(0,r.jsx)(_n,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(O,{title:"Import File",children:(0,r.jsx)(Tn,{onClick:function(){return b(!0)},children:(0,r.jsx)(p.O1u,{})})}),(0,r.jsx)(O,{title:"Rotate Layout",children:(0,r.jsx)(Tn,{onClick:function(){return u({type:C.n.TOGGLE_LAYOUT})},children:(0,r.jsx)(zn,{rotate:(n=o.layout,"LEFT"===n?90:"UP"===n?180:"RIGHT"===n?270:360)})})}),(0,r.jsx)(O,{title:o.expand?"Shrink Nodes":"Expand Nodes",children:(0,r.jsx)(Tn,{title:"Toggle Expand/Collapse",onClick:function(){u({type:C.n.TOGGLE_EXPAND}),(0,c.ZP)("".concat(o.expand?"Collapsed":"Expanded"," nodes."))},children:o.expand?(0,r.jsx)(d.DUJ,{}):(0,r.jsx)(d.q6J,{})})}),(0,r.jsx)(O,{title:"".concat(o.performance?"Disable":"Enable"," Performance Mode (Beta)"),children:(0,r.jsx)(Tn,{onClick:function(){var n=o.performance?"Disabled Performance Mode\nSearch Node & Save Image enabled.":"Enabled Performance Mode\nSearch Node & Save Image disabled.";(0,c.ZP)(n,{icon:(0,r.jsx)(Gn,{size:36}),duration:3e3}),u({type:C.n.TOGGLE_PERFORMANCE})},beta:!0,children:(0,r.jsx)(d.qvZ,{color:o.performance?"#0073FF":void 0})})}),(0,r.jsx)(O,{title:"Save JSON",children:(0,r.jsx)(Tn,{onClick:function(){var n=document.createElement("a"),e=new Blob([t],{type:"text/plain"});n.href=window.URL.createObjectURL(e),n.download="jsonvisio.json",n.click()},children:(0,r.jsx)(p.JMf,{})})}),(0,r.jsx)(O,{title:"Clear JSON",children:(0,r.jsx)(Tn,{onClick:function(){return g(!0)},children:(0,r.jsx)(p.VPh,{})})}),(0,r.jsx)(O,{title:"Share",children:(0,r.jsx)(Tn,{onClick:function(){return y(!0)},children:(0,r.jsx)(p.uFt,{})})})]}),(0,r.jsxs)(kn,{children:[(0,r.jsx)(Tn,{children:(0,r.jsx)(a(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(p.h3E,{})})})}),(0,r.jsx)(Tn,{children:(0,r.jsx)(a(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(p.RrF,{})})})}),(0,r.jsx)(Tn,{children:(0,r.jsx)(a(),{href:"https://www.patreon.com/aykutsarac",children:(0,r.jsx)("a",{"aria-label":"Patreon",rel:"me",target:"_blank",children:(0,r.jsx)(f.cu7,{})})})})]}),(0,r.jsx)(rn,{visible:h,setVisible:b}),(0,r.jsx)(on,{visible:x,setVisible:g}),(0,r.jsx)(gn,{visible:j,setVisible:y})]})};function Un(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 600;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Un=function(){return t},t}var Vn=s.ZP.div.withConfig({componentId:"sc-132d618-0"})(Un(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),Jn=function(){var n=(0,I.useRouter)();return(0,r.jsxs)(Vn,{children:["This app is not compatible with your device!",(0,r.jsx)(A.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},Mn=t(524);t(7786);function Bn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Kn(){var n=Bn(["\n  display: flex;\n  height: 100vh;\n"]);return Kn=function(){return n},n}function Fn(){var n=Bn(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return Fn=function(){return n},n}function Yn(){var n=Bn(["\n  position: relative !important;\n  display: flex;\n  background: ",';\n\n  div[class*="sash-module_sash"] {\n    z-index: 3;\n  }\n']);return Yn=function(){return n},n}var Hn=s.ZP.div.withConfig({componentId:"sc-60570b21-0"})(Kn()),Xn=s.ZP.div.withConfig({componentId:"sc-60570b21-1"})(Fn()),$n=(0,s.ZP)(Mn.o).withConfig({componentId:"sc-60570b21-2"})(Yn(),(function(n){return n.theme.BACKGROUND_SECONDARY})),Wn=t(9604),qn=t(8485),Qn=t(5434);function ne(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ee(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function te(){var n=ee(["\n  z-index: 5;\n"]);return te=function(){return n},n}function re(){var n=ee(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return re=function(){return n},n}function ie(){var n=ee(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return ie=function(){return n},n}function oe(){var n=ee(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return oe=function(){return n},n}var ce=s.ZP.div.withConfig({componentId:"sc-ac28434b-0"})(te()),ue=s.ZP.button.withConfig({componentId:"sc-ac28434b-1"})(re(),(function(n){var e=n.theme;return n.error?e.TEXT_DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.TEXT_DANGER})),ae=s.ZP.span.withConfig({componentId:"sc-ac28434b-2"})(ie()),se=s.ZP.pre.withConfig({componentId:"sc-ac28434b-3"})(oe(),(function(n){return n.theme.TEXT_DANGER}),(function(n){return n.theme.SILVER_DARK})),le=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(ce,{children:[(0,r.jsxs)(ue,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){ne(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(ae,{children:[e.message?(0,r.jsx)(Qn.pKf,{size:20}):(0,r.jsx)(Qn.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(Qn.Faw,{size:22}):(0,r.jsx)(Qn.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(se,{children:e.message})]})};function fe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function de(){var n=fe(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return de=function(){return n},n}function pe(){var n=fe(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return pe=function(){return n},n}function he(){var n=fe(["\n  color: #faa81a;\n"]);return he=function(){return n},n}function be(){var n=fe(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return be=function(){return n},n}var me=s.ZP.div.withConfig({componentId:"sc-40c9a20d-0"})(de(),(function(n){return n.theme.BLACK_DARK})),xe=s.ZP.h2.withConfig({componentId:"sc-40c9a20d-1"})(pe()),ge=s.ZP.span.withConfig({componentId:"sc-40c9a20d-2"})(he()),ve=s.ZP.div.withConfig({componentId:"sc-40c9a20d-3"})(be()),je=function(n){var e=n.message;return(0,r.jsxs)(me,{children:[(0,r.jsxs)(xe,{children:[(0,r.jsx)(ge,{children:"JSON"})," Visio"]}),(0,r.jsx)(ve,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})};function ye(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function we(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Oe(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){we(n,e,t[e])}))}return n}function Ce(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return ye(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Ie(){var n=Ee(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"]);return Ie=function(){return n},n}function Ae(){var n=Ee(["\n  display: grid;\n  height: calc(100vh - 36px);\n  grid-template-columns: 100%;\n  grid-template-rows: minmax(0, 1fr);\n"]);return Ae=function(){return n},n}Wn._m.config({paths:{vs:"/monaco-editor/min/vs"}});var Pe=s.ZP.div.withConfig({componentId:"sc-86762aac-0"})(Ie()),Se={formatOnPaste:!0,minimap:{enabled:!1}},Re=s.ZP.div.withConfig({componentId:"sc-86762aac-1"})(Ae()),Ne=function(){var n=(0,E.ZR)(),e=n.json,t=n.settings,o=n.dispatch,c=Ce(i.useState(""),2),u=c[0],a=c[1],s=Ce(i.useState({message:"",isExpanded:!0}),2),l=s[0],f=s[1],d=i.useMemo((function(){return t.lightmode?"light":"vs-dark"}),[t.lightmode]);return i.useEffect((function(){a(JSON.stringify(JSON.parse(e),null,2))}),[e]),i.useEffect((function(){var n=setTimeout((function(){try{if(!u)return f((function(n){return Oe({},n,{message:""})})),o({type:C.n.SET_JSON,payload:"[]"});(0,qn.Z)(u),o({type:C.n.SET_JSON,payload:u}),f((function(n){return Oe({},n,{message:""})}))}catch(n){f((function(e){return Oe({},e,{message:n.message})}))}}),1500);return function(){return clearTimeout(n)}}),[u,o]),(0,r.jsxs)(Pe,{children:[(0,r.jsx)(le,{error:l,setError:f}),(0,r.jsx)(Re,{children:(0,r.jsx)(Wn.ZP,{height:"100%",defaultLanguage:"json",value:u,theme:d,options:Se,loading:(0,r.jsx)(je,{message:"Loading Editor..."}),onChange:function(n){return a(n)}})})]})},Te=(0,t(5152).default)((function(){return Promise.all([t.e(556),t.e(434),t.e(987),t.e(240),t.e(395)]).then(t.bind(t,8395))}),{loadableGenerated:{webpack:function(){return[8395]}},ssr:!1}),_e=function(){var n=(0,E.ZR)().settings;return(0,r.jsxs)($n,{children:[(0,r.jsx)(Mn.o.Pane,{preferredSize:400,minSize:300,maxSize:600,visible:!n.hideEditor,children:(0,r.jsx)(Ne,{})}),(0,r.jsx)(Mn.o.Pane,{children:(0,r.jsx)(Te,{})})]})},ze=function(){return(0,r.jsxs)(Hn,{children:[(0,r.jsx)(Ln,{}),(0,r.jsx)(Xn,{children:(0,r.jsx)(_e,{})}),(0,r.jsx)(Jn,{})]})};function Ze(){var n,e,t=(n=[""],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Ze=function(){return t},t}var ke=s.ZP.div.withConfig({componentId:"sc-d6876296-0"})(Ze()),De=function(){return(0,r.jsxs)(ke,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Editor | JSON Visio"}),(0,r.jsx)("meta",{name:"description",content:"View your JSON data in graphs instantly."})]}),(0,r.jsx)(ze,{})]})}}},function(n){n.O(0,[774,90,937,228,260,955,874,617,831,951,888,179],(function(){return e=2919,n(n.s=e);var e}));var e=n.O();_N_E=e}]);