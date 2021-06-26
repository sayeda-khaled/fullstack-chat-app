(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{33:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(17),r=n.n(i),o=(n(32),n(33),n(13)),c=n.n(o),l=n(18),u=n(7),h=n(8),d=n(4),p=n(10),b=n(9),m=n(23),j=n(14),f=n(11),g=n.n(f),O=n(26),x=n.n(O),v=n(1),y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,text:a.props.message.text},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.saveMessage=a.saveMessage.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"saveMessage",value:function(){this.props.editMessage(this.props.message.id,this.state.text),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.message;return Object(v.jsxs)("li",{className:"message",children:[Object(v.jsxs)("div",{className:"time",children:[Object(v.jsx)("p",{children:t.author}),Object(v.jsx)(x.a,{format:"hh:mm:ss",children:t.time})]}),this.state.isEditing?Object(v.jsx)("input",{type:"text",value:this.state.text,onChange:this.handleInput,name:"text",autoComplete:"off"}):Object(v.jsx)("p",{className:"messageText",children:t.text}),t.is_owner&&Object(v.jsx)("button",{className:"settingButtons",type:"button",onClick:function(){return e.props.deleteMessage(t.id)},children:"delete"}),this.state.isEditing?Object(v.jsx)("button",{className:"settingButtons",type:"button",onClick:this.saveMessage,children:"save"}):t.is_owner&&Object(v.jsx)("button",{type:"button",className:"settingButtons",onClick:function(){return e.setState({isEditing:!0})},children:"edit"})]})}}]),n}(a.Component),k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={messages:[]},a.addMessage=a.addMessage.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.deleteMessage=a.deleteMessage.bind(Object(d.a)(a)),a.editMessage=a.editMessage.bind(Object(d.a)(a)),a.fetchMessages=a.fetchMessages.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.displayMessages=setInterval(this.fetchMessages,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.displayMessages)}},{key:"fetchMessages",value:function(){var e=this;fetch("/api/v1/chats/").then((function(e){return e.json()})).then((function(t){return e.setState({messages:t})}))}},{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"deleteMessage",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/api/v1/chats/".concat(e,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(m.a)(t.state.messages),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({messages:a})})).catch((function(e){console.error("Error:",e)}))}},{key:"editMessage",value:function(e,t){var n=this,a={text:t},s={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(a)};fetch("/api/v1/chats/".concat(e,"/"),s).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var s=Object(m.a)(n.state.messages),i=s.findIndex((function(t){return t.id===e}));s[i].text=t,n.setState({messages:s})}))}},{key:"addMessage",value:function(e){var t=this;e.preventDefault();var n={text:this.state.text},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/chats/",a).then((function(e){return e.json()})).then((function(e){var n=Object(m.a)(t.state.messages);n.push(e),t.setState({messages:n}),t.setState({text:""})}))}},{key:"render",value:function(){var e=this,t=this.state.messages.map((function(t){return Object(v.jsx)(y,{message:t,deleteMessage:e.deleteMessage,editMessage:e.editMessage},t.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{type:"submit",class:"btn btn-primary offset",onClick:function(){return e.props.handleLogout()},children:"Logout"}),Object(v.jsx)("ul",{children:t}),Object(v.jsx)("section",{className:"submit",children:Object(v.jsxs)("form",{onSubmit:this.addMessage,children:[Object(v.jsx)("input",{autoComplete:"off",className:"text",type:"text",name:"text",value:this.state.text,onChange:this.handleInput}),Object(v.jsx)("button",{className:"sendButton",type:"submit",children:"Send Message"})]})})]})}}]),n}(a.Component),S=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"formGroupExampleInput2",children:"User Name"}),Object(v.jsx)("input",{type:"text",class:"form-control",name:"username",required:!0,onChange:this.handleInput,value:this.state.username,id:"formGroupExampleInput2",placeholder:"User Name"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(v.jsx)("input",{type:"email",class:"form-control",name:"email",required:!0,onChange:this.handleInput,value:this.state.email,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(v.jsx)("input",{type:"password",class:"form-control",name:"password1",required:!0,onChange:this.handleInput,value:this.state.password1,id:"exampleInputPassword1",placeholder:"Password"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"exampleInputPassword1",children:"Confirm Password"}),Object(v.jsx)("input",{type:"password",class:"form-control",name:"password2",required:!0,onChange:this.handleInput,value:this.state.password2,id:"exampleInputPassword1",placeholder:"Password"})]})]})}}]),n}(a.Component),w=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"formGroupExampleInput2",children:"User Name"}),Object(v.jsx)("input",{autoComplete:"off",type:"text",class:"form-control",name:"username",onChange:this.handleInput,value:this.state.username,id:"formGroupExampleInput2",placeholder:"User Name"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(v.jsx)("input",{autoComplete:"off",type:"email",class:"form-control",name:"email",onChange:this.handleInput,value:this.state.email,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(v.jsx)("input",{autoComplete:"off",type:"password",class:"form-control",name:"password",onChange:this.handleInput,value:this.state.password,id:"exampleInputPassword1",placeholder:"Password"})]}),Object(v.jsx)("button",{type:"submit",class:"btn btn-primary offset",children:"Login"}),Object(v.jsx)("button",{type:"submit",class:"btn btn-secondary offset",onClick:function(){return e.props.handleSelection("registration")},children:"Register"})]})}}]),n}(a.Component),C=n(22),I=n(27),M=(a.Component,n(44),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selection:g.a.get("Authorization")?"chats":"login"},a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleSelection=a.handleSelection.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/login/",n).catch(a);case 5:if(!(s=e.sent).ok){e.next=12;break}return e.next=9,s.json().catch(a);case 9:i=e.sent,g.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chats"});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,g.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"chats"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(g.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSelection",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({selection:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("section",{className:"main",children:["chats"===this.state.selection&&Object(v.jsx)(k,{handleLogout:this.handleLogout}),"registration"===this.state.selection&&Object(v.jsx)(S,{handleRegistration:this.handleRegistration,handleSelection:this.handleSelection}),"login"===this.state.selection&&Object(v.jsx)(w,{handleLogin:this.handleLogin,handleSelection:this.handleSelection})]})})}}]),n}(s.a.Component)),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),E()}},[[45,1,2]]]);
//# sourceMappingURL=main.7a7e46ce.chunk.js.map