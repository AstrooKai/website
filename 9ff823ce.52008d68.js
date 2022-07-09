(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{410:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(3),r=(t(0),t(618));const o={title:"$oldChannel"},l={unversionedId:"functions/oldchannel",id:"functions/oldchannel",isDocsHomePage:!1,title:"$oldChannel",description:"This function is only usable in onChannelUpdate and onChannelDelete. Examples can be found in the callback page.",source:"@site/docs/functions/oldchannel.md",slug:"/functions/oldchannel",permalink:"/docs/functions/oldchannel",version:"current",sidebar:"someSidebar",previous:{title:"$numberSeparator",permalink:"/docs/functions/numberseparator"},next:{title:"$oldPresence",permalink:"/docs/functions/oldpresence"}},i=[{value:"Options",id:"options",children:[]}],c={toc:i};function b(e){let{components:n,...t}=e;return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function is only usable in ",Object(r.b)("a",{parentName:"p",href:"/docs/events/bot.onchannelupdate"},"onChannelUpdate")," and ",Object(r.b)("a",{parentName:"p",href:"/docs/events/bot.onchanneldelete"},"onChannelDelete"),". Examples can be found in the callback page."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$oldChannel[option]\n")),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - The ID of the channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - The name of the channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"topic")," - The topic for this channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"position")," - The position of the channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"categoryID")," - The ID of the category this channel belongs to "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"guildID")," - The ID of the guild this channel belongs to "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lastMessageID")," - The ID of the last message sent here ","(","if any",")"," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," - The type of this channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nsfw")," - Whether the channel is nsfw or not "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slowmode")," - The slowmode duration for this channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"rawPosition")," - The raw position for this channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleted")," - Whether the channel was deleted or not "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"viewable")," - Whether the channel was be seen by the client or not "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"manageable")," - Whether the client can or not manage this channel "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteable")," - Whether this channel can be deleted by the client or not ")))}b.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,h=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return t?r.a.createElement(h,i(i({ref:n},b),{},{components:t})):r.a.createElement(h,i({ref:n},b))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);