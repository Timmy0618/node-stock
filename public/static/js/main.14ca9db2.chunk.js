(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),i=n.n(r),s=(n.p,n(53),n(5));var o=n(17),l=n.n(o),u=n(47),h=n(18),j=n(37),d=n(40),b=n.n(d),p=n(41),x=n.n(p),O=n(26),f=n(27),g=n(48),m=n(39),v=n(33),k=n(46),y=n(42);function C(){return(C=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/get_stock_data?stockname=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(t,n){var c,a,r,i,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),""!==t){e.next=3;break}return e.abrupt("return","");case 3:for(c=[],a=[],r=n.timestamp.length,i=[["day",[1]],["month",[1,2,3,4,6]]],s=0;s<r;s+=1)c.push([1e3*n.timestamp[s],Number(n.open[s].toFixed(2)),Number(n.high[s].toFixed(2)),Number(n.low[s].toFixed(2)),Number(n.close[s].toFixed(2))]),a.push([1e3*n.timestamp[s],n.volume[s]]);return o={rangeSelector:{selected:1,inputEnabled:!1},title:{text:t+" Historical"},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2,resize:{enabled:!0},distance:"100%",y:100}],tooltip:{split:!0},series:[{type:"candlestick",name:t,data:c,dataGrouping:{units:i}},{type:"column",name:"Volume",data:a,yAxis:1,dataGrouping:{units:i}}],plotOptions:{candlestick:{color:"green",upColor:"red"}}},e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t=e.data;console.log(t);for(var n=[],c=0;c<t.timestamp.length;c++)n.push(Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.timestamp[c]}),Object(s.jsx)("td",{children:t.open[c]}),Object(s.jsx)("td",{children:t.high[c]}),Object(s.jsx)("td",{children:t.low[c]}),Object(s.jsx)("td",{children:t.close[c]}),Object(s.jsx)("td",{children:t.volume[c]})]}));return Object(s.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Date"}),Object(s.jsx)("th",{children:"Open"}),Object(s.jsx)("th",{children:"High"}),Object(s.jsx)("th",{children:"Low"}),Object(s.jsx)("th",{children:"Close"}),Object(s.jsx)("th",{children:"Volume"})]})}),Object(s.jsx)("tbody",{children:n})]})}function N(e){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(l.a.mark((function e(t){var n,c,r,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.stockname,c=t.data,r=a.a.useState([]),i=Object(h.a)(r,2),o=i[0],u=i[1],console.log(c,n,c.length),a.a.useEffect((function(){console.log(n),S(n,c).then((function(e){u(e)}))}),[n]),n){e.next=7;break}return e.abrupt("return",Object(s.jsx)("h1",{children:"no stockname"}));case 7:if(0!==o.length){e.next=9;break}return e.abrupt("return",Object(s.jsx)("h1",{children:"Loading"}));case 9:return e.abrupt("return",Object(s.jsx)(x.a,{highcharts:b.a,constructorType:"stockChart",options:o}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=a.a.useState(""),t=Object(h.a)(e,2),n=t[0],c=t[1],r=a.a.useState(""),i=Object(h.a)(r,2),o=i[0],l=i[1],j=a.a.useState("0"),d=Object(h.a)(j,2),b=(d[0],d[1],a.a.useState([])),p=Object(h.a)(b,2),x=p[0],y=p[1],S=a.a.useState([]),w=Object(h.a)(S,2),L=w[0],B=w[1];return console.log(x),Object(s.jsxs)("div",{children:[Object(s.jsxs)(f.a,{bg:"light",expand:"lg",children:[Object(s.jsx)(f.a.Brand,{children:"React-Bootstrap"}),Object(s.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(f.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsx)(g.a,{className:"mr-auto",children:Object(s.jsx)(m.a,{title:"\u6700\u611b",children:x.map((function(e,t){return Object(s.jsx)(m.a.Item,{herf:"#",value:e,onClick:function(){return function(e){l(e)}(e)},children:e},t)}))})}),Object(s.jsxs)(k.a,{inline:!0,children:[Object(s.jsx)(v.a,{type:"text",placeholder:"Stockname",className:"mr-sm-2",val:n,onChange:function(e){c(e.target.value)}}),Object(s.jsx)(O.a,{variant:"outline-success",onClick:function(){l(n),B(function(e){return C.apply(this,arguments)}(o))},children:"Search"}),Object(s.jsx)(O.a,{variant:"primary",onClick:function(){-1===x.indexOf(n)&&y([].concat(Object(u.a)(x),[n]))},children:"\u52a0\u5165\u6700\u611b"})]})]})]}),Object(s.jsx)(N,{stockname:o,data:L}),Object(s.jsx)(F,{data:L})]})},I=n(43),T=n.n(I);var _=function(){console.log(fetch("/login").then((function(e){return e.text()})));var e=function(e){console.log(e.googleId)};return Object(s.jsx)(T.a,{clientId:"718990108790-il6qfr68ffivhvdbpte6l1f6m77lvt7e.apps.googleusercontent.com",buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},H=n(44),P=n(45),V=n(34);n(61);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(H.a,{className:"p-3",children:Object(s.jsx)(P.a,{children:Object(s.jsxs)(V.a,{children:[Object(s.jsx)(B,{}),Object(s.jsx)(_,{})]})})})}),document.getElementById("googleButton")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.14ca9db2.chunk.js.map