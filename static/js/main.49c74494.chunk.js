(this.webpackJsonpdumbaes=this.webpackJsonpdumbaes||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=(n(11),n(1)),u=n.n(i),s=n(2),l=n(3),p=(n(13),"d3cb286e9224ada5664ed1aa0235b4adedd50689"),d="12345678b0z2345n",f=new TextEncoder,h=new TextDecoder;function w(){var e=Object(r.useState)("6k3teSVVjbc6AxRpghGZ6Zxq2igsO6ZTaw+7tC9y7pSWObcZBydHsuuykMaOtr/xKSD8uA7lVkurGPkv7vK469AOkWkJBS2IuiMU8ploCziWvffkhyiSS2MRUEp9aRlH/9gdGuR5tAfMZEz4zHjqkt0eAfDe6y8yozwYWxIHSMzYHzFe37e5FaA/XXYXBQEz5/i9SKSNJsms002OrJCljVcHl4jCD7m1y3o7hBuaonGKpc9iY3+s3DIdqRJ8nP2Fa5cJx/IkDoiVvsyAVkq/Aue3pd6Fub4uzB5nambt0JVYAIO+GORdRwiLiuDIA4EvrKLZYv6z8CKkHdqjfC8KJmTRFwa+kwm2pLuUwaLIGSI="),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),i=Object(l.a)(c,2),u=i[0],s=i[1],d=Object(r.useState)(""),f=Object(l.a)(d,2),h=f[0],w=f[1],y=Object(r.useState)(null),m=Object(l.a)(y,2),g=m[0],k=m[1];return a.a.createElement("div",{className:"App"},a.a.createElement("textarea",{rows:"8",cols:"80",placeholder:"input",value:n,onChange:function(e){return o(e.target.value)}}),a.a.createElement("div",{id:"buttons"},a.a.createElement("input",{id:"key",type:"text",placeholder:"key",maxLength:"32",value:u,onChange:function(e){return s(e.target.value)}}),a.a.createElement("button",{onClick:function(){return function(e,t,n,r){return v.apply(this,arguments)}(u,n,w,k)}},"Encrypt"),a.a.createElement("button",{onClick:function(){return function(e,t,n,r){return b.apply(this,arguments)}(u,n,w,k)}},"Decrypt")),a.a.createElement("div",{id:"errors"},g),a.a.createElement("textarea",{rows:"8",cols:"80",placeholder:"output",value:h,readOnly:!0}),a.a.createElement("footer",null,a.a.createElement("span",{title:"version"},p.substring(0,7))))}function v(){return(v=Object(s.a)(u.a.mark((function e(t,n,r,a){var o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:return o=e.sent,e.next=6,y(o,n);case 6:c=e.sent,a(null),r(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),a("Error: Could not encrypt.");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(u.a.mark((function e(t,n,r,a){var o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:return o=e.sent,e.next=6,g(o,n);case 6:c=e.sent,a(null),r(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),a("Error: Could not decrypt.");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(e,t){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S,e.next=3,window.crypto.subtle.encrypt({name:"AES-CBC",iv:f.encode(d)},t,f.encode(n));case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=h,e.next=3,window.crypto.subtle.decrypt({name:"AES-CBC",iv:f.encode(d)},t,C(n));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.decode.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.crypto.subtle.importKey("raw",f.encode(t.padEnd(32,"\0")),{name:"AES-CBC",length:256},!0,["encrypt","decrypt"]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){var t=window.atob(e);return f.encode(t)}function S(e){for(var t="",n=new Uint8Array(e),r=0;r<n.byteLength;++r)t+=String.fromCharCode(n[r]);return window.btoa(t)}var O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dumbaes",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dumbaes","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.49c74494.chunk.js.map