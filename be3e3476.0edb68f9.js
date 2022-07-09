(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{469:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),o=(r(0),r(618));const a={title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms"},i={unversionedId:"functions/modifychannelperms",id:"functions/modifychannelperms",isDocsHomePage:!1,title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms",source:"@site/docs/functions/modifychannelperms.md",slug:"/functions/modifychannelperms",permalink:"/docs/functions/modifychannelperms",version:"current",sidebar:"someSidebar",previous:{title:"$minute",permalink:"/docs/functions/minute"},next:{title:"$modifyEmoji",permalink:"/docs/functions/modifyemoji"}},s=[],c={toc:s};function l(e){let{components:n,...r}=e;return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function edit's the specified channels perms"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$modifyChannelPerms[channelID;perm1;perm2;perm3;roleID/userID/$guildID]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'/*\nTIP:\n+ = Allow perms\n- = Deny Perms\n/ = Defaults the perm\n*/\nbot.command({\nname: "modifyChannelPerms",\ncode: `Modified the channel permissions!\n$modifyChannelPerms[773365032691040277;+sendmessages;-readmessages;/managemessages;$guildID]`\n})\n/*\nThis:\nAllows send messages\nDenies read messages\nDefaults manage messages\nfor the whole guild\n*/\n')))}l.isMDXComponent=!0},618:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=m(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),f=t,d=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return r?o.a.createElement(d,s(s({ref:n},l),{},{components:r})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);