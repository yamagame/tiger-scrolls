(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{32:function(t,e,n){"use strict";var a=n(36),i=n(7),r=n(8),o=n(11),l=n(9),c=n(10),s=n(0),u=n.n(s),m=n(35),d=n.n(m),h="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_HTMLorMML",p=!1,f=null,x=function(){f&&clearTimeout(f),f=setTimeout(function(){p?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub]):d()(h,(void 0).onLoad)},100)},g=function(t){return t&&(t.match(/\\\(.+\\\)/)||t.match(/\$\$.+\$\$/))},v=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(o.a)(this,Object(l.a)(e).call(this,t))).onLoad=function(t){n.setState({loaded:!0}),p=!0,t?console.log(t):(window.MathJax.Hub.Config({showMathMenu:!0,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),x(n.props.target))},n.state={loaded:!1,value:t.value,target:t.target},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?x(this.props.target):d()(h,this.onLoad))}},{key:"shouldComponentUpdate",value:function(t,e){return!!t.value&&t.value!==this.state.value}},{key:"componentDidUpdate",value:function(t,e){this.preview.innerText=this.props.value,g(this.props.value)&&(this.state.loaded?x(this.props.target):d()(h,this.onLoad))}},{key:"componentWillReceiveProps",value:function(t){this.setState({value:t.value})}},{key:"offsetHeight",value:function(){return this.preview.offsetHeight}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:this.props.className,ref:function(e){t.preview=e},style:Object(a.a)({},this.props.style,{fontSize:"1em"})})}}]),e}(s.Component);e.a=v},33:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var a=n(7),i=n(8),r=n(11),o=n(9),l=n(10),c=n(0),s=n.n(c),u=n(32),m=n(34),d=n(38),h=function(t){function e(t){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).call(this,t))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){var t=this.props,e=t.category,n=t.subcategory,a={};return t.pageDivide&&(a.pageBreakBefore="always"),s.a.createElement("div",null,s.a.createElement("div",{className:"Page-header",style:a},s.a.createElement("p",{className:"Page-title",style:{flex:"auto"}},this.props.title),this.props.maxPage>0?s.a.createElement("p",{className:"Page-Number",style:{flex:"auto"}},this.props.page," / ",this.props.maxPage):null),s.a.createElement("div",{className:"Page-body"},this.props.children,this.props.data.split("\n").map(function(t){var a=t.trim().match("([#&$!/~]*)(.+)");if(a){if("!"==a[1])return s.a.createElement("h4",{style:{paddingLeft:"1em"}},s.a.createElement(u.a,{value:a[2].trim()}));if("!!"==a[1])return s.a.createElement("p",null,s.a.createElement(u.a,{style:{paddingLeft:"1em"},value:a[2].trim()}));if("#"==a[1])return s.a.createElement(m.a,{target:a[2].trim(),category:e,subcategory:n},s.a.createElement(u.a,{style:{display:"inline"},value:a[2].trim()}));if("##"==a[1])return s.a.createElement(m.b,{style:{paddingLeft:"1em"},target:a[2].trim(),category:e,subcategory:n},s.a.createElement(u.a,{style:{display:"inline"},value:a[2].trim()}));if("$"==a[1][0])return s.a.createElement(u.a,{value:t});if("/"==a[1][0])return null;if("&"==a[1]){var i=t.match("(&+)\\[(.+)\\](.+)");return s.a.createElement("p",null,s.a.createElement(d.a,{to:"".concat(i[3].trim())},i[2]))}if("~~"==t.trim())return s.a.createElement("div",{className:"page-divide"});if("--"==t.trim())return s.a.createElement("hr",null);if("~"==a[1]){var r=a[2].trim().split("\u3001");return s.a.createElement("p",{style:{paddingLeft:"1em"}},r.map(function(t,a){return s.a.createElement("span",null,s.a.createElement(m.c,{category:e,subcategory:n},t),a<r.length-1?"\u3001":"")}))}var o=a[2].trim().split("\u3001");return s.a.createElement("p",null,o.map(function(t,a){return s.a.createElement("span",null,s.a.createElement(m.c,{category:e,subcategory:n},t),a<o.length-1?"\u3001":"")}))}return null})))}}]),e}(c.Component);h.defaultProps={title:"title",page:0,maxPage:0,data:"",category:"",subcategory:"",pageDivide:!0}},34:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var a=n(0),i=n.n(a);e.c=function(t){var e=t.children,n=t.category,a=t.subcategory,r=encodeURIComponent(e),o=encodeURIComponent(n),l=encodeURIComponent(a),c=r;return""!==n&&(c+="+".concat(o)),""!==a&&(c+="+".concat(l)),i.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(c)},e)};var r=function(t){var e=t.target,n=t.children,a=t.category,r=t.subcategory,o=encodeURIComponent(e),l=encodeURIComponent(a),c=encodeURIComponent(r),s=o;return""!==a&&(s+="+".concat(l)),""!==r&&(s+="+".concat(c)),i.a.createElement("h3",null,"\u25a1 ",i.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(s)},n))},o=function(t){var e=t.target,n=t.children,a=t.category,r=t.subcategory,o=encodeURIComponent(e),l=encodeURIComponent(a),c=encodeURIComponent(r),s=o;return""!==a&&(s+="+".concat(l)),""!==r&&(s+="+".concat(c)),i.a.createElement("h4",null,i.a.createElement("a",{target:encodeURIComponent(e),href:"https://www.google.com/search?q=".concat(s)},n))}},40:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(7),i=n(8),r=n(11),o=n(9),l=n(10),c=n(0),s=n.n(c),u=n(33),m=n(42),d=n.n(m),h=n(39),p=(n(43),n(44),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(r.a)(this,Object(o.a)(e).call(this,t))).onResize=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:window.innerWidth,height:window.innerHeight},n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize,!1);var t=this.container.clientWidth,e=this.container.clientHeight-5;this.props.initialize(this.svg,{width:t,height:e})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"componentDidUpdate",value:function(){var t=this.container.clientWidth,e=this.container.clientHeight-5;this.props.update(this.svg,{width:t,height:e})}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(u.a,{title:this.props.title},s.a.createElement("div",{ref:function(e){return t.container=e},style:{display:"inline-block",marign:0,padding:0,width:"48%",marginRight:10}},s.a.createElement("svg",{ref:function(e){return t.svg=h.k(e)},width:"100%",height:this.state.height-150,style:{border:"solid 1px lightgray"}},s.a.createElement("g",{ref:function(e){return t.base=h.k(e)},className:"base"}),s.a.createElement("g",{ref:function(e){return t.axis=h.k(e)},className:"axis"}))),s.a.createElement(d.a,{style:{display:"inline-block",border:"solid 1px lightgray"},mode:"text",theme:"chrome",width:"50%",value:this.props.text,onChange:this.props.onChangeText,height:this.state.height-150,setOptions:{newLineMode:"unix"}})))}}]),e}(c.Component));p.defaultProps={title:"",text:"",initialize:function(){},update:function(){},onChangeText:function(){}}},41:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={load:function(t,e){var n=localStorage.getItem(t);return null!==n?JSON.parse(n).data:e},save:function(t,e){localStorage.setItem(t,JSON.stringify({data:e}))}}},60:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return g});var a=n(7),i=n(8),r=n(11),o=n(9),l=n(10),c=n(13),s=n(0),u=n.n(s),m=n(40),d=n(39),h=n(41),p=["#ACD8FF","#FFBB78","#98DF8A","#FF9896","#C5B0D5","#C49C94","#F7B6D2","#DBDB8D"],f="ScatterPlot",x="A\t15\t15\t15\nB\t30\t20\t10\nC\t30\t40\t8\nD\t10\t30\t5\nE\t20\t10\t1\n",g=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(r.a)(this,Object(o.a)(e).call(this,t))).dataSet=function(){var t=[],e=n.state.text.split("\n"),a=null,i=null,r=null,o=null,l=1,c=null,s=0;for(var u in e)if(""==e[u])s=(s+1)%p.length;else{var m=e[u].replace(/(\s+)/g," ").split(" ");if(m.length>=3){var d=1;(null===a||a>m[1])&&(a=Number(m[1])),(null===r||r>m[2])&&(r=Number(m[2])),(null===i||i<m[1])&&(i=Number(m[1])),(null===o||o<m[2])&&(o=Number(m[2])),l<(d=m.length>=4?Number(m[3]):1)&&(l=d),(null===c||c>d)&&(c=d),t.push({label:m[0],x:m[1],y:m[2],value:d,cmap:s})}}var h=(i-a)/5,f=(o-r)/5;return a-=h,r-=f,i+=h,o+=f,{data:t.map(function(t){return t}),xmin:a,ymin:r,xmax:i,ymax:o,max:l,min:c}},n.initialize=function(t,e){var a=e.width,i=e.height,r=n.state.dataSet,o=r.xmin,l=r.xmax,c=r.ymin,s=r.ymax;n.width=a,n.height=i,n.xScale=d.j().domain([o,l]).range([0,a]),n.yScale=d.j().domain([c,s]).range([0,i]),n.xAxis=d.a(n.xScale).ticks(10).tickSize(a).tickFormat(function(t){return t}),n.yAxis=d.b(n.yScale).ticks(10).tickSize(i).tickFormat(function(t){return t}),n.base=t.select("g.base"),n.axis=t.select("g.axis"),n.zoomBehavior=d.l().scaleExtent([1/30,3e3]).on("start",function(){}).on("zoom",function(){var e=d.d.transform;n.transform=e,n.updateSelf(t)}).on("end",function(){}),t.call(n.zoomBehavior),n.setState({dataSet:n.dataSet(),height:i,width:a})},n.update=function(t,e){var a=e.width,i=e.height,r=(Object(c.a)(Object(c.a)(n)),n.state.dataSet),o=r.xmin,l=r.xmax,s=r.ymin,u=r.ymax,m=(r.max,r.min);n.width=a,n.height=i,n.rmax=3/m,n.xScale.domain([o,l]).range([0,a]),n.yScale.domain([s,u]).range([0,i]);var d=t.select("g.base");d.selectAll("circle").data(n.state.dataSet.data).exit().remove(),d.selectAll("circle").data(n.state.dataSet.data).enter().append("circle").attr("cx",function(t){return n.xScale(t.x)}).attr("cy",function(t){return n.yScale(t.y)}).attr("fill",function(t){return p[t.cmap]}).attr("stroke","#FFF").attr("stroke-width",.25).attr("fill-opacity",.4).attr("r",function(t){return t.value*n.rmax}),d.selectAll("text.label").data(n.state.dataSet.data).exit().remove(),d.selectAll("text.label").data(n.state.dataSet.data).enter().append("text").classed("label",!0).attr("x",function(t){return n.xScale(t.x)}).attr("y",function(t){return n.yScale(t.y)+5}).text(function(t){return t.label}).attr("font-size",10).attr("text-anchor","middle").attr("alignment-baseline","hanging").attr("fill","black").style("pointer-events","none"),n.xAxis.scale(n.xScale),n.yAxis.scale(n.yScale),n.updateSelf(t)},n.updateSelf=function(t){var e=Object(c.a)(Object(c.a)(n)),a=t.select("g.base"),i=Object(c.a)(Object(c.a)(n)),r=i.width,o=i.height;n.transform&&(n.base.attr("transform",n.transform),n.axis.select("g.xAxis").call(n.xAxis.scale(n.transform.rescaleX(n.xScale))),n.axis.select("g.yAxis").call(n.yAxis.scale(n.transform.rescaleY(n.yScale)))),a.selectAll("circle").attr("cx",function(t){return n.xScale(t.x)}).attr("cy",function(t){return n.yScale(t.y)}).attr("fill",function(t){return p[t.cmap]}).attr("r",function(t){return t.value*n.rmax}).on("mouseover",function(t,e){a.selectAll("text.label").style("visibility",function(t,n){return e==n?"visible":"hidden"})}).on("mousemove",function(t){}).on("mouseout",function(t){a.selectAll("text.label").style("visibility","visible")}),a.selectAll("text.label").attr("x",function(t){return n.xScale(t.x)}).attr("y",function(t){return n.yScale(t.y)+5}).text(function(t){return t.label}),n.xAxis.tickSize(o).tickFormat(function(t){return t}),n.yAxis.tickSize(r).tickFormat(function(t){return t}),n.axis.select("g.xAxis").remove(),n.axis.select("g.yAxis").remove(),n.axis.append("g").classed("xAxis",!0).call(function(t){t.call(e.xAxis),t.select(".domain").remove(),t.selectAll(".tick line").style("pointer-events","none").attr("stroke","#777").attr("stroke-dasharray","2,2"),t.selectAll(".tick text").style("pointer-events","none").attr("text-anchor","start").attr("transform","rotate(".concat(-90,",",10,",").concat(o-15,")")).attr("x",10).attr("y",o-15).attr("dx",-8)}),n.axis.append("g").classed("yAxis",!0).call(function(t){t.call(e.yAxis),t.select(".domain").remove(),t.selectAll(".tick line").style("pointer-events","none").attr("stroke","#777").attr("stroke-dasharray","2,2"),t.selectAll(".tick text").style("pointer-events","none").attr("text-anchor","start").attr("x",10).attr("dy",-4)})},n.onChangeText=function(t){n.setState({text:t},function(){h.a.save(f,t),n.setState({dataSet:n.dataSet()},function(){})})},n.state={text:n.props.text,dataSet:{data:[],xmin:0,ymin:0,xmax:100,ymax:100}},n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=h.a.load(f,x);this.onChangeText(t)}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){return u.a.createElement(m.a,{title:this.props.title,initialize:this.initialize,update:this.update,onChangeText:this.onChangeText,text:this.state.text})}}]),e}(s.Component);g.defaultProps={title:"\u6563\u5e03\u56f3",text:x}}}]);
//# sourceMappingURL=11.1ae46258.chunk.js.map