(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(618));const a={title:"CacheOptions"},c={unversionedId:"options/cacheOptions",id:"options/cacheOptions",isDocsHomePage:!1,title:"CacheOptions",description:"* Available options Are:",source:"@site/docs/options/cacheOptions.md",slug:"/options/cacheOptions",permalink:"/docs/options/cacheOptions",version:"current"},i=[],l={toc:i};function s(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Available options Are:")))),Object(o.b)("blockquote",null,Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre",className:"language-js"}," 'guilds',\n 'messages',\n 'channels',\n 'users',\n 'applicationCommands',\n 'applicationCommandPermissions',\n 'permissionOverwrites',\n 'presences',\n 'reactions',\n 'reactionUsers',\n 'roles',\n 'stageInstances',\n 'threads',\n 'threadMembers',\n 'voiceStates',\n 'guildApplicationCommand',\n 'guildBans',\n 'guildChannels',\n 'guildEmojis',\n 'guildEmojiRoles',\n 'guildInvites',\n 'guildMembers',\n 'guildMemberRoles',\n 'guildStickers'\n")),Object(o.b)("h3",{parentName:"blockquote",id:"note"},"Note"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"limiting guild cache will stop all events in the servers that are not present in the cache")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"limiting channels cache will stop events in the channels that are not present in channels cache")))))}s.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);