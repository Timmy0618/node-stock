(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(13),i=n.n(o),s=(n.p,n(53),n(5));var r=n(37),l=n.n(r),j=n(47),h=n(17),d=n(39),u=n(40),b=n.n(u),x=n(41),g=n.n(x),p=n(25),O=n(26),m=n(48),f=n(38),v=n(32),k=n(46),y=n(42);function C(){return(C=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/get_stock_data?stockname=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=e.data;if(console.log(t),0===t.length)return Object(s.jsx)(s.Fragment,{});for(var n=[],c=0;c<t.timestamp.length;c++)n.push(Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.timestamp[c]}),Object(s.jsx)("td",{children:t.open[c]}),Object(s.jsx)("td",{children:t.high[c]}),Object(s.jsx)("td",{children:t.low[c]}),Object(s.jsx)("td",{children:t.close[c]}),Object(s.jsx)("td",{children:t.volume[c]})]}));return Object(s.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Date"}),Object(s.jsx)("th",{children:"Open"}),Object(s.jsx)("th",{children:"High"}),Object(s.jsx)("th",{children:"Low"}),Object(s.jsx)("th",{children:"Close"}),Object(s.jsx)("th",{children:"Volume"})]})}),Object(s.jsx)("tbody",{children:n})]})}function F(e){console.log(e);var t=e.stockname,n=e.data,c=a.a.useState([]),o=Object(h.a)(c,2),i=o[0],r=o[1];return console.log(n,t,n.length),console.log(t),r(function(e,t){if(console.log(e),console.log(t),""===e||0===t.length)return"";for(var n=[],c=[],a=t.timestamp.length,o=[["day",[1]],["month",[1,2,3,4,6]]],i=0;i<a;i+=1)n.push([1e3*t.timestamp[i],Number(t.open[i].toFixed(2)),Number(t.high[i].toFixed(2)),Number(t.low[i].toFixed(2)),Number(t.close[i].toFixed(2))]),c.push([1e3*t.timestamp[i],t.volume[i]]);return{rangeSelector:{selected:1,inputEnabled:!1},title:{text:e+" Historical"},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2,resize:{enabled:!0},distance:"100%",y:100}],tooltip:{split:!0},series:[{type:"candlestick",name:e,data:n,dataGrouping:{units:o}},{type:"column",name:"Volume",data:c,yAxis:1,dataGrouping:{units:o}}],plotOptions:{candlestick:{color:"green",upColor:"red"}}}}(t,n)),t?(console.log(i),0===i.length?Object(s.jsx)("h1",{children:"Loading"}):Object(s.jsx)(g.a,{highcharts:b.a,constructorType:"stockChart",options:i})):Object(s.jsx)("h1",{children:"no stockname"})}var w=function(){var e=a.a.useState(""),t=Object(h.a)(e,2),n=t[0],c=t[1],o=a.a.useState(""),i=Object(h.a)(o,2),r=i[0],l=i[1],d=a.a.useState("0"),u=Object(h.a)(d,2),b=(u[0],u[1],a.a.useState([])),x=Object(h.a)(b,2),g=x[0],y=x[1],w=a.a.useState([]),N=Object(h.a)(w,2),L=N[0],B=N[1];return console.log(g),Object(s.jsxs)("div",{children:[Object(s.jsxs)(O.a,{bg:"light",expand:"lg",children:[Object(s.jsx)(O.a.Brand,{children:"React-Bootstrap"}),Object(s.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsx)(m.a,{className:"mr-auto",children:Object(s.jsx)(f.a,{title:"\u6700\u611b",children:g.map((function(e,t){return Object(s.jsx)(f.a.Item,{herf:"#",value:e,onClick:function(){return function(e){l(e)}(e)},children:e},t)}))})}),Object(s.jsxs)(k.a,{inline:!0,children:[Object(s.jsx)(v.a,{type:"text",placeholder:"Stockname",className:"mr-sm-2",val:n,onChange:function(e){c(e.target.value)}}),Object(s.jsx)(p.a,{variant:"outline-success",onClick:function(){l(n),function(e){return C.apply(this,arguments)}(n).then((function(e){return B(e)}))},children:"Search"}),Object(s.jsx)(p.a,{variant:"primary",onClick:function(){-1===g.indexOf(n)&&y([].concat(Object(j.a)(g),[n]))},children:"\u52a0\u5165\u6700\u611b"})]})]})]}),Object(s.jsx)(F,{stockname:r,data:L}),Object(s.jsx)(S,{data:L})]})},N=n(43),L=n.n(N);var B=function(){console.log(fetch("/login").then((function(e){return e.text()})));var e=function(e){console.log(e.googleId)};return Object(s.jsx)(L.a,{clientId:"718990108790-il6qfr68ffivhvdbpte6l1f6m77lvt7e.apps.googleusercontent.com",buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))},T=n(44),_=n(45),H=n(33);n(61);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(T.a,{className:"p-3",children:Object(s.jsx)(_.a,{children:Object(s.jsxs)(H.a,{children:[Object(s.jsx)(w,{}),Object(s.jsx)(B,{})]})})})}),document.getElementById("googleButton")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.23374a05.chunk.js.map