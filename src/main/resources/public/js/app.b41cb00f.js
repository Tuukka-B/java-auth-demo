(function(e){function t(t){for(var r,c,i=t[0],o=t[1],s=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=o;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},"8cf1":function(e,t,n){"use strict";n("df19")},9:function(e,t){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("cf05"),u=n.n(a),c=Object(r["d"])("img",{alt:"Vue logo",src:u.a},null,-1);function i(e,t,n,a,u,i){var o=Object(r["l"])("ApiTestForm");return Object(r["g"])(),Object(r["c"])(r["a"],null,[c,Object(r["f"])(o,{msg:"Welcome to Your Vue.js + TypeScript App"})],64)}var o=n("d4ec"),s=n("262e"),l=n("2caf"),d=n("9ab4"),f=n("ce1f"),p=function(e){return Object(r["j"])("data-v-6a7cd32d"),e=e(),Object(r["h"])(),e},b=p((function(){return Object(r["d"])("h3",null,"Input Data",-1)})),v=p((function(){return Object(r["d"])("br",null,null,-1)})),m={id:"myForm",ref:"myForm"},h=Object(r["e"])('<label for="first-name" data-v-6a7cd32d>Name</label><input type="text" id="first-name" required data-v-6a7cd32d><label for="surname" data-v-6a7cd32d>Surname</label><input type="text" id="surname" required data-v-6a7cd32d><label for="email" data-v-6a7cd32d>E-mail</label><input type="text" id="email" required data-v-6a7cd32d><label for="tel" data-v-6a7cd32d>Phone Number</label><input type="text" id="tel" data-v-6a7cd32d><label for="city" data-v-6a7cd32d>City</label><input type="text" id="city" data-v-6a7cd32d><label for="username" data-v-6a7cd32d>Username</label><input type="text" id="username" value="api-user" data-v-6a7cd32d><label for="password" data-v-6a7cd32d>Password</label><input type="text" id="password" value="Q29uZ3JhdHNPbkZpbmRpbmdUaGlzRWFzdGVyRWdnIQ==" data-v-6a7cd32d><input type="submit" id="submitBtn" value="SUBMIT" data-v-6a7cd32d>',15),y=[h],O=["id"];function j(e,t,n,a,u,c){return Object(r["g"])(),Object(r["c"])(r["a"],null,[b,v,Object(r["d"])("form",m,y,512),Object(r["d"])("div",{ref:"results",class:"results-div",id:e.determineResultStyle()},null,8,O)],64)}var g=n("1da1"),w=n("bee2"),x=(n("96cf"),n("159b"),n("498a"),n("4fad"),n("99af"),n("d3b7"),n("279c")),R=n.n(x),k=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(w["a"])(n,[{key:"data",value:function(){return{result:"none"}}},{key:"mounted",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$refs.myForm,t.addEventListener("submit",function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(r){var a,u,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.preventDefault(),a=t.querySelectorAll("input"),u={},a.forEach((function(e){u[e.id]=e.value})),console.log("sent data:"),console.log(u),c=u.username.trim(),i=u.password.trim(),delete u.username,delete u.password,delete u.submitBtn,n.generateMessage(c,i,u);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"afterApiRequestSuccess",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.status/400>=1)){e.next=2;break}return e.abrupt("return",this.afterApiRequestFailure(t,n));case 2:n.innerHTML="Request sent succesfully",this.$data.result="success",setTimeout((function(){"success"==r.$data.result&&(n.innerHTML="",r.$data.result="none")}),5e3);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"afterApiRequestFailure",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,a="",Object.entries(r).forEach((function(e){a+="".concat(e[0],": ").concat(e[1],"<br>")})),n.innerHTML=a,this.$data.result="error",setTimeout((function(){"error"==u.$data.result&&(n.innerHTML="",u.$data.result="none")}),5e3),this.$refs.myForm.reset();case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"determineResultStyle",value:function(){switch(this.$data.result){case"success":return"api-success";case"error":return"api-error";case"none":return}}},{key:"generateMessage",value:function(e,t,n){var r=this,a=new Headers;a.set("Authorization","Basic "+e+":"+t),a.append("Content-Type","application/json"),a.append("Access-Control-Allow-Origin","https://localhost:8080");var u="$2a$10$eMwbUMmFcP78eUAix65gFe";R.a.hash(t,u,(function(t,u){a.set("Authorization",e+":"+u),r.sendData(a,n)}))}},{key:"sendData",value:function(e,t){var n=this,r=fetch("http://localhost:8080/post-data",{method:"POST",mode:"cors",headers:e,body:JSON.stringify(t)}),a=this.$refs.results;r.then(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.afterApiRequestSuccess(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.afterApiRequestFailure(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),n}(f["b"]);k=Object(d["a"])([Object(f["a"])({props:{msg:String}})],k);var S=k,A=(n("fbda"),n("6b0d")),T=n.n(A);const M=T()(S,[["render",j],["__scopeId","data-v-6a7cd32d"]]);var $=M,F=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(f["b"]);F=Object(d["a"])([Object(f["a"])({components:{ApiTestForm:$}})],F);var P=F;n("8cf1");const q=T()(P,[["render",i]]);var _=q;Object(r["b"])(_).mount("#app")},cd6b:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},df19:function(e,t,n){},fbda:function(e,t,n){"use strict";n("cd6b")}});
//# sourceMappingURL=app.b41cb00f.js.map