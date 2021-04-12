(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{121:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(129),n(130),n(9)),o=n.n(i),l=n(18),j=n(13),b=n(3),u=[];var d=function(e){var t=e.trip;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"card",id:"card-info",children:[Object(b.jsx)("img",{className:"card-img-top",src:t.img,alt:"trip"}),Object(b.jsx)("p",{className:"card-title",children:t.name}),Object(b.jsxs)("p",{children:["Location:",t.location]}),Object(b.jsx)("p",{children:t.content}),Object(b.jsxs)("p",{children:["Tags:",t.tag]}),Object(b.jsxs)("p",{className:"card-text",id:"credit-info",children:["Image by ",t.credit]})]}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return e=t,u.push(e),localStorage.setItem("saveTrip",JSON.stringify(u)),void JSON.parse(localStorage.getItem("saveTrip"));var e},children:"save"})]})};function p(){var e=JSON.parse(localStorage.getItem("saveTrip"));return e?Object(b.jsx)("div",{children:e.map((function(e){return Object(b.jsx)(d,{trip:e})}))}):"Empty save."}var O=n(23),h=n(11);var m=function(e){return e.trips?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-6 col-sm",id:"card-display",children:e.selectedTripObj?Object(b.jsx)(d,{trip:e.selectedTripObj},e.trip):e.trips.map((function(e){return Object(b.jsx)("div",{className:"card-deck",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)(d,{trip:e},e.id)})})}))})})}):null},f=n(123),x=(n(383),function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)([]),i=Object(j.a)(s,2),u=i[0],d=i[1],p=Object(a.useState)(0),O=Object(j.a)(p,2),h=O[0],x=O[1],v=Object(a.useState)(""),g=Object(j.a)(v,2),N=g[0],y=g[1],S=Object(a.useMemo)((function(){return null===c||void 0===c?void 0:c.find((function(e){return e.name===N}))}),[N,c]);return Object(a.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/getTrips?searchKey=".concat(e.searchKey,"&page=").concat(h));case 2:return n=t.sent,t.next=5,n.json();case 5:(a=t.sent)&&a.success&&r(a.trips);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.searchKey,h]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./countData");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Find your favorite trips!"}),Object(b.jsx)("label",{htmlFor:"trip-select",children:"Filter by tag:"}),Object(b.jsxs)("select",{name:"trips",id:"trips-select",onChange:function(e){y(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),null===c||void 0===c?void 0:c.map((function(e){return Object(b.jsx)("option",{value:e.tag,children:e.tag},e)}))]}),Object(b.jsx)(m,{trips:c,selectedTripObj:S}),Object(b.jsx)("div",{className:"first",children:Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(f.Pagination,{layout:"prev, pager, next",total:u.amount,pageSize:6,onCurrentChange:function(e){return x(e)}})})})]})}),v=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(x,{searchKey:e.searchKey})})},g=n(15);function N(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1];return Object(b.jsxs)("div",{class:"col-4",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"create-info",children:"Create a new Trip"}),!!u&&Object(b.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:u}),Object(b.jsxs)("form",{id:"formCreate",onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(n){var a,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=new FormData,Object.entries(c).forEach((function(e){var t=Object(j.a)(e,2),n=t[0],c=t[1];a.append(n,c)})),t.next=5,fetch("/createTrip",{method:"POST",credentials:"same-origin",body:a});case 5:return r=t.sent,t.next=8,r.json();case 8:(s=t.sent)&&s.success?e.history.push("/"):d(s.message||"Upload failed!");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(b.jsxs)("label",{class:"form-label",children:["Title:"," ",Object(b.jsx)("input",{class:"form-control",type:"text",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{name:e.target.value}))}})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{class:"form-label",children:["Location:",Object(b.jsx)("input",{class:"form-control",type:"text",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{location:e.target.value}))}})]}),Object(b.jsxs)("label",{class:"form-label",children:["Description:",Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{rows:"5",cols:"50",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{content:e.target.value}))}})]}),Object(b.jsxs)("label",{class:"form-label",children:["Photo:"," ",Object(b.jsx)("input",{class:"form-control",type:"file",id:"image-upload",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{image:e.target.files&&e.target.files[0]}))}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Create"})]})]})}n(121);var y=Object(h.g)((function(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1];return Object(b.jsxs)("div",{className:"/login",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h3",{children:"Sign in to upload posts and save your favourite posts."})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-4 box border",children:[Object(b.jsxs)("form",{id:"formLogin",onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c.username&&c.password){t.next=4;break}return d("Username and password required!"),t.abrupt("return");case 4:return d(""),t.next=7,fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 7:return a=t.sent,t.next=10,a.json();case 10:(r=t.sent)&&r.success?(e.onLogin&&e.onLogin(),e.history.push("/")):d(r.message||"Sign in failed!");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{username:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"InputPassword",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{password:e.target.value}))}})]}),!!u&&Object(b.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:u}),Object(b.jsx)("div",{className:"d-grid gap-2 mx-auto center-font",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"center-font",children:Object(b.jsx)(O.b,{className:"btn btn-success secondfont",to:"/regist",role:"button",children:"Creat New Account"})})]})})]})}));function S(e){var t=Object(a.useState)({}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1];return Object(b.jsxs)("div",{className:"/regist",children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h3",{children:"Create New Account"})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-sm-4 box border",children:[Object(b.jsxs)("form",{id:"formRegist",onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c.username&&c.password){t.next=4;break}return d("Username and password required!"),t.abrupt("return");case 4:return d(""),t.next=7,fetch("/regist",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 7:return a=t.sent,t.next=10,a.json();case 10:(r=t.sent)&&r.success?e.history.push("/login"):d(r.message||"Sign up failed!");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsx)("label",{for:"InputUsername",className:"form-label",children:"Username"}),Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{username:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"InputPassword",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",className:"form-control",onChange:function(e){r(Object(g.a)(Object(g.a)({},c),{},{password:e.target.value}))}})]}),!!u&&Object(b.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:u}),Object(b.jsx)("div",{className:"d-grid gap-2 mx-auto center-font",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Sign Up"})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"center-font",children:[Object(b.jsx)("p",{className:"secondfont",children:"Already have an account?"}),Object(b.jsx)(O.b,{className:"btn btn-primary secondfont",to:"/login",role:"button",children:"Sign In"})]})]})})]})}var w=Object(h.g)((function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(b.jsxs)("form",{className:"d-flex",children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){r(e.target.value)}}),Object(b.jsx)("button",{className:"btn btn-outline-success",onClick:function(t){t.preventDefault(),e.onSearch&&e.onSearch(c)},children:"Search"})]})})),k=Object(h.g)((function(e){var t=Object(h.f)();return console.log("Render NavigationComponent",t),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(O.b,{className:"navbar-brand",to:"/",onClick:function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onSearch(""),e.history.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Bay Area Trip Guide"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(O.b,{className:"nav-link"+("/"===t.pathname?" active":""),"aria-current":"page",onClick:function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.onSearch(""),e.history.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),to:"/list",children:"View Trips"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(O.b,{className:"nav-link"+("/upload"===t.pathname?" active":""),to:"/upload",children:"Upload"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(O.b,{className:"nav-link",to:"/saved",children:"My Favourite"})})]}),Object(b.jsx)(w,{onSearch:e.onSearch}),Object(b.jsx)("div",{className:"btn btn-success",type:"submit",role:"button",style:{marginLeft:"30px"},onClick:function(){var t=Object(l.a)(o.a.mark((function t(n){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.hasLogin,c=e.onLogout,a?c&&c():e.history.replace("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:e.hasLogin?"Logout":"Sign In"})]})]})})}));var C=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],u=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/checkSession");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent)&&n.success?c(!0):c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(O.a,{children:[Object(b.jsx)(k,{hasLogin:n,onLogout:Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/checkSession");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent)&&n.success&&c(!1);case 7:case"end":return e.stop()}}),e)}))),onSearch:function(e){u(e)}}),Object(b.jsx)("div",{className:"container full-width",children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/login",children:Object(b.jsx)(y,{onLogin:function(){c(!0)}})}),Object(b.jsx)(h.a,{path:"/regist",component:S}),Object(b.jsx)(h.a,{path:"/upload",component:N}),Object(b.jsx)(h.a,{path:"/saved",component:p}),Object(b.jsx)(h.a,{path:"/",children:Object(b.jsx)(v,{searchKey:i})})]})})]})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[388,1,2]]]);
//# sourceMappingURL=main.7c036477.chunk.js.map