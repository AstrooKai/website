(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{562:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=(r(0),r(618));const o={title:"$getLeaderboardInfo"},i={unversionedId:"functions/getleaderboardinfo",id:"functions/getleaderboardinfo",isDocsHomePage:!1,title:"$getLeaderboardInfo",description:"This function allows the bot to grab info from any of the leaderboard functions",source:"@site/docs/functions/getleaderboardinfo.md",slug:"/functions/getleaderboardinfo",permalink:"/docs/functions/getleaderboardinfo",version:"current",sidebar:"someSidebar",previous:{title:"$getInviteInfo",permalink:"/docs/functions/getinviteinfo"},next:{title:"$getMessage",permalink:"/docs/functions/getmessage"}},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function allows the bot to grab info from any of the leaderboard functions"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$getLeaderboardInfo[variable;id;user/globaluser/server;top/name/value]\n")),Object(a.b)("p",null,"Property explanations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"variable - The variable where the leaderboard is based off of"),Object(a.b)("li",{parentName:"ul"},"id - The user the info is based off of"),Object(a.b)("li",{parentName:"ul"},"user - User variable"),Object(a.b)("li",{parentName:"ul"},"globaluser - Global user variable"),Object(a.b)("li",{parentName:"ul"},"server - Server variable"),Object(a.b)("li",{parentName:"ul"},"top - Leaderboard position"),Object(a.b)("li",{parentName:"ul"},"name - The username of the user"),Object(a.b)("li",{parentName:"ul"},"value - Their variable value")),Object(a.b)("p",null,"Using the function"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'leaderboard-info',\ncode: `User's Position: $getLeaderboardInfo[money;535566311942651924;user;top]`\n})\n")))}u.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),p=n,d=s["".concat(i,".").concat(p)]||s[p]||f[p]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);