(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{564:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(618));const c={title:"$clearReaction",description:"Clears the given emoji of the given message"},i={unversionedId:"functions/clearreaction",id:"functions/clearreaction",isDocsHomePage:!1,title:"$clearReaction",description:"Clears the given emoji of the given message",source:"@site/docs/functions/clearreaction.md",slug:"/functions/clearreaction",permalink:"/docs/functions/clearreaction",version:"current",sidebar:"someSidebar",previous:{title:"$clearQueue",permalink:"/docs/functions/clearqueue"},next:{title:"$clearReactions",permalink:"/docs/functions/clearreactions"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],l={toc:o};function b(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function will remove the given emoji for the given message ID of the given user in the given channel."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$clearReaction[channelID;messageID;userID;emoji]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"channel ID"),Object(a.b)("td",{parentName:"tr",align:"left"},"The channel ID where the message is present"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"message ID"),Object(a.b)("td",{parentName:"tr",align:"left"},"The message ID where the reaction is present"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"user ID"),Object(a.b)("td",{parentName:"tr",align:"left"},"The id of the user whose reaction is to be deleted"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"emoji"),Object(a.b)("td",{parentName:"tr",align:"left"},"The emoji which is to be deleted"),Object(a.b)("td",{parentName:"tr",align:"left"},"emoji"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "clear-reaction",\n  code: `The reaction has been removed.\n  $clearReaction[804505335397744650;820290083395469352;535566311942651924;\ud83d\udc4d]\n  `\n});\n\n')))}b.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);