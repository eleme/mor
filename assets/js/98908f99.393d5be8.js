"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[4267],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(1163),l=(n(9496),n(9613));const o={},a="\u4e3b\u5305\u4f53\u79ef\u4f18\u5316",i={unversionedId:"guides/advance/subpackage-volume-optimization",id:"guides/advance/subpackage-volume-optimization",title:"\u4e3b\u5305\u4f53\u79ef\u4f18\u5316",description:"\u80cc\u666f",source:"@site/docs/guides/advance/subpackage-volume-optimization.md",sourceDirName:"guides/advance",slug:"/guides/advance/subpackage-volume-optimization",permalink:"/guides/advance/subpackage-volume-optimization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"blogSidebar",previous:{title:"Slot \u5b9e\u73b0\u539f\u7406",permalink:"/web/blog/slot"}},u={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6a21\u5757\u4f9d\u8d56\u56fe",id:"\u6a21\u5757\u4f9d\u8d56\u56fe",level:3},{value:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316",id:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316",level:3},{value:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1",id:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1",level:3},{value:"\u65b9\u6848",id:"\u65b9\u6848",level:2},{value:"\u6a21\u5757\u4f9d\u8d56\u56fe",id:"\u6a21\u5757\u4f9d\u8d56\u56fe-1",level:3},{value:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316",id:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316-1",level:3},{value:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1",id:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1-1",level:3}],c={toc:p},d="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e3b\u5305\u4f53\u79ef\u4f18\u5316"},"\u4e3b\u5305\u4f53\u79ef\u4f18\u5316"),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u4e92\u8054\u7f51\u65f6\u4ee3\u4e2d\u4eba\u4eec\u5bf9\u4fe1\u606f\u7684\u9700\u6c42\u9010\u6e10\u8d8b\u5411\u5feb\u6377\u5316\u3001\u65b9\u4fbf\u5316\u3001\u6548\u7387\u5316\uff0c\u4e3a\u4e86\u9002\u5e94\u5feb\u8282\u594f\u7684\u793e\u4f1a\u53d1\u5c55\uff0c\u5c0f\u7a0b\u5e8f\u5e94\u8fd0\u800c\u751f\uff0c\u4f5c\u4e3a\u5feb\u65f6\u4ee3\u7684\u4ea7\u7269\uff0c\u5404\u5e73\u53f0\u5c0f\u7a0b\u5e8f\u9010\u6e10\u8fdb\u5165\u5927\u4f17\u7528\u6237\u7684\u89c6\u91ce\uff0c\u6210\u4e3a\u4eba\u4eec\u751f\u6d3b\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\uff0c\u4e0d\u7528\u5b89\u88c5 APP\uff0c\u4e0d\u7528\u8bb0\u4f4f\u7f51\u5740\uff0c\u968f\u7528\u968f\u53d6\u7b80\u5355\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u4f5c\u4e3a\u8f7b\u91cf\u7ea7\u5e94\u7528\uff0c\u4e3a\u4e86\u4fdd\u969c\u987a\u7545\u8fd0\u884c\uff0c\u5404\u5e73\u53f0\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\u4f53\u79ef\u5927\u5c0f\u6709\u7740\u4e25\u683c\u7684\u89c4\u5b9a\uff0c\u800c\u968f\u7740\u4e1a\u52a1\u9700\u6c42\u7684\u4e0d\u65ad\u7d2f\u79ef\uff0c\u901a\u5e38\u5c0f\u7a0b\u5e8f\u7684\u4f53\u79ef\u4e5f\u5728\u4e0d\u65ad\u589e\u5927\uff0c\u5b98\u65b9\u4e5f\u63a8\u51fa\u4e86\u652f\u6301\u5c0f\u7a0b\u5e8f\u5206\u5305\u52a0\u8f7d\u529f\u80fd\uff0c\u5c06\u5c0f\u7a0b\u5e8f\u5212\u5206\u6210\u4e0d\u540c\u7684\u5b50\u5305\uff0c\u5728\u6784\u5efa\u65f6\u6253\u5305\u6210\u4e0d\u540c\u7684\u5206\u5305\uff0c\u7528\u6237\u5728\u4f7f\u7528\u65f6\u6309\u9700\u8fdb\u884c\u52a0\u8f7d\uff0c\u4f46\u662f\u6bcf\u4e2a\u4f7f\u7528\u5206\u5305\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u542b\u6709\u4e00\u4e2a\u4e3b\u5305\u3002\uff08\u5173\u4e8e\u4e3b\u5305\u5206\u5305\u7684\u6982\u5ff5\u53ef\u53c2\u8003\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"/guides/advance/complex-miniprogram-integration#%E6%A8%A1%E5%9D%97%E7%B1%BB%E5%9E%8B"},"\u590d\u6742\u5c0f\u7a0b\u5e8f\u96c6\u6210-\u6982\u5ff5-\u6a21\u5757\u7c7b\u578b"),"\uff09"),(0,l.kt)("p",null,"\u4ee5\u76ee\u524d\u51e0\u4e2a\u4e3b\u6d41\u5e73\u53f0\u4e3a\u4f8b\uff0c\u652f\u4ed8\u5b9d\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u90fd\u8981\u6c42\u5355\u4e2a\u5206\u5305/\u4e3b\u5305\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 2M\uff0c\u6240\u4ee5\u5bf9\u4e8e\u4f18\u5316\u5c0f\u7a0b\u5e8f\u4e3b\u5305\uff0c\u964d\u4f4e\u5c0f\u7a0b\u5e8f\u4e3b\u5305\u5927\u5c0f\uff0c\u6210\u4e3a\u5927\u591a\u6570\u5f00\u53d1\u8005\u90fd\u5c06\u9762\u4e34\u7684\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,l.kt)("p",null,"\u4e3b\u5305\u4e2d\u5e76\u975e\u6240\u6709\u7ec4\u4ef6\u3001\u6587\u4ef6\u90fd\u4f1a\u88ab\u4e3b\u5305\u53ca\u591a\u4e2a\u5206\u5305\u4f7f\u7528\uff0c\u90e8\u5206\u516c\u5171 js \u4ee3\u7801\u3001node_modules \u4ee3\u7801\u548c npm \u7ec4\u4ef6\u6587\u4ef6\u53ef\u80fd\u4ec5\u5728\u67d0\u4e00\u4e2a\u5206\u5305\u4e2d\u4f7f\u7528\uff0c\u53ea\u8981\u901a\u8fc7\u89e3\u6790\u5404\u6587\u4ef6\u4f9d\u8d56\uff0c\u5efa\u7acb\u5206\u7ec4\u5173\u7cfb\uff0c\u5728\u7f16\u8bd1\u65f6\u52a8\u6001\u7684\u5c06\u6587\u4ef6\u8c03\u914d\u5230\u4e0d\u540c\u5206\u5305\u4e2d\u53bb\uff0c\u8ba9\u5206\u5305\u81ea\u5df1\u7684\u6a21\u5757\u4ec5\u7f16\u8bd1\u5230\u81ea\u8eab\u8def\u5f84\u5185\uff0c\u4ec5\u5206\u5305\u95f4\u5171\u4eab\u7684\u6a21\u5757\u624d\u4f1a\u8fdb\u5165\u4e3b\u5305\uff0c\u5bf9\u4e8e\u4ece\u672a\u4f7f\u7528(\u5f15\u7528)\u7684\u4ee3\u7801\u6216\u6a21\u5757\u5728\u7f16\u8bd1\u65f6\u5e76\u4e0d\u4f1a\u4e00\u540c\u6253\u5230\u4ea7\u7269\u4e2d\uff0c\u4ee5\u6b64\u7528\u4e8e\u4f18\u5316\u4e3b\u5305\u4f53\u79ef\u3002"),(0,l.kt)("p",null,"\u76f8\u6bd4\u4e0e\u4e3b\u5305\u9700\u8981\u5c3d\u53ef\u80fd\u538b\u7f29\u81ea\u8eab\u4f53\u79ef\uff0c\u5206\u5305\u663e\u7136\u81ea\u8eab\u5bb9\u91cf\u6709\u8f83\u5927\u7684\u4f59\u7559\uff0c\u90a3\u4e48\u628a\u5404\u4e2a\u5206\u5305\u4f9d\u8d56\u7684\u5185\u5bb9\u76f4\u63a5\u7f16\u8bd1\u5230\u5bf9\u5e94\u5206\u5305\u4e2d\u53bb\uff0c\u53ef\u4ee5\u6700\u5927\u5316\u5229\u7528\u5206\u5305\u81ea\u8eab\u7684\u5bb9\u91cf\u5927\u5c0f\uff0c\u5728\u4e3b\u5305\u4e2d\u7531\u4e8e\u8be5\u4f9d\u8d56\u5185\u5bb9\u4e0d\u518d\u6709\u76f8\u5173\u4f7f\u7528(\u5f15\u7528)\uff0c\u6839\u636e\u6587\u4ef6\u4f9d\u8d56\u7684\u5206\u6790\uff0c\u5728\u7f16\u8bd1\u65f6\u8fd9\u4e9b\u5df2\u88ab\u5197\u4f59\u5230\u5404\u4e2a\u5206\u5305\u7684\u4f9d\u8d56\u5c31\u4e0d\u4f1a\u88ab\u4e00\u540c\u6253\u5230\u4e3b\u5305\u4ea7\u7269\u4e2d\uff0c\u51cf\u5c0f\u4e3b\u5305\u4f53\u79ef\u7684\u540c\u65f6\u63d0\u5347\u5206\u5305\u5229\u7528\u7387\u3002"),(0,l.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5b8c\u6574\u7684\u6587\u4ef6\u4f9d\u8d56\u5173\u7cfb\u6811\u548c\u5404\u5206\u5305\u5206\u7ec4\u4fe1\u606f\u6a21\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7f16\u8bd1\u65f6\u7684\u52a8\u6001\u5206\u7ec4\u4f18\u5316\u80fd\u529b\uff0c\u52a8\u6001\u8c03\u914d\u4e0d\u540c\u5206\u5305\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u72ec\u7acb\u5206\u5206\u5305\u7f16\u8bd1\u63d0\u4f9b\u5b8c\u6574\u7684\u5197\u4f59\u7f16\u8bd1\u65b9\u6848")),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("h3",{id:"\u6a21\u5757\u4f9d\u8d56\u56fe"},"\u6a21\u5757\u4f9d\u8d56\u56fe"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u4f9d\u8d56\u56fe\uff1a\u4e3b\u8981\u7528\u4e8e Entry \u6784\u5efa\u7684\u4f9d\u8d56\u5173\u7cfb\u5efa\u7acb\u548c\u52a8\u6001\u5206\u7ec4\uff0c\u5305\u542b\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u4e3b\u5305 mainGroup\u3001\u4e00\u4e2a\u6839\u6a21\u5757 rootModule\uff08\u7528\u4e8e\u5f62\u6210\u5e26\u9876\u7aef\u7684\u6811\u72b6\u7ed3\u6784, \u53ef\u51cf\u5c11\u5faa\u73af\u6b21\u6570\u53ca\u660e\u786e\u7236\u7c7b\u5f52\u5c5e\uff09\u3001N \u4e2a\u666e\u901a Module\uff08\u968f Entry \u5206\u6790\u53ca\u6587\u4ef6\u53d8\u5316\u52a8\u6001\u5220\u51cf\uff09\u3001N \u4e2a\u666e\u901a Group\uff08\u7528\u4e8e\u5404\u4e2a\u5206\u5305\uff09\u3001N \u4e2a \u65e0\u6548\u7684 Module\uff08\u7528\u4e8e\u6807\u8bb0\u88ab\u53d8\u66f4\u6216\u88ab\u5220\u9664\u7684\u6a21\u5757\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u666e\u901a Module\uff1a\u4e00\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a module\uff0c\u4ee5\u6587\u4ef6\u7684\u5168\u8def\u5f84\u4f5c\u4e3a module \u6807\u8bc6\uff0c\u5305\u542b \u6587\u4ef6\u5730\u5740\u3001\u4f9d\u8d56\u4fe1\u606f\u3001\u88ab\u4f9d\u8d56\u4fe1\u606f \u53ca \u5206\u7ec4\u4fe1\u606f\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u666e\u901a Group\uff1a\u6a21\u5757\u7684\u5206\u7ec4\u4fe1\u606f\uff0c\u4e00\u4e2a\u5206\u5305\u5bf9\u5e94\u4e00\u4e2a\u7ec4\uff0c\u5305\u542b\u540d\u79f0\u4ee5\u53ca\u76f8\u5173\u7684\u6a21\u5757\uff1b")),(0,l.kt)("h3",{id:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316"},"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316"),(0,l.kt)("p",null,"\u5206\u5305\u7f16\u8bd1\u65f6\u52a8\u6001\u4f18\u5316\uff0c\u662f\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u6587\u4ef6\u4f9d\u8d56\u6811\u53ca\u5206\u7ec4\u5173\u7cfb\uff0c\u52a8\u6001\u7684\u5c06\u6587\u4ef6\u8c03\u914d\u5230\u4e0d\u540c\u5206\u5305\u4e2d\u53bb\uff0c\u6bd4\u5982\u4ec5\u67d0\u4e00\u4e2a\u5206\u5305\u4f7f\u7528\u7684 npm \u7ec4\u4ef6\u63d0\u53d6\u5230\u81ea\u5df1\u5206\u5305\u4e2d\uff0c\u4ee5\u53ca node_modules \u81ea\u52a8\u63d0\u53d6\u5230\u5206\u5305\u4e2d\u7b49\uff0c\u5206\u5305\u95f4\u5171\u4eab\u6a21\u5757\u4f1a\u8fdb\u5165\u4e3b\u5305\uff0c\u5206\u5305\u81ea\u5df1\u7684\u6a21\u5757\u4f1a\u8fdb\u5165\u5206\u5305\u3002"),(0,l.kt)("h3",{id:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1"},"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5c06\u5206\u5305\u4f9d\u8d56\u7684\u5185\u5bb9\u76f4\u63a5\u7f16\u8bd1\u5230\u5bf9\u5e94\u5206\u5305\u4e2d\u53bb\uff0c\u4e0d\u8bba\u8fd9\u4e9b\u4f9d\u8d56\u662f\u5426\u548c\u5df2\u6709\u7684\u5206\u5305\u6709\u91cd\u53e0\uff0c\u4e5f\u4e0d\u7ba1\u662f\u4e0d\u662f\u4e3b\u5305\u7684\u7ec4\u4ef6\uff0c\u90fd\u4f1a\u4ee5\u5197\u4f59\u7684\u65b9\u5f0f\u7f16\u8bd1\u5230\u6bcf\u4e2a\u5206\u5305\u4e2d\u53bb\uff0c\u6700\u5927\u5316\u5229\u7528\u5206\u5305\u81ea\u8eab\u5bb9\u91cf\u5927\u5c0f\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6848"},"\u65b9\u6848"),(0,l.kt)("h3",{id:"\u6a21\u5757\u4f9d\u8d56\u56fe-1"},"\u6a21\u5757\u4f9d\u8d56\u56fe"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u9879\u76ee\uff0c\u7ecf\u8fc7\u6a21\u5757\u4f9d\u8d56\u56fe\u7684\u5206\u6790\uff0c\u4f1a\u7ed9\u6bcf\u4e2a\u6587\u4ef6 Module \u8fdb\u884c\u76f8\u5173\u7684\u4f9d\u8d56\u5206\u6790\u548c\u5206\u7ec4\uff0c\u4ee5\u6587\u4ef6\u7684\u5168\u8def\u5f84\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u5206\u6790\u6784\u5efa\u5176\u4f9d\u8d56\u56fe\uff0c\u5bf9\u4e8e\u5404\u5206\u5305\u7684\u6587\u4ef6\u5206\u7ec4\u5230\u5404\u81ea\u5bf9\u5e94\u5206\u5305\uff0c\u5bf9\u4e8e\u4e3b\u5305\u6587\u4ef6\u82e5\u662f\u88ab\u591a\u4e2a\u5206\u5305\u5171\u4eab\u4f9d\u8d56\u5219\u5206\u7ec4\u5230\u4e3b\u5305\uff0c\u82e5\u662f\u4ec5\u88ab\u67d0\u4e00\u4e2a\u5206\u5305\u4f7f\u7528\u5219\u4f1a\u52a8\u6001\u5206\u7ec4\u5230\u8be5\u5206\u5305\uff0c\u800c\u901a\u8fc7\u8fd9\u4e9b\u6587\u4ef6 Module \u3001\u5206\u7ec4 Group \u7b49\u7ed3\u6784\u7ec4\u6210\u4e00\u5f20\u5b8c\u6574\u7684\u6a21\u5757\u4f9d\u8d56\u56fe\uff0c\u7f16\u8bd1\u65f6\u901a\u8fc7\u5404\u4e2a\u6587\u4ef6\u7684\u6587\u4ef6\u4f9d\u8d56\u6811\u548c\u5206\u7ec4\u5173\u7cfb\uff0c\u5bf9\u5e94 entries \u7684\u6587\u4ef6\u4fe1\u606f\u8fdb\u884c\u7f16\u8bd1\u4ea7\u51fa\u4ea7\u7269\u3002"),(0,l.kt)("center",null,(0,l.kt)("img",{width:"700",src:"https://gw.alicdn.com/imgextra/i2/O1CN01NZhDSm22EoWDhe7Qn_!!6000000007089-0-tps-1734-1228.jpg"})),(0,l.kt)("h3",{id:"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316-1"},"\u5206\u5305\u52a8\u6001\u7f16\u8bd1\u4f18\u5316"),(0,l.kt)("p",null,"\u5206\u5305\u5728\u6267\u884c\u7f16\u8bd1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7f16\u8bd1\u6bcf\u4e2a\u6587\u4ef6\u65f6\u4f1a\u901a\u8fc7\u6587\u4ef6\u4f9d\u8d56\u6811\u627e\u5230\u5bf9\u5e94\u4f9d\u8d56\u53ca\u5176\u6587\u4ef6\u4fe1\u606f\uff0c\u6839\u636e\u4e24\u8005\u7684\u5206\u7ec4\u5173\u7cfb\uff0c\u52a8\u6001\u5c06\u516c\u5171 js \u4ee3\u7801\u3001node_modules \u4ee3\u7801\u548c npm \u7ec4\u4ef6\u6587\u4ef6\u8c03\u914d\u5230\u4e0d\u540c\u5206\u5305\u4e2d\u53bb\uff0c\u751f\u6210\u8be5\u5206\u5305\u5185\u7684\u516c\u5171\u6a21\u5757\u6587\u4ef6\uff0c\u800c\u62c6\u5206\u51fa\u6765\u7684\u6587\u4ef6\u5219\u56e0\u4e3a\u5728\u4e3b\u5305\u4e2d\u4e0d\u88ab\u4efb\u4f55\u5176\u4ed6\u6a21\u5757\u4f9d\u8d56\uff0c\u5c06\u4ece\u4e3b\u5305\u7f16\u8bd1\u4e2d\u5220\u9664"),(0,l.kt)("center",null,(0,l.kt)("img",{width:"700",src:"https://gw.alicdn.com/imgextra/i2/O1CN01gI6SsE1nV6Mr3umuo_!!6000000005094-0-tps-1408-1166.jpg"})),(0,l.kt)("h3",{id:"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1-1"},"\u72ec\u7acb\u5206\u5305\u5197\u4f59\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5c06\u5206\u5305\u4f9d\u8d56\u7684\u5185\u5bb9\u76f4\u63a5\u7f16\u8bd1\u5230\u5bf9\u5e94\u5206\u5305\u4e2d\u53bb\uff0c\u4e0d\u8bba\u8fd9\u4e9b\u4f9d\u8d56\u662f\u5426\u548c\u5df2\u6709\u7684\u5206\u5305\u6709\u91cd\u53e0\uff0c\u4e5f\u4e0d\u7ba1\u662f\u4e0d\u662f\u4e3b\u5305\u7684\u7ec4\u4ef6\uff0c\u90fd\u4f1a\u4ee5\u5197\u4f59\u7684\u65b9\u5f0f\u7f16\u8bd1\u5230\u6bcf\u4e2a\u5206\u5305\u4e2d\u53bb\uff0c\u6700\u5927\u5316\u5229\u7528\u5206\u5305\u81ea\u8eab\u5bb9\u91cf\u5927\u5c0f\u3002"))}s.isMDXComponent=!0}}]);