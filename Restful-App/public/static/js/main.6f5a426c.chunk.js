(this["webpackJsonpepayco-frontend"]=this["webpackJsonpepayco-frontend"]||[]).push([[0],{129:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(41),c=t.n(o),l=t(5),s=t(8),m=t(3),i=t(20),u=function(e){var a=e.isAuthenticated,t=e.component,r=Object(i.a)(e,["isAuthenticated","component"]);return n.a.createElement(m.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(m.a,{to:"/catalogo"}):n.a.createElement(t,e)}}))},p=function(e){var a=e.isAuthenticated,t=e.component,r=Object(i.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",r.location.pathname),n.a.createElement(m.b,Object.assign({},r,{component:function(e){return a?n.a.createElement(t,e):n.a.createElement(m.a,{to:"/login"})}}))},d=Object(r.createContext)(),f=t(7),E=t.n(f),b=t(13),v=t(19),g=t(15),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(l.a)(a,2),n=t[0],o=t[1],c=function(){o(e)},s=function(e){var a=e.target;o(Object(g.a)(Object(g.a)({},n),{},Object(v.a)({},a.name,a.value)))};return[n,s,c]},N="https://epayco-interview.herokuapp.com/api",x=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r="".concat(N,"/").concat(e);return fetch(r,{method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(a)})},y=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",r="".concat(N,"/").concat(e),n=a.value;return fetch(r,{method:t,headers:{"Content-type":"application/json","x-token":n}})},O=t(6),C=t.n(O),k=t(2),j=t.n(k),S="[auth] login",w="[auth] logout";function _(e){var a=e.history,t=Object(r.useContext)(d).dispatch,o=h({email:""}),c=Object(l.a)(o,2),m=c[0],i=c[1],u=m.email,p=function(){var e=Object(b.a)(E.a.mark((function e(r){var n,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),f(),e.next=4,x("login",{email:u},"POST");case 4:return n=e.sent,e.next=7,n.json();case 7:if(o=e.sent,console.log(o),!o.ok){e.next=18;break}localStorage.setItem("user2",JSON.stringify(o.user)),localStorage.setItem("token",o.token),c=localStorage.getItem("lastPath")||"/catalogo",t({type:S,payload:{name:o.user.nombre}}),a.replace(c),window.location.reload(),e.next=20;break;case 18:return console.log(o.error),e.abrupt("return",j.a.fire("Error",o.error,"error"));case 20:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){if(!C.a.isEmail(u))return j.a.fire("Error","Email incorrecto","error")};return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("div",{className:"card justify-content-md-center",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col"},n.a.createElement("form",{onSubmit:p},n.a.createElement("div",{className:"card-body "},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",autoComplete:"off",value:u,onChange:i})),n.a.createElement("p",{className:"card-text"},n.a.createElement(s.b,{to:"./nuevo-usuario"},"Nuevo usuario?")),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Iniciar sesion")))))))}function D(e){var a=e.history,t=h({documento:"",nombre:"",email:"",celular:""}),r=Object(l.a)(t,2),o=r[0],c=r[1],m=o.documento,i=o.nombre,u=o.email,p=o.celular,d=function(){var e=Object(b.a)(E.a.mark((function e(t){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!C.a.isEmpty(m)){e.next=3;break}return e.abrupt("return",j.a.fire("Error","Documento incorrecto","error"));case 3:if(!C.a.isEmpty(i)){e.next=5;break}return e.abrupt("return",j.a.fire("Error","Nombre incorrecto","error"));case 5:if(C.a.isEmail(u)){e.next=7;break}return e.abrupt("return",j.a.fire("Error","Email incorrecto","error"));case 7:if(C.a.isMobilePhone(p,"any")){e.next=9;break}return e.abrupt("return",j.a.fire("Error","celular incorrecto","error"));case 9:return e.next=11,x("nuevo-usuario",{documento:m,nombre:i,email:u,celular:p},"POST");case 11:return r=e.sent,e.next=14,r.json();case 14:if(n=e.sent,console.log(n),!n.ok){e.next=21;break}j.a.fire("Excelente","Registro con exito","success"),a.replace("/login"),e.next=22;break;case 21:return e.abrupt("return",j.a.fire("Error","El campo ".concat(JSON.stringify(n.error)," ya esta registrado"),"error"));case 22:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Registrar"),n.a.createElement("hr",null),n.a.createElement("div",{className:"card justify-content-md-center",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col"},n.a.createElement("form",{onSubmit:d},n.a.createElement("div",{className:"card-body "},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Documento"),n.a.createElement("input",{type:"text",name:"documento",className:"form-control",placeholder:"Documento",autoComplete:"off",value:m,onChange:c})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre"),n.a.createElement("input",{type:"text",name:"nombre",className:"form-control",placeholder:"Nombre",autoComplete:"off",value:i,onChange:c})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"text",name:"email",className:"form-control",placeholder:"Email",autoComplete:"off",value:u,onChange:c})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Celular"),n.a.createElement("input",{type:"text",name:"celular",className:"form-control",placeholder:"Celular",autoComplete:"off",value:p,onChange:c})),n.a.createElement("p",{className:"card-text"},n.a.createElement(s.b,{to:"./login"},"Ya estas registrado?")),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Registrar")))))))}var J=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"}];function I(e){var a=e.id,t=e.superhero,o=e.alter_ego,c=e.first_appearance,s=e.characters,m=Object(r.useState)(JSON.parse(localStorage.getItem("user2"))),i=Object(l.a)(m,1)[0],u=Object(r.useState)(localStorage.getItem("token")),p=Object(l.a)(u,1)[0],d=i.email,f=function(){var e=Object(b.a)(E.a.mark((function e(){var a,t,r,n,o,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.a.showLoading(),e.next=3,x("pagar",{email:d,token:p},"POST");case 3:return a=e.sent,e.next=6,a.json();case 6:if((t=e.sent).ok){e.next=11;break}return e.abrupt("return",j.a.fire(JSON.stringify(t.error),"Error Servidor","error"));case 11:return e.next=13,j.a.fire({title:"Ingresar Token",input:"text",showCancelButton:!0,inputValidator:function(e){return e?C.a.isJWT(e)?void 0:"Es obligario ingresar un token valido":"Es obligario ingresar el TOKEN"}});case 13:if(r=e.sent,!(n=r.value)){e.next=30;break}return e.next=18,y("confirmar",{value:n},"POST");case 18:return o=e.sent,e.next=21,o.json();case 21:if(c=e.sent,console.log(c),!c.ok){e.next=27;break}j.a.fire({position:"top-end",icon:"success",title:"Compra confirmada",showConfirmButton:!1,timer:1500}),e.next=28;break;case 27:return e.abrupt("return",j.a.fire("Error",c.error,"error"));case 28:e.next=31;break;case 30:j.a.fire({position:"top-end",icon:"error",title:"Cancelado",showConfirmButton:!0});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"card ms-3 animate__animated animate__fadeIn",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"".concat(window.location.origin,"/assets/").concat(a,".jpg"),className:"card-img",alt:t})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"}," ",t," "),n.a.createElement("p",{className:"card-text"}," ",o," "),o!==s&&n.a.createElement("p",{className:"card-text"}," ",s," "),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"}," ",c," ")),n.a.createElement("button",{className:"btn btn-success",onClick:f},"Comprar")))))}function P(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Catalogo"),n.a.createElement("hr",null),n.a.createElement("div",{className:"card-columns"},J.map((function(e){return n.a.createElement(I,Object.assign({key:e.id},e))}))))}function A(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("user2"))),a=Object(l.a)(e,1)[0],t=h({documento:a.documento,celular:a.celular}),o=Object(l.a)(t,2),c=o[0],s=o[1],m=a._id,i=c.documento,u=c.celular,p=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!C.a.isEmpty(i)){e.next=3;break}return e.abrupt("return",j.a.fire("Error","Documento incorrecto","error"));case 3:if(C.a.isMobilePhone(u,"any")){e.next=5;break}return e.abrupt("return",j.a.fire("Error","celular incorrecto","error"));case 5:return e.next=7,x("consultar-saldo",{id:m,documento:i,celular:u},"POST");case 7:return t=e.sent,e.next=10,t.json();case 10:if(r=e.sent,console.log(r),!r.ok){e.next=17;break}return console.log(r.ok),e.abrupt("return",j.a.fire(JSON.stringify(r.user.saldo),"Saldo","info"));case 17:return e.abrupt("return",j.a.fire("Error",r.error,"error"));case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Consultar Saldo"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("form",{onSubmit:p},n.a.createElement("div",{className:"card-body "},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Documento"),n.a.createElement("input",{type:"text",name:"documento",className:"form-control",placeholder:"Documento",autoComplete:"off",value:i,onChange:s})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Celular"),n.a.createElement("input",{type:"text",name:"celular",className:"form-control",placeholder:"Celular",autoComplete:"off",value:u,onChange:s})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Consultar Saldo"))))),n.a.createElement("hr",null))}function T(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("user2"))),a=Object(l.a)(e,1)[0],t=h({documento:a.documento,celular:a.celular,nuevo_monto:"0"}),o=Object(l.a)(t,2),c=o[0],s=o[1],m=a._id,i=c.documento,u=c.celular,p=c.nuevo_monto,d=function(){var e=Object(b.a)(E.a.mark((function e(a){var t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!C.a.isEmpty(i)){e.next=3;break}return e.abrupt("return",j.a.fire("Error","Documento incorrecto","error"));case 3:if(C.a.isMobilePhone(u,"any")){e.next=5;break}return e.abrupt("return",j.a.fire("Error","celular incorrecto","error"));case 5:if(C.a.isInt(p)){e.next=7;break}return e.abrupt("return",j.a.fire("Error","Email incorrecto","error"));case 7:return e.next=9,x("recargar-saldo",{id:m,documento:i,celular:u,nuevo_monto:p},"PUT");case 9:return t=e.sent,e.next=12,t.json();case 12:r=e.sent,console.log(r),r.ok?(j.a.fire("Excelente","Operacion exitosa","success"),console.log(r.ok)):(console.log(r.error),j.a.fire("Ops!",JSON.stringify(r.error),"error"));case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Recargar Saldo"),n.a.createElement("hr",null),n.a.createElement("div",{className:"card justify-content-md-center",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col"},n.a.createElement("form",{onSubmit:d},n.a.createElement("div",{className:"card-body "},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Documento"),n.a.createElement("input",{disabled:!0,type:"text",name:"documento",className:"form-control",placeholder:"Documento",autoComplete:"off",value:i,onChange:s})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Celular"),n.a.createElement("input",{disabled:!0,type:"text",name:"celular",className:"form-control",placeholder:"Celular",autoComplete:"off",value:u,onChange:s})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Valor"),n.a.createElement("input",{type:"number",name:"nuevo_monto",className:"form-control",placeholder:"Valor",autoComplete:"off",value:p,onChange:s})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Recargar Saldo")))))))}var B=function(){var e=Object(r.useContext)(d),a=e.user.name,t=e.dispatch,o=Object(m.g)();return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(s.b,{className:"navbar-brand",to:"./catalogo"},"Epayco"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"./catalogo"},"Catalogo"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"./consultar-saldo"},"Consultar"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"./recargar-saldo"},"Recargar"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},a),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){o.replace("/login"),t({type:w})}},"Logout"))))};function W(){var e=Object(r.useContext)(d).user;return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(B,null),n.a.createElement("div",{className:"container mt-2"},n.a.createElement(m.d,null,n.a.createElement(u,{exact:!0,path:"/login",component:_,isAuthenticated:e.logged}),n.a.createElement(u,{exact:!0,path:"/nuevo-usuario",component:D,isAuthenticated:e.logged}),n.a.createElement(p,{exact:!0,path:"/catalogo",component:P,isAuthenticated:e.logged}),n.a.createElement(p,{exact:!0,path:"/consultar-saldo",component:A,isAuthenticated:e.logged}),n.a.createElement(p,{exact:!0,path:"/recargar-saldo",component:T,isAuthenticated:e.logged}),n.a.createElement(m.a,{to:"/login"})))))}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S:return Object(g.a)(Object(g.a)({},a.payload),{},{logged:!0});case w:return{logged:!1};default:return e}},M=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}};function K(){var e=Object(r.useReducer)(R,{},M),a=Object(l.a)(e,2),t=a[0],o=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),n.a.createElement(d.Provider,{value:{user:t,dispatch:o}},n.a.createElement(W,null))}c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root"))},43:function(e,a,t){e.exports=t(129)}},[[43,1,2]]]);
//# sourceMappingURL=main.6f5a426c.chunk.js.map