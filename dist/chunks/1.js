(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(7)),u=f(n(8)),a=f(n(9)),c=f(n(10)),r=f(n(11)),d=f(n(0)),i=n(22),l=f(n(33));function f(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return(0,u.default)(this,e),(0,c.default)(this,(e.__proto__||(0,o.default)(e)).apply(this,arguments))}return(0,r.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.index),l.default.get("https://www.easy-mock.com/mock/5c8e0a6d664c69140f7d07be/list/content").then(function(e){t.props.getContent(e.data.data)}).catch(function(){t.props.getContent("<div class='detailWrapper'>页面加载失败了。。。</div>")})}},{key:"render",value:function(){return d.default.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.content}})}}]),e}(d.default.Component);e.default=(0,i.connect)(function(t){return{content:t.detail.content}},function(t){return{getContent:function(e){t({type:"content",content:e})}}})(s)},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return o.default.createElement("div",null,o.default.createElement(u.default,{index:t.match.params.id}))};var o=a(n(0)),u=a(n(74));function a(t){return t&&t.__esModule?t:{default:t}}}}]);