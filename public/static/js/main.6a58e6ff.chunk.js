(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),i=n.n(o),s=(n.p,n(52),n(6));var r=n(37),l=n.n(r),u=n(46),h=n(17),j=n(39),d=n(40),g=n.n(d),b=n(41),p=n.n(b),f=n(25),x=n(26),m=n(47),O=n(38),v=n(32),k=n(45);function y(){return(y=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/get_stock_data?stockname=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){console.log(e);var t=e.stockname,n=e.data,a=c.a.useState([]),o=Object(h.a)(a,2),i=o[0],r=o[1];return console.log(n,t,n.length),console.log(t),c.a.useEffect((function(){console.log(t),r((function(){return function(e,t){if(console.log(e),console.log(t),""===e||0===t.length)return"";console.log("start");for(var n=[],a=[],c=t.timestamp.length,o=[["day",[1]],["month",[1,2,3,4,6]]],i=0;i<c;i+=1)n.push([1e3*t.timestamp[i],Number(t.open[i].toFixed(2)),Number(t.high[i].toFixed(2)),Number(t.low[i].toFixed(2)),Number(t.close[i].toFixed(2))]),a.push([1e3*t.timestamp[i],t.volume[i]]);return console.log("69"),{rangeSelector:{selected:1,inputEnabled:!1},title:{text:e+" Historical"},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2,resize:{enabled:!0},distance:"100%",y:100}],tooltip:{split:!0},series:[{type:"candlestick",name:e,data:n,dataGrouping:{units:o}},{type:"column",name:"Volume",data:a,yAxis:1,dataGrouping:{units:o}}],plotOptions:{candlestick:{color:"green",upColor:"red"}}}}(t,n)}))}),[t]),t?(console.log(i),0===i.length?Object(s.jsx)("h1",{children:"Loading"}):Object(s.jsx)(p.a,{highcharts:g.a,constructorType:"stockChart",options:i})):Object(s.jsx)("h1",{children:"no stockname"})}var C=function(){var e=c.a.useState(""),t=Object(h.a)(e,2),n=t[0],a=t[1],o=c.a.useState(""),i=Object(h.a)(o,2),r=i[0],l=i[1],j=c.a.useState("0"),d=Object(h.a)(j,2),g=(d[0],d[1],c.a.useState([])),b=Object(h.a)(g,2),p=b[0],C=b[1],F=c.a.useState([]),N=Object(h.a)(F,2),w=N[0],B=N[1];return console.log(p),Object(s.jsxs)("div",{children:[Object(s.jsxs)(x.a,{bg:"light",expand:"lg",children:[Object(s.jsx)(x.a.Brand,{children:"React-Bootstrap"}),Object(s.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(x.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsx)(m.a,{className:"mr-auto",children:Object(s.jsx)(O.a,{title:"\u6700\u611b",children:p.map((function(e,t){return Object(s.jsx)(O.a.Item,{herf:"#",value:e,onClick:function(){return function(e){l(e)}(e)},children:e},t)}))})}),Object(s.jsxs)(k.a,{inline:!0,children:[Object(s.jsx)(v.a,{type:"text",placeholder:"Stockname",className:"mr-sm-2",val:n,onChange:function(e){a(e.target.value)}}),Object(s.jsx)(f.a,{variant:"outline-success",onClick:function(){l(n),function(e){return y.apply(this,arguments)}(n).then((function(e){return B(e)}))},children:"Search"}),Object(s.jsx)(f.a,{variant:"primary",onClick:function(){-1===p.indexOf(n)&&C([].concat(Object(u.a)(p),[n]))},children:"\u52a0\u5165\u6700\u611b"})]})]})]}),Object(s.jsx)(S,{stockname:r,data:w})]})},F=n(42),N=n.n(F);var w=function(){console.log(fetch("/login").then((function(e){return e.text()})));var e=function(e){console.log(e.googleId)};return Object(s.jsx)(N.a,{clientId:"718990108790-il6qfr68ffivhvdbpte6l1f6m77lvt7e.apps.googleusercontent.com",buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))},I=n(43),L=n(44),T=n(33);n(60);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(I.a,{className:"p-3",children:Object(s.jsx)(L.a,{children:Object(s.jsxs)(T.a,{children:[Object(s.jsx)(C,{}),Object(s.jsx)(w,{})]})})})}),document.getElementById("googleButton")),B()}},[[61,1,2]]]);
//# sourceMappingURL=main.6a58e6ff.chunk.js.map