(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(38),s=a.n(l),o=a(8),i=a(10),c=a(12),u=a(11),m=a(17),p=(a(82),a(83),a(84),a(44)),d=a(40),h=a(25),f=a.n(h),E=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e){var a=e.username,n=e.email,r=e.password,l=e.role;return t.service.post("/signup",{username:a,email:n,password:r,role:l})},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api"),withCredentials:!0})},g=a(21),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logout=function(){n.props.setTheUser(!1),n.authService.logout()},n.authService=new E,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(p.a.Brand,{as:"div",className:"logo"},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{src:"images/icono_veterinario.png",alt:"logo Vet-App"}))),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,null,r.a.createElement(d.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/",as:"a"},"Inicio")),this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/global",as:"a"},"Posicion global")),r.a.createElement(d.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/profile",as:"a"},"Perfil")),r.a.createElement(d.a.Link,{as:"div",onClick:this.logout},"Cerrar sesi\xf3n")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/login",as:"a"},"Iniciar sesi\xf3n")),r.a.createElement(d.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/signup",as:"a"},"Registro")))),r.a.createElement(p.a.Text,{className:"ml-auto",as:"div"}," Hola, ",this.props.loggedInUser?this.props.loggedInUser.username:"invitad@")))}}]),a}(n.Component),b=(a(108),a(9)),C=a(19),I=a(13),y=a(34),j=a(28),S=a(4),O=a(14),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{as:"section",className:"evolution"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement(y.a,null,r.a.createElement(j.a,{alt:"Soluciones de gestion veterinaria",src:"images/ordenador.jpeg"}))),r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement("h1",null,"Evoluciona"),r.a.createElement("p",null,"Vet App es el futuro de la gesti\xf3n veterinaria. Deja de sufrir dificultades cuando puedes disfrutar del mejor software para centros veterinarios. Un programa on-line, f\xe1cil de manejar, intuitivo , que te ofrece todo lo que puedas imaginar y m\xe1s.")))),r.a.createElement(b.a,{as:"section",className:"fast"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement("h2",null,"R\xe1pido y Sencillo"),r.a.createElement("p",null,"Vet App es tan intuitivo que aprender\xe1s a manejarlo en minutos. Su interfaz est\xe1 dise\xf1ada para que todos los procesos sean \xe1giles y la informaci\xf3n llegue a ti de manera simple y bien estructurada.")),r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement(y.a,null,r.a.createElement(j.a,{width:350,alt:"Veterinario h\xedpico",src:"images/veterinario_caballos.jpg"}))))),r.a.createElement(b.a,{as:"section",className:"secure"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement(y.a,null,r.a.createElement(j.a,{width:400,alt:"veterinaria peque\xf1os animales",src:"images/veterinari_en_accion.jpg"}))),r.a.createElement(I.a,{as:"article",className:"align-content",lg:6,md:6},r.a.createElement("h2",null,"Seguro y Fiable"),r.a.createElement("p",null,"Sabemos lo importante que es tu prestigio profesional y tu negocio. Puedes estar tranquilo en todo momento. Nuestra infraestructura de sistemas te liberan del mantenimiento.")))),r.a.createElement(b.a,{as:"section",className:"forYou"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement("h2",null," Vet App es Para Ti "),r.a.createElement("p",null,"\xa1Conf\xeda en el mejor servicio de atenci\xf3n al cliente! El software de gesti\xf3n mejor valorado por sus usuarios. Te acompa\xf1amos en cada paso hacia el \xe9xito de tu negocio.")),r.a.createElement(I.a,{as:"article",lg:6,md:6},r.a.createElement("img",{alt:""}),r.a.createElement(y.a,null,r.a.createElement(j.a,{width:300,alt:"Saludo de los veterinarios haciendo grupo",src:"images/grupo_veterinarios.jpeg"}))))),r.a.createElement(b.a,{as:"footer"},r.a.createElement(C.a,{className:"justify-content-center"},r.a.createElement(I.a,{as:"article",lg:4,md:4,sm:4},r.a.createElement(y.a,null,r.a.createElement(j.a,{width:100,alt:"icono e la marca Vet App",src:"images/icono_veterinario.png"})),r.a.createElement("p",null,"Puedes encontrarnos en: Facebook YouTube Encontrar\xe1s tutoriales, novedades, ayuda y todo tipo de informaci\xf3n \xfatil.")),r.a.createElement(I.a,{as:"article",lg:4,md:4,sm:4},r.a.createElement("p",null,"Vet App es un software online de gesti\xf3n de centros veterinarios totalmente orientado a conseguir que tu equipo pueda trabajar de una forma \xe1gil y coordinada, abarcando todas las \xe1reas y as\xed ayudarte al exito de tu negocio.")),r.a.createElement(I.a,{as:"article",lg:4,md:4,sm:4},r.a.createElement(S.a,null,r.a.createElement(S.a.Group,{controlId:"email"},r.a.createElement(S.a.Control,{name:"email",type:"email",placeholder:"Tu email"})),r.a.createElement(S.a.Group,{controlId:"phoneNumber"},r.a.createElement(S.a.Control,{name:"phoneNumber",type:"text",placeholder:"Telefono de contacto"})),r.a.createElement(S.a.Group,{controlId:"message"},r.a.createElement(S.a.Control,{name:"description",type:"text",placeholder:"Mensaje"})),r.a.createElement(O.a,{variant:"info",type:"submit"},"Enviar"))))))},H=a(20),N=a(18),P=function e(){var t=this;Object(o.a)(this,e),this.handleUpload=function(e){return t.service.post("/upload",e)},this.handleUploadProfileImage=function(e){return t.service.post("/profileSignupUpload",e)},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api","/files"),withCredentials:!0})},k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(N.a)({},n.state.signUpInfo),a=e.target,r=a.name,l=a.value;t=Object(N.a)(Object(N.a)({},t),{},Object(H.a)({},r,l)),n.setState({signUpInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.signup(n.state.signUpInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){console.log(e)}))},n.state={signUpInfo:{username:"",email:"",password:"",role:"",profilePicPath:""},errorMessage:""},n.authService=new E,n.filesService=new P,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,{md:{span:6,offset:3}},r.a.createElement("h3",null,"Registro de usuario"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"name"},r.a.createElement(S.a.Label,null,"Usuario"),r.a.createElement(S.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"email"},r.a.createElement(S.a.Label,null,"Email"),r.a.createElement(S.a.Control,{name:"email",type:"email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(S.a.Label,null,"Que eres?"),r.a.createElement(S.a.Control,{as:"select",name:"role",value:this.state.role,onChange:this.handleInputChange},r.a.createElement("option",{defaultValue:"GUEST"},"Invitado"),r.a.createElement("option",{value:"VETHOSPITAL"},"Hospital Veterinario"),r.a.createElement("option",{value:"CLIENT"},"Mascotero"))),r.a.createElement(S.a.Group,{controlId:"pwd"},r.a.createElement(S.a.Label,null,"Contrase\xf1a"),r.a.createElement(S.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Registrarme")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfYa tienes cuenta? ",r.a.createElement(g.b,{to:"/login"},"Inicia sesi\xf3n"))))))}}]),a}(n.Component),U=(a(109),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(N.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(N.a)(Object(N.a)({},t),{},Object(H.a)({},r,l)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){console.log(e)}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new E,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,{md:{span:4,offset:4}},r.a.createElement("h3",null,"Inicio de sesi\xf3n"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"name"},r.a.createElement(S.a.Label,null,"Usuario"),r.a.createElement(S.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"pwd"},r.a.createElement(S.a.Label,null,"Contrase\xf1a"),r.a.createElement(S.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfNo tienes cuenta? ",r.a.createElement(g.b,{to:"/signup"},"Reg\xedstrate"))))))}}]),a}(n.Component)),x=function e(){var t=this;Object(o.a)(this,e),this.citeFromHospital=function(e){return t.service.get("/citesFromHospital/".concat(e))},this.citesFromPet=function(e){return t.service.get("/citesFromPet/".concat(e))},this.createCiteResponse=function(e){return t.service.post("/createCiteResponse",e)},this.createCite=function(e){return t.service.post("/createCite",e)},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api","/cite"),withCredentials:!0})},T=function e(){var t=this;Object(o.a)(this,e),this.queryFromHospital=function(e){return t.service.get("/queryFromHospital/".concat(e))},this.queryFromPet=function(e){return t.service.get("/queryFromPet/".concat(e))},this.queryCreate=function(e){return t.service.post("/createQuery",e)},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api","/query"),withCredentials:!0})},q=(a(110),a(111),a(6)),M=function(e){return r.a.createElement(q.a,{as:"article",className:"cite-card"},r.a.createElement(q.a.Header,{as:"h4",className:"header-cite-card"},"Cita"),r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Title,null,e.subject),r.a.createElement(q.a.Subtitle,{className:"mb-2 text-muted"},e.date),r.a.createElement(q.a.Text,{as:"p",className:"text-description"},e.description)))},L=(a(112),a(26)),F=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(H.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.citeService.createCiteResponse(n.state).then((function(){return n.props.finishCiteResponsePost()})).catch((function(e){return console.log(e)}))},n.state={subject:n.props.queryObj.subject,description:"",queryClient:n.props.queryObj._id,vetHospital:n.props.hospitalObj._id},n.citeService=new x,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement(b.a,null,r.a.createElement("h1",null,"Responder a la consulta"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"desc"},r.a.createElement(S.a.Label,null,"Descripcion"),r.a.createElement(S.a.Control,{as:"textarea",rows:"3",name:"description",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(O.a,{variant:"dark",onClick:function(){return e.props.closeModal()},style:{marginRight:"10px"}},"Cerrar"),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Enviar")))}}]),a}(n.Component),D=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.finishCiteResponsePost=function(){n.handleModal(!1)},n.state={queryInfo:{status:n.props.status,subject:n.props.subject,date:n.props.date,description:n.props.description,vetHospitalObj:n.props.vetHospital,petObj:n.props.pet},citeHospitalResponse:{description:n.props.citeHospital&&n.props.citeHospital.description},toast:{show:!1,text:""},modalShow:!1},n.citeService=new x,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{as:"article",className:"query-card"},r.a.createElement(q.a.Header,{as:"h4",className:"header-query-card"},"Consulta"),r.a.createElement(q.a.Body,{as:"body"},r.a.createElement(q.a.Title,{as:"h5"},this.state.queryInfo.subject),r.a.createElement(q.a.Subtitle,{className:"mb-2 text-muted"},this.state.queryInfo.date),r.a.createElement(q.a.Text,{as:"p"},this.state.queryInfo.description),r.a.createElement(q.a,{className:"response-query-card",style:{display:this.state.citeHospitalResponse.description?"block":"none"}},r.a.createElement(q.a.Title,{as:"h6"},"Respuesta"),r.a.createElement(q.a.Text,{as:"p",className:"response-query-card-text"},this.state.citeHospitalResponse&&this.state.citeHospitalResponse.description)),r.a.createElement(O.a,{onClick:function(){return e.handleModal(!0)},variant:"dark"},"Responder"))),r.a.createElement(L.a,{show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(L.a.Body,null,r.a.createElement(F,{finishCiteResponsePost:this.finishCiteResponsePost,hospitalObj:this.state.queryInfo.vetHospitalObj,petObj:this.state.queryInfo.petObj,queryObj:this.props,closeModal:function(){return e.handleModal(!1)}}))))}}]),a}(n.Component),R=(a(113),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).displayPets=function(e){return n.props.pets.map((function(e){return r.a.createElement("option",{value:e._id},e.name)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(H.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.citeService.createCite(n.state).then((function(){return n.props.finishCitePost()})).catch((function(e){return console.log(e)}))},n.state={subject:"",description:"",date:"",vetHospital:n.props.hospitalID,pet:""},n.citeService=new x,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"form-modal-window"},r.a.createElement("h1",null,"Nueva Cita"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"asunto"},r.a.createElement(S.a.Label,null,"Asunto"),r.a.createElement(S.a.Control,{name:"subject",type:"text",value:this.state.subject,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"desc"},r.a.createElement(S.a.Label,null,"Descripcion"),r.a.createElement(S.a.Control,{name:"description",type:"text",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"date"},r.a.createElement(S.a.Label,null,"Dia de la cita"),r.a.createElement(S.a.Control,{name:"date",type:"date",value:this.state.date,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"select-hospital"},r.a.createElement(S.a.Label,null,"Selecciona mascota"),r.a.createElement(S.a.Control,{as:"select",name:"pet",value:this.state.pet,onChange:this.handleInputChange},r.a.createElement("option",null,"Seleccionar"),this.displayPets())),r.a.createElement(O.a,{variant:"dark",onClick:function(){return e.props.closeModal()},style:{marginRight:"10px"}},"Cerrar"),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Nueva cita")))}}]),a}(n.Component)),_=a(29),G=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.handletoast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(N.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.getCitesInfo=function(){n.citeService.citeFromHospital(n.state.userInfo.id).then((function(e){return n.setState({cites:e.data})})).catch((function(e){return console.log(e)}))},n.getQueryInfo=function(){n.queryService.queryFromHospital(n.state.userInfo.id).then((function(e){return n.setState({querys:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getCitesInfo(),n.getQueryInfo()},n.finishCiteCreate=function(){n.getCitesInfo(),n.handleModal(!1),n.handletoast(!0,"Cita creada en BBDD")},n.state={userInfo:{id:n.props.loggedInUser._id},querys:"",cites:"",toast:{show:!1,text:""},modalShow:!1},n.citeService=new x,n.queryService=new T,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,{className:"content-dashboard"},r.a.createElement(b.a,{as:"section"},r.a.createElement(O.a,{onClick:function(){return e.handleModal(!0)},variant:"dark"},"Crear nueva cita")),r.a.createElement(b.a,{as:"section"},r.a.createElement("h1",null,"Citas"),this.state.cites&&this.state.cites.map((function(e){return r.a.createElement(M,Object.assign({key:e._id},e))}))),r.a.createElement(b.a,{as:"section"},r.a.createElement("h1",null,"Consultas"),this.state.querys&&this.state.querys.map((function(e){return r.a.createElement(D,Object.assign({key:e._id},e))}))),r.a.createElement(L.a,{className:"modal-window",show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(L.a.Body,null,r.a.createElement(R,{finishCitePost:this.finishCiteCreate,hospitalID:this.props.loggedInUser._id,pets:this.props.loggedInUser.pets,closeModal:function(){return e.handleModal(!1)}}))),r.a.createElement(_.a,{className:"tostada",onClose:function(){return e.handletoast(!1)},show:this.state.toast.show,delay:3e3},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Mensaje")),r.a.createElement(_.a.Body,null,this.state.toast.text)))}}]),a}(n.Component),V=(a(114),function e(){var t=this;Object(o.a)(this,e),this.getProfile=function(e){return t.service.get("/".concat(e))},this.getOnlyVetHospital=function(){return t.service.get("/onlyVetHospital")},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api","/profile"),withCredentials:!0})}),B=function e(){var t=this;Object(o.a)(this,e),this.getPetsFromUser=function(){return t.service.get("/allPets")},this.petCreate=function(e){return t.service.post("/createPet",e)},this.service=f.a.create({baseURL:"".concat("https://veterinary-app.herokuapp.com/api","/pet"),withCredentials:!0})},A=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getVetHospitals=function(){n.hospitalsService.getOnlyVetHospital().then((function(e){return n.setState({vetHospitals:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getVetHospitals()},n.displayHospitals=function(){n.state.vetHospitals&&n.state.vetHospitals.map((function(e){return r.a.createElement("option",{value:e._id},e.username)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({petCreated:Object(N.a)(Object(N.a)({},n.state.petCreated),{},Object(H.a)({},a,r))})},n.handleSubmit=function(e){e.preventDefault(),n.petService.petCreate(n.state.petCreated).then((function(){return n.props.finishPetPost()})).catch((function(e){return console.log(e)}))},n.handleFileUpload=function(e){var t=new FormData;t.append("petPicPath",e.target.files[0]),n.filesService.handleUpload(t).then((function(e){n.setState({petCreated:Object(N.a)(Object(N.a)({},n.state.petCreated),{},{petPicPath:e.data.secure_url})})})).catch((function(e){return console.log(e)}))},n.getVetHospitals=function(){n.hospitalsService.getOnlyVetHospital().then((function(e){return n.setState({vetHospitals:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){!n.state.vetHospitals&&n.getVetHospitals()},n.displayHospitals=function(){return n.state.vetHospitals&&n.state.vetHospitals.map((function(e){return r.a.createElement("option",{value:e._id},e.username)}))},n.state={petCreated:{name:"",species:"",petPicPath:"",breed:"",owner:n.props.ownerID,vetHospital:""},vetHospitals:null},n.petService=new B,n.filesService=new P,n.hospitalsService=new V,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.vetHospitals?r.a.createElement(b.a,null,r.a.createElement("h1",null,"Nueva Mascota"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"nombre"},r.a.createElement(S.a.Label,null,"Nombre"),r.a.createElement(S.a.Control,{name:"name",type:"text",value:this.state.petCreated.name,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"especie"},r.a.createElement(S.a.Label,null,"Especie"),r.a.createElement(S.a.Control,{name:"species",type:"text",value:this.state.petCreated.species,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"raza"},r.a.createElement(S.a.Label,null,"Raza"),r.a.createElement(S.a.Control,{name:"breed",type:"text",value:this.state.petCreated.breed,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"select-hospital"},r.a.createElement(S.a.Label,null,"Selecciona hospital"),r.a.createElement(S.a.Control,{as:"select",name:"vetHospital",value:this.state.petCreated.vetHospital,onChange:this.handleInputChange},r.a.createElement("option",null,"Seleccionar"),this.displayHospitals())),r.a.createElement(S.a.Group,{controlId:"img"},r.a.createElement(S.a.Label,null,"Foto de tu mascota"),r.a.createElement(S.a.Control,{name:"petPicPath",type:"file",onChange:this.handleFileUpload})),r.a.createElement(O.a,{variant:"dark",onClick:function(){return e.props.closeModal()}},"Cerrar"),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Nueva mascota"))):r.a.createElement("h1",null,"Cargando...")}}]),a}(n.Component),Q=(a(115),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).displayHospitals=function(){return n.props.hospitalArr.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.username)}))},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(H.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.queryService.queryCreate(n.state).then((function(){return n.props.finishQueryCreate()})).catch((function(e){return console.log(e)}))},n.state={subject:"",description:"",date:"",pet:n.props.petId,vetHospital:""},n.queryService=new T,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement("h1",null,"Nueva Consulta"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"asunto"},r.a.createElement(S.a.Label,null,"Asunto"),r.a.createElement(S.a.Control,{name:"subject",type:"text",value:this.state.subject,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"desc"},r.a.createElement(S.a.Label,null,"Descripcion"),r.a.createElement(S.a.Control,{name:"description",type:"text",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"date"},r.a.createElement(S.a.Label,null,"Fecha"),r.a.createElement(S.a.Control,{name:"date",type:"date",value:this.state.date,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"select-hospital"},r.a.createElement(S.a.Label,null,"Selecciona hospital"),r.a.createElement(S.a.Control,{as:"select",name:"vetHospital",value:this.state.vetHospital,onChange:this.handleInputChange},r.a.createElement("option",null,"Seleccionar"),this.displayHospitals())),r.a.createElement(O.a,{variant:"dark",onClick:function(){return e.props.closeModal()},style:{marginRight:"10px"}},"Cerrar"),r.a.createElement(O.a,{variant:"dark",type:"submit"},"Nueva consulta")))}}]),a}(n.Component)),z=a(41),Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.handletoast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(N.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.getQuerysInfo=function(){n.queryService.queryFromPet(n.props._id).then((function(e){return n.setState({querys:e.data})})).catch((function(e){return console.log(e)}))},n.getCitesInfo=function(){n.citeService.citesFromPet(n.props._id).then((function(e){return n.setState({cites:e.data})})).catch((function(e){return console.log(e)}))},n.finishQueryPost=function(){n.getQuerysInfo(),n.handleModal(!1),n.handletoast(!0,"Consulta enviada al Hospital")},n.componentDidMount=function(){n.getQuerysInfo(),n.getCitesInfo()},n.state={petInfo:{id:n.props._id,petPicPath:n.props.petPicPath,name:n.props.name,species:n.props.species,breed:n.props.breed,vetHospital:n.props.vetHospital},cites:"",querys:"",toast:{show:!1,text:""},modalShow:!1},n.citeService=new x,n.queryService=new T,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{as:"section"},r.a.createElement(C.a,null,r.a.createElement(I.a,{as:"article"},r.a.createElement(q.a,{className:"card"},r.a.createElement(q.a.Img,{variant:"top",src:this.state.petInfo.petPicPath}),r.a.createElement(q.a.Header,{as:"h5"},this.state.petInfo.name),r.a.createElement(z.a,{className:"list-group-flush"},r.a.createElement(z.a.Item,null,this.state.petInfo.species),r.a.createElement(z.a.Item,null,this.state.petInfo.breed)),r.a.createElement("h4",{className:"query"},"Consultas"),this.state.querys&&this.state.querys.map((function(e){return r.a.createElement(q.a.Body,{className:"body",key:e._id},r.a.createElement(q.a.Title,null,e.subject),r.a.createElement(q.a.Subtitle,null,e.date),r.a.createElement(q.a.Text,{as:"p",className:"card-text"},e.description),e.citeHospital&&r.a.createElement(q.a,{style:{display:e.citeHospital.description?"block":"none"}},r.a.createElement(q.a.Title,{as:"h5",className:"card-title-response"},"Respuesta"),r.a.createElement(q.a.Text,{as:"p",className:"card-text-response"},e.citeHospital.description)))})),r.a.createElement("h4",{className:"cite"},"Citas"),this.state.cites&&this.state.cites.map((function(e){return r.a.createElement(q.a.Body,{className:"body",key:e._id},r.a.createElement(q.a.Title,null,e.subject),r.a.createElement(q.a.Subtitle,null,e.date),r.a.createElement(q.a.Text,{as:"p",className:"card-text"},e.description))})),r.a.createElement(q.a.Footer,null,r.a.createElement(O.a,{onClick:function(){return e.handleModal(!0)},variant:"dark"},"Crear Consulta para ",this.state.petInfo.name)))))),r.a.createElement(L.a,{className:"modal-window",show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(L.a.Body,null,r.a.createElement(Q,{finishQueryCreate:this.finishQueryPost,petId:this.state.petInfo.id,hospitalArr:this.props.vetHospital,closeModal:function(){return e.handleModal(!1)}}))),r.a.createElement(_.a,{className:"toast-window",onClose:function(){return e.handletoast(!1)},show:this.state.toast.show,delay:3e3},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Mensaje")),r.a.createElement(_.a.Body,null,this.state.toast.text)))}}]),a}(n.Component),J=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.handletoast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(N.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.finishPetCreate=function(){n.handleModal(!1),n.handletoast(!0,"Has creado una nueva mascota")},n.state={userInfo:{id:n.props.loggedInUser._id,pets:n.props.loggedInUser.pets},toast:{show:!1,text:""},modalShow:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{as:"section",className:"content-dashboard"},r.a.createElement(O.a,{onClick:function(){return e.handleModal(!0)},variant:"dark"},"Crear nueva mascota"),this.state.userInfo.pets&&this.state.userInfo.pets.map((function(e){return r.a.createElement(Y,Object.assign({key:e._id},e))}))),r.a.createElement(L.a,{className:"modal-window",show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(L.a.Body,null,r.a.createElement(A,{finishPetPost:this.finishPetCreate,ownerID:this.state.userInfo.id,closeModal:function(){return e.handleModal(!1)}}))),r.a.createElement(_.a,{onClose:function(){return e.handletoast(!1)},show:this.state.toast.show,delay:3e3},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Mensaje")),r.a.createElement(_.a.Body,null,this.state.toast.text)))}}]),a}(n.Component),K=(a(116),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getDetailsProfile=function(){n.profileService.getProfile(n.state.profileInfo.id).then((function(e){return n.setState({profileInfo:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getDetailsProfile()},n.state={profileInfo:{id:n.props.loggedInUser._id,username:"",surname:"",email:"",password:"",profilePicPath:"",address:"",phoneNumber:"",status:"",pets:[],queryClient:[],citeHospital:[]},toast:{show:!1,text:""},modalShow:!1,errorMessage:""},n.profileService=new V,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{as:"section",className:"container-profile"},r.a.createElement(C.a,null,r.a.createElement(I.a,{as:"article"},r.a.createElement("h1",null,"Perfil"),r.a.createElement(y.a,{className:"img-profile"},r.a.createElement(j.a,{alt:"Foto de perfil del usuario",src:this.state.profileInfo.profilePicPath}))),r.a.createElement(I.a,{as:"article"},r.a.createElement(q.a,{className:"profile-card-client"},r.a.createElement(q.a.Header,null,"Hola ",this.state.profileInfo.username," este es tu perfil de usuario:"),r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Subtitle,{as:"h5"},"Email de contacto:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.email),r.a.createElement(q.a.Subtitle,{as:"h5"},"Domicilio:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.address),r.a.createElement(q.a.Subtitle,{as:"h5"},"Telefono de contact:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.phoneNumber),r.a.createElement(q.a.Subtitle,{as:"h5"},"Estado de la cuenta:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.status))))))}}]),a}(n.Component)),W=(a(117),a(118),function(e){return r.a.createElement(I.a,{xs:12,md:6,lg:4,as:"article"},r.a.createElement(q.a,null,r.a.createElement(q.a.Img,{variant:"top",src:e.petPicPath}),r.a.createElement(q.a.Header,null,r.a.createElement(q.a.Title,null,e.name)),r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Text,{className:"text-pet-card"},e.breed)),r.a.createElement(z.a,null,r.a.createElement(z.a.Item,{variant:"dark"},e.species))))}),X=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getDetailsProfile=function(){n.profileService.getProfile(n.state.profileInfo.id).then((function(e){return n.setState({profileInfo:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getDetailsProfile()},n.state={profileInfo:{id:n.props.loggedInUser._id,username:"",surname:"",email:"",password:"",hospitalPicPath:"",address:"",phoneNumber:"",status:"",chiefVetName:"",chiefVetSurname:"",collegiateNumber:"",pets:[],queryClient:[],citeHospital:[]},toast:{show:!1,text:""},modalShow:!1,errorMessage:""},n.profileService=new V,n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement("h1",null,"Perfil de Hospital"),r.a.createElement(y.a,null,r.a.createElement(j.a,{alt:"Foto de perfil del usuario",src:this.state.profileInfo.hospitalPicPath}))),r.a.createElement(I.a,null,r.a.createElement(q.a,{className:"profile-card-hospital"},r.a.createElement(q.a.Header,null,"Hola ",this.state.profileInfo.username," este es tu perfil de usuario:"),r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Subtitle,{as:"h5"},"Email de contacto:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.email),r.a.createElement(q.a.Subtitle,{as:"h5"},"Domicilio:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.address),r.a.createElement(q.a.Subtitle,{as:"h5"},"Telefono de contacto:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.phoneNumber),r.a.createElement(q.a.Subtitle,{as:"h5"},"Estado de la cuenta:"),r.a.createElement(q.a.Text,{as:"p"},this.state.profileInfo.status)))))),r.a.createElement(b.a,null,r.a.createElement("h1",null,"Clientes del hospital"),r.a.createElement(C.a,null,this.state.profileInfo.pets&&this.state.profileInfo.pets.map((function(e){return r.a.createElement(W,Object.assign({key:e._id},e))})))))}}]),a}(n.Component),Z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){null===e.state.loggedInUser&&e.authService.isLoggedIn().then((function(t){return e.setTheUser(t.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new E,e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement("main",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(m.b,{path:"/signup",render:function(t){return r.a.createElement(k,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.b,{path:"/login",render:function(t){return r.a.createElement(U,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(m.b,{path:"/global",render:function(t){return e.state.loggedInUser&&"VETHOSPITAL"===e.state.loggedInUser.role?r.a.createElement(G,Object.assign({},t,{loggedInUser:e.state.loggedInUser})):e.state.loggedInUser&&"CLIENT"===e.state.loggedInUser.role?r.a.createElement(J,Object.assign({},t,{loggedInUser:e.state.loggedInUser})):r.a.createElement(m.a,{to:"/login"})}}),r.a.createElement(m.b,{path:"/profile",render:function(t){return e.state.loggedInUser&&"VETHOSPITAL"===e.state.loggedInUser.role?r.a.createElement(X,Object.assign({},t,{loggedInUser:e.state.loggedInUser})):e.state.loggedInUser&&"CLIENT"===e.state.loggedInUser.role?r.a.createElement(K,Object.assign({},t,{loggedInUser:e.state.loggedInUser})):r.a.createElement(m.a,{to:"/login"})}}))))}}]),a}(n.Component);s.a.render(r.a.createElement(g.a,null,r.a.createElement(Z,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a(119)},83:function(e,t,a){},84:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.c8c076a6.chunk.js.map