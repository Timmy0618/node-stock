(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),i=(n.p,n(52),n(6));var s=n(37),l=n.n(s),u=n(46),j=n(17),b=n(39),h=(n(40),n(41),n(25)),d=n(26),f=n(47),p=n(38),g=n(32),O=n(45);function x(){return(x=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/get_stock_data?stockname=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=a.a.useState(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=a.a.useState(""),o=Object(j.a)(r,2),s=(o[0],o[1]),l=a.a.useState("0"),b=Object(j.a)(l,2),v=(b[0],b[1],a.a.useState([])),m=Object(j.a)(v,2),k=m[0],S=m[1],y=a.a.useState([]),C=Object(j.a)(y,2),B=(C[0],C[1]);return console.log(k),Object(i.jsx)("div",{children:Object(i.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(i.jsx)(d.a.Brand,{children:"React-Bootstrap"}),Object(i.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(i.jsx)(f.a,{className:"mr-auto",children:Object(i.jsx)(p.a,{title:"\u6700\u611b",children:k.map((function(e,t){return Object(i.jsx)(p.a.Item,{herf:"#",value:e,onClick:function(){return function(e){s(e)}(e)},children:e},t)}))})}),Object(i.jsxs)(O.a,{inline:!0,children:[Object(i.jsx)(g.a,{type:"text",placeholder:"Stockname",className:"mr-sm-2",val:n,onChange:function(e){c(e.target.value)}}),Object(i.jsx)(h.a,{variant:"outline-success",onClick:function(){s(n),function(e){return x.apply(this,arguments)}(n).then((function(e){return B(e)}))},children:"Search"}),Object(i.jsx)(h.a,{variant:"primary",onClick:function(){-1===k.indexOf(n)&&S([].concat(Object(u.a)(k),[n]))},children:"\u52a0\u5165\u6700\u611b"})]})]})]})})},m=n(42),k=n.n(m);var S=function(){console.log(fetch("/login").then((function(e){return e.text()})));var e=function(e){console.log(e.googleId)};return Object(i.jsx)(k.a,{clientId:"718990108790-il6qfr68ffivhvdbpte6l1f6m77lvt7e.apps.googleusercontent.com",buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},C=n(43),B=n(44),F=n(33);n(60);o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(C.a,{className:"p-3",children:Object(i.jsx)(B.a,{children:Object(i.jsxs)(F.a,{children:[Object(i.jsx)(v,{}),Object(i.jsx)(S,{})]})})})}),document.getElementById("googleButton")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.5f2634f8.chunk.js.map