(this["webpackJsonpflash-card-generator"]=this["webpackJsonpflash-card-generator"]||[]).push([[0],{12:function(e,t,n){e.exports={layout:"LandingPage_layout__sZx6f",hero:"LandingPage_hero__2LIpi",subheading:"LandingPage_subheading__KWzsU",btnContainer:"LandingPage_btnContainer__3Y-lB",about:"LandingPage_about__1Sdnc",contact:"LandingPage_contact__1i5KT",formContainer:"LandingPage_formContainer__1A3Bp"}},27:function(e,t,n){e.exports={btn:"Button_btn__1Lkv5",primary:"Button_primary__I_9I9",secondary:"Button_secondary__1gv5E"}},29:function(e,t,n){e.exports={linkBtn:"LinkButton_linkBtn__3t95S",primary:"LinkButton_primary__1gK4X",secondary:"LinkButton_secondary__3Wop5"}},4:function(e,t,n){e.exports={modalCloseBtn:"CardBuilder_modalCloseBtn__28u9W",noPrintContainer:"CardBuilder_noPrintContainer__3uiNc",cardBuilderContainer:"CardBuilder_cardBuilderContainer__321_J",cardItem:"CardBuilder_cardItem__3Yw7o",cardBuilder:"CardBuilder_cardBuilder__1-TML",formContainer:"CardBuilder_formContainer__2U-SC",deleteIcon:"CardBuilder_deleteIcon__2tKgj",cardFront:"CardBuilder_cardFront__2ZsvS",cardBack:"CardBuilder_cardBack__30C_h",editIcon:"CardBuilder_editIcon__ej095",modal:"CardBuilder_modal__3Gpew",previewContainer:"CardBuilder_previewContainer__1t0z1",editModal:"CardBuilder_editModal__20SRu",previewBtn:"CardBuilder_previewBtn__1ROgs"}},40:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n.n(a),c=(n(40),n(16)),i=n(3),s=n(25),o=n.n(s),d=n(17),l=n(30),j=n(8),u=n(2),b=n(14),h=n(13),O=n(7),m=n.n(O),f=n(1),x=function(e){var t=e.children;return Object(f.jsx)("div",{className:m.a.formGroup,children:t})},_=function(e){var t=e.children,n=e.inputID;return Object(f.jsx)("label",{className:m.a.formLabel,htmlFor:n,children:t})},p=function(e){var t=e.type,n=e.name,a=e.id,r=e.value,c=e.required,i=void 0!==c&&c,s=e.onChange;function o(e){s(e.target.name,e.target.value)}return i?Object(f.jsx)("input",{className:m.a.formInput,type:t,name:n,id:a,value:r,onChange:function(e){return o(e)},required:!0}):Object(f.jsx)("input",{className:m.a.formInput,type:t,name:n,id:a,value:r,onChange:function(e){return o(e)}})},v=function(e){var t=e.children;return Object(f.jsx)("input",{className:m.a.submitButton,type:"submit",value:t})},g=n(52),C=n(4),B=n.n(C),y=function(e){var t=e.addCardToStack,n=Object(u.useState)({id:"",front:"",back:""}),a=Object(j.a)(n,2),r=a[0],c=a[1];function i(e,t){c(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},e,t)))}return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Object(h.a)(Object(h.a)({},r),{},{id:Object(g.a)()});t(n),c({id:"",front:"",back:""})},className:B.a.formContainer,children:[Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"front",children:"Front"}),Object(f.jsx)(p,{type:"text",name:"front",id:"front",value:r.front,required:!1,onChange:i})]}),Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"back",children:"Back"}),Object(f.jsx)(p,{type:"text",name:"back",id:"back",value:r.back,required:!1,onChange:i})]}),Object(f.jsx)(v,{children:"Add"})]})},k=n(21),w=n(26),N=function(e){var t=e.card,n=e.deleteCard,a=e.populateEditModal;return Object(f.jsxs)("li",{className:B.a.cardItem,children:[Object(f.jsx)(k.b,{className:B.a.deleteIcon,onClick:function(){return n(t.id)}}),Object(f.jsxs)("div",{className:B.a.cardFront,onClick:function(){return a(t.id,!1)},children:[Object(f.jsx)(w.a,{className:B.a.editIcon}),Object(f.jsx)("p",{children:t.front})]}),Object(f.jsxs)("div",{className:B.a.cardBack,onClick:function(){return a(t.id,!1)},children:[Object(f.jsx)(w.a,{className:B.a.editIcon}),Object(f.jsx)("p",{children:t.back})]})]})},S=function(e){var t=e.cardStack,n=e.deleteCard,a=e.populateEditModal;return Object(f.jsxs)("section",{className:B.a.cardList,children:[Object(f.jsx)("h2",{children:"Your Cards"}),Object(f.jsx)("ul",{children:t.map((function(e){return Object(f.jsx)(N,{card:e,deleteCard:n,populateEditModal:a},e.id)}))})]})},I=n(34),F=n(27),P=n.n(F),L=function(e){var t=e.children,n=e.type,a=e.onClick;function r(){a&&a()}return Object(f.jsx)("button",{className:"".concat(P.a.btn," ").concat(P.a.primary),type:n,onClick:function(){return r()},children:t})},E=n(31),T=n.n(E),q=n(6),J=n.n(q),D=function(e){var t=e.id,n=e.cardSide,a=e.isFront,r=e.withBorder;return Object(f.jsx)(f.Fragment,{children:r?Object(f.jsx)("div",{className:J.a.card,children:Object(f.jsx)("div",{className:"".concat(J.a.cardBody," ").concat(J.a.withBorder),children:Object(f.jsx)("p",{children:a?n.front:n.back})})},t):Object(f.jsx)("div",{className:J.a.card,children:Object(f.jsx)("div",{className:J.a.cardBody,children:Object(f.jsx)("p",{children:a?n.front:n.back})})},t)})},M=function(e){var t=e.togglePreview,n=Object(u.useState)([]),a=Object(j.a)(n,2),r=a[0],c=a[1],i=Object(u.useState)(!1),s=Object(j.a)(i,2),o=s[0],l=s[1],b=Object(u.useRef)(null);Object(u.useEffect)((function(){var e=localStorage.getItem("cards");if(null!==e){var t=JSON.parse(e);c(t)}}),[o]);var h=[];return Object(f.jsxs)("div",{className:J.a.previewLayout,ref:b,children:[Object(f.jsxs)("header",{children:[Object(f.jsx)(k.a,{className:J.a.modalCloseBtn,onClick:function(){return t()}}),Object(f.jsx)("h1",{children:"Preview"}),Object(f.jsx)("p",{children:"Scroll to see next pages"})]}),Object(f.jsxs)("div",{className:J.a.previewBody,children:[Object(f.jsx)("div",{className:J.a.pageContainer,children:(function(){for(var e=r,t=[],n=e.length;n>0;)if(e.length>=10){var a=[e.splice(0,10)];t=[].concat(Object(d.a)(t),[a[0]]),n-=10}else{var c=[e.splice(0,e.length)];t=[].concat(Object(d.a)(t),[c[0]]),n=0}h=t}(),h.map((function(e){return Object(f.jsxs)("div",{className:J.a.preview,children:[Object(f.jsx)("div",{className:J.a.pageInnerContainerFront,children:e.map((function(e){return Object(f.jsx)(D,{id:Object(g.a)(),cardSide:e,isFront:!0,withBorder:o})}))},Object(g.a)()),Object(f.jsx)("div",{className:J.a.pageInnerContainerBack,children:e.map((function(e){return Object(f.jsx)(D,{id:Object(g.a)(),cardSide:e,isFront:!1,withBorder:o})}))},Object(g.a)())]},Object(g.a)())})))}),Object(f.jsxs)("span",{className:J.a.checkboxFormGroup,children:[Object(f.jsx)("input",{type:"checkbox",name:"showBorder",onChange:function(e){"showBorder"===e.target.name&&l(!o)}}),Object(f.jsx)(_,{inputID:"front",children:"Show Border"})]}),Object(f.jsx)(T.a,{trigger:function(){return Object(f.jsx)(L,{type:"button",children:"Print"})},content:function(){return b.current},documentTitle:"Flash Cards",pageStyle:"margin: 1.2cm 1cm"})]})]})},A=function(e){var t=e.cardToEdit,n=e.updateCardStack,a=Object(u.useState)({id:t.id,front:t.front,back:t.back}),r=Object(j.a)(a,2),c=r[0],i=r[1];function s(e,t){i(Object(h.a)(Object(h.a)({},c),{},Object(b.a)({},e,t)))}return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(c,!0),i({id:"",front:"",back:""})},className:B.a.editModal,children:[Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"front",children:"Front"}),Object(f.jsx)(p,{type:"text",name:"front",id:"front",value:c.front,required:!1,onChange:s})]}),Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"back",children:"Back"}),Object(f.jsx)(p,{type:"text",name:"back",id:"back",value:c.back,required:!1,onChange:s})]}),Object(f.jsx)(v,{children:"Save"})]})},G=function(){var e=Object(u.useState)((function(){var e=localStorage.getItem("cards");return null!==e&&JSON.parse(e)||[]})),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)(!1),i=Object(j.a)(r,2),s=i[0],b=i[1],h=Object(u.useState)(!1),O=Object(j.a)(h,2),m=O[0],x=O[1],_=Object(u.useState)({id:"",front:"",back:""}),p=Object(j.a)(_,2),v=p[0],g=p[1];function C(){return(C=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===n.length&&a([t]),r=[].concat(Object(d.a)(n),[t]),localStorage.setItem("cards",JSON.stringify(r)),a(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){x(!e)}function w(){b(!s)}return Object(u.useEffect)((function(){var e=localStorage.getItem("cards");if(null!==e){var t=JSON.parse(e);a(t)}}),[s,m]),Object(f.jsxs)("div",{className:B.a.cardBuilder,children:[Object(f.jsxs)("header",{children:[Object(f.jsxs)(c.b,{to:"/",className:B.a.backLink,children:[Object(f.jsx)(I.a,{})," Back Home"]}),Object(f.jsx)("h1",{children:"Card Builder"})]}),Object(f.jsxs)("main",{children:[Object(f.jsx)(y,{addCardToStack:function(e){return function(e){return C.apply(this,arguments)}(e)}}),Object(f.jsx)("span",{className:B.a.previewBtn,children:Object(f.jsx)(L,{type:"button",onClick:function(){return w()},children:"Preview and Print"})}),n.length>0?Object(f.jsx)(S,{cardStack:n,deleteCard:function(e){var t=n.filter((function(t){return t.id!==e}));localStorage.setItem("cards",JSON.stringify(t)),a(Object(d.a)(t))},populateEditModal:function(e,t){k(t);var a=n,r=a.findIndex((function(t){return t.id===e}));g(a[r])}}):null,s?Object(f.jsx)("div",{className:B.a.modal,children:Object(f.jsx)("div",{className:B.a.previewContainer,children:Object(f.jsx)(M,{cardStack:n,togglePreview:w})})}):"",m?Object(f.jsx)(A,{cardToEdit:v,updateCardStack:function(e,t){k(t);var r=n,c=r.findIndex((function(t){return t.id===e.id}));r[c]=e,a(r),localStorage.setItem("cards",JSON.stringify(r)),g({id:"",front:"",back:""})}}):null]})]})},K=n(29),W=n.n(K),Y=function(e){var t=e.children,n=e.href,a=e.type;return Object(f.jsx)("a",{href:n,className:"".concat(W.a.linkBtn," ").concat(W.a[a]),children:t})},Z=n(12),R=n.n(Z),U=function(){return Object(f.jsxs)("header",{className:R.a.hero,children:[Object(f.jsx)("h1",{children:"flashy"}),Object(f.jsx)("p",{className:R.a.subheading,children:"Create flash cards - lightning fast"}),Object(f.jsxs)("div",{className:R.a.btnContainer,children:[Object(f.jsx)(Y,{href:"/build",type:"primary",children:"Try it out!"}),Object(f.jsx)(Y,{href:"#about",type:"secondary",children:"Find out more"})]})]})},z=function(){return Object(f.jsxs)("section",{id:"about",className:R.a.about,children:[Object(f.jsx)("header",{children:Object(f.jsxs)("h2",{children:["About ",Object(f.jsx)("em",{children:"flashy"})]})}),Object(f.jsxs)("p",{children:["Ever needed some flash cards? Ever tried to do that stuff in an everyday text processor? It can get annoying quite fast, especially with all those formatting issues. And don't get me started on layouts.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"With ",Object(f.jsx)("em",{children:"flashy"})," you can easily create flash cards in... well in a flash! No more hassle.",Object(f.jsx)("br",{}),"Simply build your flash cards with our easy to navigate user interface. Flashy will then handle all the layout for printing itself.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Enjoy!"]})]})},H=function(e){var t=e.name,n=e.id,a=e.value,r=e.required,c=void 0!==r&&r,i=e.onChange;function s(e){i(e.target.name,e.target.value)}return c?Object(f.jsx)("textarea",{className:m.a.formTextArea,name:t,id:n,value:a,required:!0,onChange:function(e){return s(e)},rows:5}):Object(f.jsx)("textarea",{className:m.a.formTextArea,name:t,id:n,value:a,onChange:function(e){return s(e)},rows:5})},V=function(){var e=Object(u.useState)({name:"",email:"",message:""}),t=Object(j.a)(e,2),n=t[0],a=t[1];function r(e,t){a(Object(h.a)(Object(h.a)({},n),{},Object(b.a)({},e,t)))}return Object(f.jsxs)("form",{className:m.a.formContainer,onSubmit:function(e){e.preventDefault(),a({name:"",email:"",message:""})},children:[Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"name",children:"Name"}),Object(f.jsx)(p,{type:"text",name:"name",id:"name",value:n.name,required:!0,onChange:r})]}),Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"email",children:"Email"}),Object(f.jsx)(p,{type:"email",name:"email",id:"email",value:n.email,required:!0,onChange:r})]}),Object(f.jsxs)(x,{children:[Object(f.jsx)(_,{inputID:"message",children:"Message"}),Object(f.jsx)(H,{name:"message",id:"message",value:n.message,required:!0,onChange:r})]}),Object(f.jsx)(v,{children:"Send"})]})},X=function(){return Object(f.jsxs)("section",{className:R.a.contact,children:[Object(f.jsx)("header",{children:Object(f.jsx)("h2",{children:"Contact"})}),Object(f.jsx)("div",{className:R.a.formContainer,children:Object(f.jsx)(V,{})})]})},Q=function(){return Object(f.jsxs)("div",{className:R.a.layout,children:[Object(f.jsx)(U,{}),Object(f.jsx)(z,{}),Object(f.jsx)(X,{})]})},$=function(){return Object(f.jsxs)("main",{children:[Object(f.jsx)("h1",{children:"404 - Page Not Found"}),Object(f.jsx)(c.b,{to:"/",children:"Back Home"})]})},ee=function(){return Object(f.jsx)(c.a,{children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",children:Object(f.jsx)(Q,{})}),Object(f.jsx)(i.a,{exact:!0,path:"/build",children:Object(f.jsx)(G,{})}),Object(f.jsx)(i.a,{path:"*",children:Object(f.jsx)($,{})})]})})};var te=function(){return Object(f.jsx)(ee,{})};r.a.render(Object(f.jsx)(te,{}),document.getElementById("root"))},6:function(e,t,n){e.exports={previewLayout:"Preview_previewLayout__1gWJa",modalCloseBtn:"Preview_modalCloseBtn__3MqEL",checkboxFormGroup:"Preview_checkboxFormGroup__3wFyd",pageContainer:"Preview_pageContainer__16UJ5",preview:"Preview_preview__BWsGK",pageInnerContainerFront:"Preview_pageInnerContainerFront__2-VFj",pageInnerContainerBack:"Preview_pageInnerContainerBack__2nb8S",card:"Preview_card__kkkor",withBorder:"Preview_withBorder__2bkjZ",cardBody:"Preview_cardBody__TcLJ3",cardFooter:"Preview_cardFooter__1KTl1",previewBody:"Preview_previewBody__1VJa-"}},7:function(e,t,n){e.exports={formGroup:"Form_formGroup__1ZK03",formLabel:"Form_formLabel__3fysd",formInput:"Form_formInput__38YrW",formTextArea:"Form_formTextArea__1b__p",submitButton:"Form_submitButton__1P8b9"}}},[[51,1,2]]]);
//# sourceMappingURL=main.dd8afd90.chunk.js.map