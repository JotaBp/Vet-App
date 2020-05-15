(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,a,t){e.exports=t(83)},55:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=t(15),o=t(21),s=t(23),m=t(22),u=t(5),d=(t(54),t(55),t(27)),E=t(25),p=t(14),g=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(d.a.Brand,{as:"div"},r.a.createElement(p.b,{to:"/"},"Vet-App")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,null,r.a.createElement(E.a.Link,{as:"div"},r.a.createElement(p.b,{to:"/"},"Inicio")),r.a.createElement(E.a.Link,{as:"div"},r.a.createElement(p.b,{to:"/pets"},"Mascotas")),r.a.createElement(E.a.Link,{as:"div"},r.a.createElement(p.b,{to:"/vetHospital"},"Para clinicas Veterianrias")),r.a.createElement(E.a.Link,{as:"div"},r.a.createElement(p.b,{to:"/client"},"Para tu mascota")))))}}]),t}(n.Component),f=t(48),v=t.n(f),b=function e(){var a=this;Object(i.a)(this,e),this.getPets=function(){return a.service.get("/allPets")},this.service=v.a.create({baseURL:"".concat("http://localhost:5000/api"),withCredentials:!0})},h=(t(81),t(8)),j=t(28),y=function(e){return r.a.createElement(h.a,{lg:3,md:6},r.a.createElement(j.a,{as:"article"},r.a.createElement(j.a.Img,{variant:"top",src:e.petPicPath}),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,e.name))))},O=t(18),k=t(19),P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).getAllPets=function(){e.petService.getPets().then((function(a){return e.setState({pets:a.data})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getAllPets()},e.state={pets:[]},e.petService=new b,e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{as:"section"},r.a.createElement("h1",null,"Listado de mascotas"),r.a.createElement(k.a,{className:"pet-list"},this.state.pets.map((function(e){return r.a.createElement(y,Object.assign({key:e._id},e))}))))}}]),t}(n.Component),q=(t(82),t(26)),S=t(20),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{as:"section"},r.a.createElement(k.a,null,r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement(q.a,null,r.a.createElement(S.a,{alt:"Soluciones de gestion veterinaria",src:"images/ordenador.jpeg"}))),r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("h1",null,"Evoluciona"),r.a.createElement("p",null,"Vet App es el futuro de la gesti\xf3n veterinaria. Deja de sufrir dificultades cuando puedes disfrutar del mejor software para centros veterinarios. Un programa on-line, f\xe1cil de manejar, intuitivo , que te ofrece todo lo que puedas imaginar y m\xe1s.")))),r.a.createElement(O.a,{as:"section"},r.a.createElement(k.a,null,r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("h2",null,"R\xe1pido y Sencillo"),r.a.createElement("p",null,"Vet App es tan intuitivo que aprender\xe1s a manejarlo en minutos. Su interfaz est\xe1 dise\xf1ada para que todos los procesos sean \xe1giles y la informaci\xf3n llegue a ti de manera simple y bien estructurada.")),r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement(q.a,null,r.a.createElement(S.a,{alt:"Veterinario h\xedpico",src:"images/veterinario_caballos.jpg"}))))),r.a.createElement(O.a,{as:"section"},r.a.createElement(k.a,null,r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement(q.a,null,r.a.createElement(S.a,{alt:"veterinaria peque\xf1os animales",src:"images/veterinari_en_accion.jpg"}))),r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("h2",null,"Seguro y Fiable"),r.a.createElement("p",null,"Sabemos lo importante que es tu prestigio profesional y tu negocio. Puedes estar tranquilo en todo momento. Nuestra infraestructura de sistemas te liberan del mantenimiento.")))),r.a.createElement(O.a,{as:"section"},r.a.createElement(k.a,null,r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("h2",null," Vet App es Para Ti "),r.a.createElement("p",null,"\xa1Conf\xeda en el mejor servicio de atenci\xf3n al cliente! El software de gesti\xf3n mejor valorado por sus usuarios. Te acompa\xf1amos en cada paso hacia el \xe9xito de tu negocio.")),r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("img",{alt:""}),r.a.createElement(q.a,null,r.a.createElement(S.a,{alt:"Saludo de los veterinarios haciendo grupo",src:"images/grupo_veterinarios.jpeg"}))))),r.a.createElement(O.a,{as:"footer"},r.a.createElement(k.a,null,r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement(q.a,null,r.a.createElement(S.a,{alt:"icono e la marca Vet App",src:"images/icono_veterinario.png"})),r.a.createElement("p",null,"Puedes encontrarnos en: Facebook YouTube Encontrar\xe1s tutoriales, novedades, ayuda y todo tipo de informaci\xf3n \xfatil.")),r.a.createElement(h.a,{as:"article",lg:3,md:6},r.a.createElement("p",null,"Vet App es un software online de gesti\xf3n de centros veterinarios totalmente orientado a conseguir que tu equipo pueda trabajar de una forma \xe1gil y coordinada, abarcando todas las \xe1reas y as\xed ayudarte al exito de tu negocio.")),r.a.createElement(h.a,{as:"article",lg:3,md:6}))))},V=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("main",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(A,null)}}),r.a.createElement(u.a,{path:"/pets",render:function(){return r.a.createElement(P,null)}}))))}}]),t}(n.Component);c.a.render(r.a.createElement(p.a,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f9c8f171.chunk.js.map