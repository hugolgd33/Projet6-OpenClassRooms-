"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[386],{9386:(e,t,n)=>{function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,o,a,i=[],u=!0,m=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(l=o.call(n)).done)&&(i.push(l.value),i.length!==t);u=!0);}catch(e){m=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(m)throw r}}return i}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}n.r(t),n.d(t,{default:()=>E});var i=JetFBComponents,u=i.AdvancedModalControl,m=i.ServerSideMacros,c=JetFBActions,s=(c.addAction,c.getFormFieldsBlocks),f=c.Tools.withPlaceholder,p=wp.components,d=p.TextControl,_=p.TextareaControl,h=p.SelectControl,y=p.FormTokenField,v=p.BaseControl,b=wp.element,w=b.useState,C=b.useEffect,g=JetFBHooks.withRequestFields;const E=(0,wp.data.withSelect)(g)((function(e){var t=e.settings,n=e.source,o=e.label,a=e.help,i=e.onChangeSetting,c=e.onChangeSettingObj,p=e.requestFields,b=r(w([]),2),g=b[0],E=b[1],S=r(w([]),2),j=S[0],k=S[1];return C((function(){var e=[].concat(l(s()),l(p));E(e),k(e.map((function(e){return e.value})))}),[]),wp.element.createElement(React.Fragment,null,wp.element.createElement(m,null,wp.element.createElement(h,{key:"mail_to",labelPosition:"side",className:"full-width",value:t.mail_to,options:n.mailTo,label:o("mail_to"),help:a("mail_to"),onChange:function(e){i(e,"mail_to")}}),"custom"===t.mail_to&&wp.element.createElement(d,{key:"custom_email",value:t.custom_email,label:o("custom_email"),help:a("custom_email"),onChange:function(e){i(e,"custom_email")}}),"form"===t.mail_to&&wp.element.createElement(h,{key:"from_field",labelPosition:"side",className:"full-width",value:t.from_field,options:f(g),label:o("from_field"),help:a("from_field"),onChange:function(e){i(e,"from_field")}}),wp.element.createElement(h,{key:"reply_to",labelPosition:"side",className:"full-width",value:t.reply_to,options:n.replyTo,label:o("reply_to"),help:a("reply_to"),onChange:function(e){i(e,"reply_to")}}),"custom"===t.reply_to&&wp.element.createElement(u,{value:t.reply_to_email,label:o("reply_to_email"),macroWithCurrent:!0,onChangeMacros:function(e){var n;return c({reply_to_email:(null!==(n=null==t?void 0:t.reply_to_email)&&void 0!==n?n:"")+e})}},wp.element.createElement(d,{value:t.reply_to_email,help:a("reply_to_email"),onChange:function(e){return c({reply_to_email:e})}})),"form"===t.reply_to&&wp.element.createElement(h,{key:"reply_from_field",labelPosition:"side",className:"full-width",value:t.reply_from_field,options:f(g),label:o("reply_from_field"),help:a("reply_from_field"),onChange:function(e){i(e,"reply_from_field")}}),wp.element.createElement(u,{value:t.subject,label:o("subject"),macroWithCurrent:!0,onChangeMacros:function(e){var n;return c({subject:(null!==(n=null==t?void 0:t.subject)&&void 0!==n?n:"")+e})}},wp.element.createElement(d,{value:t.subject,help:a("subject"),onChange:function(e){return c({subject:e})}})),wp.element.createElement(u,{value:t.from_name,label:o("from_name"),macroWithCurrent:!0,onChangeMacros:function(e){var n;return c({from_name:(null!==(n=null==t?void 0:t.from_name)&&void 0!==n?n:"")+e})}},wp.element.createElement(d,{value:t.from_name,help:a("from_name"),onChange:function(e){return c({from_name:e})}})),wp.element.createElement(u,{value:t.from_address,label:o("from_address"),macroWithCurrent:!0,onChangeMacros:function(e){var n;return c({from_address:(null!==(n=null==t?void 0:t.from_address)&&void 0!==n?n:"")+e})}},wp.element.createElement(d,{value:t.from_address,help:a("from_address"),onChange:function(e){return c({from_address:e})}})),wp.element.createElement(h,{key:"content_type",labelPosition:"side",className:"full-width",value:t.content_type,options:n.content_type,label:o("content_type"),help:a("content_type"),onChange:function(e){return i(e,"content_type")}}),wp.element.createElement(u,{value:t.content,label:o("content"),macroWithCurrent:!0,onChangeMacros:function(e){var n;return c({content:(null!==(n=null==t?void 0:t.content)&&void 0!==n?n:"")+e})}},wp.element.createElement(_,{value:t.content,help:a("content"),onChange:function(e){return c({content:e})}}))),wp.element.createElement(v,{label:o("attachments"),className:"control-flex"},wp.element.createElement(y,{label:o("add_attachment"),value:t.attachments,suggestions:j,onChange:function(e){return c({attachments:l(new Set(e))})},tokenizeOnSpace:!0})))}))}}]);