(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{31:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(7),o=n(8),i=n(10),c=n(9),u=n(11),l=n(0),s=n.n(l),p=n(34),f=n.n(p),h="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",d=!1,m=null,y=function(){m&&clearTimeout(m),m=setTimeout(function(){d?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):f()(h,(void 0).onLoad)},100)},v=function(e){return e&&(e.match(/\\\(.+\\\)/)||e.match(/\$\$.+\$\$/))},g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).onLoad=function(e){n.setState({loaded:!0}),d=!0,e?console.log(e):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),y(n.props.target))},n.state={loaded:!1,value:e.value,target:e.target},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?y(this.props.target):f()(h,this.onLoad))}},{key:"shouldComponentUpdate",value:function(e,t){return!!e.value&&e.value!==this.state.value}},{key:"componentDidUpdate",value:function(e,t){this.preview.innerText=this.props.value,v(this.props.value)&&(this.state.loaded?y(this.props.target):f()(h,this.onLoad))}},{key:"componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className,ref:function(t){e.preview=t},style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},this.props.style,{fontSize:"1em"})})}}]),t}(l.Component);t.a=g},32:function(e,t,n){"use strict";var a=n(7),r=n(8),o=n(10),i=n(9),c=n(11),u=n(0),l=n.n(u),s=n(31),p=n(33),f=n(1),h=n.n(f),d=n(4),m=n.n(d),y=n(12),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},w=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=a=g(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!b(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},g(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);m()(this.context.router,"You should not use <Link> outside a <Router>"),m()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof t?Object(y.b)(t,null,null,r.location):t,i=r.createHref(o);return l.a.createElement("a",v({},a,{onClick:this.handleClick,href:i,ref:n}))},t}(l.a.Component);w.propTypes={onClick:h.a.func,target:h.a.string,replace:h.a.bool,to:h.a.oneOfType([h.a.string,h.a.object]).isRequired,innerRef:h.a.oneOfType([h.a.string,h.a.func])},w.defaultProps={replace:!1},w.contextTypes={router:h.a.shape({history:h.a.shape({push:h.a.func.isRequired,replace:h.a.func.isRequired,createHref:h.a.func.isRequired}).isRequired}).isRequired};var O=w;n.d(t,"a",function(){return j});var j=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"Page-header"},l.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?l.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),l.a.createElement("div",{className:"Page-body"},this.props.children,this.props.data.split("\n").map(function(t){var n=t.trim().match("([#&$!/]*)(.+)");if(n){if("!"==n[1])return l.a.createElement("h4",null,l.a.createElement(s.a,{value:n[2].trim()}));if("!!"==n[1])return l.a.createElement("p",null,l.a.createElement(s.a,{style:{paddingLeft:"1em"},value:n[2].trim()}));if("#"==n[1])return l.a.createElement(p.a,{target:n[2].trim(),category:e.props.category},l.a.createElement(s.a,{style:{display:"inline"},value:n[2].trim()}));if("$"==n[1][0])return l.a.createElement(s.a,{value:t});if("/"==n[1][0])return null;if("&"==n[1]){var a=t.match("(&+)\\[(.+)\\](.+)");return l.a.createElement("p",null,l.a.createElement(O,{to:"".concat(a[3].trim())},a[2]))}var r=n[2].trim().split("\u3001");return l.a.createElement("p",null,r.map(function(t,n){return l.a.createElement("span",null,l.a.createElement(p.b,{category:e.props.category},t),n<r.length-1?"\u3001":"")}))}return null})))}}]),t}(u.Component);j.defaultProps={title:"title",page:0,maxPage:0,data:"",category:""}},33:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);t.b=function(e){var t=e.children,n=e.category,a=encodeURIComponent(t),o=encodeURIComponent(n),i=a;return""!==n&&(i="".concat(a,"+").concat(o)),r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(i)},t)};var o=function(e){var t=e.target,n=e.children,a=e.category,o=encodeURIComponent(t),i=encodeURIComponent(a),c=o;return""!==a&&(c="".concat(o,"+").concat(i)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(t),href:"https://www.google.com/search?q=".concat(c)},n))}},34:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:a)(i,r),i.onload||n(i,r),o.appendChild(i)}},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.pages,n=e.category,a=void 0===n?"":n;return r.a.createElement("div",null,t.map(function(e,n){return e.page({pageInfo:{title:e.title,page:n+1,maxPage:t.length,category:a}})}))}},42:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(10),i=n(9),c=n(11),u=n(0),l=n.n(u),s=n(35),p=n(32);n(31),n(33);n.d(t,"default",function(){return h});var f=[{page:function(e){var t=e.pageInfo;return l.a.createElement(p.a,{title:t.title,page:t.page,maxPage:t.maxPage,category:t.category,data:"\nPython\u3001R\u3001MATLAB\u3001Java\u3001JavaScript\u3001C\u8a00\u8a9e\u3001Swift\u3001C++\u3001Objective-C\u3001Lua\u3001C#\u3001VB\u3001Ruby\u3001PHP\u3001Perl\u3001Golang\u3001Bash\u3001\n"})},title:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e"}],h=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,{pages:f,category:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2"})}}]),t}(u.Component)}}]);
//# sourceMappingURL=6.d84d588a.chunk.js.map