(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(20),s=n.n(o),r=(n.p,n(79),n(3));var i=n(53),l=n.n(i),u=n(7),j=n(72),b=n(17),h=n(64),d=n(65),O=n.n(d),g=n(66),x=n.n(g),f=n(32),p=n(35),m=n(74),v=n(54),k=n(47),C=n(71),S=n(67),y=n(52),L=n.n(y),w=n(68),F=n(73),V=n(12),D=n(55),N=n(28),H=n(21);function T(){return(T=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L.a.get("/get/stock/data?stockname=".concat(t)).then((function(e){return console.log(e.data),0===Object.keys(e.data).length?(console.log("\u7269\u4ef6\u70ba\u7a7a"),[]):e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=e.stockdata,n=(e.setclose,a.a.useState({Date:0,Open:0,High:0,Low:0,Close:0,Volume:0})),c=Object(b.a)(n,2),o=c[0],s=c[1];console.log(o);var i=new Date;if(console.log(t.length),0===t.length)return Object(r.jsx)(r.Fragment,{});var l=[];console.log(t.timestamp.length);for(var u=t.timestamp.length-1;u>0;u--){var j="",h="";i.setTime(1e3*t.timestamp[u]),t.volume[u]>t.volume[u-1]*(1+o.Volume/100)&&(j="table-danger"),t.close[u]>t.close[u-1]*(1+o.Close/100)&&(h="table-danger"),t.close[u]<t.close[u-1]*(1-o.Close/100)&&(h="table-success"),l.push(Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:i.toLocaleDateString()}),Object(r.jsx)("td",{children:t.open[u].toFixed(2)}),Object(r.jsx)("td",{children:t.high[u].toFixed(2)}),Object(r.jsx)("td",{children:t.low[u].toFixed(2)}),Object(r.jsx)("td",{className:h,children:t.close[u].toFixed(2)}),Object(r.jsx)("td",{className:j,children:t.volume[u]})]},u))}return Object(r.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Date"}),Object(r.jsx)("th",{children:"Open"}),Object(r.jsx)("th",{children:"High"}),Object(r.jsx)("th",{children:"Low"}),Object(r.jsx)("th",{children:"Close"}),Object(r.jsx)("th",{children:"Volume"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsx)(P,{range:o,setrange:s}),l]})]})}function B(e){console.log(e);var t=e.stockname,n=e.data,c=a.a.useState([]),o=Object(b.a)(c,2),s=o[0],i=o[1];return console.log(n,t,n.length),console.log(t),a.a.useEffect((function(){console.log(t),i((function(){return function(e,t){if(console.log(e),console.log(t),""===e||0===t.length)return"";console.log("start");for(var n=[],c=[],a=t.timestamp.length,o=[["day",[1]],["month",[1,2,3,4,6]]],s=0;s<a;s+=1)n.push([1e3*t.timestamp[s],Number(t.open[s].toFixed(2)),Number(t.high[s].toFixed(2)),Number(t.low[s].toFixed(2)),Number(t.close[s].toFixed(2))]),c.push([1e3*t.timestamp[s],t.volume[s]]);return console.log("69"),{rangeSelector:{selected:1,inputEnabled:!1},title:{text:e+" Historical"},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2,resize:{enabled:!0},distance:"100%",y:100}],tooltip:{split:!0},series:[{type:"candlestick",name:e,data:n,dataGrouping:{units:o}},{type:"column",name:"Volume",data:c,yAxis:1,dataGrouping:{units:o}}],plotOptions:{candlestick:{color:"green",upColor:"red"}}}}(t,n)}))}),[n]),t&&0!==n.length?(console.log(s),0===s.length?Object(r.jsx)(w.a,{animation:"border"}):Object(r.jsx)(x.a,{highcharts:O.a,constructorType:"stockChart",options:s})):Object(r.jsx)(F.a,{variant:"danger",children:"No Stock"})}function E(e){var t=e.setSearch,n=e.setResult,c=e.setList,a=e.setdata,o=e.searchText,s=e.stocklist;return Object(r.jsxs)(p.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(p.a.Brand,{children:"STOCK"}),Object(r.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(m.a,{className:"mr-auto",children:Object(r.jsx)(v.a,{title:"\u6700\u611b",children:s.map((function(e,t){return Object(r.jsx)(v.a.Item,{herf:"#",value:e,onClick:function(){return function(e){n(e)}(e)},children:e},t)}))})}),Object(r.jsxs)(C.a,{inline:!0,children:[Object(r.jsx)(k.a,{type:"text",placeholder:"Stockname",className:"mr-sm-2",val:o,onChange:function(e){t(e.target.value)}}),Object(r.jsx)(f.a,{variant:"outline-success",onClick:function(){n(o),console.log(o),function(e){return T.apply(this,arguments)}(o).then((function(e){return a(e)}))},children:"Search"}),Object(r.jsx)(f.a,{variant:"primary",onClick:function(){-1===s.indexOf(o)&&c([].concat(Object(j.a)(s),[o]))},children:"\u52a0\u5165\u6700\u611b"})]})]})]})}function P(e){var t=e.range,n=e.setrange,c=a.a.useState({Date:"Date",Open:"Open",High:"High",Low:"Low",Close:"Close",Volume:"Volume"}),o=Object(b.a)(c,2),s=o[0],i=o[1],l=[{title:s.Date,action:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Date:e+"%"})})),n((function(t){return Object(u.a)(Object(u.a)({},t),{},{Date:e})}))}},{title:s.Open,action:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Open:e+"%"})})),n((function(t){return Object(u.a)(Object(u.a)({},t),{},{Open:e})}))}},{title:s.High,action:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{High:e+"%"})})),n((function(t){return Object(u.a)(Object(u.a)({},t),{},{High:e})}))}},{title:s.Low,action:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Low:e+"%"})})),n((function(t){return Object(u.a)(Object(u.a)({},t),{},{Low:e})}))}},{title:s.Close,action:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Close:e+"%"})})),n((function(t){return Object(u.a)(Object(u.a)({},t),{},{Close:e})}))}}];function j(e){for(var t=[],n=function(n){t.push(Object(r.jsx)(V.a.Item,{href:"#",onClick:function(){return e(n)},children:n+"%"},n))},c=1;c<10;c+=1)n(c);return t}return Object(r.jsxs)("tr",{children:[l.map((function(e){return Object(r.jsx)("td",{children:Object(r.jsx)(D.a,{title:e.title,children:j(e.action)})})})),Object(r.jsx)("td",{children:Object(r.jsx)(D.a,{title:s.Volume,children:function(){for(var e=[],c=function(c){e.push(Object(r.jsx)(V.a.Item,{href:"#",onClick:function(){return e=c,console.log(e),i((function(t){return Object(u.a)(Object(u.a)({},t),{},{Volume:e+"%"})})),console.log(t.Volume),void n((function(t){return Object(u.a)(Object(u.a)({},t),{},{Volume:e})}));var e},children:c+"%"},c))},a=10;a<100;a+=10)c(a);return e}()})})]})}var R=function(){var e=a.a.useState(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=a.a.useState(""),s=Object(b.a)(o,2),i=s[0],l=s[1],u=a.a.useState("0"),j=Object(b.a)(u,2),h=(j[0],j[1],a.a.useState([])),d=Object(b.a)(h,2),O=d[0],g=d[1],x=a.a.useState([]),f=Object(b.a)(x,2),p=f[0],m=f[1],v=a.a.useState(0),k=Object(b.a)(v,2),C=(k[0],k[1]);return console.log(O,p),Object(r.jsxs)("div",{children:[Object(r.jsx)(N.a,{children:Object(r.jsx)(H.a,{children:Object(r.jsx)(E,{setSearch:c,setResult:l,setList:g,setdata:m,searchText:n,stocklist:O})})}),Object(r.jsx)(N.a,{children:Object(r.jsx)(H.a,{children:Object(r.jsx)(B,{stockname:i,data:p})})}),Object(r.jsx)(N.a,{children:Object(r.jsx)(H.a,{children:Object(r.jsx)(I,{stockdata:p,setclose:C})})})]})},z=n(69),A=n.n(z);var G=function(){console.log(fetch("/login").then((function(e){return e.text()})));var e=function(e){console.log(e.googleId)};return Object(r.jsx)(A.a,{clientId:"718990108790-il6qfr68ffivhvdbpte6l1f6m77lvt7e.apps.googleusercontent.com",buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))},W=n(70);n(105);n(52).default.defaults.baseURL="http://localhost:8080",s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(W.a,{className:"p-3",children:[Object(r.jsx)(R,{}),Object(r.jsx)(N.a,{children:Object(r.jsx)(H.a,{children:Object(r.jsx)(G,{})})})]})}),document.getElementById("googleButton")),J()},79:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.692eb924.chunk.js.map