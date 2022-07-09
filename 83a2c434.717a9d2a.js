(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return i}));var r=n(3),o=(n(0),n(618));const a={title:"$getCustomStatus",description:"Gets the user's custom status state. (if any)"},c={unversionedId:"functions/getcustomstatus",id:"functions/getcustomstatus",isDocsHomePage:!1,title:"$getCustomStatus",description:"Gets the user's custom status state. (if any)",source:"@site/docs/functions/getcustomstatus.md",slug:"/functions/getcustomstatus",permalink:"/docs/functions/getcustomstatus",version:"current",sidebar:"someSidebar",previous:{title:"$getCooldownTime",permalink:"/docs/functions/getcooldowntime"},next:{title:"$getEmbed",permalink:"/docs/functions/getembed"}},s=[],u={toc:s};function i(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the custom status of the given user, if they have one"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$getCustomStatus[userID (optional);state/emoji]\n")),Object(o.b)("p",null,'{% hint style="info" %}\nstate - The message, emoji - the emoji\n{% endhint %}'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"customstatus",\ncode:`$getCustomStatus[502968724207304714;state]`\n})\n')))}i.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,b=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return n?o.a.createElement(b,s(s({ref:t},i),{},{components:n})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);