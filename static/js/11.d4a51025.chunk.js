(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{32:function(t,e,n){"use strict";var a=n(36),r=n(7),i=n(8),c=n(10),o=n(9),l=n(11),u=n(0),s=n.n(u),d=n(35),h=n.n(d),p="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",f=!1,m=null,g=function(){m&&clearTimeout(m),m=setTimeout(function(){f?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):h()(p,(void 0).onLoad)},100)},y=function(t){return t&&(t.match(/\\\(.+\\\)/)||t.match(/\$\$.+\$\$/))},v=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(c.a)(this,Object(o.a)(e).call(this,t))).onLoad=function(t){n.setState({loaded:!0}),f=!0,t?console.log(t):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),g(n.props.target))},n.state={loaded:!1,value:t.value,target:t.target},n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,y(this.props.value)&&(this.state.loaded?g(this.props.target):h()(p,this.onLoad))}},{key:"shouldComponentUpdate",value:function(t,e){return!!t.value&&t.value!==this.state.value}},{key:"componentDidUpdate",value:function(t,e){this.preview.innerText=this.props.value,y(this.props.value)&&(this.state.loaded?g(this.props.target):h()(p,this.onLoad))}},{key:"componentWillReceiveProps",value:function(t){this.setState({value:t.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:this.props.className,ref:function(e){t.preview=e},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),e}(u.Component);e.a=v},33:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(7),r=n(8),i=n(10),c=n(9),o=n(11),l=n(0),u=n.n(l),s=n(32),d=n(34),h=n(38),p=function(t){function e(t){return Object(a.a)(this,e),Object(i.a)(this,Object(c.a)(e).call(this,t))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){var t=this.props,e=t.category,n=t.subcategory;return u.a.createElement("div",null,u.a.createElement("div",{className:"Page-header"},u.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?u.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),u.a.createElement("div",{className:"Page-body"},this.props.children,this.props.data.split("\n").map(function(t){var a=t.trim().match("([#&$!/~]*)(.+)");if(a){if("!"==a[1])return u.a.createElement("h4",{style:{paddingLeft:"1em"}},u.a.createElement(s.a,{value:a[2].trim()}));if("!!"==a[1])return u.a.createElement("p",null,u.a.createElement(s.a,{style:{paddingLeft:"1em"},value:a[2].trim()}));if("#"==a[1])return u.a.createElement(d.a,{target:a[2].trim(),category:e,subcategory:n},u.a.createElement(s.a,{style:{display:"inline"},value:a[2].trim()}));if("##"==a[1])return u.a.createElement(d.b,{style:{paddingLeft:"1em"},target:a[2].trim(),category:e,subcategory:n},u.a.createElement(s.a,{style:{display:"inline"},value:a[2].trim()}));if("$"==a[1][0])return u.a.createElement(s.a,{value:t});if("/"==a[1][0])return null;if("&"==a[1]){var r=t.match("(&+)\\[(.+)\\](.+)");return u.a.createElement("p",null,u.a.createElement(h.a,{to:"".concat(r[3].trim())},r[2]))}if("~"==a[1]){var i=a[2].trim().split("\u3001");return u.a.createElement("p",{style:{paddingLeft:"1em"}},i.map(function(t,a){return u.a.createElement("span",null,u.a.createElement(d.c,{category:e,subcategory:n},t),a<i.length-1?"\u3001":"")}))}var c=a[2].trim().split("\u3001");return u.a.createElement("p",null,c.map(function(t,a){return u.a.createElement("span",null,u.a.createElement(d.c,{category:e,subcategory:n},t),a<c.length-1?"\u3001":"")}))}return null})))}}]),e}(l.Component);p.defaultProps={title:"title",page:0,maxPage:0,data:"",category:"",subcategory:""}},34:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c});var a=n(0),r=n.n(a);e.c=function(t){var e=t.children,n=t.category,a=t.subcategory,i=encodeURIComponent(e),c=encodeURIComponent(n),o=encodeURIComponent(a),l=i;return""!==n&&(l+="+".concat(c)),""!==a&&(l+="+".concat(o)),r.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(l)},e)};var i=function(t){var e=t.target,n=t.children,a=t.category,i=t.subcategory,c=encodeURIComponent(e),o=encodeURIComponent(a),l=encodeURIComponent(i),u=c;return""!==a&&(u+="+".concat(o)),""!==i&&(u+="+".concat(l)),r.a.createElement("h3",null,"\u25a1 ",r.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(u)},n))},c=function(t){var e=t.target,n=t.children,a=t.category,i=t.subcategory,c=encodeURIComponent(e),o=encodeURIComponent(a),l=encodeURIComponent(i),u=c;return""!==a&&(u+="+".concat(o)),""!==i&&(u+="+".concat(l)),r.a.createElement("h4",null,r.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(u)},n))}},40:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var a=n(7),r=n(8),i=n(10),c=n(9),o=n(11),l=n(0),u=n.n(l),s=n(33),d=n(41),h=n.n(d),p=n(39),f=(n(42),n(43),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).onResize=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:window.innerWidth,height:window.innerHeight},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize,!1);var t=this.container.clientWidth,e=this.container.clientHeight-5;this.props.initialize(this.svg,{width:t,height:e})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"componentDidUpdate",value:function(){var t=this.container.clientWidth,e=this.container.clientHeight-5;this.props.update(this.svg,{width:t,height:e})}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){var t=this;return u.a.createElement("div",null,u.a.createElement(s.a,{title:this.props.title},u.a.createElement("div",{ref:function(e){return t.container=e},style:{display:"inline-block",marign:0,padding:0,width:"48%",marginRight:10}},u.a.createElement("svg",{ref:function(e){return t.svg=p.k(e)},width:"100%",height:this.state.height-150,style:{border:"solid 1px lightgray"}},u.a.createElement("g",{ref:function(e){return t.base=p.k(e)}}))),u.a.createElement(h.a,{style:{display:"inline-block",border:"solid 1px lightgray"},mode:"text",theme:"chrome",width:"50%",value:this.props.text,onChange:this.props.onChangeText,height:this.state.height-150,setOptions:{newLineMode:"unix"}})))}}]),e}(l.Component));f.defaultProps={title:"",text:"",initialize:function(){},update:function(){},onChangeText:function(){}}},60:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return p});var a=n(7),r=n(8),i=n(10),c=n(9),o=n(11),l=n(13),u=n(0),s=n.n(u),d=n(40),h=n(39),p=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(i.a)(this,Object(c.a)(e).call(this,t))).dataSet=function(){var t=n.state.text.split("\n"),e=[],a=[],r=0,i={},c=function(t,e){var n=-1;return t.some(function(t,a){return t.label==e&&(n=a,!0)}),n};for(var o in t){var l=t[o].replace(/(\s+)/g," ").split(" ");l.length>=3?("undefined"===typeof i[l[0]]&&(i[l[0]]={},e.push({id:e.length,label:l[0]})),"undefined"===typeof i[l[1]]&&(i[l[1]]={},e.push({id:e.length,label:l[1]})),a.push({source:c(e,l[0]),target:c(e,l[1]),value:Number(l[2])}),r<Number(l[2])&&(r=Number(l[2]))):l.length>0&&""!=l[0]&&e.push({id:e.length,label:l[0]})}return{max:r,nodes:e,links:a.map(function(t){return t.value/=r,t})}},n.initialize=function(t,e){var a=e.width,r=e.height,i=n.state.dataSet;i.xmin,i.xmax,i.ymin,i.ymax;n.xScale=h.j().domain([0,a]).range([0,a]),n.yScale=h.j().domain([0,r]).range([0,r]),n.xAxis=h.a(n.xScale).tickSize(r).tickFormat(function(t){return t}),n.yAxis=h.b(n.yScale).tickSize(a).tickFormat(function(t){return t}),n.setState({dataSet:n.dataSet()})},n.update=function(t,e){var a=e.width,r=e.height,i=Object(l.a)(Object(l.a)(n)),c=n.state.dataSet,o=(c.xmin,c.xmax,c.ymin,c.ymax,c.links),u=c.nodes,s=Math.max(a,r);n.xScale.domain([0,a]).range([0,a]),n.yScale.domain([0,r]).range([0,r]);var d=h.i().force("link",h.g().id(function(t){return t.id})).force("charge",h.h()).force("center",h.e(a/2,r/2));d.nodes(u).on("tick",function(){p.selectAll("line.link").data(o).exit().remove(),p.selectAll("line.link").data(o).enter().append("line").classed("link",!0).attr("fill","none").attr("stroke","#999").attr("stroke-opacity",.6),p.selectAll("line.link").attr("x1",function(t){return i.xScale(t.source.x)}).attr("y1",function(t){return i.yScale(t.source.y)}).attr("x2",function(t){return i.xScale(t.target.x)}).attr("y2",function(t){return i.yScale(t.target.y)}).attr("stroke-width",function(t){return 1}),p.selectAll("circle").data(u).exit().remove(),p.selectAll("circle").data(u).enter().append("circle").attr("cx",function(t){return i.xScale(t.x)}).attr("cy",function(t){return i.yScale(t.y)}).attr("r",function(t){return 5}).attr("fill","#ACD8FF").attr("stroke","#fff").attr("stroke-width",1.5),p.selectAll("circle").attr("cx",function(t){return i.xScale(t.x)}).attr("cy",function(t){return i.yScale(t.y)}).attr("r",function(t){return 5}),p.selectAll("text.label").data(u).exit().remove(),p.selectAll("text.label").data(u).enter().append("text").classed("label",!0).attr("x",function(t){return i.xScale(t.x)}).attr("y",function(t){return i.yScale(t.y)+5}).text(function(t){return t.label}).attr("font-size","10").attr("text-anchor","middle").attr("alignment-baseline","hanging").attr("fill","black").style("pointer-events","none").style("user-select","none"),p.selectAll("text.label").attr("x",function(t){return i.xScale(t.x)}).attr("y",function(t){return i.yScale(t.y)+5}).text(function(t){return t.label}),p.call(h.c().subject(function(){return d.find(h.d.x,h.d.y)}).on("start",function(){h.d.active||d.alphaTarget(.3).restart();h.d.subject.fx=h.d.subject.x,h.d.subject.fy=h.d.subject.y}).on("drag",function(){h.d.subject.fx=h.d.x,h.d.subject.fy=h.d.y}).on("end",function(){h.d.active||d.alphaTarget(0);h.d.subject.fx=null,h.d.subject.fy=null}))}),d.force("link").links(o).distance(function(){return s/5}),d.force("collide",h.f().radius(function(t){return 5}).iterations(2));var p=t.select("g")},n.onChangeText=function(t){n.setState({text:t},function(){n.setState({dataSet:n.dataSet()},function(){})})},n.state={text:n.props.text,dataSet:{data:[],xmin:0,ymin:0,xmax:100,ymax:100}},n}return Object(o.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(d.a,{title:this.props.title,initialize:this.initialize,update:this.update,onChangeText:this.onChangeText,text:this.state.text})}}]),e}(u.Component);p.defaultProps={title:"\u5171\u8d77\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",text:"A\tB\t6\nB\tC\t5\nC\tD\t4\nD\tB\t3\n"}}}]);
//# sourceMappingURL=11.d4a51025.chunk.js.map