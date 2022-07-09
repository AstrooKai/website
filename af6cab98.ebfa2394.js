(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{446:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(3),o=(n(0),n(618));const a={title:"$serverSplash"},c={unversionedId:"functions/serversplash",id:"functions/serversplash",isDocsHomePage:!1,title:"$serverSplash",description:"This function returns server splash url. Server Splash is the invite background image",source:"@site/docs/functions/serversplash.md",slug:"/functions/serversplash",permalink:"/docs/functions/serversplash",version:"current",sidebar:"someSidebar",previous:{title:"$serverPerferredLocale",permalink:"/docs/functions/serverperferredlocale"},next:{title:"$serverVerificationLevel",permalink:"/docs/functions/serververificationlevel"}},i=[],s={toc:i};function l(e){let{components:r,...n}=e;return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns server splash url. Server Splash is the invite background image"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$serverSplash[guildID;size (optional)]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverSplash",\ncode: `$image[$serverSplash[$guildID;2048]]`\n})\n')))}l.isMDXComponent=!0},618:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},v=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),v=t,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||a;return n?o.a.createElement(d,i(i({ref:r},l),{},{components:n})):o.a.createElement(d,i({ref:r},l))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=v;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);