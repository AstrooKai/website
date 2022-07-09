(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{486:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=(n(0),n(618));const i={title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},o={unversionedId:"functions/awaitcmdreactions",id:"functions/awaitcmdreactions",isDocsHomePage:!1,title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message).",source:"@site/docs/functions/awaitcmdreactions.md",slug:"/functions/awaitcmdreactions",permalink:"/docs/functions/awaitcmdreactions",version:"current",sidebar:"someSidebar",previous:{title:"$authorID",permalink:"/docs/functions/authorid"},next:{title:"$awaitComponentsUntil",permalink:"/docs/functions/awaitcomponentsuntil"}},c=[{value:"Usage",id:"usage",children:[]}],l={toc:c};function s(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function will make the bot reply when a user reacts with the given emoji to the command."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$awaitCmdReactions[filter;time;reactions;awaited commands;error message?;awaited data?]\n//reaction1,reaction2?,...;awaitedCmd1,awaitedCmd2?,...\n")),Object(r.b)("h4",{id:"filter-types"},"Filter Types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"everyone")," \u2014 makes it avaliable to react for everyone"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userID")," \u2014 makes it avaliable to react for specific user id (for example ",Object(r.b)("inlineCode",{parentName:"li"},"$authorID"),")")),Object(r.b)("h4",{id:"suffixes"},"Suffixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"s")," - Seconds"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"m")," - Minutes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"h")," - Hours"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"d")," - Days"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"w")," - Weeks")),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "await-cmd-reactions",\n  code: `\n  React with 1\ufe0f\u20e3 to command and I\'ll reply in 10 seconds\n\n  $awaitCmdReactions[$authorID;10s;1\ufe0f\u20e3;reactionMessage;Command Timed out!]\n  `\n//This will execute the awaited command if the user reacts\n});\n\nbot.awaitedCommand({\n  name: "reactionMessage",\n  code: `\n  Hi, you reacted to 1\ufe0f\u20e3 and now I, responded!\n  `\n});\n//This will be sending when the user reacted\n')))}s.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);