(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),s=a.n(r),l=(a(39),a(1)),c=a(2),i=a(4),m=a(3),u=a(6),p=a(5),h=a(10),b=a(13),d=(a(40),a(41),a(16)),f=a(18),g=a.n(f);function v(e,t){return g.a.post(e,t,{withCredentials:!0}).then((function(e){return e.data}))}function E(e){return g.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))}var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",error:""},a.onChange=a.onChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),v("/user/login",this.state).then((function(e){console.log(e),t.props.changeLinks(!0),t.props.history.push("/")})).catch((function(e){t.setState({error:e.response.data})}))}},{key:"render",value:function(){var e=this.state.error;return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("span",{className:"text-danger"},e),o.a.createElement("form",{onSubmit:this.onSubmit,className:"form-group"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email",className:"control-label"}),o.a.createElement("input",{name:"email",type:"text",placeholder:"email",onChange:this.onChange,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password",className:"control-label"}),o.a.createElement("input",{name:"password",type:"password",placeholder:"password",onChange:this.onChange,value:this.state.password,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.password)),o.a.createElement("button",{type:"submit",className:"btn btn-info btn-block"},"Submit")))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",userName:"",fullName:"",error:""},a.onChange=a.onChange.bind(Object(u.a)(a)),a.onChangeFile=a.onChangeFile.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onChangeFile",value:function(e){}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("email",this.state.email),a.append("password",this.state.password),a.append("userName",this.state.userName),a.append("fullName",this.state.fullName),v("/user/register",this.state).then((function(e){console.log(e),t.props.changeLinks(!0),t.props.history.push("/verify")})).catch((function(e){t.setState({error:e.response.data})}))}},{key:"render",value:function(){var e=this.state.error;return o.a.createElement("div",null,o.a.createElement("h1",null,"Register"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("span",{className:"text-danger"},e),o.a.createElement("form",{onSubmit:this.onSubmit,className:"form-group"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email",className:"control-label"}),o.a.createElement("input",{name:"email",type:"text",placeholder:"email",onChange:this.onChange,value:this.state.email,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.email)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password",className:"control-label"}),o.a.createElement("input",{name:"password",type:"password",placeholder:"password",onChange:this.onChange,value:this.state.password,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.password)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"userName",className:"control-label"}),o.a.createElement("input",{name:"userName",type:"text",placeholder:"username",onChange:this.onChange,value:this.state.userName,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.userName)),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"fullName",className:"control-label"}),o.a.createElement("input",{name:"fullName",type:"text",placeholder:"full name",onChange:this.onChange,value:this.state.fullName,className:"form-control"}),o.a.createElement("span",{className:"text-danger"},e.fullName)),o.a.createElement("button",{type:"submit",className:"btn btn-info btn-block"},"Submit")))))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(e){console.log(e.props),v("/user/logout").then((function(t){console.log("logged out"),e.props.changeLinks(!1)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t="";return t=this.props.isLoggedIn?o.a.createElement("ul",{className:"navbar-nav flex-grow-1"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("span",{className:"nav-link text-dark",onClick:function(){return e.onClick(e)}},"Logout"))):o.a.createElement("ul",{className:"navbar-nav flex-grow-1"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(h.b,{className:"nav-link text-dark",to:"/register"},"Register")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(h.b,{className:"nav-link text-dark",to:"/login"},"Login"))),o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"},o.a.createElement("div",{className:"container"},o.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Home"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"},t))))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"border-top footer text-muted"},o.a.createElement("div",{className:"container"},"\xa9 2020 - Logistics management social - ",o.a.createElement("a",{href:"#"},"Privacy")))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.comments.map((function(e){return o.a.createElement(w,{post:e})}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={text:"",form:!1},a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a.onClick=a.onClick.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),v("/post/comments/".concat(this.props.post._id),this.state).then((function(e){console.log(e),t.props.getComments(),t.setState({form:!1})})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onClick",value:function(){this.setState({form:!0})}},{key:"render",value:function(){var e="comment"===this.props.post.contentType?"reply":"comment",t=this.state.form?o.a.createElement("form",{onSubmit:this.onSubmit,className:"form-group"},o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{className:"form-control",name:"text",rows:"3",placeholder:"write something here",value:this.state.text,onChange:this.onChange})),o.a.createElement("button",{type:"submit",className:"btn btn-info btn-block"},"Submit")):o.a.createElement("span",{onClick:this.onClick,className:"card-link"},"Add ",e);return o.a.createElement("div",{className:"col-6"},t)}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={commentsListed:!1,comments:[],commentCount:"",addForm:!1,newComment:""},a.getComments=a.getComments.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;"comment"!==this.props.post.contentType&&"post"!==this.props.post.contentType||E("/post/count/".concat(this.props.post._id)).then((function(t){e.setState({commentCount:t.count})})).catch((function(e){console.log(e)}))}},{key:"onClickComments",value:function(){this.state.commentsListed?this.setState({commentsListed:!1,comments:[]}):this.getComments()}},{key:"getComments",value:function(){var e=this;E("/post/comments/".concat(this.props.post._id)).then((function(t){e.setState({commentsListed:!0,comments:t.comments})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.post,t="";"comment"===e.contentType?t="Replies":"post"===e.contentType&&(t="Comments");var a=""!==t?o.a.createElement("span",{onClick:this.onClickComments.bind(this),className:"card-link"},t,"(",this.state.commentCount,")"):"",n=""!==t?o.a.createElement(k,{getComments:this.getComments,post:e}):"",r=new Date(e.time_added);return o.a.createElement("div",{className:"custom card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},o.a.createElement(h.b,{to:"/profile/".concat(e.userId)},e.userName)),o.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},r.getDate(),"/",r.getMonth()+1,"/",r.getFullYear()),o.a.createElement("hr",null),o.a.createElement("p",{className:"card-text"},e.text),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},a),n),o.a.createElement("hr",null),0!==this.state.comments.length?o.a.createElement("h6",{className:"text-muted"},t):"",o.a.createElement(y,{comments:this.state.comments})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={posts:[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="/post/";this.props.profile&&(t+="?userId="+this.props.profile._id),E(t).then((function(t){e.setState({posts:t.posts})})).catch((function(t){console.log(t),"not logged in"===t.response.data&&(e.props.profile||e.props.history.push("/login"))}))}},{key:"render",value:function(){var e=this.state.posts.map((function(e){return o.a.createElement(w,{post:e})})),t=o.a.createElement(h.b,{to:"/create",className:"btn btn-info btn-block"},"Create post");return this.props.profile&&(this.props.profile.owner||(t="")),o.a.createElement("div",null,t,o.a.createElement("hr",null),o.a.createElement("br",null),e)}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={text:"",myFile:""},a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a.onChangeFile=a.onChangeFile.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("text",this.state.text),a.append("myFile",this.state.myFile,this.state.myFile.name),v("/post/",a).then((function(e){console.log(e),t.props.history.push("/")})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onChangeFile",value:function(e){this.setState({myFile:e.target.files[0]})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Create post"),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("form",{onSubmit:this.onSubmit,className:"form-group"},o.a.createElement("div",{class:"form-group"},o.a.createElement("textarea",{class:"form-control",name:"text",rows:"3",placeholder:"write something here",value:this.state.text,onChange:this.onChange})),o.a.createElement("input",{type:"file",name:"myFile",onChange:this.onChangeFile}),o.a.createElement("button",{type:"submit",className:"btn btn-info btn-block"},"Submit")))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={profile:""},a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.onChange=a.onChange.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("profile",this.state.profile,this.state.profile.name),v("/user/image/".concat(this.props.profile._id),a).then((function(e){console.log(e),t.props.uploadDone()}))}},{key:"onChange",value:function(e){this.setState({profile:e.target.files[0]})}},{key:"render",value:function(){var e=this.props.profile,t="";return e.image?t=o.a.createElement("img",{style:{width:"100%"},src:"/uploads/".concat(e.image),alt:"profile pic"}):e.owner&&(t=o.a.createElement("form",{onSubmit:this.onSubmit,className:"form-group"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"profile",className:"control-label"},"profile pic"),o.a.createElement("input",{type:"file",name:"profile",onChange:this.onChange,className:"form-control"})),o.a.createElement("button",{type:"submit",className:"btn btn-info btn-block"},"Submit"))),o.a.createElement("div",{style:{backgroundColor:"gray",minHeight:"200px",padding:"20px"}},t)}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={profile:""},a.uploadDone=a.uploadDone.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;E("/user/profile/".concat(t.userid)).then((function(t){e.setState(t)})).catch((function(e){console.log(e)}))}},{key:"uploadDone",value:function(){var e=this.props.match.params;this.props.history.replace("/profile/".concat(e.userid))}},{key:"render",value:function(){if(""===this.state.profile)return"";var e=this.state.profile;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4"},o.a.createElement(L,{profile:e,uploadDone:this.uploadDone})),o.a.createElement("div",{className:"col-sm-12 col-md-8 col-lg-8"},o.a.createElement("h2",null,e.userName),o.a.createElement("h3",null,e.fullName),o.a.createElement("h6",null,e.countPost," posts"))),o.a.createElement(x,{profile:e}))}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"A verification link has been sent to the email-address you provided. Click on that link to get your email verified."),o.a.createElement("p",null,"You can't post or comment or reply unless your email is verified. You can browse the ",o.a.createElement(h.b,{to:"/"},"feed")," though"))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isLoggedIn:!1},a.changeLinks=a.changeLinks.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E("/user/isLoggedIn").then((function(t){e.setState(t)})).catch((function(e){console.log(e)}))}},{key:"changeLinks",value:function(e){this.setState({isLoggedIn:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(h.a,null,o.a.createElement("div",null,o.a.createElement(j,{isLoggedIn:this.state.isLoggedIn,changeLinks:this.changeLinks}),o.a.createElement("div",{className:"AppJsContainer container"},o.a.createElement("main",{role:"main",className:"pb-3"},o.a.createElement(b.a,{path:"/login",exact:!0,render:function(t){return o.a.createElement(N,Object.assign({},t,{changeLinks:e.changeLinks}))}}),o.a.createElement(b.a,{path:"/register",exact:!0,render:function(t){return o.a.createElement(C,Object.assign({},t,{changeLinks:e.changeLinks}))}}),o.a.createElement(b.a,{path:"/create",exact:!0,component:S}),o.a.createElement(b.a,{path:"/",exact:!0,component:x}),o.a.createElement(b.a,{path:"/profile/:userid",exact:!0,component:F}),o.a.createElement(b.a,{path:"/verify",exact:!0,component:D}))),o.a.createElement(b.a,{path:"/",component:O})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c4f11640.chunk.js.map