(this.webpackJsonpqingning=this.webpackJsonpqingning||[]).push([[4],{53:function(e,t,a){"use strict";var n=a(25),r=a(0),l=a.n(r);a(54);t.a=function(e){var t=e.handleChange,a=e.label,r=Object(n.a)(e,["handleChange","label"]);return l.a.createElement("div",{className:"group"},l.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),a?l.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},a):null)}},54:function(e,t,a){},55:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(14),l=a.n(r),s=a(18),c=a(9),o=a(10),i=a(12),u=a(11),m=a(13),d=a(0),h=a.n(d),p=a(53),b=a(25),g=function(e){var t=e.children,a=Object(b.a)(e,["children"]);return h.a.createElement("div",Object.assign({className:"btn btn-primary"},a),t)},v=a(20),f=(a(55),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).validEmail=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.state.email)},a.getEmail=function(e){a.setState({email:e.target.value},(function(){a.validEmail()?a.setState({send:!0}):a.setState({send:!1})}))},a.handleSubmit=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.email,s=n.password,r&&s){e.next=5;break}return a.setState({errors:"\u8f93\u5165\u90ae\u7bb1\u548c\u5bc6\u7801"}),e.abrupt("return");case 5:return e.prev=5,e.next=8,v.a.signInWithEmailAndPassword(r,s);case 8:a.setState({email:"",password:""}),a.props.history.push("/"),e.next=25;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),e.t1=e.t0.code,e.next="auth/user-not-found"===e.t1?18:"auth/wrong-password"===e.t1?20:"auth/network-request-failed"===e.t1?22:24;break;case 18:case 20:return a.setState({errors:"\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0d\u6b63\u786e\uff0c\u8bf7\u4fee\u6539"}),e.abrupt("break",25);case 22:return a.setState({errors:"\u7f51\u7edc\u6545\u969c\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684\u7f51\u7edc\u7136\u540e\u91cd\u8bd5"}),e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,r=t.value,l=t.name;a.setState(Object(n.a)({},l,r))},a.state={email:"",password:"",send:!1,errors:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".relative").classList.add("background"),document.querySelector(".logoText").classList.add("logo-b"),document.querySelector(".logo").classList.add("text-center"),document.querySelector(".options").style.display="none",console.log("changed to linear")}},{key:"componentWillUnmount",value:function(){document.querySelector(".logoText").classList.remove("logo-b"),document.querySelector(".logo").classList.remove("text-center"),document.querySelector(".relative").classList.remove("background"),document.querySelector(".options").style.display="flex",console.log("changed away linear")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors,r=e.send;return h.a.createElement("div",{className:"container"},h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("div",{className:"row flex"},h.a.createElement("div",{className:"start"},h.a.createElement("img",{src:"https://media.giphy.com/media/woIKv4f7TETgQ/giphy.gif",width:"100%",alt:"the"})),h.a.createElement("div",null,h.a.createElement("h2",{className:"h3-responsive text-center text-white my-4"},"\u4f7f\u7528\u8d26\u53f7\u5bc6\u7801\u767b\u5f55"),h.a.createElement("form",{onSubmit:this.handleSubmit},n?h.a.createElement("div",{className:"text-danger"},n):null,h.a.createElement(p.a,{type:"email",name:"email",value:t,id:"email",label:"\u90ae\u7bb1",handleChange:this.handleChange,onChange:this.getEmail}),h.a.createElement(p.a,{type:"password",name:"password",label:"\u5bc6\u7801",value:a,handleChange:this.handleChange,id:"password"}),h.a.createElement("div",{className:"text-center"},h.a.createElement("input",{type:"submit",className:"btn btn-warning mr-4",value:"\u767b\u5f55",disabled:!r}),h.a.createElement("h6",{className:"hr"},"\u6216"),h.a.createElement(g,{onClick:v.c},h.a.createElement("i",{className:"fab fa-google"})," Google\u767b\u5f55"))))))}}]),t}(h.a.Component));t.default=f}}]);
//# sourceMappingURL=4.1fe5ce87.chunk.js.map