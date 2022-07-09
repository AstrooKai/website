(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(618));const i={title:"$getTextSplitLength",description:"Retrieves, split length."},a={unversionedId:"functions/gettextsplitlength",id:"functions/gettextsplitlength",isDocsHomePage:!1,title:"$getTextSplitLength",description:"Retrieves, split length.",source:"@site/docs/functions/gettextsplitlength.md",slug:"/functions/gettextsplitlength",permalink:"/docs/functions/gettextsplitlength",version:"current",sidebar:"someSidebar",previous:{title:"$getServerVar",permalink:"/docs/functions/getservervar"},next:{title:"$getUserBadges",permalink:"/docs/functions/getuserbadges"}},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the amount of values in $textSplit"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "text", \ncode: `\n$getTextSplitLength \n$textSplit[hi1/hi2/hi3;/]`\n//Bot would return: 3\n})\n')),Object(o.b)("p",null,'{% hint style="warning" %}\nText Split functions may be hard to understand. Click ',Object(o.b)("a",{parentName:"p",href:"https://ptb.discordapp.com/channels/773352845738115102/784626845059383316/786996112098590720"},"here")," to view\n{% endhint %}"))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,g=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return n?o.a.createElement(g,c(c({ref:t},p),{},{components:n})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);