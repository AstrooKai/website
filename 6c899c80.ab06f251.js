(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(618));const i={title:"$removeSplitTextElement",description:"Removes a value from $textSplit by using the given indexes"},a={unversionedId:"functions/removesplittextelement",id:"functions/removesplittextelement",isDocsHomePage:!1,title:"$removeSplitTextElement",description:"Removes a value from $textSplit by using the given indexes",source:"@site/docs/functions/removesplittextelement.md",slug:"/functions/removesplittextelement",permalink:"/docs/functions/removesplittextelement",version:"current",sidebar:"someSidebar",previous:{title:"$removeContains",permalink:"/docs/functions/removecontains"},next:{title:"$removeTextSplitElement",permalink:"/docs/functions/removetextsplitelement"}},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function removes the value of the given indexes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$removeSplitTextElement[index1;index2;...]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "removeSplitTextElement",\ncode: `$removeSplitTextElement[1;2]\n$textSplit[hi/bye/hello;/]\n`\n})\n// Removes hi and bye from the list of values in $textSplit completely\n\n')))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,v=s["".concat(a,".").concat(f)]||s[f]||m[f]||i;return n?o.a.createElement(v,c(c({ref:t},p),{},{components:n})):o.a.createElement(v,c({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);