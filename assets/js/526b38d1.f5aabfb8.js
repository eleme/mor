"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[6955],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(2319),r=(t(9496),t(9613));const i={},l="\u4e8b\u4ef6\u539f\u7406",o={unversionedId:"web/blog/event",id:"web/blog/event",title:"\u4e8b\u4ef6\u539f\u7406",description:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u6709\u4e9b\u4e8b\u4ef6\u662f\u652f\u6301\u8def\u7531\u7684\uff0c\u6bd4\u5982\uff1atap\u3001touchstart\u3001touchmove\u3001touchend \u7b49\uff0c\u8fd9\u4e2a\u5176\u5b9e\u8ddf HTML \u539f\u751f\u4e8b\u4ef6\u662f\u4e00\u6837\u7684\u3002\u5982\u679c\u4ec5\u4ec5\u662f\u652f\u6301\u8def\u7531\u4e8b\u4ef6\u7684\u8bdd\uff0c\u76f4\u63a5\u4f7f\u7528react \u4e8b\u4ef6(\u56e0\u4e3a\u662f\u8fd0\u884c\u5728 react \u4e0a\u7684)\u5373\u53ef\u3002\u4f46\u4e8b\u5b9e\u4e0a\uff0creact \u7684\u4e8b\u4ef6\u652f\u6301\u662f\u6709\u9650\u7684\uff0creact \u4ec5\u4ec5\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u4e8b\u4ef6\u652f\u6301\uff0c\u4f46\u662f\u5bf9\u4e8e\u81ea\u5b9a\u4e49( CustomEvent )\u7684\u8def\u7531\u4e8b\u4ef6\u662f\u65e0\u6cd5\u652f\u6301\u7684\u3002react \u4e8b\u4ef6\u652f\u6301\u5217\u8868 \u3002\u5982\u679c\u60f3\u8981\u652f\u6301\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u90a3\u4e48\u8fd8\u5f97\u56de\u5230 HtmlElement.addEventListner \u4e0a\u6765\u3002\u56e0\u6b64\uff0c\u5728 MorJS \u7684\u4e8b\u4ef6\u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u5e72\u8106\u5254\u9664\u4e0d\u518d\u91c7\u7528 react \u4e8b\u4ef6\uff0c\u800c\u662f\u76f4\u63a5\u7531 runtime \u6765\u63d0\u4f9b\u4e8b\u4ef6\u7684\u652f\u6301\u3002",source:"@site/docs/web/blog/event.md",sourceDirName:"web/blog",slug:"/web/blog/event",permalink:"/web/blog/event",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"blogSidebar",previous:{title:"setData \u5b9e\u73b0\u539f\u7406",permalink:"/web/blog/setdata"},next:{title:"\u6a21\u7248\u7f16\u8bd1\u539f\u7406",permalink:"/web/blog/template"}},p={},d=[{value:"dataset \u539f\u7406",id:"dataset-\u539f\u7406",level:2}],m={toc:d},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8b\u4ef6\u539f\u7406"},"\u4e8b\u4ef6\u539f\u7406"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u539f\u751f\u7ec4\u4ef6\u6709\u4e9b\u4e8b\u4ef6\u662f\u652f\u6301\u8def\u7531\u7684\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"tap\u3001touchstart\u3001touchmove\u3001touchend")," \u7b49\uff0c\u8fd9\u4e2a\u5176\u5b9e\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML")," \u539f\u751f\u4e8b\u4ef6\u662f\u4e00\u6837\u7684\u3002\u5982\u679c\u4ec5\u4ec5\u662f\u652f\u6301\u8def\u7531\u4e8b\u4ef6\u7684\u8bdd\uff0c\u76f4\u63a5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4e8b\u4ef6(\u56e0\u4e3a\u662f\u8fd0\u884c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4e0a\u7684)\u5373\u53ef\u3002\u4f46\u4e8b\u5b9e\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u7684\u4e8b\u4ef6\u652f\u6301\u662f\u6709\u9650\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4ec5\u4ec5\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u4e8b\u4ef6\u652f\u6301\uff0c\u4f46\u662f\u5bf9\u4e8e\u81ea\u5b9a\u4e49( ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomEvent")," )\u7684\u8def\u7531\u4e8b\u4ef6\u662f\u65e0\u6cd5\u652f\u6301\u7684\u3002",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/events.html"},(0,r.kt)("inlineCode",{parentName:"a"},"react")," \u4e8b\u4ef6\u652f\u6301\u5217\u8868")," \u3002\u5982\u679c\u60f3\u8981\u652f\u6301\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u90a3\u4e48\u8fd8\u5f97\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"HtmlElement.addEventListner")," \u4e0a\u6765\u3002\u56e0\u6b64\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"MorJS")," \u7684\u4e8b\u4ef6\u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u5e72\u8106\u5254\u9664\u4e0d\u518d\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4e8b\u4ef6\uff0c\u800c\u662f\u76f4\u63a5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u6765\u63d0\u4f9b\u4e8b\u4ef6\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8fd9\u5c31\u610f\u5473\u7740\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u9700\u8981\u5177\u5907\u4e8b\u4ef6\u7684\u6ce8\u518c\u3001\u5206\u53d1\u80fd\u529b\u3002\u9996\u5148\uff0c\u6211\u4eec\u4ee3\u7801\u6700\u7ec8\u662f\u88ab\u7f16\u8bd1\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4ee3\u7801\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u56e0\u6b64\u89e3\u51b3\u65b9\u6848\u6700\u7ec8\u8fd8\u662f\u4f1a\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," \u4e0a\u6765\uff0c\u7136\u800c\uff0c\u4e0b\u4e00\u4e2a\u95ee\u9898\u662f\u5982\u4f55\u627e\u5230\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u5bf9\u8c61( ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")," )\u3002\u5982\u4e0b\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view onTap="onTapEvent"> view </view>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"view")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")," \uff0c\u9700\u8981\u7ed1\u5b9a\u4e8b\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"onTap")," \uff0c\u5e76\u4e14\u4e8b\u4ef6\u7684\u56de\u8c03\u65b9\u6cd5\u9700\u8981\u7ed1\u5b9a\u5230 JS \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onTapEvent")," \u65b9\u6cd5\u3002\u4ee5\u4e0a\u7684\u4ee3\u7801\u5982\u679c\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," \u4ee3\u7801\u7684\u8bdd\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"render(){\n return <view>view</view>\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8bf4\u4e86\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"MorJS")," \u653e\u5f03\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u81ea\u5e26\u7684\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u8fd8\u662f\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," \u4e0a\u6765\uff0c\u56e0\u6b64\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u7ec4\u4ef6\u6e32\u67d3\u5b8c( ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," ) \u4ee5\u540e\uff0c\u52a8\u6001\u7684\u627e\u5230\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"HtmlElement")," \u5e76\u4e14\u7ed1\u5b9a\u4e8b\u4ef6\u3002\u90a3\u4e48\u8fd9\u65f6\u5019\u95ee\u9898\u5c31\u56de\u5230\u5982\u679c\u627e\u5230\u9700\u8981\u7ed1\u5b9a\u4e8b\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"HtmlElement"),"\u3002"),(0,r.kt)("p",null,"\u5e73\u5e38\u6211\u4eec\u5728\u5f00\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelectorAll")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelector")," \u6765\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"p"},"HtmlElement")," \uff0c\u7136\u800c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"MorJS")," \u4e2d\u663e\u7136\u4e0d\u4f1a\u5927\u89c4\u6a21\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," \u6765\u83b7\u53d6\uff0c\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelectorAll")," \u6765\u67e5\u8be2\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"MorJS")," \u5728\u7f16\u8bd1\u5668\u5c42\u9762\uff0c\u5bf9\u6240\u6709\u7684\u5143\u7d20\u90fd\u4f1a\u8bbe\u7f6e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"tiga_node_id")," \u7684\u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u7684\u4f5c\u7528\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"xml")," \u6587\u6863(\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"dom")," )\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u662f\u552f\u4e00\u7684\u3002\u4e4b\u6240\u4ee5\u4f1a\u5206\u914d\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u4e3b\u8981\u662f\u8003\u8651\u4e86\u4ee5\u540e\u53ef\u4ee5\u517c\u5bb9 ",(0,r.kt)("inlineCode",{parentName:"p"},"domino")," \u5e73\u53f0\uff0c\u652f\u6301\u4f4e\u4ee3\u7801\u5e73\u53f0\u7684\u753b\u5e03\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'render(){\n  return <view tiga_node_id="e539a99b2f584b80a9af3293d1c6bfca">\n    view\n  </view>\n}\n')),(0,r.kt)("p",null,"\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'querySelectorAll(`[tiga_node_id="e539a99b2f584b80a9af3293d1c6bfca"]`)\n')),(0,r.kt)("p",null,"\u5c31\u80fd\u627e\u5230\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"htmlElement")," \u3002\u90a3\u4e48\u5269\u4e0b\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5982\u4f55\u5efa\u7acb\u7ed1\u5b9a\u5173\u7cfb\uff0c\u4e0d\u540c\u7684\u4e8b\u4ef6\u9700\u8981\u7ed1\u5b9a\u4e0d\u540c\u7684\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u4e2a\u65f6\u5019\u5c31\u53c8\u5f97\u9700\u8981\u7f16\u8bd1\u5668\u6765\u5b9e\u73b0\u4e86\uff0c\u7531\u7f16\u8bd1\u5668\u5c06\u7ed1\u5b9a\u5173\u7cfb\u8f6c\u6362\u6210\u5bf9\u8c61\uff0c\u5728\u5143\u7d20\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," \u89e3\u6790\u7684\u65f6\u5019\u5c06\u7ed1\u5b9a\u5173\u7cfb\u6ce8\u518c\u5230\u7ec4\u4ef6\u4e2d\uff0c\u5177\u4f53\u7f16\u8bd1\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'render(){\n  return <view tiga_node_id="c3c646304e624433a1ea9e0b9a261d29">\n    view\n    {$rm.registEvents([{\n      name: "tap",\n      event: "onTapEvent",\n      catch: false\n    }], "c3c646304e624433a1ea9e0b9a261d29")}</view>\n}\n')),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u5230\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"AXML")," \u4ee3\u7801\u5728\u7f16\u8bd1\u6709\u4e8b\u4ef6\u7684\u7684\u5143\u7d20\u7684\u65f6\u5019\u4f1a\u6dfb\u52a0\u4e00\u4e2a \u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"$rm.registEvents")," \u65b9\u6cd5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"jsx")," \u8868\u8fbe\u5f0f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"registEvents")," \u65b9\u6cd5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u63d0\u4f9b\u7684\uff0c\u800c\u8fd9\u4e2a\u65b9\u6cd5\u6240\u505a\u7684\u4e8b\u60c5\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u628a\u4e8b\u4ef6\u7ed1\u5b9a\u4fe1\u606f\u7f13\u5b58\u8d77\u6765\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"registEvents(events, nodeId) {\n  this.eventsInfo[nodeId] = events;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u4ee3\u7684\u662f\u7ec4\u4ef6\u3001\u9875\u9762\u672c\u8eab\u3002\u800c\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\uff0c\u4ec5\u4ec5\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u51fd\u6570\u3002")),(0,r.kt)("p",null,"\u81ea\u6b64\uff0c\u4e8b\u4ef6\u7ed1\u5b9a\u4fe1\u606f\u5df2\u7ecf\u6709\u4e86\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u8fdb\u884c\u52a8\u6001\u7ed1\u5b9a\u4e86\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u52a8\u6001\u7ed1\u5b9a\u4e8b\u4ef6\n */\nbindEvents() {\n  const root = ReactDOM.findDOMNode(this);\n  if (!root) return;\n  for (const noedId in this.eventsInfo) {\n    const events = this.eventsInfo[noedId];\n    // \u5148\u901a\u8fc7 tiga_node_id \u6765\u627e\u5230\u5bf9\u5e94\u7684\u8282\u70b9\u5143\u7d20\u3002\n    const elments = root.querySelectorAll(`[tiga_node_id=\"${noedId}\"]`);\n    // \u7136\u540e\u52a8\u6001\u6dfb\u52a0\u7ed1\u5b9a\u3002\n    for (const el of elments) {\n      for (const eventInfo of events) {\n        el.addEventListener(eventInfo.name, this.raiseEvent)\n      }\n    }\n  }\n}\n\nraiseEvent(e) {\n    const currentTarget = e.currentTarget;\n    // \u6839\u636enodeId\u627e\u5230\u5bf9\u5e94\u7684\u4e8b\u4ef6\u914d\u7f6e\n    const nodeId = currentTarget.getAttribute('tiga_node_id');\n    if (nodeId) {\n      const events = this.eventsInfo[nodeId];\n      if (events) {\n        const eventInfo = events.filter(i => i.name == e.type).pop();\n        // NOTE:catch \u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1  https://opendocs.alipay.com/mini/framework/events#%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B\n        if (eventInfo.catch) {\n          e.stopPropagation();\n        }\n        // \u627e\u5230\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\n        const func = this.componentConfig[eventInfo.event];\n        func && func.call(this.componentConfig, eventConvert(e));\n      }\n    }\n  }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bindEvents")," \u65b9\u6cd5\u5728\u6bcf\u6b21\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u4e24\u79cd\u751f\u547d\u5468\u671f\u51fd\u6570\u4e2d\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u5f53\u4e8b\u4ef6\u89e6\u53d1\u7684\u65f6\u5019\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"raiseEvent")," \u65b9\u6cd5\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTarget")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tiga_node_id")," \u5c5e\u6027\u627e\u5230\u4e8b\u4ef6\u7ed1\u5b9a\u914d\u7f6e\uff0c\u8fdb\u800c\u627e\u5230\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u4e8b\u4ef6\u5b8c\u6574\u7684\u5b9e\u73b0\u539f\u7406\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u6027\u80fd\u8003\u8651\uff0c\u4e0a\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelectorAll")," \u7684\u65b9\u5f0f\u53ef\u4ee5\u66ff\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"getElementsByClassName")," \u3002\u8fd9\u4e2a\u5728\u4e0b\u4e00\u7248\u672c\u4f18\u5316\u4e2d\u6539\u8fdb\u3002")),(0,r.kt)("h2",{id:"dataset-\u539f\u7406"},"dataset \u539f\u7406"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ecb\u7ecd\u4e86\u4e8b\u4ef6\u7684\u5b9e\u73b0\u539f\u7406\uff0c\u7136\u800c\uff0c\u5b9e\u9645\u4e0a\u6574\u4e2a\u4e8b\u4ef6\u6d41\u7a0b\u8fd8\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u7684\u8bbe\u7f6e\u4ee5\u53ca\u8bfb\u53d6\u3002\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u662f\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"string\u3001array\u3001object\u3001number")," \u7b49\u6570\u636e\u7c7b\u578b\u7684\uff0c\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"tiga")," \u662f\u57fa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"web-components")," \u5b9e\u73b0\u7684\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u539f\u751f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u5143\u7d20\uff0c\u7136\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u5143\u7d20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u53ea\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \uff0c\u8fd9\u65f6\u5019\u5982\u679c\u8981\u652f\u6301\u5176\u4ed6\u7c7b\u578b\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u5b9a\u7684\u8f6c\u6362\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u7f16\u8bd1\u5668\uff0c\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"data-")," \u5f00\u5934\u7684\u5c5e\u6027\uff0c\u8fdb\u884c\u8f6c\u7801\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view\n  data-obj="{{ {name:\'haiwei\',age:20} }}"\n  data-number="{{ 123 }}"\n  data-array="{{ [1,2,3] }}"\n>\n  view\n</view>\n')),(0,r.kt)("p",null,"\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  return <view data-obj={$rm.toDatasetString({\n    name: 'haiwei',\n    age: 20\n  })} data-number={$rm.toDatasetString(123)} data-array={$rm.toDatasetString([1, 2, 3])}>\n    view\n  </view>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toDatasetString")," \u65b9\u6cd5\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u63d0\u4f9b\u7684\u3002\u5c06\u6570\u636e\u5bf9\u8c61\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\u3002\u5177\u4f53\u5b9e\u73b0\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"toDatasetString(value) {\n  switch (typeof value) {\n      case 'string': {\n        return `$.value('${value}')`;\n      }\n      case 'object': {\n        if (value === null) {\n          return '$.nul()';\n        }\n        return `$.value(${JSON.stringify(value)})`\n      }\n      case 'function': {\n        return '';\n      }\n      case 'undefined': {\n        return '$.undefined()';\n      }\n      case 'bigint':\n      case 'number':\n      case 'boolean': {\n        return `$.value(${value})`;\n      }\n      default: {\n        return `$.value(${value})`;\n      }\n    }\n}\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"toDatasetString")," \u65b9\u6cd5\u7684\u4e3b\u8981\u5185\u5bb9\u5c31\u662f\u6839\u636e\u6570\u636e\u7684\u7c7b\u578b\uff0c\u8fd4\u56de\u4e00\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u6e32\u67d3\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u4ee3\u7801\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<view\n  data-obj=\'$.value({"name":"haiwei","age":20})\'\n  data-number="$.value(123)"\n  data-array="$.value([1,2,3])"\n>\n  view\n</view>\n')),(0,r.kt)("p",null,"\u56e0\u4e3a\uff0c\u6574\u4e2a\u4e8b\u4ef6\u7684\u89e6\u53d1\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u5b9e\u73b0\u7684\uff0c\u90a3\u4e48\u5f53\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u4e5f\u53ef\u4ee5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u8fdb\u884c\u8f6c\u6362\u3002\u6bd4\u5982\u5f53\u8f6c\u6362 ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u5143\u7d20\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset")," \u65f6\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"convertDataSet(dataset) {\n  const ds = {};\n  if (dataset) {\n    //  \u8fd9\u91cc\u7684\u8f6c\u6362\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86 dataset \u652f\u6301\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\n    Object.keys(dataset).forEach(key => {\n      const value = dataset[key];\n      ds[key] = parseDatasetValue(value);\n    });\n  }\n  return ds;\n}\n")),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"parseDatasetValue")," \u65b9\u6cd5\u5c31\u662f\u5c06\u4e0a\u9762\u8f6c\u6362\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\uff0c\u8f6c\u6362\u6210\u5b9e\u9645\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const DataSetParser = {\n  nul() {\n    return null\n  },\n  undefined() {\n    return undefined\n  },\n  value(v) {\n    return v\n  }\n}\n\n/**\n * \u89e3\u6790dataset value\n * @param {*} str\n */\nfunction parseDatasetValue(str) {\n  const $ = DataSetParser\n  return eval(str)\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u6700\u6838\u5fc3\u7684\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"eval")," \u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u76f4\u63a5\u6267\u884c\u4e0a\u9762\u8f6c\u6362\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," \u8868\u8fbe\u5f0f\u5f97\u5230\u6b63\u786e\u7684\u6570\u636e\u7c7b\u578b\u3002"))}u.isMDXComponent=!0}}]);