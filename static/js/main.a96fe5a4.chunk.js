(this["webpackJsonpflash-card-generator"]=this["webpackJsonpflash-card-generator"]||[]).push([[0],{10:function(e,t,r){e.exports={previewLayout:"Preview_previewLayout__1gWJa",pageInnerContainerFront:"Preview_pageInnerContainerFront__2-VFj",card:"Preview_card__kkkor",cardBody:"Preview_cardBody__TcLJ3",withBorder:"Preview_withBorder__2bkjZ",cardFooter:"Preview_cardFooter__1KTl1",pageInnerContainerBack:"Preview_pageInnerContainerBack__2nb8S"}},17:function(e,t,r){e.exports={navbar:"Layout_navbar__2Jj_v",logo:"Layout_logo__2c34V",footer:"Layout_footer__7ZyTp"}},19:function(e,t,r){e.exports={btn:"Button_btn__1Lkv5",btnPrimary:"Button_btnPrimary__g_WP5",btnSecondary:"Button_btnSecondary__1e7dV"}},3:function(e,t,r){e.exports={cardBuilder:"CardBuilder_cardBuilder__1-TML",previewBtn:"CardBuilder_previewBtn__1ROgs",formContainer:"CardBuilder_formContainer__2U-SC",formGroup:"CardBuilder_formGroup__20Zns",charsLeft:"CardBuilder_charsLeft__3q9wf",submitContainer:"CardBuilder_submitContainer__3R_1h",cardsContainer:"CardBuilder_cardsContainer__2s9qv",cardList:"CardBuilder_cardList__1WTIc",cardItem:"CardBuilder_cardItem__3Yw7o",cardFront:"CardBuilder_cardFront__2ZsvS",cardBack:"CardBuilder_cardBack__30C_h",cardBody:"CardBuilder_cardBody__eKxsl",cardFooter:"CardBuilder_cardFooter__1plLn",btnContainer:"CardBuilder_btnContainer__eyOUg",editIcon:"CardBuilder_editIcon__ej095",deleteIcon:"CardBuilder_deleteIcon__2tKgj",editModal:"CardBuilder_editModal__20SRu",editContainer:"CardBuilder_editContainer__kOgiO",hidden:"CardBuilder_hidden__2taET",controls:"CardBuilder_controls__1y9l-"}},30:function(e,t,r){},38:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var a=r(23),n=r.n(a),c=(r(38),r(13)),o=r(4),i=r(17),s=r.n(i),d=r(1),l=function(){return Object(d.jsx)("footer",{className:s.a.footer,children:Object(d.jsx)("small",{children:"\xa9 Copyright 2021, David Beer"})})},j=function(){return Object(d.jsx)("nav",{className:s.a.navbar,children:Object(d.jsx)(c.b,{to:"/",className:s.a.logo,children:"hedgeyCards"})})},u=function(e){var t=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),t,Object(d.jsx)(l,{})]})},b=r(25),f=r.n(b),O=r(15),m=r(28),h=r(9),x=r(19),p=r.n(x),_=function(e){var t=e.children,r=e.type,a=e.isPrimary,n=e.onClick;function c(){n&&n()}return a?Object(d.jsx)("button",{className:"".concat(p.a.btn," ").concat(p.a.btnPrimary),type:r,onClick:function(){return c()},children:t}):Object(d.jsx)("button",{className:"".concat(p.a.btn," ").concat(p.a.btnSecondary),type:r,onClick:function(){return c()},children:t})},v=r(2),k=r(29),B=r.n(k),C=r(14),g=r(11),N=r(30),F=r.n(N),y=function(e){var t=e.children,r=e.inputID;return Object(d.jsx)("label",{className:F.a.formLabel,htmlFor:r,children:t})},S=r(50),I=r(3),w=r.n(I),L=function(e){var t=e.addCardToStack,r=Object(v.useState)({id:"",front:"",back:"",footerFront:"",footerBack:""}),a=Object(h.a)(r,2),n=a[0],c=a[1],o=Object(v.useState)({front:140,back:140,footerFront:140,footerBack:140}),i=Object(h.a)(o,2),s=i[0],l=i[1];Object(v.useEffect)((function(){var e=140;l({front:e-n.front.length,back:e-n.back.length,footerFront:e-n.footerFront.length,footerBack:e-n.footerBack.length})}),[n]);var j=Object(v.useRef)(null);function u(e){c(Object(g.a)(Object(g.a)({},n),{},Object(C.a)({},e.target.name,e.target.value)))}return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=Object(g.a)(Object(g.a)({},n),{},{id:Object(S.a)()});t(r),c({id:"",front:"",back:"",footerFront:"",footerBack:""}),j.current&&j.current.focus()},className:w.a.formContainer,children:[Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"front",children:"Front"}),Object(d.jsx)("input",{type:"text",name:"front",id:"front",value:n.front,ref:j,onChange:function(e){return u(e)},maxLength:140,required:!0}),Object(d.jsxs)("small",{className:w.a.charsLeft,children:[s.front," left"]})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"back",children:"Back"}),Object(d.jsx)("input",{type:"text",name:"back",id:"back",value:n.back,onChange:function(e){return u(e)},maxLength:140,required:!0}),Object(d.jsxs)("small",{className:w.a.charsLeft,children:[s.back," left"]})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"footerFront",children:"Footer Front"}),Object(d.jsx)("input",{type:"text",name:"footerFront",id:"footerFront",value:n.footerFront,onChange:function(e){return u(e)},maxLength:140}),Object(d.jsxs)("small",{className:w.a.charsLeft,children:[s.footerFront," left"]})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"footerFront",children:"Footer Back"}),Object(d.jsx)("input",{type:"text",name:"footerBack",id:"footerBack",value:n.footerBack,onChange:function(e){return u(e)},maxLength:140}),Object(d.jsxs)("small",{className:w.a.charsLeft,children:[s.footerBack," left"]})]}),Object(d.jsx)("span",{className:w.a.submitContainer,children:Object(d.jsx)("input",{type:"submit",value:" + ",className:w.a.submitBtn})})]})},P=r(32),D=r(31),T=function(e){var t=e.card,r=e.deleteCard,a=e.populateEditModal;return Object(d.jsxs)("li",{className:w.a.cardItem,children:[Object(d.jsxs)("div",{className:w.a.cardFront,onClick:function(){return a(t.id,!1)},children:[Object(d.jsx)("p",{className:w.a.cardBody,children:t.front}),t.footerFront?Object(d.jsx)("small",{className:w.a.cardFooter,children:t.footerFront}):null]}),Object(d.jsxs)("div",{className:w.a.cardBack,onClick:function(){return a(t.id,!1)},children:[Object(d.jsx)("p",{className:w.a.cardBody,children:t.back}),t.footerBack?Object(d.jsx)("small",{className:w.a.cardFooter,children:t.footerBack}):null]}),Object(d.jsxs)("div",{className:w.a.btnContainer,children:[Object(d.jsx)(D.a,{className:w.a.editIcon,onClick:function(){return a(t.id,!1)}}),Object(d.jsx)(P.a,{className:w.a.deleteIcon,onClick:function(){return r(t.id)}})]})]})},E=function(e){var t=e.cardStack,r=e.deleteCard,a=e.populateEditModal;return Object(d.jsx)("section",{className:w.a.cardList,children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(T,{card:e,deleteCard:r,populateEditModal:a},e.id)}))})})},J=function(e){var t=e.cardToEdit,r=e.updateCardStack,a=Object(v.useState)({id:t.id,front:t.front,back:t.back,footerFront:t.footerFront,footerBack:t.footerBack}),n=Object(h.a)(a,2),c=n[0],o=n[1];function i(e){o(Object(g.a)(Object(g.a)({},c),{},Object(C.a)({},e.target.name,e.target.value)))}return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(c,!0),o({id:"",front:"",back:"",footerFront:"",footerBack:""})},className:w.a.editForm,children:[Object(d.jsx)("h3",{children:"EDIT"}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"front",children:"Front"}),Object(d.jsx)("input",{type:"text",name:"front",id:"front",value:c.front,onChange:function(e){return i(e)}})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"back",children:"Back"}),Object(d.jsx)("input",{type:"text",name:"back",id:"back",value:c.back,onChange:function(e){return i(e)}})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"footerFront",children:"Footer Front"}),Object(d.jsx)("input",{type:"text",name:"footerFront",id:"footerFront",value:c.footerFront,onChange:function(e){return i(e)}})]}),Object(d.jsxs)("div",{className:w.a.formGroup,children:[Object(d.jsx)(y,{inputID:"footerBack",children:"Footer Back"}),Object(d.jsx)("input",{type:"text",name:"footerBack",id:"footerBack",value:c.footerBack,onChange:function(e){return i(e)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save"})]})},G=r(10),M=r.n(G),R=function(e){var t=e.id,r=e.cardSide,a=e.isFront;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:M.a.card,children:[Object(d.jsx)("div",{className:M.a.cardBody,children:Object(d.jsx)("p",{children:a?r.front:r.back})}),Object(d.jsx)("div",{className:M.a.cardFooter,children:Object(d.jsx)("p",{children:a?r.footerFront:r.footerBack})})]},t)})},q=function(e){var t=e.cardStack,r=(e.togglePreview,[]);return Object(d.jsx)("div",{className:M.a.pageContainer,children:(function(){for(var e=t.slice(),a=[],n=e.length;n>0;)if(e.length>=10){var c=[e.splice(0,10)];a=[].concat(Object(O.a)(a),[c[0]]),n-=10}else{var o=[e.splice(0,e.length)];a=[].concat(Object(O.a)(a),[o[0]]),n=0}r=a}(),r.map((function(e){return Object(d.jsxs)("div",{className:M.a.preview,children:[Object(d.jsx)("div",{className:M.a.pageInnerContainerFront,children:e.map((function(e){return Object(d.jsx)(R,{id:Object(S.a)(),cardSide:e,isFront:!0})}))},Object(S.a)()),Object(d.jsx)("div",{className:M.a.pageInnerContainerBack,children:e.map((function(e){return Object(d.jsx)(R,{id:Object(S.a)(),cardSide:e,isFront:!1})}))},Object(S.a)())]},Object(S.a)())})))})},Z=function(){var e=Object(v.useState)((function(){var e=localStorage.getItem("cards");return null!==e&&JSON.parse(e)||[]})),t=Object(h.a)(e,2),r=t[0],a=t[1],n=Object(v.useState)(!1),c=Object(h.a)(n,2),o=c[0],i=c[1],s=Object(v.useState)(!1),l=Object(h.a)(s,2),j=l[0],u=l[1],b=Object(v.useState)({id:"",front:"",back:"",footerFront:"",footerBack:""}),x=Object(h.a)(b,2),p=x[0],k=x[1],C=Object(v.useRef)(null);function g(){return(g=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===r.length&&a([t]),n=[].concat(Object(O.a)(r),[t]),localStorage.setItem("cards",JSON.stringify(n)),a(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){u(!e)}return Object(v.useEffect)((function(){var e=localStorage.getItem("cards");if(null!==e){var t=JSON.parse(e);a(t)}}),[o,j]),Object(d.jsxs)("main",{className:w.a.cardBuilder,children:[Object(d.jsxs)("div",{className:w.a.controls,children:[Object(d.jsx)(L,{addCardToStack:function(e){return function(e){return g.apply(this,arguments)}(e)}}),Object(d.jsx)("div",{className:w.a.previewBtn,children:Object(d.jsx)(B.a,{trigger:function(){return Object(d.jsx)(_,{type:"button",isPrimary:!0,children:"Print"})},content:function(){return C.current},documentTitle:"Flash Cards",pageStyle:"margin: 1.2cm 1cm"})}),Object(d.jsx)("div",{className:w.a.deleteBtn,children:Object(d.jsx)(_,{type:"button",isPrimary:!1,onClick:function(){return localStorage.setItem("cards",JSON.stringify([])),void a([])},children:"Delete All Cards"})})]}),Object(d.jsx)("div",{className:w.a.cardsContainer,children:r.length>0?Object(d.jsx)(E,{cardStack:r,deleteCard:function(e){var t=r.filter((function(t){return t.id!==e}));localStorage.setItem("cards",JSON.stringify(t)),a(Object(O.a)(t))},populateEditModal:function(e,t){N(t);var a=r,n=a.findIndex((function(t){return t.id===e}));k(a[n])}}):null}),Object(d.jsx)("div",{className:w.a.hidden,ref:C,children:Object(d.jsx)(q,{cardStack:r,togglePreview:function(){i(!o)}})}),j?Object(d.jsx)("div",{className:w.a.editModal,children:Object(d.jsx)("div",{className:w.a.editContainer,children:Object(d.jsx)(J,{cardToEdit:p,updateCardStack:function(e,t){N(t);var n=r,c=n.findIndex((function(t){return t.id===e.id}));n[c]=e,a(n),localStorage.setItem("cards",JSON.stringify(n)),k({id:"",front:"",back:"",footerFront:"",footerBack:""})}})})}):null]})},K=function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)("h1",{children:"404 - Page Not Found"}),Object(d.jsx)(c.b,{to:"/",children:"Back Home"})]})},V=function(){return Object(d.jsx)(c.a,{children:Object(d.jsx)(u,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(Z,{})}),Object(d.jsx)(o.a,{path:"*",children:Object(d.jsx)(K,{})})]})})})};var W=function(){return Object(d.jsx)(V,{})};n.a.render(Object(d.jsx)(W,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a96fe5a4.chunk.js.map