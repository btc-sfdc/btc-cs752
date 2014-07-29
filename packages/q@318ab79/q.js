(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){return function(){return H.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===tt(e)||e instanceof U}function i(e,t){if(V&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(nt)){for(var n=[],i=t;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(e.stack);var a=n.join("\n"+nt+"\n");e.stack=r(a)}}function r(e){for(var t=e.split("\n"),n=[],i=0;t.length>i;++i){var r=t[i];o(r)||a(r)||!r||n.push(r)}return n.join("\n")}function a(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function s(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(e);return i?[i[1],Number(i[2])]:void 0}function o(e){var t=s(e);if(!t)return!1;var n=t[0],i=t[1];return n===G&&i>=q&&st>=i}function l(){if(V)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],i=s(n);if(!i)return;return G=i[0],i[1]}}function c(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function u(e){return v(e)?e:_(e)?T(e):S(e)}function h(){function e(e){t=e,a.source=e,K(n,function(t,n){Y(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,i=void 0}var t,n=[],i=[],r=$(h.prototype),a=$(p.prototype);if(a.promiseDispatch=function(e,r,a){var s=X(arguments);n?(n.push(s),"when"===r&&a[1]&&i.push(a[1])):Y(function(){t.promiseDispatch.apply(t,s)})},a.valueOf=function(){if(n)return a;var e=g(t);return v(e)&&(t=e),e},a.inspect=function(){return t?t.inspect():{state:"pending"}},u.longStackSupport&&V)try{throw Error()}catch(s){a.stack=s.stack.substring(s.stack.indexOf("\n")+1)}return r.promise=a,r.resolve=function(n){t||e(u(n))},r.fulfill=function(n){t||e(S(n))},r.reject=function(n){t||e(x(n))},r.notify=function(e){t||K(i,function(t,n){Y(function(){n(e)})},void 0)},r}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=h();try{e(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}return t.promise}function m(e){return d(function(t,n){for(var i=0,r=e.length;r>i;i++)u(e[i]).then(t,n)})}function p(e,t,n){void 0===t&&(t=function(e){return x(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=$(p.prototype);if(i.promiseDispatch=function(n,r,a){var s;try{s=e[r]?e[r].apply(i,a):t.call(i,r,a)}catch(o){s=x(o)}n&&n(s)},i.inspect=n,n){var r=n();"rejected"===r.state&&(i.exception=r.reason),i.valueOf=function(){var e=n();return"pending"===e.state||"rejected"===e.state?i:e.value}}return i}function f(e,t,n,i){return u(e).then(t,n,i)}function g(e){if(v(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function v(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function _(e){return t(e)&&"function"==typeof e.then}function b(e){return v(e)&&"pending"===e.inspect().state}function y(e){return!v(e)||"fulfilled"===e.inspect().state}function C(e){return v(e)&&"rejected"===e.inspect().state}function w(){it.length=0,rt.length=0,at||(at=!0)}function L(e,t){at&&(rt.push(e),t&&t.stack!==void 0?it.push(t.stack):it.push("(no stack) "+t))}function M(e){if(at){var t=Z(rt,e);-1!==t&&(rt.splice(t,1),it.splice(t,1))}}function x(e){var t=p({when:function(t){return t&&M(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return L(t,e),t}function S(e){return p({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return et(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function T(e){var t=h();return Y(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function E(e){return p({isDef:function(){}},function(t,n){return z(e,t,n)},function(){return u(e).inspect()})}function D(e,t,n){return u(e).spread(t,n)}function O(e){return function(){function t(e,t){var s;if("undefined"==typeof StopIteration){try{s=i[e](t)}catch(o){return x(o)}return s.done?s.value:f(s.value,r,a)}try{s=i[e](t)}catch(o){return n(o)?o.value:x(o)}return f(s,r,a)}var i=e.apply(this,arguments),r=t.bind(t,"next"),a=t.bind(t,"throw");return r()}}function A(e){u.done(u.async(e)())}function P(e){throw new U(e)}function I(e){return function(){return D([this,R(arguments)],function(t,n){return e.apply(t,n)})}}function z(e,t,n){return u(e).dispatch(t,n)}function R(e){return f(e,function(e){var t=0,n=h();return K(e,function(i,r,a){var s;v(r)&&"fulfilled"===(s=r.inspect()).state?e[a]=s.value:(++t,f(r,function(i){e[a]=i,0===--t&&n.resolve(e)},n.reject,function(e){n.notify({index:a,value:e})}))},void 0),0===t&&n.resolve(e),n.promise})}function B(e){return f(e,function(e){return e=J(e,u),f(R(J(e,function(e){return f(e,W,W)})),function(){return e})})}function N(e){return u(e).allSettled()}function F(e,t){return u(e).then(void 0,void 0,t)}function k(e,t){return u(e).nodeify(t)}var V=!1;try{throw Error()}catch(j){V=!!j.stack}var G,U,q=l(),W=function(){},Y=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var r=t.domain;r&&(t.domain=void 0,r.enter());try{n()}catch(s){if(a)throw r&&r.exit(),setTimeout(e,0),r&&r.enter(),s;setTimeout(function(){throw s},0)}r&&r.exit()}i=!1}var t={task:void 0,next:null},n=t,i=!1,r=void 0,a=!1;if(Y=function(e){n=n.next={task:e,domain:a&&process.domain,next:null},i||(i=!0,r())},"undefined"!=typeof process&&process.nextTick)a=!0,r=function(){process.nextTick(e)};else if("function"==typeof setImmediate)r="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var s=new MessageChannel;s.port1.onmessage=function(){r=o,s.port1.onmessage=e,e()};var o=function(){s.port2.postMessage(0)};r=function(){setTimeout(e,0),o()}}else r=function(){setTimeout(e,0)};return Y}(),H=Function.call,X=e(Array.prototype.slice),K=e(Array.prototype.reduce||function(e,t){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(t=e(t,this[n],n));return t}),Z=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),J=e(Array.prototype.map||function(e,t){var n=this,i=[];return K(n,function(r,a,s){i.push(e.call(t,a,s,n))},void 0),i}),$=Object.create||function(e){function t(){}return t.prototype=e,new t},Q=e(Object.prototype.hasOwnProperty),et=Object.keys||function(e){var t=[];for(var n in e)Q(e,n)&&t.push(n);return t},tt=e(Object.prototype.toString);U="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var nt="From previous event:";u.resolve=u,u.nextTick=Y,u.longStackSupport=!1,u.defer=h,h.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(X(arguments,1)):e.resolve(n)}},u.Promise=d,u.promise=d,d.race=m,d.all=R,d.reject=x,d.resolve=u,u.passByCopy=function(e){return e},p.prototype.passByCopy=function(){return this},u.join=function(e,t){return u(e).join(t)},p.prototype.join=function(e){return u([this,e]).spread(function(e,t){if(e===t)return e;throw Error("Can't join: not the same: "+e+" "+t)})},u.race=m,p.prototype.race=function(){return this.then(u.race)},u.makePromise=p,p.prototype.toString=function(){return"[object Promise]"},p.prototype.then=function(e,t,n){function r(t){try{return"function"==typeof e?e(t):t}catch(n){return x(n)}}function a(e){if("function"==typeof t){i(e,o);try{return t(e)}catch(n){return x(n)}}return x(e)}function s(e){return"function"==typeof n?n(e):e}var o=this,l=h(),c=!1;return Y(function(){o.promiseDispatch(function(e){c||(c=!0,l.resolve(r(e)))},"when",[function(e){c||(c=!0,l.resolve(a(e)))}])}),o.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=s(e)}catch(i){if(n=!0,!u.onerror)throw i;u.onerror(i)}n||l.notify(t)}]),l.promise},u.when=f,p.prototype.thenResolve=function(e){return this.then(function(){return e})},u.thenResolve=function(e,t){return u(e).thenResolve(t)},p.prototype.thenReject=function(e){return this.then(function(){throw e})},u.thenReject=function(e,t){return u(e).thenReject(t)},u.nearer=g,u.isPromise=v,u.isPromiseAlike=_,u.isPending=b,p.prototype.isPending=function(){return"pending"===this.inspect().state},u.isFulfilled=y,p.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},u.isRejected=C,p.prototype.isRejected=function(){return"rejected"===this.inspect().state};var it=[],rt=[],at=!0;u.resetUnhandledRejections=w,u.getUnhandledReasons=function(){return it.slice()},u.stopUnhandledRejectionTracking=function(){w(),at=!1},w(),u.reject=x,u.fulfill=S,u.master=E,u.spread=D,p.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},u.async=O,u.spawn=A,u["return"]=P,u.promised=I,u.dispatch=z,p.prototype.dispatch=function(e,t){var n=this,i=h();return Y(function(){n.promiseDispatch(i.resolve,e,t)}),i.promise},u.get=function(e,t){return u(e).dispatch("get",[t])},p.prototype.get=function(e){return this.dispatch("get",[e])},u.set=function(e,t,n){return u(e).dispatch("set",[t,n])},p.prototype.set=function(e,t){return this.dispatch("set",[e,t])},u.del=u["delete"]=function(e,t){return u(e).dispatch("delete",[t])},p.prototype.del=p.prototype["delete"]=function(e){return this.dispatch("delete",[e])},u.mapply=u.post=function(e,t,n){return u(e).dispatch("post",[t,n])},p.prototype.mapply=p.prototype.post=function(e,t){return this.dispatch("post",[e,t])},u.send=u.mcall=u.invoke=function(e,t){return u(e).dispatch("post",[t,X(arguments,2)])},p.prototype.send=p.prototype.mcall=p.prototype.invoke=function(e){return this.dispatch("post",[e,X(arguments,1)])},u.fapply=function(e,t){return u(e).dispatch("apply",[void 0,t])},p.prototype.fapply=function(e){return this.dispatch("apply",[void 0,e])},u["try"]=u.fcall=function(e){return u(e).dispatch("apply",[void 0,X(arguments,1)])},p.prototype.fcall=function(){return this.dispatch("apply",[void 0,X(arguments)])},u.fbind=function(e){var t=u(e),n=X(arguments,1);return function(){return t.dispatch("apply",[this,n.concat(X(arguments))])}},p.prototype.fbind=function(){var e=this,t=X(arguments);return function(){return e.dispatch("apply",[this,t.concat(X(arguments))])}},u.keys=function(e){return u(e).dispatch("keys",[])},p.prototype.keys=function(){return this.dispatch("keys",[])},u.all=R,p.prototype.all=function(){return R(this)},u.allResolved=c(B,"allResolved","allSettled"),p.prototype.allResolved=function(){return B(this)},u.allSettled=N,p.prototype.allSettled=function(){return this.then(function(e){return R(J(e,function(e){function t(){return e.inspect()}return e=u(e),e.then(t,t)}))})},u.fail=u["catch"]=function(e,t){return u(e).then(void 0,t)},p.prototype.fail=p.prototype["catch"]=function(e){return this.then(void 0,e)},u.progress=F,p.prototype.progress=function(e){return this.then(void 0,void 0,e)},u.fin=u["finally"]=function(e,t){return u(e)["finally"](t)},p.prototype.fin=p.prototype["finally"]=function(e){return e=u(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},u.done=function(e,t,n,i){return u(e).done(t,n,i)},p.prototype.done=function(e,t,n){var r=function(e){Y(function(){if(i(e,a),!u.onerror)throw e;u.onerror(e)})},a=e||t||n?this.then(e,t,n):this;"object"==typeof process&&process&&process.domain&&(r=process.domain.bind(r)),a.then(void 0,r)},u.timeout=function(e,t,n){return u(e).timeout(t,n)},p.prototype.timeout=function(e,t){var n=h(),i=setTimeout(function(){n.reject(Error(t||"Timed out after "+e+" ms"))},e);return this.then(function(e){clearTimeout(i),n.resolve(e)},function(e){clearTimeout(i),n.reject(e)},n.notify),n.promise},u.delay=function(e,t){return void 0===t&&(t=e,e=void 0),u(e).delay(t)},p.prototype.delay=function(e){return this.then(function(t){var n=h();return setTimeout(function(){n.resolve(t)},e),n.promise})},u.nfapply=function(e,t){return u(e).nfapply(t)},p.prototype.nfapply=function(e){var t=h(),n=X(e);return n.push(t.makeNodeResolver()),this.fapply(n).fail(t.reject),t.promise},u.nfcall=function(e){var t=X(arguments,1);return u(e).nfapply(t)},p.prototype.nfcall=function(){var e=X(arguments),t=h();return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise},u.nfbind=u.denodeify=function(e){var t=X(arguments,1);return function(){var n=t.concat(X(arguments)),i=h();return n.push(i.makeNodeResolver()),u(e).fapply(n).fail(i.reject),i.promise}},p.prototype.nfbind=p.prototype.denodeify=function(){var e=X(arguments);return e.unshift(this),u.denodeify.apply(void 0,e)},u.nbind=function(e,t){var n=X(arguments,2);return function(){function i(){return e.apply(t,arguments)}var r=n.concat(X(arguments)),a=h();return r.push(a.makeNodeResolver()),u(i).fapply(r).fail(a.reject),a.promise}},p.prototype.nbind=function(){var e=X(arguments,0);return e.unshift(this),u.nbind.apply(void 0,e)},u.nmapply=u.npost=function(e,t,n){return u(e).npost(t,n)},p.prototype.nmapply=p.prototype.npost=function(e,t){var n=X(t||[]),i=h();return n.push(i.makeNodeResolver()),this.dispatch("post",[e,n]).fail(i.reject),i.promise},u.nsend=u.nmcall=u.ninvoke=function(e,t){var n=X(arguments,2),i=h();return n.push(i.makeNodeResolver()),u(e).dispatch("post",[t,n]).fail(i.reject),i.promise},p.prototype.nsend=p.prototype.nmcall=p.prototype.ninvoke=function(e){var t=X(arguments,1),n=h();return t.push(n.makeNodeResolver()),this.dispatch("post",[e,t]).fail(n.reject),n.promise},u.nodeify=k,p.prototype.nodeify=function(e){return e?(this.then(function(t){Y(function(){e(null,t)})},function(t){Y(function(){e(t)})}),void 0):this};var st=l();return u});