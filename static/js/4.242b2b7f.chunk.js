(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{31:function(n,$,a){"use strict";function t(n,$,a){return $ in n?Object.defineProperty(n,$,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[$]=a,n}var e=a(7),r=a(8),c=a(10),o=a(9),i=a(11),s=a(0),l=a.n(s),f=a(34),x=a.n(f),p="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",h=!1,g=null,d=function(){g&&clearTimeout(g),g=setTimeout(function(){h?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):x()(p,(void 0).onLoad)},100)},u=function(n){return n&&(n.match(/\\\(.+\\\)/)||n.match(/\$\$.+\$\$/))},b=function(n){function $(n){var a;return Object(e.a)(this,$),(a=Object(c.a)(this,Object(o.a)($).call(this,n))).onLoad=function(n){a.setState({loaded:!0}),h=!0,n?console.log(n):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),d(a.props.target))},a.state={loaded:!1,value:n.value,target:n.target},a}return Object(i.a)($,n),Object(r.a)($,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,u(this.props.value)&&(this.state.loaded?d(this.props.target):x()(p,this.onLoad))}},{key:"shouldComponentUpdate",value:function(n,$){return!!n.value&&n.value!==this.state.value}},{key:"componentDidUpdate",value:function(n,$){this.preview.innerText=this.props.value,u(this.props.value)&&(this.state.loaded?d(this.props.target):x()(p,this.onLoad))}},{key:"componentWillReceiveProps",value:function(n){this.setState({value:n.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var n=this;return l.a.createElement("div",{className:this.props.className,ref:function($){n.preview=$},style:function(n){for(var $=1;$<arguments.length;$++){var a=null!=arguments[$]?arguments[$]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.forEach(function($){t(n,$,a[$])})}return n}({},this.props.style,{fontSize:"1em"})})}}]),$}(s.Component);$.a=b},32:function(n,$,a){"use strict";var t=a(7),e=a(8),r=a(10),c=a(9),o=a(11),i=a(0),s=a.n(i),l=a(31),f=a(33),x=a(1),p=a.n(x),h=a(4),g=a.n(h),d=a(12),u=Object.assign||function(n){for(var $=1;$<arguments.length;$++){var a=arguments[$];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n};function b(n,$){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!$||"object"!==typeof $&&"function"!==typeof $?n:$}var m=function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)},y=function(n){function $(){var a,t;!function(n,$){if(!(n instanceof $))throw new TypeError("Cannot call a class as a function")}(this,$);for(var e=arguments.length,r=Array(e),c=0;c<e;c++)r[c]=arguments[c];return a=t=b(this,n.call.apply(n,[this].concat(r))),t.handleClick=function(n){if(t.props.onClick&&t.props.onClick(n),!n.defaultPrevented&&0===n.button&&!t.props.target&&!m(n)){n.preventDefault();var $=t.context.router.history,a=t.props,e=a.replace,r=a.to;e?$.replace(r):$.push(r)}},b(t,a)}return function(n,$){if("function"!==typeof $&&null!==$)throw new TypeError("Super expression must either be null or a function, not "+typeof $);n.prototype=Object.create($&&$.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),$&&(Object.setPrototypeOf?Object.setPrototypeOf(n,$):n.__proto__=$)}($,n),$.prototype.render=function(){var n=this.props,$=(n.replace,n.to),a=n.innerRef,t=function(n,$){var a={};for(var t in n)$.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}(n,["replace","to","innerRef"]);g()(this.context.router,"You should not use <Link> outside a <Router>"),g()(void 0!==$,'You must specify the "to" property');var e=this.context.router.history,r="string"===typeof $?Object(d.b)($,null,null,e.location):$,c=e.createHref(r);return s.a.createElement("a",u({},t,{onClick:this.handleClick,href:c,ref:a}))},$}(s.a.Component);y.propTypes={onClick:p.a.func,target:p.a.string,replace:p.a.bool,to:p.a.oneOfType([p.a.string,p.a.object]).isRequired,innerRef:p.a.oneOfType([p.a.string,p.a.func])},y.defaultProps={replace:!1},y.contextTypes={router:p.a.shape({history:p.a.shape({push:p.a.func.isRequired,replace:p.a.func.isRequired,createHref:p.a.func.isRequired}).isRequired}).isRequired};var _=y;a.d($,"a",function(){return v});var v=function(n){function $(n){return Object(t.a)(this,$),Object(r.a)(this,Object(c.a)($).call(this,n))}return Object(o.a)($,n),Object(e.a)($,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(n){}},{key:"render",value:function(){var n=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"Page-header"},s.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?s.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),s.a.createElement("div",{className:"Page-body"},this.props.children,this.props.data.split("\n").map(function($){var a=$.trim().match("([#&$!/]*)(.+)");if(a){if("!"==a[1])return s.a.createElement("p",{style:{marginLeft:"1em"}},a[2].trim());if("#"==a[1])return s.a.createElement(f.a,null,a[2].trim());if("$"==a[1][0])return s.a.createElement(l.a,{value:$});if("/"==a[1][0])return null;if("&"==a[1]){var t=$.match("(&+)\\[(.+)\\](.+)");return s.a.createElement("p",null,s.a.createElement(_,{to:"".concat(t[3].trim())},t[2]))}var e=a[2].trim().split("\u3001");return s.a.createElement("p",null,e.map(function($,a){return s.a.createElement("span",null,s.a.createElement(f.b,{category:n.props.category},$),a<e.length-1?"\u3001":"")}))}return null})))}}]),$}(i.Component);v.defaultProps={title:"title",page:0,maxPage:0,data:"",category:""}},33:function(n,$,a){"use strict";a.d($,"a",function(){return r});var t=a(0),e=a.n(t);$.b=function(n){var $=n.children,a=n.category,t=encodeURIComponent($),r=encodeURIComponent(a),c=t;return""!==a&&(c="".concat(t,"+").concat(r)),e.a.createElement("a",{target:encodeURIComponent($),href:"https://www.google.com/search?q=".concat(c)},$)};var r=function(n){var $=n.children,a=n.category,t=encodeURIComponent($),r=encodeURIComponent(a),c=t;return""!==a&&(c="".concat(t,"+").concat(r)),e.a.createElement("h3",null,"\u25a1 ",e.a.createElement("a",{target:encodeURIComponent($),href:"https://www.google.com/search?q=".concat(c)},$))}},34:function(n,$){function a(n,$){n.onload=function(){this.onerror=this.onload=null,$(null,n)},n.onerror=function(){this.onerror=this.onload=null,$(new Error("Failed to load "+this.src),n)}}function t(n,$){n.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,$(null,n))}}n.exports=function(n,$,e){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"===typeof $&&(e=$,$={}),$=$||{},e=e||function(){},c.type=$.type||"text/javascript",c.charset=$.charset||"utf8",c.async=!("async"in $)||!!$.async,c.src=n,$.attrs&&function(n,$){for(var a in $)n.setAttribute(a,$[a])}(c,$.attrs),$.text&&(c.text=""+$.text),("onload"in c?a:t)(c,e),c.onload||a(c,e),r.appendChild(c)}},35:function(n,$,a){"use strict";var t=a(0),e=a.n(t);$.a=function(n){var $=n.pages,a=n.category,t=void 0===a?"":a;return e.a.createElement("div",null,$.map(function(n,a){return n.page({pageInfo:{title:n.title,page:a+1,maxPage:$.length,category:t}})}))}},37:function(n,$,a){"use strict";a.r($);var t=a(7),e=a(8),r=a(10),c=a(9),o=a(11),i=a(0),s=a.n(i),l=a(35),f=a(32);a(31),a(33);a.d($,"default",function(){return p});var x=[{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u6b63\u5f26(sine)\u306e\u5b9a\u7fa9\n$$sin\\theta = \\frac{BC}{AB}$$\n$$(sin\\theta = \\frac{y}{r})$$\n#\u4f59\u5f26(cosine)\u306e\u5b9a\u7fa9\n$$cos\\theta = \\frac{AC}{AB}$$\n$$(cos\\theta = \\frac{x}{r})$$\n#\u6b63\u63a5(tangent)\u306e\u5b9a\u7fa9\n$$tan\\theta = \\frac{BC}{AC}$$\n$$(tan\\theta = \\frac{y}{x})$$\n#\u6b63\u5f26\u5b9a\u7406\n$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$\n#\u4f59\u5f26\u5b9a\u7406\n$$ a^2 = b^2 + c^2 - 2bc\\cos A$$\n$$ b^2 = c^2 + a^2 - 2ca\\cos B$$\n$$ c^2 = a^2 + b^2 - 2ab\\cos C$$\n#\u52a0\u6cd5\u5b9a\u7406\n$$ \\sin (\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta $$\n$$ \\cos (\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\pm \\sin \\alpha \\sin \\beta $$\n$$ \\tan (\\alpha \\pm \\beta) = \\frac{\\tan \\alpha \\pm \\tan \\beta}{1 \\pm \\tan \\alpha \\tan \\beta} $$\n#\uff12\u500d\u89d2\u306e\u516c\u5f0f\n$$ \\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha $$\n$$ \\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha $$\n$$ = 2 \\cos^2\\alpha-1 $$\n$$ = 1-2\\sin^2\\alpha $$\n$$ \\tan 2\\alpha = \\frac{ 2 \\tan \\alpha } { 1 - \\tan^2 \\alpha } $$\n#\u534a\u89d2\u306e\u516c\u5f0f\n$$ \\sin^2 \\frac{\\alpha}{2} = \\frac{1-\\cos \\alpha}{2} $$\n$$ \\cos^2 \\frac{\\alpha}{2} = \\frac{1+\\cos \\alpha}{2} $$\n$$ \\tan^2 \\frac{\\alpha}{2} = \\frac{\\sin^2 \\frac{\\alpha}{2}}{\\cos^2 \\frac{\\alpha}{2}} = \\frac{1-\\cos\\alpha}{1+\\cos\\alpha} $$\n#\uff13\u500d\u89d2\u306e\u516c\u5f0f\n$$ \\sin3\\alpha = 3\\sin\\alpha - 4\\sin^3\\alpha $$\n$$ \\cos3\\alpha = 4\\cos^3\\alpha - 3\\cos\\alpha $$\n#\u7a4d\u548c\u306e\u516c\u5f0f\n$$ \\sin\\alpha\\cos\\beta = \\frac{1}{2}\\{\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\} $$\n$$ \\cos\\alpha\\cos\\beta = \\frac{1}{2}\\{\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\} $$\n$$ \\sin\\alpha\\sin\\beta = \\frac{1}{2}\\{\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\} $$\n#\u548c\u7a4d\u306e\u516c\u5f0f\n$$ \\sin x + \\sin y = 2\\sin\\frac{x+y}{2}\\cos\\frac{x-y}{2} $$\n$$ \\sin x - \\sin y = 2\\cos\\frac{x+y}{2}\\sin\\frac{x-y}{2} $$\n$$ \\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2} $$\n$$ \\cos x - \\cos y = -2\\sin\\frac{x+y}{2}\\sin\\frac{x-y}{2} $$\n#\u6b21\u6570\u4e0b\u3052\n$$ \\sin^2\\alpha = \\frac{1-\\cos2\\alpha}{2} $$\n$$ \\cos^2\\alpha = \\frac{1+\\cos2\\alpha}{2} $$\n$$ \\sin\\alpha\\cos\\alpha = \\frac{\\sin2\\alpha}{2} $$\n#sin\u306e\u5408\u6210\n$$ a \\sin \\theta + b \\cos \\theta =  \\sqrt{ a^2 + b^2 } \\sin(\\theta + \\alpha)$$\n#cos\u306e\u5408\u6210\n$$ a \\sin \\theta + b \\cos \\theta =  \\sqrt{ a^2 + b^2 } \\cos(\\theta - \\beta)$$\n#\u76f8\u4e92\u95a2\u4fc2\n$$ \\sin^2 \\theta + \\cos^2 \\theta = 1 $$\n$$ \\tan \\theta = \\frac{ \\sin \\theta }{ \\cos \\theta } $$\n$$ \\tan^2 \\theta + 1 = \\frac{ 1 }{ \\cos^2 \\theta } $$\n#\u30a2\u30fc\u30af\u30b5\u30a4\u30f3\n$$ \\sin^{-1} x = \\arcsin x $$\n#\u30a2\u30fc\u30af\u30b3\u30b5\u30a4\u30f3\n$$ \\cos^{-1} x = \\arccos x $$\n#\u30a2\u30fc\u30af\u30bf\u30f3\u30b8\u30a7\u30f3\u30c8\n$$ \\tan^{-1} x = \\arctan x $$\n#\u4e09\u89d2\u95a2\u6570\u306e\u5c0e\u95a2\u6570\n$$ (\\sin x)' = \\cos x $$\n$$ (\\cos x)' = - \\sin x $$\n$$ (\\tan x)' = \\frac{ 1 }{ \\cos^2 x } $$\n$$ (\\sin^{-1} x)' = \\frac{ 1 }{ \\sqrt{ 1-x^2 } } $$\n$$ (\\cos^{-1} x)' = - \\frac{ 1 }{ \\sqrt{ 1-x^2 } } $$\n$$ (\\tan^{-1} x)' = \\frac{ 1 }{ 1-x^2 } $$\n#\u4e09\u89d2\u95a2\u6570\u306e\u7a4d\u5206\n$$ \\int \\sin x dx = - \\cos x + C $$\n$$ \\int \\cos x dx = \\sin x + C $$\n$$ \\int \\tan x dx = - log | \\cos x | + C $$\n$$ \\int \\sec^2 x dx = \\tan x + C $$\n$$ \\int \\csc^2 x dx = - \\cot x + C $$\n"})},title:"\u4e09\u89d2\u95a2\u6570"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u5c0e\u95a2\u6570\n$$ f'(x) = \\lim_{ h \\to 0 } \\frac{f(x+h) - f(x)}{h} $$\n#\u5fae\u5206\u5f62\u5f0f\n$$ y=f(x) $$\n!\u306e\u3068\u304d\n$$ dy=f'(x)\\Delta x $$\n#\u57fa\u672c\u3068\u306a\u308b\u95a2\u6570\u306e\u5c0e\u95a2\u6570\n$$ x^\\alpha = \\alpha x^{\\alpha-1} $$\n#\u4e09\u89d2\u95a2\u6570\u306e\u5c0e\u95a2\u6570\n$$ (\\sin x)' = \\cos x $$\n$$ (\\cos x)' = - \\sin x $$\n$$ (\\tan x)' = \\frac{1}{\\cos^2 x} $$\n$$ (\\sin^{-1}x)' = \\frac{1}{\\sqrt{1-x^2}} $$\n$$ (\\cos^{-1}x)' = - \\frac{1}{\\sqrt{1-x^2}} $$\n$$ (\\tan^{-1}x)' = \\frac{1}{1+x^2} $$\n#\u6307\u6570/\u5bfe\u6570\u306e\u5c0e\u95a2\u6570\n$$ (e^x)' = e^x $$\n$$ (a^x)' = a^x\\log\\alpha $$\n$$ (\\log x)' = \\frac{1}{x} $$\n#\u5c0e\u95a2\u6570\u306e\u57fa\u672c\u5f0f\n$$ \\{c\\}' = 0 $$\n$$ \\{c g(x)\\}' = c g'(x) $$\n$$ \\{g(x) \\pm h(x)\\}' = g'(x)\\pm h'(x) $$\n$$ \\{g(x) h(x)\\}' = g'(x) h(x) + g(x) h'(x) $$\n$$ \\left\\{ \\frac{1}{g(x)} \\right\\}' = - \\frac{g'(x)}{\\{g(x)\\}^2} $$\n$$ \\left\\{ \\frac{h(x)}{g(x)} \\right\\}' = \\frac{h'(x)g(x)-h(x)g'(x)}{\\{g(x)\\}^2} $$\n$$ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} $$\n$$ \\frac{dy}{dx} = \\frac{ \\frac{dy}{di} }{ \\frac{dx}{di} } $$\n$$ \\frac{dy}{dx} = \\frac{ 1 }{ \\frac{dy}{dx} } $$\n#\u5bfe\u6570\u5fae\u5206\u6cd5\n#\u63a5\u7dda\u306e\u65b9\u7a0b\u5f0f\n$$ y = f'(\\alpha)(x - \\alpha)+f(\\alpha) $$\n#\u5408\u6210\u95a2\u6570\u306e\u5fae\u5206\n$$ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = f'(g(x)) \\cdot g'(x) $$\n#\u30c6\u30a4\u30e9\u30fc\u5c55\u958b\n$$ f(x) = \\sum_{n=0}^\\infty\\frac{f^{(n)}(\\alpha)}{n!}(x-\\alpha)^{n} $$\n#\u30de\u30af\u30ed\u30fc\u30ea\u30f3\u5c55\u958b\n$$ f(x) = \\sum_{n=0}^\\infty\\frac{f^{(n)}(0)}{n!}x^n $$\n"})},title:"\u5fae\u5206"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u4e0d\u5b9a\u7a4d\u5206\n$$ \\int f(x) dx = F(x) + C $$\n#\u5b9a\u7a4d\u5206\n$$ \\int_a^b f(x) dx = F(b) - F(a) $$\n#\u57fa\u672c\u3068\u306a\u308b\u95a2\u6570\u306e\u7a4d\u5206\n$$ \\int x^\\alpha dx = \\frac{1}{\\alpha+1} x^{\\alpha+1}+C $$\n$$ \\int \\frac{1}{x} dx = \\log |x| + C $$\n#\u4e09\u89d2\u95a2\u6570\u306e\u7a4d\u5206\n$$ \\int \\sin x dx = - \\cos x + C $$\n$$ \\int \\cos x dx = \\sin x + C $$\n$$ \\int \\tan x dx = - \\log | \\cos x | + C $$\n$$ \\int \\sec^2 x dx = \\tan x + C $$\n$$ \\int \\cos^2 x dx = - \\cot x + C $$\n#\u6307\u6570/\u5bfe\u6570\u306e\u7a4d\u5206\n$$ \\int e^x dx = e^x + C $$\n$$ \\int a^x dx = \\frac{\\alpha^x}{\\log\\alpha} + C $$\n$$ \\int \\log x dx = x ( \\log x - 1 ) + C $$\n#\u305d\u306e\u4ed6\u306e\u7a4d\u5206\n$$ \\int \\frac{1}{x^2 + a^2} dx = \\frac{1}{a} \\tan^{-1}\\frac{x}{a} + C $$\n$$ \\int \\frac{1}{\\sqrt{a^2-x^2}} dx = \\sin^{-1}\\frac{x}{a} + C $$\n$$ \\int \\frac{1}{\\sqrt{x^2+A}}dx = \\log|x+\\sqrt{x^2+A}| + C $$\n"})},title:"\u7a4d\u5206"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u8907\u7d20\u6570\n$$ a + b i $$\n#\u5171\u5f79\u306a\u8907\u7d20\u6570\n$$ \\alpha = a + b i $$\n!\u306e\u3068\u304d\n$$ \\bar{\\alpha} = a - b i $$\n#\u5171\u5f79\u306a\u8907\u7d20\u6570\u306e\u548c\n$$ (a + b i) + (a - b i) = 2a $$\n#\u5171\u5f79\u306a\u8907\u7d20\u6570\u306e\u7a4d\n$$ (a + b i) (a - b i) = a^2 + b^2 $$\n#\u504f\u89d2\n$$ \\theta = \\tan^{-1}\\frac{b}{a} $$\n#\u6975\u5f62\u5f0f\n$$ z = r(\\cos\\theta + i\\sin\\theta) $$\n#\u7d76\u5bfe\u5024\n$$ |z| = |a+ib| = \\sqrt{a^2+b^2} $$\n#\u7d76\u5bfe\u5024\u306e\u6027\u8cea\n$$ |z| = |-z| = |\\bar{z}| $$\n$$ z\\bar{z} = |z|^2 $$\n$$ |\\alpha\\beta| = |\\alpha||\\beta| $$\n$$ \\left|\\frac{\\alpha}{\\beta}\\right| = \\frac{|\\alpha|}{|\\beta|} $$\n#\u56db\u5247\u6f14\u7b97\n$$ (a+bi) + (c+di) = (a+c)+ (b+d)i $$\n$$ (a+bi) - (c+di) = (a-c)+ (b-d)i $$\n$$ (a+bi)(c+di) = ac+adi+bci+bdi^2 = (ac-bd)+(ad+bc)i $$\n$$ \\frac{a+bi}{c+di} = \\frac{(a+b i)(c-di)}{(c+di)(c-di)} = \\frac{(ac+bd)+(bc-ad)i}{c^2+d^2} $$\n"})},title:"\u8907\u7d20\u6570"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u95a2\u6570\n$$ y = f(x)  $$\n#\u5408\u6210\u95a2\u6570\n$$ y = g( f(x) )  $$\n#\u9006\u95a2\u6570\n$$ x = g(y) $$\n#\uff11\u6b21\u95a2\u6570\n$$ y = ax+b $$\n#\uff12\u6b21\u95a2\u6570\n$$ y = ax^2+bx+c $$\n$$ y = a(x-p)^2+q $$\n#\u6307\u6570\u95a2\u6570\n$$ y = a^x $$\n#\u5bfe\u6570\u95a2\u6570\n$$ y = \\log_a x $$\n#\u5076\u95a2\u6570\n$$ f(x) = f(-x) $$\n#\u5947\u95a2\u6570\n$$ f(-x) = -f(x) $$\n#\u5468\u671f\u95a2\u6570\n$$ f(x) = f(x+p) $$\n#\uff12\u5909\u6570\u95a2\u6570\n$$ z = f(x,y) $$\n#\u5e73\u9762\u306e\u65b9\u7a0b\u5f0f\n$$ a(x-x_0)+b(y-y_0)+c(z-z_0) = 0 $$\n$$ ax+by+cz+d = 0 $$\n#\u5186\u306e\u65b9\u7a0b\u5f0f\n$$ x^2+y^2 = r^2 $$\n$$ (x-a)^2+(y-b)^2 = r^2 $$\n#\u6955\u5186\u306e\u65b9\u7a0b\u5f0f\n$$ \\frac{x^2}{a^2}+\\frac{y^2}{b^2} = 1 $$\n#\u53cc\u66f2\u7dda\u306e\u65b9\u7a0b\u5f0f\n$$ \\frac{x^2}{a^2}-\\frac{y^2}{b^2} = 1 $$\n"})},title:"\u95a2\u6570"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u91cd\u5fc3\n#\u5916\u5fc3\n#\u5185\u5fc3\n#\u5185\u5206\u70b9\n#\u4e2d\u7dda\u5b9a\u7406\n$$ AB^2+AC^2=2(AM^2+BM^2) $$\n#\u5186\u5468\u89d2\u306e\u5b9a\u7406\n#\u4e09\u89d2\u5f62\u306e\u9802\u70b9\u306e\u4e8c\u7b49\u5206\u7dda\u306e\u6027\u8cea\n$$ PB:PC=AB:AC $$\n#\u4e09\u5e73\u65b9\u306e\u5b9a\u7406(\u30d4\u30bf\u30b4\u30e9\u30b9\u306e\u5b9a\u7406)\n$$ a^2+b^2=c^2 $$\n#\u76f4\u89d2\u4e09\u89d2\u5f62\u306e\u5916\u63a5\u5186\n#\u7dda\u5bfe\u79f0\n#\u70b9\u5bfe\u79f0\n#\u76f4\u89d2\u306b\u4ea4\u308f\u308b\u6761\u4ef6\n$$ m_1 m_2 = -1 $$\n#\uff12\u76f4\u7dda\u306e\u306a\u3059\u89d2\n$$ tan\\theta = \\pm\\frac{m_2-m_1}{1+m_2 m_1} $$\n#\u70b9\u3068\u76f4\u7dda\u306e\u8ddd\u96e2\n$$ \\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}} $$\n#\u70b9\u3068\u5e73\u9762\u306e\u8ddd\u96e2\n$$ \\frac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}} $$\n"})},title:"\u5e7e\u4f55"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u30d9\u30af\u30c8\u30eb\n$$ \\overrightarrow{AB} $$\n$$ \\vec{a} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5927\u304d\u3055\n$$ |\\overrightarrow{AB}| $$\n$$ |\\vec{a}|=\\sqrt{a_x^2+a_y^2} $$\n#\u9006\u30d9\u30af\u30c8\u30eb\n$$ -\\vec{a} $$\n#\u96f6\u30d9\u30af\u30c8\u30eb\n$$ \\vec{0} $$\n#\u65b9\u5411\u30d9\u30af\u30c8\u30eb\n#\u6cd5\u7dda\u30d9\u30af\u30c8\u30eb\n#\u5358\u4f4d\u30d9\u30af\u30c8\u30eb\n$$ \\frac{\\vec{a}}{|\\vec{a}|} $$\n#\u57fa\u672c\u30d9\u30af\u30c8\u30eb\n$$ \\vec{e_1},\\vec{e_2} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u6210\u5206\u8868\u793a\n$$ \\vec{a} = a_x\\vec{e_1}+a_y\\vec{e_2} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u76f8\u7b49\n$$ \\overrightarrow{AB} = \\overrightarrow{CD} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u548c\n$$ \\vec{c} = \\vec{a} + \\vec{b} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5dee\n$$ \\vec{c} = \\vec{a} - \\vec{b} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5b9a\u6570\u500d\n$$ \\vec{c} = k\\vec{a} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u4ea4\u63db\u6cd5\u5247\n$$ \\vec{a} + \\vec{b} = \\vec{b} + \\vec{a} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u7d50\u5408\u6cd5\u5247\n$$ (\\vec{a} + \\vec{b})+\\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c}) $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5b9a\u6570\u500d\n$$ m\\vec{a}+n\\vec{a} = (m+n)\\vec{a} $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5185\u7a4d\n$$ \\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta $$\n$$ =a_1 b_1+a_2 b_2 $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u306a\u3059\u89d2\u304c90\xb0\u306e\u5185\u7a4d\n$$ \\vec{a}\\cdot\\vec{b}=0 $$\n#\u30d9\u30af\u30c8\u30eb\u306e\u5916\u7a4d\n$$ \\vec{a}\\times\\vec{b}=(a_y b_z-a_z b_y,a_z b_x-a_x b_z,a_x b_y-a_y b_x) $$\n#\uff12\u3064\u306e\u30d9\u30af\u30c8\u30eb\u306e\u306a\u3059\u89d2\n$$ \\cos\\theta = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|} $$\n#\u5185\u7a4d\u306e\u4ea4\u63db\u6cd5\u5247\n$$ \\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a} $$\n#\u5185\u7a4d\u306e\u5b9a\u6570\u500d\n$$ (k\\vec{a})\\cdot\\vec{b} = \\vec{a}\\cdot(k\\vec{b}) = k(\\vec{a}\\cdot\\vec{b}) $$\n#\u5185\u7a4d\u306e\u5206\u914d\u6cd5\u5247\n$$ (\\vec{a}+\\vec{b})\\cdot\\vec{c} = \\vec{a}\\cdot\\vec{c}+\\vec{b}\\cdot\\vec{c} $$\n#\u5185\u5206\u306e\u30d9\u30af\u30c8\u30eb\n$$ \\overrightarrow{OR}=\\frac{n}{m+n}\\vec{p}+\\frac{m}{m+n}\\vec{q} $$\n#\u5185\u7a4d\u30fb\u5916\u7a4d\u306b\u3064\u3044\u3066\u306e\u516c\u5f0f\n$$ A\\cdot(B\\times C)=B\\cdot(C\\times A)=C\\cdot(A\\times B) $$\n$$ A\\times(B\\times C)=(A\\cdot C)B-(A\\cdot B)C $$\n$$ (A\\times B)\\cdot(C\\times D)=(A\\cdot C)(B\\cdot D)-(A\\cdot D)(B\\cdot C) $$\n#\u4e09\u89d2\u5f62\u306e\u9762\u7a4d\n$$ S=\\frac{1}{2}AB\\cdot AC\\sin\\theta $$\n$$ S=\\frac{1}{2}\\sqrt{|\\overrightarrow{AB}|^2\\cdot|\\overrightarrow{AC}|^2-(\\overrightarrow{AB}\\cdot\\overrightarrow{AC})^2} $$\n"})},title:"\u30d9\u30af\u30c8\u30eb"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u548c\u306e\u6cd5\u5247\n$$ n(A\\cup B) = n(A) + n(B) $$\n#\u7a4d\u306e\u6cd5\u5247\n$$ n(A\\times B) = n(A) \\times n(B) $$\n#\u9806\u5217\u306e\u7dcf\u6570\n$$ {}_n P _r = n(n-1) \\cdots (n-r+1) $$\n#\u7d44\u307f\u5408\u308f\u305b\u306e\u7dcf\u6570\n$$ {}_n C _r = \\frac{{}_n P _r}{{}_r P _r} = \\frac{n(n-1) \\cdots (n-r+1)}{r!} $$\n#\u5186\u9806\u5217\u306e\u7dcf\u6570\n$$ \\frac{{}_n P _n}{n} = (n-1)! $$\n#\u5186\u9806\u5217\u306e\u7dcf\u6570\n$$ \\frac{{}_n P _r}{2n} = \\frac{(n-1)!}{2} $$\n#\u8a66\u884c\n#\u4e8b\u8c61\n#\u78ba\u7387\u306e\u5b9a\u7fa9\n$$ P(A) = \\frac{a}{N} $$\n#\u78ba\u7387\u5909\u6570\n$$ X $$\n#\u6761\u4ef6\u4ed8\u304d\u78ba\u7387\n#\u78ba\u7387\u306e\u7a4d\u306e\u6cd5\u5247\uff08\u4e57\u6cd5\u5b9a\u7406\uff09\n$$ P(A_1\\cup A_2)=P(A_1)\\cdot P_{A_1}(A_2) $$\n#\u72ec\u7acb\u8a66\u884c\u306e\u78ba\u7387\uff08\u72ec\u7acb\u8a66\u884c\u306e\u5b9a\u7406\uff09\n$$ P(A_T)=P(A_1)P(A_2)\\cdots P(A_n) $$\n#\u671f\u5f85\u5024\n$$ x_1\\cdot p_1+x_2\\cdot p_2+x_3\\cdot p_3+\\cdots +x_n\\cdot p_n $$\n#\u4f59\u4e8b\u8c61\u306e\u78ba\u7387\n$$ P(\\overline{A})=1-P(A) $$\n#\u6761\u4ef6\u4ed8\u304d\u78ba\u7387\n$$ P_{A_1}(A_2) = \\frac{P(A_1\\cap A_2)}{P(A_1)} $$\n#\u78ba\u7387\u5bc6\u5ea6\u95a2\u6570\n$$ f(x)\\geq 0 $$\n$$ \\int_{\\alpha}^{\\beta} f(x)dx = 1 $$\n$$ P(a\t\\leq x\t\\leq b)= \\int_{a}^{b} f(x)dx $$\n\u671f\u5f85\u5024\n$$ E(X) = m = \\int_{\\theta}^{\\beta} x f(x)dx $$\n\u5206\u6563\n$$ V(X) = \\int_{\\theta}^{\\beta} (x-m)^2 f(x)dx $$\n\u6a19\u6e96\u504f\u5dee\n$$ \\sigma(X)=\\sqrt{V(X)} $$\n#\u6b63\u898f\u5206\u5e03\n$$ f(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-m)^2}{2\\sigma^2}} $$\n\u671f\u5f85\u5024\n$$ E(X) = m $$\n\u5206\u6563\n$$ V(X) = \\sigma^2 $$\n\u6a19\u6e96\u504f\u5dee\n$$ \\sigma(X)=\\sigma $$\n"})},title:"\u78ba\u7387"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u6570\u5217\n$$ a_1,a_2,a_3\\cdots,a_{n},\\cdots $$\n$$ \\{a_n\\} $$\n#\u7b49\u5dee\u6570\u5217\u306e\u548c\n$$ a_n=a_1+(n-1)d $$\n$$ S_n=\\sum_{m=1}^n a_m=\\frac{n\\{2a_1+(n-1)d\\}}{2}=\\frac{n(a_1+a_n)}{2} $$\n#\u7b49\u6bd4\u6570\u5217\u306e\u548c\n$$ a_n=a_1r^{n-1} $$\n$$ S_n=\\sum_{m=1}^n a_m=\\frac{a_1(1-r^n)}{1-r}=\\frac{a_1(r^n-1)}{r-1} $$\n$$ S_n=\\sum_{m=1}^n a_m=a_1n $$\n#\u03a3k\u306e\u8a08\u7b97\u5f0f\n$$ 1+2+3+\\cdots+n $$\n$$ = \\sum_{k=1}^n k = \\frac{n(n+1)}{2} $$\n#\u03a3k\u306e\uff12\u4e57\u306e\u8a08\u7b97\u5f0f\n$$ 1^2+2^2+3^2+\\cdots+n^2 $$\n$$ = \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} $$\n#\u03a3k\u306e\uff13\u4e57\u306e\u8a08\u7b97\u5f0f\n$$ 1^3+2^3+3^3+\\cdots+n^3 $$\n$$ = \\sum_{k=1}^n k^3 = \\left\\{\\frac{n(n+1)}{2}\\right\\}^2 $$\n#\u03a3k\u306e\uff14\u4e57\u306e\u8a08\u7b97\u5f0f\n$$ 1^4+2^4+3^4+\\cdots+n^4 $$\n$$ = \\sum_{k=1}^n k^4 = \\frac{1}{30}n(n+1)(2n+1)(3n^2+3n-1) $$\n#\u4e8c\u9805\u5b9a\u7406\n$$ (a+b)^n={}_n C_0a^n+{}_n C_1a^{n-1}b+{}_n C_2a^{n-2}b^2+\\cdots+{}_n C_ra^{n-r}b^r+\\cdots+{}_n C_nb^n $$\n$$ =\\sum_{r=0}^n{}_n C_r a^{n-r}b^r $$\n#\u7121\u9650\u7d1a\u6570\n$$ \\sum_{n=1}^\\infty a_n = a_1+a_2+\\cdots+a_n+\\cdots $$\n#\u7121\u9650\u7d1a\u6570\u306e\u53ce\u675f\u30fb\u767a\u6563\n$$ \\lim_{n\\to\\infty}a_n=0 $$\n$$ \\lim_{n\\to\\infty}a_n\\neq0 $$\n#\u6f38\u5316\u5f0f\n"})},title:"\u6570\u5217"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage})},title:"\u7d1a\u6570\u5c55\u958b"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u884c\u5217\n$$ \\left(\\begin{array}{rrr} -2 & 3 & 5 \\\\ 1 & -5 & 2 \\\\ 3 & 6 & -7 \\end{array}\\right) $$\n\u6210\u5206\u3001\u884c\u3001\u5217\n#\u884c\u5217\u306e\u5b9f\u6570\u500d\n$$ kA = k\\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right) $$\n$$ = \\left(\\begin{array}{rr} ka & kb \\\\ kc & kd \\end{array}\\right) $$\n#\u884c\u5217\u306e\u548c\u3001\u5dee\n$$ A+B = \\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right)+\\left(\\begin{array}{rr} p & q \\\\ r & s \\end{array}\\right) $$\n$$ = \\left(\\begin{array}{rr} a+p & b+q \\\\ c+r & d+s \\end{array}\\right) $$\n$$ A-B = \\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right)-\\left(\\begin{array}{rr} p & q \\\\ r & s \\end{array}\\right) $$\n$$ = \\left(\\begin{array}{rr} a-p & b-q \\\\ c-r & d-s \\end{array}\\right) $$\n#\u884c\u5217\u306e\u7a4d\n$$ AB = \\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right)\\left(\\begin{array}{rr} p & q \\\\ r & s \\end{array}\\right) $$\n$$ = \\left(\\begin{array}{rr} ap+br & aq+bs \\\\ cp+dr & cq+ds \\end{array}\\right) $$\n#\u5358\u4f4d\u884c\u5217\n$$ AE = EA = A $$\n$$ E = \\left(\\begin{array}{rrr} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{array}\\right) $$\n#\u96f6\u884c\u5217\n$$ AO = OA = O $$\n#\u9006\u884c\u5217\n$$ AA^{-1} = A^{-1}A = E $$\n$$ A = \\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right) $$\n$$ A^{-1} = \\frac{1}{ad-bc}\\left(\\begin{array}{rr} d & -b \\\\ -c & a \\end{array}\\right) $$\n#\u30b1\u30fc\u30ea\u30fc\u30fb\u30cf\u30df\u30eb\u30c8\u30f3\u306e\u5b9a\u7406\n$$ A = \\left(\\begin{array}{rr} a & b \\\\ c & d \\end{array}\\right) $$\n$$ A^{2}=(a+d)A-(ad-bc)E $$\n#\u56de\u8ee2\u884c\u5217\n$$ \\left(\\begin{array}{r} X \\\\ Y \\end{array}\\right) = \\left(\\begin{array}{rr} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{array}\\right)\\left(\\begin{array}{r} x \\\\ y \\end{array}\\right) $$\n$$ R_{\\theta} = \\left(\\begin{array}{rr} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{array}\\right) $$\n"})},title:"\u884c\u5217"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u5841\u4e57\n$$ \\underbrace{a\\times a\\times \\cdots \\times a\\times a}_n = a^n $$\n$$ a^0=1 $$\n$$ a^{-n}=\\frac{1}{a^n} $$\n$$ a^{\\frac{m}{n}}=\\sqrt[n]{a^m} $$\n#\u5e95\n$$ a $$\n#\u6307\u6570\n$$ n $$\n#\u6307\u6570\u6cd5\u5247\n$$ a^m \\cdot a^n = a^{m+n} $$\n$$ \\left(a^m\\right)^n = a^{mn} $$\n$$ \\left(ab\\right)^m = a^m b^m $$\n$$ \\frac{a^m}{a^n}=a^{m-n} $$\n$$ \\left(\\frac{a}{b}\\right)^m=\\frac{a^m}{b^m} $$\n#\u7d2f\u4e57\u6839\uff08n\u304c\u5947\u6570\u306e\u3068\u304d\uff09\n$$ x^n = a $$\n$$ x = \\sqrt[n]{a} $$\n#\u7d2f\u4e57\u6839\uff08n\u304c\u5076\u6570\u306e\u3068\u304d\uff09\n$$ x^n = a $$\n$$ x = \\pm\\sqrt[n]{a} $$\n#\u7d2f\u4e57\u6839\u306e\u516c\u5f0f\n$$ \\sqrt[n]{a}\\sqrt[n]{b} = \\sqrt[n]{ab} $$\n$$ \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}} $$\n$$ \\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m} $$\n$$ \\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} $$\n$$ \\sqrt[n]{a^m} = \\sqrt[np]{a^{mp}} $$\n#\u6307\u6570\u95a2\u6570\u306e\u5fae\u5206\n$$ \\left(e^n\\right)' = e^n $$\n$$ \\left(a^n\\right)' = a^n\\log{a} $$\n#\u6307\u6570\u95a2\u6570\u306e\u7a4d\u5206\n$$ \\int e^xdx = e^x + C $$\n$$ \\int a^xdx = \\frac{a^x}{\\log{a}} + C $$\n\n#\u5bfe\u6570\n$$ a^r = R $$\n$$ r = \\log_a R $$\n#\u5bfe\u6570\u8a08\u7b97\u306e\u57fa\u672c\n$$ \\log_a RS = \\log_aR+\\log_aS $$\n$$ \\log_a\\frac{R}{S}=\\log_aR-\\log_aS $$\n$$ \\log_aR^t=t\\log_aR $$\n$$ \\log_aa=1 $$\n$$ \\log_a1=0 $$\n#\u5e95\u306e\u5909\u63db\u516c\u5f0f\n$$ \\log_aR=\\frac{\\log_bR}{\\log_ba} $$\n#\u5bfe\u6570\u95a2\u6570\n$$ y = \\log_a x $$\n#\u81ea\u7136\u5bfe\u6570\n$$ \\log_e x $$\n$$ \\log x $$\n#\u5e38\u7528\u5bfe\u6570\n$$ \\log_{10} x $$\n#\u5bfe\u6570\u95a2\u6570\u306e\u5fae\u5206\n$$ \\left(\\log x\\right)'=\\frac{1}{x} $$\n$$ \\left(\\log_a x\\right)'=\\frac{1}{x\\log{a}} $$\n#\u5bfe\u6570\u95a2\u6570\u306e\u7a4d\u5206\n$$ \\int\\log{x}dx=x\\left(\\log{x}-1\\right)+C $$\n"})},title:"\u6307\u6570/\u5bfe\u6570"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage,data:"\n#\u81ea\u7136\u6570\n$$ N $$\n$$ 1, 2, 3, 4,\\cdots $$\n#\u6574\u6570\n$$ Z $$\n$$ \\cdots,-4,-3,-2,-1,0, 1, 2, 3, 4,\\cdots $$\n#\u5076\u6570\n!\uff12\u3067\u5272\u308a\u5207\u308c\u308b\u81ea\u7136\u6570\u306e\u3053\u3068\n$$ 2,4,6,8,10,\\cdots $$\n#\u5947\u6570\n!\uff12\u3067\u5272\u308b\u3068\uff11\u4f59\u308b\u81ea\u7136\u6570\u306e\u3053\u3068\n$$ 1,3,5,7,9,\\cdots $$\n#\u5c11\u6570\n$$ 14.325 $$\n#\u5206\u6570\n$$ \\frac{3}{5} $$\n#\u6709\u7406\u6570\n$$ Q $$\n$$ \\frac{m}{n} $$\n#\u7121\u7406\u6570\n$$ \\sqrt{2} $$\n$$ \\pi $$\n#\u5b9f\u6570\n$$ R $$\n#\u8907\u7d20\u6570\n$$ C $$\n#\u7d04\u6570\n#\u516c\u7d04\u6570\n#\u6700\u5927\u516c\u7d04\u6570\n#\u500d\u6570\n#\u516c\u500d\u6570\n#\u6700\u5c0f\u516c\u500d\u6570\n#\u7d20\u6570\n!\uff11\u3068\u305d\u306e\u6570\u5b57\u306e\u307b\u304b\u306b\u7d04\u6570\u3092\u3082\u305f\u306a\u3044\uff11\u3088\u308a\u5927\u304d\u306a\u81ea\u7136\u6570\u306e\u3053\u3068\n#\u56e0\u6570\n#\u5408\u6210\u6570\n#\u56e0\u6570\u5206\u89e3\n$$ x(x+3)(2x+1) $$\n#\u7d20\u56e0\u6570\u5206\u89e3\n#\u4ea4\u63db\u6cd5\u5247\n$$ a+b=b+a $$\n$$ a\\times b=b\\times a $$\n#\u7d50\u5408\u6cd5\u5247\n$$ (a+b)+c = a+(b+c) $$\n$$ (a\\times b)\\times c = a\\times(b\\times c) $$\n#\u5206\u914d\u6cd5\u5247\n$$ a\\times (b+c) = a\\times b+a\\times c $$\n$$ (b+c)\\times a = b\\times a+c\\times a $$\n#\u5358\u9805\u5f0f\u306e\u4f8b\n$$ 5ax^3 $$\n$$ -2b^2y^4 $$\n#\u591a\u9805\u5f0f\u306e\u4f8b\n$$ 5ax^3-2b^2y^4+3x^2+4ax $$\n#\u6574\u5f0f\n#\u4fc2\u6570\n#\u6b21\u6570\n#\u6607\u3079\u304d\u306e\u9806\n#\u964d\u3079\u304d\u306e\u9806\n#\u5b9a\u6570\u9805\n#\u9805\n#\u540c\u985e\u9805\n!\u6570\u4fc2\u6570\u4ee5\u5916\u306e\u6587\u5b57\u304c\u307e\u3063\u305f\u304f\u540c\u3058\u5358\u9805\u5f0f\u306e\u3053\u3068\n#\u4e57\u6cd5\u306e\u516c\u5f0f\uff08\u56e0\u6570\u5206\u89e3\u306e\u516c\u5f0f\uff09\n$$ (ax+b)(cx+d)=acx^2+(ad+bc)x+bd $$\n$$ (x+b)(x+d)=x^2+(b+d)x+bd $$\n$$ (x+y)^2=x^2+2xy+y^2 $$\n$$ (x-y)^2=x^2-2xy+y^2 $$\n$$ (x+y)(x-y)=x^2-y^2 $$\n$$ (x+y)^3=x^3+3x^2y+3xy^2+y^3 $$\n$$ (x-y)^3=x^3-3x^2y+3xy^2-y^3 $$\n$$ (x+y)(x^2-xy+y^2)=x^3+y^3 $$\n$$ (x-y)(x^2+xy+y^2)=x^3-y^3 $$\n$$ (x+y+z)(x^2+y^2+z^2-xy-yz-zx)=x^3+y^3+z^3-3xyz $$\n$$ (x^2+x+1)(x^2-x+1)=x^3+x^2+1 $$\n#\u6052\u7b49\u5f0f\u306e\u4f8b\n$$ ax^2+bx+c=0 $$\n#\u5bfe\u79f0\u5f0f\u306e\u4f8b\n$$ a^2-ab+b^2 $$\n$$ (ab)^2-a-b $$\n$$ a^2+b^2+c^2 $$\n$$ a^2bc+b^2ca+c^2ab $$\n#\u56e0\u6570\u5b9a\u7406\n$$ F(x)=(x-\\alpha)G(x) $$\n$$ F(\\alpha)=0 $$\n#\u5270\u4f59\u5b9a\u7406\n$$ F(x)=(x-\\alpha)G(x)+r $$\n$$ F(\\alpha)=r $$\n#\uff12\u91cd\u6839\u53f7\u3092\u5916\u3059\u6642\u306e\u5f0f\n$$ \\sqrt{a+b+2\\sqrt{ab}} = \\sqrt{a}+\\sqrt{b} $$\n$$ \\sqrt{a+b-2\\sqrt{ab}} = \\sqrt{a}-\\sqrt{b} $$\n#\u76f8\u52a0\u5e73\u5747\n$$ \\frac{\\sum_{n=1}^m x_n}{m} $$\n#\u76f8\u4e57\u5e73\u5747\n$$ \\sqrt[m]{\\prod_{n=1}^m x_n} $$\n#\u76f8\u52a0\u5e73\u5747\u3068\u76f8\u4e57\u5e73\u5747\u306e\u95a2\u4fc2\n$$ \\frac{\\sum_{n=1}^m x_n}{m} \\geq \\sqrt[m]{\\prod_{n=1}^m x_n} $$\n#\u30b7\u30e5\u30ef\u30eb\u30c4\u306e\u4e0d\u7b49\u5f0f\n$$ \\left(a^2+b^2\\right)\\left(x^2+y^2\\right) \\geq \\left(ax+by\\right)^2 $$\n#\u4e09\u89d2\u4e0d\u7b49\u5f0f\n$$ |x|-|y| \\leq |x+y| \\leq |x|+|y| $$\n"})},title:"\u6570\u3068\u5f0f"},{page:function(n){var $=n.pageInfo;return s.a.createElement(f.a,{title:$.title,page:$.page,maxPage:$.maxPage})},title:"\u78ba\u7387\u7d71\u8a08"}],p=function(n){function $(){return Object(t.a)(this,$),Object(r.a)(this,Object(c.a)($).apply(this,arguments))}return Object(o.a)($,n),Object(e.a)($,[{key:"render",value:function(){return s.a.createElement(l.a,{pages:x})}}]),$}(i.Component)}}]);
//# sourceMappingURL=4.242b2b7f.chunk.js.map