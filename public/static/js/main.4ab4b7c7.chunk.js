(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{202:function(e,a,t){e.exports=t(344)},208:function(e,a,t){},344:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(52),l=t.n(r),i=(t(207),t(208),t(24)),s=t(18);var m=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],l=function(){r(!t)};return c.a.createElement("nav",null,c.a.createElement("div",{className:"ui tablet computer only padded grid"},c.a.createElement("div",{className:"ui inverted borderless top fixed fluid menu"},c.a.createElement(s.c,{to:"/",className:"header item"},"Petstore"))),c.a.createElement("div",{className:"ui mobile only padded grid"},c.a.createElement("div",{className:"ui top fixed borderless fluid inverted menu"},c.a.createElement(s.c,{to:"/",className:"header item"},"Petstore"),c.a.createElement("div",{className:"right menu"},c.a.createElement("div",{className:"item"},c.a.createElement("button",{className:"ui icon toggle basic inverted button",onClick:l},c.a.createElement("i",{className:"content icon"})))),c.a.createElement("div",{className:"ui vertical borderless inverted fluid menu"+(t?" visible":"")},c.a.createElement(s.c,{to:"/pet",onClick:l,className:"item"},"Pet")))))};var o=function(){return c.a.createElement("nav",{id:"sidebar",className:"three wide tablet only three wide computer only column"},c.a.createElement("div",{className:"ui vertical borderless fluid text menu"},c.a.createElement(s.c,{to:"/pet",className:"item"},"Pet")))};var u=function(){return c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Home")))},d=t(32),p=t(22),E=t.n(p),h=t(37),b=t(44),v=t(353),f=t(358),N=t(54),g=t.n(N),j=t(360),y=t(357);var O=function(){var e=Object(b.f)(),a=Object(b.g)(),t=g.a.parse(a.search.substr(1)),r=parseInt(t.page?t.page:"1"),l=10*r-10,m=t.sort?t.sort:{};Object(n.useEffect)((function(){A()}),[a.search]);var o=Object(n.useState)(),u=Object(i.a)(o,2),p=u[0],N=u[1],O=Object(n.useState)(),w=Object(i.a)(O,2),x=w[0],P=w[1],k=Math.ceil(p?p.count/p.limit:1),A=function(){var e=Object(h.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:10443/api/pets?"+g.a.stringify({limit:10,offset:l,sort:m}),{method:"GET",headers:{Accept:"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(t=e.sent,200!==a.status){e.next=9;break}return N(t),e.abrupt("return");case 9:400===a.status&&P(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(h.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:10443/api/pets/".concat(a),{method:"DELETE"});case 2:return e.next=4,A();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),S=function(a,n){console.log(n.activePage),e.push("/pet?"+g.a.stringify(Object(d.a)({},t,{page:n.activePage})))};return x?c.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},c.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},c.a.createElement("h1",{className:"h2"},"List Pet")),x.invalidParameters.map((function(e,a){return c.a.createElement("div",{key:a,className:"ui pointing red basic label"},e.name,": ",e.reason)}))):p?c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Pet List")),c.a.createElement("div",{className:"row"},c.a.createElement(j.a,{as:s.b,to:"/pet/create",className:"green"},"Create")),c.a.createElement("div",{className:"row"},c.a.createElement(y.a,{defaultActivePage:r,totalPages:k,onPageChange:S}),c.a.createElement("table",{className:"ui single line striped selectable table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"CreatedAt"),c.a.createElement("th",null,"UpdatedAt"),c.a.createElement("th",null,"Name (",c.a.createElement(s.b,{to:"/pet?"+g.a.stringify(Object(d.a)({},t,{sort:Object(d.a)({},m,{name:"asc"})}))}," A-Z ")," |",c.a.createElement(s.b,{to:"/pet?"+g.a.stringify(Object(d.a)({},t,{sort:Object(d.a)({},m,{name:"desc"})}))}," Z-A ")," |",c.a.createElement(s.b,{to:"/pet?"+g.a.stringify(Object(d.a)({},t,{sort:Object(d.a)({},m,{name:void 0})}))}," --- "),")"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,p._embedded.items.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,Object(v.a)(Date.parse(e.createdAt),"dd.MM.yyyy - HH:mm:ss",{locale:f.a})),c.a.createElement("td",null,e.updatedAt&&Object(v.a)(Date.parse(e.updatedAt),"dd.MM.yyyy - HH:mm:ss",{locale:f.a})),c.a.createElement("td",null,e.name),c.a.createElement("td",null,c.a.createElement(j.a,{as:s.b,to:"/pet/".concat(e.id)},"Read"),c.a.createElement(j.a,{as:s.b,to:"/pet/".concat(e.id,"/edit")},"Edit"),c.a.createElement(j.a,{onClick:function(){H(e.id)},className:"red"},"Delete")))})))),c.a.createElement(y.a,{defaultActivePage:r,totalPages:k,onPageChange:S}))):c.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"})},w=t(47),x=t(175),P=t(176),k=t(177),A=function(e){var a=e.input,t=(e.meta,Object(k.a)(e,["input","meta"]));return c.a.createElement("input",Object.assign({type:"text"},a,t))};var H=function(e){if(!e)return{};var a={};return e.forEach((function(e){a.hasOwnProperty(e.name)||(a[e.name]=[]),a[e.name].push(e)})),a},S=t(354);var C=function(e){var a=e.pet,t=Object(b.f)(),r=Object(n.useState)(),l=Object(i.a)(r,2),m=l[0],o=l[1],u=function(){var e=Object(h.a)(E.a.mark((function e(a){var n,c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.id?"https://localhost:10443/api/pets/".concat(a.id):"https://localhost:10443/api/pets",e.next=3,fetch(n,{method:a.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return c=e.sent,e.next=6,c.json();case 6:if(r=e.sent,c.status!==(a.id?200:201)){e.next=10;break}return t.push("/pet"),e.abrupt("return");case 10:422===c.status&&o(r);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),p=H(null===m||void 0===m?void 0:m.invalidParameters);return c.a.createElement(w.b,{onSubmit:u,initialValues:a,mutators:Object(d.a)({},x.a),render:function(e){var a=e.handleSubmit,t=e.form.mutators.push,n=e.form;return c.a.createElement(S.a,{onSubmit:a},c.a.createElement(S.a.Field,null,c.a.createElement("label",null,"Name"),c.a.createElement(w.a,{name:"name",className:"form-control "+(p.name&&" is-invalid"),component:A}),p.name&&p.name.map((function(e,a){return c.a.createElement("div",{key:a,className:"ui pointing red basic label"},e.reason)}))),c.a.createElement(S.a.Field,null,c.a.createElement("label",null,"Vaccination"),c.a.createElement(P.a,{name:"vaccinations"},(function(e){var a=e.fields;return a.map((function(e,t){return c.a.createElement("div",{key:t,className:"ui bottom attached segment"},c.a.createElement(S.a.Field,null,c.a.createElement("label",null,"Name"),c.a.createElement(w.a,{name:"".concat(e,".name"),className:"form-control "+(p["".concat(e,".name")]&&" is-invalid"),component:A}),p["".concat(e,".name")]&&p["".concat(e,".name")].map((function(e,a){return c.a.createElement("div",{key:a,className:"ui pointing red basic label"},e.reason)}))),c.a.createElement(S.a.Field,null,c.a.createElement("button",{type:"button",className:"ui button red",onClick:function(){return a.remove(t)}},"Remove")))}))})),c.a.createElement("button",{type:"button",className:"ui button green",onClick:function(){return t("vaccinations",void 0)}},"Add")),c.a.createElement(j.a,{onClick:n.submit,className:"blue"},"Submit"),c.a.createElement(j.a,{as:s.b,to:"/pet"},"List"))}})};var I=function(){return c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Create Pet")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"ui top attached segment"},c.a.createElement(C,null))))},M=t(356);var T=function(e){var a=e.match;Object(n.useEffect)((function(){b()}),[]);var t=Object(n.useState)(),r=Object(i.a)(t,2),l=r[0],m=r[1],o=Object(n.useState)(),u=Object(i.a)(o,2),d=u[0],p=u[1],b=function(){var e=Object(h.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:10443/api/pets/".concat(a.params.id),{method:"GET",headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,200===t.status&&m(n),404===t.status&&p(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Read Pet: Not Found"),c.a.createElement("span",null,d.detail))):l?c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Read Pet")),c.a.createElement("div",{className:"row"},c.a.createElement(M.a,null,c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Header,null,"Id"),l.id),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Header,null,"CreatedAt"),Object(v.a)(Date.parse(l.createdAt),"dd.MM.yyyy - HH:mm:ss",{locale:f.a})),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Header,null,"UpdatedAt"),l.updatedAt&&Object(v.a)(Date.parse(l.updatedAt),"dd.MM.yyyy - HH:mm:ss",{locale:f.a})),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Header,null,"Name"),l.name),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Header,null,"Vaccinations"),c.a.createElement("ul",null,l.vaccinations.map((function(e,a){return c.a.createElement("li",{key:a},e.name)})))))),c.a.createElement("div",{className:"row"},c.a.createElement(j.a,{as:s.b,to:"/pet"},"List"))):c.a.createElement("main",{className:"ui padded grid"})};var D=function(e){var a=e.match;Object(n.useEffect)((function(){p()}),[]);var t=Object(n.useState)(),r=Object(i.a)(t,2),l=r[0],s=r[1],m=Object(n.useState)(),o=Object(i.a)(m,2),u=o[0],d=o[1],p=function(){var e=Object(h.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:10443/api/pets/".concat(a.params.id),{method:"GET",headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,200===t.status&&s(n),404===t.status&&d(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u?c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Read Pet: Not Found"),c.a.createElement("span",null,u.detail))):l?c.a.createElement("main",{className:"ui padded grid"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"ui huge dividing header"},"Edit Pet")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"ui top attached segment"},c.a.createElement(C,{pet:l})))):c.a.createElement("main",{className:"ui padded grid"})};var F=function(){return c.a.createElement(s.a,null,c.a.createElement(m,null),c.a.createElement("div",{className:"ui padded grid"},c.a.createElement(o,null),c.a.createElement("div",{className:"sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column",id:"content"},c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:u}),c.a.createElement(b.a,{path:"/pet",exact:!0,component:O}),c.a.createElement(b.a,{path:"/pet/create",exact:!0,component:I}),c.a.createElement(b.a,{path:"/pet/:id",exact:!0,component:T}),c.a.createElement(b.a,{path:"/pet/:id/edit",exact:!0,component:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.4ab4b7c7.chunk.js.map