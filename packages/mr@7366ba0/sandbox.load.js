montageDefine("7366ba0","sandbox",{dependencies:[],factory:function(e,t,i){i.exports=function(e,t,i){for(var n=e.resolve(t),r=e.getModuleDescriptor(n);r.redirect||r.mappingRedirect;)r.redirect?n=r.redirect:(e=r.mappingRequire,n=r.mappingRedirect),r=e.getModuleDescriptor(n);return e.deepLoad(n).then(function(){var t=r.exports;delete r.exports;var a=r.factory;r.factory=function(e,t,n){var r=function(t){return t in i?i[t]:e(t)},s=JSON.parse(JSON.stringify(n)),o=s.exports;return a(r,o,s)||s.exports};var s=e(n);return r.exports=t,r.factory=a,s})}}});