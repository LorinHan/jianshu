(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{75:function(e,t){e.exports={login:"src-css-login-login-6140a",center:"src-css-login-center-3e330"}},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(7)),l=f(n(8)),u=f(n(9)),r=f(n(10)),a=f(n(11)),c=f(n(0)),i=f(n(75)),s=n(51),d=n(22),p=n(27);function f(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(){return(0,l.default)(this,t),(0,r.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.login),this.props.login?c.default.createElement(p.Redirect,{to:"/"}):c.default.createElement("div",{className:i.default.login},c.default.createElement("div",{className:i.default.center},c.default.createElement(s.Input,{placeholder:"手机号或邮箱",ref:function(t){e.props.user=t}}),c.default.createElement(s.Input.Password,{placeholder:"密码",ref:function(t){e.props.pwd=t},id:"pwd"}),c.default.createElement(s.Button,{type:"primary",onClick:function(){return e.props.loginFunc(!0,e.props.user.state.value)}},"登录")))}}]),t}(c.default.Component);t.default=(0,d.connect)(function(e){return{login:e.login.login}},function(e){return{loginFunc:function(t,n){console.log(n);var o=document.getElementById("pwd").value;console.log(o),e({type:"loginFunc",value:t})}}})(g)}}]);