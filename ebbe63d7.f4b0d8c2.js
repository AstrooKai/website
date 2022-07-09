(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{570:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(618));const i={title:"$vcSize",description:"Returns the size of the provided type in Provided guild or global"},c={unversionedId:"functions/vcsize",id:"functions/vcsize",isDocsHomePage:!1,title:"$vcSize",description:"Returns the size of the provided type in Provided guild or global",source:"@site/docs/functions/vcsize.md",slug:"/functions/vcsize",permalink:"/docs/functions/vcsize",version:"current",sidebar:"someSidebar",previous:{title:"$variablesCount",permalink:"/docs/functions/variablescount"},next:{title:"$voiceID",permalink:"/docs/functions/voiceid"}},a=[],l={toc:a};function u(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function simply returns the size of the provided type in Provided guild or global"),Object(o.b)("p",null,"Here is the usage:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$vcSize[channels/users/songs;guildID/all (optional)]\n")),Object(o.b)("p",null,"Now lets find the size of voice size requested"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "vcSize",\ncode: `\n$vcSize[channels;all]\n`\n})\n')),Object(o.b)("p",null,"And let's find the voice channel's size of the channel where you are listening to the bot"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "vcSize",\ncode: `\n$vcSize[users;$guildID]\n`\n})\n')))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?o.a.createElement(b,a(a({ref:n},u),{},{components:t})):o.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);