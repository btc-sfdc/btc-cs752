(function(){var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],i=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,t=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,s="undefined"!=typeof location&&location.href,a=s&&location.protocol&&location.protocol.replace(/\:/,""),u=s&&location.hostname,n=s&&(location.port||void 0),r=[];define(function(){var l,o,c;return"undefined"!=typeof window&&window.navigator&&window.document?o=function(e,i){var t=l.createXhr();t.open("GET",e,!0),t.onreadystatechange=function(){4===t.readyState&&i(t.responseText)},t.send(null)}:"undefined"!=typeof process&&process.versions&&process.versions.node?(c=require.nodeRequire("fs"),o=function(e,i){var t=c.readFileSync(e,"utf8");0===t.indexOf("﻿")&&(t=t.substring(1)),i(t)}):"undefined"!=typeof Packages&&(o=function(e,i){var t,s,a="utf-8",u=new java.io.File(e),n=java.lang.System.getProperty("line.separator"),r=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(u),a)),l="";try{for(t=new java.lang.StringBuffer,s=r.readLine(),s&&s.length()&&65279===s.charAt(0)&&(s=s.substring(1)),t.append(s);null!==(s=r.readLine());)t.append(n),t.append(s);l=""+t+""}finally{r.close()}i(l)}),l={version:"1.0.7",strip:function(e){if(e){e=e.replace(i,"");var s=e.match(t);s&&(e=s[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var i,t,s;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(t=0;3>t;t++){s=e[t];try{i=new ActiveXObject(s)}catch(a){}if(i){e=[s];break}}if(!i)throw Error("createXhr(): XMLHttpRequest not available");return i},get:o,parseName:function(e){var i=!1,t=e.indexOf("."),s=e.substring(0,t),a=e.substring(t+1,e.length);return t=a.indexOf("!"),-1!==t&&(i=a.substring(t+1,a.length),i="strip"===i,a=a.substring(0,t)),{moduleName:s,ext:a,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,i,t,s){var a,u,n,r=l.xdRegExp.exec(e);return r?(a=r[2],u=r[3],u=u.split(":"),n=u[1],u=u[0],!(a&&a!==i||u&&u!==t||(n||u)&&n!==s)):!0},finishLoad:function(e,i,t,s,a){t=i?l.strip(t):t,a.isBuild&&(r[e]=t),s(t)},load:function(e,i,t,r){if(r.isBuild&&!r.inlineText)return t(),void 0;var o=l.parseName(e),c=o.moduleName+"."+o.ext,m=i.toUrl(c),d=r&&r.text&&r.text.useXhr||l.useXhr;!s||d(m,a,u,n)?l.get(m,function(i){l.finishLoad(e,o.strip,i,t,r)}):i([c],function(e){l.finishLoad(o.moduleName+"."+o.ext,o.strip,e,t,r)})},write:function(e,i,t){if(i in r){var s=l.jsEscape(r[i]);t.asModule(e+"!"+i,"define(function () { return '"+s+"';});\n")}},writeFile:function(e,i,t,s,a){var u=l.parseName(i),n=u.moduleName+"."+u.ext,r=t.toUrl(u.moduleName+"."+u.ext)+".js";l.load(n,t,function(){var i=function(e){return s(r,e)};i.asModule=function(e,i){return s.asModule(e,r,i)},l.write(e,n,i,a)},a)}}})})();