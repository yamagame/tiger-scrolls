(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{30:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(7),r=n(8),o=n(10),i=n(9),c=n(11),l=n(0),u=n.n(l),s=n(31),p=n(32),f=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"Page-header"},u.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?u.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),u.a.createElement("div",{className:"Page-body"},this.props.data.split("\n").map(function(e){var t=e.trim().match("([#&$!/]*)(.+)");if(t){if("!"==t[1])return u.a.createElement("p",{style:{marginLeft:"1em"}},t[2].trim());if("#"==t[1])return u.a.createElement(p.a,null,t[2].trim());if("$"==t[1][0])return u.a.createElement(s.a,{value:e});if("/"==t[1][0])return null;if("&"==t[1]){var n=e.match("(&+)\\[(.+)\\](.+)");return u.a.createElement("p",null,u.a.createElement("a",{href:"".concat(n[3].trim())},n[2]))}var a=t[2].trim().split("\u3001");return a.map(function(e,t){return u.a.createElement("span",null,u.a.createElement(p.b,null,e),t<a.length-1?"\u3001":"")})}return null}),this.props.children))}}]),t}(l.Component);f.defaultProps={title:"title",page:0,maxPage:0,data:""}},31:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(7),o=n(8),i=n(10),c=n(9),l=n(11),u=n(0),s=n.n(u),p=n(33),f=n.n(p),h="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",m=!1,d=null,v=function(){d&&clearTimeout(d),d=setTimeout(function(){m?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(h,(void 0).onLoad)},100)},g=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),m=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),v(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?v(this.props.target):f()(h,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?v(this.props.target):f()(h,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},this.props.style,{fontSize:"1em"})})}}]),t}(u.Component);t.a=y},32:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);t.b=function(e){var t=e.children;return r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(encodeURIComponent(t))},t)};var o=function(e){var t=e.children;return r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(encodeURIComponent(t))},t))}},33:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,r),i.onload||n(i,r),o.appendChild(i)}},38:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(10),i=n(9),c=n(11),l=n(0),u=n.n(l),s=n(30);n(31);n.d(t,"default",function(){return f});var p=[{page:function(e){var t=e.pageInfo;return u.a.createElement(s.a,{title:t.title,page:t.page,maxPage:t.maxPage,data:""})},title:"UNIX\u30b3\u30de\u30f3\u30c9"}],f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,p.map(function(e,t){return e.page({pageInfo:{title:e.title,page:t+1,maxPage:p.length}})}))}}]),t}(l.Component)}}]);
//# sourceMappingURL=2.f2951903.chunk.js.map