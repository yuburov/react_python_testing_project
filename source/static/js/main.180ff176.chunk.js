(this["webpackJsonpwebapp-ui"]=this["webpackJsonpwebapp-ui"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},268:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),s=(n(145),n(146),n(42)),l=n(11),o=n(46),j=n(27),d=n(131),b=n(319),h=n(320),u=n(308),O=n(309),m=n(310),x=n(311),p=n(321),g=n(29),f=n(21),v=n(307),S=n(41),y=n.n(S),T=n(3),N=function(e){var t=e.placeholder,n=Object(d.a)(e,["placeholder"]),a=Object(g.e)(n),r=Object(j.a)(a,2),c=r[0],i=r[1],s=i.error&&i.touched?i.error:"";return Object(T.jsx)(b.a,Object(o.a)(Object(o.a)({placeholder:t},c),{},{helperText:s,error:!!s}))},w=function(e,t){var n=e.surname,a=e.name,r=e.lastName,c=e.phone,i=e.address,s=e.inn,l=t.setSubmitting,o=t.resetForm;S.post("http://127.0.0.1:8000/api/user/create/",{surname:n,name:a,lastName:r,phone:c,address:i,inn:s}).then((function(e){return o({}),console.log(e.data),e.data})),l(!1)},q={surname:"",name:"",lastName:"",phone:"",address:"",inn:""};var k=function(e){return Object(T.jsx)(h.a,{marginTop:7,marginBottom:4,children:Object(T.jsx)(v.a,{maxWidth:"md",children:Object(T.jsx)(u.a,{children:Object(T.jsxs)(O.a,{children:[Object(T.jsx)(m.a,{variant:"h4",children:"New User"}),Object(T.jsx)(g.d,{validateOnChange:!0,validationSchema:Object(f.b)({surname:Object(f.c)().required(),name:Object(f.c)().required(),lastName:Object(f.c)().required(),phone:Object(f.a)().required(),address:Object(f.c)().required(),inn:Object(f.c)().required()}),initialValues:q,onSubmit:w,children:function(e){e.values,e.errors;var t=e.isSubmitting,n=e.isValidating;return Object(T.jsxs)(g.c,{autoComplete:"off",children:[Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Surname",name:"surname",type:"input",label:"Surname"})})}),Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Name",name:"name",type:"input",label:"Name"})})}),Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Last name",name:"lastName",type:"input",label:"Last name"})})}),Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Phone",name:"phone",type:"input",label:"Phone"})})}),Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Address",name:"address",type:"input",label:"Address"})})}),Object(T.jsx)(h.a,{marginBottom:2,children:Object(T.jsx)(x.a,{children:Object(T.jsx)(N,{placeholder:"Inn",name:"inn",type:"input",label:"Inn"})})}),Object(T.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",disabled:t||n,children:"Save"})]})}})]})})})})},C=n(312),A=n(314),I=n(318),_=n(317),L=n(313),B=n(315),P=n(316),U=n(273),E=Object(C.a)({table:{minWidth:320}});var D=function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){S.get("http://127.0.0.1:8000/api/",{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){c(e.data)}))}),[]);var i=E();return Object(T.jsx)(h.a,{marginTop:5,children:Object(T.jsxs)(v.a,{maxWidth:"md",children:[Object(T.jsx)("h2",{style:{textAlign:"center"},children:"List of users"}),Object(T.jsx)(L.a,{component:U.a,children:Object(T.jsxs)(A.a,{className:i.table,"aria-label":"simple table",children:[Object(T.jsx)(B.a,{children:Object(T.jsxs)(P.a,{children:[Object(T.jsx)(_.a,{children:"Surname"}),Object(T.jsx)(_.a,{align:"right",children:"Name"}),Object(T.jsx)(_.a,{align:"right",children:"Last name"}),Object(T.jsx)(_.a,{align:"right",children:"Phone"}),Object(T.jsx)(_.a,{align:"right",children:"Address"}),Object(T.jsx)(_.a,{align:"right",children:"Inn"})]})}),Object(T.jsx)(I.a,{children:r.map((function(e){return Object(T.jsxs)(P.a,{children:[Object(T.jsx)(_.a,{component:"th",scope:"row",children:e.surname}),Object(T.jsx)(_.a,{align:"right",children:e.name}),Object(T.jsx)(_.a,{align:"right",children:e.lastName}),Object(T.jsx)(_.a,{align:"right",children:e.phone}),Object(T.jsx)(_.a,{align:"right",children:e.address}),Object(T.jsx)(_.a,{align:"right",children:e.inn})]},e.name)}))})]})})]})})},F=(n(268),n(70)),H="AUTH_START",V="AUTH_SUCCESS",R="AUTH_FAIL",W="AUTH_LOGOUT",J=function(e){return{type:V,token:e}},M=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:W}},X=function(e){return function(t){setTimeout((function(){t(M())}),1e3*e)}},z=function(e,t){return function(n){n({type:H}),y.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),n(J(t)),n(X(3600))})).catch((function(e){n({type:R,error:e})}))}},G=function(e){var t=e.name,n=e.label,a=e.type,r=void 0===a?"text":a,c=e.required,i=void 0!==c&&c;return Object(T.jsx)("div",{className:"formikField",children:Object(T.jsx)(g.b,{required:i,autoComplete:"off",as:b.a,label:n,name:t,fullWidth:!0,type:r,helperText:Object(T.jsx)(g.a,{name:t})})})},K={username:"",password:""},Q=f.b().shape({name:f.c().min(4,"Too Short!").required("Required"),password:f.c().min(5,"Too Short!").required("Required")}),Y=function(e){var t=Object(F.b)(),n=Object(l.f)();return Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(T.jsxs)("div",{className:"login",children:[Object(T.jsx)("h1",{children:"Sign Up"}),Object(T.jsx)(g.d,{initialValues:K,onSubmit:function(e){t(z(e.name,e.password).then((function(e){n.push("/")})))},validationSchema:Q,children:function(e){var t=e.dirty,n=e.isValid;return Object(T.jsxs)(g.c,{children:[Object(T.jsx)(G,{name:"name",label:"Name",required:!0}),Object(T.jsx)(G,{name:"password",type:"password",label:"Password",required:!0}),Object(T.jsx)(p.a,{variant:"contained",color:"primary",disabled:!t||!n,type:"submit",children:"Primary"})]})}})]})})},Z=(n(270),function(){return Object(T.jsxs)("nav",{children:[Object(T.jsxs)("div",{className:"logo",children:["Test",Object(T.jsx)("font",{children:"Project"})]}),Object(T.jsxs)("ul",{className:"menu-list",children:[Object(T.jsx)("li",{children:Object(T.jsx)(s.b,{exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(T.jsx)("li",{children:Object(T.jsx)(s.b,{exact:!0,to:"/login",activeClassName:"active",children:"Login"})})]})]})});var $=function(){return Object(T.jsx)(s.a,{children:Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(Z,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{path:"/",exact:!0,children:Object(T.jsx)(k,{})}),Object(T.jsx)(l.a,{path:"/admin_page",exact:!0,children:Object(T.jsx)(D,{})}),Object(T.jsx)(l.a,{path:"/login",exact:!0,children:Object(T.jsx)(Y,{})})]})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,324)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},te=n(39),ne=n(130),ae=function(e,t){return Object(o.a)(Object(o.a)({},e),t)},re={token:null,error:null,loading:!1},ce=function(e,t){return ae(e,{error:null,loading:!0})},ie=function(e,t){return ae(e,{token:t.token,error:null,loading:!1})},se=function(e,t){return ae(e,{error:t.error,loading:!1})},le=function(e,t){return ae(e,{token:null})},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return ce(e);case V:return ie(e,t);case R:return se(e,t);case W:return le(e);default:return e}},je=Object(te.c)({auth:oe}),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,be=Object(te.e)(je,de(Object(te.a)(ne.a)));i.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(F.a,{store:be,children:Object(T.jsx)($,{})})}),document.getElementById("root")),ee()}},[[271,1,2]]]);
//# sourceMappingURL=main.180ff176.chunk.js.map