(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{30:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(7),r=n(8),o=n(10),i=n(9),l=n(11),c=n(0),u=n.n(c),s=n(31),p=n(32),f=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"Page-header"},u.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?u.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),u.a.createElement("div",{className:"Page-body"},this.props.data.split("\n").map(function(e){var t=e.trim().match("([#&$!/]*)(.+)");if(t){if("!"==t[1])return u.a.createElement("p",{style:{marginLeft:"1em"}},t[2].trim());if("#"==t[1])return u.a.createElement(p.a,null,t[2].trim());if("$"==t[1][0])return u.a.createElement(s.a,{value:e});if("/"==t[1][0])return null;if("&"==t[1]){var n=e.match("(&+)\\[(.+)\\](.+)");return u.a.createElement("p",null,u.a.createElement("a",{href:"".concat(n[3].trim())},n[2]))}var a=t[2].trim().split("\u3001");return a.map(function(e,t){return u.a.createElement("span",null,u.a.createElement(p.b,null,e),t<a.length-1?"\u3001":"")})}return null}),this.props.children))}}]),t}(c.Component);f.defaultProps={title:"title",page:0,maxPage:0,data:""}},31:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(7),o=n(8),i=n(10),l=n(9),c=n(11),u=n(0),s=n.n(u),p=n(33),f=n.n(p),m="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",g=!1,h=null,d=function(){h&&clearTimeout(h),h=setTimeout(function(){g?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(m,(void 0).onLoad)},100)},v=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),g=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),d(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?d(this.props.target):f()(m,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?d(this.props.target):f()(m,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=y},32:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);t.b=function(e){var t=e.children;return r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(encodeURIComponent(t))},t)};var o=function(e){var t=e.children;return r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(encodeURIComponent(t))},t))}},33:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,r),i.onload||n(i,r),o.appendChild(i)}},37:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(10),i=n(9),l=n(11),c=n(0),u=n.n(c),s=n(30);n(31),n(32);n.d(t,"default",function(){return f});var p=[{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n# \u30c7\u30fc\u30bf\u578b\n\u9023\u7d9a\u30c7\u30fc\u30bf\u3001\u96e2\u6563\u30c7\u30fc\u30bf\u3001\u30ab\u30c6\u30b4\u30ea\u30c7\u30fc\u30bf\u3001\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3001\u9806\u5e8f\u5c3a\u5ea6\u30c7\u30fc\u30bf\n# \u77e9\u5f62\u30c7\u30fc\u30bf\n\u30c7\u30fc\u30bf\u30d5\u30ec\u30fc\u30e0\u3001\u7279\u5fb4\u91cf\u3001\u6210\u679c\uff08\u5909\u6570\uff09\u3001\u30ec\u30b3\u30fc\u30c9\n# \u4f4d\u7f6e\u306e\u63a8\u5b9a\n\u5e73\u5747\u5024\u3001\u52a0\u91cd\u5e73\u5747\u3001\u4e2d\u592e\u5024\u3001\u52a0\u91cd\u4e2d\u592e\u5024\u3001\u30c8\u30ea\u30e0\u5e73\u5747\u3001\u9811\u5065\u6027\u3001\u5916\u308c\u5024\n# \u6563\u3089\u3070\u308a\u306e\u6307\u6a19\n\u504f\u5dee\u3001\u5206\u6563\u3001\u6a19\u6e96\u504f\u5dee\u3001\u5e73\u5747\u7d76\u5bfe\u504f\u5dee\u3001\u4e2d\u592e\u5024\u7d76\u5bfe\u504f\u5dee\u3001\u7bc4\u56f2\u3001\u9806\u5e8f\u7d71\u8a08\u91cf\u3001\u30d1\u30fc\u30bb\u30f3\u30bf\u30a4\u30eb\u3001\u56db\u5206\u4f4d\u7bc4\u56f2\n\u4e0d\u504f\u5206\u6563\u3001\u6a19\u6e96\u504f\u5dee\n# \u5206\u5e03\u306e\u63a2\u7d22\n\u7bb1\u3072\u3052\u56f3\u3001\u5ea6\u6570\u5206\u5e03\u8868\u3001\u30d2\u30b9\u30c8\u30b0\u30e9\u30e0\u3001\u5bc6\u5ea6\u30d7\u30ed\u30c3\u30c8\n# \u30ab\u30c6\u30b4\u30ea\u30c7\u30fc\u30bf\u306e\u63a2\u7d22\n\u6700\u983b\u5024\uff08\u30e2\u30fc\u30c9\uff09\u3001\u671f\u5f85\u5024\u3001\u68d2\u30b0\u30e9\u30d5\uff08\u30d0\u30fc\u30c1\u30e3\u30fc\u30c8\uff09\u3001\u5186\u30b0\u30e9\u30d5\uff08\u30d1\u30a4\u30c1\u30e3\u30fc\u30c8\uff09\n# \u76f8\u95a2\n\u76f8\u95a2\u4fc2\u6570\u3001\u76f8\u95a2\u884c\u5217\u3001\u6563\u5e03\u56f3\n# \uff12\u3064\u4ee5\u4e0a\u306e\u5909\u6570\u306e\u63a2\u7d22\n\u5206\u5272\u8868\u3001\u516d\u89d2\u30d3\u30cb\u30f3\u30b0\u30d7\u30ed\u30c3\u30c8\u3001\u7b49\u9ad8\u7dda\u30d7\u30ed\u30c3\u30c8\u3001\u30d0\u30a4\u30aa\u30ea\u30f3\u30d7\u30ed\u30c3\u30c8\n"})},title:"\u63a2\u7d22\u7684\u30c7\u30fc\u30bf\u5206\u6790"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#\u7121\u4f5c\u70ba\u62bd\u51fa\n\u6a19\u672c\u3001\u6bcd\u96c6\u56e3\uff08\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\uff09\u3001N(n)\u3001\u7121\u4f5c\u70ba\u62bd\u51fa\uff08\u30e9\u30f3\u30c0\u30e0\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\uff09\u3001\u5c64\u5316\u62bd\u51fa\u3001\u5358\u7d14\u7121\u4f5c\u70ba\u6a19\u672c\u3001\u6a19\u672c\u30d0\u30a4\u30a2\u30b9\n#\u9078\u629e\u30d0\u30a4\u30a2\u30b9\n\u30d0\u30a4\u30a2\u30b9\u3001\u30c7\u30fc\u30bf\u30b9\u30cc\u30fc\u30d4\u30f3\u30b0\u3001\u81a8\u5927\u63a2\u7d22\u52b9\u679c\n\u6a19\u672c\u7d71\u8a08\u91cf\u3001\u30c7\u30fc\u30bf\u5206\u5e03\u3001\u6a19\u672c\u5206\u5e03\u3001\u4e2d\u5fc3\u6975\u9650\u5b9a\u7406\u3001\u6a19\u6e96\u8aa4\u5dee\n#\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\n\u30d6\u30fc\u30c8\u30b9\u30c8\u30e9\u30c3\u30d7\u6a19\u672c\u3001\u30ea\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\n#\u4fe1\u983c\u533a\u9593\n\u4fe1\u983c\u6c34\u6e96\u3001\u533a\u9593\u306e\u4e21\u7aef\n#\u6b63\u898f\u5206\u5e03\n\u8aa4\u5dee\u3001\u6a19\u6e96\u5316\u3001\uff3a\u5024\u3001\u6a19\u6e96\u6b63\u898f\u5206\u5e03\u3001\uff31\uff31\u30d7\u30ed\u30c3\u30c8\n#\u30ed\u30f3\u30b0\u30c6\u30fc\u30eb\u306e\u5206\u5e03\n\u88fe\uff08\u30c6\u30fc\u30eb\uff09\u3001\u6b6a\u307f\uff08\u30b9\u30ad\u30e5\u30fc\uff09\n#\u30b9\u30c1\u30e5\u30fc\u30c7\u30f3\u30c8\u306et\u5206\u5e03\n\u30b5\u30f3\u30d7\u30eb\u30b5\u30a4\u30ba\u3001\u81ea\u7531\u5ea6\n#\u4e8c\u9805\u5206\u5e03\n\u8a66\u884c\u3001\u6210\u529f\u3001\u4e8c\u9805\u3001\u4e8c\u9805\u8a66\u884c\u3001\u4e8c\u9805\u5206\u5e03\n#\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\n\u30e9\u30e0\u30c0\u3001\u30dd\u30a2\u30bd\u30f3\u5206\u5e03\u3001\u6307\u6570\u5206\u5e03\u3001\u30ef\u30a4\u30d6\u30eb\u5206\u5e03\n"})},title:"\u30c7\u30fc\u30bf\u3068\u6a19\u672c\u306e\u5206\u5e03"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#A/B\u30c6\u30b9\u30c8\n\u51e6\u7f6e\u3001\u51e6\u7f6e\u7fa4\u3001\u7d71\u5236\u7fa4\u3001\u30e9\u30f3\u30c0\u30e0\u5316\uff08\u7121\u4f5c\u70ba\u62bd\u51fa\uff09\u3001\u88ab\u9a13\u8005\u3001\u691c\u5b9a\u7d71\u8a08\u91cf\n#\u4eee\u8a2d\u691c\u5b9a\n\u5e30\u7121\u4eee\u8aac\u3001\u5bfe\u7acb\u4eee\u8aac\u3001\u7247\u5074\u691c\u5b9a\u3001\u4e21\u5074\u691c\u5b9a\n#\u30ea\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\n\u4e26\u3079\u66ff\u3048\u691c\u5b9a\u3001\u5fa9\u5143\u62bd\u51fa\u3001\u975e\u5fa9\u5143\u62bd\u51fa\n#\u7d71\u8a08\u7684\u512a\u4f4d\u6027\u3068p\u5024\nP\u5024\u3001\u30a2\u30eb\u30d5\u30a1\u3001\u7b2c\u4e00\u7a2e\u306e\u904e\u8aa4\u3001\u7b2c\u4e8c\u7a2e\u306e\u904e\u8aa4\n#t\u691c\u5b9a\n\u691c\u5b9a\u7d71\u8a08\u91cf\u3001t\u7d71\u8a08\u91cf\u3001t\u5206\u5e03\n#\u591a\u91cd\u691c\u5b9a\n\u7b2c\u4e00\u7a2e\u306e\u904e\u8aa4\u3001\u507d\u967d\u6027\u7387\u3001p\u5024\u306e\u8abf\u6574\u3001\u904e\u5270\u9069\u5408\n#\u81ea\u7531\u5ea6\n\u30b5\u30f3\u30d7\u30eb\u30b5\u30a4\u30ba\u3001d.f.\uff08\u81ea\u7531\u5ea6\uff09\n#ANOVA\n\u5bfe\u6bd4\u8f03\u3001\u30aa\u30e0\u30cb\u30d0\u30b9\u691c\u5b9a\u3001\u5206\u6563\u5206\u89e3\u3001\uff26\u7d71\u8a08\u91cf\u3001\uff33\uff33\n#\u30ab\u30a4\u4e8c\u4e57\u691c\u5b9a\n\u30ab\u30a4\u4e8c\u4e57\u7d71\u8a08\u91cf\u3001\u671f\u5f85\u3001d.f.\uff08\u81ea\u7531\u5ea6\uff09\n#\u591a\u8155\u30d0\u30f3\u30c7\u30c3\u30c8\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\n\u591a\u8155\u30d0\u30f3\u30c7\u30c3\u30c8\u3001\u30a2\u30fc\u30e0\u3001\u52dd\u3061\n#\u691c\u5b9a\u529b\u3068\u30b5\u30f3\u30d7\u30eb\u30b5\u30a4\u30ba\n\u52b9\u679c\u91cf\u3001\u691c\u5b9a\u529b\u3001\u6709\u610f\u6c34\u6e96\n"})},title:"\u7d71\u8a08\u5b9f\u9a13\u3068\u6709\u610f\u6027\u691c\u5b9a"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#\u5358\u56de\u5e30\n\u5fdc\u7b54\u3001\u72ec\u7acb\u5909\u6570\u3001\u30ec\u30b3\u30fc\u30c9\u3001\u5207\u7247\u3001\u56de\u5e30\u4fc2\u6570\u3001\u4e88\u6e2c\u5024\u3001\u6b8b\u6e23\u3001\u6700\u5c0f\u4e8c\u4e57\u6cd5\n#\u91cd\u56de\u5e30\n\u5e73\u5747\u4e8c\u4e57\u8aa4\u5dee\u3001\u5e73\u65b9\u6839\u3001\u6b8b\u5dee\u6a19\u6e96\u504f\u5dee\u3001t\u7d71\u8a08\u91cf\u3001\u52a0\u91cd\u56de\u5e30\n#\u56de\u5e30\u3092\u4f7f\u3063\u305f\u4e88\u6e2c\n\u4e88\u6e2c\u533a\u9593\u3001\u5916\u633f\n#\u30d5\u30a1\u30af\u30bf\u5909\u6570\n\u30c0\u30df\u30fc\u5909\u6570\u3001\u53c2\u7167\u7b26\u53f7\u5316\u3001one-hot\u30a8\u30f3\u30b3\u30fc\u30c0\u3001\u504f\u5dee\u7b26\u53f7\u5316\n#\u56de\u5e30\u5f0f\u306e\u89e3\u91c8\n\u76f8\u95a2\u4fc2\u6570\u3001\u591a\u91cd\u5171\u7dda\u6027\u3001\u4ea4\u7d61\u5909\u6570\u3001\u4e3b\u52b9\u679c\u3001\u4ea4\u4e92\u4f5c\u7528\n#\u56de\u5e30\u8a3a\u65ad\n\u6a19\u6e96\u5316\u6b8b\u5dee\u3001\u5916\u308c\u5024\u3001\u5f71\u97ff\u5024\u3001\u30ec\u30d0\u30ec\u30c3\u30b8\u3001\u975e\u6b63\u898f\u6b8b\u5dee\u3001\u4e0d\u7b49\u5206\u6563\u6027\u3001\u504f\u6b8b\u5dee\u30d7\u30ed\u30c3\u30c8\n#\u975e\u7dda\u5f62\u56de\u5e30\n\u591a\u9805\u5f0f\u56de\u5e30\u3001\u30b9\u30d7\u30e9\u30a4\u30f3\u56de\u5e30\u3001\u30ce\u30c3\u30c8\u3001\u4e00\u822c\u5316\u52a0\u6cd5\u30e2\u30c7\u30eb\n"})},title:"\u56de\u5e30\u3068\u4e88\u6e2c"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#\u30ca\u30a4\u30fc\u30d6\u30d9\u30a4\u30ba\n\u6761\u4ef6\u4ed8\u304d\u78ba\u7387\u3001\u4e8b\u5f8c\u78ba\u7387\n#\u5224\u5225\u5206\u6790\n\u5171\u5206\u6563\u3001\u5224\u5225\u95a2\u6570\u3001\u5224\u5225\u91cd\u307f\n#\u30ed\u30b8\u30b9\u30c6\u30c3\u30af\u56de\u5e30\n\u30ed\u30b8\u30c3\u30c8\uff08logit\uff09\u3001\u30aa\u30c3\u30ba\u3001\u5bfe\u6570\u30aa\u30c3\u30ba\n#\u6700\u5c24\u63a8\u5b9a\n#\u5206\u985e\u30e2\u30c7\u30eb\u306e\u8a55\u4fa1\n\u6b63\u78ba\u5ea6\u3001\u6df7\u540c\u884c\u5217\u3001\u654f\u611f\u5ea6\u3001\u7279\u7570\u5ea6\u3001\u9069\u5408\u7387\u3001\uff32\uff2f\uff23\u66f2\u7dda\u3001\u30ea\u30d5\u30c8\u5024\n#\u4e0d\u5747\u8861\u30c7\u30fc\u30bf\n\u30a2\u30f3\u30c0\u30fc\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3001\u30aa\u30fc\u30d0\u30fc\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3001\u91cd\u307f\u8ffd\u52a0\uff0f\u524a\u6e1b\u3001\u30c7\u30fc\u30bf\u751f\u6210\u3001\uff3a\u5024\u3001\uff4b\n"})},title:"\u5206\u985e"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#k\u8fd1\u508d\u6cd5\n\u8fd1\u508d\u3001\u8ddd\u96e2\u3001\u6a19\u6e96\u5316\u3001\uff3a\u5024\u3001\uff4b\n#\u6728\u30e2\u30c7\u30eb\n\u518d\u5e30\u5206\u5272\u3001\u5206\u5272\u5024\u3001\u63a5\u70b9\u3001\u8449\u3001\u640d\u5931\u3001\u4e0d\u7d14\u5ea6\u3001\u5208\u308a\u8fbc\u307f\n#\u30d0\u30f3\u30ad\u30f3\u30b0\u3068\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8\n\u30a2\u30f3\u30b5\u30f3\u30d6\u30eb\u3001\u30d0\u30f3\u30ad\u30f3\u30b0\u3001\u30e9\u30f3\u30c0\u30e0\u30d5\u30a9\u30ec\u30b9\u30c8\u3001\u5909\u6570\u306e\u91cd\u8981\u5ea6\n#\u30d6\u30fc\u30b9\u30c6\u30a3\u30f3\u30b0\n\u30a2\u30f3\u30b5\u30f3\u30d6\u30eb\u3001\u30d6\u30fc\u30b9\u30c6\u30a3\u30f3\u30b0\u3001AdaBoost\u3001\u52fe\u914d\u30d6\u30fc\u30b9\u30c6\u30a3\u30f3\u30b0\u3001\u78ba\u7387\u52fe\u914d\u30d6\u30fc\u30b9\u30c6\u30a3\u30f3\u30b0\u3001\u6b63\u5247\u5316\u3001\u30cf\u30a4\u30d1\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\n"})},title:"\u7d71\u8a08\u7684\u6a5f\u68b0\u5b66\u7fd2"},{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:"\n#\u4e3b\u6210\u5206\u5206\u6790\n\u4e3b\u6210\u5206\u3001\u8ca0\u8377\u91cf\u3001\u30b9\u30af\u30ea\u30fc\u30d7\u30ed\u30c3\u30c8\n#k\u5e73\u5747\u30af\u30e9\u30b9\u30bf\u30ea\u30f3\u30b0\n\u30af\u30e9\u30b9\u30bf\u3001\u30af\u30e9\u30b9\u30bf\u5e73\u5747\u3001\uff4b\n#\u968e\u5c64\u30af\u30e9\u30b9\u30bf\u30ea\u30f3\u30b0\n\u30c7\u30f3\u30c9\u30ed\u30b0\u30e9\u30e0\uff08\u7cfb\u7d71\u6a39\uff09\u3001\u8ddd\u96e2\u3001\u975e\u985e\u4f3c\u5ea6\n#\u30c7\u30fc\u30bf\u306e\u30b9\u30b1\u30b8\u30e5\u30fc\u30ea\u30f3\u30b0\n\u6b63\u898f\u5316\uff08\u6a19\u6e96\u5316\uff09\u3001Gower\u8ddd\u96e2\n"})},title:"\u6559\u5e2b\u306a\u3057\u5b66\u7fd2"}],f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,p.map(function(e,t){return e.page({pageInfo:{title:e.title,page:t+1,maxPage:p.length}})}))}}]),t}(c.Component)}}]);
//# sourceMappingURL=3.e7b13c09.chunk.js.map