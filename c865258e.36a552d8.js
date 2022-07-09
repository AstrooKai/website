(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{491:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(618));const o={title:"$mutualServers"},u={unversionedId:"functions/mutualservers",id:"functions/mutualservers",isDocsHomePage:!1,title:"$mutualServers",description:"This function returns the mutual servers the bot and the specified user have",source:"@site/docs/functions/mutualservers.md",slug:"/functions/mutualservers",permalink:"/docs/functions/mutualservers",version:"current",sidebar:"someSidebar",previous:{title:"$muteUser",permalink:"/docs/functions/muteuser"},next:{title:"$newChannel",permalink:"/docs/functions/newchannel"}},c=[],i={toc:c};function l(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function returns the mutual servers the bot and the specified user have"),Object(a.b)("h4",{id:"fields"},"Fields"),Object(a.b)("p",null,"This function has 2 optional fields"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"User ID ","(","Optional",")"),Object(a.b)("li",{parentName:"ol"},"Separator ","(","Optional",")")),Object(a.b)("p",null,"Raw Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"$mutualServers[userID;separator (optional)]")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"User ID - The user we're getting mutual servers from"),Object(a.b)("li",{parentName:"ul"},"Separator - The symbol separating each server")),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("p",null,"Without optional fields"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'mutual',\ncode: `$mutualServers`\n})\n")),Object(a.b)("p",null,"With optional fields"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'mutual',\ncode: `$mutualServers[$mentioned[1];|]`\n})\n")))}l.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var l=2;l<o;l++)u[l]=n[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);