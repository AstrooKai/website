(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=(n(0),n(618));const o={title:"$formatDate"},i={unversionedId:"functions/formatdate",id:"functions/formatdate",isDocsHomePage:!1,title:"$formatDate",description:"This function formats a specified time to the given format",source:"@site/docs/functions/formatdate.md",slug:"/functions/formatdate",permalink:"/docs/functions/formatdate",version:"current",sidebar:"someSidebar",previous:{title:"$forEachUser",permalink:"/docs/functions/foreachuser"},next:{title:"$get",permalink:"/docs/functions/get"}},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function formats a specified time to the given format"),Object(r.b)("h4",{id:"fields"},"Fields"),Object(r.b)("p",null,"This function has 1 required field"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Time ","(","Required",")"),Object(r.b)("li",{parentName:"ol"},"Format ","(","Optional",")")),Object(r.b)("p",null,"Raw Usage: ",Object(r.b)("inlineCode",{parentName:"p"},"$formatDate[time;format (Optional)]")),Object(r.b)("h4",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Time - The time to be formatted"),Object(r.b)("li",{parentName:"ul"},"Format - The format on how you want the date to be returned")),Object(r.b)("h4",{id:"time-options"},"Time Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"datestamp - Example: 1615571386000"),Object(r.b)("li",{parentName:"ul"},"milliseconds - Example: 31556926000ms"),Object(r.b)("li",{parentName:"ul"},"stringed date - Example: 1/17/2019, 9:09:19 PM"),Object(r.b)("li",{parentName:"ul"},"ISO String - Example: 2021-3-12T14:48:00.000Z")),Object(r.b)("h4",{id:"format-options"},"Format Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Blank ","(","No format provided",")"," - Example: Friday, 12 March 2021"),Object(r.b)("li",{parentName:"ul"},"LT - Time - Example: 4:01 AM"),Object(r.b)("li",{parentName:"ul"},"LTS - Time w/ seconds - Example: 3:58:5 AM"),Object(r.b)("li",{parentName:"ul"},"L - Date - Example: 3/12/2021"),Object(r.b)("li",{parentName:"ul"},"LLL - Specified Date - Example: March 12 2021 4:02 AM"),Object(r.b)("li",{parentName:"ul"},"LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM"),Object(r.b)("li",{parentName:"ul"},"dddd - Day - Example: Friday"),Object(r.b)("li",{parentName:"ul"},"HH - Hour - Example: 15"),Object(r.b)("li",{parentName:"ul"},"For more formats, check ",Object(r.b)("a",{parentName:"li",href:"https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html"},"here"))),Object(r.b)("h4",{id:"usage"},"Usage"),Object(r.b)("p",null,"Simple Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp]\n`\n/*\nReturns: \nFriday, 12 March 2021\n*/\n})\n')),Object(r.b)("p",null,"Usage w/ format options"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;LLLL]\n`\n/*\nReturns: \nFriday, March 12 2021 1:00 PM\n*/\n})\n')),Object(r.b)("p",null,"Usage w/ format options & custom text"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "formatDate",\ncode: `\n$formatDate[$dateStamp;dddd at Hour HH]\n`\n/*\nReturns: \nFriday at Hour 13\n*/\n})\n')))}m.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),p=function(e){var t=r.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,f=u["".concat(i,".").concat(s)]||u[s]||b[s]||o;return n?r.a.createElement(f,c(c({ref:t},m),{},{components:n})):r.a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);